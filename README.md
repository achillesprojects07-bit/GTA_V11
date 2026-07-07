# Καθημερινά V15.5 — Mastery System Audit

This build continues from the stable V15.4 cache-hardening baseline. It does **not** add another heavy feature layer. It audits the learning system to make sure the Kumon-style mastery method is still intact after the stability rebuild.

## What changed
- Updates visible version to **V15.5**.
- Adds a **Mastery System Audit** panel in Today, Levels, Library, Worksheets, and Review.
- Checks the foundation-first ladder rule: **L0.01 Greek vowels first; γαύρος later as integration**.
- Checks that the strict mastery function and current-concept resolver remain loaded.
- Shows the current concept gate:
  - Library studied
  - average worksheet accuracy
  - strong rounds
  - open corrections
  - repetition due
- Reinforces the Kumon method:
  - studying is not mastery
  - worksheet minutes are answer-work only
  - corrections happen outside the timer
  - repetition is required after mistakes
  - three strong rounds are required before unlock
- Keeps the V15.4 cache-hardening tools and updates the cache name to `gta-v15-5-mastery-audit`.
- Updates `manifest.json` start URL to `./index.html?v=15.5`.

## Preserved
- Working V15.4 stable navigation shell.
- Clean Today tab.
- Restored Levels, Library, Worksheets, and Review content.
- `gta_v12_state` saved practice data.
- Service-worker old-cache clearing.

## Upload note
After uploading to GitHub Pages, open Review → Version + cache hardening → tap **Clear old app caches** once if you still see an older version. Then reopen the app.
