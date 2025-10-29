import { DotPattern } from "@/components/magicui/dot-pattern";
import { Typewriter } from "@/components/ui/typewriter-text";
import { Button } from "@/components/ui/button";
import { scrollToSection } from '@/lib/scroll';

function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center py-16 md:py-20 bg-[#F8F8FF]" aria-label="Hero">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          <div className="lg:col-span-7 max-w-2xl">
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] font-saira">Business Has Changed</h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-600">We are your AI and Data Transformation Partner focused on helping you realize the value of AI through the power of your data.</p>
            <div className="mt-8 flex items-center gap-3">
              <Button onClick={() => scrollToSection('contact')} className="bg-[#333] text-[#F8F8FF] hover:bg-[#333]/90 font-chakra">
                Book a Free Consultation
              </Button>
              <Button onClick={() => scrollToSection('services')} variant="outline" className="border-[#333] text-[#333] hover:bg-[#333] hover:text-[#F8F8FF] font-chakra">
                Learn More
              </Button>
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
                  text={["AI that solves\nreal problems.", "Turn your data\ninto decisions.", "Build once.\nScale infinitely."]}
                  speed={60}
                  deleteSpeed={10}
                  loop
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#333333] whitespace-pre-line text-center"
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


