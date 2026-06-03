# Design Quality

Use this file before building a deck or when diagnosing visual quality.

## Design System Lock

Define before production:

- Slide size and delivery medium.
- Background system.
- Typography pair using available or legally usable fonts.
- Palette: base, text, muted text, line, primary accent, secondary/support, warning if needed.
- Layout families and rhythm rules.
- Chart grammar: axes, labels, annotation, source/footer.
- Diagram grammar: nodes, connectors, lanes, arrows, labels.
- Image grammar: crop, treatment, provenance, and where imagery is mandatory.
- Page markers, section markers, source notes, and speaker-note treatment.
- Banned motifs.

Default priority is visual impact and keynote-like presence, adjusted to the theme. Do not impose one fixed house style; derive the visual language from topic, audience, and requested tone.

For HTML/web decks, read `web-aesthetic-playbook.md` before locking the visual system.

## Contact Sheet Standard

At thumbnail size, the deck should show authorship:

- Distinct macro-layouts across the deck.
- No more than two similar card-grid slides in a row.
- No three consecutive slides with the same composition.
- Chapter movement is visible.
- Dense slides and quiet slides alternate deliberately.
- The opening and closing feel related but not duplicated.

## Layout Families

Mix layout families based on story needs:

- Full-bleed thesis cover.
- Claim with proof chart.
- Split visual comparison.
- Timeline with consequences.
- Flow/loop diagram.
- Product/system map.
- Metric rail plus evidence object.
- Editorial image plus argument.
- Dense appendix table.
- Source/assumption page.

## Typography

- Reserve hero-scale type for true thesis, section, or closing moments.
- Choose Chinese typography to match the theme before writing CSS. Do not casually default to Microsoft YaHei / PingFang / system UI unless the theme calls for neutral UI.
- Use smaller, tighter headings inside panels, dashboards, and dense slides.
- Do not scale font size purely with viewport width.
- Avoid negative letter spacing.
- Ensure labels and values remain readable at presentation size.
- Keep footnotes quiet but legible.

## Chinese Typography Direction

Pick a deliberate Chinese font direction for each deck, then define a legal fallback stack.

- Editorial / research / cultural topics: prefer Songti or serif-led direction, e.g. `Noto Serif SC`, `Source Han Serif SC`, `Songti SC`, `SimSun`, paired with a restrained sans for labels.
- Technology / AI / product / systems: prefer modern geometric sans, e.g. `HarmonyOS Sans SC`, `MiSans`, `OPPO Sans`, `Source Han Sans SC`, `Noto Sans SC`, with tight label hierarchy.
- Luxury / art / keynote / philosophy: consider high-contrast serif or elegant display direction, e.g. `Noto Serif SC`, `Source Han Serif SC`, `Songti SC`, with generous spacing and fewer words.
- Gaming / dark cinematic / cyber themes: use a strong display face if available, then fall back to bold serif/sans pairings; avoid pretending an unavailable game font exists.
- Internet critique / roast / sharp commentary: use heavy sans or condensed-feeling sans where available; pair with blunt large type and minimal body copy.
- Government / safety / incident briefings: use authoritative, sober typography; avoid playful or luxury fonts.

Rules:

- Name the intended type personality in the design system.
- Put the most theme-specific font first, then broad CJK fallbacks.
- If a named font may not exist locally, include robust fallbacks and do not rely on it for layout fitting.
- Do not mix many Chinese typefaces. Usually one display family plus one label/body family is enough.
- Test long Chinese titles for wrapping and visual weight.

## Visual Restraint

Avoid:

- Card grids as default scaffolding.
- Cards inside cards.
- Decorative boxes around prose.
- Decorative rings, orbs, faint grids, oversized ghost words, or abstract line systems used as the main visual idea.
- Generic icons that do not encode meaning.
- One-note palettes dominated by a single hue.
- Purple/blue gradients, beige slabs, dark slate dashboards, or espresso/brown palettes unless deliberately justified.
- Stock-looking imagery when the subject needs inspection.
- Low-resolution logos or rough crops.

## High-Aesthetic Rewrite

When upgrading an existing PPT:

- Preserve the user's intended message unless asked to rewrite strategy.
- Raise the visual ceiling: stronger hierarchy, more authored layout rhythm, better crops, cleaner proof objects, and less filler.
- Prefer fewer, stronger visual elements over many polite boxes.
- If the original deck is visually weak, do not merely "beautify" the same structure; rebuild weak slides around their actual claim.
- Make the result feel intentional at thumbnail size before polishing details.

## Structured Visuals

Charts, diagrams, matrices, and flows are geometry systems:

- A chart must prove the title.
- Direct labels beat legends when feasible.
- Connectors must attach to real source/target objects.
- Arrows must indicate actual direction, not decoration.
- Equal-role boxes must share dimensions, padding, and treatment.
- Text must not touch container edges or rely on shrink-to-fit as the default.
- Tables must preserve row/column grammar at thumbnail size.
- If a visual needs too many exceptions to read clearly, simplify it.

## Brand Authenticity

Use verified or user-provided brand assets. Do not draw, trace, stylize, or approximate official logos, mascots, app icons, partner badges, customer marks, or product UI unless the user explicitly asks for unofficial concept work.

When assets cannot be verified, use typography, color, layout, product language, and sourced facts as brand cues instead.
