# Web Aesthetic Playbook

Use this file first when building or rewriting substantial HTML/web keynote decks. It is the creative brief for web output. Mechanical fit and QA come later.

## Prime Directive

A web deck should feel like an authored presentation artifact, not a styled report page, dashboard, framework demo, or document poured into slides.

Before layout, define what the audience should see and feel:

- Core tension.
- Reference stack and what will be transferred.
- Art direction.
- Typography personality.
- Palette and contrast mood.
- Image strategy.
- Contact sheet rhythm.

Then build the slides.

For high-aesthetic, branded, product, artistic, cultural, gaming, or experimental work, read `visual-reference-system.md` before writing CSS. Use it to choose references, teardown their decisions, and write 3 original transfer rules.

## Visual Narrative First

For a new deck, sketch the macro contact sheet before writing CSS:

- Cover / thesis: one high-stakes visual or typographic statement.
- Tension: the conflict becomes visible.
- Mechanism: the hidden system is drawn, staged, or diagrammed.
- Evidence: a chart, source excerpt, comparison, or real artifact earns trust.
- Turn: the audience sees what changes.
- Principle / decision: the deck becomes useful.
- Closing: the thesis returns with consequence, not repetition.

Decks under 8 pages still need rhythm. No more than two consecutive slides may share the same macro composition.

Before locking the contact sheet, test it against the reference stack:

- Which slide borrows a composition principle?
- Which slide borrows a typography principle?
- Which slide borrows an image or material principle?
- Which repeated layout family has been replaced by a more specific stage, artifact, diagram, or crop?

## Dominant Visual Force

Most slides need one dominant force taking 55-100% of visual weight:

- Full-bleed generated or real image.
- Large typographic poster.
- Product, place, person, or object image that reveals the subject.
- Chart, timeline, loop, matrix, system map, or comparison that visibly carries the claim.
- Quote or punchline page with precise type and restraint.
- Editorial image plus a strong thesis rail.

If a slide has no dominant force, redesign it before polishing.

## Keynote VI Principles

Borrow these principles from strong product keynotes and brand systems before reaching for cards:

- Treat the slide as a stage, not a report surface. Primary content usually wants optical vertical centering, not automatic top alignment.
- Let full-bleed color, image, shape, or material carry grouping. Use visible frames only when the frame encodes a real proof object.
- Build hierarchy through scale, position, contrast, and motion of attention. Do not make every text block large; a compact block can be more premium than an empty giant box.
- Choose type as art direction. Chinese titles may use a subject-specific serif, display, calligraphic, geometric, condensed, or blunt sans direction, with robust fallbacks. System sans is acceptable only when it is a deliberate product/technical voice.
- Use one memorable shape language per deck: product silhouette, superellipse, archive sheet, lens crop, map fold, waveform, mask, stage beam, etc. Repeat it with variation so the deck feels authored.
- Prefer edge-to-edge visuals plus safe-area text over floating panels. If a panel is needed, make it quiet, content-sized, and subordinate to the claim.
- Keep analytical pages alive through proof objects: direct-labeled charts, source strips, spatial diagrams, annotated artifacts, or split comparisons. Avoid "large empty card with paragraph" as the default proof pattern.
- Let accent color behave like a signal, not wallpaper. Apple-like decks use restraint and air; Xiaomi-like VI shows that curves, breathing motion, and a clear brand color can carry warmth without clutter.

Do not use "Apple-like" or "Xiaomi-like" as a style label. Convert the reference into concrete rules: optical centering, material close-up, disciplined accent, brand-shaped curve, one-line claim, product-sized safe area, or restrained motion.

## Recovered Strengths

The strongest early ppt-master decks worked because they used:

- Full-bleed art or real imagery as the emotional stage.
- Strong gradient veils over images so text stayed readable while the image still mattered.
- Huge thesis typography for cover, chapter, and closing moments.
- Theme-matched Chinese typography, not arbitrary system defaults.
- Alternating moods: dark image slide, light statement slide, high-accent data slide, quote slide, mechanism slide, source/closing slide.
- Per-slide scene roles such as `cover`, `core-tension`, `mechanism`, `loop-diagram`, `quote`, `risk-boundary`, or `closing`.
- Compact evidence panels only when they encoded proof.
- Human, pointed Chinese copy that could be spoken aloud.

