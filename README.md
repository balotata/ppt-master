# PPT Master

`ppt-master` is a Codex skill for creating, editing, reviewing, and upgrading SOTA-level presentation decks.

It is designed as a presentation director rather than a simple slide generator: it routes each request to the right workflow, builds a claim spine before design, enforces visual rhythm, handles research and asset provenance, and verifies the result before delivery.

## What It Helps With

- Create web-native HTML/keynote decks for browser-first, image-rich, or Remotion-ready delivery.
- Create editable PPTX decks from a topic, report, source pack, or rough outline when PowerPoint output is explicitly needed.
- Rewrite weak decks into sharper executive, investor, product, strategy, or technical narratives.
- Follow a supplied template or existing deck style.
- Make targeted edits to existing presentations.
- Review decks and return prioritized issues.
- Write speaker notes, talk tracks, and rehearsal scripts.

## Repository Layout

```text
ppt-master/
  SKILL.md
  agents/openai.yaml
  references/
    task-router.md
    narrative-system.md
    design-quality.md
    pptx-workflow.md
    web-deck-spec.md
    web-aesthetic-playbook.md
    web-layout-inspiration.md
    research-and-assets.md
    qa-rubric.md

install-ppt-master-skill.ps1
README.md
.gitignore
```

The `ppt-master/` directory is the installable skill folder. Copy that folder into your Codex skills directory.

## Install On Windows

From this repository root:

```powershell
.\install-ppt-master-skill.ps1
```

Or copy manually:

```text
ppt-master -> C:\Users\<you>\.codex\skills\ppt-master
```

Restart or open a new Codex thread after installing.

## Install On macOS/Linux

```bash
mkdir -p ~/.codex/skills
cp -R ppt-master ~/.codex/skills/ppt-master
```

Restart or open a new Codex thread after installing.

## Example Prompts

```text
Use ppt-master to create a 12-slide HTML keynote deck.
Topic: How AI agents change enterprise software.
Audience: CIOs and product leaders.
Tone: executive, sharp, research-backed, bilingual Chinese/English.
```

```text
Use ppt-master to review this deck.
Prioritize story, slide titles, visual rhythm, chart clarity, and executive polish.
```

```text
Use ppt-master to create an HTML keynote deck.
Topic: Why Diablo-like ARPGs are addictive.
Pages: 18.
Style: dark editorial, cinematic, with generated key visuals.
```

## Development Notes

- Edit the canonical skill in `ppt-master/`.
- Run `.\install-ppt-master-skill.ps1` after changes to sync it into your local Codex skills directory.
- Generated sample decks, large assets, zip packages, and old local build folders are ignored by `.gitignore`.
- The repository intentionally does not choose a license. Add one before publishing if you want others to reuse or modify the skill under explicit terms.

## Quality Bar

The skill is meant to reject generic slide output. A finished deck should have:

- A clear thesis and claim spine.
- Slide titles that state conclusions.
- Proof objects that support each claim.
- A contact sheet with visible rhythm.
- Credible sources for factual claims.
- Real or verified brand assets.
- Editable PPTX output when PPTX is requested.
- DOM-based text/data and keyboard navigation when HTML is requested.
- A dominant visual or proof object on most web slides, not decorative grids or report panels.
- GitHub/open-source web presentation lessons applied when making substantial web decks.
