# Καθημερινά V14.9 — Content Cleanup + De-duplication Audit

This build continues from **V14.8 Reading + A1/A2 Comprehension Worksheet Engine**.

## Why this build exists
After the mastery engine, ladder audit, worksheet timing contract, Accent Lab, listening/speaking, and reading comprehension layers, the next danger is content bloat. A Kumon-style app cannot feel like a shelf of random cards. Every item must be purposeful, mapped, and useful for answer-work.

## What V14.9 adds
- Content cleanup audit panels on Today, Worksheets, Levels, Library/More, and Review/Progress.
- Exact duplicate detection using Greek + English signatures.
- Same-Greek / same-English cluster review so repeated cards can be merged instead of confusing the learner.
- Curated usable-record count versus raw-record count.
- Unmapped / incomplete / verification-warning counts.
- Placeholder and machine-translated warning detection.
- Old-fragment audit so older V11/V12/V13 labels are treated as warnings, not active version truth.
- Worksheet questions are tagged with `cleanupVersion: "V14.9"` and duplicate-looking generated questions are reduced when possible.
- Revised roadmap: V14.10 should now fill the worksheet volume level by level.

## What this build deliberately does not do
- It does not invent missing Greek plurals, verb tables, or A1/A2 exam passages.
- It does not remove intentional repetition. Mastery repetition is still required when the learner makes mistakes.
- It does not delete raw content permanently; it audits and suppresses accidental duplication in the learning path where safe.

## Mastery rule preserved
- Study time is outside the worksheet timer.
- Worksheet minutes remain answer-work only.
- Corrections happen after the timed block.
- Repetition is assigned for wrong answers.
- Mastery is based on accuracy, not browsing or time spent.

## Next build after this
V14.10 should be **Full Worksheet Volume Fill by Level**: turn each ladder unit into enough actual answer-work to support the target micro-round volume.

## Smoke test
Run:

```bash
npm test
```

Expected:

```text
Καθημερινά V14.9 Content Cleanup smoke test passed.
```
