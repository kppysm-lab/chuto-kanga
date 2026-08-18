"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { useReducedMotion } from "./useReducedMotion";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [intersected, setIntersected] = useState(false);
  const reduced = useReducedMotion();
  const visible = reduced || intersected;

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } ${className}`}
      style={{
        transitionDuration: reduced ? "1ms" : "700ms",
        transitionDelay: reduced ? "0ms" : `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
