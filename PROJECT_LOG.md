# PPT Master Project Log

This log records why the skill changed, what behavior is now expected, and what to read first when resuming the project on another machine.

## Resume Checklist

When restarting this project in a fresh Codex thread, read these files first:

1. `PROJECT_LOG.md`
2. `ppt-master/SKILL.md`
3. `ppt-master/references/web-deck-spec.md`
4. `ppt-master/references/web-aesthetic-playbook.md`
5. `ppt-master/references/narrative-system.md`
6. `ppt-master/references/design-quality.md`
7. `ppt-master/references/qa-rubric.md`

Then run the installer after edits:

```powershell
.\install-ppt-master-skill.ps1
```

The canonical source is `ppt-master/`. The installed local copy is `C:\Users\<you>\.codex\skills\ppt-master`.

## Project Goal

Build `ppt-master` into a SOTA presentation assistant for creating high-impact, web-native keynote decks by default, while still supporting editable PPTX when explicitly needed.

The user's preference is not "generic PPT automation." The target is a sharp, visually authored presentation workflow:

- Default output: HTML/web keynote deck.
- Default language: Chinese.
- Default voice: sharp, concise, elegant, spoken, low-AI.
- High priority: visual impact, narrative sharpness, credible research, keynote presence.
- Frequent tasks: create a deck from a specific topic; transform proposals/papers/reports into vivid visual decks; upgrade existing PPTs into high-aesthetic versions.
- Visual priority can outweigh full PPTX editability unless the user explicitly requests editable PowerPoint.
- Modern facts, companies, products, papers, and current claims should be researched by default.
- Final delivery should usually be artifact + concise QA summary.

## Important Non-Goals

- Do not submit generated local outputs to GitHub: `outputs/`, `assets/`, `.html`, `.pptx`, image files, zip packages, `node_modules/`, and local runtime files stay ignored.
- Do not optimize for bland corporate decks by default.
- Do not let framework defaults, dashboard cards, pale grids, decorative rings, or ghost words replace actual composition.
- Do not treat a file existing as sufficient completion.

## Evolution Log

### 1. Initial GitHub Skill Project

Reason:

The original workspace contained local experiment decks and a `.skill-build/ppt-master` folder. It needed to become a clean GitHub-ready skill repo.

Result:

- Created canonical installable folder `ppt-master/`.
- Added `README.md`, `.gitignore`, Windows and Unix install scripts.
- Initialized Git and pushed to `https://github.com/balotata/ppt-master`.
- Kept local sample decks and assets ignored.

### 2. General SOTA Presentation Assistant

Reason:

The initial skill was too narrowly focused on "Web-native 演示网页". The user wanted a general SOTA PPT assistant.

Result:

- Reframed `SKILL.md` as a presentation director: strategist, editor, designer, QA reviewer.
- Added task modes: create, template-following, targeted-edit, rewrite-upgrade, review, web-deck, speaker-support.
- Added references for routing, narrative, design, PPTX, web deck, research/assets, and QA.
- Retained PPTX support through the Presentations capability when explicitly needed.

### 3. User-Calibrated Defaults

Reason:

The user clarified preferences:

- Default should ask 3-5 calibration questions.
- Common tasks are topic-to-deck, material-to-visual-deck, and high-aesthetic PPT upgrade.
- More important qualities: visual impact, narrative sharpness, data/research credibility, keynote feel.
- Default Chinese voice should be sharp, spoken, low-AI.
- Research should happen automatically for source-sensitive claims.
- Visual quality should win over editability unless full PPTX editability is requested.
- Final answer should be artifact + concise QA.

Result:

- Added calibrated defaults to `SKILL.md`.
- Tightened routing and QA around these preferences.

### 4. Default Output Changed To HTML/Web Keynote

Reason:

The user observed HTML keynote decks looked much better than PPTX and wanted HTML/web deck as the default.

Result:

- Default ambiguous output is now HTML/web keynote deck.
- PPTX is used when explicitly requested for PowerPoint, editability, template fidelity, board/investor/corporate reuse, or existing deck workflows.
- Added `web-layout-inspiration.md` with open-source references:
  - Reveal.js
  - Slidev
  - open-slide
  - AuraDeck
  - StellarDeck
- Rule: borrow mechanics and layout lessons, but do not let framework defaults flatten taste.

### 5. Per-Slide Imagegen Workflow

Reason:

The user wanted to conveniently use GPT image generation for each presentation page.

Result:

