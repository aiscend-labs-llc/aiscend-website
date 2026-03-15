import { motion, useReducedMotion } from "framer-motion";

import {
  defaultViewport,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

const sections = [
  {
    heading: "The wrong question",
    body: [
      'We DO NOT want you asking the question "how can we use AI for XYZ".',
      'Non-AI specialists lack massive amounts of context and awareness on what "AI" really is, and are thus often misled or misinformed about its capabilities and types of tasks different types of Machine learning can be applied to.',
      'The AI space is researched, tested and changing so rapidly, that unless you are constantly paying attention, it is essentially impossible to have even a relative understanding of what is possible now, and how to build a modular architecture/warehouse your company\'s data such that you are prepared to continuously adapt to the next wave.',
    ],
  },
  {
    heading: "What our job actually is",
    body: [
      'This is our job, let us do that for you. We then communicate the capabilities of the technology, how we recommend building it for your needs, and how it works in simpler terms. All you have to do is decide what work and impact will save you the most time and money.',
    ],
  },
  {
    heading: "Tacit knowledge",
    body: [
      'A large part of what we do is aid in business process or SOP documentation for the AI age. This can mean doing documentation on a process you simply had not done or needed to do in the past, but it can also mean collecting a different form of data from a documentation process you are already doing, or structuring data you already have in a way that makes it usable. Our end goal in building Ai systems is to capture the nuance, unspoken, or implicit understanding of your business and its operators. This data, the tacit knowledge that your 30+ year industry experts have yet often don’t speak, is what makes for truly brilliant input data in AI systems.',
    ],
  },
  {
    heading: "What that looks like in practice",
    body: [
      'This can even mean (locally) training a model on screen recording data of your workflows such that a custom agent can do menial work, or it can learn to compile all the necessary context from your history and warehoused data to put it right in front of your design team at the blink of an eye – making them 1.5-2x more efficient.',
    ],
  },
];

function ThesisContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-stardust-a40 py-16 sm:py-20" aria-label="Aiscend thesis">
      <div className="container">
        <motion.article
          className="mx-auto max-w-3xl"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.a
            href="/"
            variants={staggerItem}
            className="inline-flex items-center text-sm font-medium text-stardust-a10 transition-colors hover:text-stardust-a0"
          >
            Back to home
          </motion.a>

          <motion.p
            variants={staggerItem}
            className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-stardust-a20"
          >
            Aiscend thesis
          </motion.p>

          <motion.blockquote
            variants={staggerItem}
            className="mt-6 border-l border-stardust-a30 pl-6 text-2xl leading-tight text-stardust-a0 sm:text-3xl"
          >
            At Aiscend, we&apos;re about building real, impactful solutions - not consulting that doesn&apos;t go anywhere.
          </motion.blockquote>

          <motion.p
            variants={staggerItem}
            className="mt-6 text-base leading-8 text-stardust-a0/80 sm:text-lg"
          >
            This discovery helps us understand where we can create continued,
            measurable value for your team.
          </motion.p>

          <motion.h1
            variants={staggerItem}
            className="mt-16 text-4xl leading-tight tracking-tight sm:text-5xl"
          >
            Our AI Philosophy &amp; Approach
          </motion.h1>

          <motion.div variants={staggerItem} className="mt-8 rounded-2xl bg-stardust-a30/20 p-6 sm:p-8">
            <p className="text-xl leading-relaxed text-stardust-a0 sm:text-2xl">
              We DO NOT want you asking the question &quot;how can we use AI for
              XYZ&quot;.
            </p>
          </motion.div>

          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <motion.section key={section.heading} variants={staggerItem} className="space-y-4">
                <h2 className="text-2xl leading-tight tracking-tight sm:text-3xl">
                  {section.heading}
                </h2>

                <div className="space-y-5 text-base leading-8 text-stardust-a0/85 sm:text-lg">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default ThesisContent;
