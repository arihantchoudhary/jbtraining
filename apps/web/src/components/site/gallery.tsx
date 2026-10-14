"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { galleryImages } from "@/lib/gallery-content";

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <section className="bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Inside JB Training
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Real sessions, real athletes &mdash; a look at what training with
            Jamal actually looks like.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative aspect-square overflow-hidden rounded-lg ring-1 ring-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label={`Open image: ${img.story}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-[var(--ease-out-expressive)] group-hover:scale-110"
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 25vw, 33vw"
                priority={i < 3}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                <Maximize2 className="size-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </button>
          ))}
        </div>
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
    </section>
  );
}
