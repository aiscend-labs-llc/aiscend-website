# Aiscend Website

Marketing site for **Aiscend Labs** -- custom AI systems for established businesses.

## Tech Stack

- **Framework:** [Astro](https://astro.build/) (static-first, React islands)
- **UI:** [React](https://react.dev/) 19 + [shadcn/ui](https://ui.shadcn.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **Animations:** [Framer Motion](https://www.framer.com/motion/) + [Lottie](https://airbnb.io/lottie/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Booking:** [Cal.com](https://cal.com/) embed
- **Language:** TypeScript
- **Runtime:** [Bun](https://bun.sh/)

## Development

```bash
bun install
bun dev          # http://localhost:4321
bun run build    # Production build
bun run preview  # Preview production build
bun run lint     # ESLint
```

## Project Structure

See [`FILEMAP.md`](./FILEMAP.md) for the full agent-readable codebase map.

```
src/
├── pages/index.astro       # Main page (single-page scroll)
├── layouts/Layout.astro    # HTML shell, fonts, meta
├── sections/               # Page sections (Hero, Impact, Solutions, Contact, Footer)
├── components/             # Header, shadcn/ui components
├── lib/                    # Shared utilities (animations, scroll, cn)
└── index.css               # Design tokens, theme, global styles

_planning/                  # Strategy, copy, and implementation docs
├── IMPLEMENTATION_PLAN.md  # Master plan (15 issues, 5 phases)
├── copy/                   # Source-of-truth copy for all sections
├── strategy/               # ICP, brand/voice, inspiration analysis
├── reference/              # Cuban video spec, full build brief
└── issue_creation/         # Issue templates and workflow guides
```

## Implementation

The site is mid-rebuild. Work is tracked in `_planning/IMPLEMENTATION_PLAN.md` as 15 issues across 5 phases, designed for single-session Droid execution.

**Workflow:** One fresh agent session per issue, using the executor template at `_planning/issue_creation/EXECUTOR.md`. Post-implementation audit with `_planning/issue_creation/AUDITOR.md`.
