# GTA V12.8 — Release Candidate Cleanup

This is the first release-candidate build of the redesigned Greek Travel App.

## What changed in V12.8

- Final main navigation cleanup:
  - Today
  - Practice
  - I’m Here
  - Progress
  - More
- Progress is now a first-class screen instead of being buried in More.
- More is now a single clean Settings / control room.
- Added release-quality empty states for:
  - no due reviews
  - no trip date
  - no native-reviewed phrases
- Added Build Integrity panel:
  - version label
  - phrase count
  - vocab count
  - total card count
  - local storage status
  - service worker support
  - last backup date
  - release-candidate checklist
- Audio feedback remains consistent:
  - visible “Playing…” toast
  - active button state
  - graceful fallback if speech synthesis is unavailable
- Backup download now uses the V12.8 filename and records last backup date.

## Preserved from earlier V12 builds

- Offline-first single-file PWA structure
- Today’s 5 + Due Now daily loop
- Trip-date deadline-aware scheduling
- Honest mastery labels
- I’m Here survival mode
- Record-compare support
- Optional Greek-script track
- Gentle nudges
- Progress Truth dashboard
- Backup / restore / reset safety
- Native review + field-safe content layer
- SRS ladder: `[1, 3, 7, 21, 60]`

## New repository deployment

1. Create a new GitHub repository.
2. Upload all files in this folder:
   - `index.html`
   - `manifest.json`
   - `service-worker.js`
   - app icons
   - `README.md`
   - `package.json`
   - `tests/smoke-test.js`
3. In GitHub, go to **Settings → Pages**.
4. Set source to the main branch root.
5. Open the GitHub Pages URL on iPhone Safari.
6. Tap **Share → Add to Home Screen**.
7. Open the installed app once while online.
8. Test:
   - Today screen loads
   - Practice starts
   - I’m Here audio plays
   - Progress screen loads
   - More / Settings loads
   - Backup export works
   - App reopens offline

## Local smoke test

```bash
npm test
```

The smoke test checks that the release-candidate screens and core functions are present.

## Release note

V12.8 should be tested on the real iPhone before renaming the line to V13.0 Stable.
