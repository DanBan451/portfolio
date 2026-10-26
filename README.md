# Daniel Dobrovolskiy — portfolio

Source for [danban451.github.io/portfolio](https://danban451.github.io/portfolio/).
React 18 (Create React App), deployed as a static site to GitHub Pages.

## Editing content

Everything visible on the site comes from two JSON files plus a media folder:

| What | Where |
|---|---|
| Hero (name, taglines, photo, button labels), nav, skills, programs, about, contact, socials, footer, page title | `src/content/site.json` |
| Project cards and their popup text | `src/content/projects.json` |
| Images and screen recordings referenced by those files | `public/media/` |
| Downloadable resume | `public/resume.pdf` |

Any JSON value that names a file (`photo`, `icon`, `media`, `checkIcon`,
`scrollUpIcon`) is a path relative to `public/media/`, e.g.
`"images/me4.jpeg"` or `"projects/dramarama.mp4"`.

### Adding a project

1. Drop the recording into `public/media/projects/` (`.mp4` autoplays muted and
   loops; `.gif`/`.png`/`.jpg` render as an image). See
   [`tools/record/`](tools/record/README.md) to produce one.
2. Add an entry to `src/content/projects.json`:

```json
{
  "title": "True Reach",
  "media": "projects/true-reach.mp4",
  "description": "What it is, who it's for, what you built.",
  "perks": ["Stack line 1", "Stack line 2", "Stack line 3"],
  "url": "https://example.com"
}
```

Leave `url` empty (`""`) to show "Private Project" instead of a link. Order in
the file is display order.

### Socials and nav icons

`socials[].icon` and `nav.links[].icon` are names resolved in
`src/components/icons.js` (`github`, `linkedin`, `instagram`, `facebook`, `x`,
`youtube`, `medium`, `dev`, `website`, `email`, `phone`, …). Add a mapping
there to use a new icon.

### Phone number

`contact.phone` is `null`, which hides the phone row. Set it to a string to show it.
The pre-deploy check refuses to publish a build containing the personal numbers
listed in `tools/check-build.js`.

## Development

```bash
npm install
npm start          # http://localhost:3000
npm test           # smoke test: JSON content renders
npm run build      # production build in build/
```

## Deploying

```bash
npm run deploy
```

This builds, runs `tools/check-build.js` (fails if the build contains the
private `reference/` folder, forbidden text such as phone numbers or API keys,
or JPEGs with EXIF metadata), then pushes `build/` to the `master` branch,
which GitHub Pages serves. Source lives on `main`.

The site is built for the base path in `package.json` → `homepage`. All
internal links and media URLs resolve against `PUBLIC_URL`, so changing
`homepage` (for example to a custom domain) is the only change needed.

## Private material

`reference/` (resume drafts, cover letters, audit notes) is gitignored and never
part of a build. Keep anything you don't want public in there.
