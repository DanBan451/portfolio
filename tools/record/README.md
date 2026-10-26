# Screen-recording tooling

Produces the autoplaying MP4s in `public/media/projects/`. A headless Chromium
(Playwright) plays a scripted scenario against a live URL while recording, then
ffmpeg converts the capture to a small H.264 MP4 (1120 px wide, 24 fps).

Requirements: Node 18+, `ffmpeg`/`ffprobe` on PATH.

```bash
cd tools/record
npm run setup                               # installs playwright + chromium (once)
node record.js scenarios/vy-horizon.json    # -> tools/record/out/vy-horizon.mp4
cp out/vy-horizon.mp4 ../../public/media/projects/
```

Then reference it from `src/content/projects.json` as `"media": "projects/vy-horizon.mp4"`.

## Scenarios

A scenario is a JSON file: `name`, `url`, optional `width`/`height`
(default 1792×1120), `initialWait`, `mp4Width`, and a list of `steps`:

| action | fields | notes |
|---|---|---|
| `wait` | `ms` | |
| `scroll` | `to` (px or `"bottom"`), `duration` | eased smooth scroll |
| `goto` | `url` | navigate within the recording |
| `click` | `selector`, `force?` | |
| `clickText` | `text`, `exact?` | |
| `hover` | `selector` | |
| `type` | `selector`, `text` | fills instantly |
| `typeSlow` | `selector`, `text`, `delay?` | keystroke by keystroke |
| `press` | `key` | |
| `mouse` | `x`, `y`, `steps?`, `click?` | |
| `eval` | `js` | run arbitrary JS in the page |

Set `"gif": true` (plus optional `fps`, `gifWidth`, `colors`) to also emit a GIF.
Failed steps are logged and skipped, so a broken selector doesn't abort the recording.

## DramaRama

DramaRama is behind Clerk auth and talks to an LLM, so it has its own scripts:

```bash
# 1. run the DramaRama frontend locally (or point DRAMA_URL at a dev deployment)
# 2. sign a Clerk dev-instance test account in; the session is saved to profile-drama/
DRAMA_EMAIL=you+clerk_test@example.com DRAMA_PASSWORD=... node drama-signin.js
# 3. record; DRAMA_WORKSPACE is an existing workspace whose canvas should be shown
DRAMA_WORKSPACE=<uuid> node drama-record.js   # -> out/dramarama.mp4 (sped up to ~50 s)
```

Credentials are read from the environment only. `profile-drama/`, `out/` and
`node_modules/` are gitignored.

## Verifying a deployment

```bash
node verify-portfolio.js https://danban451.github.io/portfolio/
```

Lists the project cards, confirms the videos play, opens two popups and writes
screenshots to `out/`.
