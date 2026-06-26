# Καθημερινά V13.5.6 — Dialogue Native-Review Workflow

Single-file offline PWA for daily Greek conversation practice, with an A1/A2 Ellinomatheia exam-prep scaffold.

## Current build

V13.5.6 adds a dialogue native-review workflow without changing the SRS math, scheduler, quizzes, exam scaffold, search, or existing dialogue content.

## Dialogue review

- More now includes a **Dialogue native-review workflow** panel.
- Dialogues can be marked as `practice-only`, `needs review`, `native-reviewed`, or `revise before use`.
- Reviewer/source and review notes can be saved per dialogue.
- The dialogue library remains useful practice fuel, but items are only treated as native-reviewed when manually marked.

## Release verification

This build was packaged and then re-opened from the final zip to verify:

- README heading matches V13.5.6.
- Visible app header shows V13.5.6.
- APP_VERSION is V13.5.6.
- Build Integrity panel shows V13.5.6.
- Service-worker cache is `gta-v13-5-6-dialogue-review`.
- `npm test` passes from the extracted final zip.

## Important boundary

AI-created dialogues remain practice-only until reviewed by you, your partner, a tutor, or another trusted Greek speaker. This workflow tracks that review status; it does not automatically verify content.
