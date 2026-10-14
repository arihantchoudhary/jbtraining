import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/site/count-up";
import { Reveal } from "@/components/site/reveal";
import {
  INSTAGRAM_FOLLOWERS_COUNT,
  INSTAGRAM_HANDLE,
  INSTAGRAM_POSTS_COUNT,
  INSTAGRAM_URL,
} from "@/lib/site-content";

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function InstagramFollow() {
  return (
    <section className="border-y">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-12">
        <Reveal className="flex items-center gap-6 lg:col-span-7">
          <div className="relative flex size-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-fuchsia-600 p-[3px] sm:size-28">
            <Image
              src="/images/logo.webp"
              alt="JB Training on Instagram"
              width={112}
              height={112}
              className="size-full rounded-full border-4 border-background object-cover"
            />
          </div>
          <div>
            <h2 data-split="scroll" className="font-display text-4xl leading-[0.95] tracking-tight uppercase sm:text-5xl">
              See the work
            </h2>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-11 items-center gap-2 text-lg font-semibold hover:underline"
            >
              <InstagramGlyph className="size-5 text-pink-600" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </Reveal>
        <Reveal delay={120} className="flex flex-wrap items-center gap-x-10 gap-y-6 lg:col-span-5 lg:justify-end">
          <dl className="flex gap-10">
            <div>
              <dt className="sr-only">Posts</dt>
              <dd className="font-display text-5xl leading-none">
                <CountUp target={INSTAGRAM_POSTS_COUNT} suffix="+" />
              </dd>
              <dd className="mt-1 text-lg text-muted-foreground" aria-hidden="true">posts</dd>
            </div>
            <div>
              <dt className="sr-only">Followers</dt>
              <dd className="font-display text-5xl leading-none">
                <CountUp target={INSTAGRAM_FOLLOWERS_COUNT} suffix="+" />
              </dd>
              <dd className="mt-1 text-lg text-muted-foreground" aria-hidden="true">followers</dd>
            </div>
          </dl>
          <Button
            size="lg"
            nativeButton={false}
            render={
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                Follow on Instagram
              </a>
            }
          />
        </Reveal>
      </div>
    </section>
  );
}
