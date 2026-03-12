# AISCEND LABS — BRAND & VOICE CONTEXT

> Drop this file into the repo root. The coding agent should reference it for all design and tone decisions.
> Last updated: March 2026

---

## WHO IS LOOKING AT THIS SITE

### Primary ICP: The Owner / Senior Leader
- 50-65 years old
- Runs or leads a company with $5M-500M+ revenue
- 15-30+ years in business
- Knows their industry cold, doesn't know what an LLM is
- Skeptical of consultants who show up with frameworks and leave with invoices
- Responds to: proof of work, plain language, specificity, the feeling that someone *gets it*
- Does NOT trust dark-themed developer portfolios

### Secondary ICP: The Operations Bottleneck
- The COO, senior designer, technical lead everyone depends on
- Chronically overloaded, reviewing every output
- Knows they're a single point of failure
- Needs to see: "These people understand my exact situation"

### Tertiary ICP: The Enterprise Strategist
- 32-45 years old, head of strategy or similar at large company
- Technical enough to install Claude Code on a weekend
- Already has IBM/Accenture doing workflow mapping
- Recognizes those firms don't capture nuance (gut decisions, implicit knowledge)
- May not buy consulting, but might buy Atlas or refer someone

---

## SITE PURPOSE

Most leads arrive warm — through referrals, network introductions, board connections. The site's job is **credibility confirmation**, not lead generation.

A warm lead visits asking two questions:
1. Are these guys legit?
2. Do they actually understand my problem?

If the site answers both in under 30 seconds, the lead books a call. If it doesn't, they quietly move on.

---

## AESTHETIC DIRECTION

### Philosophy
Premium but warm. McKinsey-meets-boutique-agency, not SaaS startup. The most premium thing you can do for this audience is be clear, confident, and human.

### Color Palette
| Role | Value | Notes |
|------|-------|-------|
| Background | `#FAFAF8` | Warm off-white. Not pure white (too clinical) |
| Primary text | `#1A1A1A` | Near-black. High contrast |
| Accent | `#1A3A5C` | Deep navy. Headlines, links, CTA |
| Secondary accent | Muted terracotta or sage | Very sparing use |
| **AVOID** | Gold, neon, gradients | Gold reads crypto/fintech, not professional services |

### Typography
| Role | Direction |
|------|-----------|
| Headlines | Serif with character: Editorial New, Freight Display, or similar. Signals trust to older audience. |
| Body | Clean sans-serif: Inter, Satoshi, or similar. Readable at small sizes. |
| Monospace | JetBrains Mono. Only for technical callouts if needed. |
| Size hierarchy | Dramatic. H1 = statement. Body = comfortable on 14" laptop. Mobile body >= 16px. |

### Visual System
- **Photography over illustration.** Real workspaces, hardware (Mac Minis, recording pins), whiteboards. Unstaged feeling.
- **Subtle motion.** Scroll-triggered fade-in/slide-up (Svelte transitions). Parallax on case study (0.3x). No bouncing, pulsing, or attention-demanding animation.
- **No animation on hero.** Text immediately visible and readable.
- **All animations respect `prefers-reduced-motion`.**

### Hard "No" List
- Dark themes
- TypeScript favicons or default framework branding
- Gradient cards or "glassy" UI elements
- Generic AI consulting visual language (circuit boards, brains, abstract networks)
- Stock photos of diverse teams in glass conference rooms

---

## VOICE

### Register
A smart 26-year-old who's been doing this for two and a half years talking to someone's dad who runs a $50M company. Respectful but not deferential. Technical enough to build it, business-savvy enough to explain why it matters. Occasionally blunt. Never promotional.

### How Spencer Actually Talks (From Conan Cooper Call, Feb 2025)

**On discovery:**
> "We really like, I guess I've learned how to create and ask on the spot probing questions that are forcing people to be extremely explicit with their internal chain of thought."

**On the work:**
> "It's very hard to articulate, frankly, what we do. So in that regard, like a lot of it is hands-on consulting work. And it's not like traditional consulting."

**On selling:**
> "I don't really try to sell too much anymore. Either there's going to be something I can build for you and you have a problem and I can build around that problem, or I can't."

**On the craft:**
> "It's almost like clay, right? It's pottery, the kind of art that we do in this business."

**On human nuance:**
> "If you can't get people to articulate why and how they even think to do things, then you're not going to be able to build a system that performs anything near the taste and that closeness that a human has."

The site copy should feel like this register cleaned up about 15% — slightly more polished, but with the same directness, the same willingness to say "we can't" or "it's not worth your money."

### External Validation (Conan Cooper, Head of Strategy @ New York Life)
Came in expecting a sales pitch, left offering to connect Aiscend with his network:

> On nuance capture: "Recording them and then prompting them to be like, oh, why did I call them? It makes a lot of sense to me."

> On the gap: "How do you supplement an existing AI consultant with something like what you offer, which is more of the getting that AI consultant the information that they need? Because they ain't doing it right."

> On gut decisions: Independently described the same insight as "Katie's Gut" — subconscious chains of observation that drive high-value decisions people can't explain.

### Banned Words & Patterns
- Transformative, game-changing, revolutionary, cutting-edge, robust
- Leverage, paradigm, synergy, holistic, delve, landscape
- Moreover, Furthermore, Additionally, It's worth noting
- "This highlights…" / "This underscores…" / "This demonstrates…"
- "It's not X, it's Y" sentence constructions
- Rule-of-three lists embedded in sentences
- Em-dash overuse (one per page maximum in body copy)
- Any sentence that could appear on any other AI consulting website

### Sentence Style
- Vary length significantly. Some short and punchy. Some longer and explanatory.
- Use contractions naturally.
- Start sentences with "And" or "But" when it flows.
- Let some insights be incomplete or raise questions rather than resolve everything.
- No promotional superlatives. If you have to say you're the best, you're not writing it right.

---

## TECHNICAL REQUIREMENTS

### Stack
- **Astro** (static-first, minimal JS)
- **Svelte** components for interactive elements
- **Tailwind CSS** for styling
- **Deploy:** Vercel or Cloudflare Pages

### Starting Points
- Arman's PrismTech.ai repo (structure, component patterns)
- Spencer's Svelte animation repo (scroll animations)
- Connor's Paper Design iteration (font evaluation)

### Performance Targets
- Lighthouse: 95+
- FCP: <1.0s
- LCP: <1.5s
- Total JS: <50KB gzipped (excluding video player)
- Zero layout shift on initial load

### Page Structure
Single-page scroll with sections: Hero → Problem → What We Do → Cuban Video → Proof → Team → Contact. Plus `/case-study/freeaxez` as a separate page.

No hamburger menu. Header: logo + "Talk to Us" CTA only.

### Cuban Video
- TBPN Episode 193 (Aug 20, 2025), @technologybrotherspod
- Mark Cuban segment starts at **2:31:59** (9119 seconds)
- Embed: `https://www.youtube.com/embed/[VIDEO_ID]?start=9119`
- Self-host: `yt-dlp --download-sections '*2:31:59-2:45:00' [URL]`
- Custom player recommended for seamless integration
