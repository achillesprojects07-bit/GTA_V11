# Καθημερινά V15.4 — Service Worker / Cache Hardening

This build continues from the working V15.3 gradual-content baseline. It focuses on deployment safety and old-cache prevention so broken builds such as V15.0C do not keep returning after GitHub uploads.

## What changed
- Updates visible version to **V15.4**.
- Rewrites the service worker with a new cache: `gta-v15-4-cache-hardening`.
- Deletes old GTA caches automatically during service-worker activation.
- Uses network-first / no-store loading for `index.html` so the newest GitHub file is preferred.
- Adds service-worker message handlers for `SKIP_WAITING` and `CLEAR_CACHES`.
- Registers the service worker with `updateViaCache:'none'`.
- Adds Review-tab cache tools:
  - Refresh app version
  - Clear old app caches
  - Check cache status
- Updates `manifest.json` start URL to `./index.html?v=15.4` to reduce stale PWA starts.

## Preserved
- Working V15.3 stable navigation shell.
- Clean Today tab.
- Restored Levels, Library, Worksheets, and Review content.
- `gta_v12_state` saved practice data.
- Kumon mastery method: study first, timed worksheet answer-work, correction, repetition, 3 strong rounds, unlock.

## Upload note
After uploading to GitHub Pages, open Review → Version + cache hardening → tap **Clear old app caches** once. Then reopen the app. This should stop old V15.0C/V15.2/V15.3 cached files from returning.
