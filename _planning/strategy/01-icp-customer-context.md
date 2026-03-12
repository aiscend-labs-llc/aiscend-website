# AISCEND LABS — ICP & CUSTOMER CONTEXT

> This doc gives the coding agent (and anyone working on copy/positioning) the deepest available context on who Aiscend's customers are, how they think, and what they respond to.
> Drawn from real client conversations and stakeholder interviews.
> Last updated: March 2026

---

## THE CORE TENSION

Aiscend's customers live in a specific tension: they know something is wrong with how knowledge moves through their organization, but they can't describe it in technical terms. They say things like:

- "Everything goes through [name]"
- "When [name] retires, we're in trouble"
- "We have 20 years of data somewhere but nobody can find anything"
- "I've heard we need AI but I don't know where to start"
- "The last consultant gave us a report and nothing happened"

They don't say "we have a knowledge management problem" or "we need a RAG pipeline." They feel the pain as bottlenecks, delays, key-person dependency, and junior employees making preventable mistakes.

The site must speak to the feeling, not the technical category.

---

## REAL CUSTOMER ARCHETYPE: THE FREEAXEZ PROFILE

- 30-year company in floor infrastructure
- Serves Disney, Apple, Google — not a small operation
- COO was the bottleneck: reviewing every single design through 11 QC cycles
- Institutional knowledge lived in exactly two people's heads
- They had 20 years of project data sitting in disconnected systems doing nothing
- They needed someone to come in, understand the actual workflow, and build around it

**What sold them:** Not a pitch deck. Spencer and the team went on-site, shadowed workflows, interviewed stakeholders, mapped data sources, and produced a detailed technical specification with milestones and pricing. The discovery process itself demonstrated competence.

**What we're building for them:**
1. QC pre-flight scanner (catching 50% of errors before human review)
2. RAG system indexing 20 years of project data
3. OMI-based knowledge capture preserving retiring experts' wisdom

**Contract:** $45K+ with ongoing maintenance

---

## REAL STAKEHOLDER REACTION: CONAN COOPER (NEW YORK LIFE)

### Context
Conan Cooper is Head of Strategy at New York Life's Group Benefits arm ($500M+ in annual sales, New York Life has $1T in assets). He's 32, an engineer by training, worked on oil rigs, did an MBA at Harvard Business School, then corporate development and M&A for clean energy before joining New York Life specifically because of their AI readiness.

He joined the call expecting a sales pitch and explicitly said upfront: "I wanted to set the expectation up front that this isn't a business development kind of call." He left the call offering to beta test Atlas, connect Aiscend with his professional network, and introduce Spencer to Mike Starrett (Chief Commercial Officer at Radiant, a nuclear micro-reactor startup).

### What resonated with him

**1. The nuance capture methodology**
Conan independently arrived at the same insight as "Katie's Gut" — that people make high-value decisions from subconscious chains of observation they can't articulate. His example: a sales rep who calls a broker friend after unconsciously processing a LinkedIn post, a golf tournament mention, and a client coverage signal. "They didn't realize they're doing it."

His reaction: "Recording them and then prompting them to be like, oh, why did I call them? It makes a lot of sense to me. And the idea that we're rolling out just now is not that kind of approach."

**2. The gap in existing enterprise AI**
New York Life is paying IBM significant money to do workflow mapping and build AI agents. But Conan recognizes IBM isn't capturing the human nuance layer. His words: "How do you supplement an existing AI consultant with something like what you offer, which is more of the getting that AI consultant the information that they need? Because they ain't doing it right."

**3. The "best people" problem at scale**
At a large organization, you have massive variability between best and worst performers. Conan's insight: "You may end up training your AI models on the people that you don't want to train them on because they're average. We want to be the best." The challenge is identifying who's best at what, capturing THEIR gut specifically, and combining it.

**4. The second brain concept (Atlas)**
Conan was more interested in Atlas than Aiscend's consulting services. His situation: "I'm in meetings 10 hours a day. I don't have time to convert what's in my brain into action." He's trying to build his own second brain with Claude Code, Co-Work, OpenClaw, and ChatGPT Pro, but can't keep up. He described Atlas as "basically my hypothesis for what I need."

### His prediction on selling Atlas to enterprises
Conan's insight on incentive structures: companies have never paid employees for their data before. But in a world where data is valuable, you might need to. He drew a parallel to linking sales compensation to HR objectives — if you don't incentivize people to share their knowledge, they won't.

"The way that you would sell this to an organization is going to be around that piece, which is they've never had to pay for data before."

### What this tells us about the site
The Conan conversation validates several things the site needs to communicate:
1. The methodology (forensic observation > traditional consulting interviews) is genuinely differentiated
2. Even sophisticated enterprise buyers recognize the gap that Aiscend fills
3. The "we don't ask how you want to use AI — we understand your business" positioning lands
4. Some visitors will be interested in Atlas, not consulting — the site should acknowledge this exists without overshadowing the core offering

---

## WHAT THE PRIMARY ICP DOES NOT CARE ABOUT

- Your tech stack (Astro, Svelte, RAG, LLM — these are implementation details)
- How many agents you can run in parallel
- Your OKRs or internal process
- AI industry news or trends
- Whether you use Claude or GPT or open-source models
- Your fundraising plans
- Blockchain anything

They care about: Can you understand my business? Can you build something that actually works? Do you have proof? How much does it cost? How long does it take?

---

## LANGUAGE THE ICP USES vs. LANGUAGE WE USE

| They say | We say (internally) | The site should say |
|----------|-------------------|-------------------|
| "Everything goes through me" | Knowledge bottleneck, single point of failure | "Your best employee reviews every design because she's the only one with 20 years of context" |
| "Nobody can find anything" | Information fragmentation, data silos | "Decades of project history scattered across a dozen systems" |
| "We need AI but don't know where to start" | AI confusion, implementation gap | "You've heard you need AI. The problem is nobody's asking the right question" |
| "When Bob retires we're screwed" | Institutional knowledge loss, tacit knowledge risk | "Your retiring specialist's 30 years of accumulated wisdom" |
| "The last consultant gave us a binder" | Report-delivery consulting model | "No reports. Working software." |
| "How much and how long?" | Revenue model, engagement structure | Clear pricing context: discovery ($3K-$7.5K), builds ($20K-$75K+) |

---

## THE ONE THING THE SITE MUST MAKE SOMEONE FEEL

After 30 seconds on the site, a warm lead should feel:

**"These people actually get what's happening at my company."**

Not impressed. Not wowed by animations. Not educated about AI. Just understood.

That feeling — the recognition that someone has described your exact problem without you having to explain it — is what converts a referral into a booked call. Everything on the site serves that feeling or gets cut.
