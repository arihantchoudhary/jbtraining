import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { GroupTraining } from "@/components/site/group-training";
import { Gallery } from "@/components/site/gallery";
import { HowItWorks } from "@/components/site/how-it-works";
import { Testimonials } from "@/components/site/testimonials";
import { InstagramFollow } from "@/components/site/instagram";
import { Faq, FaqClosingCta } from "@/components/site/faq";
import { Newsletter } from "@/components/site/newsletter";
import { SiteFooter } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Gallery />
        <InstagramFollow />
        <About />
        <GroupTraining />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <FaqClosingCta />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  );
}