- Added per-slide imagegen workflow to `research-and-assets.md`.
- Outlines now mark image need: none, hero, per-slide, real-source, or proof-object.
- For image-rich decks, generated assets should use stable names such as `slide-01.png`.
- Readable claims, titles, labels, numbers, and sources must stay in HTML DOM or PPTX text/shapes.

### 6. Recovered Early Visual Strengths

Reason:

The user felt newer outputs became less attractive and that early versions had lost bright spots.

Observed early strengths:

- Full-bleed or dominant imagery.
- Strong gradient veils.
- Huge thesis typography.
- Clear per-slide scene roles.
- Alternating moods: dark image, light statement, high-accent data, quote, mechanism, source/closing.
- Compact evidence panels instead of default card grids.
- Human, pointed Chinese copy.

Result:

- Added `web-aesthetic-playbook.md`.
- Required a dominant visual or dominant proof object on most web slides.
- Banned decorative grids, rings, ghost words, abstract line systems, repeated dashboards, and low-contrast source/table pages as main visual ideas.
- Required real contact sheets for multi-slide web decks.

### 7. Sharper Point-Making Text

Reason:

The user felt slide point text was accurate but bland.

Result:

- Added `Claim Title Craft` to `narrative-system.md`.
- Every slide needs a memorable claim line: sharp, concise, elegant, specific.
- Added weak/strong title examples.
- Added "read-alone test": if the audience sees only the title and visual, the slide argument should still be clear.
- QA now rejects bland, bureaucratic, overlong, or AI-neutral claim titles.

### 8. Theme-Matched Chinese Typography

Reason:

The user noticed Chinese fonts felt arbitrary.

Result:

- Added `Chinese Typography Direction` to `design-quality.md`.
- Design system must select typography by theme before CSS work.
- Suggested directions:
  - Editorial/research/cultural: Songti or serif-led.
  - Technology/AI/product/systems: modern geometric sans.
  - Luxury/art/keynote/philosophy: elegant high-contrast serif/display direction.
  - Gaming/dark/cyber: strong display direction where available.
  - Internet critique/roast: heavy sans, blunt large type.
  - Government/safety/incident: sober authoritative typography.
- QA now rejects arbitrary or theme-mismatched Chinese font choices.

### 9. Viewport-Fit Web Layout

Reason:

The user shared a screenshot where a web slide was clipped and did not auto-fit the browser window. The deck appeared to use fixed dimensions or overflow content rather than scaling as a presentation.

Result:

- `web-deck-spec.md` now requires a viewport-fit architecture:
  - `deck-viewport`
  - `deck-stage`
  - 16:9 stage scaled with `width: min(100vw, calc(100vh * 16 / 9))`
  - `height: min(100vh, calc(100vw * 9 / 16))`
  - `body { overflow: hidden }`
- Prohibits page-scroll slide stacks and fixed-size stages unless guaranteed to fit.
- Requires checks at 1920x1080, 1366x768, and 1440x900.
- QA rejects clipped content, scroll-dependent slides, viewport mismatch, and controls covering content.

## Current Expected Behavior

For a typical request like "用 ppt-master 做一个 12 页关于 X 的演示":

1. Ask 3-5 calibration questions if missing.
2. Default to HTML/web keynote deck.
3. Research source-sensitive facts.
4. Build a claim spine and rewrite slide titles until they are memorable.
5. Define theme-specific Chinese typography and art direction.
6. Plan macro layout/contact sheet before building.
7. Use imagegen per slide when it improves visual stakes.
8. Build a viewport-fit 16:9 web deck.
9. Verify full-slide fit, no overflow, no clipped text, no weak contact sheet.
10. Deliver artifact path + concise QA.

## Git History

Useful commits:

- `50ea1c1` Initial ppt-master skill project
- `c1e188b` Tune ppt-master defaults for web keynote decks
- `1c8f9e4` Restore high-impact web deck standards
- `b3852f7` Enforce viewport-fit web deck layout

## Next Iteration Ideas

- Add a reusable HTML deck starter template/snippet under `ppt-master/assets/` or `ppt-master/references/` so future generations copy a proven viewport-fit scaffold instead of reconstructing it.
- Add a small validation script for generated HTML decks to check slide count, scrollHeight, asset references, and viewport fit.
- Add before/after examples of weak vs strong slide titles in Chinese.
- Add a visual QA checklist specifically for screenshots/contact sheets.
- Consider adding a `references/web-css-scaffold.md` with canonical CSS and JS navigation patterns.
