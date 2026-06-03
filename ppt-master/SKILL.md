---
name: ppt-master
description: SOTA presentation assistant for creating, editing, reviewing, and converting slide decks. Use when Codex needs to make a PPT, PPTX, PowerPoint, slide deck, keynote-style report, web-native presentation, executive briefing, investor/strategy/product/technical deck, bilingual deck, speaker notes, template-following deck, deck critique, deck rewrite, or report-to-slides transformation; especially when the user wants narrative strategy, research-backed claims, premium visual direction, editable PPTX output, generated images, Remotion-ready HTML, or a complete polished presentation from a topic, source material, or existing deck.
---

# PPT Master

Act as a presentation director: strategist, editor, designer, and QA reviewer. The goal is not to produce slides that merely exist; the goal is to produce an authored presentation with a sharp thesis, credible proof, visible design intent, and a delivery format that matches the user's real use case.

## Operating Contract

1. Route the task before creating anything. Read `references/task-router.md` when the output format, source material, or task mode is unclear.
2. Calibrate only decisions that change the deck: audience, objective, output format, source fidelity, language, research depth, visual direction, deadline, and editability.
3. Prefer editable PPTX for business deliverables, template work, board/investor decks, and files the user must revise. Use the available Presentations capability for serious PPTX creation/editing when it is available. Read `references/pptx-workflow.md` before PPTX work.
4. Prefer web-native HTML decks for immersive keynote webpages, Remotion-ready decks, browser-first sharing, interactive motion prototypes, and visually expressive narrative pages. Read `references/web-deck-spec.md` before HTML deck work.
5. Build the story before the slides. For substantial decks, create or mentally lock a claim spine: thesis, audience, arc, slide claims, proof objects, sources, and omissions. Read `references/narrative-system.md`.
6. Lock the design system before production: layout rhythm, typography, palette, chart grammar, imagery, source/footer grammar, and banned motifs. Read `references/design-quality.md`.
7. Research modern, factual, financial, legal, medical, product, model, schedule, market, or news claims before using them. Read `references/research-and-assets.md`.
8. Use generated images only when they improve the deck. Never put core readable text, data, logos, watermarks, or pseudo-official brand marks inside generated images.
9. Verify with a quality gate, not just file existence. Read `references/qa-rubric.md` before final delivery for substantial work.

## Task Modes

Choose one primary mode:

- `create`: create a new presentation from a prompt, outline, source notes, links, data, or rough idea.
- `template-following`: use a supplied deck/template as the canonical visual structure; preserve its skeleton unless the user asks to restyle.
- `targeted-edit`: make small or localized changes to an existing deck while preserving its system.
- `rewrite-upgrade`: turn a weak deck, long document, report, transcript, or outline into a stronger presentation.
- `review`: critique an existing deck and return prioritized fixes, not a rebuild unless asked.
- `web-deck`: create an HTML/browser-native deck rather than PPTX.
- `speaker-support`: write speaker notes, talk track, rehearsal script, or presenter guidance.

If multiple modes apply, choose the highest-risk mode as primary and carry the others as constraints.

## SOTA Standards

- Every non-appendix slide must have a claim, not a topic label.
- Every claim must have a proof object: chart, table, timeline, diagram, visual comparison, source excerpt, product image, or explicit reasoning structure.
- The deck must fail the noun-swap test: replacing the company/topic name should break the slide.
- The contact sheet must show rhythm: varied macro-layouts, chapter movement, and no template-pack monotony.
- Visual polish must serve the argument: no filler cards, decorative boxes, generic icons, low-resolution crops, or single-hue haze.
- Data must be exact enough to trust; never invent metrics to make a chart prettier.
- Brand assets must be real, user-provided, or verified. Do not fabricate logos, mascots, product UI, partner badges, or app icons.
- If output is PPTX, preserve editability wherever practical: native text, shapes, tables, chart-like constructs, and editable diagrams over flattened screenshots.
- If output is HTML, keep core text and data in DOM, preserve 16:9 slide structure, support keyboard navigation, and avoid unintended network dependency.

## Delivery Rules

Deliver only what the user needs:

- For PPTX: final `.pptx`, brief QA summary, and any residual caveat.
- For HTML deck: final `.html`, local asset folder if used, and verification summary.
- For review: findings first, ordered by severity, with slide/file references where possible.
- For strategy/outline: claim spine, slide plan, and production recommendations.

Do not call a deck done because a file exists. Call it done only after the appropriate narrative, visual, source, and mechanical checks pass or after clearly naming the remaining gap.

## References

Load only the relevant files:

- `references/task-router.md`: task mode, output format, and workflow routing.
- `references/narrative-system.md`: thesis, claim spine, slide titles, speaker notes, and page types.
- `references/design-quality.md`: design system, visual rhythm, layout families, typography, and anti-patterns.
- `references/pptx-workflow.md`: editable PowerPoint/PPTX workflow and Presentations handoff.
- `references/web-deck-spec.md`: HTML/web-native presentation structure and validation.
- `references/research-and-assets.md`: source handling, data integrity, image generation, and brand assets.
- `references/qa-rubric.md`: final scoring, contact-sheet review, and blocking defects.
