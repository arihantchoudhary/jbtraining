"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Site-wide motion, driven by data attributes so sections can stay server components:
//   data-split="load" | "scroll"  headline letters/words rise into place
//   data-parallax="<px>"           element drifts by ±px while its parent scrolls through
//   data-scroll-out                element lifts and fades as its section scrolls away
//   data-marquee="1" | "-1"        row slides sideways with scroll, in that direction
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = new Lenis({ autoRaf: false, anchors: { offset: -72 } });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
        const onLoad = el.dataset.split === "load";
        SplitText.create(el, {
          type: "words,chars",
          mask: onLoad ? "chars" : "words",
          autoSplit: true,
          onSplit(self) {
            gsap.set(el, { visibility: "visible" });
            return gsap.from(onLoad ? self.chars : self.words, {
              yPercent: 110,
              duration: onLoad ? 1 : 0.8,
              delay: onLoad ? 0.15 : 0,
              ease: "expo.out",
              stagger: onLoad ? 0.04 : 0.06,
              scrollTrigger: onLoad ? undefined : { trigger: el, start: "top 88%", once: true },
            });
          },
        });
      });

      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const distance = Number(el.dataset.parallax) || 0;
        gsap.fromTo(
          el,
          { y: -distance },
          {
            y: distance,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      document.querySelectorAll<HTMLElement>("[data-scroll-out]").forEach((el) => {
        gsap.to(el, {
          y: -120,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el.closest("section") ?? el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      document.querySelectorAll<HTMLElement>("[data-marquee]").forEach((el) => {
        const forward = el.dataset.marquee === "1";
        gsap.fromTo(
          el,
          { xPercent: forward ? -30 : 0 },
          {
            xPercent: forward ? 0 : -30,
            ease: "none",
            scrollTrigger: {
              trigger: el.closest("section") ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
