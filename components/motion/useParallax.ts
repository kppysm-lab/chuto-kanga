"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/** Subtle differential scroll motion for a single element — not for
 * overuse. `speed` around 0.05–0.1 reads as depth, not a gimmick. */
export function useParallax(speed = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let ticking = false;

    function update() {
      const el = ref.current;
      if (el) setOffset(el.getBoundingClientRect().top * speed);
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced, speed]);

  return {
    ref,
    style: reduced ? undefined : { transform: `translateY(${offset}px)` },
  };
}
