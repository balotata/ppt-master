# Web Aesthetic Playbook

Use this file before building or rewriting substantial HTML/web keynote decks. It captures the visual strengths that made earlier ppt-master web decks work better: strong art direction, slide-by-slide visual stakes, bold typography, and authored composition.

## Non-Negotiable Direction

A web deck should feel like a designed presentation artifact, not a styled report page or framework demo.

It must also behave like a presentation: one full slide fits the screen. If the viewer has to scroll to see the bottom of a slide, the deck fails before aesthetics are considered.

Most slides need one of:

- A full-bleed or dominant generated/real image.
- A strong proof object: chart, timeline, loop, matrix, system map, comparison, or source table that visibly carries the claim.
- A deliberate typographic poster composition with very little supporting clutter.

If a slide has none of these, redesign it before polishing.

## Recovered Strengths

Earlier high-impact decks worked because they used:

- Full-bleed art or product imagery as the emotional stage.
- Strong gradient veils over images so text stayed readable while the image still mattered.
- Big claim typography: cover and thesis slides used truly large type, not polite report headings.
- Theme-matched Chinese typography: the font direction felt chosen, not whatever the browser happened to use.
- Alternating page moods: dark image slide, light statement slide, high-accent data slide, quote slide, mechanism slide, source/closing slide.
- Per-slide semantic roles: each page had a scene such as `cover`, `core-tension`, `mechanism`, `loop-diagram`, `quote`, `risk-boundary`, or `closing`.
- A single dominant accent, not many pastel chips.
- Compact panels only when they encoded evidence; panels did not become the deck's default skeleton.
- Human, pointed copy that could be spoken aloud.

## Visual Defaults

For visual/keynote decks:

- Start with art direction, then layout. Decide what the audience should see before deciding where boxes go.
- Prefer one image or proof object taking 55-100% of the slide's visual weight.
- Pair every dominant visual with a strong thesis line. If the title is bland, the image becomes decoration.
- Use text overlays, side rails, or bottom thesis bands rather than centered report blocks.
- Keep page chrome quiet: small page marker, optional type label, restrained controls.
- Use strong contrast: if a table, source list, or matrix is unreadable at a glance, it fails.
- Let Chinese typography carry mood. A cultural deck, science deck, roast deck, and incident briefing should not share the same default font stack.
- Let sections change rhythm. Do not make 12 slides all share the same header + panel grid.

## Banned Substitutes

These cannot be the main visual idea:

- Pale background grid.
- Decorative rings, orbs, or radar circles.
- Oversized translucent background words.
- Repeated card dashboards.
- Generic abstract waves or lines.
- Icons used only to decorate.
- Low-contrast matrix/table pages.

They may appear only as minor texture when a stronger visual/proof object already exists.

## Imagegen Usage

For high-impact HTML decks, default to imagegen-assisted visual planning unless the user asks for a data-only deck:

- Plan the full-deck art direction first.
- Mark each slide's image role: `full-bleed`, `side-visual`, `background-texture`, `none`, or `real-source`.
- Generate per-slide images when they create distinct visual beats.
- Keep generated images textless and brandless.
- Place all readable claims, labels, numbers, and sources in DOM.

## Layout Rhythm Checklist

Before building, sketch a macro contact sheet plan:

- 1 cover/thesis slide with high visual drama.
- 2-4 image-led argument slides.
- 2-4 proof-object slides with charts, diagrams, timelines, or matrices.
- 1 quote or punchline slide when the voice benefits from it.
- 1 synthesis/decision slide.
- 1 source/closing slide that remains readable and visually intentional.

For decks under 8 pages, still vary rhythm: no more than two consecutive slides may share the same macro composition.

## Contact Sheet Gate

After building, inspect a contact sheet containing every slide. The deck fails if:

- Any slide is clipped, scroll-dependent, or visibly designed for a different viewport size.
- The contact sheet reads as a sequence of similar panels.
- The strongest visual page is only the cover.
- Most slides look like report pages with decorative accents.
- Dark pages hide tables or sources.
- Slides could be swapped between topics without visual changes.

If the contact sheet fails, rebuild the weakest 2-4 slides around stronger image/proof objects.
