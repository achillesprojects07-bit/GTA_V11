# Καθημερινά V13.6.1 — Adaptive Daily Session

V13.6.1 adds a priority-ordered Today session that fits the time available today.

## What changed
- Added “How much time today?” controls: 5 min, 15 min, 30 min, Surprise me.
- Added a Today’s Session checklist with progress and estimated time left.
- Due reviews come first, weak spots next, dialogue rehearsal if time allows, and new content last.
- The session reuses existing SRS, quiz, and dialogue rehearsal flows.
- Session state is preserved in backup/restore/reset-safe storage.

## Release-lock checks
- README heading matches V13.6.1.
- Visible app header shows V13.6.1.
- APP_VERSION is V13.6.1.
- Build Integrity panel shows V13.6.1.
- Service-worker cache is gta-v13-6-1-adaptive-session.
- npm test passes from the extracted final zip.
