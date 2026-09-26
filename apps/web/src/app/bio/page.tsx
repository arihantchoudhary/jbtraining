import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { bio } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Bio — JB Training",
  description: "Meet Jamal Baqleh, NCSF Certified Personal Trainer.",
};

export default function BioPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteNav />
      <main className="flex-1">
        <div className="bg-foreground py-10">
          <h1 className="text-center text-3xl font-bold text-background">
            Bio
          </h1>
        </div>
        <div className="mx-auto grid max-w-4xl gap-10 px-6 py-16 sm:grid-cols-[300px_1fr]">
          <Image
            src="/images/jamal-portrait.png"
            alt="Jamal Baqleh, NCSF Certified Personal Trainer"
            width={933}
            height={1024}
            className="h-auto w-full rounded-xl object-cover"
          />
          <div className="space-y-5 text-muted-foreground">
            {bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
