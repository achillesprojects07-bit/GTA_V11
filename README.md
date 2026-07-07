# Καθημερινά V15.2b — Tap Feedback

Adds instant, obvious tap feedback to the nav tabs (on top of V15.2a's  network-first
cache fix and the single-router nav rebuild).

## What's new
- Tapping a tab now flashes it (color + slight press-scale) THE MOMENT you touch it,
  before the view finishes rendering — so a tap always feels registered.
- Uses CSS :active (press-scale) + a brief JS-added .tapFlash class (color flash), plus
  the existing .active state for the current tab. Respects prefers-reduced-motion.

## Why this matters
When the tabs weren't working (the cache bug), there was no feedback so a tap felt dead.
With this, even if something is slow, you SEE the tap land — which also makes any future
issue easier to diagnose (tap registered vs. content not changing).

## Still required for the cache fix (from V15.2a)
If your NORMAL browser window still shows the old version on tab-click, clear the old
service worker once: Chrome → site settings → Clear data (or reinstall the icon).
Incognito already works because it has no old cache.

## Release checks
- Header + APP_VERSION: V15.2b
- Service-worker cache: gta-v15-2b-tap-feedback (network-first for navigation retained)
- Package version: 15.2.2
- Smoke test passing (router + network-first guards retained)
- gta_v12_state preserved

## Note
Built on pristine V15.0C + single-router rebuild + network-first cache. Kumon mastery
engine still to be re-added cleanly once navigation is fully confirmed on your device.
