import { Roadmap } from "@/components/roadmap";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function PathPage() {
  return <div className="site-shell"><SiteHeader /><main><section className="inner-hero section-pad"><p className="eyebrow">02 / THE PATH</p><h1>No more<br /><em>guessing.</em></h1><p className="inner-lede">A practical progression from first loops to the patterns that make competitive programming click.</p></section><Roadmap /></main><SiteFooter /></div>;
}