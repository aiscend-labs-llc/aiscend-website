import { DotPattern } from "@/components/magicui/dot-pattern";
import { Typewriter } from "@/components/ui/typewriter-text";

function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center py-16 md:py-20 bg-[#F8F8FF]" aria-label="Hero">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          <div className="lg:col-span-7 max-w-2xl">
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] font-saira">Business Has Changed</h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-600">Prism is a NY-based tech consultancy specializing in workflow automation, AI enablement, and custom software development for small to medium enterprises.</p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-[--color-brand] text-white px-5 py-3 text-sm font-medium hover:opacity-90">Book a free consult</a>
            </div>
          </div>

          <div className="lg:col-span-5 mt-10 lg:mt-0" aria-hidden="true">
            <div className="relative w-full h-[420px] overflow-visible">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[720px] h-[720px] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(360px_circle_at_center,white,transparent)] [-webkit-mask-image:radial-gradient(360px_circle_at_center,white,transparent)] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-position:center]"
              >
                <DotPattern glow className="text-neutral-600/80" />
              </div>
              <div className="absolute inset-0 z-10 flex items-start justify-center pt-[115px] sm:pt-[147px]" data-hero-visual>
                <Typewriter
                  text={["Automate workflows.", "Enable AI.", "Ship faster."]}
                  speed={90}
                  loop
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#333333]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


