# Καθημερινά V13.5.9 — Verified Exam Content Loader

Single-file offline PWA for daily Greek conversation practice, with an A1/A2 Ellinomatheia exam-prep scaffold.

## Current build

V13.5.9 adds a safe verified exam content loader and import template. The app still does not generate or verify exam Greek by itself.

## Added in this build

- Exam Prep now includes a **Verified exam content loader**.
- The loader provides a JSON template for grammar, reading, listening, writing, speaking, and mock items.
- Imported items are saved locally under `state.examContent` and included in backup/restore.
- Static placeholders remain untouched and unverified.
- `verified:true` is preserved only when the pasted JSON explicitly includes it.
- Imported content appears in the existing Grammar, Four Skills, and Mock Exam panels.

## Release verification

This build was packaged and then re-opened from the final zip to verify:

- README heading matches V13.5.9.
- Visible app header shows V13.5.9.
- APP_VERSION is V13.5.9.
- Build Integrity panel shows V13.5.9.
- Service-worker cache is `gta-v13-5-9-exam-content-loader`.
- `npm test` passes from the extracted final zip.

## Important boundary

The loader makes the exam wing ready for real content, but it does not make content verified. Use official papers, published materials, or tutor/native-reviewed items only when setting `verified:true`.
