# Καθημερινά V15.2 — Navigation Rebuild (single authoritative router)

Fixes the unclickable tabs (Worksheets, Levels, Library, Review) by consolidating the
navigation. Built from the pristine V15.0C base after two prior blind fixes failed.

## What was wrong
The V15.0C build had accumulated multiple competing navigation systems from earlier
versions: 2 `go()` routers, 3 versions of nav handlers (v150a/b/c), 3 document click
listeners, touch + hashchange listeners, a document-wide translate click handler, and
3 `:target` CSS rules making view visibility depend on the URL hash. These competed for
the same taps; on iOS (touch fires before click) the wrong handler could cancel a tap
before the correct router ran — leaving tabs dead.

## The fix
- Removed the conflicting `:target` CSS rules (exact-match removal, verified none remain).
- Installed ONE authoritative router that runs in the capture phase on BOTH `touchend`
  (iOS fires touch first) and `click`, using `stopImmediatePropagation()` so it wins over
  the old bubble-phase handlers. It toggles `.view.active`, sets `display`, updates the
  hash, and calls the correct render function.

## HONEST LIMITATION (per Jeffery's preferences)
[UNCERTAIN] This fix is validated in code (all script blocks parse, smoke test passes with
a new router regression guard) but I CANNOT run it in iOS Safari from my environment — no
browser/DOM available (jsdom install blocked by no network). Two prior nav fixes this
session failed on-device despite validating in code. My confidence is "likely," not
"certain." VERIFY by tapping all five tabs after deploy.

## Release checks
- Header + APP_VERSION: V15.2
- Service-worker cache: gta-v15-2-single-router
- Package version: 15.2.0
- Smoke test passing, with regression guard requiring the single router + no :target rules
- gta_v12_state storage key preserved

## Note
This build is from pristine V15.0C — it does NOT include the V15.1 Kumon mastery engine
(that was built on a since-damaged copy). Once tabs are confirmed working, the Kumon engine
can be cleanly re-added on top of this stable base.
