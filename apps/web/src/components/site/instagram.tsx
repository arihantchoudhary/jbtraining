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
    <section className="border-y py-8">
      <Reveal className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <div className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-fuchsia-600 p-[2px]">
            <Image
              src="/images/logo.webp"
              alt="JB Training on Instagram"
              width={44}
              height={44}
              className="size-full rounded-full border-2 border-background object-cover"
            />
          </div>
          <div>
            <p className="flex items-center gap-1.5 text-sm font-semibold">
              <InstagramGlyph className="size-4 text-pink-600" />
              {INSTAGRAM_HANDLE}
            </p>
            <p className="text-xs text-muted-foreground">
              <CountUp target={INSTAGRAM_POSTS_COUNT} suffix="+" /> posts
              &middot; <CountUp target={INSTAGRAM_FOLLOWERS_COUNT} suffix="+" />{" "}
              followers
            </p>
          </div>
        </div>
        <Button
          nativeButton={false}
          render={
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Follow on Instagram
            </a>
          }
        />
      </Reveal>
    </section>
  );
}
