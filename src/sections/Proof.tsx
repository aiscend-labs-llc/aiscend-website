import { motion } from "framer-motion";

import { defaultViewport, staggerContainer, staggerItem } from "@/lib/animations";

function Proof() {
  return (
    <section id="proof" className="bg-stardust-a40 py-24" aria-label="Proof and case studies">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mx-auto max-w-5xl"
        >
          <motion.div variants={staggerItem} className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight lg:text-5xl">What we&apos;ve built.</h2>
            <p className="mt-4 text-muted-foreground lg:text-lg">
              We work with established companies across industries. The common thread: valuable knowledge trapped in the
              wrong places, and senior people stretched too thin. Here&apos;s what that looks like in practice.
            </p>
          </motion.div>

          <motion.article variants={staggerItem} className="mt-12 rounded-xl border border-stardust-a30 bg-white/40 p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Featured</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight lg:text-3xl">Floor Infrastructure</h3>

            <div className="mt-6 space-y-5 text-sm leading-7 text-stardust-a0/90 lg:text-base">
              <div>
                <p className="font-semibold">The Company</p>
                <p>
                  A 30-year floor infrastructure company with clients that include Disney, Apple, and Google. One of the most
                  established firms in their space.
                </p>
              </div>

              <div>
                <p className="font-semibold">The Problem</p>
                <p>
                  One person reviewed every project. Eleven quality control cycles before anything shipped. Two decades of
                  project history scattered across disconnected systems that nobody could search. The institutional knowledge
                  that made this company successful lived in exactly two people&apos;s heads. When those people were unavailable,
                  work stopped.
                </p>
                <p className="mt-3">
                  Junior employees were making preventable mistakes because they had no way to access what the senior team
                  already knew. And the senior team was drowning — not in hard problems, but in repetitive ones that ate up
                  their time and attention.
                </p>
              </div>

              <div>
                <p className="font-semibold">What We Did</p>
                <p>
                  We went on-site. Watched the review process from start to finish. Mapped every decision point in the QC
                  workflow. Found that roughly half the errors flagged during review were repetitive — things a well-trained
                  system could catch before the work ever reached a human reviewer.
                </p>
                <p className="mt-3">
                  Then we interviewed the experts. Not with a questionnaire. With recording devices, screen capture, and hours
                  of probing conversation designed to surface the implicit reasoning they&apos;d never had to articulate before.
                  The kind of knowledge that only shows up when you sit with someone and ask the right questions at the right
                  time.
                </p>
              </div>

              <div>
                <p className="font-semibold">What We&apos;re Building</p>
                <ul className="mt-3 space-y-3">
                  <li>
                    <span className="font-semibold">Quality Pre-Flight</span> — AI-powered checks that run before work reaches
                    the senior reviewer. Targets 50% of common errors caught automatically. The expert stops reviewing problems
                    that don&apos;t require expert judgment.
                  </li>
                  <li>
                    <span className="font-semibold">Institutional Knowledge Base</span> — 20 years of project files,
                    correspondence, specs, and documentation made searchable through plain language questions. Any employee can
                    ask "how did we handle this situation in 2017?" and get an answer with source documents in seconds.
                  </li>
                  <li>
                    <span className="font-semibold">Expert Decision Capture</span> — Wearable recording devices and custom
                    software that capture how senior people actually make decisions in the real workflow. Thirty years of
                    accumulated wisdom preserved as a searchable, trainable dataset instead of walking out the door at
                    retirement.
                  </li>
                </ul>
                <p className="mt-4 font-semibold">Multi-system engagement with ongoing maintenance.</p>
              </div>
            </div>
          </motion.article>

          <motion.div variants={staggerItem} className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="rounded-xl border border-stardust-a30 bg-white/30 p-6">
              <h3 className="text-xl font-semibold tracking-tight">Operation Health &amp; Wellness</h3>
              <p className="mt-4 text-sm leading-7 text-stardust-a0/90 lg:text-base">
                Operation Health &amp; Wellness — a Bay Area medical startup with a Stanford researcher on the founding team.
              </p>
              <p className="mt-3 text-sm leading-7 text-stardust-a0/90 lg:text-base">
                Early-stage company building a patient-facing application. Needed AI-native architecture from the start but
                didn&apos;t have the in-house technical team to design and build it at the speed the market demanded.
              </p>
              <p className="mt-3 text-sm leading-7 text-stardust-a0/90 lg:text-base">
                AI agent-driven application development. Our autonomous agent infrastructure handles core development
                workflows while we architect the system and manage quality. The app is being built at a fraction of the cost
                and timeline of a traditional dev shop, with the technical rigor that a healthcare product requires.
              </p>
            </article>

            <article className="rounded-xl border border-stardust-a30 bg-white/30 p-6">
              <h3 className="text-xl font-semibold tracking-tight">Luxury Fashion</h3>
              <p className="mt-4 text-sm leading-7 text-stardust-a0/90 lg:text-base">
                A luxury fashion company generating over $1M in profit per employee. 20+ years in operation. Founded by a
                Babson alum.
              </p>
              <p className="mt-3 text-sm leading-7 text-stardust-a0/90 lg:text-base">
                Their supply chain prediction process had a step that internal teams referred to as one employee&apos;s "gut
                feel." This person had been making forecasting decisions for two decades based on pattern recognition she
                couldn&apos;t consciously explain. When we mapped the workflow, there was literally a gap in the process diagram —
                no documentation, no system, just intuition built on years of reading the market.
              </p>
              <p className="mt-3 text-sm leading-7 text-stardust-a0/90 lg:text-base">
                We spent four hours with the employee in question. Not asking "how do you forecast?" — she&apos;d been asked that
                before and couldn&apos;t answer it. Instead, we asked what she reads in the morning, how she knows when a number
                feels wrong, what sources she turns to when she&apos;s uncertain. We mapped the invisible chain of pattern
                recognition that drove her decisions.
              </p>
            </article>
          </motion.div>

          <motion.div variants={staggerItem} className="mt-8 rounded-xl border border-stardust-a30 bg-white/20 p-6">
            <h3 className="text-lg font-semibold tracking-tight">Additional engagements</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-stardust-a0/90 lg:text-base">
              <li>
                <span className="font-semibold">Biogen</span> — Data science project work. Biotech generates massive, complex
                datasets and the gap between having data and extracting actionable insight from it is where most companies
                stall. We helped bridge that gap.
              </li>
              <li>
                <span className="font-semibold">Cybersecurity</span> — Data science and analytics work. Security companies
                generate enormous volumes of signal data and need systems that can separate real threats from noise at speed.
                We worked on the analytical layer that makes that possible.
              </li>
            </ul>
          </motion.div>

          <motion.div variants={staggerItem} className="mt-10 max-w-4xl text-base leading-8 text-stardust-a0/90 lg:text-lg">
            <p>
              <span className="font-semibold">The pattern is always the same.</span> An established company. Decades of
              expertise locked in a few people&apos;s heads. Systems that don&apos;t talk to each other. A senior person who&apos;s become
              the bottleneck because they&apos;re the only one who knows enough.
            </p>
            <p className="mt-4">
              We find the knowledge, capture it, and build systems around it. The industry changes every time. The approach
              doesn&apos;t.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Proof;
