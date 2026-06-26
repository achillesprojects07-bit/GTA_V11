# Καθημερινά V13.5.7 — Dialogue Review Progress + Practice Reachability

Single-file offline PWA for daily Greek conversation practice, with an A1/A2 Ellinomatheia exam-prep scaffold.

## Current build

V13.5.7 makes the dialogue review work visible and finishable. It adds a native-review progress indicator, review progress by level, review-status filters, and a "Review next unreviewed dialogue" action. It also keeps the dialogue waves reachable from Practice through level and review filters.

## Dialogue review progress

- More now shows **Dialogue Review Progress** with a count such as `0 of 143 native-reviewed`.
- The progress bar breaks review work down by Core, A1, A2, B1, and B2.
- Review filters include All, Needs review, Native-reviewed, Practice-only, Revise, and level filters.
- A new **Review next unreviewed dialogue** button opens the next dialogue that is not yet native-reviewed.

## Practice reachability

- Practice still contains **Dialogue waves by level**.
- W1 through W5 are reachable by A1/A2/B1/B2 filters.
- Each dialogue card has Start and Review buttons so the same content is usable for learning and review-tagging.

## Release verification

This build was packaged and then re-opened from the final zip to verify:

- README heading matches V13.5.7.
- Visible app header shows V13.5.7.
- APP_VERSION is V13.5.7.
- Build Integrity panel shows V13.5.7.
- Service-worker cache is `gta-v13-5-7-dialogue-review-progress`.
- `npm test` passes from the extracted final zip.

## Important boundary

AI-created dialogues remain practice-only until reviewed by you, your partner, a tutor, or another trusted Greek speaker. This build tracks the progress of that review; it does not automatically verify content.
