"use client";

import { useEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <As
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-500 ease-[var(--ease-out-expressive)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </As>
  );
}
