# GTA V13.1 — Greek Conversation Companion

This build reframes GTA from a travel-only Greek app into a daily companion for building real conversation with a Greek partner and their family.

## What changed

- Preserves the existing `localStorage` key: `gta_v12_state`.
- Fixes the past-date scheduler bug: past or missing milestone dates now use the full SRS ladder instead of collapsing to daily reviews.
- Reframes trip date as an optional milestone: next visit, meeting the family, moving, or daily rhythm.
- Adds small starter roleplay dialogues in `DATA.dialogues`.
- Dialogue turns are first-class `ITEMS`, so user turns can be graded into the same SRS/mastery system.
- Adds a soft three-tier path: building blocks → glue/comprehension → real exchanges.
- Keeps My Phrases / “I wanted to say…” capture with Google Translate handoff and machine-translation warning.
- Keeps durable IndexedDB safety net and accessibility layer from V13.0.1/V13.0.2.

## Deploy

Upload this folder to a new GitHub repository, enable GitHub Pages from the repository root, open on iPhone Safari, add to Home Screen, test audio, test offline, and export a backup.

## Native review note

Starter dialogues and machine-translated custom phrases are marked for review. A fluent/native Greek speaker should verify important phrases before real use.
