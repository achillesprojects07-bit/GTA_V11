# Καθημερινά V15.0 — True Greek Fluency Path

This build continues from **V14.14 A1/A2 Exam Simulation Layer** and consolidates the app into the full learner-facing pathway.

V15.0 is not just another feature layer. It is the system unification build: the learner should open the app and immediately know the next correct action.

## What V15.0 adds

- A unified **True Greek Fluency Path** on Today.
- One clear action: **Study / answer / correct / repeat / master / unlock**.
- Command Center view for the whole learning system.
- Current-step resolver based on real mastery state.
- Mastery gate summary:
  - Library studied
  - worksheet rounds
  - average accuracy
  - strong rounds
  - correction queue
  - repetition / exam repair
- Foundation-first order confirmation: first lesson remains **L0.01 Greek vowels: α ε ι ο ου**.
- **γαύρος** remains later as an applied integration lesson.
- Daily page now frames all earlier engines as one path instead of scattered features.
- System panels across Levels, Library, Worksheets, and Review.
- Preserves the 60-minute worksheet-time contract: concept study and corrections are outside the timer.
- Preserves V14.11 mastery locks: no unlock by browsing, exam simulation, or partner approval alone.

## Preserved from earlier builds

- `const LS='gta_v12_state'` remains preserved.
- V14.7A foundation-first ladder.
- V14.10 full worksheet volume fill.
- V14.11 strict mastery lock / unlock enforcement.
- V14.12 tutor / partner correction mode.
- V14.13 writing + sentence production engine.
- V14.14 A1/A2 exam simulation layer.
- Offline-first single-file PWA behavior.

## V15.0 learning rule

The app is now organized around this complete flow:

**Library study → timed worksheet answer-work → correction outside timer → repetition outside timer → 3 strong rounds → mastery → next concept unlock.**

## Recommended next work after V15.0

Do not add random new features first. The next work should be a stability and QA pass:

**V15.1 — Full QA, Console Error Sweep, and Live Deployment Hardening**

Then continue with verified-content expansion only after the V15 system is proven stable on the phone.
