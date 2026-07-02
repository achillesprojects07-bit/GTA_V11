# Καθημερινά V13.6.19 — Confidence Engine Dashboard

V13.6.19 adds the weekly Confidence Engine for the six-month speaking/listening goal.

## What changed

- Adds a 6-month confidence dashboard on Today.
- Adds a Confidence Engine panel on Progress.
- Tracks weekly speaking reps, listening reps, partner practice, app-alone practice, grammar used aloud, real-world Greek moments, and freeze/try-again signals.
- Adds quick manual logging when practice happens outside the built-in app flow.
- Adds a Practice shortcut for the confidence dashboard.
- Keeps Conversation Coach, Understanding Real Greek, Conversation Memory, A2 Grammar Gap Repair, and Living in Greece Mode intact.

## Preserved

- `const LS='gta_v12_state'` is unchanged.
- Existing progress, imported exam items, conversation logs, listening ladder, conversation memory, A2 grammar-gap logs, and Living in Greece logs remain on the same storage key.

## Verification

- App header shows `Καθημερινά V13.6.19`.
- `APP_VERSION` is `V13.6.19`.
- Service-worker cache is `gta-v13-6-19-confidence-dashboard`.
- Package version is `13.6.19`.
- Smoke test checks syntax and required Confidence Engine functions.

## Personal-use note

The Confidence Engine is a coaching signal, not a CEFR certificate. Official papers and human feedback still calibrate exam readiness and natural spoken Greek.
