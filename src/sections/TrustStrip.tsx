import { motion } from "framer-motion";

import { defaultViewport, staggerContainer, staggerItem } from "@/lib/animations";

const trustMarkers = [
  "Biogen",
  "Disney, Apple & Google clients",
  "Stanford founding team",
  "$1M profit/employee",
  "Defense & government",
  "40+ biotech companies analyzed",
];

function TrustStrip() {
  return (
    <section id="proof" className="py-16 bg-stardust-a40" aria-label="Proof">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={staggerItem} className="text-base leading-8 text-stardust-a0/90 lg:text-lg">
            <p>
              <span className="font-semibold">The pattern is always the same.</span> An established
              company. Decades of expertise locked in a few people&apos;s heads. Systems that don&apos;t
              talk to each other. A senior person who&apos;s become the bottleneck because they&apos;re
              the only one who knows enough.
            </p>
            <p className="mt-4">
              We find the knowledge, capture it, and build systems around it. The industry changes
              every time. The approach doesn&apos;t. The solution is always custom.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-wrap gap-3"
          >
            {trustMarkers.map((marker) => (
              <span
                key={marker}
                className="rounded-full border border-stardust-a30 bg-white/40 px-4 py-2 text-sm font-medium text-stardust-a10"
              >
                {marker}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default TrustStrip;
