# Καθημερινά V13.5.2a — Home Cleanup

Single-file offline PWA for daily Greek conversation practice, with an A1/A2 Ellinomatheia exam-prep scaffold.

## Current build

V13.5.2a is a small Home-screen cleanup release on top of **V13.5.2 Wave 4 Social Fluency**.

It removes old developer/scaffold cards from the Home screen:

- the old phone-polish developer note
- the Home copy of the pending-translation queue
- the Home copy of the conversation-flow path card

The capture translation queue and conversation flow panel are still available in the appropriate areas, but they no longer clutter the Home screen.

## Dialogue library

- Total dialogues: 128
- Wave 1 A1 dialogues: 25
- Wave 2 A2 dialogues: 25
- Wave 3 B1 relationship-depth dialogues: 25
- Wave 4 B1 social-fluency dialogues: 20
- All generated wave dialogues remain `nativeReview:false`

## Visible app version

The app header, `APP_VERSION`, and Build Integrity panel show:

```text
V13.5.2a
```

## Cache

Service-worker cache:

```text
gta-v13-5-2a-home-cleanup
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
GTA V13.5.2a Καθημερινά home-cleanup smoke test passed.
```
