import { Button } from "@/components/ui/button";

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
            <div className="flex h-[420px] items-center justify-center rounded-[2rem] border border-stardust-a30/80 bg-white/60 p-10 shadow-sm">
              <div className="space-y-4 text-center">
                <p className="text-2xl font-semibold text-stardust-a0 sm:text-3xl lg:text-4xl">
                  AI that solves real problems.
                </p>
                <p className="text-base text-stardust-a10 sm:text-lg">
                  Turn your human decisions into real AI systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