Restore these strengths before adding more rules.

## Art Direction

Define one art direction for the whole deck:

- Medium: photography, editorial collage, 3D render, ink/serif editorial, cinematic still, product macro, abstract material, data-native geometry.
- Lighting: high-key, low-key, backlit, gallery-lit, stage-lit, documentary, neon, daylight.
- Palette: base, text, muted text, line, one dominant accent, optional secondary contrast.
- Texture: polished glass, paper grain, metal, mist, pixel, clinical white, archival, concrete, screen glow.
- Composition language: full-bleed, split rail, poster type, diagram stage, close crop, negative space, layered evidence.
- Banned elements: text inside generated images, logos, fake UI, watermarks, decorative filler.

For Chinese decks, pick the typography personality before CSS:

- Editorial/research/cultural: serif-led.
- Technology/AI/product/systems: modern geometric sans.
- Luxury/art/philosophy: elegant high-contrast serif or display direction.
- Gaming/dark/cyber: strong display direction with robust fallbacks.
- Internet critique/roast: heavy sans, blunt type, fewer words.
- Government/safety/incident: sober, authoritative type.

For topic-matched typography, write down a one-line font intent before coding, for example:

- "archival serif with ritual display accents"
- "condensed launch keynote sans with one oversized number"
- "gallery wall serif plus tiny museum labels"
- "industrial grotesk with data-native monospaced labels"

Then make the CSS reflect that intent.

## Imagegen Usage

For high-impact web decks, plan imagegen deliberately:

- Use per-slide images when the deck should feel cinematic, editorial, or visually immersive.
- Use hero/chapter/closing images when the deck is more analytical.
- Avoid generating official-looking logos, product UI, screenshots, customer badges, or brand marks.
- Keep all readable text, data, labels, and sources in DOM.
- Save assets with stable names such as `slide-01.png`.
- If generated art is weak, regenerate or replace it with a stronger typographic/proof-object slide.

Use verified real assets instead of generated images for real products, people, places, venues, screenshots, logos, and brand-sensitive identity.

## Layout Families

Mix layout families based on the story:

- Full-bleed thesis image with text veil.
- Huge typography on quiet field.
- Split visual comparison.
- Side rail argument over image.
- Mechanism diagram on a staged canvas.
- Loop diagram.
- Timeline with consequence labels.
- Data highlight with one dominant number.
- Chart proof with direct labels.
- Editorial quote.
- Product/system map.
- Risk boundary.
- Source/closing page that remains readable and intentional.

Premium layout defaults:

- Center the main text mass optically when the slide is a thesis, quote, synthesis, or closing.
- Use asymmetric splits where image/diagram occupies at least half the slide and copy is compact.
- Replace repeated cards with inline labels, rails, ticks, callouts, captions, or direct annotations whenever possible.
- Leave negative space around the main force, not inside empty frames.
- Use fewer, stronger text blocks: 1 headline, 1 short lead, 2-4 compact proof labels.

Avoid using card grids as the default skeleton.

## Banned Substitutes

These cannot be the main visual idea:

- Pale background grid.
- Decorative rings or radar circles.
- Oversized translucent background words.
- Repeated card dashboards.
- Generic abstract waves or lines.
- Icons used only to decorate.
- Low-contrast matrix/table pages.
- Containers louder than the claim.

They may appear only as minor texture when a stronger visual or proof object already exists.

## Contact Sheet Gate

After building, inspect a contact sheet containing every slide. The deck fails if:

- The strongest visual page is only the cover.
- Most slides look like report pages with decorative accents.
- Three consecutive slides share the same layout.
- The sequence reads as cards, panels, cards, panels.
- Any slide is clipped, scroll-dependent, or visibly designed for a different viewport size.
- Dark pages hide tables or sources.
- Slides could be swapped between topics without visual changes.

If the contact sheet fails, rebuild the weakest 2-4 slides around stronger image, typography, or proof objects.
