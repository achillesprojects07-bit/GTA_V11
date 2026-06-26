# GTA V13.0.2 — Search + Builder + Durable Storage

Public-stable single-file Greek Travel App build with durable IndexedDB recovery, accessible Greek text, fixed global search, and first-class custom phrase builder.

## Added in V13.0.2

- Fixed missing `searchAll(q)` used by the More search input.
- Added search entry buttons from Today and Practice.
- Added My Phrases / Phrase Builder with Google Translate handoff.
- Custom phrases are first-class `ITEMS` cards with `c` IDs, so they work with search, audio, SRS, Due Now, Today’s 5, backup and restore.
- Preserved `LS = gta_v12_state` for existing user progress.
- Kept the V13.0.1 durable IndexedDB safety net and semantic accessibility layer.

## Deploy

Upload all files to a new GitHub repository, enable GitHub Pages, open `index.html` on iPhone Safari, add to Home Screen, then test offline, audio, search, custom phrases, backup, reset, restore, and IndexedDB recovery.
# GTA V13.0 — Public Stable New Repository Release

This is the first public stable build of the redesigned Greek Travel App.

V13.0 is intentionally conservative. It does not add new learning modes. It freezes the redesigned V12 core into a clean, repository-ready release that can be uploaded to a new GitHub repo and tested on the real iPhone.

## Stable app structure

The app now has five main places:

- **Today** — Today’s 5, Due Now, trip countdown, return rhythm
- **Practice** — one focused practice room with depth controls
- **I’m Here** — audio-first survival phrases for real situations
- **Progress** — honest readiness, field-ready counts, review forecast
- **More** — settings, backup, restore, content review, build integrity

## What changed in V13.0

- Final stable version labels throughout the app
- Public-stable app title, manifest, service worker cache, package metadata, and backup filename
- Added **Stable Launch Checklist** inside the app
- Updated Build Integrity panel for V13.0
- Updated smoke test for stable-release requirements
- Added `.nojekyll` for GitHub Pages compatibility
- Added this deployment-focused README
- Preserved the V12 local storage key so users upgrading on the same URL do not lose progress

## Preserved from V12

- Offline-first single-file PWA structure
- Today’s 5 + Due Now daily loop
- Trip-date deadline-aware scheduling
- Honest mastery labels: Seen, Understood, Remembered, Field-ready
- I’m Here survival mode
- Record-compare support
- Optional Greek-script track
- Gentle nudges and return rhythm
- Progress Truth dashboard
- Backup / restore / reset safety
- Native review + field-safe content layer
- SRS ladder: `[1, 3, 7, 21, 60]`
- Embedded phrase and vocabulary library

## New repository deployment

1. Create a new GitHub repository.
2. Upload all files in this folder:
   - `index.html`
   - `manifest.json`
   - `service-worker.js`
   - `apple-touch-icon.png`
   - `icon-192.png`
   - `icon-512.png`
   - `.nojekyll`
   - `README.md`
   - `package.json`
   - `tests/smoke-test.js`
3. In GitHub, go to **Settings → Pages**.
4. Set source to the main branch root.
5. Open the GitHub Pages URL on iPhone Safari.
6. Tap **Share → Add to Home Screen**.
7. Open the installed app once while online.
8. Test the stable checklist:
   - Today screen loads
   - Practice starts
   - I’m Here audio plays
   - Slow audio works in survival cards
   - Progress screen loads
   - More / Settings loads
   - Backup export downloads
   - App reopens offline after airplane mode is turned on

## Local smoke test

```bash
npm test
```

The smoke test checks that the stable screens, V13.0 version labels, launch checklist, core functions, and PWA files are present.

## Release note

V13.0 is the stable new-repository baseline. Future builds should only start after the real iPhone test confirms the core screens work online, installed, and offline.


## V13.0.2 patch notes

- Restores the durable-storage safety net: persistent-storage request, IndexedDB `latest` snapshot, seven daily snapshots, flush on `visibilitychange` / `pagehide`, and gated startup recovery only when localStorage progress is empty.
- Adds semantic accessibility: primary navigation labels, active-page state, active screen `role=main`, and `lang="el"` spans around Greek text rendered in learning cards.
- Preserves the existing localStorage key `gta_v12_state` for upgrade safety.
