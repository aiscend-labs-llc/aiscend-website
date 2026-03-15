"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { AnimationItem } from "lottie-web";

import { scrollToSection } from "@/lib/scroll";

interface CaseStudy {
  label: string;
  problem: string;
  result: string;
  link?: string;
  linkText?: string;
}

interface Feature {
  id: string;
  title: string;
  description: string;
  caseStudies?: CaseStudy[];
}

const features: Feature[] = [
  {
    id: "strategy",
    title: "AI Strategy & Roadmap",
    description:
      'The "thinking before doing" work. We assess your AI readiness, identify and prioritize high-impact use cases, run build vs. buy analyses, and model ROI — so every move is backed by data.',
    caseStudies: [
      {
        label: "Floor Infrastructure",
        problem:
          "One person reviewed every project. Eleven QC cycles before anything shipped. Institutional knowledge lived in two people\u2019s heads. When they were unavailable, work stopped.",
        result:
          "Three integrated systems from a single discovery engagement \u2014 QC Pre-Flight targeting 50% of errors caught automatically, a Knowledge Base making 20 years of history searchable, and Expert Decision Capture preserving retiring specialists\u2019 reasoning.",
        link: "/case-study/floor-infrastructure",
        linkText: "See full case study \u2192",
      },
    ],
  },
  {
    id: "development",
    title: "Custom Solution Development",
    description:
      "Building and deploying AI and software solutions that work. From custom AI agents and conversational AI to full-stack web, mobile, and cloud applications tailored to your business.",
    caseStudies: [
      {
        label: "Operation Health & Wellness",
        problem:
          "Bay Area medical startup with a Stanford researcher on the founding team. Needed AI-native architecture from day one but didn\u2019t have the in-house team to build at the speed the market demanded.",
        result:
          "AI agent-driven application development. The app is being built at a fraction of the cost and timeline of a traditional dev shop, with the technical rigor a healthcare product requires.",
      },
    ],
  },
  {
    id: "data",
    title: "Data Engineering & Machine Learning",
    description:
      "Unlock the value of your data across its entire lifecycle. We build custom ML models, data pipelines, business intelligence dashboards, and analytics infrastructure from your raw data to strategic insight.",
    caseStudies: [
      {
        label: "Biogen",
        problem:
          "Biotech generates massive, complex datasets. The gap between having data and extracting actionable insight is where most companies stall.",
        result:
          "Workforce analytics across ~57,000 job postings from 40 US biotech peer companies (2023\u20132024). Competitive salary benchmarking showed Biogen pays top-of-market \u2014 $119K baseline after controlling for role and location. Hiring momentum analysis revealed a commercial-to-operations pivot, with Sales Manager postings down 28 percentage points. Time-to-fill averaging 30 days versus a 44-day peer average. Remote positioning gap identified: 6% of Biogen roles listed as remote versus 38% across peers.",
      },
      {
        label: "Luxury Fashion",
        problem:
          'A luxury company generating $1M+ profit per employee had a supply chain step they called one employee\u2019s "gut feel" \u2014 20 years of pattern recognition nobody had documented. Twenty years of unwarehoused data trapped with a vendor-locked ERP provider.',
        result:
          "Mapped the invisible decision-making chain. Discovery led to a Meta API and heuristics provider for fitment prediction \u2014 what started as knowledge capture became a full ML project. The company was losing $3.4M per year on ordering fitment. A 2% return rate reduction translates to significant savings at their margin profile.",
      },
    ],
  },
  {
    id: "automation",
    title: "Agentic AI Automation",
    description:
      "AI-driven systems that work around the clock. We automate repetitive business processes with intelligent agents that adapt, learn, and scale \u2014 freeing your team to focus on strategic work.",
    caseStudies: [
      {
        label: "Cybersecurity",
        problem:
          "Cybersecurity contracts are dense, technical, and high-stakes. Turnaround on proposals and reviews was the bottleneck.",
        result:
          "AI agent for automated proposal writing and contract review. Faster turnaround without sacrificing the precision the domain demands.",
      },
      {
        label: "Supply Chain Logistics",
        problem:
          "A company that allocates trucks and finds contractors. Proposal speed means contract wins, but generating accurate proposals was slow and manual.",
        result:
          "Same pattern as cybersecurity \u2014 AI agent for proposal writing and review. Simpler domain, still high-value. Faster proposals, more contracts won.",
      },
    ],
  },
  {
    id: "enablement",
    title: "AI Enablement & Governance",
    description:
      "Making AI stick inside your organization. Executive AI literacy programs, technical team upskilling, prompt engineering training, hands-on workshops, and governance strategy designed for your team.",
  },
];

