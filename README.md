# GTA V12.6 — Native Review + Field-Safe Content

This build continues the V12 redesign without adding another practice mode. It adds a content-trust layer so a fluent/native Greek speaker can audit the phrase library before the app is relied on in the field.

## Added in V12.6

- Content Review panel in More
- Phrase confidence labels: Verified, Needs review, Avoid in field, Too formal, Too casual, Better alternative exists
- Field-safe survival ordering for “I’m here now”
- Review search and filters
- CSV export for native speaker review
- JSON export/import for reviewed phrase metadata
- Import updates only review metadata; learner progress and SRS are preserved
- Survival cards now display confidence badges

## Preserved

- Single-file offline-first PWA
- Today’s 5 + Due Now
- Trip-date deadline scheduling
- Honest mastery model
- Record compare
- Optional Greek-script track
- Gentle nudges
- Progress Truth + backup safety
- SRS ladder `[1, 3, 7, 21, 60]`

## Review export columns

`id, kind, category, situation, english, greek, greek_script, romanization, register, survival_priority, current_confidence, review_notes, suggested_replacement, reviewer, updated`

## Suggested next build

GTA V12.7 — Real Phone UX Test Fixes. Use actual iPhone testing to fix tap friction, scroll issues, audio reliability, and confusing screens before calling the redesign stable.
