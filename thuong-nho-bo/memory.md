# Homepage redesign memory

Last updated: July 23, 2026

## Goal

Redesign the `thuong-nho-bo` homepage as a quiet, handmade collection of
postcards for Bơ. The mood should be warm, intimate, neat, and spacious rather
than looking like a conventional blog.

## Current approved direction

The user is happy with the current homepage direction:

- A compact, centered 3×3 collection that fits on one screen without scrolling.
- Each post looks like a small Polaroid/postcard:
  - warm white paper;
  - thick frame around a square image window;
  - subtle shadow;
  - extremely slight rotation;
  - handwritten title in the larger bottom margin.
- The illustrated site background is restored from
  `./images/gpt-image-1.png`.
- There is no subtitle beneath “Bơ và chị Thảo.”
- All nine tiles are deliberately non-clickable for now.
- All tile artwork is currently a CSS placeholder. Existing post cover images
  are not shown on the homepage.
- The layout stays 3×3 on phones instead of becoming a vertical list.
- The collection is deliberately small so plenty of the background remains
  visible.

The latest reference for the postcard frame was:

`https://pixnio.com/free-images/2026/01/11/2026-01-11-10-54-41-1344x920.jpeg`

Earlier mood references combined:

- calm spacing and storybook atmosphere:
  `https://i.pinimg.com/736x/47/13/b7/4713b7ab838fd32cc123f4cb3929df3d.jpg`
- a small amount of scrapbook character:
  `https://i.pinimg.com/control1/1200x/9f/8d/a1/9f8da16bea117b1fe7dcca563782c972.jpg`
- gallery/collection structure:
  `https://i.pinimg.com/1200x/c7/c2/03/c7c2031b19531bac00e52f493b856bc3.jpg`

## Implementation state

The redesign is implemented entirely in `index.html`.

- Post data still loads from `posts.json`.
- There are eight real entries in `posts.json`.
- JavaScript temporarily adds a ninth non-clickable placeholder titled
  “một câu chuyện nữa…” so the 3×3 composition is complete.
- The handwritten card titles use Google Font `Caveat`.
- The brand remains in `Crimson Pro`.
- Desktop sizing is constrained by both viewport width and viewport height.
- Phone sizing uses approximately 92% of the screen width and also respects
  viewport height.
- A short-screen media query keeps everything inside one viewport.
- The homepage currently contains no user-facing `<a>` elements.
- JavaScript syntax and whitespace checks passed after the latest changes.

Only `index.html` was intentionally changed for the redesign. Other modified
or untracked files in the repository existed separately and should not be
altered or discarded as part of this work.

## Planned artwork workflow

The user plans to design the individual artwork. The preferred workflow is:

1. Design only the square image inside each postcard.
2. Export each artwork at `1200 × 1200px`.
3. Keep the postcard paper, frame, shadow, spacing, and title in HTML/CSS.
4. Attach the artwork here individually or as a batch.
5. Refer to placements by the tile number or grid coordinate.

Suggested asset names and grid:

| Position | Number | Story | Suggested filename |
|---|---:|---|---|
| R1C1 | 01 | chào Bơ | `01-chao-bo.png` |
| R1C2 | 02 | cùng Bơ đi Mỹ | `02-bo-di-my.png` |
| R1C3 | 03 | chị Thảo dạy Bơ | `03-chi-thao-day-bo.png` |
| R2C1 | 04 | Bơ dạy chị Thảo | `04-bo-day-chi-thao.png` |
| R2C2 | 05 | 39/42 điều hai chị em cùng làm | `05-39-42-dieu.png` |
| R2C3 | 06 | Nghe thấy nắng | `06-nghe-thay-nang.png` |
| R3C1 | 07 | Tạm biệt Bơ | `07-tam-biet-bo.png` |
| R3C2 | 08 | Cho đến khi mình gặp lại | `08-cho-den-khi-gap-lai.png` |
| R3C3 | 09 | future story | `09-future-story.png` |

Examples of clear feedback:

- “Swap 03 and 04.”
- “Move Bơ toward the left in 05.”
- “Make 02 slightly warmer.”
- “Use this artwork for R2C3 / number 06.”

If the user wants titles in their actual handwriting, they can later provide
either a handwriting font or separate transparent title images such as
`02-title.png`.

## Next session

Start by opening `index.html`, `posts.json`, and this file. Ask the user for
their artwork or full-page grid mockup. Once artwork is supplied:

1. Save it with the agreed numbered filenames.
2. Map the artwork to the matching post.
3. Preserve the current non-clickable behavior unless the user explicitly asks
   to activate links.
4. Check the entire 3×3 collection at desktop and phone sizes.
5. Keep the page within one viewport and preserve generous background space.

For a local preview, run from this directory:

`python3 -m http.server 4173 --bind 127.0.0.1`

Then open:

`http://127.0.0.1:4173/`
