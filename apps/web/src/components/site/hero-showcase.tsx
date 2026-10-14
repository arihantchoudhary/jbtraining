"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export function HeroShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="animate-in fade-in zoom-in-95 fill-mode-both relative mx-auto mt-10 flex w-full max-w-3xl items-center justify-center delay-500 duration-700">
      <div data-fan-scroll="-1" className="relative hidden sm:block">
        <div data-fan-in="-1" className="rotate-[-8deg]">
        <Image
          src="/images/gallery/portrait-1.jpg"
          alt="Coach Jamal Baqleh mid-session"
          width={1163}
          height={1400}
          className="h-40 w-32 -translate-x-6 rounded-2xl object-cover shadow-2xl ring-1 ring-white/10 transition-transform duration-300 ease-[var(--ease-out-expressive)] hover:scale-105 hover:rotate-[-4deg] sm:h-60 sm:w-44 lg:h-72 lg:w-52"
        />
        </div>
      </div>

      <div data-phone className="relative z-10 aspect-9/16 w-full max-w-[280px] shrink-0 overflow-hidden rounded-[2rem] bg-black shadow-2xl ring-4 ring-white/10">
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
            <span className="flex size-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 ease-[var(--ease-out-expressive)] hover:scale-110">
              <Play className="ml-1 size-6 fill-black text-black" />
            </span>
          </button>
        )}
      </div>

      <div data-fan-scroll="1" className="relative hidden sm:block">
        <div data-fan-in="1" className="rotate-[7deg]">
        <Image
          src="/images/gallery/portrait-2.jpg"
          alt="Jamal Baqleh standing in the gym"
          width={1157}
          height={1400}
          className="h-40 w-32 translate-x-6 rounded-2xl object-cover shadow-2xl ring-1 ring-white/10 transition-transform duration-300 ease-[var(--ease-out-expressive)] hover:scale-105 hover:rotate-[3deg] sm:h-60 sm:w-44 lg:h-72 lg:w-52"
        />
        </div>
      </div>
    </div>
  );
}
