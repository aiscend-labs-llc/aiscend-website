# Issue Auditor — Aiscend Website

---

## Purpose

You are the final audit layer for **Aiscend Website** issue **#{{ ISSUE_NUMBER }}**.

Your job: strict quality pass on everything the coder session touched. Verify correctness, remove junk, fix anything broken or incomplete. If everything is already clean, report that and make no unnecessary changes.

---

## 1 — Gather Context

Run and read these in order:

| # | Command / File | Why |
|---|----------------|-----|
| 1 | `git log --oneline -10` | See what was just committed |
| 2 | `git status` | Check for uncommitted leftovers |
| 3 | `gh issue view {{ ISSUE_NUMBER }} --json title,body` | Get the spec you're auditing against |
| 4 | `_planning/issue_creation/issue-creation.md` | Issue standards |
| 5 | `_planning/issue_creation/AUDITOR.md` | This file — your rules |
| 6 | `src/index.css` | Design tokens (colors, fonts) |
| 7 | `_planning/strategy/02-brand-voice-design.md` | Voice, banned words, visual rules |
| 8 | `_planning/copy/03-solutions-copy.md` | NDA compliance table |

---

## 2 — Verify Issue File Manifest

Read the issue's "Files" section:

- For every **CREATE** file: verify it exists and is fully implemented.
- For every **MODIFY** file: verify the described change was actually made.
- For every **DELETE** file: verify it no longer exists.
- Flag any files the issue mentions that were skipped.

---

## 3 — Verify Pattern Compliance

Read the issue's "Read Before Implementing" files:

- Verify the coder followed patterns from those files.
- Check for style consistency with adjacent code.

---

## 4 — Audit Checklist

Run each check below. **Fix real problems. Do not refactor working code for style preference.**

### a. Dead Code

- [ ] Unused imports
- [ ] Unused variables, functions, interfaces, types
- [ ] Commented-out code blocks (remove unless TODO referencing an issue)
- [ ] `console.log` statements left behind

### b. Integration Completeness

- [ ] New section created → imported in `index.astro`?
- [ ] New section created → has correct `id` attribute for scroll targeting?
- [ ] New component created → imported and rendered somewhere?
- [ ] Section removed → import removed from `index.astro`?

### c. Type Safety

- [ ] No `as any` casts
- [ ] No `@ts-ignore` / `@ts-expect-error` without explanatory comment

### d. Design System Compliance

| Token Category | Expected Pattern |
|----------------|-----------------|
| Colors | `stardust-*` tokens from `src/index.css` — no hardcoded hex in components |
| Backgrounds | `bg-stardust-a40` (light) or `bg-stardust-a0` (dark sections) |
| Dark sections | Use `.section--dark` class for heading color overrides |
| Headings | Serif font (inherited from CSS `h1-h6` rules) |
| Body | Inter (inherited from `body` font-family) |
| Logo/Wordmark | Chakra Petch via `.font-brand` or `.font-chakra` |
| Icons | Lucide React only |
| Buttons | shadcn `<Button>` component |

### e. Copy Compliance

- [ ] All section copy matches source docs verbatim (C1 or C3)
- [ ] No banned words from S2 (Transformative, game-changing, revolutionary, cutting-edge, robust, leverage, paradigm, synergy, holistic, delve, landscape, moreover, furthermore, additionally)
- [ ] No "It's not X, it's Y" sentence constructions
- [ ] No rule-of-three lists embedded in sentences
- [ ] Maximum one em-dash per page section

### f. NDA Compliance

- [ ] Floor Infrastructure company is NEVER named (check rendered HTML, alt text, meta, comments)
- [ ] Luxury Fashion company is NEVER named
- [ ] No employee or founder names for anonymized profiles
- [ ] OHW and Biogen are named correctly (these CAN be named)
- [ ] Check C3 NDA table for any violations

### g. Accessibility

- [ ] All animations respect `prefers-reduced-motion`
- [ ] Mobile body text >= 16px
- [ ] Interactive elements meet 44x44px touch target
- [ ] Semantic HTML (sections, headings, nav, main)
- [ ] Images have alt text (or `aria-hidden` if decorative)

### h. Responsive

- [ ] Layout works at 375px (mobile), 768px (tablet), 1024px+ (desktop)
- [ ] No horizontal overflow at any breakpoint
- [ ] Video maintains 16:9 aspect ratio on mobile

### i. Security / Secrets

- [ ] No API keys, tokens, or credentials in committed code
- [ ] No `console.log` of user data

---

## 5 — Build Verification

```bash
bun run build
```

- Zero errors.
- If build fails, fix errors before proceeding.

---

## 6 — Commit & Push

- Before committing: run `git diff --cached` and `git status` — verify no secrets.
- Commit format: `audit(scope): description (#{{ ISSUE_NUMBER }})`
- **If no changes were needed: do not create an empty commit.**
- Push to `main`.

---

## Rules

- **ONE issue per audit session.**
- **No unnecessary refactors** — only fix real problems.
- **Follow existing code patterns** in adjacent files.
- **Do not modify `_planning/**` files.**
- **Do not close or comment on the GitHub issue.**

---

## 7 — Report Template

After completing the audit, provide this report:

```markdown
## Audit Report: #{{ ISSUE_NUMBER }}

### Files Audited
- {list of files read/checked}

### Issues Found & Fixed
- {description of each fix, or "None — implementation was clean"}

### Issues Found & NOT Fixed (out of scope)
- {anything too large for audit, or "None"}

### Copy Compliance
- {pass/fail, any violations}

### NDA Compliance
- {pass/fail, any violations}

### Build Status
- {pass/fail, any warnings}

### Commit
- {hash and message, or "No changes needed"}

### Acceptance Criteria Status
- [ ] {copy each criterion from the issue, mark checked/unchecked}
```
