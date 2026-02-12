import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { AIAdoptionChart } from "@/components/AIAdoptionChart"
import { scaleFade, staggerContainer, staggerItem, defaultViewport } from '@/lib/animations'

function Impact() {
  return (
    <section id="impact" className="section--dark py-24 bg-stardust-a0" aria-label="Impact">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <Badge variant="outline" className="mb-4 border-stardust-a40 text-stardust-a40">Industry Insight</Badge>
          </motion.div>
          <motion.h2
            className="text-4xl font-bold tracking-tight text-stardust-a40 font-saira"
            variants={staggerItem}
          >
            The AI Revolution is Here
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-stardust-a40"
            variants={staggerItem}
          >
            Don't get left behind.
          </motion.p>
          <motion.p
            className="mt-2 text-lg text-stardust-a40"
            variants={staggerItem}
          >
            Federal Reserve data shows rapid growth in AI adoption among businesses.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={scaleFade}
        >
          <AIAdoptionChart />
        </motion.div>
      </div>
    </section>
  )
}

export default Impact


