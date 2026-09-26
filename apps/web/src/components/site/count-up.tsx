"use client";

import { useEffect, useRef, useState } from "react";

const EASE_OUT_CUBIC = (t: number) => 1 - Math.pow(1 - t, 3);

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function CountUp({
  target,
  suffix = "",
  duration = 900,
  className = "",
}: {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(() => (prefersReducedMotion() ? target : 0));

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.round(EASE_OUT_CUBIC(progress) * target));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
