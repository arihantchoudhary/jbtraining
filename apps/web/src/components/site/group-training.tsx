import Image from "next/image";
import { Button } from "@/components/ui/button";
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
              Transform your fitness journey with a FREE session with Jamal
              Baqleh!
            </h2>
            <p className="mt-6 text-muted-foreground">
              At Jamal&rsquo;s, you&rsquo;re not just joining a gym,
              you&rsquo;re becoming part of our fitness family. Group training
              sessions are available, offering a supportive and energized
              atmosphere where we all grow stronger together. Remember, space
              is limited, so sign up now to reserve your spot in our family
              and make the most of group dynamics in achieving your fitness
              goals!
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid items-center gap-10 sm:grid-cols-2">
          <Reveal>
            <h3 className="text-xl font-semibold">
              Space is limited, sign up now to reserve your spot!
            </h3>
            <p className="mt-4 text-muted-foreground">
              Space in Jamal&rsquo;s transformative fitness sessions is
              filling up fast. Secure your place in the journey toward peak
              fitness. Sign up now to reserve your exclusive spot and start
              shaping your future self today!
            </p>
            <Button
              size="lg"
              className="mt-8"
              nativeButton={false}
              render={<a href="#free-session">Sign up for your FREE session</a>}
            />
          </Reveal>
          <Reveal delay={120}>
            <Image
              src="/images/girl-training.png"
              alt="Jamal Baqleh coaching a client outdoors"
              width={1080}
              height={1080}
              className="w-full rounded-xl object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
