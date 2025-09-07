import { useEffect, useRef } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'

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
          light: { 'cal-brand': '#222222' },
          dark: { 'cal-brand': '#F8F8FF' }
        },
        hideEventTypeDetails: false,
        layout: 'month_view'
      })
    })()
  }, [])

  return (
    <section id="contact" className="relative isolate overflow-hidden py-24 bg-[#222222]" aria-label="Contact">
      <div
        aria-hidden="true"
        ref={lottieContainerRef}
        className="pointer-events-none absolute inset-0 z-0"
      />
      <div className="relative z-10 container max-w-3xl text-[#F8F8FF]">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight !text-[#F8F8FF]">Let's Scale Together</h2>
          <p className="mt-3 text-[#F8F8FF]">Tell us about your project. We’ll reply within 1 business day.</p>
        </div>
        <div className="mt-10">
          <div className="h-[720px] sm:h-[820px] w-full overflow-auto rounded-md">
            <Cal
              namespace="30min"
              calLink="prismtech/30min"
              style={{ width: '100%', height: '100%', overflow: 'auto' }}
              config={{ layout: 'month_view' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


