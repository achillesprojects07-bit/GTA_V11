# Καθημερινά V13.6.39 — User-Only Recording Guard

V13.6.39 fixes the recording overlap problem in guided dialogue and rehearsal practice. The app now stops all model/dialogue audio before opening the microphone so the saved recording should contain only the learner's voice.

## New in this build
- Recording now cancels Greek model audio and full-conversation playback before the microphone starts.
- If a recording is active, **Hear model** is blocked until recording stops.
- After recording, the app no longer automatically plays the model Greek over/after the learner recording.
- Learner chooses playback, Hear model, Save only, Save + next, Next without saving, or Delete + redo.
- Keeps V13.6.38 guided turn flow, V13.6.37 hard sounds, Tap-to-Translate, Save-to-Review, and recording save/delete behavior.

## Note
For the cleanest recording, use the deployed HTTPS site or installed PWA. Local `file://` testing can behave differently with microphone permissions.
