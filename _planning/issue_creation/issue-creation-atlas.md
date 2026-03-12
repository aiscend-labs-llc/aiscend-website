# ATLAS Issue Creation Guide

> Standard for creating GitHub issues that agents can implement in a single Droid session without context rot.

---

## Why This Matters

Claude Opus 4.6 has a 1M token context window (200K default, 1M in beta), but raw context size is misleading. Factory's Droid sets its compression threshold (Tmax) at ~140K tokens -- when context reaches this point, it triggers "anchored iterative summarization" to compress older turns. Running near max context empirically degrades response quality, so Droid stays well below the model's actual limit.

What this means in practice:

- **~140K is the real working window**: Droid triggers compression at this threshold (the "fill line"). After compression, it retains even fewer tokens (the "drain line", Tretained < Tmax). An issue that fits comfortably in one session never triggers compression.
- **Compression loses file tracking first**: Factory's evaluation scores artifact tracking at only 2.45/5 -- the weakest dimension across all methods. After compression, the agent often forgets which files it created or modified. This is why issues must explicitly list files.
- **Optimize for tokens per task, not tokens per request**: aggressive compression saves per-request tokens but loses details that force expensive re-fetching and rework. Factory's research calls this "the false economy of over-compression."
- **Structured summaries beat raw compression**: Factory's anchored iterative approach merges new summaries into a persistent state with explicit sections (session intent, artifact trail, decisions, next steps). This prevents "silent drift" where details vanish across repeated compressions.

Factory's recommended workflow for large features: spec mode (Shift+Tab) to create a master plan, then one fresh Droid session per implementation phase. Each session references the plan doc and implements one coherent piece. Fresh sessions avoid compression entirely.

**Target: 3-8 files touched per issue, one coherent concept, testable independently.**

---

## Issue Template

```markdown
## Context
Plan: `plans/final-sprint/{plan-file}.md` {section/phase reference}
Existing code: {what already exists that this builds on or modifies, with file paths}

## What to Build
`src/{path}/file.py` -- {ClassName} class:

{2-4 paragraphs describing WHAT to build, not HOW to code it.
Include key method signatures, data structures, and algorithms.
Reference specific existing classes/methods by name and file path.
Include code snippets ONLY for non-obvious interfaces or data schemas.}

### Integration:
- {How this connects to existing code}
- {What calls it / what it calls}
- {Where the output goes}

## Read Before Implementing
1. `src/{path}/file.py` -- {what to look for and why}
2. `src/{path}/other.py` -- {what to look for and why}
3. `plans/{plan}.md` -- {specific section reference}
4. `research/{ref}.md` -- {if applicable}

## Files
- CREATE `src/{path}/new_file.py`
- MODIFY `src/{path}/existing.py` ({what change})
- Tests in `tests/test_{module}.py` ({what scenarios})

## Depends On
- #{number} ({short reason -- what it provides that this needs})
- `src/{path}/file.py` (already built)

## Acceptance Criteria
- [ ] {Specific, testable criterion}
- [ ] {Another specific criterion}
- [ ] {Integration criterion -- works with X}
- [ ] All tests pass (`python3 -m pytest tests/test_{module}.py -v`)
```

---

## Section-by-Section Rules

### Context
- Always reference the source plan file with backtick path
- Include phase/section number so the agent can jump straight there
- Name the existing code this builds on (file paths, class names)
- If this replaces a closed issue, mention it: "Replaces closed #53 (too broad)"

### What to Build
- Lead with the file path and class name: `` `src/account/license.py` -- LicenseManager class ``
- Describe the public interface (method names, params, return types)
- Include data structures (dataclasses, schemas) with field names and types
- For algorithms, describe the approach (not pseudocode line-by-line)
- For integrations, name the exact methods being called on existing classes
- **Include schemas** (SQL, JSON, dataclass) when creating data models
- **Include API routes** (method + path + request/response) when creating endpoints

### Read Before Implementing
- List 3-6 files the agent MUST read before writing code
- Explain WHAT to look for in each file (not just "read this")
- Order by importance (most critical first)
- Include plan docs and research refs where relevant
- This section directly compensates for compression's artifact tracking weakness -- after compression, the agent may not remember what files exist, so the issue must tell it

