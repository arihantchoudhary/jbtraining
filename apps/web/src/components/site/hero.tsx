import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroShowcase } from "@/components/site/hero-showcase";
import { PHONE_TEL_HREF } from "@/lib/site-content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute -inset-[20%] bg-[radial-gradient(ellipse_at_top,_rgba(237,43,53,0.22),_transparent_55%)] motion-safe:animate-[hero-glow_14s_ease-in-out_infinite_alternate]" />
      <div className="pointer-events-none absolute -inset-[20%] bg-[radial-gradient(ellipse_at_bottom,_rgba(0,151,54,0.45),_transparent_55%)] motion-safe:animate-[hero-glow_18s_ease-in-out_infinite_alternate-reverse]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-24 text-center">
        <div data-scroll-out className="flex flex-col items-center gap-6">
          <span className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both text-xs font-semibold tracking-[0.3em] text-white/50 uppercase duration-700 sm:text-sm">
            Strength &amp; Conditioning<span className="hidden sm:inline"> &middot; San Francisco</span>
          </span>
          <h1 data-split="load" className="font-display text-6xl leading-[0.9] tracking-tight text-white uppercase sm:text-8xl lg:text-9xl">
            Don&rsquo;t stay <span className="text-primary">weak.</span>
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both -mt-2 font-display text-2xl tracking-[0.12em] text-[#14b84b] uppercase delay-300 duration-700 sm:text-4xl">
            Physically &amp; mentally
          </p>
          <p className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both max-w-2xl text-lg font-medium text-white/80 delay-200 duration-700 sm:text-xl">
            Gassed when it counts, outpaced, or doubting yourself under
            pressure? Jamal builds the strength, speed and mental toughness
            that keeps you in the game, one-on-one or in a group.
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both mt-2 flex flex-col items-center gap-3 delay-300 duration-700">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href={PHONE_TEL_HREF}>Call to Book Your Free Session</a>}
            />
          </div>
          <ul className="animate-in fade-in fill-mode-both flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-base font-medium text-white/70 delay-400 duration-700">
            {["First session free", "No commitment", "NCSF Certified Trainer"].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <Check className="size-5 text-[#14b84b]" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <HeroShowcase />
      </div>
    </section>
  );
}
