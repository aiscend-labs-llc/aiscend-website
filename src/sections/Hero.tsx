import { motion } from "framer-motion";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Typewriter } from "@/components/ui/typewriter-text";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex items-center py-16 md:py-20 bg-stardust-a40"
      aria-label="Hero"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          <motion.div
            className="lg:col-span-7 max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
              variants={staggerItem}
            >
              AI doesn&rsquo;t know what your best people do.
            </motion.h1>

            <motion.p
              className="mt-5 text-lg sm:text-xl text-muted-foreground"
              variants={staggerItem}
            >
              We sit with your experts, map how they actually think, and build AI
              systems around their real workflows. No reports. Working software.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row"
              variants={staggerItem}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="rounded-lg shadow-md"
              >
                Talk to Us
              </Button>
              <Button
                onClick={() => scrollToSection("proof")}
                variant="outline"
                size="lg"
                className="rounded-lg shadow-md"
              >
                See Our Work
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
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[720px] h-[720px] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(360px_circle_at_center,white,transparent)] [-webkit-mask-image:radial-gradient(360px_circle_at_center,white,transparent)] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-position:center]">
                <DotPattern glow className="text-neutral-600/80" />
              </div>
              <div className="absolute inset-0 z-10 flex items-start justify-center pt-[115px] sm:pt-[147px]">
                <Typewriter
                  text={[
                    "AI that solves\nreal problems.",
                    "Turn your human decisions\ninto real AI systems.",
                  ]}
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
  );
}

export default Hero;
