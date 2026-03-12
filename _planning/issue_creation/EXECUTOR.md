# Issue Executor — Aiscend Website

---

## 1 — Project Orientation

You are working on the **Aiscend Website** codebase — a single-page marketing site for an AI consulting firm targeting established business owners (50-65 years old, $5M-500M revenue). Astro + React + Tailwind.

Read these files/commands in order, then confirm you're ready:

1. `_planning/issue_creation/issue-creation.md` — issue creation standards
2. `_planning/IMPLEMENTATION_PLAN.md` — master plan with all 15 issues
3. `_planning/strategy/02-brand-voice-design.md` — color, type, voice, banned words
4. `git log --oneline -20`
5. `git status`
6. `gh issue list --state open --limit 20`
7. `src/index.css` — design tokens (colors, fonts, CSS custom properties)
8. `src/lib/animations.ts` — shared animation variants

After reading, confirm:

- [ ] Current branch (should be `main`)
- [ ] Which issues are open
- [ ] Current design system summary (colors, fonts, component library)

Then I'll give you the issue number.

---

## 2 — Execution Workflow

Once you receive an issue number `<N>`, follow these steps exactly:

| Step | Action |
|------|--------|
| **1** | Read the GitHub issue body: `gh issue view <N> --json title,body` |
| **2** | Read **every** source file referenced in the issue's "Read Before Implementing" section |
| **3** | Implement the feature / fix |
| **4** | Run `bun run build` to verify no build errors |
| **5** | Commit with message format: `type(scope): description (#<N>)` — use `feat`, `fix`, `refactor`, `chore`, or `style` |
| **6** | Push to `main` |

Then **stop** and give a recap:

- What was built
- Files created / modified
- Any decisions or trade-offs made

---

## 3 — Rules

- **ONE issue per session.** Do not start another.
- **Incremental commits** if the issue has distinct logical units.
- **Follow existing code patterns** — check nearby files before writing new code.
- **Run `bun run build` before every commit** to catch errors early.
- **No changes to protected files** unless explicitly asked:
  `_planning/**`, `README.md`, `.env`
- **NEVER close or comment on the GitHub issue.** Your job is code + commit + push only.
- **Copy must be verbatim from planning docs.** Do not paraphrase, improve, or rewrite section copy. Use exactly what's in `_planning/copy/01-site-copy.md` and `_planning/copy/03-solutions-copy.md`.
- **NDA compliance is non-negotiable.** Check `_planning/copy/03-solutions-copy.md` NDA table before any client reference.
- **No banned words.** Check `_planning/strategy/02-brand-voice-design.md` "Banned Words & Patterns" before writing any copy.

---

## 4 — Tech Stack Reference

| Layer | Technology |
|-------|------------|
| Framework | Astro 5.x (static-first, React islands) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 + shadcn/ui components |
| Animations | Framer Motion (`src/lib/animations.ts` for shared variants) |
| Lottie | `lottie-web` for JSON animations |
| Booking | Cal.com embed (`@calcom/embed-react`) |
| Icons | Lucide React |
| Build | `bun run build` (Astro build) |
| Lint | `bun run lint` (ESLint) |

---

## 5 — Key Files

| File | Purpose |
|------|---------|
| `src/pages/index.astro` | Main page — imports and orders all sections |
| `src/layouts/Layout.astro` | HTML wrapper — meta tags, fonts, global CSS import |
| `src/index.css` | Design tokens: colors (`--color-stardust-*`), fonts, CSS vars, `.section--dark` |
| `src/lib/animations.ts` | Shared framer-motion variants: `fadeUp`, `staggerContainer`, `staggerItem`, etc. |
| `src/lib/scroll.ts` | `scrollToSection()` utility |
| `src/components/ui/button.tsx` | shadcn Button component |
| `src/components/ui/badge.tsx` | shadcn Badge component |

---

## 6 — Design Tokens

### Colors (current → target per Issue 1)

| Name | Current | Target |
|------|---------|--------|
| `--color-stardust-a40` (background) | `#F5F5FF` | `#FAFAF8` |
| `--color-stardust-a0` (text) | `#0A0A0A` | `#1A1A1A` |
| `--color-accent` (new) | n/a | `#1A3A5C` |
| `--color-stardust-a10` | `#404040` | `#404040` (keep) |
| `--color-stardust-a20` | `#737373` | `#737373` (keep) |
| `--color-stardust-a30` | `#D4D4D4` | `#D4D4D4` (keep) |

### Design Principles

- Premium but warm. McKinsey-meets-boutique-agency, not SaaS startup.
- Photography over illustration. No stock photos.
- Serif headlines signal trust to older audience. Clean sans body.
- No animation on hero. Text immediately visible and readable.
- All animations respect `prefers-reduced-motion`.
- Copy sounds like Spencer talking to a prospective client — direct, specific, occasionally blunt. Never promotional.
