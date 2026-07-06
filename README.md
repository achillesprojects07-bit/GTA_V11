# Καθημερινά V14.10 — Full Worksheet Volume Fill by Level

This build continues from **V14.9 Content Cleanup + De-duplication Audit**.

## Why this build exists
V14.4 made the 2,820 micro-round ladder visible, and V14.4A made worksheet time separate from concept study. V14.10 makes the next correction: the selected worksheet block must actually be filled with answer-work. If the learner chooses 60 minutes, the app should prepare about 48 worksheet micro-rounds, excluding Library study and excluding post-session correction.

## What V14.10 adds
- Full worksheet-volume fill layer for the complete ladder.
- 20 / 30 / 45 / 60 / 90 minute worksheet blocks now request the full planned number of answer-work items.
- A 60-minute block is treated as about **48 micro-rounds** of worksheet answering.
- Each level now has a volume-fill audit connecting:
  - level target
  - unit targets
  - concept steps
  - available source records
  - generated worksheet families
- Worksheet queues are enriched with more forms from existing verified app content:
  - choose meaning
  - choose Greek
  - type Greek
  - read and copy Greek
  - article identification where the article is already present
  - say clearly / self-check sound proof
- Worksheet records are tagged with `volumeVersion: "V14.10"`.
- Roadmap updated so the next build is **V14.11 Strict Mastery Lock / Unlock Enforcement**.

## What this build deliberately does not do
- It does not invent missing Greek plural tables.
- It does not invent full verb conjugation tables.
- It does not invent unverified A1/A2 passages.
- It does not count Library study as worksheet time.
- It does not count correction time as worksheet time.

## Mastery rule preserved
- Library study teaches the concept.
- Timed worksheet block proves answer accuracy.
- Corrections happen after the timed block.
- Repetition is assigned when wrong answers appear.
- Mastery is based on repeated accuracy, not browsing or time spent.

## Next build after this
V14.11 should be **Strict Mastery Lock / Unlock Enforcement**: prevent advancement unless the learner has passed the accuracy threshold, corrected wrong answers, completed repetition, and satisfied prerequisites.

## Smoke test
Run:

```bash
npm test
```

Expected:

```text
Καθημερινά V14.10 Full Worksheet Volume Fill smoke test passed.
```
