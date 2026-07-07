# Καθημερινά V15.6A — Loop-Free Study Path + Instant UX Hotfix

This hotfix continues from V15.6 and specifically fixes the reported loop:

**Study Today’s Path → Study in Library first → back to Today → loading/reloading loop.**

## What changed
- The Today button no longer calls the old Library opener.
- Study in Library now routes directly to the lightweight Library tab.
- Library stays on the Library page after you click **I studied this concept**.
- The learner chooses when to start worksheets after study.
- Routes now use `data-v156a-route` instead of the old `data-route`, so older stacked routers cannot hijack the tap.
- Tab rendering is immediate; no 90ms skeleton delay.
- No hash navigation is used, reducing service-worker/router conflicts.
- Bottom tabs and top tabs still give immediate color/press feedback.
- Cache updated to `gta-v15-6a-loop-free-study-path`.

## Preserved
- `gta_v12_state` saved data.
- Kumon mastery rule: study first → timed answer-work → corrections outside timer → repetition → 3 strong rounds → unlock.
- V15.6 premium UX visual direction.
- V15.4 cache tools.

## Upload note
After uploading, use Review → Clear old app caches once, then reopen the app. If an older V15.6 screen appears, clear browser site data once.
