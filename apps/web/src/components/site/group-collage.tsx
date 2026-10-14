"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { galleryImages } from "@/lib/gallery-content";

// Three staggered columns; each drifts at its own speed as the section scrolls by.
const COLUMNS = [
  { indices: [0, 3, 6], shift: -60, offset: "" },
  { indices: [1, 4, 7], shift: 60, offset: "mt-10 sm:mt-16" },
  { indices: [2, 5, 8], shift: -30, offset: "mt-4 sm:mt-6" },
] as const;
const ASPECTS = ["aspect-[4/5]", "aspect-square", "aspect-[4/3]"] as const;

function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
      el.style.setProperty("--scroll", (p - 0.5).toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return ref;
}

export function GroupCollage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const collageRef = useScrollProgress<HTMLDivElement>();

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length)),
    []
  );
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, showPrev, showNext]);


  return (
    <>
      <div ref={collageRef} className="grid grid-cols-3 gap-2 sm:gap-3 [--scroll:0]">
        {COLUMNS.map((col, c) => (
          <div
            key={c}
            className={`flex flex-col gap-2 will-change-transform sm:gap-3 ${col.offset}`}
            style={{ transform: `translate3d(0, calc(var(--scroll) * ${col.shift}px), 0)` }}
          >
            {col.indices.map((i, row) => {
              const img = galleryImages[i];
              return (
                <Reveal key={img.src} delay={(c + row) * 90}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    className={`group relative block w-full overflow-hidden rounded-xl ring-1 ring-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${ASPECTS[(c + row) % ASPECTS.length]}`}
                    aria-label={`Open image: ${img.story}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-[var(--ease-out-expressive)] group-hover:scale-110"
                      sizes="(min-width: 1024px) 20vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                      <Maximize2 className="size-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <X className="size-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-8" />
          </button>
          <div
            className="flex max-w-[90vw] flex-col items-center gap-3 animate-in zoom-in-95 fade-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={galleryImages[openIndex].src}
              src={galleryImages[openIndex].src}
              alt={galleryImages[openIndex].alt}
              width={galleryImages[openIndex].width}
              height={galleryImages[openIndex].height}
              className="max-h-[80vh] w-auto max-w-[90vw] rounded-lg object-contain"
            />
            <p className="text-center text-sm text-white/70">
              {galleryImages[openIndex].story}
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="size-8" />
          </button>
        </div>
      )}
    </>
  );
}
