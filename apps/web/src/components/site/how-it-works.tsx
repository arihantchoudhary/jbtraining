import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { howItWorks, PHONE_NUMBER, PHONE_TEL_HREF } from "@/lib/site-content";

export function HowItWorks() {
  return (
    <section id="free-session" className="bg-foreground text-background">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Get your free session in 3 steps
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-8 sm:grid-cols-3">
          {howItWorks.map((step, i) => (
            <Reveal as="li" key={step} delay={i * 80} className="flex flex-col items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-background text-sm font-semibold transition-transform duration-300 ease-[var(--ease-out-expressive)] hover:scale-110">
                {i + 1}
              </span>
              <p className="text-sm text-background/80">{step}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={200} className="mt-12">
          <Button
            size="lg"
            nativeButton={false}
            render={
              <a href={PHONE_TEL_HREF}>
                <PhoneCall className="size-4" />
                Call {PHONE_NUMBER}
              </a>
            }
          />
        </Reveal>
      </div>
    </section>
  );
}
