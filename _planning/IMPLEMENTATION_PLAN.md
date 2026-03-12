# AISCEND WEBSITE — MASTER IMPLEMENTATION PLAN

> Master engineering plan for the Aiscend website rebuild.
> Built from all documents in `_planning/`. Issues formatted per `_planning/issue_creation/issue-creation.md`.
> One fresh Droid session per issue. Each session references this plan and implements one coherent piece.
> Last updated: March 2026

---

## CURRENT STATE

The codebase runs on Arman's PrismTech redesign v2. Astro + React + Tailwind, framer-motion, Lottie, shadcn/ui, Cal.com embed. The architecture is solid. The work is primarily copy, sections, typography, and color -- not a rewrite.

**What's already working:** Astro static build, React islands, Tailwind v4 theming, framer-motion animations, Lottie integration, Cal.com embed, shadcn/ui components, responsive layouts, smooth scroll nav.

**What needs to change:** Copy (generic → Spencer's voice), sections (add Problem, Proof, Team; rework Cuban Video), typography (techy → serif headlines), color (cool → warm), header (strip to logo + CTA), branding remnants (Prism → Aiscend).

---

## SOURCE DOCUMENTS

| ID | Document | Path | Provides |
|----|----------|------|----------|
| S1 | ICP & Customer Context | `_planning/strategy/01-icp-customer-context.md` | Customer archetypes, ICP profiles, language mapping, emotional target |
| S2 | Brand & Voice Design | `_planning/strategy/02-brand-voice-design.md` | Color palette, typography, visual system, voice register, banned words, tech stack, page structure, performance targets |
| S3 | Inspiration Analysis | `_planning/strategy/03-inspiration-analysis.md` | Shopify/Every/Prism analysis, synthesis formula |
| C1 | Site Copy | `_planning/copy/01-site-copy.md` | Word-for-word section copy: Hero, Problem, What We Do, Cuban, Proof, Team, Contact, SEO |
| C2 | Aiscend Thesis | `_planning/copy/02-aiscend-thesis.md` | Core philosophy, tacit knowledge thesis, discovery document framing |
| C3 | Solutions Copy v2 | `_planning/copy/03-solutions-copy.md` | 8 client profiles, NDA rules, layout guidance, section closer |
| R1 | Cuban Video Integration | `_planning/reference/01-cuban-video-integration.md` | Video ID (FWDWFBcO3fs), timestamps, embed code, self-host instructions, section design |
| R2 | Full Build Brief (.docx) | `_planning/reference/02-full-build-brief.docx` | Canonical spec — supersedes other docs where they conflict. Sections: Strategic Foundation, Design Direction, Technical Spec, Full Site Copy, Voice & Brand Context, Implementation Notes |

**Root-level docs (supplementary):**
- `TASK.md` — Previous iteration tasks (some completed, some superseded by planning docs)
- `OUTLINE.md` — Component/UI reference links
- `COPY.md` — Earlier copy draft, superseded by C1 and C3

---

## ISSUE TABLE

| # | Title | Priority | Depends On | Files | Phase |
|---|-------|----------|------------|-------|-------|
| 1 | `chore: update color palette and typography system` | P0 | -- (foundational) | 3 | 1 |
| 2 | `chore: remove Prism branding references` | P0 | -- (independent) | 4 | 1 |
| 3 | `refactor: simplify header to logo + CTA` | P0 | #1 (needs updated colors) | 3 | 1 |
| 4 | `feat: rewrite hero section copy and layout` | P1 | #1 (typography/colors) | 2 | 2 |
| 5 | `feat: add Problem section` | P1 | #1 (typography/colors) | 2 | 2 |
| 6 | `feat: implement Cuban Video section` | P1 | #1 (typography/colors) | 3 | 2 |
| 7 | `feat: rework Solutions into What We Do section` | P1 | #1, #5 (design system + Problem exists above) | 2 | 3 |
| 8 | `feat: add Proof / Case Studies section` | P1 | #1 (typography/colors) | 2 | 3 |
| 9 | `feat: add Team section` | P2 | #1 (typography/colors) | 2 | 3 |
| 10 | `feat: update Contact section copy` | P2 | #1, #2 (colors + branding) | 1 | 4 |
| 11 | `feat: update Footer and wire new section IDs` | P2 | #2, #6, #8, #9 (branding + new sections exist) | 1 | 4 |
| 12 | `feat: update page structure and section order` | P1 | #5, #6, #7, #8, #9 (all new sections created) | 1 | 4 |
| 13 | `chore: SEO meta tags, OG image, favicon` | P2 | #12 (final section order) | 2 | 4 |
| 14 | `chore: performance cleanup and unused code removal` | P2 | All previous issues | 8+ | 5 |
| 15 | `feat: add case study page /case-study/floor-infrastructure` | P3 | #1 (design system) | 3 | 5 |

---

## ISSUE SPECS

---

### Issue 1: `chore: update color palette and typography system`

**Labels:** `task`, `p0-critical`

## Context
Plan: `_planning/IMPLEMENTATION_PLAN.md` Phase 1
Source: S2 (Color Palette + Typography sections), R2 (Section 2.2)
Existing code: `src/index.css` defines the full theme. `src/layouts/Layout.astro` loads Google Fonts.

## What to Build
Update the CSS custom properties and font loading to match the brand design spec.

**Color changes in `src/index.css`:**
- `--color-stardust-a40` (site background): `#F5F5FF` → `#FAFAF8` (warm off-white)
- `--color-stardust-a0` (primary text): `#0A0A0A` → `#1A1A1A` (near-black)
- Add `--color-accent: #1A3A5C` (deep navy — for headlines, links, CTA)
- Update `--color-midnight` from `#1A1A40` to alias or replace with accent navy
- Update all `:root` CSS variable assignments that reference the changed tokens

**Typography changes in `Layout.astro` + `src/index.css`:**
- Replace Google Fonts `<link>` in `Layout.astro`: remove Oxanium, Saira. Add a serif font (Playfair Display as default choice — swap for Editorial New or Freight Display if licenses are available).
- Keep Inter (body) and Chakra Petch (logo wordmark only).
- In `src/index.css`: update `h1-h6` selectors to use the serif family instead of Saira/Oxanium.
- Remove unused utility classes: `.font-oxanium`, `.font-saira`, `.font-quantico`, `.font-electrolize`, `.font-vt323`, `.font-monomaniac-one`, `.font-anta`. Keep `.font-brand` and `.font-chakra` for the logo.

### Integration:
- Every section component inherits colors/typography from CSS custom properties — no component changes needed.
- The `section--dark` override class in `src/index.css` still works (Cuban Video section will use it).

## Read Before Implementing
1. `src/index.css` — current color tokens, `:root` and `.dark` blocks, font utility classes, `h1-h6` selectors
2. `src/layouts/Layout.astro` — Google Fonts `<link>` tag, which fonts are loaded
3. `_planning/strategy/02-brand-voice-design.md` — "Color Palette" and "Typography" sections for exact specs
4. `src/sections/Hero.tsx` — uses `bg-stardust-a40`, `text-stardust-a0` classes directly — verify these still resolve correctly after token changes
5. `src/sections/Footer.tsx` — uses `bg-stardust-a0`, `text-stardust-a40` — verify dark footer still works

## Scope

**In scope:**
- CSS custom property value changes
- Google Fonts link update
- Font family assignments for headings and body
- Removal of unused font utility classes

**Out of scope:**
- Component copy changes (separate issues)
- Adding new sections (separate issues)
- Design system documentation

## Files
- MODIFY `src/index.css` (update color tokens, font families, remove unused utility classes)
- MODIFY `src/layouts/Layout.astro` (update Google Fonts `<link>` tag)

## Depends On
- Nothing — this is foundational. Used by all subsequent issues.

## Acceptance Criteria
- [ ] Background renders as warm off-white `#FAFAF8`
- [ ] Primary text renders as `#1A1A1A`
- [ ] `--color-accent` CSS variable exists with value `#1A3A5C`
- [ ] All headings (h1-h6) use serif font family
- [ ] Body text uses Inter
- [ ] "aiscend" wordmark in header/footer still uses Chakra Petch
- [ ] No unused font families loaded in `<link>` tag (no Oxanium, no Saira)
- [ ] No unused `.font-*` utility classes in CSS
- [ ] `bun run build` completes with zero errors

---

### Issue 2: `chore: remove Prism branding references`

**Labels:** `task`, `p0-critical`

## Context
Plan: `_planning/IMPLEMENTATION_PLAN.md` Phase 1
Company name changed from "Prism" / "Prism AI Solutions" to "Aiscend". Several files still have old branding.

## What to Build
Find and replace all "Prism", "prism-ai", and "prismtech" references across the codebase.

**Known locations:**
- `package.json`: `"name": "prism-ai"` → `"aiscend"`
- `src/sections/Footer.tsx`: `info@prismtech.ai` → Aiscend email (use `info@aiscend.ai` as placeholder until confirmed)
- `src/sections/Contact.tsx`: `calLink="prismtech/30min"` → keep as placeholder, add a `// TODO: update to Aiscend Cal.com link` comment
- `src/sections/Contact.tsx`: `cal-brand: '#1A1A40'` → update to `#1A3A5C` (new accent)

Run a codebase-wide grep for `[Pp]rism` and `prismtech` to catch any other references in copy, comments, or config.

### Integration:
- No functional changes — branding only.
- Cal.com embed will continue to work with old link until updated.

## Read Before Implementing
1. `package.json` — name field
2. `src/sections/Footer.tsx` — email address in `<a href="mailto:...">`
3. `src/sections/Contact.tsx` — Cal.com calLink prop, CSS vars config
4. `src/layouts/Layout.astro` — check title, description for any Prism references

## Scope

**In scope:**
- All "Prism" / "prismtech" text replacements
- Cal.com brand color update

**Out of scope:**
- Favicon replacement (Issue 13)
- Full copy rewrites (separate issues)

## Files
- MODIFY `package.json` (name field)
- MODIFY `src/sections/Footer.tsx` (email address)
- MODIFY `src/sections/Contact.tsx` (calLink, cal-brand color)
- MODIFY any other files found via grep

## Depends On
- Nothing — independent.

## Acceptance Criteria
- [ ] `grep -ri "prism" src/` returns zero results (excluding node_modules)
- [ ] `package.json` name is `"aiscend"`
- [ ] Footer email is `info@aiscend.ai` (or confirmed address)
- [ ] Cal.com brand color is `#1A3A5C`
- [ ] `bun run build` completes with zero errors

---

### Issue 3: `refactor: simplify header to logo + CTA`

**Labels:** `task`, `p0-critical`

## Context
Plan: `_planning/IMPLEMENTATION_PLAN.md` Phase 1
Source: S2 ("No hamburger menu. Header: logo + 'Talk to Us' CTA only"), R2 (Section 3.2, 6.4)
Current header has a full NavigationMenu with dropdown, mobile hamburger, and multiple nav links. For a single-page scroll site with the target ICP, this is over-engineered.

## What to Build
Strip `src/components/Header.tsx` down to two elements:
- **Left:** "aiscend" logo text button (scrolls to `#hero`)
- **Right:** "Talk to Us" button (scrolls to `#contact`)

Remove all NavigationMenu components, dropdown logic, `solutionsLeft`/`solutionsRight` arrays, mobile hamburger state, and the collapsible mobile nav.

After removing NavigationMenu usage, check if `@radix-ui/react-navigation-menu` is imported anywhere else. If not, remove it from `package.json` and delete `src/components/ui/navigation-menu.tsx`.

### Integration:
- Header is imported in `src/pages/index.astro` — no change needed there.
- `scrollToSection` from `src/lib/scroll.ts` is still used for the CTA.

## Read Before Implementing
1. `src/components/Header.tsx` — full current implementation, all imports
2. `src/components/ui/navigation-menu.tsx` — check if any other file imports from it
3. `_planning/strategy/02-brand-voice-design.md` — "Header: logo + 'Talk to Us' CTA only" directive
4. `src/pages/index.astro` — how Header is mounted (just verify, don't change)

## Scope

**In scope:**
- Header component rewrite
- Removal of navigation-menu dependency if unused elsewhere
- Deletion of `src/components/ui/navigation-menu.tsx` if orphaned

**Out of scope:**
- Header styling changes beyond what's needed for the simplification (colors handled by Issue 1)
- Footer nav updates (Issue 11)

## Files
- MODIFY `src/components/Header.tsx` (strip to logo + CTA)
- DELETE `src/components/ui/navigation-menu.tsx` (if no other consumers)
- MODIFY `package.json` (remove `@radix-ui/react-navigation-menu` if orphaned)

## Depends On
- #1 (needs updated color tokens for CTA button styling)

## Acceptance Criteria
- [ ] Header renders only "aiscend" logo (left) and "Talk to Us" button (right)
- [ ] No dropdown menus, no hamburger icon, no collapsible nav
- [ ] Logo click scrolls to `#hero`
- [ ] "Talk to Us" click scrolls to `#contact`
- [ ] Header is sticky with backdrop blur (existing behavior preserved)
- [ ] Mobile: same two-element layout, no collapsed menu
- [ ] `@radix-ui/react-navigation-menu` removed from deps if orphaned
- [ ] `bun run build` completes with zero errors

---

### Issue 4: `feat: rewrite hero section copy and layout`

**Labels:** `enhancement`, `p1-high`

## Context
Plan: `_planning/IMPLEMENTATION_PLAN.md` Phase 2
Source: C1 (Hero section), S2 (hero animation rules), R2 (Section 4.1), S1 (ICP language table)
Current hero has generic copy ("Business Has Changed"), a typewriter effect, and staggered entrance animations. Planning docs say: "No animation on hero. Text immediately visible and readable."

## What to Build
Update `src/sections/Hero.tsx`:

**Copy replacements:**
- H1: "Business Has Changed" → **"Your best people can't explain what they know."**
- Subhead: generic AI partner text → **"We sit with your experts, map how they actually think, and build AI systems around their real workflows. No reports. Working software."**
- Primary CTA: "Connect" → **"Talk to Us"** (scrolls to `#contact`)
- Secondary CTA: "Learn More" → Remove entirely, or change to **"See Our Work"** (scrolls to `#proof`)
- Badge: Keep or remove — planning docs don't specify one. If kept, update text.

**Layout changes:**
- Remove the `Typewriter` component and its three rotating messages from the right side.
- Keep the `aiscend_dot.json` Lottie as a subtle ambient background element (it doesn't block readability).
- Remove framer-motion staggered entrance animations on the text content. Make H1, subhead, and CTA visible immediately on page load. The Lottie can still fade in.
- Remove `containerVariants`, `itemVariants` wrappers from text elements, or set their initial state to visible.

### Integration:
- Typewriter component (`src/components/ui/typewriter-text.tsx`) may become orphaned — check if anything else imports it. If not, delete it.
- `scrollToSection` still used for CTAs.

## Read Before Implementing
1. `src/sections/Hero.tsx` — full current implementation, animation variants, Typewriter usage
2. `_planning/copy/01-site-copy.md` — "HERO" section for exact copy
3. `_planning/strategy/02-brand-voice-design.md` — "No animation on hero" directive
4. `src/components/ui/typewriter-text.tsx` — check for other consumers before deleting

## Scope

**In scope:**
- All copy in Hero.tsx
- Removal of typewriter
- Removal of entrance animation delay on text
- Cleanup of orphaned typewriter component

**Out of scope:**
- Right-side visual replacement with photography (future enhancement)
- Hero badge redesign

## Files
- MODIFY `src/sections/Hero.tsx` (copy, layout, animation changes)
- DELETE `src/components/ui/typewriter-text.tsx` (if orphaned)

## Depends On
- #1 (typography and color system must be in place)

## Acceptance Criteria
- [ ] H1 reads "Your best people can't explain what they know."
- [ ] Subhead matches C1 copy verbatim
- [ ] Primary CTA says "Talk to Us" and scrolls to `#contact`
- [ ] No typewriter effect visible
- [ ] Text is visible immediately on page load — no entrance animation delay
- [ ] Lottie background animation still renders
- [ ] Passes the test: "could this appear on any other AI consulting site?" — NO
- [ ] `bun run build` completes with zero errors

---

### Issue 5: `feat: add Problem section`

**Labels:** `enhancement`, `p1-high`

## Context
Plan: `_planning/IMPLEMENTATION_PLAN.md` Phase 2
Source: C1 (Problem Section), S1 (language mapping table), R2 (Section 4.2), C2 (Aiscend thesis)
This section doesn't exist yet. It sits between Hero and What We Do. Makes the pain vivid through concrete scenarios, not abstract language.

## What to Build
`src/sections/Problem.tsx` — a new React section component.

**Header:** "The knowledge that runs your business isn't in your systems."

**Body** (three paragraphs, verbatim from C1):
1. "Your best employee reviews every design because she's the only person with 20 years of context. Your estimator prices jobs from gut feel trained over decades of wins and losses. Your retiring project manager carries institutional memory that no handbook has ever captured."
2. "This knowledge is the most valuable thing in your company. And right now it's walking out the door every evening, hoping to come back tomorrow."
3. "You've heard you need AI. Everyone's heard that. The problem is that nobody asking 'how can we use AI?' is asking the right question. The right question is: what does your best person know that nobody else knows, and how do we make that knowledge available to everyone?"

**Design:**
- Light background (`bg-stardust-a40` or equivalent — same as main site)
- Text-forward, generous white space, `max-w-3xl` or similar centered container
- The final question ("The right question is...") should be visually emphasized — slightly larger text, or a pull-quote treatment
- Use existing `staggerContainer` / `staggerItem` variants from `src/lib/animations.ts` for scroll-triggered entrance
- Section ID: `problem`

### Integration:
- Import in `src/pages/index.astro` between Hero and Solutions (Solutions becomes What We Do in Issue 7)
- Use `client:visible` for lazy hydration

## Read Before Implementing
1. `_planning/copy/01-site-copy.md` — "PROBLEM SECTION" for verbatim copy
2. `_planning/copy/02-aiscend-thesis.md` — Aiscend's core thesis, informs the tone
3. `src/lib/animations.ts` — existing animation variants to reuse
4. `src/sections/Hero.tsx` — pattern for section structure, className conventions
5. `src/pages/index.astro` — where to add the import and component

## Scope

**In scope:**
- New Problem.tsx component
- Integration into index.astro

**Out of scope:**
- Updating section order beyond inserting Problem (Issue 12 handles full reorder)

## Files
- CREATE `src/sections/Problem.tsx`
- MODIFY `src/pages/index.astro` (add Problem import and component between Hero and Solutions)

## Depends On
- #1 (typography and color system)

## Acceptance Criteria
- [ ] Section renders between Hero and the next section
- [ ] Section ID is `problem` (for scroll targeting)
- [ ] All three paragraphs from C1 present verbatim
- [ ] Final question is visually emphasized (pull-quote or larger text)
- [ ] No banned words from S2 banned list
- [ ] Scroll-triggered animation present
- [ ] Animations respect `prefers-reduced-motion`
- [ ] `bun run build` completes with zero errors

---

### Issue 6: `feat: implement Cuban Video section`

**Labels:** `enhancement`, `p1-high`

## Context
Plan: `_planning/IMPLEMENTATION_PLAN.md` Phase 2
Source: R1 (full video spec), C1 (Cuban section copy), R2 (Section 3.3 + 4.4)
Current `src/sections/Impact.tsx` has a basic video placeholder with a `YOUTUBE_VIDEO_ID` constant. This needs to become the full Cuban Video section with proper copy, dark cinema-mode design, and dual-source video (self-hosted preferred, YouTube fallback).

## What to Build
Rename and rewrite `src/sections/Impact.tsx` → `src/sections/CubanVideo.tsx`.

**Section header** (large serif): `"There are 33 million companies in this country. They all need this."`

**Framing copy** (from C1): `"Mark Cuban on TBPN, August 2025. He describes the exact opportunity Aiscend has been executing on for two and a half years: young, technical teams walking into established businesses and translating AI capabilities into operational value. Companies don't need to understand AI. They need someone who understands their business and can build around it."`

**Video implementation** — check for self-hosted files first, fall back to YouTube:

```tsx
// Self-hosted paths (preferred)
const SELF_HOSTED_MP4 = "/video/cuban_clip.mp4";
const SELF_HOSTED_WEBM = "/video/cuban_clip.webm";
const POSTER = "/video/cuban_poster.jpg";

// YouTube fallback
const YT_VIDEO_ID = "FWDWFBcO3fs";
const YT_START = 975; // 16:15
const YT_END = 1095;  // 18:15
```

Use a `<video>` element when self-hosted files exist, YouTube iframe otherwise. For the initial implementation, default to YouTube embed since Spencer hasn't cut the clip yet. Make it trivial to switch by changing a constant.

**Design (from R1):**
- Dark background section — the only dark section on the site. Use `bg-stardust-a0` (dark) or similar.
- Full-width or near-full-width video container, `max-w-4xl` centered
- No autoplay. Poster image visible before play (if self-hosted).
- 16:9 aspect ratio maintained on all viewports
- Attribution below player: "Mark Cuban on [TBPN](https://www.youtube.com/watch?v=FWDWFBcO3fs), August 2025"
- Section ID: `cuban-video`

### Integration:
- Update import in `src/pages/index.astro` from `Impact` to `CubanVideo`
- Footer nav currently has "Impact" as a nav target — will be updated in Issue 11

## Read Before Implementing
1. `src/sections/Impact.tsx` — current implementation to replace
2. `_planning/reference/01-cuban-video-integration.md` — full video spec, embed code, self-host instructions, design notes
3. `_planning/copy/01-site-copy.md` — "CUBAN VIDEO SECTION" for exact copy
4. `src/lib/animations.ts` — reuse stagger variants
5. `src/index.css` — `.section--dark` class for dark section heading overrides

## Scope

**In scope:**
- Full CubanVideo section component
- YouTube embed (default for now)
- Self-hosted video support (ready to enable)
- Dark section styling
- Integration into index.astro

**Out of scope:**
- Actually downloading/cutting the Cuban clip (Spencer does this)
- Custom video player UI beyond native controls
- Footer nav label update (Issue 11)

## Files
- DELETE `src/sections/Impact.tsx`
- CREATE `src/sections/CubanVideo.tsx`
- MODIFY `src/pages/index.astro` (update import from Impact to CubanVideo)

## Depends On
- #1 (color tokens for dark section)

## Acceptance Criteria
- [ ] Section has dark background, visually distinct from rest of site
- [ ] Pull-quote header in large serif type
- [ ] Framing paragraph matches C1 copy
- [ ] YouTube embed plays correctly with `?start=975&end=1095&rel=0&modestbranding=1`
- [ ] Self-hosted video ready to enable by changing a constant
- [ ] No autoplay
- [ ] 16:9 aspect ratio on all viewports
- [ ] Attribution link present: "Mark Cuban on TBPN, August 2025" linking to full episode
- [ ] Section ID is `cuban-video`
- [ ] `bun run build` completes with zero errors

---

### Issue 7: `feat: rework Solutions into What We Do section`

**Labels:** `enhancement`, `p1-high`

## Context
Plan: `_planning/IMPLEMENTATION_PLAN.md` Phase 3
Source: C1 (What We Do section — 4 offerings), C2 (Aiscend thesis), R2 (Section 4.3)
Current `src/sections/Solutions.tsx` has a 5-option interactive accordion with Lottie animations. The planning docs (S2, S3, R2, C1) consistently push toward editorial narrative over interactive widgets. The ICP is a 55-year-old business owner — they read, they don't click accordions.

## What to Build
Rewrite `src/sections/Solutions.tsx` to an editorial layout with 4 narrative blocks from C1.

**Section header:** "We capture what your experts know and build systems around it."

**Four blocks, each with a heading and 1-2 paragraphs:**

1. **Discovery** — forensic interviewing, recording devices, "Katie's gut" story (4 hours mapping 20 years of supply chain pattern recognition). The most compelling content on the site.
2. **Knowledge Systems** — RAG systems indexing accumulated history. "How did we handle this in 2019?" answered in seconds.
3. **Quality Pre-Flight** — AI QC catching repetitive errors. 11 review cycles → building to cut in half.
4. **Knowledge Capture** — Wearable recording in the real workflow. Retiring expert's 30 years → searchable dataset.

All copy verbatim from C1 "WHAT WE DO" section.

**Layout:** Stacked blocks, generous spacing, each block clearly delineated. No accordion, no tabs, no interactive selection. Each block can have a subtle "Get started" link that scrolls to contact.

**Section ID:** `solutions` (keep existing ID for backward compatibility with any bookmarks/links)

### Integration:
- This replaces the existing Solutions section in the same position.
- Lottie animations (`blocks_1-5.json`) are no longer used in this section. They remain in `/public/lottie/` in case they're wanted elsewhere later.

## Read Before Implementing
1. `src/sections/Solutions.tsx` — current implementation to understand what's being replaced
2. `_planning/copy/01-site-copy.md` — "WHAT WE DO" section for verbatim copy (all 4 blocks)
3. `_planning/copy/02-aiscend-thesis.md` — thesis context for tone
4. `src/lib/animations.ts` — reuse stagger variants for scroll entrance
5. `src/lib/scroll.ts` — `scrollToSection` for "Get started" links

## Scope

**In scope:**
- Full rewrite of Solutions.tsx content and layout
- All 4 offering blocks with complete copy from C1

**Out of scope:**
- Deleting Lottie files from `/public/lottie/` (may be used elsewhere)
- Adding illustrations or images (future enhancement)
- The Proof/Case Studies section (Issue 8 — separate)

## Files
- MODIFY `src/sections/Solutions.tsx` (full content and layout rewrite)

## Depends On
- #1 (typography and colors)
- #5 (Problem section exists above — validates the narrative flow)

## Acceptance Criteria
- [ ] Section header reads "We capture what your experts know and build systems around it."
- [ ] All 4 blocks present with complete copy from C1
- [ ] "Katie's gut" story is in the Discovery block
- [ ] "11 review cycles" detail is in the Quality Pre-Flight block
- [ ] No accordion, tabs, or interactive selection UI
- [ ] Each block has a "Get started" link scrolling to `#contact`
- [ ] No banned words from S2 banned list
- [ ] `bun run build` completes with zero errors

---

### Issue 8: `feat: add Proof / Case Studies section`

**Labels:** `enhancement`, `p1-high`

## Context
Plan: `_planning/IMPLEMENTATION_PLAN.md` Phase 3
Source: C3 (full spec — 8 profiles, NDA rules, layout guidance), C1 (Proof header), R2 (Section 4.5)
This section doesn't exist yet. It showcases real client work with proper NDA compliance.

## What to Build
`src/sections/Proof.tsx` — a new React section component.

**Section header:** "What we've built."
**Section intro:** "We work with established companies across industries. The common thread: valuable knowledge trapped in the wrong places, and senior people stretched too thin. Here's what that looks like in practice."

**Layout (per C3 implementation notes):**

**Featured (full detail) — Floor Infrastructure (anonymized):**
- Full-width card or section
- The Problem → What We Did → What We're Building (3 systems: QC Pre-Flight, Institutional Knowledge Base, Expert Decision Capture)
- "Multi-system engagement with ongoing maintenance."
- **NDA: Do NOT name the company. "A 30-year floor infrastructure company" is the identifier. CAN mention Disney, Apple, Google as their clients. Do NOT describe the specific product/technology.**

**Supporting (medium detail) — 2 cards:**
1. **Operation Health & Wellness** (named) — Bay Area medical startup, Stanford researcher, AI-native app dev
2. **Luxury Fashion** (anonymized) — $1M profit/employee, gut-feel forecasting, supply chain prediction
   - **NDA: Don't name company, employee, or founder. Don't specify fashion category.**

**Logo-tier (brief, ~1-2 lines each):**
1. **Biogen** (named) — data science, biotech
2. **Cybersecurity** (anonymized) — data science/analytics

**Section closer:** "The pattern is always the same. An established company. Decades of expertise locked in a few people's heads. Systems that don't talk to each other. A senior person who's become the bottleneck because they're the only one who knows enough. We find the knowledge, capture it, and build systems around it. The industry changes every time. The approach doesn't."

**Section ID:** `proof`

### Integration:
- Import in `src/pages/index.astro` — final position set in Issue 12
- For now, add after Solutions/WhatWeDo

## Read Before Implementing
1. `_planning/copy/03-solutions-copy.md` — complete copy for all profiles, NDA rules table, layout guidance, section closer
2. `_planning/copy/01-site-copy.md` — "PROOF / CASE STUDY" section for the header
3. `src/lib/animations.ts` — stagger variants
4. `src/sections/Solutions.tsx` — pattern for card/section layout in this codebase

## Scope

**In scope:**
- Full Proof section with 5 profiles (1 featured, 2 supporting, 2 logo-tier)
- Section closer
- NDA compliance for all anonymized profiles

**Out of scope:**
- Remaining profiles (Real Estate, Defense, Pharmacy) — future `/work` page
- Full case study detail page (Issue 15)
- Client logos or images

## Files
- CREATE `src/sections/Proof.tsx`
- MODIFY `src/pages/index.astro` (add Proof import and component)

## Depends On
- #1 (typography and colors)

## Acceptance Criteria
- [ ] Featured Floor Infrastructure profile has full detail from C3 (Problem → What We Did → What We're Building)
- [ ] Floor Infrastructure company is NOT named — only described as "A 30-year floor infrastructure company"
- [ ] OHW profile present with name and correct details
- [ ] Luxury Fashion profile present, anonymized per NDA rules
- [ ] Biogen and Cybersecurity present as brief mentions
- [ ] Section closer paragraph present
- [ ] Zero NDA violations per C3 NDA table
- [ ] Section ID is `proof`
- [ ] `bun run build` completes with zero errors

---

### Issue 9: `feat: add Team section`

**Labels:** `enhancement`, `p2-medium`

## Context
Plan: `_planning/IMPLEMENTATION_PLAN.md` Phase 3
Source: C1 (Team section), R2 (Section 4.6)

## What to Build
`src/sections/Team.tsx` — a new React section component.

**Header:** "Who we are."

**Three bios (verbatim from C1):**
- **Spencer Karns** — Co-founder. Runs discovery, client relationships, and systems architecture. Started by upskilling C-suites on AI, realized the real value was in building the systems, not explaining them. Has mapped workflows for companies from $5M to $400M+ in revenue across engineering, medical, real estate, and defense.
- **Connor Raney** — Co-founder & Technical Lead. Machine learning, system design, and the infrastructure that makes autonomous agent workflows actually run. Builds the backends that turn discovery insights into working software.
- **Arman Ozsu** — ML & Development. Data science, predictive analytics, and automation. Brings the quantitative rigor that turns messy enterprise data into structured, trainable systems.

**Design:** Simple 3-column grid on desktop, stacked on mobile. Text-only bios (no photos until confirmed available — S2 says "photography over illustration" but also bans stock photos). No placeholder avatars.

**Section ID:** `team`

### Integration:
- Import in `src/pages/index.astro` — position set in Issue 12

## Read Before Implementing
1. `_planning/copy/01-site-copy.md` — "TEAM" section for verbatim copy
2. `src/lib/animations.ts` — stagger variants for entrance animation
3. `src/sections/Proof.tsx` — by this point it exists and shows the component pattern

## Scope

**In scope:**
- Team section component with 3 bios
- Responsive grid layout

**Out of scope:**
- Team photos (add when available)
- Bio expansions or additional team members

## Files
- CREATE `src/sections/Team.tsx`
- MODIFY `src/pages/index.astro` (add Team import and component)

## Depends On
- #1 (typography and colors)

## Acceptance Criteria
- [ ] Three bios present with exact copy from C1
- [ ] No filler language ("passionate about", "dedicated to")
- [ ] Text-only layout (no placeholder images)
- [ ] Responsive: 3-column desktop, stacked mobile
- [ ] Section ID is `team`
- [ ] `bun run build` completes with zero errors

---

### Issue 10: `feat: update Contact section copy`

**Labels:** `enhancement`, `p2-medium`

## Context
Plan: `_planning/IMPLEMENTATION_PLAN.md` Phase 4
Source: C1 (Contact section), R2 (Section 4.7)

## What to Build
Update copy in `src/sections/Contact.tsx`:

- Badge: "Get In Touch" → remove or keep (planning docs don't specify)
- H2: "Let's Scale Together" → **"Let's see if there's something worth building."**
- Subhead: "Let's discuss how Aiscend can elevate your business." → **"No pitch deck. No 47-slide proposal. We'll talk about what's actually going on in your business and figure out if we can help. If we can't, or if it's not worth your time and money, we'll tell you."**
- Keep Cal.com embed, Lottie background

## Read Before Implementing
1. `src/sections/Contact.tsx` — current implementation
2. `_planning/copy/01-site-copy.md` — "CONTACT" section for exact copy

## Scope

**In scope:**
- Copy changes only

**Out of scope:**
- Cal.com link change (done in Issue 2)
- Lottie background changes

## Files
- MODIFY `src/sections/Contact.tsx` (headline, subhead text)

## Depends On
- #1 (colors), #2 (branding — Cal brand color already updated)

## Acceptance Criteria
- [ ] Headline reads "Let's see if there's something worth building."
- [ ] Body text matches C1 verbatim
- [ ] Cal.com embed still functions
- [ ] `bun run build` completes with zero errors

---

### Issue 11: `feat: update Footer and wire new section IDs`

**Labels:** `enhancement`, `p2-medium`

## Context
Plan: `_planning/IMPLEMENTATION_PLAN.md` Phase 4
Source: S2 (page structure)

## What to Build
Update `src/sections/Footer.tsx`:
- Nav labels to match new section IDs: "Impact" → "Video" or remove, add "Our Work" for `#proof`, add "Team" for `#team`
- Social links: update to real Aiscend accounts if known, otherwise keep placeholders with `// TODO` comments
- Email already updated in Issue 2

## Read Before Implementing
1. `src/sections/Footer.tsx` — current nav array and social links
2. `src/pages/index.astro` — verify which section IDs exist after Issues 5-9

## Scope

**In scope:**
- Nav label and section ID updates
- Social link updates

**Out of scope:**
- Footer layout/design changes
- Wordmark changes (already says "aiscend")

## Files
- MODIFY `src/sections/Footer.tsx` (NAV array, SOCIAL array)

## Depends On
- #2 (branding), #6 (Cuban Video section ID), #8 (Proof section ID), #9 (Team section ID)

## Acceptance Criteria
- [ ] All nav links scroll to existing section IDs
- [ ] No dead nav links
- [ ] Social links updated or marked with TODO
- [ ] `bun run build` completes with zero errors

---

### Issue 12: `feat: update page structure and section order`

**Labels:** `enhancement`, `p1-high`

## Context
Plan: `_planning/IMPLEMENTATION_PLAN.md` Phase 4
Source: S2 (Page Structure), R2 (Section 3.2)
After Issues 5-9 create all new sections, this issue sets the final order.

## What to Build
Update `src/pages/index.astro` to render sections in the correct order:

```
<Header />
<Hero />           — #hero
<Problem />        — #problem
<Solutions />      — #solutions (What We Do)
<CubanVideo />     — #cuban-video
<Proof />          — #proof
<Team />           — #team
<Contact />        — #contact
<Footer />
```

New sections use `client:visible` for lazy hydration. Verify all scroll targets work.

## Read Before Implementing
1. `src/pages/index.astro` — current section order and hydration directives
2. `_planning/strategy/02-brand-voice-design.md` — "Page Structure" section

## Scope

**In scope:**
- Section order in index.astro
- Hydration directives

**Out of scope:**
- Any section content changes

## Files
- MODIFY `src/pages/index.astro` (section order)

## Depends On
- #5 (Problem exists), #6 (CubanVideo exists), #7 (Solutions rewritten), #8 (Proof exists), #9 (Team exists)

## Acceptance Criteria
- [ ] Sections render in the order specified above
- [ ] All section IDs match between components and nav links
- [ ] Smooth scroll works for all targets
- [ ] New sections use `client:visible`
- [ ] `bun run build` completes with zero errors

---

### Issue 13: `chore: SEO meta tags, OG image, favicon`

**Labels:** `task`, `p2-medium`

## Context
Plan: `_planning/IMPLEMENTATION_PLAN.md` Phase 4
Source: C1 (SEO/Meta section), R2 (Section 6.5)

## What to Build
Update `src/layouts/Layout.astro`:
- **Title:** "Aiscend Labs — Custom AI Systems for Established Businesses"
- **Meta description:** "We capture your experts' institutional knowledge and build AI systems around your real workflows. Discovery, implementation, working software."
- Add `<meta property="og:image">`, `og:title`, `og:description`, `og:type="website"`
- Replace favicon `vite.svg` with Aiscend mark (if available) or a simple text-based SVG
- Add LocalBusiness structured data (JSON-LD) per R2 Section 6.5
- Create `/public/og-image.png` — clean text-based card with headline on `#FAFAF8` background

## Read Before Implementing
1. `src/layouts/Layout.astro` — current meta tags and favicon link
2. `_planning/copy/01-site-copy.md` — "SEO / META" section

## Scope

**In scope:**
- Meta tags, OG tags, favicon, structured data, OG image

**Out of scope:**
- Canonical URL (needs domain confirmation)
- Sitemap generation

## Files
- MODIFY `src/layouts/Layout.astro` (meta tags, favicon, JSON-LD)
- CREATE `public/og-image.png` (or `.svg`)

## Depends On
- #12 (final section order confirms the page structure for structured data)

## Acceptance Criteria
- [ ] Title tag matches C1 spec
- [ ] Meta description matches C1 spec
- [ ] OG tags present (image, title, description, type)
- [ ] Favicon is not `vite.svg`
- [ ] LocalBusiness JSON-LD validates in Google's Rich Results Test
- [ ] `bun run build` completes with zero errors

---

### Issue 14: `chore: performance cleanup and unused code removal`

**Labels:** `task`, `p2-medium`

## Context
Plan: `_planning/IMPLEMENTATION_PLAN.md` Phase 5
Source: S2 (Performance Targets), R2 (Section 6.2)
This is the cleanup pass after all content work is done.

## What to Build
**Remove unused components:**
- `src/components/AIAdoptionChart.tsx`
- `src/components/feature69.tsx`
- `src/components/hero256.tsx`
- `src/components/ui/demo.tsx`
- `src/components/ui/chart.tsx`
- `src/sections/Hero.original.tsx`
- `src/sections/Solutions.original.tsx`
- `src/sections/Footer.original.tsx`

**Remove unused dependencies from `package.json`:**
- `recharts` (if chart component deleted)
- `embla-carousel-react` (check if carousel is used anywhere)
- `@radix-ui/react-navigation-menu` (if not already removed in Issue 3)

**Performance checks:**
- Verify all animations respect `prefers-reduced-motion` — add `@media (prefers-reduced-motion: reduce)` handling
- Audit Lottie file sizes in `/public/lottie/`
- Font subsetting: only load weights actually used
- Run Lighthouse and fix any issues below 95

## Read Before Implementing
1. `package.json` — current dependencies
2. `src/components/` — scan for unused files
3. `src/sections/` — scan for `.original.tsx` files
4. `_planning/strategy/02-brand-voice-design.md` — performance targets

## Scope

**In scope:**
- Deleting unused files
- Removing unused dependencies
- Performance optimization
- `prefers-reduced-motion` compliance

**Out of scope:**
- Content or design changes
- New features

## Files
- DELETE `src/components/AIAdoptionChart.tsx`
- DELETE `src/components/feature69.tsx`
- DELETE `src/components/hero256.tsx`
- DELETE `src/components/ui/demo.tsx`
- DELETE `src/components/ui/chart.tsx` (verify no consumers first)
- DELETE `src/sections/Hero.original.tsx`
- DELETE `src/sections/Solutions.original.tsx`
- DELETE `src/sections/Footer.original.tsx`
- MODIFY `package.json` (remove unused deps)
- MODIFY `src/lib/animations.ts` (add reduced-motion handling if missing)

## Depends On
- All previous issues (this is the final cleanup)

## Acceptance Criteria
- [ ] Zero unused component files in `src/components/` and `src/sections/`
- [ ] Zero unused dependencies in `package.json`
- [ ] `prefers-reduced-motion` disables or reduces all animations
- [ ] Lighthouse performance score 95+
- [ ] `bun run build` completes with zero errors
- [ ] `bun run lint` passes

---

### Issue 15: `feat: add case study page /case-study/floor-infrastructure`

**Labels:** `enhancement`, `p3-low`

## Context
Plan: `_planning/IMPLEMENTATION_PLAN.md` Phase 5
Source: S2 (mentions separate case study page), C3 (Floor Infrastructure profile), R2 (Section 4.5)
This is a standalone page with the full FreeAxez case study. Can ship independently of the main page.

## What to Build
`src/pages/case-study/floor-infrastructure.astro` — a new Astro page.

Full case study walkthrough using C3's Floor Infrastructure profile expanded to page length:
- Client background (30 years, Disney/Apple/Google clients)
- The problem (COO bottleneck, 11 QC cycles, knowledge in 2 heads, junior employees making preventable mistakes)
- Discovery process (on-site shadowing, recording devices, hours of probing conversation)
- What was built (QC Pre-Flight, Institutional Knowledge Base, Expert Decision Capture)
- Impact summary
- Link back to main page

**Design:**
- Uses same Layout.astro wrapper
- Simplified header with back-to-home link
- Parallax at 0.3x on background elements (per S2)
- Editorial long-form layout

**NDA compliance:** URL says "floor-infrastructure" not the company name. Rendered content never names the company. No company name in meta tags, alt text, or HTML comments.

## Read Before Implementing
1. `_planning/copy/03-solutions-copy.md` — "SOLUTION PROFILE: FLOOR INFRASTRUCTURE" for complete copy
2. `src/layouts/Layout.astro` — page wrapper to reuse
3. `src/sections/Proof.tsx` — summary version to ensure consistency
4. `_planning/strategy/02-brand-voice-design.md` — parallax spec (0.3x)

## Scope

**In scope:**
- Full case study page
- NDA-compliant content
- Back-to-home navigation

**Out of scope:**
- Other case study pages
- CMS integration

## Files
- CREATE `src/pages/case-study/floor-infrastructure.astro`
- CREATE `src/sections/case-study/FloorInfrastructureContent.tsx` (React island for the content)

## Depends On
- #1 (design system)

## Acceptance Criteria
- [ ] Page renders at `/case-study/floor-infrastructure`
- [ ] Full case study content from C3 present
- [ ] Company is NEVER named — zero occurrences in rendered HTML, meta tags, alt text, comments
- [ ] Back-to-home link works
- [ ] Parallax effect on background elements
- [ ] Design matches main site typography and colors
- [ ] `bun run build` completes with zero errors

---

## OPEN DECISIONS

| # | Question | Blocks | Default if no answer |
|---|----------|--------|---------------------|
| 1 | Serif font license (Editorial New / Freight Display) or Google Fonts? | Issue 1 | Playfair Display (free) |
| 2 | Correct Aiscend email address? | Issues 2, 11 | `info@aiscend.ai` placeholder |
| 3 | Correct Cal.com booking link? | Issues 2, 10 | Keep current, add TODO comment |
| 4 | Real team photos available? | Issue 9 | Text-only bios |
| 5 | Self-hosted Cuban clip ready? | Issue 6 | YouTube embed fallback |
| 6 | Solutions: editorial (A) or accordion (B)? | Issue 7 | A (editorial) per planning docs |
| 7 | Deploy domain? | Issue 13 | Omit canonical URL |
| 8 | Real social media links? | Issue 11 | Placeholder with TODO |

---

## IMPLEMENTATION PHASES

```
Phase 1 — Foundation (Issues 1, 2, 3)              ~3 hours
  Typography, colors, branding, header.
  No content changes. Visual foundation only.

Phase 2 — Core Content (Issues 4, 5, 6)            ~7 hours
  Hero copy, Problem section, Cuban Video.
  The site starts telling the right story.

Phase 3 — Full Story (Issues 7, 8, 9)              ~8 hours
  What We Do rework, Proof section, Team section.
  Complete narrative top to bottom.

Phase 4 — Integration & Polish (Issues 10-13)      ~4 hours
  Contact copy, Footer wiring, section order, SEO.
  Ship-ready.

Phase 5 — Cleanup & Expansion (Issues 14, 15)      ~7 hours
  Performance cleanup, case study page.
  Can ship independently.
```

**Total: ~29 hours of engineering across 15 issues, 15 Droid sessions.**
