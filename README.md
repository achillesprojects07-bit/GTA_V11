# Καθημερινά V14.2 — Full Curriculum Manifest + Verified Content Fields

V14.2 builds on the V14.1A Kumon-style mastery engine.

The learning method remains:

**Study in the Library → answer the worksheet → correct mistakes → repeat missed concepts → prove mastery through accuracy.**

V14.2 adds the missing curriculum spine:

**Level → Unit → Concept → Library lesson → Worksheet → Mastery**

Main V14.2 changes:
- Added a full curriculum manifest layer for the app content.
- Every learnable item now receives a curriculum address inside the mastery ladder.
- Added manifest statistics for mapped items, levels, noun records, verb-like records, and fields needing verification.
- Added a Curriculum Manifest browser in the Library.
- Added current-concept curriculum address cards inside Library lessons.
- Added worksheet address labels so answer-work is tied to a level and concept.
- Added verified-content field schema for nouns, verbs, phrases, and dialogues.
- Noun records now expose article, inferred gender from the existing article, singular, pending plural, pending example sentence, topic, and verification status.
- Verb-like records now expose pending lemma/future/example fields instead of pretending unverified grammar is complete.
- Curriculum audit is now a lower, collapsible manifest audit.
- Levels now include a manifest-by-level view.
- Progress now includes manifest coverage so the learner can see whether the whole app is mapped.

Important content rule:
V14.2 does **not** invent Greek plural forms, verb tables, or example sentences. Missing grammar fields are marked **pending verification** until supplied or checked by the user, a tutor, or a verified source.

Preserved from V14.1A:
- `const LS='gta_v12_state'`
- Library-first mastery gate
- Worksheet accuracy scoring
- Correction queue
- Repetition queue
- 90% gate and 3 strong-round mastery logic
- Exact Library lesson routing for the current concept
- Existing vocabulary, phrases, dialogues, SRS, saved state, review queues, recordings, audio guard, PWA behavior, icons, and offline shell

Recommended next build:
**V14.3 — Grammar Concept Library + Topic Grammar Pages**
- Build real grammar concept pages per topic.
- Add verified noun plural tables.
- Add verified verb present/future mini-tables.
- Link grammar explanations directly to worksheet families.
- Keep all unverified examples visibly marked until checked.
