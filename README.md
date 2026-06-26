# Καθημερινά V13.5.4 — Conversation Capture Front Door

Single-file offline PWA for daily Greek conversation practice, with an A1/A2 Ellinomatheia exam-prep scaffold.

## Current build

V13.5.4 makes the real-life conversation capture flow more prominent and more honest. Home now asks: **What did you wish you could say today?** Saved gaps go into a review queue where Greek can be added later, marked as machine-translated or tutor/native reviewed, and then turned into practice cards.

## Capture workflow

1. Save the English, rough idea, or situation from Home.
2. Add the natural Greek later in More → Conversation gaps.
3. Mark the Greek as machine-translated or tutor/native reviewed.
4. Tap Add to Practice when ready.
5. The card enters the existing SRS and quiz engine.

## Dialogue library

- Total dialogues: 143
- Wave 1 A1 dialogues: 25
- Wave 2 A2 dialogues: 25
- Wave 3 B1 relationship-depth dialogues: 25
- Wave 4 B1 social-fluency dialogues: 20
- Wave 5 B2 confident-range dialogues: 15
- All generated wave dialogues remain `nativeReview:false`

## Visible app version

The app header, `APP_VERSION`, and Build Integrity panel show:

```text
V13.5.4
```

## Cache

Service-worker cache:

```text
gta-v13-5-4-capture-front-door
```

## Release lock

This zip was extracted and checked after packaging for:

- complete file list
- correct README heading
- visible app header version
- `APP_VERSION`
- Build Integrity panel version
- service-worker cache name
- `npm test` passing from the extracted final zip

## Test

```text
GTA V13.5.4 Καθημερινά capture-front-door smoke test passed.
```
