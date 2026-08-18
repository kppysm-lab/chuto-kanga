"use client";

import RevealImage from "./RevealImage";
import { useParallax } from "./useParallax";

export default function ParallaxImage({
  src,
  alt,
  className = "",
  sizes,
  speed = 0.08,
  interactive = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  speed?: number;
  interactive?: boolean;
}) {
  const { ref, style } = useParallax(speed);

  return (
    <div ref={ref} style={style}>
      <RevealImage src={src} alt={alt} className={className} sizes={sizes} interactive={interactive} />
    </div>
  );
}
