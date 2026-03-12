import { ArrowLeft } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Button } from "@/components/ui/button";

const company = [
  "A 30-year floor infrastructure company with clients that include Disney, Apple, and Google.",
  "One of the most established firms in their space.",
];

const summary = [
  "One person reviewed every project.",
  "Eleven quality control cycles before anything shipped.",
  "Two decades of project history scattered across disconnected systems that nobody could search.",
  "The institutional knowledge that made this company successful lived in exactly two people's heads.",
];

const problem = [
  "Junior employees were making preventable mistakes because they had no way to access what the senior team already knew. And the senior team was drowning — not in hard problems, but in repetitive ones that ate up their time and attention.",
  "When those people were unavailable, work stopped.",
];

const work = [
  "We went on-site. Watched the review process from start to finish. Mapped every decision point in the QC workflow. Found that roughly half the errors flagged during review were repetitive — things a well-trained system could catch before the work ever reached a human reviewer.",
  "Then we interviewed the experts. Not with a questionnaire. With recording devices, screen capture, and hours of probing conversation designed to surface the implicit reasoning they'd never had to articulate before. The kind of knowledge that only shows up when you sit with someone and ask the right questions at the right time.",
];

const systems = [
  {
    title: "Quality Pre-Flight",
    body: "AI-powered checks that run before work reaches the senior reviewer. Targets 50% of common errors caught automatically. The expert stops reviewing problems that don't require expert judgment.",
  },
  {
    title: "Institutional Knowledge Base",
    body: "20 years of project files, correspondence, specs, and documentation made searchable through plain language questions. Any employee can ask \"how did we handle this situation in 2017?\" and get an answer with source documents in seconds.",
  },
  {
    title: "Expert Decision Capture",
    body: "Wearable recording devices and custom software that capture how senior people actually make decisions in the real workflow. Thirty years of accumulated wisdom preserved as a searchable, trainable dataset instead of walking out the door at retirement.",
  },
];

function FloorInfrastructureContent() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxSlow = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-36, 72]);
  const parallaxFast = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [24, -96]);

  return (
    <div ref={sectionRef} className="relative overflow-hidden bg-stardust-a40 text-stardust-a0">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-stardust-a30/60 blur-3xl"
        style={{ y: parallaxSlow }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-[28rem] h-64 w-64 rounded-full bg-stardust-a10/10 blur-3xl"
        style={{ y: parallaxFast }}
      />

      <header className="sticky top-0 z-20 border-b border-stardust-a30/70 bg-stardust-a40/90 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <a className="font-brand text-xl font-semibold tracking-tight" href="/">
            aiscend
          </a>
          <Button asChild variant="ghost" className="gap-2 px-0 text-sm font-medium">
            <a href="/">
              <ArrowLeft className="size-4" />
              Back to home
            </a>
          </Button>
        </div>
      </header>

      <main className="relative z-10">
        <section className="container py-20 sm:py-24 lg:py-28">
          <div className="max-w-5xl">
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              A 30-year floor infrastructure company
            </h1>
            <div className="mt-6 max-w-3xl space-y-3 text-lg text-stardust-a10 sm:text-xl">
              {company.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {summary.map((item) => (
              <div key={item} className="rounded-3xl border border-stardust-a30 bg-white/70 p-6 shadow-sm">
                <p className="text-base leading-7 text-stardust-a0 sm:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container pb-20 sm:pb-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stardust-a20">The Problem</p>
            </div>
            <div className="space-y-6 text-lg leading-8 text-stardust-a10 sm:text-xl">
              {problem.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="container pb-20 sm:pb-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stardust-a20">What We Did</p>
            </div>
            <div className="space-y-6 text-lg leading-8 text-stardust-a10 sm:text-xl">
              {work.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="container pb-24 sm:pb-28 lg:pb-32">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stardust-a20">What We&apos;re Building</p>
            </div>
            <div>
              <div className="grid gap-6 lg:grid-cols-3">
                {systems.map((system) => (
                  <article key={system.title} className="rounded-3xl border border-stardust-a30 bg-white/80 p-6 shadow-sm">
                    <h2 className="text-2xl font-semibold tracking-tight text-stardust-a0">{system.title}</h2>
                    <p className="mt-4 text-base leading-7 text-stardust-a10">{system.body}</p>
                  </article>
                ))}
              </div>
              <p className="mt-8 text-xl font-semibold tracking-tight text-stardust-a0 sm:text-2xl">
                Multi-system engagement with ongoing maintenance.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FloorInfrastructureContent;
