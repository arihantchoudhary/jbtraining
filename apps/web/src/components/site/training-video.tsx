"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

export function TrainingVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-10 sm:grid-cols-2">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Watch Jamal Coach
          </h2>
          <p className="mt-6 text-muted-foreground">
            A real look at a JB Training session &mdash; coaching cues,
            conditioning drills, and the energy Jamal brings to every group he
            trains.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative mx-auto aspect-[9/16] w-full max-w-xs overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-foreground/10">
            <video
              ref={videoRef}
              src="/videos/rebels-training.mp4"
              poster="/images/video-poster.jpg"
              controls={playing}
              playsInline
              preload="metadata"
              className="size-full object-cover"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            />
            {!playing && (
              <button
                type="button"
                onClick={() => videoRef.current?.play()}
                aria-label="Play video"
                className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30"
              >
                <span className="flex size-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 ease-[var(--ease-out-expressive)] hover:scale-110">
                  <Play className="ml-1 size-7 fill-black text-black" />
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
