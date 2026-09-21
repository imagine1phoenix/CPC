import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { AboutSection } from "@/components/page-sections/about-section";

export default function AboutPage() {
  return (
    <div className="site-shell about-page-shell">
      <SiteHeader />
      <main>
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}
