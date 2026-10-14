import { testimonials } from "@/lib/site-content";

const MANTRA = ["Stop being weak", "No excuses", "Stronger", "Faster", "Built different"];
const TEAMS = testimonials.map((t) => t.affiliation);

function Row({ items, direction, className }: { items: readonly string[]; direction: 1 | -1; className: string }) {
  // Repeat enough times that the row overflows wide screens while it slides.
  const repeated = Array.from({ length: 4 }, () => items).flat();
  return (
    <div data-marquee={direction} className={`flex w-max gap-8 whitespace-nowrap will-change-transform ${className}`}>
      {repeated.map((item, i) => (
        <span key={i} className="flex items-center gap-8">
          {item}
          <span className="text-primary">&bull;</span>
        </span>
      ))}
    </div>
  );
}

export function KineticBand() {
  return (
    <section aria-label="Athletes Jamal has trained" className="overflow-hidden bg-black py-10 text-white sm:py-14">
      <Row
        items={MANTRA}
        direction={-1}
        className="font-display text-5xl uppercase sm:text-7xl lg:text-8xl"
      />
      <p className="sr-only">Athletes trained by Jamal play for {TEAMS.join(", ")}.</p>
      <Row
        items={TEAMS}
        direction={1}
        className="mt-4 text-lg font-semibold tracking-[0.2em] text-white/50 uppercase sm:text-2xl"
      />
    </section>
  );
}
