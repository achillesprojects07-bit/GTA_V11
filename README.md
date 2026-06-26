# GTA V12.7 — Real Phone UX Test Fixes

This build continues from V12.6 without adding new learning modes or new content. It focuses on the frictions that show up when the app is used as an installed PWA on a real phone: thumb reach, scroll position, tap safety, audio certainty, and clearer end-of-card actions.

## Added in V12.7

- Real phone UX checklist in More
- Today-screen phone polish card
- Larger/saner tap target behavior for phone use
- Safer tab switching: main navigation resets the screen to the top
- Audio reliability cue before Greek speech plays
- Graceful fallback if speech synthesis is unavailable
- Audio buttons show a temporary active state while playing
- Speech voices are gently primed after first touch to improve iOS/Safari reliability
- Practice card grading buttons are grouped in a sticky final-action area
- Service worker cache updated for V12.7
- Manifest, package file, and smoke test included for the new repository

## Preserved

- Single-file offline-first PWA
- Today’s 5 + Due Now
- Trip-date deadline scheduling
- Honest mastery model
- I’m Here survival mode
- Native review + field-safe content layer
- Record compare
- Optional Greek-script track
- Gentle nudges
- Progress Truth + backup safety
- SRS ladder `[1, 3, 7, 21, 60]`
- Existing embedded phrase and vocabulary library

## Real-phone test checklist

Test these on the actual target iPhone after uploading to the new repo:

1. Add to Home Screen from Safari.
2. Open once online, then reopen in airplane mode.
3. Start Today’s 5 and confirm buttons are easy to tap with one hand.
4. Play normal and slow Greek audio from Practice and I’m Here.
5. Change tabs and confirm each screen starts at the top.
6. Finish a five-card session and confirm the next step is obvious.
7. Try survival mode in bright light and confirm the show-card is readable.
8. Confirm backup/export still works before any real user testing.

## Suggested next build

GTA V12.8 — Stable Candidate + Test Feedback Fixes. Only build this after testing V12.7 on a real iPhone and collecting specific friction notes.
