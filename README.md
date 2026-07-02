# Καθημερινά V13.6.14 — Daily Conversation Coach + Partner/App Practice

This build preserves the V13.6.13 six-month speaking/listening foundation and adds the next layer: a guided daily conversation coach that can be done with a partner or alone with the app.

## What changed

### 1. Daily Conversation Coach on Today
Today now shows a clear real-life scene such as café, supermarket, family dinner, pharmacy, directions, beach, neighbors, or conversation repair. Each scene has a goal and a five-step flow:

```text
Listen → Repeat → Understand → Answer → Record
```

### 2. Partner mode
When a partner is available, the app shows the partner's lines and the learner's answer lines. The partner can rate the practice:

```text
✓ Natural
△ Understandable
✗ Try again
```

This keeps the partner role simple and avoids turning the partner into a full-time teacher.

### 3. Practice-with-app backup
When the partner is unavailable, the same scene can be practiced with the app. The app plays the prompt lines, shows model answers, supports recording, and lets the learner self-rate:

```text
I said it clearly
I said part of it
I froze
```

### 4. Guided session conversation step upgraded
The existing partner/app daily step inside Today now uses the richer conversation-coach scene instead of a single isolated line.

### 5. Weekly confidence tracking now counts conversation coach runs
The six-month confidence panel now includes conversation coach runs this week, along with listening and partner practice.

## Preserved

- `const LS='gta_v12_state'` is preserved exactly.
- Existing SRS, scheduling, durable local progress, imports, exam content, grammar pack, forecast panel, dialogue library, and practice flows are preserved.
- Imported official exam items remain stored locally and should survive this build.

## Release verification

The final package was checked for:

- App header shows `Καθημερινά V13.6.14`
- `APP_VERSION` is `V13.6.14`
- Service worker cache is `gta-v13-6-14-conversation-coach`
- Package version is `13.6.14`
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
