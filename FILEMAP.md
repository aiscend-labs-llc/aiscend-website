# AISCEND WEBSITE — FILEMAP

> Agent-readable map of the entire codebase. Read this first.
> Last updated: March 2026

---

## Quick Reference

| What | Where |
|------|-------|
| Main page | `src/pages/index.astro` |
| Global styles + design tokens | `src/index.css` |
| HTML wrapper + fonts + meta | `src/layouts/Layout.astro` |
| Shared animation variants | `src/lib/animations.ts` |
| Smooth scroll utility | `src/lib/scroll.ts` |
| shadcn/ui config | `components.json` |
| Planning docs + implementation plan | `_planning/` |
| Lottie animation files | `public/lottie/` |

---

## Project Structure

```
aiscend-website/
├── .claude/commands/          # Claude/Droid command prompts
│   └── prime.md               # Session start orientation
│
├── _planning/                 # All planning, strategy, and issue docs
│   ├── IMPLEMENTATION_PLAN.md # Master plan — 15 issues, 5 phases
│   ├── copy/                  # Site copy (source of truth for all text)
│   │   ├── 01-site-copy.md   #   Section-by-section copy (Hero, Problem, etc.)
│   │   ├── 02-aiscend-thesis.md #   Core philosophy & discovery framing
│   │   └── 03-solutions-copy.md #   8 client profiles + NDA rules
│   ├── strategy/              # Brand, voice, ICP, design direction
│   │   ├── 01-icp-customer-context.md
│   │   ├── 02-brand-voice-design.md
│   │   └── 03-inspiration-analysis.md
│   ├── reference/             # Technical reference docs
│   │   ├── 01-cuban-video-integration.md
│   │   └── 02-full-build-brief.docx  # Canonical spec (supersedes conflicts)
│   ├── issue_creation/        # Issue workflow templates
│   │   ├── issue-creation.md  #   Issue creation guide (universal)
│   │   ├── EXECUTOR.md        #   Filled executor template (Aiscend-specific)
│   │   ├── AUDITOR.md         #   Filled auditor template (Aiscend-specific)
│   │   ├── issue-creation-atlas.md    #   Generic guide (reference only)
│   │   ├── auditor-template-generic.md #  Generic template (reference only)
│   │   └── executor-template-generic.md # Generic template (reference only)
│   └── archive/               # Superseded docs (kept for reference)
│       ├── COPY.md            #   Old copy (superseded by _planning/copy/)
│       ├── OUTLINE.md         #   Old outline (superseded by IMPLEMENTATION_PLAN.md)
│       └── TASK.md            #   Old task list (partially superseded)
│
├── public/                    # Static assets (served as-is)
│   ├── lottie/                # Lottie JSON animation files
│   │   ├── aiscend_dot.json   #   Hero background animation (ACTIVE)
│   │   ├── blocks_1.json      #   Solutions: AI Strategy (ACTIVE in current Solutions)
│   │   ├── blocks_2.json      #   Solutions: AI Enablement (ACTIVE)
│   │   ├── blocks_3.json      #   Solutions: Data Engineering (ACTIVE)
│   │   ├── blocks_4.json      #   Solutions: Custom Development (ACTIVE)
│   │   ├── blocks_5.json      #   Solutions: Agentic Automation (ACTIVE)
│   │   ├── floatingshapes.json #  Contact background (ACTIVE)
│   │   ├── green_cube.json    #   UNUSED
│   │   ├── greenish_wave.json #   UNUSED
│   │   ├── red_cube.json      #   UNUSED
│   │   └── yellow_cube.json   #   UNUSED
│   └── vite.svg               # Favicon placeholder (needs replacement)
│
├── src/
│   ├── pages/
│   │   └── index.astro        # Main page — imports Header + all sections
│   │
│   ├── layouts/
│   │   └── Layout.astro       # HTML shell: <head>, fonts, global CSS import
│   │
│   ├── sections/              # Page sections (React components)
│   │   ├── Hero.tsx           # ACTIVE — hero with Lottie + typewriter
│   │   ├── Impact.tsx         # ACTIVE — video placeholder (becomes Cuban Video)
│   │   ├── Solutions.tsx      # ACTIVE — 5-option accordion with Lottie
│   │   ├── Contact.tsx        # ACTIVE — Cal.com booking embed
│   │   ├── Footer.tsx         # ACTIVE — footer with nav + wordmark
│   │   ├── Hero.original.tsx      # ORPHANED backup
│   │   ├── Solutions.original.tsx # ORPHANED backup
│   │   └── Footer.original.tsx    # ORPHANED backup
│   │
│   ├── components/
│   │   ├── Header.tsx         # ACTIVE — sticky header (to be simplified)
│   │   ├── AIAdoptionChart.tsx    # ORPHANED — was in old Impact section
│   │   ├── feature69.tsx          # ORPHANED — shadcnblocks template, never used
│   │   ├── hero256.tsx            # ORPHANED — shadcnblocks template, never used
│   │   ├── footer30.tsx           # ORPHANED — shadcnblocks template, never used
│   │   ├── magicui/
│   │   │   └── dot-pattern.tsx    # ORPHANED — not imported anywhere
│   │   └── ui/                # shadcn/ui component library
│   │       ├── accordion.tsx  #   ACTIVE (used indirectly)
│   │       ├── avatar.tsx     #   UNUSED (no current consumer)
│   │       ├── badge.tsx      #   ACTIVE (Hero, Contact)
│   │       ├── button.tsx     #   ACTIVE (everywhere)
│   │       ├── card.tsx       #   ACTIVE (potential use)
│   │       ├── carousel.tsx   #   ORPHANED (only used by feature69)
│   │       ├── chart.tsx      #   ORPHANED (only used by AIAdoptionChart)
│   │       ├── demo.tsx       #   ORPHANED (typewriter demo)
│   │       ├── navigation-menu.tsx # ACTIVE (Header — to be removed in Issue 3)
│   │       ├── separator.tsx  #   UNUSED (no current consumer)
│   │       ├── tabs.tsx       #   UNUSED (no current consumer)
│   │       └── typewriter-text.tsx # ACTIVE (Hero — to be removed in Issue 4)
│   │
│   ├── lib/                   # Shared utilities
│   │   ├── animations.ts     # Framer Motion variants (fadeUp, stagger, etc.)
│   │   ├── scroll.ts         # scrollToSection() utility
│   │   ├── utils.ts          # cn() class merge utility (shadcn standard)
│   │   └── hero-feature-icons.ts  # ORPHANED — types for hero256
│   │
│   ├── types/
│   │   └── lottie-web.d.ts   # Type declarations for lottie-web
│   │
│   ├── index.css              # Global styles + design tokens + theme
│   └── env.d.ts               # Astro environment types
│
├── shadcnblocks/              # shadcnblocks PRO reference (not used by build)
│   ├── components.json        # shadcnblocks config (different from root components.json)
│   └── globals.css            # shadcnblocks reference CSS (not imported)
│
├── astro.config.mjs           # Astro config (React integration, @ alias)
├── components.json            # shadcn/ui config for this project
├── eslint.config.js           # ESLint config
├── package.json               # Dependencies and scripts (name still "prism-ai")
├── postcss.config.js          # PostCSS config (Tailwind)
├── tsconfig.json              # TypeScript config
└── FILEMAP.md                 # This file
```

