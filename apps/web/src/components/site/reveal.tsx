// Content that rises into view as it scrolls in. Motion (motion.tsx) drives the
// animation from these attributes; without JS or with reduced motion it simply shows.
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}) {
  return (
    <As data-reveal={delay / 1000} className={className}>
      {children}
    </As>
  );
}
