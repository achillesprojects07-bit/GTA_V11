# Καθημερινά V13.6.16 — Real Conversation Memory

This build preserves the prior real Greek listening ladder and adds the next layer: conversation memory, where yesterday’s scene returns with a small real-life continuation.

## What changed

### 1. Real Conversation Memory on Today
Today now includes a memory continuation card:

```text
Remember yesterday → Continue it → Change one detail → Say it faster → Rate honestly
```

This is designed for the six-month speaking goal. It trains the missing muscle between memorized lines and real conversation: bringing a scene back tomorrow and continuing it naturally.

### 2. Yesterday-to-today continuation
The app looks at the most recent conversation-coach scene and gives a next natural step:

```text
Yesterday: ordered coffee
Today: ask for the bill and pay by card
```

The same pattern works for supermarket, family dinner, pharmacy, directions, beach, neighbors, and conversation repair.

### 3. Partner or app mode
Conversation memory can be practiced with a partner or alone with the app:

```text
Partner mode: ✓ Natural · △ Clear enough · ✗ Needs repeat
App mode: I continued clearly · I continued partly · I froze
```

Both count toward the speaking habit.

### 4. Weak speaking lines
When the learner marks a conversation as “try again”, “partial”, or “I froze”, the app stores one weak line and brings it back for review. The goal is not to punish mistakes; it is to make freezing recoverable.

### 5. Progress tracking
Progress now includes a Real Conversation Memory panel showing:

```text
continuations this week
clear/natural continuations
repeat-needed continuations
weak lines waiting
```

## Preserved

- `const LS='gta_v12_state'` is preserved exactly.
- Existing SRS, scheduling, durable local progress, imports, exam content, grammar pack, forecast panel, conversation coach, listening ladder, dialogue library, and practice flows are preserved.
- Imported official exam items remain stored locally and should survive this build.

## Release verification

The final package was checked for:

- App header shows `Καθημερινά V13.6.16`
- `APP_VERSION` is `V13.6.16`
- Service worker cache is `gta-v13-6-16-real-conversation-memory`
- Package version is `13.6.16`
- Smoke test passes

## Files

```text
index.html
manifest.json
service-worker.js
package.json
tests/smoke-test.js
README.md
apple-touch-icon.png
icon-192.png
icon-512.png
kathimerina-tile-1024.png
.nojekyll
```
