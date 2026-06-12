# cho Bơ 🥑 — blog

Content and theme are kept separate, so you can edit one without touching the other.

```
chobo/
├── index.html      # the landing page (iPad-style home screen). don't usually edit.
├── post.html       # the reading view that renders a markdown post. don't usually edit.
├── theme.css       # ← edit this to restyle the WHOLE blog (colors, fonts, layout)
├── posts.json      # ← the list of posts (title, date, cover, excerpt…)
└── posts/
    ├── bo-di-my.md         # ← post content, in markdown
    └── bo-di-my/...        # images for that post (live in chobo/bo-di-my/)
```

## ✍️ Add a new post

1. Write the post as markdown: `posts/<slug>.md` (e.g. `posts/roadtrip.md`).
   - Images: put them in `chobo/<slug>/` and reference as `./<slug>/photo.png`.
   - For an image caption, use the alt text: `![my caption here](./roadtrip/photo.png)`.
2. Add an entry to `posts.json` (or flip an existing `"soon"` entry to `"live"`):

   ```json
   {
     "slug": "roadtrip",
     "status": "live",
     "emoji": "🚗",
     "eyebrow": "du lịch",
     "title": "Roadtrip cùng chó mèo",
     "excerpt": "đường dài, ghế sau, và hai cái mũi ướt.",
     "date": "2024-05-01",
     "dateLabel": "May 2024",
     "cover": "./roadtrip/cover.png"
   }
   ```

   - `status`: `"live"` (clickable) or `"soon"` (greyed-out placeholder).
   - `featured: true` puts the post in the big center slot of the homepage.
   - `cover` is optional — without it, the card shows the `emoji` on a pastel tile
     (`ph` field, `ph-1`…`ph-9`, picks the tile color).

That's it — no build step.

## 🎨 Restyle

Everything visual is in `theme.css`. The palette lives in the `:root` block at the
top (background, accent color, fonts). Index styles and post-reading styles are
clearly sectioned within the file.

## 👀 Preview locally

The pages load `.md`/`.json` with `fetch()`, which browsers block over `file://`.
Run a tiny local server from the repo root, then open the URL:

```bash
python3 -m http.server 8000
# → http://127.0.0.1:8000/chobo/index.html
```

On GitHub Pages it just works (it's served over HTTP).

> Note: `bo-di-my.html` is the original Notion export, kept as a backup. The live
> post is now generated from `posts/bo-di-my.md`.
