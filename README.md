# Καθημερινά — V15.0C Clickable Navigation + Today Minimal Hotfix

This is a hotfix after V15.0A.

## Fixes

- Fixes tabs that appeared visually but did not switch pages in some deployed/cached browsers.
- Adds delegated click handling for both top and bottom navigation.
- Adds data-backed tab buttons, not only inline onclick handlers.
- Forces view switching with `.view.active` and explicit display fallback.
- Keeps Today minimal: it shows the True Greek Fluency Path command only, not old V14 report panels.
- Hides the old secondary-tools card from Today.
- Keeps all V15.0 / V14.14 / V14.13 / V14.12 / V14.11 mastery behavior intact.

## Mastery rule preserved

Library study teaches. Timed worksheets prove. Corrections and repetition happen outside the timer. Mastery requires accuracy and strong rounds, not browsing.

## Deployment note

After uploading, hard refresh and clear site data once if the old V15.0A cached file remains visible.


## V15.0C — Anchor Navigation Failsafe
- Rebuilt bottom tabs as real hash anchors.
- Added CSS :target fallback so section switching works even if an old click handler is cached.
- Today stays minimal; mastery rules unchanged.
