# Visual Reference System

Use this file for high-aesthetic web decks, branded/product pages, artistic/research decks, visual rewrites, or any task where the user cares about taste, originality, typography, layout, or "not looking generic".

The goal is not to copy references. The goal is to borrow decision quality: how elite work uses type, image, space, color, rhythm, and interaction to make an argument feel inevitable.

## When To Use

Use this before detailed CSS when any of these are true:

- The user asks for premium, top-tier, Apple/Xiaomi-like, high-end, artistic, cinematic, brand, launch, product, portfolio, editorial, or visually experimental output.
- The subject has strong visual culture: art, music, gaming, fashion, architecture, luxury, science, film, museums, cultural heritage, consumer hardware, or brand identity.
- A previous version felt conservative, flat, template-like, too card-heavy, too top-aligned, or visually generic.
- The deck will be judged by screenshots or visual side-by-side comparison.

For simple internal briefings, use this lightly: one reference lane and one anti-pattern check may be enough.

## Reference Stack

Pick 2-4 reference lanes before writing CSS. Do not pick more than 5; too many references create mush.

- `brand/keynote`: Apple, Xiaomi, Stripe, Teenage Engineering, Nothing, Aesop, Rimowa, Sonos, Nike, Arc'teryx, Polestar. Use for product launch discipline, material focus, and restrained hierarchy.
- `awarded-web`: Awwwards, The FWA, Readymag Awards. Use for immersive first screens, stage-like composition, and interaction ideas.
- `editorial/type`: Siteinspire, Fonts In Use, Typewolf, It's Nice That, design studio portfolios. Use for typography, white space, image crop, and editorial rhythm.
- `product-ui`: Mobbin, real app/product pages, design system docs. Use for usable interaction and dense product surfaces.
- `motion/explainer`: Motion Canvas, high-quality product films, science explainers, museum interactives. Use for diagrams, staged mechanisms, and temporal storytelling.
- `domain-specific`: real artifacts from the subject: product photos, album covers, museum catalogs, game artbooks, research papers, maps, packaging, venue photography, archival images.

Prefer real, current, official, or reputable references when brand/product accuracy matters. Browse when the reference or subject may have changed.

## Recommended Sources

Use these as starting points, not as mandatory links:

- Awwwards: https://www.awwwards.com/
- The FWA: https://thefwa.com/
- Siteinspire: https://www.siteinspire.com/
- Godly: https://godly.website/
- Readymag Awards: https://readymag.com/awards/
- Typewolf: https://www.typewolf.com/
- Fonts In Use: https://fontsinuse.com/
- Mobbin: https://mobbin.com/
- It's Nice That: https://www.itsnicethat.com/

Open-source implementation references:

- Slidev: https://github.com/slidevjs/slidev
- reveal.js: https://github.com/hakimel/reveal.js
- Motion Canvas: https://github.com/motion-canvas/motion-canvas
- Spectacle: https://github.com/FormidableLabs/spectacle

Use implementation references for mechanics, theme structure, presenter behavior, and animation architecture. Do not treat their default themes as the visual ceiling.

## Teardown Protocol

For each chosen reference, capture only the useful decisions:

1. `First-viewport signal`: What is the first unmistakable thing the audience sees? Product, person, object, word, material, motion, or spatial metaphor?
2. `Type personality`: What font mood leads? Geometric, serif, display, calligraphic, condensed, grotesk, monospaced, editorial, brutal, luxurious, institutional?
3. `Image behavior`: Full-bleed, close crop, object on stage, collage, documentary, archive, diagram, generated atmosphere, macro texture, or no image?
4. `Composition`: Center stage, side rail, poster, split, stack, orbit, timeline, annotated artifact, editorial spread, cinematic frame, dense proof canvas?
5. `Color role`: Is color a brand field, signal accent, material cue, chapter shift, or emotional wash? Name base, accent, contrast, and forbidden overuse.
6. `Density`: Sparse, compact, museum label, launch keynote, editorial article, dashboard, proof wall. Where is detail allowed?
7. `Motion/interaction`: Static, snap slide, reveal sequence, parallax, hover, timeline, scroll, kinetic diagram. Use only if it improves comprehension.
8. `Anti-pattern avoided`: What did the reference refuse to do? Generic hero split, large empty cards, icons as decoration, low-contrast charts, ornamental grids.

Keep this teardown short. A good reference note is 6-10 lines, not an essay.

## Transfer Rules

After teardown, write 3 transfer rules for the deck:

- `One shape language`: e.g. mask silhouette, superellipse, lens crop, specimen tray, orbit, waveform, folded map, object shadow, stage beam.
- `One type rule`: e.g. display Chinese titles + tiny sans labels; geometric sans for product claims; serif-led museum labels; monospaced proof captions.
- `One image rule`: e.g. product must be full-bleed and real; generated images only for atmosphere; proof objects get direct annotations; no decorative stock.

Optional fourth rule:

- `One motion rule`: e.g. only page snaps; reveal labels after image; diagram elements enter in reading order; no motion that hides source/proof.

If a proposed slide does not obey at least two of the transfer rules, redesign it.

## Reference Brief Template

Use this compact brief before production:

```text
Reference stack:
- Brand/keynote:
- Editorial/type:
- Domain-specific:

Chosen visual intent:
- Mood:
- Type:
- Palette:
- Shape language:
- Image behavior:
- Density:

Transfer rules:
1.
2.
3.

Must not do:
-
-
-
```

## Anti-Slop Checklist

Reject the visual direction before coding when any answer is yes:

- Could the same layout work after swapping the topic noun?
- Is the strongest page only the cover?
- Are three or more slides based on big empty cards?
- Are titles mostly top-left by habit rather than because the scene needs it?
- Is the typography just a system default with no subject-specific intent?
- Is the background doing decorative work while the main subject is absent or tiny?
- Are icons, rings, grids, or ghost words pretending to be composition?
- Are real product/place/person/object assets replaced by generic generated atmosphere?
- Are proof objects hidden in low-contrast panels instead of annotated directly?
- Does the design look like an AI dashboard rather than a directed presentation?

## Slide-Level Upgrade Moves

When a slide feels flat, choose one upgrade move:

- Replace a card grid with a single annotated artifact.
- Convert a topic title into a stage line or contradiction.
- Crop the real subject larger until it becomes the visual event.
- Move the text mass to optical center and make supporting copy smaller.
- Turn bullets into direct labels attached to image regions, timeline points, or diagram nodes.
- Swap generic dark gradient for material-specific color: paper, metal, glass, bone, ink, lacquer, mist, screen glow.
- Use one deliberately oversized word, number, quote, or object instead of many medium elements.
- Create a contact-sheet rhythm change: image-led -> text-led -> proof-led -> synthesis.

## Copy And Copyright Safety

- Do not copy proprietary layouts, slogans, body copy, illustrations, or screenshots wholesale.
- Do not reproduce brand marks unless assets are user-provided, official, or otherwise appropriate for the task.
- Do not quote more than short compliant excerpts from any source.
- Translate visual principles into original composition, DOM text, and local assets.

## Final Reference Gate

Before final QA, inspect the contact sheet and ask:

- What did this deck learn from references that is visible on screen?
- Which slide would not exist without the reference teardown?
- Is the deck more specific to the topic than before?
- Did the references improve clarity, not just decoration?

If the answer is vague, the reference system was not actually used. Redesign the weakest 2-3 slides.
