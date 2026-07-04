# Καθημερινά V13.6.32 — Tap-to-Translate + Record UX Fix

V13.6.32 keeps offline **Tap-to-Translate**, but fixes the UX: the translation card now opens beside the phrase you tapped/highlighted instead of appearing at the bottom. It also restores the Record buttons used in cards and conversation practice.

## What changed

- Tap Greek phrases, dialogue lines, guided-session lines, survival cards, listening ladder reveal text, grammar examples, and phrase-of-the-day lines to show English near the tapped text.
- Tap English card prompts to show Greek where the app has a saved pair.
- Highlight any phrase or sentence and the app shows the translation beside the selected text where possible.
- Works offline from the app’s stored phrase pairs; it does not call online translation.
- Practice-only or unreviewed content is clearly marked in the translation card.
- **Save to review** saves an existing card when matched, or creates a practice-only custom phrase when it is a new pair.
- Record buttons now request microphone permission, record for 4 seconds, show playback controls, and then play the model Greek for comparison.

## Preserved

- `const LS='gta_v12_state'` unchanged. Existing progress/imports remain.
- No SRS math changed.
- No official content was generated or marked verified.
- All V13.6.30 session-focus, scoring, English voice, dialogue voice behavior, and V13.6.31 translation behavior are preserved.

## Verification

- App header shows `Καθημερινά V13.6.32`.
- `APP_VERSION` is `V13.6.32`.
- Service-worker cache is `gta-v13-6-32-translate-record-ux`.
- Package version is `13.6.32`.
- Smoke test checks syntax, near-phrase Tap-to-Translate functions, and restored Record functions.
