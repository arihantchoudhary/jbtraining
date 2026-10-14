"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ApiError, postJson } from "@/lib/api";

export function Newsletter() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    setStatus("sending");
    try {
      await postJson("/newsletter", { email: form.get("email") });
      setStatus("sent");
      formEl.reset();
    } catch (err) {
      if (err instanceof ApiError && err.status === 409) {
        setStatus("sent");
        setErrorMessage(null);
        formEl.reset();
        return;
      }
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section className="border-t bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-2xl px-6 py-20 text-center">
        <h2 data-split="scroll" className="font-display text-4xl leading-[0.95] tracking-tight uppercase sm:text-5xl">
          Subscribe now!
        </h2>
        <p className="mt-3 text-muted-foreground">
          Stay in the loop with everything you need to know.
        </p>
        {status === "sent" ? (
          <p className="mt-8 text-muted-foreground">You&rsquo;re on the list!</p>
        ) : (
          <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-md gap-2">
            <Input name="email" type="email" placeholder="you@email.com" required />
            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Signing up…" : "Sign up"}
            </Button>
          </form>
        )}
        {status === "error" && errorMessage && (
          <p className="mt-3 text-sm text-destructive">{errorMessage}</p>
        )}
      </div>
    </section>
  );
}
