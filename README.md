# Καθημερινά V13.6.33 — Record Save/Delete

V13.6.33 preserves the V13.6.32 Tap-to-Translate and Record UX fixes, then adds the missing control after recording: **Save recording** or **Delete recording**.

## What changed

- After any Record button finishes, the app shows playback plus two clear choices: **Save recording** and **Delete recording**.
- New recordings are temporary until you tap **Save recording**.
- Saved recordings are stored on this device using IndexedDB, not inside the main localStorage progress blob.
- Delete removes the current playback, clears saved metadata, and removes the saved audio from IndexedDB.
- Existing Record buttons across conversation coach, partner/app backup, Living in Greece Mode, and record-compare panels use the same save/delete controls.
- Tap-to-Translate still opens beside the tapped/highlighted phrase.

## Preserved

- `const LS='gta_v12_state'` unchanged. Existing progress/imports remain.
- No SRS math changed.
- No official content was generated or marked verified.
- All V13.6.30 session-focus, scoring, English voice, dialogue voice behavior, V13.6.31 translation behavior, and V13.6.32 near-phrase translation/record fixes are preserved.

## Verification

- App header shows `Καθημερινά V13.6.33`.
- `APP_VERSION` is `V13.6.33`.
- Service-worker cache is `gta-v13-6-33-record-save-delete`.
- Package version is `13.6.33`.
- Smoke test checks syntax, Tap-to-Translate, Record, Save Recording, Delete Recording, IndexedDB storage, and the unchanged `gta_v12_state` key.
