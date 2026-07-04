# Καθημερινά V13.6.34 — Dialogue Direct + Rehearsal Controls

V13.6.34 fixes the two UX breaks found in live use: Practice Dialogues now opens directly to the dialogue task, and rehearsal recording no longer makes the learner lose the current task.

## What changed

- **Practice dialogues opens directly.** The app no longer shows the full Extra Practice hub above the dialogue list, so you do not have to scroll down to find the task you already selected.
- Dialogue screens, full conversation playback, and rehearsal screens use a direct practice view instead of burying the active activity below the menu.
- Rehearsal recording now separates **Exit rehearsal** from **Stop recording**.
- After a rehearsal recording stops, the learner gets clear choices: **Save only**, **Save + Next**, **Next without saving**, or **Delete + Redo**.
- Stopping a recording keeps the learner on the same turn instead of breaking the practice flow.
- Tap-to-Translate remains beside the phrase, and saved recordings still use IndexedDB.

## Preserved

- `const LS='gta_v12_state'` unchanged. Existing progress/imports remain.
- No SRS math changed.
- No official content was generated or marked verified.
- All V13.6.30–V13.6.33 functionality is preserved: session focus, scoring, English voice, Tap-to-Translate, near-phrase translation card, record playback, save/delete recording, and IndexedDB storage.

## Verification

- App header shows `Καθημερινά V13.6.34`.
- `APP_VERSION` is `V13.6.34`.
- Service-worker cache is `gta-v13-6-34-dialogue-rehearsal-flow`.
- Package version is `13.6.34`.
- Smoke test checks syntax, direct Practice Dialogues flow, rehearsal save/next/redo controls, Tap-to-Translate, Record, Save Recording, Delete Recording, IndexedDB storage, and the unchanged `gta_v12_state` key.
