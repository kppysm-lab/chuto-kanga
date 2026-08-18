"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "./motion/useReducedMotion";
import { useIsMobile } from "./motion/useIsMobile";

const SESSION_KEY = "chuto-kanga-intro-seen";

// Desktop plays the full sequence (seal → depth settle → wordmark → veil).
// Mobile drops the depth-settle stage and compresses timing, per the brief's
// "opening animation should remain faster and simpler on mobile."
const TIMING = {
  desktop: {
    total: 1500,
    sealDelay: 60,
    sealDur: 450,
    settleDelay: 460 as number | undefined,
    settleDur: 300 as number | undefined,
    mastDelay: 620,
    mastDur: 500,
    veilDelay: 1150,
    veilDur: 350,
  },
  mobile: {
    total: 950,
    sealDelay: 40,
    sealDur: 300,
    settleDelay: undefined as number | undefined,
    settleDur: undefined as number | undefined,
    mastDelay: 320,
    mastDur: 350,
    veilDelay: 700,
    veilDur: 250,
  },
};

export default function IntroSequence() {
  // Defaults to "done" (renders nothing) so repeat visits — the common case —
  // never show even a one-frame flash of the overlay before JS decides to skip it.
  const [phase, setPhase] = useState<"playing" | "done">("done");
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const t = isMobile ? TIMING.mobile : TIMING.desktop;

  useEffect(() => {
    let alreadySeen = true;
    try {
      alreadySeen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // sessionStorage unavailable (e.g. private mode) — treat as already seen.
    }

    if (alreadySeen || reduced) return;

    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // ignore
    }

    // First-visit-only reveal: safe to skip in SSR/initial render, so this
    // exception to "no setState in effect" is intentional.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPhase("playing");
    document.documentElement.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setPhase("done");
      document.documentElement.style.overflow = "";
    }, t.total);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, isMobile]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[200] flex items-center justify-center bg-paper"
      style={{
        animation: `veil-out ${t.veilDur}ms ease-in forwards`,
        animationDelay: `${t.veilDelay}ms`,
      }}
    >
      <div
        className="flex flex-col items-center gap-5"
        style={
          t.settleDur !== undefined
            ? {
                animation: `depth-settle ${t.settleDur}ms ease-out forwards`,
                animationDelay: `${t.settleDelay}ms`,
              }
            : undefined
        }
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 64 64"
          style={{
            opacity: 0,
            animation: `seal-in ${t.sealDur}ms cubic-bezier(0.22,1,0.36,1) forwards`,
            animationDelay: `${t.sealDelay}ms`,
          }}
        >
          <circle cx="32" cy="32" r="24" fill="none" stroke="#b7312f" strokeWidth="2.5" />
          <text
            x="32"
            y="42"
            fontFamily="var(--font-shippori-mincho), serif"
            fontSize="26"
            fill="#b7312f"
            textAnchor="middle"
          >
            中
          </text>
        </svg>

        <div
          className="overflow-hidden"
          style={{
            clipPath: "inset(0 100% 0 0)",
            animation: `mast-mask-in ${t.mastDur}ms cubic-bezier(0.22,1,0.36,1) forwards`,
            animationDelay: `${t.mastDelay}ms`,
          }}
        >
          <p className="whitespace-nowrap font-serif text-2xl tracking-[0.2em] text-ink md:text-3xl">
            中東閑雅
          </p>
        </div>
      </div>
    </div>
  );
}
