import { motion } from "framer-motion";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Typewriter } from "@/components/ui/typewriter-text";
import { Button } from "@/components/ui/button";
import { scrollToSection } from '@/lib/scroll';
import { fadeIn, staggerContainer, staggerItem } from '@/lib/animations';

function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center py-16 md:py-20 bg-stardust-a40" aria-label="Hero">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          <motion.div
            className="lg:col-span-7 max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] font-saira"
              variants={staggerItem}
            >
              Business Has Changed
            </motion.h1>
            <motion.p
              className="mt-5 text-lg sm:text-xl text-gray-600"
              variants={staggerItem}
            >
              We are your AI and Data Transformation Partner focused on helping you realize the value of AI through the power of your data.
            </motion.p>
            <motion.div
              className="mt-8 flex items-center gap-3"
              variants={staggerItem}
            >
              <Button onClick={() => scrollToSection('contact')} className="bg-stardust-a0 text-stardust-a40 hover:bg-stardust-a0/90 font-chakra">
                Book a Free Consultation
              </Button>
              <Button onClick={() => scrollToSection('solutions')} variant="outline" className="border-stardust-a0 text-stardust-a0 hover:bg-stardust-a0 hover:text-stardust-a40 font-chakra">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 mt-10 lg:mt-0"
            aria-hidden="true"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="relative w-full h-[420px] overflow-visible">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[720px] h-[720px] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(360px_circle_at_center,white,transparent)] [-webkit-mask-image:radial-gradient(360px_circle_at_center,white,transparent)] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-position:center]"
              >
                <DotPattern glow className="text-neutral-600/80" />
              </div>
              <div className="absolute inset-0 z-10 flex items-start justify-center pt-[115px] sm:pt-[147px]" data-hero-visual>
                <Typewriter
                  text={["AI that solves\nreal problems.", "Turn your data\ninto decisions.", "Build once.\nScale infinitely."]}
                  speed={60}
                  deleteSpeed={10}
                  loop
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-stardust-a0 whitespace-pre-line text-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero


