import { useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import Cal, { getCalApi } from '@calcom/embed-react'
import { Badge } from "@/components/ui/badge"
import { scaleFade, staggerContainer, staggerItem, defaultViewport } from '@/lib/animations'

function Contact() {
  const lottieContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let isCancelled = false
    let animationInstance: { destroy: () => void } | null = null

    async function load() {
      const mod = await import('lottie-web')
      if (isCancelled || !lottieContainerRef.current) return

      animationInstance = mod.default.loadAnimation({
        container: lottieContainerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/lottie/floatingshapes.json',
        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
      })
    }

    load()

    return () => {
      isCancelled = true
      if (animationInstance) {
        animationInstance.destroy()
      }
    }
  }, [])

  // Configure Cal.com UI theme and layout
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#1A1A40' },
          dark: { 'cal-brand': '#F5F5FF' }
        },
        hideEventTypeDetails: false,
        layout: 'month_view'
      })
    })()
  }, [])

  return (
    <section id="contact" className="relative isolate overflow-hidden py-24 bg-stardust-a0" aria-label="Contact">
      <div
        aria-hidden="true"
        ref={lottieContainerRef}
        className="pointer-events-none absolute inset-0 z-0"
      />
      <div className="relative z-10 container max-w-3xl text-stardust-a40">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <Badge variant="outline" className="mb-4 border-stardust-a40 text-stardust-a40">Get In Touch</Badge>
          </motion.div>
          <motion.h2
            className="text-3xl font-semibold tracking-tight !text-stardust-a40"
            variants={staggerItem}
          >
            Let's Scale Together
          </motion.h2>
          <motion.p className="mt-3 text-stardust-a40" variants={staggerItem}>
            Let's discuss how Prism can elevate your business.
          </motion.p>
        </motion.div>
        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={scaleFade}
        >
          <div className="h-[720px] sm:h-[820px] w-full overflow-auto rounded-md">
            <Cal
              namespace="30min"
              calLink="prismtech/30min"
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


