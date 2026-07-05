# Καθημερινά V14.0.1 — Today Page Polish

V14.0.1 polishes the Today page on top of the V14 mastery ladder foundation. It keeps the Kumon-style structure but makes Today clearer and less technical for daily use.

Main tabs:
- **Today** — assigned daily path and current concept worksheet.
- **Levels** — mastery ladder with stepping-stone levels and concept atoms.
- **Library** — study shelves for alphabet/sounds, vocabulary, grammar, dialogues, exam import, settings/backup.
- **Worksheets** — graded worksheet work with accuracy, wrong-answer correction, and repetition.
- **Review** — weak spots, due reviews, mistakes, saved recordings, and progress proof.

Mastery rules introduced:
- Concept atoms are studied in order: isolated practice → contrast practice → mixed review → mastery check.
- Worksheets are graded.
- Wrong answers create correction work and weak spots.
- Weak spots remain outside the main timed session.
- Nouns are now detected with article/gender from existing cards as the base for V14.1 enrichment.
- Verbs are flagged for future tense/form enrichment.
- A curriculum audit panel shows how many existing cards, vocabulary records, dialogues, and turns are mapped.

Preserved:
- `const LS='gta_v12_state'`
- Tap-to-translate
- Record save/delete
- User-only recording guard
- Hard letters + diphthongs drill
- Weak spots warm-up outside timer
- Existing SRS/progress data

V14.1 should deepen the worksheet engine with more concept iterations, explicit noun plural fields, verb tense tables, and a full curriculum manifest for every item.


V14.0.1 Today polish:
- Replaced unlabeled 1–5 boxes with Study → Practice → Worksheet → Correct → Master.
- Moved curriculum audit language off the main Today emotion path.
- Rewrote current concept into current level + today’s concept.
- Made the graded worksheet feel required, not optional.
- Clarified timer math: main path time versus correction/repetition reserve.
- Replaced vague “Skip this step” during active session with “I know this · next step.”
