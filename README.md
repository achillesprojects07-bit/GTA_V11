# Καθημερινά V13.6.13 — Six-Month Speaking + Listening Plan

This build preserves the V13.6.12 grammar pack and forecast baseline, then adds the next layer for Aileen’s real six-month goal: **become noticeably more confident speaking everyday Greek and understanding people when they talk**.

## What changed

### 1. 60-minute target for a six-month speaking goal
The Today time chooser now labels **60 minutes** as the best target and **45 minutes** as the minimum serious pace. Existing progress is preserved because the localStorage key remains exactly:

```js
const LS='gta_v12_state'
```

### 2. Today now trains the missing muscles
The guided daily session now injects daily confidence work when the session is 30 minutes or longer:

- a tiny grammar step from the grammar bank,
- a listening step from official/imported/practice listening items,
- a speaking mission that can be done with a partner or with the app as backup.

Reviews and weak items still come first, and the coverage system is preserved.

### 3. Daily partner mission + app backup
Today now shows a real-life practice card. It gives:

- a short partner mission,
- the partner line,
- the learner’s answer,
- a follow-up phrase,
- a button to log partner practice,
- a button for “Partner unavailable · Practice with app.”

This keeps partner practice short and practical, without turning the partner into a daily teacher.

### 4. Six-month confidence dashboard
Today now includes a small confidence panel tracking:

- selected minutes today,
- speaking days this week,
- listening items this week,
- partner practices this week,
- an honest weekly confidence score.

This is not an exam score. It checks whether the learner is actually practicing listening and speaking, not only finishing cards.

## Honesty rules preserved
Generated/practice-only items stay unverified. Official/tutor-checked content remains the only path to `verified:true`.

## Release checks
- App header shows `Καθημερινά V13.6.13`
- `APP_VERSION` is `V13.6.13`
- Service worker cache is `gta-v13-6-13-six-month-plan`
- Package version is `13.6.13`
- Smoke test passes after extracting the final zip
