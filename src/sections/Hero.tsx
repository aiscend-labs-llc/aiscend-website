import { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";

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
      className="relative min-h-[calc(100vh-4rem)] flex items-center bg-stardust-a40 overflow-hidden"
    >
      {/* Lottie background */}
      <div
        ref={lottieRef}
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 z-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/4 opacity-50 lg:opacity-70"
      />

      <div className="container relative z-10 py-16 lg:py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight lg:text-6xl">
            Your best people can&rsquo;t explain what they know.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            We sit with your experts, map how they actually think, and build AI
            systems around their real workflows. No reports. Working software.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
