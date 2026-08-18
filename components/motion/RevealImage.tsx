"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "./useReducedMotion";

export default function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  cursorLabel,
  priority = false,
  sizes = "100vw",
  interactive = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  cursorLabel?: string;
  priority?: boolean;
  /** Pass a tuned `sizes` attribute once real photography replaces the
   * placeholder art (e.g. "(min-width: 1024px) 33vw, 100vw" for a 3-col grid). */
  sizes?: string;
  /** Set true only when this image is wrapped in a real link — the hover
   * zoom is a click affordance and shouldn't appear on purely decorative
   * images (e.g. the homepage's Visual Interlude, an article's own hero). */
  interactive?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [intersected, setIntersected] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorActive, setCursorActive] = useState(false);
  const reduced = useReducedMotion();
  const visible = reduced || priority || intersected;

  useEffect(() => {
    if (reduced || priority) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced, priority]);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden ${
        cursorLabel ? "md:cursor-none" : ""
      } ${className}`}
      onMouseMove={(e) => {
        if (!cursorLabel) return;
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => cursorLabel && setCursorActive(true)}
      onMouseLeave={() => cursorLabel && setCursorActive(false)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover transition-transform duration-700 ease-out ${
          interactive ? "group-hover:scale-[1.02]" : ""
        } ${imgClassName}`}
        style={{
          clipPath: visible ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
          transform: visible ? undefined : "scale(1.06)",
          transitionProperty: "clip-path, transform",
          transitionDuration: reduced ? "1ms" : "1000ms",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
      {cursorLabel ? (
        <span
          aria-hidden
          className={`pointer-events-none absolute z-10 hidden h-16 w-16 items-center justify-center rounded-full border border-paper/70 bg-ink/40 text-[11px] tracking-[0.15em] text-paper backdrop-blur-sm transition-opacity duration-200 md:flex ${
            cursorActive ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          {cursorLabel}
        </span>
      ) : null}
    </div>
  );
}
