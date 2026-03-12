import { motion } from "framer-motion"
import { CirclePlay } from "lucide-react"
import { staggerContainer, staggerItem, defaultViewport } from '@/lib/animations'

// Set to a YouTube video ID to enable the embed (e.g., "dQw4w9WgXcQ")
const YOUTUBE_VIDEO_ID: string | null = null;

function Impact() {
  return (
    <section id="impact" className="section--dark py-24 bg-stardust-a0" aria-label="Impact">
      <div className="container">
        <motion.div
          className="mx-auto max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            {YOUTUBE_VIDEO_ID ? (
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-xl border border-white/10 bg-white/5">
                <CirclePlay className="size-16 text-stardust-a40/40" />
                <p className="text-lg text-stardust-a40/60">Video Coming Soon</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Impact
