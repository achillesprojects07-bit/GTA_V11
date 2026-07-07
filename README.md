# Καθημερινά V15.3 — Restore Full Content Gradually

This build continues from the working V15.2D stability baseline. It restores deeper content into the correct tabs without bringing back the V15.0/V15.0C navigation lag.

## What changed
- Keeps Today minimal and focused on the exact next step.
- Restores richer **Levels** content: full ladder overview, concept steps, lock/current/mastered status.
- Restores richer **Library** content: current concept lesson, shelves by category, and sample source records.
- Restores richer **Worksheets** content: timed block plan, worksheet families, and sample answer-work queue.
- Restores richer **Review** content: mastery gate, open repairs, repetition status, recent work, and cache tools.
- Keeps instant loading feedback when each tab is tapped.
- Replaces the V15.0/V15.2 navigation stack with one V15.3 route controller.
- Updates cache to `gta-v15-3-gradual-content-restore`.

## Preserved
- `gta_v12_state`
- Foundation-first ladder: L0.01 Greek vowels first; γαύρος later as integration.
- Kumon mastery method: study first, timed worksheet answer-work, correction, repetition, 3 strong rounds, unlock.
- Concept study and correction remain outside worksheet minutes.

## Upload note
After uploading to GitHub Pages, hard refresh once. If the app still shows V15.2D/V15.0C, clear site data once and reopen.
