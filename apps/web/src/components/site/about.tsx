import Image from "next/image";
import { Reveal } from "@/components/site/reveal";

export function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-10 sm:grid-cols-2">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Transform your fitness journey with a FREE session with Jamal
            Baqleh!
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
        <Reveal delay={120}>
          <Image
            src="/images/jamal-portrait.png"
            alt="Jamal Baqleh, NCSF Certified Personal Trainer"
            width={933}
            height={1024}
            className="w-full rounded-xl object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
