# Καθημερινά V13.6.22 — Clear Progressive Learning Path

V13.6.22 completes the final confidence-flow bundle by adding a daily reading step alongside the lowered gates and Listen First library mode from V13.6.20.

## What changed

- Adds `dailyReadingPick`, modeled after the daily listening picker.
- Injects one reading step into Today’s guided session when a suitable reading item exists.
- Prefers imported official reading items first, then baked-in/practice-only reading items through the existing `examItems('reading')` order and dedupe.
- In 15–20 minute sessions, reading can appear as the short confidence step when listening is not available.
- In 30+ minute sessions, reading becomes part of the normal confidence flow.
- Grades up to three reading questions inside Today and saves the result into the same exam/SRS answer tracking.
- Keeps Confidence Engine, Listen First library mode, lowered gates, grammar, listening, speaking, Living in Greece, and Conversation Memory intact.

## Preserved

- `const LS='gta_v12_state'` is unchanged.
- Existing progress, imported exam items, conversation logs, listening ladder, conversation memory, A2 grammar-gap logs, Living in Greece logs, and Confidence Engine logs remain on the same storage key.
- SRS math is not changed.
- No new vocabulary content is added.

## Verification

- App header shows `Καθημερινά V13.6.22`.
- `APP_VERSION` is `V13.6.22`.
- Service-worker cache is `gta-v13-6-22-clear-progressive-path`.
- Package version is `13.6.22`.
- Smoke test checks syntax, daily reading picker, guided reading renderer, lowered confidence gate, Listen First mode, dedupe, and confidence-minimum checklist.

## Personal-use note

The final confidence bundle is now complete: listening daily, speaking daily, grammar daily, reading daily, Listen First library, short-session confidence gate, and the Today confidence-minimum checklist.


## V13.6.22 focus

This build makes Today the single required daily workflow:

1. Open app
2. Today
3. Choose 20 / 30 / 45 / 60 minutes
4. Tap **Start Today’s Path**
5. Follow the numbered steps until completion

The path is always ordered as: Review → Weak Spots → Tiny New Step → Listen → Speak → Read → Conversation. The amount scales by selected minutes: 20 minutes is maintenance, 30 minutes is the minimum serious path, 45 minutes is strong progress, and 60 minutes is the best six-month path.

## Verification

- App header shows `Καθημερινά V13.6.22`
- APP_VERSION is `V13.6.22`
- Service worker cache is `gta-v13-6-22-clear-progressive-path`
- Storage key remains `gta_v12_state`
