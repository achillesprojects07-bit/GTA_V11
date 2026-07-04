# Καθημερινά V13.6.30 — Today Reset + Session Focus

V13.6.30 is a UX-only release: no learning logic, SRS math, or content changed. It makes Today a launchpad, turns active sessions into a one-card focus mode, and adds a "How to do this step" example to every guided task so you never guess what to do.

## What changed

- **Session focus mode:** while a session is active, Today shows ONLY a sticky progress bar ("Step X of Y · ~N min left"), the current task card, and Skip / Pause. Nothing else renders. Completing a step auto-advances.
- **Pause / resume:** Pause saves your exact place; Today then shows "Continue Today's Path" and resumes at the same step. Unfinished steps are never lost.
- **Minimal Today home:** exactly four elements — stage line, one Start/Continue button, a quiet streak · due line, and a collapsed "Today includes…" fold. Minute picker is tucked behind "change".
- **How-to layer:** every guided step type (review, new phrase, quiz, conversation, grammar, listening, reading, speaking mission) opens with a collapsible "❓ How to do this step" containing numbered instructions and a worked example (e.g. listening: read the questions first, decode δίπλα/μέσα/πίσω, play twice eyes-off, answer, grade — wrong + graded still counts). Practice modes get a matching "What each mode means" fold.
- **Relocations (moved, not deleted):** Conversation Coach, Listening Ladder, Conversation Memory, Living-in-Greece scene, A2 gap pattern, phrase-of-day, and conversation capture now live on **Practice**. Stage map, confidence-minimum checklist, and return-rhythm card now live on **Progress** (alongside the dashboards already there). Milestone dates were already in More (tripSettingsPanel); the Today duplicate is gone.
- **Deleted from Today:** hero banner, Rule box, both explainer cards, duplicate Start buttons, the 1–7 workflow list, duplicate dashboards, zero-walls.
- **Forecast guard:** finish-line estimates are hidden until 14 distinct practice days exist ("Forecast unlocks after 2 weeks") — no more misleading "~128 months" from floor values.
- **One counter language:** "Step X of Y" is today's session; the long path shows only in Progress as "Day N of ~180".

## Preserved

- `const LS='gta_v12_state'` unchanged. All progress, imported exam items, logs, and settings stay on the same storage key.
- SRS math unchanged. No content added or removed. All previously existing card functions remain defined.

## Verification

- App header shows `Καθημερινά V13.6.30`.
- `APP_VERSION` is `V13.6.30`.
- Service-worker cache is `gta-v13-6-25-today-reset-focus`.
- Package version is `13.6.25`.
- Smoke test checks: version chain, focus-mode acceptance (renderHome free of dashboard calls), how-to layer present in guidedTaskHeader, forecast guard, relocations in Practice/Progress, script syntax via node --check.

## Acceptance test (manual)

1. Open Today with no session started → one screen, no scrolling: stage line, Start button, streak line, collapsed "Today includes".
2. Tap Start → only the progress bar + one task card + Skip/Pause are visible.
3. Every task shows "❓ How to do this step" with an example.
4. Tap Pause → back to minimal home with "Continue Today's Path"; Continue resumes the same step.
5. Progress tab shows the stage map and dashboards; Practice tab shows Coach/Ladder/Memory/Scenes/Capture.

## V13.6.30 — Scores restored + English everywhere + voice differentiation
Three fixes:
1. **Missing scores fixed (all practices).** Guided reading/listening steps no longer flash
   a toast and auto-advance — they now show a PERSISTENT result panel ("3/3 correct" with a
   progress bar and message) and a "Next task →" button you tap to continue. Flashcard modes
   (recognize/recall/listen/speak) now show a running session tally after each grade instead
   of silently advancing.
2. **English See/Hear on Extra Practice flashcards.** Each card now has "🔊 Hear English" and
   "🇬🇧 See English" buttons, in addition to Hear Greek and Reveal. English text confirmed
   present in all phrase/vocab items.
3. **Voice differentiation on the single available Greek voice (Melina).** Since iOS Safari
   exposes only Melina for Greek (confirmed via on-device voice list — Nikos is NOT available
   to Safari despite being installed in iOS Settings), dialogue speakers are now distinguished
   by wider pitch (you 1.25 / them 0.75) and rate (you .9 / them .78) plus the 1150ms pause.

[UNCERTAIN] iOS Safari's respect for pitch/rate is inconsistent — verify how distinct the two
speakers actually sound on your device. The pause is the reliable speaker-change signal.
[UNCERTAIN] English audio depends on Safari exposing an English voice (Siri Voice 4 present on
your device, so it should work) — verify it speaks.
