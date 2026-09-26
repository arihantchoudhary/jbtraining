"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export function HeroShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="animate-in fade-in zoom-in-95 fill-mode-both relative mx-auto mt-10 flex w-full max-w-3xl items-center justify-center delay-500 duration-700">
      <div className="relative hidden rotate-[-8deg] sm:block">
        <Image
          src="/images/gallery/group-flex.jpg"
          alt="JB Training group flexing after a session"
          width={642}
          height={480}
          className="h-40 w-32 -translate-x-6 rounded-2xl object-cover shadow-2xl ring-1 ring-white/10 transition-transform duration-300 ease-[var(--ease-out-expressive)] hover:scale-105 hover:rotate-[-4deg] sm:h-52 sm:w-40"
        />
      </div>

      <div className="relative z-10 aspect-9/16 w-full max-w-[280px] shrink-0 overflow-hidden rounded-[2rem] bg-black shadow-2xl ring-4 ring-white/10">
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

      <div className="relative hidden rotate-[7deg] sm:block">
        <Image
          src="/images/gallery/portrait-2.jpg"
          alt="Jamal Baqleh standing in the gym"
          width={1157}
          height={1400}
          className="h-40 w-32 translate-x-6 rounded-2xl object-cover shadow-2xl ring-1 ring-white/10 transition-transform duration-300 ease-[var(--ease-out-expressive)] hover:scale-105 hover:rotate-[3deg] sm:h-52 sm:w-40"
        />
      </div>
    </div>
  );
}
