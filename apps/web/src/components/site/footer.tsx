import Link from "next/link";
import { INSTAGRAM_URL, PHONE_NUMBER, PHONE_TEL_HREF } from "@/lib/site-content";

type FooterLink = { label: string; href: string; external?: boolean };

const columns: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "About",
    links: [
      { label: "Bio", href: "/bio" },
      { label: "Contact Me", href: "/contact" },
      { label: `Call ${PHONE_NUMBER}`, href: PHONE_TEL_HREF, external: true },
    ],
  },
  {
    heading: "Privacy",
    links: [{ label: "Privacy Policy", href: "#" }],
  },
  {
    heading: "Social",
    links: [{ label: "Instagram", href: INSTAGRAM_URL, external: true }],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-green py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:justify-between">
        <p className="text-sm">
          © {new Date().getFullYear()} jbtraining.com. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-sm font-semibold">{col.heading}</p>
              <ul className="mt-2 space-y-1">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a
                        href={l.href}
                        {...(l.href.startsWith("http") && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                        className="text-sm hover:underline"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className="text-sm hover:underline">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
