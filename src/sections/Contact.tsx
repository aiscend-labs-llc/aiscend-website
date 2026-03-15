import { useEffect } from 'react'
import { motion, useReducedMotion } from "framer-motion"
import Cal, { getCalApi } from '@calcom/embed-react'
import { Badge } from "@/components/ui/badge"
import { DotPattern } from "@/components/magicui/dot-pattern"
import {
  getInitialState,
  getViewportOptions,
  getViewportState,
  scaleFade,
  staggerContainer,
  staggerItem,
} from '@/lib/animations'

function Contact() {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#1A3A5C' },
          dark: { 'cal-brand': '#F5F5FF' }
        },
        hideEventTypeDetails: false,
        layout: 'month_view'
      })
    })()
  }, [])

  return (
    <section id="contact" className="ambient-fade-out relative isolate overflow-hidden py-24 bg-black" aria-label="Contact">
      {/* Top-center dot cluster */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 z-0 w-[600px] h-[400px] [mask-image:radial-gradient(250px_circle_at_center,white,transparent)] [-webkit-mask-image:radial-gradient(250px_circle_at_center,white,transparent)]"
      >
        <DotPattern glow cr={1.2} width={20} height={20} dotClassName="text-stardust-a40/25" />
      </div>

      {/* Bottom-right dot cluster */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-16 z-0 w-[500px] h-[500px] [mask-image:radial-gradient(220px_circle_at_center,white,transparent)] [-webkit-mask-image:radial-gradient(220px_circle_at_center,white,transparent)]"
      >
        <DotPattern glow cr={1} width={18} height={18} dotClassName="text-stardust-a40/20" />
      </div>

      {/* Left-center dot cluster */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-16 -translate-y-1/2 z-0 w-[400px] h-[500px] [mask-image:radial-gradient(180px_circle_at_center,white,transparent)] [-webkit-mask-image:radial-gradient(180px_circle_at_center,white,transparent)]"
      >
        <DotPattern glow cr={0.9} width={22} height={22} dotClassName="text-stardust-a40/15" />
      </div>

      <div className="relative z-10 container max-w-3xl text-stardust-a40">
        <motion.div
          className="text-center"
          initial={getInitialState(shouldReduceMotion)}
          whileInView={getViewportState(shouldReduceMotion)}
          viewport={getViewportOptions(shouldReduceMotion)}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <Badge variant="outline" className="mb-4 border-stardust-a40 text-stardust-a40">Get In Touch</Badge>
          </motion.div>
          <motion.h2
            className="text-3xl font-semibold tracking-tight !text-stardust-a40"
            variants={staggerItem}
          >
            Let's Build AI Around Humans
          </motion.h2>
          <motion.p className="mt-3 text-stardust-a40" variants={staggerItem}>
            No pitch deck. No 47-slide proposal. We'll talk about what's actually going on in your business and figure out if we can help. If we can't, or if it's not worth your time and money, we'll tell you. If there's a fit, what we build will be designed around your business. Not a template.
          </motion.p>
        </motion.div>
        <motion.div
          className="mt-10"
          initial={getInitialState(shouldReduceMotion)}
          whileInView={getViewportState(shouldReduceMotion)}
          viewport={getViewportOptions(shouldReduceMotion)}
          variants={scaleFade}
        >
          <div className="ambient-shell h-[720px] sm:h-[820px] w-full overflow-auto rounded-lg p-px">
            <Cal
              namespace="30min"
              // TODO: update to confirmed Aiscend Cal.com link
              calLink="aiscend/30min"
              style={{ width: '100%', height: '100%', overflow: 'auto' }}
              config={{ layout: 'month_view' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
