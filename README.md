# Καθημερινά V15.2c — Stable Tabs / Lag Recovery

This is a recovery build for the broken V15 navigation/lag issue.

## What changed
- Replaces heavy tab rendering with a lightweight stability shell.
- Bottom tabs and top tabs route to Today, Levels, Library, Worksheets, and Review.
- Old engines remain in the file, but tabs no longer auto-render the heavy stacked V14/V15 panels that were freezing navigation.
- Service worker cache is bumped to `gta-v15-2c-stable-tabs` and navigation is network-first/no-store.

## Important
After uploading to GitHub Pages, clear the old site data once if the app keeps returning to V15.0C/V15.2b.

## Preserved
- `gta_v12_state`
- Existing data and prior engines remain in the file.
- Mastery philosophy remains: study first, timed worksheet answer-work, corrections outside timer, repetition, mastery.
