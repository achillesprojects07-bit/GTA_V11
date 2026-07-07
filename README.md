# Καθημερινά V15.2D — Stability Polish + Loading Feedback

This build continues from the working V15.2c recovery shell. It does **not** add new learning features. It makes the app feel safer and more responsive after the V15 navigation/cache problems.

## What changed
- Adds instant tab feedback: “Opening Today / Levels / Library / Worksheets / Review…”
- Adds a visible spinner/placeholder instead of blank screens.
- Keeps the lightweight stable tab shell so old heavy V14/V15 panels do not freeze navigation.
- Makes the bottom tabs and top tabs use the same single router.
- Adds a visible stability status and refresh button in Review.
- Bumps the service worker cache to `gta-v15-2d-stability-loading`.
- Keeps navigation network-first/no-store so GitHub Pages updates are easier to see.

## Preserved
- `gta_v12_state`
- Foundation-first ladder: L0.01 Greek vowels first; γαύρος later as integration.
- Kumon mastery philosophy: study first, timed worksheet answer-work, corrections outside timer, repetition, mastery.

## Upload note
After uploading to GitHub Pages, hard refresh once. If the app still shows V15.0C/V15.2c, clear site data once and reload.
