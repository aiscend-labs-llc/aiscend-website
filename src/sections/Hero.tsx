import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Typewriter } from "@/components/ui/typewriter-text";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex items-center py-16 md:py-20 bg-stardust-a40"
      aria-label="Hero"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          <div className="lg:col-span-7 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              AI doesn&rsquo;t know what your best people do.
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-muted-foreground">
              We sit with your experts, map how they actually think, and build
              custom AI systems around their real workflows. No reports. Working software.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-lg shadow-md">
                <a href="#contact">Talk to Us</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-lg shadow-md">
                <a href="#proof">See Our Work</a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 mt-10 lg:mt-0" aria-hidden="true">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
