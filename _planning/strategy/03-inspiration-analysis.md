# AISCEND LABS — INSPO SITE ANALYSIS

> Reference doc for the coding agent. What to take from each site, what to leave.
> Last updated: March 2026

---

## 1. SHOPIFY EDITIONS WINTER '26
**URL:** shopify.com/editions/winter2026

### What to take
- **Scroll-driven storytelling.** Each section earns its space. Content reveals on scroll in a way that feels editorial, not decorative. Won a One Page Website Award for the scrolling experience.
- **3D elements that serve a purpose.** They're not eye candy — they illustrate product concepts. For Aiscend, the equivalent could be a subtle 3D rendering of data flowing between nodes, or a visualization of knowledge mapping.
- **Section density.** 150+ features organized into digestible sections. Aiscend doesn't have that volume, but the principle of making complex work feel organized and navigable is right.
- **The "themed stories" approach.** Shopify wraps features in narrative (the "RenAIssance" theme). Aiscend's narrative is "your knowledge is trapped, we free it."

### What to leave
- The SaaS product showcase format. Aiscend is selling services, not software features.
- The developer documentation integration. Not relevant.
- The playful/whimsical moments. Aiscend's audience is serious business owners, not Shopify merchants looking for creative inspiration.
- The sheer volume. Shopify can sustain a 20-minute scroll because they have 150 features. Aiscend needs to land in 2-3 minutes.

### Specific elements to study
- How section transitions are handled (fade, slide, parallax)
- The typography hierarchy (how headings, subheads, and body text relate)
- How the hero communicates the core message before any scrolling
- The rhythm of text sections → visual sections → text sections

---

## 2. EVERY.TO/CONSULTING
**URL:** every.to/consulting

### What to take
- **Credibility-first structure.** Proof of work up front — testimonials, client logos, specific outcomes. Not buried at the bottom.
- **"We do it because it's what we do every day" confidence.** Every positions their consulting as an extension of their daily practice (they write about AI, build AI tools, train on AI). Aiscend should do the same: we build AI systems for a living, so we know what works.
- **The tier structure.** Every breaks consulting into clear steps: survey baseline → build tools → train teams → ongoing support. Aiscend's equivalent: discovery → specification → build → deploy → maintain.
- **Testimonials that sound real.** Not polished marketing quotes — actual client language about specific outcomes.
- **The compound credibility loop.** Every's consulting credibility comes from their content (newsletter, tools, open-source). Aiscend's equivalent is the Cuban clip, the FreeAxez case study, and Spencer's real-world speaking/teaching track record.

### What to leave
- The content-to-consulting pipeline. Every is a media company that added consulting. Aiscend is the inverse.
- The SaaS product stack (Spiral, Sparkle, Lex). Not relevant.
- The "six-figure consulting" scale positioning. Aiscend is targeting $20K-$75K engagements with SMBs, not Fortune 500 training.
- The heavy newsletter integration.

### Specific elements to study
- How the service tiers are visually differentiated
- The layout of the testimonial section (quote + attribution + context)
- How CTAs are spaced throughout the page
- The balance of text density vs. white space

---

## 3. PRISMTECH.AI (ARMAN'S SITE)
**URL:** prismtech.ai

### What to take
- **Speed and cleanliness.** The site loads fast and doesn't waste space. Minimal navigation, clear sections, immediate readability.
- **Professional service positioning.** "AI and Data Transformation Partner" — clear, not hype-y.
- **The data/chart element.** The Federal Reserve AI adoption chart is a smart touch — external data that validates the market. Aiscend could use Cuban's clip as the equivalent.
- **The component architecture.** If building off this repo, the Svelte/Astro patterns are already in place and tested.

### What to leave
- **The dark theme.** Non-negotiable for Aiscend's primary ICP. A 58-year-old engineering firm owner doesn't trust a dark website.
- **The generic service categories.** "AI & Automations, Data Science, Web Services, IoT, Training" — too broad. Aiscend's offerings are specific and should feel bespoke.
- **The relatively sparse content.** Prism is clean but thin. Aiscend needs more depth — the problem section, the Katie's Gut story, the proof.
- **"Business Has Changed" headline.** Too generic. Fails the "could this be on any other AI site?" test.

### What to carry forward (if forking repo)
- Site structure and routing
- Performance optimizations and build config
- Component patterns for sections
- Replace: color system, typography, all copy, content density

---

## 4. CONNOR'S CURRENT ITERATION (Paper Design)
Based on conversation context — no live URL, screenshot references mentioned.

### What's working
- **Font selection.** The typography Connor picked has potential. Evaluate whether it fits the serif-headline direction.
- **Premium instinct.** Connor's instinct toward premium feel is correct — it just needs to be warm-premium, not dark-premium.

### What's not working
- **Dark theme.** Discussed above. Has to go.
- **Gold accents.** Reads as crypto/fintech, not professional services for established businesses.
- **Copy quality.** Sounds like ChatGPT wrote it (per Spence's assessment). Replace entirely with the copy in COPY_CONTEXT.md.
- **Not built with ICP in mind.** The current design speaks to other technical people. It needs to speak to business owners who don't care about the tech stack.

---

## 5. MARK CUBAN / TBPN INTEGRATION

### The clip
- **Episode:** TBPN #193 (August 20, 2025)
- **Start time:** 2:31:59 (9119 seconds)
- **Channel:** @technologybrotherspod on YouTube
- **Duration of relevant segment:** ~30 minutes (Cuban's full appearance goes to ~3:02:38)
- **Best clip for the site:** Roughly 2:31:59 to 2:45:00 (the core "AI integrator" argument)

### Why this clip matters
Cuban literally describes Aiscend's business model before knowing Aiscend exists. Key points he makes:

1. **33 million companies need AI help** but have no budgets, no experts, no clue where to start
2. **Young people who learn AI implementation** will have unlimited job/business opportunities
3. He compares it to **walking into companies with PCs in the 1980s** — same dynamic, same opportunity
4. The opportunity is in **any company that has no idea about AI but needs it to compete**, not at big tech
5. The TBPN hosts validate: they hired interns who **just built things** instead of talking about what they could do

### How to use it on the site
- Full-width or near-full-width section
- Pull quote as section header: "There are 33 million companies in this country. They all need this."
- Brief framing copy connecting Cuban's words to Aiscend's two and a half years of doing exactly this
- The video should feel embedded in the page design, not like a YouTube iframe dropped in
- Link to full episode for attribution
- Consider a custom video player (self-hosted clip) for better visual integration

### Articles covering the clip (for credibility / potential backlinks)
- Inc.com: "Mark Cuban Says Young People Should Learn This Crucial AI Skill"
- Fortune: "Companies don't understand how to implement AI right now — and that's an opportunity for Gen Z"
- CNBC: "Mark Cuban: The AI skill I tell my own kids to learn"
- Yahoo Finance / Benzinga / Nasdaq coverage
- Shark Tank Blog: "Mark Cuban Predicts an 'Army' of Young Talent Will Lead AI Implementation"

---

## SYNTHESIS: THE AISCEND DESIGN FORMULA

Take Shopify's scroll-driven editorial quality.
Take Every's credibility-first structure and real testimonials.
Take Prism's speed, cleanliness, and component architecture.
Take Connor's typography instincts.
Replace everything else with:
- Light, warm background
- Serif headlines that signal establishment and trust
- Copy that sounds like Spencer talking to a prospective client — direct, specific, occasionally blunt
- The Cuban clip as the centerpiece social proof element
- FreeAxez as concrete evidence with real numbers
- A single, clear CTA: Book a Call
