# Καθημερινά V13.5.8 — Daily Loop Polish + Dialogue Speaking Practice

Single-file offline PWA for daily Greek conversation practice, with an A1/A2 Ellinomatheia exam-prep scaffold.

## Current build

V13.5.8 connects the daily loop to your real-life conversation gaps and makes dialogues more listenable/speakable.

## Added in this build

- **Phrase from your life today** appears on Home when a captured phrase already has Greek added.
- Home now echoes dialogue review progress, such as `0 of 143 native-reviewed`.
- Dialogue cards now include **Full audio** to play the whole exchange in sequence.
- Dialogue cards now include **My turns** to rehearse your side of the conversation.
- Exam Prep is now labeled as **coming soon / verified content needed** so the empty scaffold does not feel like real exam prep yet.

## Release verification

This build was packaged and then re-opened from the final zip to verify:

- README heading matches V13.5.8.
- Visible app header shows V13.5.8.
- APP_VERSION is V13.5.8.
- Build Integrity panel shows V13.5.8.
- Service-worker cache is `gta-v13-5-8-daily-loop-polish`.
- `npm test` passes from the extracted final zip.

## Important boundary

The Ellinomatheia exam engine is ready, but verified exam content is still not loaded. Official/tutor-reviewed materials are still needed before that wing should be treated as real exam preparation.
