# GTA Greek Travel App — V12 Redesign New Repo

This package is a clean repository starter built from V11.0.31 content. It preserves the offline-first single-file PWA idea, the embedded Greek phrase/vocabulary library, speech/listening orientation, trip-date focus, and SRS ladder `[1,3,7,21,60]`, while collapsing the visible IA into four surfaces:

1. **Today** — Today’s 5 + Due Now as the default loop.
2. **Practice** — one practice room with depth controls: Recognize, Recall, Speak, Converse.
3. **I’m here** — quick-survival mode for Taverna, Pharmacy, Taxi, Lost, Home, Shopping.
4. **More** — onboarding, search, backup, and category browsing.

## Honest mastery model

The app separates:

- **The app understood you** — speech recognition heard something close enough.
- **Field-ready** — the phrase was recalled in a later session/day.

This prevents speech recognition text-match from being treated as true pronunciation mastery.

## How to run

Open `index.html` locally, or host the folder in GitHub Pages / Netlify / Vercel static hosting. For iPhone PWA behavior, deploy over HTTPS, open in Safari, then Add to Home Screen.

## Smoke test

Run:

```bash
node tests/smoke-test.js
```

The smoke test checks that the four core views, service worker registration, embedded content counts, and key functions are present.

## Important next step

Before adding modes, test this on a real phone with 3–5 target users. Watch whether they hesitate on Today, Practice depth, or I’m here.
