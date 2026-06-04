# QA Rubric

Use this file before final delivery or when reviewing a deck. QA is the final gate. It should protect quality without turning creative web decks into cautious report pages.

## Mechanical Gate

Confirm:

- Output file exists and is non-empty.
- Slide count matches the request.
- Required assets exist.
- HTML/web decks scale to the current viewport; the full 16:9 slide is visible without page scrolling.
- Body scrolling is disabled in presentation mode.
- Keyboard navigation works.
- Text is readable.
- No obvious overlap, clipping, broken images, missing values, or controls covering content.
- No low-contrast dark-on-dark text, invisible tables, faded proof objects, or unreadable source pages.
- Sources exist for factual claims.
- Final format matches the user's need.
- Ambiguous "make a PPT/deck" requests default to HTML/web keynote unless the user explicitly chose PPTX.

Default final response should include only the final artifact and concise QA summary unless the user asks for an outline, source ledger, scorecard, or work log.

## Narrative Gate

Check:

- The deck starts from a clear thesis or core tension.
- Titles state points, not categories.
- Claim titles are sharp, concise, and specific enough to survive the read-alone test.
- Each slide supports the thesis.
- Analytical slides have credible proof objects.
- Visual keynote slides have a dominant image, typographic composition, quote, scene, contrast, or proof object that makes the point legible.
- Body copy advances the argument instead of filling space.
- The ending returns with consequence, action, or synthesis, not mere repetition.
- Chinese copy feels human, spoken, and low-AI.

Revise when titles are bland, bureaucratic, overlong, generic, or not tied to the topic.

## Visual Gate

Check:

- For premium or visually ambitious work, a reference stack was chosen and translated into original design rules.
- Contact sheet has visible rhythm.
- The strongest visual page is not only the cover.
- No three consecutive slides share the same macro layout.
- Most web slides have a dominant visual force or strong proof object.
- Full-bleed images, large type, charts, diagrams, and quiet pages alternate deliberately.
- Typography feels chosen for the subject, especially Chinese typography.
- Color palette is coherent but not one-note.
- Containers do not overpower content.
- The primary text mass is optically placed; keynote, quote, synthesis, and closing pages are not reflexively pinned to the top.
- Typography has topic-specific intent, not only generic system defaults.
- Empty frames, big vacant cards, and repeated panel grids have been replaced with images, diagrams, direct annotations, or compact evidence where possible.
- Text blocks are deliberately sized: large type earns poster force; smaller copy stays compact and close to its visual proof.
- Tables, charts, and matrices are readable at presentation size.
- Image crops are intentional, high quality, and not misleading.

Revise when the deck becomes a sequence of repeated dashboards, card grids, decorative panels, generic icons, pale grids, rings, ghost words, or abstract filler.

## Reference Gate

For high-aesthetic, branded, product, artistic, cultural, gaming, or experimental decks, check:

- The deck used 2-4 relevant references or domain artifacts before design.
- Reference decisions were translated into type, image, color, composition, density, or motion rules.
- The result is original and topic-specific, not a copied layout or generic award-site imitation.
- At least one non-cover slide visibly benefits from the reference teardown.
- Any real brand/product/person/place asset is verified or user-provided; generated imagery is not used as a fake substitute.

Revise when references are listed but not visible in the design, or when the deck copies surface decoration without improving clarity.

## Source Gate

Check:

- Metrics are supported, date-labeled, unit-consistent, and not invented.
- Current claims were verified.
- Source labels are specific enough to trust.
- Reported facts and inference are distinguishable.
- Brand assets are real, user-provided, or verified.
- Generated images do not include readable text, logos, pseudo-official UI, or brand marks.
- Per-slide image sets share an art direction and match slide claims.

## Web Contact Sheet Gate

For substantial web decks, inspect or produce a contact sheet containing every slide. It should show:

- A clear opening mood.
- Movement between image-led, text-led, proof-led, and synthesis pages.
- No layout monotony.
- No clipped content.
- No source or appendix page that looks like an afterthought.

If it fails, rebuild the weakest 2-4 slides around stronger image, typography, or proof objects.

## Human Layout Gate

Do not treat automated screenshot metrics as sufficient. Before final delivery, manually inspect the contact sheet and at least the cover, every dense/compare/source page, one image-led page, one text-led page, and the final page.

Reject and revise when:

- A page is mechanically valid but visually weak, empty, over-framed, or obviously template-like.
- Cards, specimens, panels, or columns are repeated without a new visual reason.
- A compare page uses equal boxes where a diagram, scale shift, artifact strip, or direct visual contrast would carry the idea better.
- The slide order feels wrong: a page introduces a network, comparison, case, or conclusion before the story has earned it.
- A page title, page role, or content belongs earlier/later in the narrative.
- A real-image page uses a generic crop that does not reveal the subject's distinctive form.
- A symbolic illustration competes with text instead of clarifying the subject.
- The final page is only a source list or a weak summary instead of a closing consequence.

For serious work, produce a short self-audit before final: weakest slide, why it is acceptable now, and what was revised after visual inspection.

## Screenshot Gate

For HTML/web decks, visual screenshot QA is required before calling the deck fully verified.

Prefer a localhost preview over `file://`:

- Start a local static server for the deck folder.
- Open `http://127.0.0.1:<port>/...` in Browser Use.
- Allow `127.0.0.1` / `localhost` in Browser settings. `file://` access is optional and often cannot be allowlisted.

At minimum inspect:

- Cover slide.
- One middle slide.
- Final slide.
- Any dense, risk-boundary, matrix, card, source, or data slide.
- A contact sheet for multi-slide benchmark or production decks when browser tools are available.

Reject or revise when screenshots show:

- Hero titles overlapping cards, panels, diagrams, sources, page numbers, or controls.
- Text clipped by fixed containers.
- Cards or diagrams pushed under large titles.
- Source text sitting outside the safe area.
- Controls hiding content.
- A slide that looks acceptable in file-level checks but fails visually.
- Any slide the user would reasonably call "empty", "stiff", "generic", "too card-like", or "layout-broken" after seeing the screenshot.

If Browser or screenshot tooling is blocked by policy, do not present the deck as fully visually QA'd. State that file-level checks passed and screenshot QA is blocked.

If Browser can inspect the page but screenshots time out, use the bundled fallback script when available:

```bash
node scripts/web-visual-qa.mjs --file path/to/deck.html --out-dir path/to/qa-screenshots
```

On Windows, the fallback script uses Edge or Chrome headless with an isolated temporary profile. If Windows blocks the browser process, request scoped elevated permission for that browser launch.

## Scorecard

For substantial create/rewrite work, score 0-5:

- Story: clear thesis and arc.
- Specificity: fails noun-swap test.
- Visual authorship: looks designed, not template-filled.
- Rhythm: contact sheet has varied macro-layouts.
- Proof: factual or analytical claims have credible evidence.
- Typography: hierarchy and Chinese font direction are intentional.
- Visual restraint: no filler decoration.
- Data/source precision: facts are exact and traceable.
- Coherence: one design system.
- Format fitness: output is web-native or editable as requested.

Target:

- No dimension below 4 for serious deliverables.
- If the target is not reached, iterate the weakest slides or state the remaining gap honestly.

## Review Output

When reviewing, lead with findings:

- Severity.
- Slide or file location.
- Why it matters.
- Concrete fix.

Then provide a brief summary and optional next-step plan.
