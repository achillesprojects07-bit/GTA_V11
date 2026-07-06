# Καθημερινά V14.7A — Full Ladder Audit + Foundation-First Fix

This is a correction build made before proceeding to V14.8.

## Why this build exists
V14.7 had the mastery engine, worksheet bank, accent lab, and listening/speaking worksheets, but the first active concept was still `γ + αυ focus: γαύρος`. That was useful as an example from the earlier pronunciation discussion, but it was not correct as the first step of a true beginner/Kumon-style ladder.

## What V14.7A fixes
- The first lesson is now **L0.01 Greek vowels: α ε ι ο ου**.
- `γαύρος` is moved later as an applied integration lesson after:
  - vowels
  - stress
  - syllables
  - easy word reading
  - γ alone
  - χ
  - θ / δ
  - ρ
  - αυ / ευ
- Every level L0–L11 now has explicit concept steps.
- The app chooses the current lesson by explicit **level + order + prerequisite mastery**, not by whichever concept appears first in the array.
- L8 and L9 are no longer empty level shells.
- The Levels / Today / Worksheets / Library / Review screens show a ladder audit panel.
- The method remains: **study first → timed answer-work → corrections outside timer → repetition → mastery**.

## Mastery rule preserved
- Studying a concept is not mastery.
- Time spent is not mastery.
- Mastery requires accurate worksheets, corrections, and repeated strong rounds.

## Next build after this
Proceed to V14.8 only after confirming the ladder now starts with foundational reading and not with γαύρος.

## Smoke test
Run:

```bash
npm test
```

Expected:

```text
Καθημερινά V14.7A Ladder Audit smoke test passed.
```

## Time contract reminder
Concept study is outside the worksheet timer. Corrections are outside the worksheet timer.
