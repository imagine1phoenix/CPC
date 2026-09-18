import { ResourceShelf } from "@/components/content-sections";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function ResourcesPage() {
  return <div className="site-shell"><SiteHeader /><main><section className="inner-hero section-pad"><p className="eyebrow">02 / RESOURCES</p><h1>Practice<br /><em>with intent.</em></h1><p className="inner-lede">Curated problems, field notes, and a starting point for students who have never done competitive programming.</p></section><ResourceShelf /></main><SiteFooter /></div>;
}
