import Image from "next/image";
import {
  CalendarDays,
  Dumbbell,
  MessageSquareText,
  PhoneCall,
  Trophy,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import {
  ADDRESS_LINE_1,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_NUMBER,
  PHONE_TEL_HREF,
} from "@/lib/site-content";

const SMS_HREF = "sms:+16502193159";

const GROUPS = [
  { name: "Middle School", time: "Mon / Wed / Fri", hours: "4:00\u20135:00 PM" },
  { name: "High School", time: "Mon / Wed / Fri", hours: "5:00\u20136:00 PM" },
] as const;

const TRAINING = ["Lower Body", "Upper Body", "Speed & Agility"] as const;

const GAINS = [
  { icon: Dumbbell, text: "Full-body strength and power" },
  { icon: Zap, text: "Explosive speed and quickness" },
  { icon: Trophy, text: "Confidence, discipline and work ethic" },
] as const;

export function FebruarySpecial() {
  return (
    <section id="february-special" className="overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            February 2027 Special
          </span>
        </Reveal>
        <h2
          data-split="scroll"
          className="mt-6 text-center font-display text-4xl leading-[0.95] tracking-tight uppercase sm:text-6xl"
        >
          Stronger. Faster.
          <br />
          <span className="text-primary">More confident.</span>
        </h2>
        <Reveal className="mt-4 flex justify-center">
          <p className="max-w-2xl text-center text-lg text-white/70">
            12 small-group sessions in February for middle and high school
            athletes, coached by Jamal at {ADDRESS_LINE_1}. Lower body, upper
            body, speed and agility.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              {GROUPS.map(({ name, time, hours }, i) => (
                <Reveal
                  key={name}
                  delay={i * 120}
                  className="rounded-2xl border border-white/15 bg-white/5 p-6"
                >
                  <p className="flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                    <CalendarDays className="size-4" />
                    {name}
                  </p>
                  <p className="mt-3 font-display text-2xl uppercase">{time}</p>
                  <p className="mt-1 text-lg text-white/70">{hours}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={240} className="mt-8">
              <p className="text-sm font-semibold tracking-[0.2em] text-white/50 uppercase">
                Every session trains
              </p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {TRAINING.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold tracking-wide uppercase"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {GAINS.map(({ icon: Icon, text }, i) => (
                <Reveal
                  as="li"
                  key={text}
                  delay={320 + i * 120}
                  className="flex items-center gap-4 border-t border-white/15 pt-4"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <p className="text-lg">{text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal className="overflow-hidden rounded-2xl border border-white/15">
                <Image
                  src="/images/gallery/kids-flex.jpg"
                  alt="Young athletes training at JB Training"
                  width={1200}
                  height={800}
                  className="h-56 w-full object-cover sm:h-64"
                />
              </Reveal>
              <Reveal
                delay={160}
                className="mt-6 rounded-2xl border border-primary/40 bg-primary/10 p-6 text-center"
              >
                <p className="font-display text-6xl text-primary">$300</p>
                <p className="mt-1 text-lg font-semibold">
                  per athlete, all 12 sessions in February
                </p>
                <p className="mt-2 text-white/70">
                  Or drop in to any session for $35.
                </p>
                <p className="mt-3 text-sm tracking-[0.2em] text-white/50 uppercase">
                  Spots are limited in each group
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Button
                    size="lg"
                    className="w-full"
                    nativeButton={false}
                    render={
                      <a href={PHONE_TEL_HREF}>
                        <PhoneCall className="size-4" />
                        Claim a Spot: Call {PHONE_NUMBER}
                      </a>
                    }
                  />
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
                    nativeButton={false}
                    render={
                      <a href={SMS_HREF}>
                        <MessageSquareText className="size-4" />
                        Text Coach Jamal
                      </a>
                    }
                  />
                </div>
                <p className="mt-4 text-sm text-white/60">
                  Follow{" "}
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-white underline underline-offset-4"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
