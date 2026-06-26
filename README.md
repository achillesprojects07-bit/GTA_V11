# GTA V13.2 — Conversation Capture Loop

A single-file offline PWA reframed as a daily companion for building real Greek conversation with a partner and family.

## What changed in V13.2

- Added a Today check-in for real-world Greek use.
- Tracks “I spoke Greek today” as a real-conversation streak, separate from app practice streak.
- Tracks lightweight self-reported wins: “I said something and they understood.”
- Adds a capture field: “What did you want to say but couldn’t?”
- Adds a pending translation queue for captured phrases.
- Each capture can open Google Translate, then accept a pasted Greek result.
- Once saved, captured phrases become first-class custom SRS items.
- Custom phrases remain flagged: `machine-translated — verify`.
- Progress now shows real-world streak, weekly wins, pending captures, and captured study phrases.

## Preserved

- `LS = 'gta_v12_state'` for upgrade safety.
- Offline-first single-file PWA behavior.
- Durable IndexedDB safety net.
- Honest mastery model.
- Full SRS ladder and existing scheduling math.
- Custom phrase builder from V13.0.2.
- Conversation roleplay and tier path from V13.1.

## Deploy

Upload the folder contents to a new GitHub repository root, enable GitHub Pages, open the Pages URL in iPhone Safari, then Add to Home Screen.

Test before relying on it:

1. Open Today.
2. Tap “I spoke Greek today.”
3. Capture one sentence.
4. Translate it and save it as a study phrase.
5. Search for it.
6. Play audio.
7. Export a backup.
8. Reopen offline.
