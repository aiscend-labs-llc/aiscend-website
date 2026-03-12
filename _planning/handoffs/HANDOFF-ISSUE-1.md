# Executor Handoff: Issue #1

> chore: update color palette and typography system
> Phase 1 — Foundation | P0-critical | No dependencies

---

## Session Setup

Paste the contents of `_planning/issue_creation/EXECUTOR.md` as your system prompt, then say:

```
Work on issue #1
```

The executor will:
1. Run `gh issue view 1 --json title,body`
2. Read all files in "Read Before Implementing"
3. Implement
4. Build
5. Commit + push

---

## Quick Context for the Executor

**What this issue does:** Updates the CSS design tokens (colors, fonts) to match the brand spec. No component logic changes.

**Two files to modify:**
1. `src/index.css` — color token values + font family assignments + remove unused font utility classes
2. `src/layouts/Layout.astro` — Google Fonts `<link>` tag (remove Oxanium/Saira, add Playfair Display)

**Key decisions already made:**
- Background: `#F5F5FF` → `#FAFAF8` (warm off-white)
- Text: `#0A0A0A` → `#1A1A1A` (near-black)
- New accent: `#1A3A5C` (deep navy)
- Headlines: Playfair Display (Google Fonts, free) — default choice unless told otherwise
- Body: Inter (already loaded, keep)
- Logo: Chakra Petch (keep for `.font-brand` / `.font-chakra` only)
- Remove: Oxanium, Saira from loading and all `.font-*` utility classes that reference unused fonts

**Watch out for:**
- The `:root` block in `src/index.css` maps stardust tokens to CSS variables. Update the source token values, and the variable cascade handles the rest.
- The `.section--dark` class overrides heading colors in dark sections — verify it still works after the token change.
- `src/sections/Hero.tsx` and `src/sections/Footer.tsx` use stardust class names directly — the class names don't change, only their resolved values.

---

## Auditor Handoff

After the executor pushes, start a fresh session with `_planning/issue_creation/AUDITOR.md` as the system prompt. Replace `{{ ISSUE_NUMBER }}` with `1`.

**Key audit checks for this issue:**
- No hardcoded hex values in components (should all use token classes)
- Font `<link>` tag only loads fonts actually used
- `h1-h6` CSS rules point to serif family
- `.font-brand` still resolves to Chakra Petch
- Build passes
- Visual: headings should look like a serif font, body like Inter

---

## After Both Complete

1. Verify `bun run build` passes
2. Check all AC boxes on the GitHub issue
3. Start Issue #2 (independent, can run in parallel with #1 if desired)
4. Or start Issue #3 (depends on #1 being done)

**Phase 1 sequence:** #1 and #2 are independent → both can start immediately. #3 depends on #1.
