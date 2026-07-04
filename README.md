# Καθημερινά V13.6.29 — Today Reset + Session Focus

V13.6.29 is a UX-only release: no learning logic, SRS math, or content changed. It makes Today a launchpad, turns active sessions into a one-card focus mode, and adds a "How to do this step" example to every guided task so you never guess what to do.

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

- App header shows `Καθημερινά V13.6.29`.
- `APP_VERSION` is `V13.6.29`.
- Service-worker cache is `gta-v13-6-25-today-reset-focus`.
- Package version is `13.6.25`.
- Smoke test checks: version chain, focus-mode acceptance (renderHome free of dashboard calls), how-to layer present in guidedTaskHeader, forecast guard, relocations in Practice/Progress, script syntax via node --check.

## Acceptance test (manual)

1. Open Today with no session started → one screen, no scrolling: stage line, Start button, streak line, collapsed "Today includes".
2. Tap Start → only the progress bar + one task card + Skip/Pause are visible.
3. Every task shows "❓ How to do this step" with an example.
4. Tap Pause → back to minimal home with "Continue Today's Path"; Continue resumes the same step.
5. Progress tab shows the stage map and dashboards; Practice tab shows Coach/Ladder/Memory/Scenes/Capture.

## V13.6.29 — Listening Scene English Reveal (see + hear)
The practice-only real-Greek listening scenes now support learning by both seeing and hearing:
- After the Greek, a "🇬🇧 Show English" button reveals the English TEXT, plus a "🔊 Hear in
  English" button that speaks it aloud (uses an English voice; falls back to default en-US).
- Listen-first discipline preserved: English is behind a tap, so you can test your ear first.
- English added to all 5 built-in listening scenes (café, supermarket, directions, family
  dinner, conversation repair).

[UNCERTAIN] The English translations are AI-written and tagged practice-only — reliable for
these simple A1 sentences, but NOT fluent-verified. Have a Greek/English speaker confirm them.
Note especially "μέτριο" (coffee) = medium-SWEET in Greek coffee context, glossed as "medium".
[UNCERTAIN] English audio depends on Safari exposing an English voice (your device has Siri
Voice 4, so this should work) — verify it speaks on your phone after deploying.
