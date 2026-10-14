import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PHONE_NUMBER, PHONE_TEL_HREF } from "@/lib/site-content";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.webp" alt="JB Training" width={44} height={31} />
          <span className="text-base font-bold tracking-tight whitespace-nowrap sm:text-lg">JB Training</span>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6">
          <Link href="/bio" className="text-sm font-medium hover:underline">
            Bio
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline">
            Contact
          </Link>
          <a href={PHONE_TEL_HREF} className="hidden text-sm font-medium hover:underline sm:inline">
            Call {PHONE_NUMBER}
          </a>
          <Button
            nativeButton={false}
            render={<Link href="/#free-session">Free Session</Link>}
          />
        </nav>
      </div>
    </header>
  );
}
