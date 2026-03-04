import { Search, Wrench, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";
import type { ElementType } from "react";

interface Feature {
  title: string;
  description: string;
  icon: ElementType<{ className?: string }>;
  color: string;
  ringColor: string;
  href: string;
}

const features: Feature[] = [
  {
    title: "Discover",
    description:
      "We dig into your data, workflows, and goals to find the highest-impact opportunities for AI.",
    icon: Search,
    color: "bg-teal-500",
    ringColor: "rgba(20, 184, 166, 0.4)",
    href: "#solutions",
  },
  {
    title: "Build",
    description:
      "Custom AI and data solutions designed around how your business actually operates.",
    icon: Wrench,
    color: "bg-blue-500",
    ringColor: "rgba(59, 130, 246, 0.4)",
    href: "#solutions",
  },
  {
    title: "Grow",
    description:
      "Ongoing support, training, and optimization to scale what works.",
    icon: TrendingUp,
    color: "bg-purple-500",
    ringColor: "rgba(168, 85, 247, 0.4)",
    href: "#solutions",
  },
];

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

const featureContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
    },
  },
};

const featureItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

function PulsingIcon({
  icon: Icon,
  color,
  ringColor,
}: {
  icon: ElementType<{ className?: string }>;
  color: string;
  ringColor: string;
}) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer pulse ring */}
      <motion.div
        className={cn("absolute rounded-lg", color)}
        style={{ width: 32, height: 32, opacity: 0 }}
        animate={{
          scale: [1, 1.8, 2.2],
          opacity: [0.35, 0.12, 0],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      {/* Inner pulse ring */}
      <motion.div
        className={cn("absolute rounded-lg", color)}
        style={{ width: 32, height: 32, opacity: 0 }}
        animate={{
          scale: [1, 1.4, 1.7],
          opacity: [0.3, 0.1, 0],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.4,
        }}
      />
      {/* Soft glow */}
      <div
        className="absolute rounded-lg"
        style={{
          width: 32,
          height: 32,
          boxShadow: `0 0 12px 2px ${ringColor}`,
        }}
      />
      {/* Icon container */}
      <div
        className={cn(
          "relative flex size-8 items-center justify-center rounded-lg p-1.5 text-primary-foreground",
          color
        )}
      >
        <Icon className="size-5" />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center bg-stardust-a40"
    >
      <div className="container flex-1 flex flex-col justify-center space-y-14 py-16 lg:py-20">
        {/* Main Hero Content */}
        <div className="relative">
          {/* Background Pattern - right side */}
          <div
            className="absolute inset-0 hidden overflow-hidden md:block"
            style={{
              maskImage:
                "radial-gradient(ellipse 150% 200% at 100% 50%, black 0%, black 25%, transparent 65%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 150% 200% at 100% 50%, black 0%, black 25%, transparent 65%)",
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2">
              <div className="relative size-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 360) / 12;
                    const radius = 80;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    return (
                      <div
                        key={i}
                        className="absolute size-3 rotate-45 bg-muted-foreground/20"
                        style={{
                          transform: `translate(${x}px, ${y}px) rotate(45deg)`,
                        }}
                      />
                    );
                  })}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * 360) / 8;
                    const radius = 50;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    return (
                      <div
                        key={i}
                        className="absolute size-2 rotate-45 bg-muted-foreground/15"
                        style={{
                          transform: `translate(${x}px, ${y}px) rotate(45deg)`,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Text Content */}
          <motion.div
            className="relative z-10 max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="flex flex-col gap-8">
              {/* Badge */}
              <motion.div
                className="flex w-fit items-center gap-2 border-b border-dashed"
                variants={itemVariants}
              >
                <div className="size-2 rounded-full bg-muted-foreground" />
                <p className="text-xs text-muted-foreground md:text-sm">
                  AI consulting, implementation & support for growing businesses
                </p>
              </motion.div>

              {/* Heading */}
              <motion.h1
                className="text-4xl leading-tight tracking-tight lg:text-6xl"
                variants={itemVariants}
              >
                We Help Businesses Put AI to Work.
              </motion.h1>

              {/* Buttons */}
              <motion.div
                className="flex flex-col gap-4 sm:flex-row"
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
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          className="flex max-w-3xl flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-8"
          initial="hidden"
          animate="visible"
          variants={featureContainerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={featureItemVariants}
              className={cn(
                "flex items-start px-4 py-2 md:py-0",
                index < features.length - 1 &&
                  "border-b border-dashed md:border-r md:border-b-0"
              )}
            >
              <a
                href={feature.href}
                className="group flex w-full flex-col gap-4 transition-opacity hover:opacity-80"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <PulsingIcon
                      icon={feature.icon}
                      color={feature.color}
                      ringColor={feature.ringColor}
                    />
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </div>
                  <ArrowRight className="size-6 shrink-0 text-muted-foreground" />
                </div>
                <p className="hidden max-w-xs text-sm leading-relaxed text-muted-foreground md:block">
                  {feature.description}
                </p>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
