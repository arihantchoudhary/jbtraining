import Image from "next/image";
import { Reveal } from "@/components/site/reveal";
import { testimonials } from "@/lib/site-content";

export function Testimonials() {
  return (
    <section className="border-y bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 data-split="scroll" className="text-center font-display text-4xl leading-[0.95] tracking-tight text-balance uppercase sm:text-5xl">
          Athletes who trained with Jamal
        </h2>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <li key={t.name} data-parallax={i % 2 ? 28 : -28}>
              <Reveal delay={i * 80} className="h-full">
                <figure className="flex h-full flex-col rounded-2xl bg-background p-6 shadow-[0_1px_2px_rgb(0_0_0/0.04),0_8px_24px_-12px_rgb(0_0_0/0.18)] ring-1 ring-foreground/10 sm:p-8">
                  <div className="flex items-end justify-between gap-4">
                    {/* Source photos are 300px; served as-is, 128px keeps them sharp on 2x screens. */}
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={128}
                      height={128}
                      unoptimized
                      className="size-28 rounded-xl object-cover object-top ring-2 ring-brand-green ring-offset-2 ring-offset-background sm:size-32"
                    />
                  </div>
                  <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-foreground/80">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-foreground/10 pt-4">
                    <p className="text-lg font-semibold tracking-wide uppercase">{t.name}</p>
                    <p className="text-base text-muted-foreground">{t.affiliation}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
