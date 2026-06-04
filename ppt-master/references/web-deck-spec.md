# Web Deck Spec

Use this file when creating HTML, browser-native, frontend-slide, or Remotion-ready presentations. This file defines mechanics. Read `web-aesthetic-playbook.md` first for visual direction on substantial decks.

## File Structure

Default:

```text
<project>/
  <deck-name>.html
  assets/<deck-name>/
    hero.png
    slide-01.png
```

Use a single HTML file with inline CSS/JS unless the user asks for React, Slidev, Reveal.js, open-slide, Remotion, or another framework. Avoid accidental network dependencies.

## Presentation Architecture

The deck must feel immersive, but it must behave like a presentation: one complete 16:9 slide fits inside the visible browser viewport without scroll or cropping.

Recommended structure:

```html
<body>
  <main class="deck-viewport">
    <div class="deck-stage" id="deck-stage">
      <section class="slide active" id="slide-01" data-slide="01" data-scene="cover">
        <img class="art" src="assets/name/slide-01.png" alt="">
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

Semantic hooks are encouraged when useful:

- `data-remotion-layer="timeline"`
- `data-flow-node="input|process|output"`
- `data-flow-edge="a-b"`
- `data-compare-panel="left|right"`
- `data-metric="growth"`
- `data-risk="dependency"`
- `data-scene="cover|core-tension|mechanism|comparison|closing"`

## CSS Fit Rules

Use this viewport-fit architecture as the default:

```css
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}

.deck-viewport {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.deck-stage {
  position: relative;
  aspect-ratio: 16 / 9;
  width: min(100vw, calc(100vh * 16 / 9));
  height: min(100vh, calc(100vw * 9 / 16));
  overflow: hidden;
}

.slide {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
```

Do not use page-scroll slide stacks, fixed 1280/1600/1920px stages, or `min-height: 100vh` slide pages unless a wrapping transform still guarantees full-slide visibility.

## Composition Rules

Viewport fit is not a design style. A fitted stage can still use full-bleed imagery, large typography, edge-to-edge color, cinematic crops, and dense proof objects.

- Keep critical text inside a safe area, usually 5-7% inset.
- Let imagery, color fields, veils, and background motion extend full-bleed when useful.
- Prefer optical centering for the primary content mass on keynote, thesis, quote, closing, and synthesis slides. Top-left layouts should be chosen for a reason, not inherited as the default.
- Use visible cards sparingly. A slide with 3-4 large empty panels usually needs a stronger diagram, image crop, annotation layer, or direct-labeled proof object instead.
- If a text block sits inside a container, size the container to the content's role. Do not create large vacant boxes around short copy.
- Put controls outside the visual safe area or make them quiet enough not to cover content.
- Use responsive constraints and stable dimensions for boards, timelines, matrices, controls, and chart areas.
- Size internals with percentages, `rem`, `em`, conservative `clamp()`, and container-relative logic. Do not scale text purely with viewport width.
- Ensure long Chinese titles wrap intentionally and do not collide with images, labels, page numbers, or controls.
- Keep cards at `8px` radius or less, and do not put cards inside cards.
- Define a restrained palette with one dominant accent and optional secondary contrast.
- Define legal font stacks with theme-specific Chinese fallbacks.

## Navigation

Include keyboard and button navigation:

- Right, PageDown, Space: next slide.
- Left, PageUp: previous slide.
- Home: first slide.
- End: last slide.

If speaker notes exist, provide a simple notes toggle. Notes may scroll only in a separate panel, never by scrolling the slide page itself.

## Images And Assets

- Store generated or local assets under `assets/<deck-name>/`.
- For image-rich decks, use stable names such as `hero.png`, `slide-01.png`, `slide-02.png`.
- Keep claims, labels, numbers, sources, logos, and readable text in DOM, not inside generated images.
- Generated images should avoid readable text, logos, UI, watermarks, brand marks, and fake screenshots.
- Use verified real images for products, venues, people, places, screenshots, logos, and brand marks.
- If a slide has no image, it still needs a dominant proof object or typographic composition.

## Fullscreen Fit Gate

Every web deck must pass these checks before delivery:

- At 1920x1080, 1366x768, and 1440x900, the entire slide is visible without page scroll.
- No slide content is clipped at the bottom or sides.
- Repeated cards, bullets, and source blocks fit inside the slide. If they do not fit, reduce content, split the slide, or change the layout.
- Body scrolling is disabled in presentation mode.
- Controls do not cover footers, sources, or important content.

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
- Build or inspect a contact sheet that includes every slide.
- If browser automation becomes unstable, fall back to file-level validation and state the limit.
