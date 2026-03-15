import { useEffect, useRef, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  getInitialState,
  getViewportOptions,
  getViewportState,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

const YT_VIDEO_ID = "FWDWFBcO3fs";
const YT_START = 980; // 16:20
const YT_END = 1056; // 17:36

// Self-hosted paths (enable when Spencer cuts the clip)
const SELF_HOSTED_MP4 = "/video/cuban_clip.mp4";
const SELF_HOSTED_WEBM = "/video/cuban_clip.webm";
const POSTER = "/video/cuban_poster.jpg";
const USE_SELF_HOSTED = false;

declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

function ProblemAndVideo() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YT.Player | null>(null);
  const pollRef = useRef<number | null>(null);
  const hasAutoplayed = useRef(false);

  // Scroll compression: Problem slides up faster as user scrolls past Hero
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const problemY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [80, 0]
  );

  const stopTimePoll = useCallback(() => {
    if (pollRef.current !== null) {
      cancelAnimationFrame(pollRef.current);
      pollRef.current = null;
    }
  }, []);

  const startTimePoll = useCallback(() => {
    stopTimePoll();
    const poll = () => {
      if (!playerRef.current) return;
      try {
        const time = playerRef.current.getCurrentTime();
        if (time >= YT_END) {
          playerRef.current.pauseVideo();
          stopTimePoll();
          return;
        }
      } catch {
        // Player not ready
      }
      pollRef.current = requestAnimationFrame(poll);
    };
    pollRef.current = requestAnimationFrame(poll);
  }, [stopTimePoll]);

  const initPlayer = useCallback(() => {
    if (!videoContainerRef.current || playerRef.current) return;

    const container = videoContainerRef.current;
    const playerId = "yt-cuban-player";

    let el = container.querySelector(`#${playerId}`);
    if (!el) {
      el = document.createElement("div");
      el.id = playerId;
      container.appendChild(el);
    }

    playerRef.current = new window.YT.Player(playerId, {
      videoId: YT_VIDEO_ID,
      playerVars: {
        start: YT_START,
        end: YT_END,
        rel: 0,
        modestbranding: 1,
        playsinline: 1,
      },
      events: {
        onStateChange: (event: YT.OnStateChangeEvent) => {
          if (event.data === window.YT.PlayerState.PLAYING) {
            startTimePoll();
          } else {
            stopTimePoll();
          }
        },
      },
    });
  }, [startTimePoll, stopTimePoll]);

  // Load YouTube IFrame API
  useEffect(() => {
    if (USE_SELF_HOSTED) return;

    if (window.YT && window.YT.Player) {
      initPlayer();
      return;
    }

    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      initPlayer();
    };

    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }

    return () => {
      stopTimePoll();
    };
  }, [initPlayer, stopTimePoll]);

  // Autoplay when video is fully in viewport
  useEffect(() => {
    if (USE_SELF_HOSTED || shouldReduceMotion) return;

    const container = videoContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            !hasAutoplayed.current &&
            playerRef.current
          ) {
            try {
              playerRef.current.playVideo();
              hasAutoplayed.current = true;
            } catch {
              // Player not ready yet
            }
          }
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  return (
    <section ref={sectionRef} aria-label="Problem and Validation">
      {/* Anchor for #problem scroll target */}
      <div id="problem" style={{ scrollMarginTop: "6rem" }} />

      {/* Problem portion — light background */}
      <motion.div
        className="bg-stardust-a40 py-24"
        style={{ y: problemY }}
      >
        <div className="container">
          <motion.div
            initial={getInitialState(shouldReduceMotion)}
            whileInView={getViewportState(shouldReduceMotion)}
            viewport={getViewportOptions(shouldReduceMotion)}
            variants={staggerContainer}
            className="mx-auto max-w-3xl"
          >
            <motion.h2
              variants={staggerItem}
              className="text-3xl leading-tight tracking-tight lg:text-5xl"
            >
              The knowledge that runs your business isn&apos;t in your systems.
            </motion.h2>

            <motion.div
              variants={staggerItem}
              className="mt-8 space-y-6 text-base leading-8 text-stardust-a0/90 lg:text-lg"
            >
              <p>
                Your best employee reviews every design because she&apos;s the
                only person with 20 years of context. Your estimator prices jobs
                from gut feel trained over decades of wins and losses. Your
                retiring project manager carries institutional memory that no
                handbook has ever captured.
              </p>

              <p>
                This knowledge is the most valuable thing in your company. And
                right now it&apos;s walking out the door every evening, hoping to
                come back tomorrow.
              </p>

              <p>
                You&apos;ve heard you need AI. Everyone&apos;s heard that. The
                problem is that nobody asking &ldquo;how can we use AI?&rdquo; is
                asking the right question. The right question is: what does your
                best person know that nobody else knows, and how do we make that
                knowledge available to everyone?
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Light-to-dark transition gradient */}
      <div
        className="h-32"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-stardust-a40), var(--color-stardust-a0))",
        }}
      />

      {/* Anchor for #cuban-video scroll target */}
      <div id="cuban-video" style={{ scrollMarginTop: "6rem" }} />

      {/* Cuban Video portion — dark background */}
      <div className="section--dark bg-stardust-a0 py-24">
        <div className="container">
          <motion.div
            className="mx-auto max-w-4xl"
            initial={getInitialState(shouldReduceMotion)}
            whileInView={getViewportState(shouldReduceMotion)}
            viewport={getViewportOptions(shouldReduceMotion)}
            variants={staggerContainer}
          >
            <motion.h2
              variants={staggerItem}
              className="mb-8 text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
            >
              Companies don&apos;t need to understand AI. They need someone who
              understands their business and can build AI around it.
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="mb-12 max-w-3xl text-lg leading-relaxed text-stardust-a30"
            >
              Mark Cuban on TBPN, August 2025 — describing the exact opportunity
              we&apos;ve been executing on for two and a half years.
            </motion.p>

            <motion.div variants={staggerItem}>
              {USE_SELF_HOSTED ? (
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10">
                  <video
                    className="h-full w-full"
                    controls
                    preload="metadata"
                    poster={POSTER}
                    playsInline
                  >
                    <source src={SELF_HOSTED_WEBM} type="video/webm" />
                    <source src={SELF_HOSTED_MP4} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div
                  ref={videoContainerRef}
                  className="aspect-video w-full overflow-hidden rounded-xl border border-white/10"
                />
              )}
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="mt-6 text-sm text-stardust-a20"
            >
              Mark Cuban on{" "}
              <a
                href="https://www.youtube.com/watch?v=FWDWFBcO3fs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-stardust-a30"
              >
                TBPN
              </a>
              , August 2025
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProblemAndVideo;
