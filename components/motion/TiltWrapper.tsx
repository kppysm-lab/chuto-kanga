"use client";

import { useState, ReactNode, MouseEvent } from "react";
import { useReducedMotion } from "./useReducedMotion";
import { usePointerFine } from "./usePointerFine";

// Kept intentionally subtle — a hint of depth, not a gimmick.
const MAX_ROTATE_X = 1;
const MAX_ROTATE_Y = 1.5;

export default function TiltWrapper({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();
  const pointerFine = usePointerFine();
  const active = pointerFine && !reduced;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!active) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setRotate({
      x: (0.5 - py) * 2 * MAX_ROTATE_X,
      y: (px - 0.5) * 2 * MAX_ROTATE_Y,
    });
  }

  function handleMouseLeave() {
    setRotate({ x: 0, y: 0 });
  }

  return (
    <div className={className} style={{ perspective: "1200px" }}>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: active ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` : undefined,
          transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
