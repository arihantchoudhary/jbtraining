import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Reveal } from "@/components/site/reveal";
import { testimonials } from "@/lib/site-content";

export function Testimonials() {
  return (
    <section className="border-y bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 data-split="scroll" className="text-center font-display text-4xl leading-[0.95] tracking-tight uppercase sm:text-5xl">
          Testimonials
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <div key={t.name} data-parallax={i % 2 ? 28 : -28}>
            <Reveal delay={i * 60}>
              <Card>
                <CardContent>
                  <p className="text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                </CardContent>
                <CardFooter className="items-center gap-4">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={96}
                    height={96}
                    className="size-20 shrink-0 rounded-full object-cover ring-2 ring-brand-green ring-offset-2 ring-offset-card sm:size-24"
                  />
                  <div>
                    <Image
                      src="/images/stars.webp"
                      alt="5 stars"
                      width={90}
                      height={17}
                    />
                    <p className="mt-1 text-sm font-semibold">
                      {t.name}{" "}
                      <span className="font-normal text-muted-foreground">
                        — {t.affiliation}
                      </span>
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
