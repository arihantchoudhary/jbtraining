import type { Metadata } from "next";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { ContactForm } from "@/components/site/contact-form";

export const metadata: Metadata = {
  title: "Contact — JB Training",
  description: "Get in touch with Jamal Baqleh, NCSF Certified Personal Trainer.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteNav />
      <main className="flex-1">
        <div className="bg-foreground py-10">
          <h1 className="text-center text-3xl font-bold text-background">
            Contact Me
          </h1>
        </div>
        <div className="mx-auto max-w-xl px-6 py-16">
          <p className="mb-8 text-muted-foreground">
            We&rsquo;d love to hear from you! Fill out the form below and
            we&rsquo;ll get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
