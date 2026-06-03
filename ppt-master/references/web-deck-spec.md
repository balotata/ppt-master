# Web Deck Spec

Use this file when creating HTML, browser-native, frontend-slide, or Remotion-ready presentations.

## File Structure

Default:

```text
<project>/
  <deck-name>.html
  assets/<deck-name>/
    hero.png
    slide-01.png
```

Use a single HTML file with inline CSS/JS unless the user asks for React, Slidev, Reveal.js, open-slide, or another framework. For substantial web decks, read `web-aesthetic-playbook.md` before visual design and `web-layout-inspiration.md` before choosing interaction/layout mechanics.

## Slide Structure

Use a fixed-ratio stage that scales to the browser viewport. Do not let slides keep a fixed pixel size that overflows the screen.

```html
<body>
  <main class="deck-viewport">
    <div class="deck-stage" id="deck-stage">
      <section class="slide active" id="slide-01" data-slide="01" data-scene="cover">
        <img class="art" src="assets/name/hero.png" alt="">
        <div class="type">Cover / Thesis</div>
        <div class="page">01 / 12</div>
        <div class="content">
          <div class="kicker">...</div>
          <h1>...</h1>
          <p class="lead">...</p>
        </div>
        <aside class="notes">...</aside>
      </section>
    </div>
  </main>
</body>
```

Use semantic animation hooks when helpful:

- `data-remotion-layer="timeline"`
- `data-flow-node="input|process|output"`
- `data-flow-edge="a-b"`
- `data-compare-panel="left|right"`
- `data-metric="growth"`
- `data-risk="dependency"`
- `data-scene="cover|timeline|mechanism|closing"`

## CSS Rules

- Default to presentation fit mode: the whole 16:9 slide must scale into the visible viewport, centered with letterboxing if needed.
- Use `html, body { width: 100%; height: 100%; margin: 0; overflow: hidden; }`.
- Use `.deck-viewport { position: fixed; inset: 0; display: grid; place-items: center; overflow: hidden; }`.
- Use `.deck-stage { position: relative; aspect-ratio: 16 / 9; width: min(100vw, calc(100vh * 16 / 9)); height: min(100vh, calc(100vw * 9 / 16)); overflow: hidden; }`.
- Use `.slide { position: absolute; inset: 0; width: 100%; height: 100%; overflow: hidden; }`.
- Do not use `min-height: 100vh`, page-scroll slide stacks, or fixed 1280/1600/1920px stages unless they are wrapped in a viewport-scaling transform that guarantees full-slide visibility.
- Use responsive constraints and stable dimensions for fixed-format elements.
- Size slide internals with percentages, `rem`, `em`, `clamp()` with conservative bounds, or container-relative units. Avoid font sizes that grow until long Chinese titles collide with visual panels.
- Keep all important content inside a safe area, usually 5-7% inset from slide edges. Navigation controls must not cover content.
- Keep cards at `8px` radius or less.
- Do not put cards inside cards.
- Define a restrained palette with one clear accent and optional secondary contrast.
- Define font stacks with legal fallbacks.
- Ensure text does not overlap or overflow on mobile or desktop.
- Avoid external network dependencies unless intentional and documented.

## Fullscreen Fit Gate

Every web deck must pass these layout gates before delivery:

- At 1920x1080, 1366x768, and 1440x900, the entire slide is visible without page scroll.
- No slide content is clipped at the bottom or sides.
- Long Chinese titles wrap intentionally and do not collide with images, panels, page numbers, or controls.
- Repeated cards, bullets, and source blocks fit inside the slide. If they do not fit, reduce content, split the slide, or change the layout.
- Presenter controls are outside the slide safe area or visually quiet enough not to cover footers.
- Body scrolling is disabled in presentation mode. Speaker notes may scroll only in a separate notes panel.

## Navigation

Include keyboard and button navigation:

- Right, PageDown, Space: next slide.
- Left, PageUp: previous slide.
- Home: first slide.
- End: last slide.

If speaker notes exist, provide a simple toggle.

## Images

- Store generated or local assets under `assets/<deck-name>/`.
- For image-rich decks, support one generated image per slide using stable names such as `slide-01.png`.
- If a slide has no image, it must have a strong proof object or typographic composition. Do not fill the gap with decorative grids, rings, or faded giant words.
- Keep core text, labels, data, and sources in DOM, not inside images.
- Generated images should avoid readable text, logos, watermarks, and brand marks.
- For product, place, person, or object-focused decks, use assets that actually reveal the subject.

## Validation

At minimum:

- HTML decodes as UTF-8.
- Slide count matches the request.
- Local asset references exist.
- Key titles, sources, and core strings exist.
- Keyboard controls are present.
- Remotion/data hooks exist where promised.

When Browser is available:

- Open the file or local server.
- Inspect cover, middle, and final slide at desktop 16:9 and one shorter viewport such as 1366x768.
- Check image loading, framing, text overlap, and responsive behavior.
- Confirm `document.documentElement.scrollHeight <= window.innerHeight + 1` in presentation mode.
- Build or inspect a real contact sheet that includes every slide, not only the cover or a representative screenshot.
- Do not repeatedly fight unstable browser automation; fall back to file-level validation and state the limit.
