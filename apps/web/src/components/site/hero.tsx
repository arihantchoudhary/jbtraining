import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PHONE_TEL_HREF } from "@/lib/site-content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(237,43,53,0.18),_transparent_60%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-24 text-center">
        <span className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both text-xs font-medium tracking-[0.3em] text-white/50 uppercase duration-700">
          Strength &amp; Conditioning
        </span>
        <h1 className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both text-4xl font-light tracking-tight text-white delay-100 duration-700 sm:text-6xl">
          Build a Stronger You
        </h1>
        <p className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both max-w-2xl text-lg text-white/70 delay-200 duration-700">
          Improve your Strength, Conditioning, Speed and Agility with
          personalized coaching.
        </p>
        <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both mt-2 flex flex-col items-center gap-3 delay-300 duration-700">
          <Button
            size="lg"
            nativeButton={false}
            render={<a href={PHONE_TEL_HREF}>Call to Book Your First Session</a>}
          />
          <a href="#free-session" className="text-sm text-white/50 underline-offset-4 hover:text-white/80 hover:underline">
            or book your free session online
          </a>
        </div>
        <ul className="animate-in fade-in fill-mode-both flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60 delay-400 duration-700">
          <li>✓ First session free</li>
          <li>✓ No commitment</li>
          <li>✓ NCSF Certified Trainer</li>
        </ul>
        <Image
          src="/images/hero-group.webp"
          alt="Jamal Baqleh training group session"
          width={1200}
          height={800}
          className="animate-in fade-in zoom-in-95 fill-mode-both mt-10 w-full max-w-3xl rounded-xl object-cover ring-1 ring-white/10 delay-500 duration-700"
          priority
        />
      </div>
    </section>
  );
}
