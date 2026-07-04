# Καθημερινά V13.6.35 — Save-to-Review Fix

V13.6.35 fixes the Tap-to-Translate **Save to review** button so the learner gets visible feedback and the phrase is actually scheduled as a due review.

## What changed

- **Save to review now works visibly.** The button changes to **✓ Saved** after it saves.
- Saved phrase pairs are added to review and scheduled as **due now**, so they can appear in Due reviews and Today.
- Existing cards are reused instead of creating unnecessary duplicates.
- If the tapped translation is not already a card, it is saved as a custom practice phrase and stays flagged as unreviewed/practice-only.
- Copy and Save buttons now stop event bubbling so tapping them does not accidentally retrigger the translation popover.

## Preserved

- `const LS='gta_v12_state'` unchanged. Existing progress/imports remain.
- No SRS math changed.
- No official content was generated or marked verified.
- All V13.6.34 functionality is preserved: direct dialogue practice, rehearsal controls, near-phrase Tap-to-Translate, record playback, save/delete recording, and IndexedDB storage.

## Upload

Upload the extracted files to the GitHub repo root, especially:

- `index.html`
- `service-worker.js`
- `README.md`
- `package.json`
- `manifest.json`
- `tests/smoke-test.js`
- `.nojekyll`
