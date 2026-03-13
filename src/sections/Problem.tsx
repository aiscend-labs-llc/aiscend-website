import { motion, useReducedMotion } from "framer-motion";

import { defaultViewport, staggerContainer, staggerItem } from "@/lib/animations";

function Problem() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="problem" className="bg-stardust-a40 py-24" aria-label="Problem">
      <div className="container">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mx-auto max-w-3xl"
        >
          <motion.h2 variants={staggerItem} className="text-3xl leading-tight tracking-tight lg:text-5xl">
            The knowledge that runs your business isn&apos;t in your systems.
          </motion.h2>

          <motion.div variants={staggerItem} className="mt-8 space-y-6 text-base leading-8 text-stardust-a0/90 lg:text-lg">
            <p>
              Your best employee reviews every design because she&apos;s the only person with 20 years of context. Your estimator
              prices jobs from gut feel trained over decades of wins and losses. Your retiring project manager carries
              institutional memory that no handbook has ever captured.
            </p>

            <p>
              This knowledge is the most valuable thing in your company. And right now it&apos;s walking out the door every
              evening, hoping to come back tomorrow.
            </p>
          </motion.div>

          <motion.blockquote
            variants={staggerItem}
            className="mt-10 border-l-2 border-accent pl-6 text-lg leading-9 text-stardust-a0 lg:text-2xl"
          >
            You&apos;ve heard you need AI. Everyone&apos;s heard that. The problem is that nobody asking &quot;how can we use AI?&quot;
            is asking the right question. The right question is: what does your best person know that nobody else knows,
            and how do we make that knowledge available to everyone?
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default Problem;
