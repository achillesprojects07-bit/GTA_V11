# Καθημερινά V13.6.11 — Listening Audio Fallback Fix

This build keeps everything from V13.6.10 (verified exam import loader; Reading/Listening/
Writing/Speaking lists show imported official items first and hide placeholder cards when
real imports exist) and adds a fix for broken/unresolved audio links in Listening items.

---

## What changed in V13.6.11

**Problem:** `listeningCard()` and the listening branch of `mockItemBlock()` only checked
whether `item.audioUrl` was a non-empty string — not whether the URL actually resolved.
A broken link (e.g. wrong GitHub Pages path) rendered a native `<audio controls>` player
that silently failed: 0:00 / 0:00, disabled play button, no fallback, no explanation to the user.

**Fix:** Both functions now attach an `onerror` handler to the `<audio>` element. If the
browser fails to load the source, the broken player is hidden and the same "🔊 Play TTS
fallback" experience used for empty-`audioUrl` items appears automatically. Once the real
audio file is hosted correctly, the native player starts working again on its own — no
further code change needed.

**Files touched this version:** `index.html`, `package.json`, `service-worker.js`.

[ESTABLISHED] The patched inline `<script>` block was re-parsed with Node's JS parser after
every edit — 0 syntax errors. `package.json` was JSON-validated. `service-worker.js` was
parsed as valid JS.

[UNCERTAIN] Not yet tested in an actual browser/DOM against a real broken URL. The `onerror`
event on `<audio>` is a standard, well-supported HTML5 media event, so risk is low, but
"parses cleanly" is not the same as "behaves correctly at runtime." Verify by loading the
Listening screen with a still-broken `audioUrl` and confirming the TTS fallback button
appears within a second or two.

---

## What this version does NOT include

- **The corrected Task 2 / Task 3 Listening JSON** (Ελληνομάθεια A1 Series 1) is not baked
  into this file. That content lives in your browser's `localStorage` under the
  `gta_v12_state` key, added via the in-app import loader — it's independent of this file.
- **The audio hosting problem is still unresolved.** Both `GTA_10` and `GTA_V11` paths to
  `a1e_kpl_v_akoystiko.mp3` returned 404 as of this build. The correct file path in your
  repo has not yet been confirmed.

---

## Release checks — V13.6.11

- Visible app header shows V13.6.11
- `APP_VERSION` is V13.6.11
- Service-worker cache is `gta-v13-6-11-listening-audio-fallback` (bumped from
  `gta-v13-6-10-imported-exam-visibility` — **this bump is required**, not cosmetic: without
  it, PWA clients with the old service worker installed would keep serving the cached
  V13.6.10 `index.html` and never see this fix, even after you upload the new file)
- Package version is 13.6.11
- Import loader remains available from Practice and More
- Existing `gta_v12_state` storage key is preserved
- Build integrity panel (More → Build integrity) now lists "Listening audioUrl load failure
  falls back to TTS instead of a dead player" as a checked item
- Stable launch checklist (More) now includes "Confirm a broken Listening audioUrl falls
  back to TTS instead of a dead player"

---

## Before deploying

Export a backup from inside the app (More → backup export) before replacing your live
`index.html`, in case your hosting setup doesn't preserve `localStorage` across a file swap
the way you expect. [UNCERTAIN] — no visibility into your actual GitHub Pages deployment
behavior from here, so this is a precaution, not a guarantee either way.
