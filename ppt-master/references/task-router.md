# Task Router

Use this file before production when the request could map to more than one presentation workflow.

## Route By User Intent

- User asks for `PPT`, `PPTX`, `PowerPoint`, editable slides, board deck, investor deck, template, corporate deck, or a file they can revise: choose PPTX.
- User asks for `网页演示`, `HTML`, `frontend-slides`, `Remotion`, browser deck, interactive deck, or cinematic webpage: choose web deck.
- User uploads or references an existing PPTX/template and asks to follow, reuse, or match it: choose `template-following`.
- User asks for "改这几页", "美化这页", "替换图表", "加一页", or localized changes: choose `targeted-edit`.
- User gives a report, transcript, article, spreadsheet, research pack, or rough outline and asks for slides: choose `rewrite-upgrade`.
- User asks "看看哪里不好", "review", "诊断", "给修改建议": choose `review`.
- User asks for talk track, notes, script, or rehearsal help: choose `speaker-support`.

## Calibration Questions

Ask only what changes the result. For most requests, ask at most 3-5:

- Audience: who is judging this deck, and what do they already believe?
- Objective: what decision, feeling, or understanding must change?
- Format: editable PPTX, web deck, PDF-like readout, or outline first?
- Source fidelity: should supplied material be preserved, rewritten, or used only as reference?
- Language: Chinese, English, bilingual, and which language leads?
- Research depth: quick synthesis, cited report, or source-verified analysis?
- Visual direction: corporate, editorial, cinematic, technical, luxury, playful, minimal, brutalist, data-dense, or reference-led?

If the user gives enough context to make a reasonable choice, proceed and state the assumption briefly.

## Risk Routing

Treat these as high-risk and slow down for source/QA:

- Finance, IR, valuation, market sizing, legal, medical, public policy, current news, model/product release dates, benchmarks, or claims about living people/companies.
- Brand-sensitive decks with logos, screenshots, customer names, partner marks, or product UI.
- Template-following or targeted-edit tasks where layout fidelity matters.
- Decks intended for investors, executives, sales, recruiting, or public release.

## Output Defaults

- Default business output: editable PPTX.
- Default creative/keynote web output: single-file HTML with local assets.
- Default review output: findings list plus prioritized repair plan.
- Default ambiguous "make a PPT" output: ask whether PPTX or web deck unless local context clearly implies one.
