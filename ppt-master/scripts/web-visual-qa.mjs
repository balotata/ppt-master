#!/usr/bin/env node
import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import os from "node:os";

const args = new Map();
for (let i = 2; i < process.argv.length; i += 2) {
  args.set(process.argv[i], process.argv[i + 1]);
}

const htmlFile = args.get("--file");
const explicitUrl = args.get("--url");
const outDir = args.get("--out-dir");
const width = Number(args.get("--width") || 1280);
const height = Number(args.get("--height") || 720);

if (!htmlFile && !explicitUrl) {
  console.error("Usage: web-visual-qa.mjs --file deck.html [--out-dir screenshots] [--width 1280 --height 720]");
  console.error("   or: web-visual-qa.mjs --url http://127.0.0.1:4177/deck.html --out-dir screenshots");
  process.exit(2);
}

function findBrowser() {
  const candidates = [
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  ];
  return candidates.find(existsSync);
}

function mimeFor(file) {
  const ext = path.extname(file).toLowerCase();
  return {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css",
    ".js": "application/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
  }[ext] || "application/octet-stream";
}

async function listen(server) {
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  return server.address().port;
}

async function startStaticServer(file) {
  const root = path.dirname(path.resolve(file));
  const entry = path.basename(file);
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url, "http://127.0.0.1");
      const rel = path.normalize(decodeURIComponent(url.pathname)).replace(/^[/\\]+/, "") || entry;
      const target = path.join(root, rel);
      if (!target.startsWith(root)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }
      const data = await readFile(target);
      res.writeHead(200, { "Content-Type": mimeFor(target) });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  });
  const port = await listen(server);
  return { server, url: `http://127.0.0.1:${port}/${entry}` };
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForJson(url, timeoutMs = 10000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url);
      if (res.ok) return await res.json();
    } catch {}
    await wait(100);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

class Cdp {
  constructor(ws) {
    this.ws = ws;
    this.nextId = 1;
    this.pending = new Map();
    this.events = [];
    ws.addEventListener("message", (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
      } else if (msg.method) {
        this.events.push(msg);
      }
    });
  }

  send(method, params = {}) {
    const id = this.nextId++;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }

  async waitEvent(method, timeoutMs = 10000) {
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
      const idx = this.events.findIndex((event) => event.method === method);
      if (idx >= 0) return this.events.splice(idx, 1)[0];
      await wait(50);
    }
    throw new Error(`Timed out waiting for ${method}`);
  }
}

async function main() {
  const browserPath = findBrowser();
  if (!browserPath) throw new Error("Could not find Edge or Chrome.");

  const staticServer = htmlFile && !explicitUrl ? await startStaticServer(htmlFile) : null;
  const url = explicitUrl || staticServer.url;
  const output = path.resolve(outDir || path.join(path.dirname(path.resolve(htmlFile || ".")), "qa-screenshots"));
  await mkdir(output, { recursive: true });

  const profile = path.join(os.tmpdir(), `ppt-master-visual-qa-${Date.now()}`);
  const portServer = createServer();
  const debugPort = await listen(portServer);
  await new Promise((resolve) => portServer.close(resolve));

  const browser = spawn(browserPath, [
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    `--user-data-dir=${profile}`,
    `--remote-debugging-port=${debugPort}`,
    `--window-size=${width},${height}`,
    "about:blank",
  ], { stdio: ["ignore", "ignore", "pipe"] });

  try {
    await waitForJson(`http://127.0.0.1:${debugPort}/json/version`);
    const pageInfo = await fetch(`http://127.0.0.1:${debugPort}/json/new?${encodeURIComponent(url)}`, { method: "PUT" }).then((res) => res.json());
    const ws = new WebSocket(pageInfo.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
      ws.addEventListener("open", resolve, { once: true });
      ws.addEventListener("error", reject, { once: true });
    });
    const cdp = new Cdp(ws);
    await cdp.send("Page.enable");
    await cdp.send("Runtime.enable");
    await cdp.send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: false });
    await cdp.waitEvent("Page.loadEventFired", 15000).catch(() => {});
    await wait(500);

    const countResult = await cdp.send("Runtime.evaluate", {
      expression: "document.querySelectorAll('.slide').length",
      returnByValue: true,
    });
    const slideCount = countResult.result.value || 1;
    const report = [];

    for (let i = 0; i < slideCount; i++) {
      await cdp.send("Runtime.evaluate", {
        expression: `
          (() => {
            const slides = Array.from(document.querySelectorAll('.slide'));
            slides.forEach((s, j) => {
              const base = (s.getAttribute('class') || '').replace(/\\s*active\\b/g, '').trim();
              s.setAttribute('class', j === ${i} ? (base + ' active').trim() : base);
            });
          })()
        `,
        returnByValue: true,
      });
      await wait(650);

      const metrics = await cdp.send("Runtime.evaluate", {
        expression: `
          (() => {
            const slide = document.querySelector('.slide.active');
            const stage = document.querySelector('.deck-stage').getBoundingClientRect();
            const title = slide.querySelector('h1,h2');
            const targets = Array.from(slide.querySelectorAll('.panel,.risk,.node,.principle,.glass,.source,.source-grid,.risk-grid,.contrast,.loop,.value-map,.principles'));
            function box(el) {
              const r = el.getBoundingClientRect();
              return { left:r.left, top:r.top, right:r.right, bottom:r.bottom, width:r.width, height:r.height };
            }
            function overlap(a,b) {
              return Math.max(0, Math.min(a.right,b.right)-Math.max(a.left,b.left)) * Math.max(0, Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top));
            }
            const titleBox = title ? box(title) : null;
            const titleOverlaps = titleBox ? targets.map((el) => ({ text: el.textContent.trim().replace(/\\s+/g,' ').slice(0,80), cls: el.className, area: Math.round(overlap(titleBox, box(el))) })).filter(x => x.area > 1000) : [];
            const important = Array.from(slide.querySelectorAll('h1,h2,.lead,.quote,.panel,.risk,.node,.principle,.glass,.source'));
            const overflowing = important.filter(el => el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1).map(el => ({ text: el.textContent.trim().replace(/\\s+/g,' ').slice(0,80), cls: el.className, scrollW: el.scrollWidth, clientW: el.clientWidth, scrollH: el.scrollHeight, clientH: el.clientHeight }));
            return { slide: slide.id, title: title ? title.textContent.trim() : '', scrollHeight: document.documentElement.scrollHeight, innerHeight: window.innerHeight, stage: { width: Math.round(stage.width), height: Math.round(stage.height) }, titleOverlaps, overflowing };
          })()
        `,
        returnByValue: true,
      });

      const shot = await cdp.send("Page.captureScreenshot", { format: "png", fromSurface: true });
      const name = `slide-${String(i + 1).padStart(2, "0")}.png`;
      await writeFile(path.join(output, name), Buffer.from(shot.data, "base64"));
      report.push({ screenshot: name, ...metrics.result.value });
    }

    await writeFile(path.join(output, "report.json"), JSON.stringify({ url, width, height, slideCount, report }, null, 2));
    console.log(JSON.stringify({ outDir: output, slideCount, reportPath: path.join(output, "report.json") }, null, 2));
    ws.close();
  } finally {
    browser.kill();
    if (staticServer) await new Promise((resolve) => staticServer.server.close(resolve));
    await rm(profile, { recursive: true, force: true }).catch(() => {});
  }
}

main().catch((error) => {
  console.error(error.stack || String(error));
  process.exit(1);
});
