import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web";
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
  const lottieRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadAnimation() {
      const mod = await import("lottie-web");
      if (cancelled || !lottieRef.current) return;

      animRef.current = mod.default.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/lottie/aiscend_dot.json",
        rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
      });
    }

    loadAnimation();

    return () => {
      cancelled = true;
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, []);

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
                ref={lottieRef}
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-70"
              />
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
