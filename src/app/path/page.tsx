import { PathSection } from "@/components/page-sections/path-section";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function PathPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <PathSection />
      </main>
      <SiteFooter />
    </div>
  );
}