# AISCEND LABS — CUBAN VIDEO CONTEXT

> Drop this file into the repo root. Everything the coding agent needs to implement the video section.
> Last updated: March 2026

---

## THE VIDEO

**Source:** Diet TBPN — Mark Cuban, Vlad Tenev & MORE (August 20, 2025)
**Channel:** @technologybrotherspod
**Video ID:** `FWDWFBcO3fs`
**Full URL:** `https://www.youtube.com/watch?v=FWDWFBcO3fs`
**Total length:** ~30:23

This is the 30-minute highlight cut (Diet TBPN), not the full 3h33m episode.

---

## THE CLIP

Spencer will self-host a custom-cut clip spliced from multiple segments of this video. The clip will live at:

```
/public/video/cuban_clip.mp4
/public/video/cuban_clip.webm
```

Until the self-hosted clip is ready, use the YouTube embed as a placeholder:

```html
<iframe
  width="100%"
  style="aspect-ratio: 16/9;"
  src="https://www.youtube.com/embed/FWDWFBcO3fs?start=975&end=1095&rel=0&modestbranding=1"
  title="Mark Cuban on Implementing AI in Business — TBPN"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
```

(975s = 16:15, 1095s = 18:15 — the core "AI integrator" monologue)

---

## SELF-HOSTED VIDEO COMPONENT

When the clip files are in `/public/video/`, use this pattern:

```svelte
<section class="cuban-video">
  <video
    controls
    preload="metadata"
    poster="/video/cuban_poster.jpg"
    playsinline
  >
    <source src="/video/cuban_clip.webm" type="video/webm" />
    <source src="/video/cuban_clip.mp4" type="video/mp4" />
  </video>
  <p class="attribution">
    Mark Cuban on <a href="https://www.youtube.com/watch?v=FWDWFBcO3fs" target="_blank" rel="noopener">TBPN</a>, August 2025
  </p>
</section>
```

Generate the poster image from the clip:
```bash
ffmpeg -i cuban_clip.mp4 -ss 00:00:05 -frames:v 1 -q:v 2 cuban_poster.jpg
```

---

## DOWNLOAD & CUT INSTRUCTIONS (for Spencer)

### 1. Install tools
```bash
brew install yt-dlp ffmpeg
```

### 2. Download the full Diet episode
```bash
yt-dlp -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]' \
  -o 'cuban_diet_full.%(ext)s' \
  'https://www.youtube.com/watch?v=FWDWFBcO3fs'
```

### 3. Watch it, note your timestamps, cut each segment
```bash
# Example — adjust these to your actual timestamps after watching
ffmpeg -i cuban_diet_full.mp4 -ss 00:01:30 -to 00:02:15 -c copy seg1.mp4
ffmpeg -i cuban_diet_full.mp4 -ss 00:16:15 -to 00:18:15 -c copy seg2.mp4
```

### 4. Concatenate segments into one clip
```bash
echo "file 'seg1.mp4'" > segments.txt
echo "file 'seg2.mp4'" >> segments.txt
ffmpeg -f concat -safe 0 -i segments.txt -c copy cuban_clip_raw.mp4
```

If the hard cuts between segments feel jarring, re-encode instead:
```bash
ffmpeg -f concat -safe 0 -i segments.txt -c:v libx264 -crf 23 -c:a aac cuban_clip_raw.mp4
```

### 5. Convert for web
```bash
# MP4 (Safari + fallback)
ffmpeg -i cuban_clip_raw.mp4 -c:v libx264 -crf 23 -c:a aac -b:a 128k cuban_clip.mp4

# WebM (Chrome/Firefox, smaller file)
ffmpeg -i cuban_clip_raw.mp4 -c:v libvpx-vp9 -b:v 2M -c:a libopus -b:a 128k cuban_clip.webm

# Poster image
ffmpeg -i cuban_clip.mp4 -ss 00:00:05 -frames:v 1 -q:v 2 cuban_poster.jpg
```

### 6. Drop files into repo
```
public/video/cuban_clip.mp4
public/video/cuban_clip.webm
public/video/cuban_poster.jpg
```

---

## SECTION COPY

**Header:** "There are 33 million companies in this country. They all need this."

**Body:** Mark Cuban on TBPN, August 2025. He describes the exact opportunity Aiscend has been executing on for two and a half years: young, technical teams walking into established businesses and translating AI capabilities into operational value. Companies don't need to understand AI. They need someone who understands their business and can build around it.

**Attribution line:** Mark Cuban on [TBPN](https://www.youtube.com/watch?v=FWDWFBcO3fs), August 2025

---

## DESIGN NOTES

- Section should feel full-width or near-full-width. The video is the centerpiece.
- Dark background for this section only (to contrast with the light site and make the video pop). Think cinema-mode.
- Pull quote as the section header in large serif type.
- Video player should have no autoplay. Poster image visible on load.
- On mobile, video should scale to full viewport width with maintained aspect ratio.
- No YouTube recommended videos, no YouTube branding — this is why we self-host.
- Attribution link below the player, small and understated.

---

## WHY THIS CLIP MATTERS

Cuban is describing Aiscend's exact business model without knowing Aiscend exists:
- 33 million companies in the US need AI help but have no budgets or experts
- Young people who learn implementation will walk into businesses and create massive value
- He compares it to selling PCs in the 1980s — same dynamic, same scale of opportunity
- "Go into any other company that has no idea about AI but needs it to compete"
- "There is nothing intuitive for a company to integrate AI"

This clip was covered by Inc, Fortune, CNBC, Yahoo Finance, Benzinga, Nasdaq, and the Shark Tank Blog. One AI commentator called it "the MOST underrated clip on the internet right now." It went viral again in February 2026 when Rohan Paul reshared it and Cuban reposted three responses from AI leaders.

Third-party validation from a billionaire describing your exact thesis is the highest-leverage social proof element on the entire site.
