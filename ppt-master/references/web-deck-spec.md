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

Use a single HTML file with inline CSS/JS unless the user asks for React, Slidev, Reveal.js, open-slide, or another framework. For substantial web decks, read `web-layout-inspiration.md` before designing layout rhythm.

## Slide Structure

Use stable 16:9 slide sections:

```html
<main class="deck">
  <section class="slide" id="slide-01" data-slide="01" data-scene="cover">
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
</main>
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

- Use `aspect-ratio: 16 / 9` or stable viewport-based sizing.
- Use responsive constraints and stable dimensions for fixed-format elements.
- Keep cards at `8px` radius or less.
- Do not put cards inside cards.
- Define a restrained palette with one clear accent and optional secondary contrast.
- Define font stacks with legal fallbacks.
- Ensure text does not overlap or overflow on mobile or desktop.
- Avoid external network dependencies unless intentional and documented.

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
- Inspect cover, middle, and final slide.
- Check image loading, framing, text overlap, and responsive behavior.
- Do not repeatedly fight unstable browser automation; fall back to file-level validation and state the limit.
