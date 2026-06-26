# Καθημερινά V13.5.1 — Wave 3 Relationship Depth

Single-file offline PWA for daily Greek conversation practice, with an A1/A2 Ellinomatheia exam-prep scaffold.

## Current build

V13.5.1 adds **Wave 3: Relationship Depth / B1** to the dialogue library.

- Previous total dialogues: 83
- New Wave 3 B1 dialogues: 25
- Current total dialogues: 108
- Wave 3 ids: `dlg_w3_01` through `dlg_w3_25`
- All Wave 3 items are `level:'B1'` and `nativeReview:false`
- Service-worker cache: `gta-v13-5-1-wave3-relationship-depth`

## Visible app version

The app header and Build Integrity panel show:

```text
V13.5.1
```

## Content honesty

The everyday dialogue waves are practice-only until reviewed by a native speaker or tutor.

- `nativeReview:false` means not yet native-reviewed.
- `verified:false` exam-prep placeholders are not official Ellinomatheia content.
- The quiz and dialogue engines improve practice flow, but verified/native-reviewed content must still be added or checked separately.

## Preserved anchors

- `const LS='gta_v12_state';`
- Existing SRS math, scheduler, durable storage, search, exam scaffold, quiz scoring, and mock logic are preserved.

## Testing

Run:

```bash
npm test
```

Expected output:

```text
GTA V13.5.1 Καθημερινά wave-3 smoke test passed.
```

## Release checklist used for this build

- Zip contains `index.html`, `manifest.json`, `service-worker.js`, `tests/smoke-test.js`, icons, README, and package file.
- README heading matches the build.
- Visible app header version matches the build.
- Build Integrity version matches the build.
- Service-worker cache matches the build.
- Smoke test passes after packaging checks.
