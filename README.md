# Sarah Liu — portfolio site

A static website (plain HTML, CSS, and a little JavaScript). No build step.

## Before you publish

1. **Upload the whole `site/` folder** to any static host (your own server, Netlify, Cloudflare
   Pages, GitHub Pages, S3, etc.). `index.html` is the entry point.

## What's inside

```
index.html
assets/css/style.css      styles
assets/js/main.js         image lightbox, nav highlighting, one-video-at-a-time
assets/fonts/             Young Serif + Figtree (self-hosted, OFL licensed)
assets/img/               web-sized photos and artwork (*-sm.jpg = thumbnails)
assets/video/             720p H.264 MP4s with poster frames (about 135 MB total)
assets/docs/              "May We Reach the Shore" (PDF)
                          MedSafe app presentation (PDF)
```

## Notes

- The page has `<meta name="robots" content="noindex">` so search engines won't list it;
  people with the link can still see it. Remove that line if you want it indexed.
- Videos load only when someone presses play (`preload="none"`), so the page stays fast.
- If your host limits file sizes, `assets/video/chorus.mp4` (68 MB) is the largest file.
  You could instead upload it to YouTube (unlisted) and swap the `<video>` for an embed.
- The resume PDF and PSAT report are intentionally not included, because they contain
  a phone number and a score-report record locator.
