# Καθημερινά V14.12 — Tutor / Partner Correction Mode

This build continues from **V14.11 Mastery Lock + Unlock Enforcement** and adds a structured partner/tutor correction workflow.

**Important boundary:** partner correction supports speaking and pronunciation confidence. It does **not** replace Kumon-style mastery. A concept still unlocks only through Library study, worksheet accuracy, corrections cleared, repetition cleared, and the required strong rounds.

## What V14.12 adds

- New Tutor / Partner Correction Mode.
- One correction target at a time: one sound, one article pattern, or one verb pattern.
- Partner script: say it naturally, say it slowly, let the learner try up to three times.
- Three-try limit per prompt to avoid exhausting correction loops.
- Partner marks:
  - Correct
  - Closer
  - Not yet
- Saved partner/tutor notes in Review.
- Recent partner logs with concept, focus, status, and mark count.
- Tutor panels in Today, Levels, Worksheets, Library, and Review.
- Current focus is inferred from the active ladder concept, for example γ, χ, θ/δ, ρ, αυ/ευ, stress/vowels, articles, or verb pattern.
- Partner feedback is explicitly labeled as speaking evidence only, not mastery proof.

## Preserved from earlier builds

- V14.7A foundation-first ladder: first lesson remains **L0.01 Greek vowels: α ε ι ο ου**.
- **γαύρος** remains later as an applied integration lesson, not the first lesson.
- V14.4A time contract: concept study is outside worksheet time, corrections are outside worksheet time.
- V14.10 volume fill: 20 / 30 / 45 / 60 / 90 minute blocks generate full answer-work volume.
- V14.11 strict unlocks remain active: studying alone, time spent, or partner approval cannot unlock the next concept.
- `const LS='gta_v12_state'` is preserved.

## Next recommended build

**V14.13 — Writing + Sentence Production Engine**

This should add controlled sentence production, short writing prompts, sentence repair, and a writing correction queue.
