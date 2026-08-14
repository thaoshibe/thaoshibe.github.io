# Life of Thao, in weeks

A no-build, data-driven life calendar for GitHub Pages.

## Personalize it

Open `life-data.js` and:

1. Set `birthDate` using `YYYY-MM-DD`.
2. Add memories to the `milestones` list.
3. Open `index.html` in a browser to preview.

Each milestone supports:

```js
{
  date: "2026-08-13",
  displayDate: "Aug 2026",                            // optional, for approximate dates
  title: "Built my life in weeks",
  description: "A longer story shown on hover or tap.", // optional
  emoji: "✨",                                        // optional
  image: "images/a-memory.jpg",                       // optional
  imageAlt: "Description of the photo",               // optional
  link: "https://example.com/my-story",                // optional
  linkLabel: "Read the full story ↗"                   // optional
}
```

Put local photos in a `life-of-thao/images/` folder, then reference them as
`images/filename.jpg`. All fields except `date` and `title` are optional.
For an approximate date, use a real date for placement and add `displayDate`
with the less precise text you want visitors to see.

Hover over a memory for a temporary preview. Click or tap it to keep the card
open; click outside, click the memory again, or press `Esc` to close it.

The site is published at <https://thaoshibe.github.io/life-of-thao/life-in-weeks/> after the files are committed and pushed.
