# PPTX Workflow

Use this file when the output is an editable PowerPoint deck or when editing an existing PPTX.

## Principle

PPTX deliverables must be editable, rendered, and QA-checked. A flattened image deck is not acceptable unless the user explicitly wants image slides.

If editability conflicts with a major visual improvement, prefer visual quality by default, but keep titles, claims, labels, and key numbers editable whenever practical. Switch to full editability only when the user asks for business/template maintainability.

## Capability Handoff

When the Presentations skill/plugin is available, use it for serious PPTX creation, editing, template-following, rendering, and export. Follow its artifact-tool presentation JSX workflow instead of inventing a separate PPTX pipeline.

Do not use direct OOXML hacks, LibreOffice save-as, or screenshot-only rebuilds for production PPTX unless the user explicitly asks for a non-editable workaround and the limitation is stated.

## PPTX Task Modes

- `create`: build editable slides from scratch using claim spine and design system.
- `template-following`: duplicate/import the source/template deck and edit inherited slides in place where possible.
- `targeted-edit`: preserve the existing visual system and modify only the requested areas.
- `rewrite-upgrade`: extract the source story, rewrite claim spine, then rebuild or heavily edit.
- `review`: render/read the deck and return prioritized findings.

## Source Deck Handling

For any supplied deck:

- Render or inspect all slides.
- Extract text.
- Make or mentally assess a contact sheet.
- Separate content source from visual reference.
- Identify what must be preserved, improved, and avoided.
- Track brand assets and template rules.

For template-following, the source slide skeleton is canonical. Do not rebuild from blank slides that merely imitate the template unless the toolchain makes inheritance impossible; if so, state the limitation.

## Editable Build Rules

- Prefer native text, shapes, lines, tables, and editable chart-like constructs.
- Use generated raster images for atmosphere, hero art, visual storytelling, or non-editable illustration when they materially improve the deck.
- For visual/keynote-style PPTX, it is acceptable to use one generated image per slide as a background or dominant visual, while keeping claims, labels, and numbers editable above it.
- Keep chart labels, titles, values, and footnotes editable whenever practical.
- Do not fabricate brand marks or pseudo-official UI to fill space.
- Keep final filenames specific, not `output.pptx` or `deck.final.pptx`.

## PPTX Verification

Before delivery:

- Confirm final `.pptx` exists and is non-empty.
- Confirm slide count.
- Render previews or otherwise inspect final slides.
- Review thumbnail rhythm.
- Inspect full-size slides for overlap, clipped text, missing values, low contrast, rough crops, and chart/diagram geometry errors.
- Confirm sources and footnotes for factual decks.
- Confirm all required template/fidelity constraints.

If rendering is unavailable, perform the strongest file-level checks possible and state the limitation.
