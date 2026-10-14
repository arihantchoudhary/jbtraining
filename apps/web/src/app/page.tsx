import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { KineticBand } from "@/components/site/kinetic-band";
import { About } from "@/components/site/about";
import { GroupTraining } from "@/components/site/group-training";
import { HowItWorks } from "@/components/site/how-it-works";
import { Location } from "@/components/site/location";
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
        <KineticBand />
        <InstagramFollow />
        <About />
        <GroupTraining />
        <HowItWorks />
        <Location />
        <Testimonials />
        <Faq />
        <FaqClosingCta />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  );
}
