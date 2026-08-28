# viết về Bơ

A small no-build blog: write in Markdown, update one manifest, and publish.
The current visual theme is separated from the content, so ordinary writing never
requires editing HTML, CSS, or JavaScript.

## Where everything lives

```text
viet-ve-bo/
├── index.html                 landing-page structure (rarely edit)
├── post.html                  reading-page structure (rarely edit)
├── posts.json                 all editable site and post settings
├── posts/
│   ├── _template.md           copy this when starting a story
│   └── <slug>.md              one Markdown file per story
├── <slug>/                    photos used inside that story
└── assets/
    ├── css/
    │   ├── theme.css          shared theme and reading-page styles
    │   └── landing.css        landing-page styles
    └── js/
        ├── landing.js         builds the landing page from posts.json
        └── post.js            turns Markdown into a reading page
```

The older standalone HTML files and `.bak` files are preserved as archives. The
live site uses `index.html`, `post.html`, `posts.json`, and the Markdown files.

## Write and publish a new story

1. Copy `posts/_template.md` to `posts/<slug>.md`. Use a short lowercase slug,
   for example `mot-ngay-cua-bo`.
2. Create a matching `<slug>/` folder for its photos. In Markdown, add one with:

   ```md
   ![caption shown below the photo](./mot-ngay-cua-bo/photo.jpg)
   ```

3. Add the story to the `posts` list in `posts.json`:

   ```json
   {
     "slug": "mot-ngay-cua-bo",
     "status": "live",
     "emoji": "🐕",
     "title": "Một ngày của Bơ",
     "excerpt": "A short description shown on the landing page.",
     "date": "2026-08-11",
     "dateLabel": "Aug 2026"
   }
   ```

4. Set `status` to `live` when it should be clickable. Use `soon` while it is a
   visible placeholder. Then commit and push as usual; there is no build step.

The order in `posts.json` is the order shown on the landing page.

## Change the landing page

All frequently changed landing settings are at the top of `posts.json`, inside
`site`:

- `brand`, `tagline`, `author`, and `avatar` control the site identity.
- `landingImages` controls the floating photos. Each item chooses a story row
  with `post`, an image with `src`, and either `left` or `right` with `side`.
  `variation` (1–4) selects one of the subtle tilts. Reorder, replace, add, or
  remove these entries freely.
- `timeline` controls all four dates, labels, and symbols. The current-day marker
  positions itself automatically.
- `footer` controls the copyright line and link.

## Change the theme

- Edit the color and font variables at the top of `assets/css/theme.css` for a
  site-wide change.
- Edit `assets/css/landing.css` only for the landing-page layout.
- Reading-page rules are grouped in `assets/css/theme.css` under
  `POST READING VIEW`.

## Preview locally

Browsers block the content fetches when HTML is opened directly from disk. From
this directory, run:

```bash
python3 -m http.server 8000
```

Then open <http://127.0.0.1:8000/>. GitHub Pages serves the same files directly.
