"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { AnimationItem } from "lottie-web";

import { scrollToSection } from "@/lib/scroll";

const features = [
  {
    id: "strategy",
    title: "AI Strategy & Roadmap",
    description:
      'The "thinking before doing" work. We assess your AI readiness, identify and prioritize high-impact use cases, run build vs. buy analyses, and model ROI — so every move is backed by data.',
  },
  {
    id: "development",
    title: "Custom Solution Development",
    description:
      "Building and deploying AI and software solutions that work. From custom AI agents and conversational AI to full-stack web, mobile, and cloud applications tailored to your business.",
  },
  {
    id: "data",
    title: "Data Engineering & Machine Learning",
    description:
      "Unlock the value of your data across its entire lifecycle. We build industry-specific ML models, data pipelines, business intelligence dashboards, and analytics infrastructure from raw data to strategic insight.",
  },
  {
    id: "automation",
    title: "Agentic AI Automation",
    description:
      "AI-driven systems that work around the clock. We automate repetitive business processes with intelligent agents that adapt, learn, and scale — freeing your team to focus on strategic work.",
  },
  {
    id: "enablement",
    title: "AI Enablement & Governance",
    description:
      "Making AI stick inside organizations. Executive AI literacy programs, technical team upskilling, prompt engineering training, hands-on workshops, and MLOps governance strategy.",
  },
];

const LOTTIE_PATHS = [
  "/lottie/blocks_1.json",
  "/lottie/blocks_4.json",
  "/lottie/blocks_3.json",
  "/lottie/blocks_5.json",
  "/lottie/blocks_2.json",
];

function Solutions() {
  const [selection, setSelection] = useState(0);
  const lottieContainerRef = useRef<HTMLDivElement>(null);
  const animInstanceRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadAnimation() {
      const mod = await import("lottie-web");
      if (cancelled || !lottieContainerRef.current) return;

      if (animInstanceRef.current) {
        animInstanceRef.current.destroy();
        animInstanceRef.current = null;
      }

      const anim = mod.default.loadAnimation({
        container: lottieContainerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: LOTTIE_PATHS[selection],
        rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
      });

      // Crop the SVG viewBox to zoom into the center content area
      anim.addEventListener("DOMLoaded", () => {
        const svg = lottieContainerRef.current?.querySelector("svg");
        if (svg) {
          svg.setAttribute("viewBox", "480 170 960 740");
          svg.removeAttribute("width");
          svg.removeAttribute("height");
          svg.style.width = "100%";
          svg.style.height = "100%";
        }
      });

      animInstanceRef.current = anim;
    }

    loadAnimation();

    return () => {
      cancelled = true;
      if (animInstanceRef.current) {
        animInstanceRef.current.destroy();
        animInstanceRef.current = null;
      }
    };
  }, [selection]);

  return (
    <section id="solutions" className="py-24 bg-stardust-a40" aria-label="Solutions">
      <div className="container">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold text-pretty lg:text-5xl">
            Our Solutions
          </h2>
          <p className="text-muted-foreground lg:text-xl">
            End-to-end AI and data services — from strategy through
            implementation — to help your business work smarter.
          </p>
        </div>

        {/* Content: list + animation */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">
          {/* Feature list — 2 of 5 columns */}
          <ul className="space-y-2 lg:col-span-2">
            {features.map((feature, i) => (
              <li
                key={feature.id}
                className="group relative w-full cursor-pointer px-6 py-3 transition data-open:bg-accent"
                data-open={selection === i ? "true" : undefined}
                onClick={() => setSelection(i)}
              >
                <div className="flex items-center justify-between gap-x-2">
                  <div className="text-sm font-semibold text-accent-foreground">
                    {feature.title}
                  </div>
                  <div className="flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground group-data-open:bg-primary group-data-open:text-primary-foreground">
                    <ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-data-open:rotate-180" />
                  </div>
                </div>
                <div className="hidden text-sm font-medium group-data-open:block">
                  <p className="my-4 text-muted-foreground lg:my-6">
                    {feature.description}
                  </p>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="group/link flex items-center pb-3 text-sm text-accent-foreground cursor-pointer"
                  >
                    Get started{" "}
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Lottie — 3 of 5 columns */}
          <div className="lg:col-span-3 lg:pl-8">
            <div
              ref={lottieContainerRef}
              className="aspect-[4/3] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
