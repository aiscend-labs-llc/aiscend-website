import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { staggerContainer, staggerItem, fadeUp, defaultViewport } from "@/lib/animations"
import { scrollToSection } from "@/lib/scroll"
import { ArrowLeft } from "lucide-react"

function ThesisContent() {
  return (
    <div className="min-h-screen bg-stardust-a40">
      {/* Minimal header */}
      <header className="sticky top-0 z-50 border-b bg-stardust-a40/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a
            href="/"
            className="font-semibold font-brand text-xl text-foreground"
          >
            aiscend
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-md bg-stardust-a0 px-4 py-2 text-sm font-medium text-white hover:bg-stardust-a0/90 transition-colors"
          >
            Talk to Us
          </a>
        </div>
      </header>

      {/* Back link */}
      <div className="container max-w-3xl pt-10">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          Back to home
        </a>
      </div>

      {/* Content */}
      <article className="container max-w-3xl pb-24">
        <motion.div
          className="pt-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
            variants={staggerItem}
          >
            Our Thesis
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-relaxed text-muted-foreground italic"
            variants={staggerItem}
          >
            At Aiscend, we're about building real, impactful solutions — not
            consulting that doesn't go anywhere. This discovery helps us
            understand where we can create continued, measurable value for your
            team.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            variants={staggerItem}
          >
            Our AI Philosophy & Approach
          </motion.h2>

          <motion.div className="mt-8 space-y-6" variants={staggerItem}>
            <blockquote className="border-l-2 border-stardust-a20 pl-6 text-lg font-medium leading-relaxed">
              We DO NOT want you asking the question "how can we use AI for XYZ".
            </blockquote>

            <p className="text-base leading-relaxed text-muted-foreground">
              Non-AI specialists lack massive amounts of context and awareness on
              what "AI" really is, and are thus often misled or misinformed about
              its capabilities and types of tasks different types of Machine
              Learning can be applied to.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              The AI space is researched, tested and changing so rapidly, that
              unless you are constantly paying attention, it is essentially
              impossible to have even a relative understanding of what is possible
              now, and how to build a modular architecture/warehouse your
              company's data such that you are prepared to continuously adapt to
              the next wave.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              This is our job, let us do that for you. We then communicate the
              capabilities of the technology, how we recommend building it for
              your needs, and how it works in simpler terms. All you have to do is
              decide what work and impact will save you the most time and money.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            variants={staggerItem}
          >
            Capturing Tacit Knowledge
          </motion.h2>

          <motion.div className="mt-8 space-y-6" variants={staggerItem}>
            <p className="text-base leading-relaxed text-muted-foreground">
              A large part of what we do is aid in business process or SOP
              documentation for the AI age. This can mean doing documentation on a
              process you simply had not done or needed to do in the past, but it
              can also mean collecting a different form of data from a
              documentation process you are already doing, or structuring data you
              already have in a way that makes it usable.
            </p>

            <blockquote className="border-l-2 border-stardust-a20 pl-6 text-lg font-medium leading-relaxed">
              Our end goal in building AI systems is to capture the nuance,
              unspoken, or implicit understanding of your business and its
              operators. This data, the tacit knowledge that your 30+ year
              industry experts have yet often don't speak, is what makes for truly
              brilliant input data in AI systems.
            </blockquote>

            <p className="text-base leading-relaxed text-muted-foreground">
              This can even mean locally training a model on screen recording data
              of your workflows such that a custom agent can do menial work, or it
              can learn to compile all the necessary context from your history and
              warehoused data to put it right in front of your design team at the
              blink of an eye — making them 1.5-2x more efficient.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
        >
          <p className="text-muted-foreground mb-4">
            Ready to explore what's possible?
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-md bg-stardust-a0 px-6 py-3 text-sm font-medium text-white hover:bg-stardust-a0/90 transition-colors"
          >
            Talk to Us
          </a>
        </motion.div>
      </article>
    </div>
  )
}

export default ThesisContent
