# Καθημερινά V14.4A — Worksheet Time Contract + Mastery Enforcement

This build is a correction to V14.4. V14.4 made the workbook ladder and volume map visible, but it did not fully guarantee that a selected study duration meant worksheet-answering time only.

V14.4A separates the learning flow into four distinct blocks:

1. **Concept study** — Library reading, vocabulary noticing, grammar/sound notes. This is outside the worksheet timer.
2. **Worksheet block** — The selected 20/30/45/60/90 minutes are designed as answer-work only.
3. **Correction round** — Wrong answers are corrected after the timed worksheet block. This is outside the worksheet timer.
4. **Repetition assignment** — If there are 2+ wrong answers, repetition is assigned after the timed block.

## Mastery rule

Viewing a lesson is not mastery. Mastery requires accurate answer-work.

- Study must be logged before the worksheet block starts.
- 1 wrong answer creates a correction requirement.
- 2+ wrong answers create correction plus repetition.
- The concept is not mastered just because the user completed time.
- Strong mastery evidence comes from accurate worksheet rounds with no wrong answers.

## 60-minute contract

60 minutes means 60 minutes of answer-work. When the learner chooses **60 minutes**, the app now creates a worksheet block designed for about **48 answer-work micro-rounds**, roughly:

- Recognition worksheet
- Production worksheet
- Mixed review
- Mastery check

Concept study and correction are not included in those 60 minutes.

## Preserved from earlier builds

- V14.1A Kumon-style correction/repetition engine
- V14.2 curriculum manifest
- V14.3 grammar concept library
- V14.4 comprehensive 2,820 micro-round ladder and volume map
- Existing localStorage key: `gta_v12_state`
- Offline PWA behavior

## Testing

Run:

```bash
npm test
```

Expected result:

```text
Καθημερινά V14.4A Worksheet Time Contract smoke test passed.
```
