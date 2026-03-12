import { CircleArrowOutUpRight } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const NAV = [
  { label: "Home", section: "hero" },
  { label: "Impact", section: "impact" },
  { label: "Solutions", section: "solutions" },
  { label: "Contact", section: "contact" },
];

const SOCIAL = [
  { label: "Linkedin", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://x.com" },
];

function Footer() {
  return (
    <footer id="footer" className="bg-stardust-a40 pb-0">
      <div className="container pt-14 pb-8">
        {/* Top row: email + nav + social */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium tracking-tight text-muted-foreground">
              Get in touch
            </span>
            <a
              className="text-2xl font-semibold tracking-tight hover:opacity-80 transition-opacity lg:text-3xl"
              href="mailto:info@prismtech.ai"
            >
              info@prismtech.ai
            </a>
          </div>
          <div className="flex gap-16">
            <div>
              <p className="mb-2 text-xs font-medium tracking-tight text-foreground/40">
                Navigate
              </p>
              <ul className="space-y-0.5">
                {NAV.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => scrollToSection(item.section)}
                      className="text-base font-semibold tracking-tight hover:opacity-70 transition-opacity cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium tracking-tight text-foreground/40">
                Social
              </p>
              <ul className="space-y-0.5">
                {SOCIAL.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1.5 text-base font-semibold tracking-tight"
                    >
                      {item.label}
                      <CircleArrowOutUpRight className="size-3 text-muted-foreground/50 group-hover:text-foreground" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Wordmark */}
        <div className="mt-6 text-[11vw] font-semibold tracking-tighter leading-none lg:text-right lg:text-[8vw]">
          aiscend<sup className="text-[0.35em] font-light align-super">&reg;</sup>
        </div>
      </div>

      {/* Bottom bar - edge to edge dark */}
      <div className="bg-stardust-a0">
        <div className="container flex h-14 flex-col items-center justify-center gap-1 text-sm tracking-tight text-stardust-a40 sm:h-16 sm:flex-row sm:justify-between">
          <p className="text-stardust-a40/50">
            &copy;{new Date().getFullYear()} Aiscend. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-stardust-a40/50 transition-colors hover:text-stardust-a40">
              Privacy Policy
            </a>
            <a href="#" className="text-stardust-a40/50 transition-colors hover:text-stardust-a40">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
