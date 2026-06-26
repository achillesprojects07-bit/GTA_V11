# GTA Greek Travel App — V12.3 Record Compare + Greek Script Track

This package is the next clean-repo build after V12. It preserves the offline-first single-file PWA, embedded Greek phrase/vocabulary library, audio-first travel focus, trip-date motivator, and the SRS ladder `[1,3,7,21,60]`.

## What changed in V12.1

1. **30-second onboarding** — first-run Start Here flow explains Today’s 5, Due Now, the honest mastery model, and I’m Here mode.
2. **Trip date setup** — trip date can be set during onboarding or from Today.
3. **Deadline-aware Today’s 5** — Today’s 5 now prioritizes due items, survival phrases, weak phrases, recently missed phrases, and final-week content.
4. **Honest mastery labels** — cards now show Seen, Understood, Remembered, and Field-ready instead of treating ASR success as mastery.
5. **Session ending screen** — after a loop, the user gets closure and a reminder to return later for delayed recall.

## Main app surfaces

1. **Today** — Today’s 5 + Due Now as the default loop.
2. **Practice** — one practice room with depth controls: Recognize, Recall, Speak, Converse.
3. **I’m here** — quick-survival mode for Taverna, Pharmacy, Taxi, Lost, Home, Shopping.
4. **More** — Start Here, search, backup, and category browsing.

## Honest mastery model

The app separates:

- **Seen** — the card has appeared in practice.
- **Understood** — speech recognition heard the phrase; this means the app understood the user, not that pronunciation is perfect.
- **Remembered** — the user recalled the phrase in the current loop.
- **Field-ready** — the phrase was recalled after time had passed, making the mastery signal more honest for travel.

## How to run

Open `index.html` locally, or host the folder in GitHub Pages / Netlify / Vercel static hosting. For iPhone PWA behavior, deploy over HTTPS, open in Safari, then Add to Home Screen.

## Smoke test

Run:

```bash
node tests/smoke-test.js
```

The smoke test checks that the core views, service worker registration, embedded content counts, and key functions are present. A JavaScript syntax check was also run with `node --check` during packaging.

## Important next step

Before adding new modes, test this on a real phone with 3–5 target users. Watch whether they understand the onboarding, finish Today’s 5 without hesitation, and know the difference between Remembered and Field-ready.


## V12.2 update — I’m Here Now Survival Mode Polish

This build keeps the V12 redesign principle: subtract and sharpen, not add.

### What changed
- Rebuilt **I’m here now** as a true traveler surface: tap, hear, use.
- Added situation-first tabs with icons and intent cues: Taverna, Pharmacy, Taxi, Lost, Home, Shopping.
- Added a sticky quick-access dock with search inside the current situation.
- Added panic-strip phrases for immediate repair/help moments.
- Added audio-first survival cards with:
  - Normal Greek audio
  - Slow Greek audio
  - Show-card mode for showing the phrase to a Greek speaker
  - Practice-later save
- Kept formal Greek as the default for strangers while preserving casual variants inside the card.

### What did not change
- Single-file offline-first PWA output.
- Core Today’s 5 + Due Now loop.
- Honest mastery model.
- SRS ladder `[1, 3, 7, 21, 60]`.
- No new practice modes were added.


## V12.3 update — Record Compare + Greek Script Track

This build deepens the existing practice loop without adding another destination or mode.

### What changed
- Added **Hear-your-progress comparison** inside practice cards:
  - play native Greek audio,
  - record your own voice,
  - replay your recording,
  - self-check stress, speed, and confidence.
- Added an **optional Greek-script track** controlled from More:
  - shows the Greek phrase,
  - surfaces quick letter/sound hints,
  - keeps spoken survival Greek as the priority.
- Added V12.3 settings toggles under More so the user can keep the interface simple.
- Preserved the honest mastery rule: recordings and speech recognition do **not** equal pronunciation mastery or field-readiness.

### Important note
Browser microphone recording depends on device/browser permission. On iPhone PWAs, test on the actual installed app and Safari before relying on it during travel.
