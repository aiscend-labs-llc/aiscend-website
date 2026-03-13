import { motion } from "framer-motion"
import { staggerContainer, staggerItem, defaultViewport } from '@/lib/animations'

// Self-hosted paths (preferred — enable when Spencer cuts the clip)
const SELF_HOSTED_MP4 = "/video/cuban_clip.mp4"
const SELF_HOSTED_WEBM = "/video/cuban_clip.webm"
const POSTER = "/video/cuban_poster.jpg"

// YouTube fallback
const YT_VIDEO_ID = "FWDWFBcO3fs"
const YT_START = 975  // 16:15
const YT_END = 1095   // 18:15

// Set to true when self-hosted files are in /public/video/
const USE_SELF_HOSTED = false

function CubanVideo() {
  return (
    <section id="cuban-video" className="section--dark py-24 bg-stardust-a0" aria-label="Cuban Video">
      <div className="container">
        <motion.div
          className="mx-auto max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.h2
            variants={staggerItem}
            className="mb-8 text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            "There are 33 million companies in this country. They all need this."
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="mb-12 max-w-3xl text-lg leading-relaxed text-stardust-a30"
          >
            Mark Cuban on TBPN, August 2025. He describes the exact opportunity
            Aiscend has been executing on for two and a half years: young,
            technical teams walking into established businesses and translating AI
            capabilities into operational value. Companies don't need to
            understand AI. They need someone who understands their business and
            can build around it.
          </motion.p>

          <motion.div variants={staggerItem}>
            {USE_SELF_HOSTED ? (
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10">
                <video
                  className="h-full w-full"
                  controls
                  preload="metadata"
                  poster={POSTER}
                  playsInline
                >
                  <source src={SELF_HOSTED_WEBM} type="video/webm" />
                  <source src={SELF_HOSTED_MP4} type="video/mp4" />
                </video>
              </div>
            ) : (
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${YT_VIDEO_ID}?start=${YT_START}&end=${YT_END}&rel=0&modestbranding=1`}
                  title="Mark Cuban on Implementing AI in Business — TBPN"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="mt-6 text-sm text-stardust-a20"
          >
            Mark Cuban on{" "}
            <a
              href="https://www.youtube.com/watch?v=FWDWFBcO3fs"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-stardust-a30"
            >
              TBPN
            </a>
            , August 2025
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default CubanVideo
