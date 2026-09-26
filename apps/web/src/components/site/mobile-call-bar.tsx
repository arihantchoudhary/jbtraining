import { PhoneCall } from "lucide-react";
import { PHONE_NUMBER, PHONE_TEL_HREF } from "@/lib/site-content";

export function MobileCallBar() {
  return (
    <div className="animate-in slide-in-from-bottom fill-mode-both fixed inset-x-0 bottom-0 z-50 border-t bg-primary text-primary-foreground delay-700 duration-500 sm:hidden">
      <a
        href={PHONE_TEL_HREF}
        className="flex h-16 items-center justify-center gap-2 text-sm font-semibold active:scale-[0.98]"
      >
        <PhoneCall className="size-4 motion-safe:animate-pulse" />
        Call to Book Your First Session &middot; {PHONE_NUMBER}
      </a>
    </div>
  );
}
