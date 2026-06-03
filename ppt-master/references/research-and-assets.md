# Research And Assets

Use this file when a deck relies on facts, current information, data, sources, images, brands, or generated media.

## Research Triggers

Browse or otherwise verify before using. This is the default behavior for source-sensitive presentation work:

- Latest/current claims.
- Public companies, financials, market data, rankings, pricing, releases, leadership, laws, policies, or schedules.
- Medical, legal, financial, safety, or high-stakes claims.
- Niche topics where memory may be stale.
- User requests for research, sources, citations, or exact quotes.
- Brand/product imagery and identity assets.

Prefer primary sources: filings, company IR pages, official docs, published papers, standards, court/regulator docs, product docs, or official announcements. Use reputable secondary sources for context, not as the only basis for high-stakes claims.

## Source Handling

- Record source URL, date, exact metric, unit, and interpretation.
- Distinguish reported facts from inference.
- Do not invent missing values, dates, rankings, or customer names.
- Use sources to sharpen the argument, not to decorate slides.
- Put full source list in appendix, end slide, speaker notes, or quiet footers depending on deck type.

## Data Rules

- Keep units consistent.
- Reconcile totals when using percentages or segments.
- Show date ranges and currency.
- Do calculations before visual design.
- If data is approximate, label it as approximate.
- If a metric is unavailable, use a qualitative proof object or state the gap.

## Image Rules

Use generated images for:

- Abstract hero visuals.
- Atmosphere.
- Conceptual scenes.
- Original illustration.
- Non-brand visual metaphors.

When the deck aims for keynote-like impact, use images more aggressively, but keep text, claims, numbers, labels, and citations outside the image.

## Per-Slide Imagegen Workflow

Use this when the user wants a visual/keynote-style deck, asks for rich imagery, or the story benefits from every slide having its own art.

1. Define one art direction for the whole deck: medium, lighting, palette, composition language, texture, level of realism, and banned elements.
2. In the outline, mark each slide as:
   - `none`: no generated image needed.
   - `hero`: one major opening/section/closing image.
   - `per-slide`: generate a custom image for this slide.
   - `real-source`: use verified real imagery instead of imagegen.
3. Write slide-specific prompts that share the same art direction but vary the subject, camera, metaphor, and emotional beat.
4. Avoid text, logos, UI, watermarks, charts, brand marks, and fake screenshots in generated images.
5. Save generated assets with stable names such as `slide-01.png`, `slide-02.png`, or `hero.png` under `assets/<deck-name>/`.
6. Keep all readable claims, titles, labels, numbers, and sources in editable PPTX text/shapes or HTML DOM.
7. Verify every referenced image exists, loads, is not blank, and matches the slide's role.

For fast iteration, batch the image plan first, then generate images slide by slide. If an image fails the art direction, regenerate or replace with a simpler visual rather than designing around a weak image.

Use real or verified images for:

- Products.
- Venues.
- People.
- Places.
- Screenshots.
- Logos.
- Brand marks.
- Customer/partner identities.

Never generate or approximate official logos, mascots, app icons, product UI, partner/customer badges, or signature brand marks unless the user explicitly asks for unofficial concept art.

## Asset Provenance

For public-facing or brand-sensitive decks, track:

- Asset filename.
- Source URL or user-provided origin.
- License/usage assumption if known.
- Why the asset belongs in the deck.

When provenance is weak, omit the asset or replace it with non-identity design cues.
