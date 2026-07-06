# Καθημερινά V14.11 — Mastery Lock + Unlock Enforcement

This build continues from **V14.10 Full Worksheet Volume Fill by Level** and adds the stricter Kumon-style progression rule:

**Library study teaches. Worksheet accuracy proves. Corrections repair. Repetition strengthens. Only then does the next concept unlock.**

## What V14.11 adds

- Strict mastery lock/unlock layer across the whole ladder.
- The app chooses the next concept by explicit level/order/prerequisite mastery.
- A concept cannot unlock the next concept just because it was opened or studied.
- A concept cannot be mastered by time spent.
- Mastery now requires:
  - Library study logged.
  - 3 strong worksheet rounds.
  - 90%+ accuracy.
  - No wrong answers in a strong round.
  - Correction queue cleared.
  - Repetition queue cleared.
- One wrong answer blocks unlock until corrected.
- Two or more wrong answers assign repetition before new work.
- Locked Library pages and worksheets route the learner back to the prerequisite/current concept.
- New V14.11 lock panels in Today, Levels, Worksheets, Library, and Review.
- Worksheet results now show whether unlock is blocked or proven.

## Preserved from earlier builds

- V14.7A foundation-first ladder: first lesson remains **L0.01 Greek vowels: α ε ι ο ου**.
- **γαύρος** remains later as an applied integration lesson, not the first lesson.
- V14.4A time contract: concept study is outside worksheet time, corrections are outside worksheet time.
- V14.10 volume fill: 20 / 30 / 45 / 60 / 90 minute blocks still generate full answer-work volume.
- No unverified plural tables, verb tables, or exam content are invented.
- `const LS='gta_v12_state'` is preserved.

## Next recommended build

**V14.12 — Tutor/Partner Correction Mode**

This should add partner correction workflows: one sound/pattern at a time, 3-try limit, closer/not yet/correct marks, and saved notes.
