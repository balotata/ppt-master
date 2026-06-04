# Web Layout Inspiration

Use this file before substantial HTML/web keynote deck work. The goal is not to copy a framework wholesale; it is to borrow proven interaction, layout, and QA ideas from strong open-source web presentation projects.

## Default Stance

Default output remains a custom HTML/web deck with local assets, because this gives the strongest visual ceiling and easiest per-slide image composition. Use frameworks only when the user asks or when their runtime advantage clearly matters.

Open-source frameworks should improve mechanics, not flatten taste. Do not let framework-like grids, generic dark dashboards, or developer demo layouts replace the deck's own visual direction.

When the user asks for "GitHub 最优方案", "参考开源排版", "更像成熟 web deck", or a high-stakes web keynote, browse GitHub/docs for current examples before finalizing the design direction.

## Reference Projects To Know

- Reveal.js (`https://github.com/hakimel/reveal.js`): mature HTML presentation framework. Borrow ideas for nested slides, speaker notes, auto-animate, PDF export, keyboard navigation, and plugin-style extensibility. Good reference for classic web presentation mechanics.
- Slidev (`https://github.com/slidevjs/slidev`): Markdown/Vue developer deck system. Borrow ideas for Markdown-first authoring, theme separation, presenter mode, drawing/annotation, Mermaid/LaTeX/code support, and export options. Good reference for technical talks and live-code decks.
- open-slide (`https://github.com/theMaximalist/open-slide`): agent-native React slide framework. Borrow fixed 1920x1080 canvas discipline, present mode, hot reload, asset management, and agent-facing authoring rules. Good reference for Codex-generated visual code decks.
- AuraDeck (`https://github.com/awwaiid/auradeck`): HTML-first desktop presentation editor/viewer. Borrow the idea that each slide can be full HTML with Canvas/SVG/WebGL, presenter mode, offline/native viewing, and export to PDF/PPTX.
- StellarDeck (`https://github.com/teknologiumum/StellarDeck`): storyteller-oriented Markdown deck system. Borrow autoflow ideas: content chooses layout, repeated layouts are avoided, diagnostics flag overflow/missing images/theme mismatches.

## Layout Patterns To Borrow

- Fixed canvas discipline: design for a stable 16:9 frame first, then adapt responsively.
- Viewport fit: a fixed 16:9 design canvas is allowed as an internal coordinate system, but the delivered deck must scale down/up to fit the visible browser viewport without scroll or cropping.
- Autoflow mindset: choose layout from content shape, not from a static template list.
- Anti-monotony: do not repeat the same macro-layout three times in a row.
- Presenter-first controls: keyboard navigation, page markers, optional notes, and strong first-screen framing.
- Self-contained export: local assets, no accidental network dependency, and a file/folder that can be shared.
- Diagnostics mindset: check missing images, overflow, text collisions, theme drift, and blank visuals as explicit failures.

## Framework Selection

- Custom single-file HTML: default for high-aesthetic decks, Chinese narrative decks, imagegen-heavy pages, and fast delivery.
- Reveal.js: use when the user wants a known HTML presentation runtime, nested slides, speaker notes, auto-animate, or plugin ecosystem.
- Slidev: use for developer talks, code-heavy decks, Markdown/Vue authoring, Mermaid/LaTeX, or web deployment.
- open-slide/React-style canvas: use when the user wants a reusable agent-native deck app, inspectable components, or 1920x1080 canvas discipline.
- AuraDeck-style HTML-first: use as inspiration when the deck needs Canvas/SVG/WebGL, offline presentation, or export-minded packaging.

## Design Rule

Do not let framework defaults determine taste. Even when borrowing mechanics, the deck must still pass ppt-master standards: sharp claim spine, dominant visual or proof force on most slides, strong image direction, readable DOM text, consistent art direction, and contact-sheet rhythm.
