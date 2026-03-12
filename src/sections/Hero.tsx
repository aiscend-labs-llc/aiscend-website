import { motion } from "framer-motion";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Typewriter } from "@/components/ui/typewriter-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex items-center bg-stardust-a40"
    >
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Left: Text Content */}
          <motion.div
            className="max-w-xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="mb-6">
                AI consulting, implementation & support for growing businesses
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold leading-tight tracking-tight lg:text-6xl"
              variants={itemVariants}
            >
              Business Has Changed
            </motion.h1>

            <motion.p
              className="mt-5 text-lg text-muted-foreground sm:text-xl"
              variants={itemVariants}
            >
              We are your AI and Data Transformation Partner focused on helping
              you realize the value of AI through the power of your data.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row"
              variants={itemVariants}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="rounded-lg shadow-md"
              >
                Connect
              </Button>
              <Button
                onClick={() => scrollToSection("solutions")}
                variant="outline"
                size="lg"
                className="rounded-lg shadow-md"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Typewriter with DotPattern */}
          <motion.div
            className="mt-10 lg:mt-0"
            aria-hidden="true"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <div className="relative h-[420px] w-full overflow-visible">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2"
                style={{
                  maskImage:
                    "radial-gradient(360px circle at center, white, transparent)",
                  WebkitMaskImage:
                    "radial-gradient(360px circle at center, white, transparent)",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                }}
              >
                <DotPattern glow className="text-neutral-600/80" />
              </div>
              <div
                className="absolute inset-0 z-10 flex items-center justify-center"
              >
                <Typewriter
                  words={[
                    "AI that solves\nreal problems.",
                    "Turn your data\ninto decisions.",
                    "Build once.\nScale infinitely.",
                  ]}
                  speed={60}
                  delayBetweenWords={1500}
                  className="whitespace-pre-line text-center text-2xl font-semibold text-stardust-a0 sm:text-3xl lg:text-4xl"
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
