import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Reveal } from "@/components/site/reveal";
import { testimonials } from "@/lib/site-content";

function initials(name: string) {
  return name
    .replace(/[#0-9]/g, "")
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="border-y bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Testimonials
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <Card>
                <CardContent>
                  <p className="text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                </CardContent>
                <CardFooter className="items-center gap-3">
                  <Avatar size="lg">
                    <AvatarFallback>{initials(t.name)}</AvatarFallback>
                  </Avatar>
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
          ))}
        </div>
      </div>
    </section>
  );
}