---

## Active Section Flow (current)

```
index.astro
├── Header.tsx          → sticky, logo + nav + CTA
├── Hero.tsx            → #hero — headline, typewriter, Lottie dot
├── Impact.tsx          → #impact — video placeholder
├── Solutions.tsx       → #solutions — 5-option accordion + Lottie blocks
├── Contact.tsx         → #contact — Cal.com embed
└── Footer.tsx          → footer nav + "aiscend" wordmark
```

## Target Section Flow (per IMPLEMENTATION_PLAN.md)

```
index.astro
├── Header.tsx          → logo + "Talk to Us" CTA only
├── Hero.tsx            → #hero — new copy, no typewriter
├── Problem.tsx         → #problem — NEW
├── Solutions.tsx       → #solutions — editorial rewrite (What We Do)
├── CubanVideo.tsx      → #cuban-video — NEW (replaces Impact)
├── Proof.tsx           → #proof — NEW (case studies)
├── Team.tsx            → #team — NEW
├── Contact.tsx         → #contact — updated copy
└── Footer.tsx          → updated nav labels
```

---

## Dependencies (key packages)

| Package | Used By | Notes |
|---------|---------|-------|
| `astro` | Build system | Static-first framework |
| `@astrojs/react` | All .tsx components | React island integration |
| `react`, `react-dom` | All components | UI library |
| `framer-motion` / `motion` | Animations | Both installed (framer-motion is the main one) |
| `lottie-web` | Hero, Solutions, Contact | JSON animation player |
| `@calcom/embed-react` | Contact.tsx | Booking calendar embed |
| `lucide-react` | Icons throughout | Icon library |
| `class-variance-authority` | shadcn/ui | Component variant system |
| `@radix-ui/react-*` | shadcn/ui components | Accessible primitives |
| `recharts` | AIAdoptionChart.tsx | **ORPHANED** — remove when chart deleted |
| `embla-carousel-react` | carousel.tsx / feature69.tsx | **ORPHANED** — remove when feature69 deleted |
| `tailwindcss` | Styling | v4 with CSS-first config |

---

## Known Issues / Tech Debt

1. `package.json` name is `"prism-ai"` — needs update to `"aiscend"` (Issue 2)
2. Footer email is `info@prismtech.ai` — needs update (Issue 2)
3. Cal.com link is `prismtech/30min` — needs update (Issue 2)
4. Favicon is `vite.svg` — needs replacement (Issue 13)
5. 8 orphaned component files to delete (Issue 14)
6. 3 `.original.tsx` backup files to delete (Issue 14)
7. 3 unused Lottie files in `public/lottie/` (green_cube, red_cube, yellow_cube, greenish_wave)
8. Both `framer-motion` and `motion` installed — consolidate to one (Issue 14)
9. `shadcnblocks/` directory is reference only, could confuse agents — document clearly
