import Image from "next/image";
import { Reveal } from "@/components/site/reveal";

export function GroupTraining() {
  return (
    <section className="border-y bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 sm:grid-cols-2">
          <Reveal className="sm:order-first">
            <Image
              src="/images/group-masks.png"
              alt="Group training session at JB Training"
              width={955}
              height={715}
              className="w-full rounded-xl object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Train together in small groups
            </h2>
            <p className="mt-6 text-muted-foreground">
              At Jamal&rsquo;s, you&rsquo;re not just joining a gym,
              you&rsquo;re becoming part of our fitness family. Group training
              sessions are available, offering a supportive and energized
              atmosphere where we all grow stronger together. Remember, space
              is limited, so call now to reserve your spot in our family
              and make the most of group dynamics in achieving your fitness
              goals!
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
