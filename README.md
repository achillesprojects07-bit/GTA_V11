# Καθημερινά V14.1 — Kumon-Style Greek Mastery Engine

V14.1 turns the app from a guided Greek study companion into a worksheet-centered mastery system inspired by the Kumon method.

The learning rule is now:

**Study in the Library → answer the worksheet → correct mistakes → repeat missed concepts → prove mastery through accuracy.**

Main V14.1 changes:
- Added a Library-first mastery gate for the current concept.
- Added study evidence: the learner can mark a concept as studied before worksheet work.
- Added stronger worksheet result logic: first-try accuracy, wrong-count rules, correction queue, and repetition queue.
- Added typed-answer worksheet support, not only multiple-choice questions.
- Added correction rounds for missed answers.
- Added repetition rounds when a worksheet has 2 or more wrong answers.
- Added concept mastery bars showing strong rounds, average accuracy, and corrected accuracy.
- Added a V14.1 mastery contract panel explaining the method.
- Updated Today so **Start Today’s Path** opens the current Library lesson first instead of offering a worksheet shortcut.
- Updated Worksheets so they are framed as graded answer-work, not random practice.
- Updated Review so corrections and repetitions are visible queues.
- Updated Levels so every level is a stepping stone and current level continues through Today.

Mastery rules:
- Speed is not the priority yet.
- Accuracy is the proof.
- 1 wrong answer = correction work.
- 2 or more wrong answers = repetition round.
- 90%+ with no wrong answers and prior Library study = a strong round.
- 3 strong rounds = concept mastery.
- Viewing a concept alone does not mark it mastered.

Preserved from V14.0.4:
- `const LS='gta_v12_state'`
- One-first-button Today philosophy
- Levels cleanup
- Exact Library lesson routing for current concept
- Existing vocabulary, phrases, dialogues, SRS, saved state, review queues, recordings, audio guard, PWA behavior, icons, and offline shell

Important note:
V14.1 creates the mastery engine. It does not yet fully enrich every vocabulary item with verified plural fields or every verb with full tense tables. Those belong in the next content-manifest build after the engine is stable.

Recommended next build:
**V14.2 — Full Curriculum Manifest + Verified Content Fields**
- Every vocabulary item should receive Level → Unit → Concept → Skill → Worksheet mapping.
- Nouns should get verified article, gender, singular, plural, example sentence, and topic.
- Verbs should get verified present/future forms and example sentences.
- Grammar concepts should be organized per topic and linked to worksheets.
- Unverified generated examples should remain visibly marked until tutor/user verified.
