# Καθημερινά V13.6.27 — Today Reset + Session Focus

V13.6.27 is a UX-only release: no learning logic, SRS math, or content changed. It makes Today a launchpad, turns active sessions into a one-card focus mode, and adds a "How to do this step" example to every guided task so you never guess what to do.

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

- App header shows `Καθημερινά V13.6.27`.
- `APP_VERSION` is `V13.6.27`.
- Service-worker cache is `gta-v13-6-25-today-reset-focus`.
- Package version is `13.6.25`.
- Smoke test checks: version chain, focus-mode acceptance (renderHome free of dashboard calls), how-to layer present in guidedTaskHeader, forecast guard, relocations in Practice/Progress, script syntax via node --check.

## Acceptance test (manual)

1. Open Today with no session started → one screen, no scrolling: stage line, Start button, streak line, collapsed "Today includes".
2. Tap Start → only the progress bar + one task card + Skip/Pause are visible.
3. Every task shows "❓ How to do this step" with an example.
4. Tap Pause → back to minimal home with "Continue Today's Path"; Continue resumes the same step.
5. Progress tab shows the stage map and dashboards; Practice tab shows Coach/Ladder/Memory/Scenes/Capture.

## V13.6.27 — Path Ring UX Polish (this build)
Adds a professional UX pass over V13.6.27's structure, targeting motivation, clarity,
daily progress visibility, and a target completion date:

1. **Path Ring on Today** — the app's new signature. One SVG ring: outer arc = % of all
   1,914 cards introduced, inner arc = % truly field-ready, center = Day N of ~180.
   Beside it: introduced count, field-ready count, streak, and a target line — your
   milestone date with days left and required cards/day if set, otherwise a pace-based
   finish estimate (after 14 days of history), otherwise a prompt to set one in More.
2. **Journey summary on Progress** — the same numbers as a slim bar at the very top of
   Progress, so % completion of all content is the first thing the page says.
3. **Decluttered Progress** — the stable-launch checklist and build-integrity panels
   (release QA, not learning) no longer render on Progress; they remain in More.
4. **Schedule bug fixed** — overdue cards now fold into today's row of the 7-day review
   schedule, so "19 due now" can never again sit beside an all-zero table.
5. **Copy fixes** — duplicate "Step X of Y" removed from the task card (the sticky bar
   keeps it); the grammar step's developer-changelog subtitle replaced with a human
   instruction; empty confidence stats now say what makes them move.
6. **Design tokens** — card borders, tabular numerals, focus-visible outlines, tighter
   eyebrow labels, olive reserved exclusively for progress meaning, reduced-motion
   respected on the ring animation.

## V13.6.27 — Reading advance fix
CRITICAL: guided reading step graded but never advanced — it called advanceAdaptiveAfterComplete(), a function that was never defined, throwing a ReferenceError before the screen could repaint. Now ends like the working listening grader: renderHome() + scrollToGuidedTask(). Smoke test hardened with a regression guard so this class of bug (grader calling an undefined advance function) fails the build in future.
