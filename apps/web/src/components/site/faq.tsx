import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { faqs, PHONE_TEL_HREF } from "@/lib/site-content";

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <Reveal>
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Frequently Asked Questions
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <Accordion className="mt-10">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem key={q} value={`item-${i}`}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}

export function FaqClosingCta() {
  return (
    <section className="bg-foreground py-20 text-background">
      <Reveal className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-lg font-medium sm:text-xl">
          We&rsquo;re so confident that you&rsquo;ll love our training that we
          offer a satisfaction guarantee.
        </p>
        <Button
          size="lg"
          className="mt-6"
          nativeButton={false}
          render={<a href={PHONE_TEL_HREF}>Call to Book Your Free Session</a>}
        />
      </Reveal>
    </section>
  );
}
