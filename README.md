# Καθημερινά V13.6.20 — Confidence Flow Gate Fix + Listen First Library

V13.6.20 makes the six-month speaking/listening goal show up even on shorter days and adds a library-wide Listen First practice mode.

## What changed

- Lowers the daily confidence-step gate: 15–20 minute sessions now still include a tiny grammar/listening/speaking confidence step when available.
- Makes 30 minutes the clear minimum for the six-month speaking/listening goal; 20 minutes is labeled maintenance.
- Adds Listen First practice for the main card library: hear Greek before seeing Greek or English, then reveal and grade.
- Adds imported/baked-in exam item id dedupe, especially to avoid duplicate grammar units.
- Adds Today’s confidence-minimum checklist for listening, speaking, and grammar.
- Keeps Confidence Engine, Living in Greece Mode, A2 Grammar Gap Repair, Real Conversation Memory, Understanding Real Greek, and Daily Conversation Coach intact.

## Preserved

- `const LS='gta_v12_state'` is unchanged.
- Existing progress, imported exam items, conversation logs, listening ladder, conversation memory, A2 grammar-gap logs, Living in Greece logs, and Confidence Engine logs remain on the same storage key.
- SRS math is not changed.

## Verification

- App header shows `Καθημερινά V13.6.20`.
- `APP_VERSION` is `V13.6.20`.
- Service-worker cache is `gta-v13-6-20-confidence-gate-listen-first`.
- Package version is `13.6.20`.
- Smoke test checks syntax, the lowered confidence gate, Listen First mode, dedupe, and confidence-minimum checklist.

## Personal-use note

Twenty minutes can maintain the habit, but the app now clearly recommends 30 minutes minimum and 45–60 minutes when possible for the six-month speaking/listening goal.