### Files
- Use CREATE / MODIFY / DELETE verbs
- For MODIFY, say what's changing (e.g., "add license_key field to AtlasConfig")
- Always include the test file
- List specific line numbers or class names for MODIFY when possible
- **This is the most important section for agent reliability** -- compression loses file tracking first (2.45/5 in Factory's evaluation). Explicit file lists prevent re-discovery overhead.

### Depends On
- List issue numbers with a short reason (what the dependency provides)
- Distinguish between "needs this built first" vs "already built, just reference it"
- If independent (no deps), say "Nothing -- this is foundational" or "Independent module"

### Acceptance Criteria
- 5-8 checkboxes
- Each must be independently verifiable
- Include at least one integration criterion ("works with X")
- Always end with test command: `python3 -m pytest tests/test_{module}.py -v`
- Never include vague criteria like "code is clean" or "well-documented"

---

## Sizing Rules

| Signal | Issue is too broad | Issue is right-sized | Issue is too narrow |
|--------|-------------------|---------------------|-------------------|
| Files touched | 10+ | 3-8 | 1-2 trivial files |
| Concepts | Multiple unrelated subsystems | One coherent concept | Sub-part of a concept |
| Session cost | Would require multiple compressions | Comfortable in one session (~140K effective window) | 15 minutes of work |
| Dependencies | Creates AND consumes new interfaces | Creates OR consumes | None meaningful |
| Test scenarios | 20+ | 5-12 | 1-2 |

**Why these numbers**: Factory's Droid maintains an optimal ~140K token working window. A right-sized issue (3-8 files, 5-12 tests) stays within this window including file reads, tool calls, and test output. Issues touching 10+ files risk triggering compression mid-implementation, which degrades artifact tracking.

**Examples of right-sized issues:**
- "LicenseManager: JWT validation + grace period + phone-home scheduling" (1 class, 1 test file, 3 source files)
- "Stripe webhook handler" (1 handler, 4 event types, 1 test file)
- "Wire license into daemon + auth middleware" (3-4 existing files modified, 1 test file)

**Examples of too-broad issues:**
- "Account system: Clerk + Supabase + Stripe + license API" (4 platforms, 6+ files, too many concepts)
- "Admin dashboard" (9 pages, 20 API endpoints -- should be 3-4 issues)

**Examples of too-narrow issues:**
- "Create Stripe products" (30-minute manual task, no code)
- "Add FLYIO_SPRITE to Platform enum" (1 line change, not worth an issue)

---

## Workflow: Large Features

Following Factory's "Implementing Large Features" guide:

1. **Spec mode** (`Shift+Tab`): Create a master plan breaking the feature into phases
2. **Save the plan** as a markdown file in the repo (e.g., `plans/feature-name.md`)
3. **Create one issue per phase** using this template
4. **One fresh Droid session per issue**: start clean, reference the plan doc, implement, commit
5. **Commit at the end of each session**: don't carry uncommitted work across sessions
6. **Update the plan** after each phase to mark completion

This avoids the compression trap: each session starts with full context, never hits degradation.

---

## Dependency Notation

In the "Depends On" section:
```
- #61 (cloud license API must exist to issue JWTs)     -- needs this built first
- `src/memory/retrieval.py` (already built)             -- just references existing code
- Nothing -- this is foundational infra                  -- independent, can start immediately
- -- (independent; used by #65)                          -- others depend on THIS
```

In issue tables (plan docs, MASTER-INTEGRATION-MAP):
```
| #65 | LicenseManager | #61, #69 |                    -- both must be done first
| #69 | Cert-pinned client | -- (independent; used by #65) | -- clarify the direction
```

---

## Labeling Convention

| Label | When to use |
|-------|------------|
| `layer-1` | Core ATLAS src/ code |
| `layer-2` | Enhancement (overnight evo, Fly.io) |
| `layer-3` | Deployment & operations |
| `enhancement` | New feature |
| `exoskeleton` | Exoskeleton self-modification |
| `evolution` | Overnight evolution pipeline |
| `flyio` | Fly.io sprites |
| `deploy` | Deployment & infra |

---

## Naming Convention

Issue titles follow: `[{PREFIX}-{NUMBER}] {Short description}`

| Prefix | Meaning | Example |
|--------|---------|---------|
| `L0-` | Layer 0: Fleet isolation | `[L0-1] FleetContainer + FleetConfig` |
| `L1-` | Layer 1: Self-modification | `[L1-32] LLM-powered instruction classification` |
| `L2-` | Layer 2: Enhancement | `[L2-17] MAP-Elites retrieval tuning` |
| `L3-` | Layer 3: Deployment | `[L3-24] Mac Mini setup script + launchd` |
| `P6-` | Plan 6: Account system | `[P6-59] Clerk project + Supabase schema` |

---

## After Creating Issues

1. Update the relevant plan document's implementation status section
2. Update `plans/MASTER-INTEGRATION-MAP.md` issue tables
3. Create or update the sprint todo in `todos/`
4. Commit all trace doc updates
5. Push to main
