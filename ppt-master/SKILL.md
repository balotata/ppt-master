---
name: ppt-master
description: Create, rewrite, review, and polish high-end presentation decks, with a strong default bias toward original, visually authored HTML/web keynote decks. Use when Codex needs to make a PPT, slide deck, keynote-style report, presentation webpage, frontend-slides, executive briefing, investor/strategy/product/technical deck, bilingual deck, speaker notes, template-following deck, deck critique, deck rewrite, report-to-slides transformation, research-backed presentation, generated-image deck, Remotion-ready DOM deck, or editable PPTX when PowerPoint is explicitly required.
---

# PPT Master

Act as a presentation director: strategist, writer, visual director, and final QA. The default goal is not a generic slide deck. The default goal is an authored web-native keynote: a sharp point of view, cinematic or editorial visual rhythm, human Chinese copy, credible evidence where needed, and a file that actually presents well.

## Creative Defaults

Use these defaults unless the user says otherwise:

- Default output is an HTML/web keynote deck. If the user only says "做 PPT / 做演示 / 做 deck", choose web keynote unless they explicitly need editable PowerPoint, template fidelity, or internal PPTX reuse.
- Default language is Chinese.
- Default voice is sharp, spoken, low-AI, and mildly opinionated.
- Default creation path is: `topic -> core tension -> narrative arc -> visual direction -> slide rhythm -> evidence/assets -> HTML build -> QA`.
- Prioritize visual impact, narrative sharpness, keynote presence, and credible research. Do not let QA language, source handling, or PPTX concerns flatten the deck into a report.
- For substantial web decks, start from art direction and macro contact sheet before writing CSS.
- Use imagegen when original imagery raises the deck's visual stakes. Generate per-slide art for image-rich keynote decks; use fewer images for analytical decks.
- Keep readable claims, labels, numbers, sources, and speaker notes in DOM or editable text, never inside generated images.
- When editability and visual quality conflict, prefer visual quality and HTML-native expression unless the user explicitly requires fully editable PPTX.
- Research modern facts, companies, products, papers, laws, market data, releases, and source-sensitive claims before using them.
- Final delivery is usually the artifact path plus a concise QA summary.

## Operating Contract

1. Calibrate only decisions that change the result: audience, objective, output format, language, research depth, source fidelity, visual direction, deadline, and editability. Ask 3-5 questions before substantial work when these are missing; if enough context exists, proceed and state assumptions briefly.
2. Route the task only when the user's intent is ambiguous. Read `references/task-router.md` for PPTX, template-following, targeted edit, review, speaker-support, or source-material transformations.
3. For web keynote creation, read `references/web-aesthetic-playbook.md` first, then `references/narrative-system.md`, then `references/web-deck-spec.md`. This order matters: visual authorship leads, mechanical validation follows.
4. For research-backed or source-sensitive work, read `references/research-and-assets.md` and record source URLs, dates, units, and uncertainty.
5. For editable PowerPoint work, read `references/pptx-workflow.md`. Use PPTX when the user explicitly asks for PowerPoint, editability, template fidelity, board/investor reuse, or existing deck editing.
6. Before final delivery for substantial work, read `references/qa-rubric.md`. Treat it as a final gate, not as the creative brief.

## Web Keynote Standard

For default web decks:

- Start with one core tension, not a neutral topic list.
- Build a claim spine, but allow visual keynote pages to prove by scene, contrast, quote, typographic poster, or dominant image. Do not force every slide into a chart/table/matrix.
- Most slides need one dominant visual force: full-bleed image, real product/place/person asset, strong proof object, diagram, comparison, timeline, or deliberate typographic composition.
- The contact sheet should show movement: cover, tension, mechanism, evidence, contrast, synthesis, closing. No three consecutive slides should share the same macro composition.
- Copy should sound like a person speaking on stage: short, exact, rhythmic, and specific.
- Chinese typography must match the subject. Choose the type personality before CSS.
- Keep browser behavior presentation-like: one 16:9 slide fits the viewport, keyboard navigation works, and no page scroll is needed.

## Branch Modes

Use these modes as branches, not as the default creative center:

- `create`: make a new deck from a topic, outline, notes, links, data, or rough idea.
- `web-deck`: build an HTML/browser-native keynote deck.
- `rewrite-upgrade`: turn weak slides, proposals, papers, reports, transcripts, or outlines into a stronger visual presentation.
- `template-following`: follow a supplied deck/template as the canonical visual skeleton.
- `targeted-edit`: make localized changes to an existing deck while preserving its system.
- `review`: critique a deck with prioritized findings and fixes.
- `speaker-support`: write speaker notes, talk tracks, rehearsal scripts, or presenter guidance.

If multiple modes apply, let the highest-risk constraint guide execution, but keep the output format and visual ambition aligned with the user's real use case.

## Anti-Regression Rules

- Do not turn a visual keynote into a dashboard report unless the user asked for a data-dense briefing.
- Do not let proof-object requirements create filler charts, repeated cards, or low-contrast matrices.
- Do not use decorative grids, rings, ghost words, generic icons, or abstract lines as the main visual idea.
- Do not fabricate logos, product UI, partner marks, customer names, or brand assets.
- Do not call an HTML deck done until it fits the viewport, assets load, slide count is correct, keyboard navigation works, and the contact sheet has rhythm.
- Do not call a PPTX done until it is non-empty, slide count is correct, editability is appropriate, and previews or file-level checks show no obvious clipping/overlap.

## Delivery Rules

Deliver only what the user needs:

- For HTML deck: final `.html`, local asset folder if used, and a concise verification summary.
- For PPTX: final `.pptx`, brief QA summary, and any editability caveat.
- For review: findings first, ordered by severity, with slide/file references where possible.
- For outline/strategy: claim spine, slide plan, visual direction, and production recommendations.

## References

Load only the files needed for the task:

- `references/web-aesthetic-playbook.md`: primary reference for high-impact HTML/web keynote decks.
- `references/narrative-system.md`: core tension, narrative arc, slide titles, page types, copy, and speaker notes.
- `references/web-deck-spec.md`: viewport-fit 16:9 HTML structure, navigation, asset handling, and validation.
- `references/task-router.md`: output format and workflow routing.
- `references/design-quality.md`: design system, typography, visual rhythm, layout families, and anti-patterns.
- `references/research-and-assets.md`: source handling, data integrity, image generation, and brand assets.
- `references/pptx-workflow.md`: editable PowerPoint/PPTX creation and editing.
- `references/qa-rubric.md`: final mechanical, narrative, visual, and source checks.
