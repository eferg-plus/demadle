# Migration notes — Glitch to GitHub Pages

This copy has been cleaned up and prepped for GitHub Pages. Here's exactly
what changed and what's left for you to do.

## What I already fixed
- Removed all Glitch-only files (`.glitchdotcom.json`, `.glitch-assets`,
  `node_modules`, `.git`, `.config`, `.bash_history`, `pnpm-debug.log`,
  `.node-gyp`).
- Fixed the root `index.html` redirect (was hardcoded to
  `dema-heardle.glitch.me/daily`, now redirects to `./daily/`).
- Rewrote every `cdn.glitch.global` / `cdn.glitch.me` audio URL in
  `daily/script.js`, `infinite/script.js`, and `rapid/script.js` to point at
  a local `audio/` folder instead (that CDN is dead now that Glitch shut
  down).
- Rewrote the cover-image URLs (`Vessel.png`, `Trench.png`, `Clancy.jpg`,
  `my-image (1).png`) to point at a local `images/` folder.
- Made the in-app navigation between `/daily`, `/infinite`, and `/rapid`
  use `window.location.origin` instead of a hardcoded glitch.me domain, so
  it'll work automatically on whatever URL GitHub gives you.

## What YOU need to do

### 1. Add your audio files
Drop your downloaded mp3s into the `audio/` folder. The filenames must
match **exactly** — see `audio/REQUIRED_FILES.txt` for the full list of 105
files the scripts expect (spelling, spaces, commas, and apostrophes all
matter).

### 2. Add your image files
Drop your 4 cover images into the `images/` folder — see
`images/REQUIRED_FILES.txt` for the exact filenames needed.

### 3. Update the leftover share/branding links
A few `glitch.me` URLs are just used for social-share text and "made by"
links (not audio or images, so the game works fine without touching these,
but you'll want them pointing at your real new URL eventually):

- `daily/index.html` line 23, 471–472
- `infinite/index.html` line 23, 469–470
- `rapid/index.html` line 23, 451–452, 463
- `rapid/script.js` lines 304, 313

Simple find-and-replace `dema-heardle.glitch.me` (and
`top-heardle.glitch.me`) with your new GitHub Pages URL once you know it.
