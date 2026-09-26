"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { postJson } from "@/lib/api";
import { PHONE_NUMBER, PHONE_TEL_HREF } from "@/lib/site-content";

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    setStatus("sending");
    try {
      await postJson("/booking", {
        name: form.get("name"),
        phone: form.get("phone"),
        preferred_date: form.get("preferred_date"),
        preferred_time: form.get("preferred_time"),
      });
      setStatus("sent");
      formEl.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="text-background/90">
        You&rsquo;re booked in — we&rsquo;ll call or text you to confirm your
        free session.
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <p className="mb-6 text-lg font-semibold text-background">
        Clear: first session free or $30.
      </p>
      <form onSubmit={onSubmit} className="grid gap-4 text-left">
        <div className="space-y-1.5">
          <Label htmlFor="b-name" className="text-background">
            Name
          </Label>
          <Input id="b-name" name="name" required className="bg-background" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="b-phone" className="text-background">
            Phone
          </Label>
          <Input id="b-phone" name="phone" type="tel" required className="bg-background" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="b-date" className="text-background">
              Preferred date
            </Label>
            <Input id="b-date" name="preferred_date" type="date" required className="bg-background" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="b-time" className="text-background">
              Preferred time
            </Label>
            <Input id="b-time" name="preferred_time" type="time" required className="bg-background" />
          </div>
        </div>
        <Button type="submit" size="lg" disabled={status === "sending"} className="mt-2">
          {status === "sending" ? "Submitting…" : "Submit"}
        </Button>
        {status === "error" && (
          <p className="text-sm text-red-300">Something went wrong. Please try again.</p>
        )}
      </form>
      <div className="mt-6 flex items-center gap-3 text-background/80">
        <span className="h-px flex-1 bg-background/30" />
        <span className="text-sm">or</span>
        <span className="h-px flex-1 bg-background/30" />
      </div>
      <Button
        nativeButton={false}
        size="lg"
        variant="outline"
        className="mt-6 w-full bg-transparent text-background hover:bg-background/10"
        render={<a href={PHONE_TEL_HREF}>Call {PHONE_NUMBER}</a>}
      />
    </div>
  );
}
