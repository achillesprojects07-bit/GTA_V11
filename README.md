# Καθημερινά V15.1 — Kumon Mastery Worksheets

Adds a Kumon-method mastery-worksheet system on top of V15.0C (and includes the anchor-tab
click fix). Built per Jeffery's specification (27-year Kumon instructor).

## The mastery model (as specified)
- One worksheet SET mastered = 100% accuracy (no timer — accuracy only).
- Wrong answers are CORRECTED to 100% every time (re-answer the same items) — this is the
  learning mechanism.
- More than 2–3 mistakes on a set → after correcting to 100%, a FRESH repeat set is required.
- A topic unlocks the next only when mastered.
- End of level → ACHIEVEMENT TEST: one question sampled from every topic; scored as a whole;
  below 80% → the missed topics reopen for repeat.
- Free writing/speaking stays OUTSIDE the mastery gate (separate practice / real-life use).

## What's in this build
- Mastery engine: topic → set → 100% gate → same-item correction → >3-mistake fresh repeat →
  achievement test → per-topic remediation.
- Level 0 (The Greek Alphabet) authored as the working proof: vowels, easy consonants, the
  hard sounds (γ, χ, θ/δ, αυ/ευ), and stress — 7 topics.
- Wired to the "Worksheets" tab; new "Mastery Worksheets" levels screen.
- Anchor-navigation tab fix (V15.0C tabs were `<a>` anchors not wired to the router).

## HONESTY FLAGS (per Jeffery's preferences)
- [UNCERTAIN] Level 0 content is AI-drafted and practice-only. The letter-sound mappings are
  standard, but the teaching SEQUENCE and example choices are my inference — NOT verified by a
  Greek pedagogue. Have a Greek speaker/teacher confirm before treating as authoritative.
- [UNCERTAIN] The "re-answer the same items" mastery rule (Jeffery's explicit choice) is built
  as specified. Note: in language learning this may train item-recall over pattern-transfer;
  flagged for observation, not overridden.
- [PLAUSIBLE] The "repeat = fresh items" on >3 mistakes was my design call within Jeffery's
  "delegate to you" instruction; the correction step still uses same items as specified.
- Only auto-gradable item types (MCQ) live inside the mastery gate. This is a hard technical
  limit: the app cannot honestly grade free production.

## Release checks
- Header + APP_VERSION: V15.1
- Service-worker cache: gta-v15-1-kumon-mastery
- Package version: 15.1.0
- Smoke test passing
- gta_v12_state storage key preserved (all prior progress intact)

## Still to do (future stages)
- Levels 1–7 content authoring (present tense → past → A2 consolidation).
- Library "study first" screens (grammar concept + vocab per topic) feeding each worksheet.
- Greek-speaker verification pass on all drafted content.
