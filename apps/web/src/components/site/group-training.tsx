import { PhoneCall, User, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GroupCollage } from "@/components/site/group-collage";
import { Reveal } from "@/components/site/reveal";
import { PHONE_NUMBER, PHONE_TEL_HREF } from "@/lib/site-content";

const SESSION_TYPES = [
  {
    icon: User,
    title: "Private 1-on-1",
    body: "Just you and Jamal. A plan built around your goals, your level and your schedule.",
  },
  {
    icon: Users,
    title: "Group sessions",
    body: "Train with a crew in a supportive, high-energy atmosphere where everyone grows stronger together.",
  },
] as const;

export function GroupTraining() {
  return (
    <section className="overflow-hidden border-y bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <GroupCollage />
        </div>
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-28">
            <h2 data-split="scroll" className="text-2xl font-bold tracking-tight sm:text-3xl">
              Train 1-on-1 or together in a group
            </h2>
            <p className="mt-4 text-muted-foreground">
              At Jamal&rsquo;s, you&rsquo;re not just joining a gym,
              you&rsquo;re becoming part of our fitness family. Train one-on-one
              or with a group &mdash; space is limited either way.
            </p>
            <ul className="mt-8 space-y-4">
              {SESSION_TYPES.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4 rounded-xl border bg-background p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              To book either one, call Jamal at{" "}
              <a href={PHONE_TEL_HREF} className="font-semibold text-foreground underline underline-offset-4">
                {PHONE_NUMBER}
              </a>
              .
            </p>
            <Button
              size="lg"
              className="mt-4"
              nativeButton={false}
              render={
                <a href={PHONE_TEL_HREF}>
                  <PhoneCall className="size-4" />
                  Call to Book Your Free Session
                </a>
              }
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
