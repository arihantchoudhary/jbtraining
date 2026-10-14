import { Navigation, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  DIRECTIONS_URL,
  MAP_EMBED_URL,
  PHONE_NUMBER,
  PHONE_TEL_HREF,
} from "@/lib/site-content";

export function Location() {
  return (
    <section id="location" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-background ring-1 ring-foreground/10">
          <iframe
            title={`Map of ${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`}
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-72 w-full border-0 grayscale-[0.6] transition-[filter] duration-500 hover:grayscale-0 sm:h-[480px]"
          />
          <div className="sm:pointer-events-none sm:absolute sm:inset-0 sm:flex sm:items-center sm:justify-end sm:p-10">
            <div className="p-6 sm:pointer-events-auto sm:w-full sm:max-w-md sm:rounded-2xl sm:bg-background/95 sm:shadow-xl sm:ring-1 sm:ring-foreground/10 sm:backdrop-blur">
              <h2 data-split="scroll" className="font-display text-4xl leading-[0.95] tracking-tight uppercase sm:text-5xl">Where to find us</h2>
              <address className="mt-3 text-lg text-muted-foreground not-italic">
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
              </address>
              <p className="mt-3 text-lg text-muted-foreground">
                Call ahead to book:{" "}
                <a href={PHONE_TEL_HREF} className="font-semibold text-foreground underline underline-offset-4">
                  {PHONE_NUMBER}
                </a>
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button
                  size="lg"
                  nativeButton={false}
                  render={
                    <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                      <Navigation className="size-4" />
                      Get directions
                    </a>
                  }
                />
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={
                    <a href={PHONE_TEL_HREF}>
                      <PhoneCall className="size-4" />
                      Call Jamal
                    </a>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
