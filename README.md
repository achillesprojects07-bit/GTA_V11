# Καθημερινά V13.6.31 — Tap-to-Translate Everywhere

V13.6.31 adds an offline **Tap-to-Translate** layer across the app. Tap or highlight a Greek line to see English; tap or highlight an English line to see Greek. The translation card includes **Hear Greek**, **Copy**, and **Save to review**.

## What changed

- Tap Greek phrases, dialogue lines, guided-session lines, survival cards, listening ladder reveal text, grammar examples, and phrase-of-the-day lines to show English.
- Tap English card prompts to show Greek where the app has a saved pair.
- Highlight any phrase or sentence and the app tries to match it against the app’s own phrase/dialogue/custom/exam/example pairs.
- Works offline from the app’s stored phrase pairs; it does not call online translation.
- Practice-only or unreviewed content is clearly marked in the translation card.
- **Save to review** saves an existing card when matched, or creates a practice-only custom phrase when it is a new pair.

## Preserved

- `const LS='gta_v12_state'` unchanged. Existing progress/imports remain.
- No SRS math changed.
- No official content was generated or marked verified.
- All V13.6.30 session-focus, scoring, English voice, and dialogue voice behavior is preserved.

## Verification

- App header shows `Καθημερινά V13.6.31`.
- `APP_VERSION` is `V13.6.31`.
- Service-worker cache is `gta-v13-6-31-tap-to-translate`.
- Package version is `13.6.31`.
- Smoke test checks syntax and the Tap-to-Translate functions.
