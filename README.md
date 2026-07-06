# Καθημερινά V14.8 — Reading + A1/A2 Comprehension Worksheet Engine

This build continues from **V14.7A Ladder Audit + Foundation-First Fix**.

## Why this build exists
V14.7A corrected the learning ladder so the first concept is **L0.01 Greek vowels**, not `γαύρος`. V14.8 proceeds only after that audit and adds reading/comprehension as real worksheet answer-work.

## What V14.8 adds
- Reading worksheet bank.
- A1/A2 comprehension engine scaffold.
- Read + choose meaning questions.
- Find the Greek line questions.
- Read + type exactly questions.
- Short comprehension questions built from existing mapped app content.
- Reading proof logs in Review/Progress.
- Reading segment inside the timed worksheet block.
- 20 / 30 / 45 / 60 / 90 minute worksheet plans now include recognition, listening, reading, production, speaking, mixed review, and mastery check.

## Mastery rule preserved
- Concept study is outside the worksheet timer.
- Corrections are outside the worksheet timer.
- Reading/comprehension still follows accuracy, correction, repetition, and mastery gates.
- A wrong reading answer creates correction.
- Repeated reading mistakes require repetition.

## Verified-content boundary
V14.8 does **not** invent long Greek exam passages. It creates reading worksheets from content already inside the app and leaves longer official A1/A2 passages as an engine/scaffold for verified content later.

## Important V14.7A structural fix carried forward
The V14.7A ladder code is now inside an executable `<script>` block. The ladder audit is no longer plain text after `</html>`.

## Next build after this
V14.9 should be **Content Cleanup + De-duplication**: remove repeated/useless cards and keep only purposeful content mapped to the ladder.

## Smoke test
Run:

```bash
npm test
```

Expected:

```text
Καθημερινά V14.8 Reading Comprehension smoke test passed.
```
