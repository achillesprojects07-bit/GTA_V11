# Καθημερινά V15.6C — Reload Loop Fix

Surgical fix on ChatGPT's V15.6B (all its features preserved unchanged).

## The fatal bug [ESTABLISHED]
V15.6B never finished loading. Cause: the service-worker `controllerchange` handler
called `location.reload()` guarded only by a `window` variable — which the reload itself
wipes, so the guard never blocked the next reload. Result: infinite reload loop. (The
V15.6A "Loop-Free" hotfix attempted this fix but used the same volatile guard.)

## The fix
The guard now persists in `sessionStorage`, which survives reloads within the tab —
so the update-reload can fire at most ONCE per tab session. Loop broken regardless of
what triggers controllerchange. All other reload calls in the app are button-triggered
and untouched. ChatGPT's SW fetch strategy and CLEAR_CACHES handler are preserved.

## Also fixed: the "changes to V14.3" confusion
The Library/Levels/Worksheets/Review screens displayed hardcoded 'V14.3' badges from an
old build — this looked like the app reverting versions. It never was; it was stale
label text. Badges now show V15.6C. Historical manifest rows intentionally left intact.

## ONE-TIME STEP REQUIRED ON YOUR DEVICE [ESTABLISHED — unavoidable]
Your phone currently runs the OLD looping code, served by the OLD service worker. A
looping client never fetches the new deploy, so no server upload alone can fix it.
After deploying V15.6C: clear the site's data ONCE in your normal browser
(Chrome → site settings for the github.io site → Clear data; or delete + re-add the
installed icon). Then load fresh. Verify first in incognito if you want proof it works.

## Release checks
- APP_VERSION: V15.6C · SW cache: gta-v15-6c-loop-fix · package 15.6.3
- Smoke test passing, incl. new regression guard: reload guard must be sessionStorage-based
