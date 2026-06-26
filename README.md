# Καθημερινά — V13.4

A single-file offline PWA extending the V13.0 Greek learning app into an A1/A2 exam-prep scaffold for the Greek Certificate of Attainment / Ellinomatheia.

This build preserves the existing daily Greek conversation companion while adding a separate **Exam prep** area for structured A1/A2 readiness across four skills: Listening, Reading, Writing, and Speaking.

## Critical content principle

This app is a scaffold for verified content supplied by the user or a tutor. It does **not** auto-generate Greek words, sentences, grammar, translations, exams, or audio. Any seeded exam-prep content is clearly marked:

- `REPLACE WITH VERIFIED CONTENT`
- `verified: false`
- visible `unverified` badge in the UI

Do not treat placeholder content as real Ellinomatheia preparation material.

## What changed in V13.4

- Added A1/A2 level tagging for learnable items.
- Added verified/unverified flags for content review.
- Added optional grammar / “why” notes on phrase and vocabulary cards.
- Added per-level Progress counts: `A1: X of Y field-ready`, `A2: X of Y field-ready`.
- Added `DATA.grammar` with expandable grammar units.
- Added `DATA.reading` with objective multiple-choice auto-grading.
- Added `DATA.listening` with optional real audio support and TTS fallback marked as synthetic audio.
- Added `DATA.writing` with model-answer reveal and self-rating into SRS.
- Added `DATA.speaking` using the existing record-compare / self-rating path.
- Added `DATA.mock` for timed four-skill mock exam runs.
- Added Exam prep inside Practice so the daily Today loop stays uncluttered.
- Added smoke tests for the new exam-prep functions and data structures.
- Bumped service-worker cache to `gta-v13-4-1-polish`.

## Preserved anchors

These are intentionally preserved for upgrade safety:

- `const LS='gta_v12_state';`
- `function save(){ localStorage.setItem(LS, JSON.stringify(state)); renderCountdown(); ... }`
- `ITEMS` built from `DATA` plus `state.custom`
- `function byId(id){return ITEMS.find(x=>x.id===id)}`
- `nextDueDate(id,ok,quality)`
- `fieldReady(id)`
- `masteryLabel(id)`
- `speakWithFeedback(id,rate)`
- `esc()`
- five-place nav: Home, Practice, Survival, Progress, More

## Deploy

Upload the folder contents to a GitHub repository root, enable GitHub Pages, open the Pages URL in iPhone Safari, then Add to Home Screen.

Before relying on it, test:

1. Open Practice → Exam prep.
2. Confirm Grammar, Reading, Listening, Writing, Speaking, and Mock exams render.
3. Go to More → Content Review and set one item to A2.
4. Go to Progress and confirm the A2 field-ready count includes that item.
5. Try a Reading item and confirm auto-grade works.
6. Try a Writing item and confirm model-answer reveal plus self-rating works.
7. Start a mock exam and confirm it walks through the four sections.
8. Export and restore a backup.
9. Reopen offline after one online load.

## Testing

Run:

```bash
npm test
```

Expected output:

```text
GTA V13.4 Καθημερινά everyday-dialogues smoke test passed.
```


## V13.4.8 Everyday Dialogue Layer

Adds 30 practice-only everyday dialogues across partner, family table, home, day check-ins, food decisions, social moments, and feelings. All added dialogues keep `nativeReview:false` and should be partner/tutor spot-checked before relying on them with real people.
