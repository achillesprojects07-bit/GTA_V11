# Καθημερινά V13.6.12 — Grammar Pack + Stage Forecast

Builds on V13.6.11 (listening audio TTS fallback) and V13.6.10 (imported exam item
visibility). This version integrates the two deliverables drafted in a separate session:

## 1. Grammar reference pack — baked in, no import needed
18 units now ship inside `DATA.grammar` directly (10 A1: genders, plurals, είμαι, έχω,
both present-tense verb families, negation, questions, possessives, accusative; 8 A2:
future με θα, past tense, object pronouns, μου αρέσει, να-clauses, imperatives,
comparatives, δεν vs μην). They replace the two placeholder units and appear under
Practice → Exam prep → Grammar with zero import steps.

**Honesty flags preserved:** every unit is `verified:false, source:"practice-only"` —
enforced programmatically during integration, per the app's golden rule. The rules are
standard Modern Greek, but flip units to verified in Content Review only after a fluent
reader checks the examples. [UNCERTAIN] The Greek examples were AI-drafted and are NOT
yet human-verified.

## 2. Finish-line stage forecast
Three new functions (`paceStats`, `stageForecastPanel`, `homeForecastLine`):
- Progress screen: projected completion date per coverage stage, full-mastery ETA, and
  a separate A1/A2 exam-readiness ETA — computed from the real last-14-day pace
  (introductions/day and delayed-recall field-ready/day), with floor values and an
  "early estimate" warning until ≥5 cards of recent history exist.
- Today screen: a one-line "Finish line: ~N months" card linking to the full forecast.

All 12 helper functions the forecast depends on were verified present in this codebase
before insertion; both template anchors matched exactly.

## Release checks
- Header + APP_VERSION: V13.6.12
- Service-worker cache: `gta-v13-6-12-grammar-forecast` (bump forces PWA refresh)
- Package version: 13.6.12
- Smoke test updated and passing (`node tests/smoke-test.js`)
- `gta_v12_state` storage key unchanged — all progress, imports, SRS survive
- Listening audioUrl TTS fallback (V13.6.11) retained
- Import loader retained; imported exam content in localStorage is unaffected

## Still open
- MP3s not yet live: `GTA_V11/audio/a1e_kpl_v_akoystiko.mp3` returned 404 at build time.
  Upload both MP3s to the repo's `audio/` folder, then request the corrected
  `verified:true` listening JSON.
- Grammar examples await human verification (see above).
