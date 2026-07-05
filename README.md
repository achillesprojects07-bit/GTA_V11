# Καθημερινά V14.5 — Actual Worksheet Bank Expansion

This build follows the Kumon-style direction: the app must not only show a ladder and target volume; it must create real answer-work from the content already inside the app.

V14.5 expands the worksheet bank behind the V14.4/V14.4A ladder.

## What V14.5 adds

- Actual worksheet question banks for the current concept
- Recognition worksheet bank
- Production worksheet bank
- Mixed review bank
- Mastery check bank
- Bank coverage panels on Today, Worksheets, Levels, Library, and Review
- Level bank coverage showing source content records and generated templates
- The 20/30/45/60/90 minute worksheet blocks now draw from the V14.5 bank
- Worksheet results are tagged with `bankVersion: "V14.5"`

## Mastery rule preserved

V14.5 does not count concept study as mastery.

The flow remains:

1. Study the concept in the Library.
2. Start the worksheet timer.
3. Answer the worksheet bank.
4. Correct wrong answers outside the timer.
5. Repeat if there are 2+ mistakes.
6. Master only through repeated accurate rounds.

## 60-minute worksheet contract

60 minutes means 60 minutes of answer-work. A 60-minute selection still means about 48 answer-work micro-rounds. V14.5 improves what those micro-rounds contain:

- recognition questions
- typed production questions
- article/gender checks
- Greek meaning checks
- Greek-to-English checks
- mixed review
- mastery check questions
- sound-ladder self-checks where the concept is pronunciation

## Verified-content boundary

V14.5 uses the Greek content already inside the app. It does not invent unverified plural tables, verb tables, or exam content. Where verified material is not yet available, the bank is limited and the next builds must supply or import verified content.

## Revised next builds

- V14.6 — Accent Lab + Sound Ladder Worksheets
- V14.7 — Listening + Speaking Worksheet Engine
- V14.8 — Reading + A1/A2 Comprehension Worksheets
- V14.9 — Content Cleanup + De-duplication
- V15 — True Greek Fluency Path

## Preserved from earlier builds

- V14.1A Kumon-style mastery engine
- V14.2 curriculum manifest
- V14.3 grammar concept library
- V14.4 comprehensive 2,820 micro-round ladder and volume map
- V14.4A worksheet time contract and mastery enforcement
- Existing localStorage key: `gta_v12_state`
- Offline PWA behavior

## Testing

Run:

```bash
npm test
```

Expected result:

```text
Καθημερινά V14.5 Actual Worksheet Bank smoke test passed.
```