const LOTTIE_PATHS = [
  "/lottie/blocks_1.json",
  "/lottie/blocks_4.json",
  "/lottie/blocks_3.json",
  "/lottie/blocks_5.json",
  "/lottie/blocks_2.json",
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Problem</p>
        <p className="mt-1 text-sm text-muted-foreground">{study.problem}</p>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Result</p>
        <p className="mt-1 text-sm text-muted-foreground">{study.result}</p>
      </div>
      {study.link && (
        <a
          href={study.link}
          className="group/cs inline-flex items-center text-sm font-medium text-accent-foreground hover:underline"
        >
          {study.linkText || "Learn more"}
          <ArrowRight className="ml-1.5 size-3.5 transition-transform group-hover/cs:translate-x-1" />
        </a>
      )}
    </div>
  );
}

function Solutions() {
  const [selection, setSelection] = useState(0);
  const [activeTab, setActiveTab] = useState<Record<number, "service" | "casestudy">>({});
  const [activeCaseStudy, setActiveCaseStudy] = useState<Record<number, number>>({});
  const lottieContainerRef = useRef<HTMLDivElement>(null);
  const animInstanceRef = useRef<AnimationItem | null>(null);

  const getTab = (i: number) => activeTab[i] || "service";
  const getCaseStudyIdx = (i: number) => activeCaseStudy[i] || 0;

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
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold text-pretty lg:text-5xl">
            Our Solutions
          </h2>
          <p className="text-muted-foreground lg:text-xl">
            End-to-end AI and data services — from strategy through
            implementation — to help your business work smarter.
          </p>
          <p className="mt-3 text-muted-foreground lg:text-lg">
            Every system we build starts with your people and your process. Nothing is off the shelf.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">
          <ul className="space-y-2 lg:col-span-2">
            {features.map((feature, i) => {
              const isOpen = selection === i;
              const hasCaseStudies = feature.caseStudies && feature.caseStudies.length > 0;
              const tab = getTab(i);
              const csIdx = getCaseStudyIdx(i);

              return (
                <li
                  key={feature.id}
                  className="group relative w-full cursor-pointer px-6 py-3 transition data-open:bg-accent"
                  data-open={isOpen ? "true" : undefined}
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

                  {isOpen && (
                    <div className="text-sm font-medium">
                      {hasCaseStudies && (
                        <div className="mt-3 flex gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveTab((prev) => ({ ...prev, [i]: "service" }));
                            }}
                            className={`cursor-pointer rounded-full px-3 py-1 text-xs font-semibold transition ${
                              tab === "service"
                                ? "bg-primary text-primary-foreground"
                                : "bg-accent text-accent-foreground hover:bg-primary/10"
                            }`}
                          >
                            Service
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveTab((prev) => ({ ...prev, [i]: "casestudy" }));
                            }}
                            className={`cursor-pointer rounded-full px-3 py-1 text-xs font-semibold transition ${
                              tab === "casestudy"
                                ? "bg-primary text-primary-foreground"
                                : "bg-accent text-accent-foreground hover:bg-primary/10"
                            }`}
                          >
                            Case Study
                          </button>
                        </div>
                      )}

                      {tab === "service" ? (
                        <>
                          <p className="my-4 text-muted-foreground lg:my-6">
                            {feature.description}
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollToSection("contact");
                            }}
                            className="group/link flex items-center pb-3 text-sm text-accent-foreground cursor-pointer"
                          >
                            Get started{" "}
                            <ArrowRight className="ml-2 size-4 transition-transform group-hover/link:translate-x-1" />
                          </button>
                        </>
                      ) : (
                        <div className="my-4 lg:my-6">
                          {feature.caseStudies && feature.caseStudies.length > 1 && (
                            <div className="mb-4 flex gap-2">
                              {feature.caseStudies.map((cs, j) => (
                                <button
                                  key={cs.label}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveCaseStudy((prev) => ({ ...prev, [i]: j }));
                                  }}
                                  className={`cursor-pointer text-xs font-medium px-2.5 py-0.5 rounded border transition ${
                                    csIdx === j
                                      ? "border-primary bg-primary/10 text-accent-foreground"
                                      : "border-stardust-a30 text-muted-foreground hover:border-primary/50"
                                  }`}
                                >
                                  {cs.label}
                                </button>
                              ))}
                            </div>
                          )}
                          {feature.caseStudies && (
                            <CaseStudyCard study={feature.caseStudies[csIdx] || feature.caseStudies[0]} />
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

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
