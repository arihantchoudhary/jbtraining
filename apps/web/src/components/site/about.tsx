import Image from "next/image";
import { Reveal } from "@/components/site/reveal";

export function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-10 sm:grid-cols-2">
        <Reveal>
          <h2 data-split="scroll" className="font-display text-4xl leading-[0.95] tracking-tight uppercase sm:text-5xl">
            Meet Coach Jamal
          </h2>
          <p className="mt-6 text-muted-foreground">
            Get stronger, faster, and more agile with Jamal Baqleh, NCSF
            Certified Personal Trainer. He tailors your workouts to your
            needs, ensuring you get the most out of every session. With
            Jamal&rsquo;s expert training and support, you&rsquo;ll be on your
            way to your best physical shape, no matter your current level or
            fitness goals.
          </p>
        </Reveal>
        <Reveal delay={120} className="overflow-hidden rounded-xl">
          <div data-zoom>
          <Image
            src="/images/jamal-portrait.png"
            alt="Jamal Baqleh, NCSF Certified Personal Trainer"
            width={933}
            height={1024}
            className="w-full object-cover"
          />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
