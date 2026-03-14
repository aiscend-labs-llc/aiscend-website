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
            Business Has Changed
          </motion.h2>

          <motion.div variants={staggerItem} className="mt-8 space-y-6 text-base leading-8 text-stardust-a0/90 lg:text-lg">
            <p>
              Your best employee reviews every design because she&apos;s the only person with 20 years of context. Your estimator
              prices jobs from gut feel trained over decades of wins and losses. Your retiring project manager carries
              institutional memory that no handbook has ever captured.
            </p>

            <p>
              This knowledge is the most valuable thing in your company. And right now it&apos;s walking out the door
              and AI is walking in.
            </p>
          </motion.div>

          <motion.blockquote
            variants={staggerItem}
            className="mt-10 border-l-2 border-accent pl-6 text-lg leading-9 text-stardust-a0 lg:text-2xl"
          >
            It&apos;s time to capture knowledge so AI works like your best worker.
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default Problem;
