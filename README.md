# Καθημερινά V15.6 — Premium UX Polish + Progressive Disclosure

This build continues from the working V15.5 Mastery System Audit baseline. It focuses on world-class learner experience instead of adding more content.

## What changed
- Adds instant tap feedback for every tab.
- Tabs change color immediately on press and active selection.
- Adds a polished loading skeleton and status toast: “Opening Levels…”, “Opening Library…”, etc.
- Rebuilds the tab experience as a premium, lightweight command interface.
- Keeps Today minimal: one next step, one contract, optional tools hidden.
- Moves heavy tab materials behind progressive disclosure sections.
- Levels shows the current step and compact roadmap first.
- Library shows the current concept first, with shelves hidden until opened.
- Worksheets shows the timed answer-work block first, with queue details hidden.
- Review shows repair/mastery status first, with audit details hidden.
- Updates service worker cache to `gta-v15-6-premium-ux`.

## Preserved
- V15.5 mastery audit logic.
- V15.4 cache hardening tools.
- Stable navigation shell.
- `gta_v12_state` saved data.
- Kumon-style mastery rule: study first → timed answer-work → corrections outside timer → repetition → 3 strong rounds → unlock.

## Upload note
After uploading to GitHub Pages, hard refresh once. If an older version appears, use Review → Clear old app caches.
