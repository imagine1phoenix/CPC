import { Roadmap } from "@/components/roadmap";
import { PathProgressHeader } from "@/components/path-progress-header";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function PathPage() {
  return <div className="site-shell"><SiteHeader /><main><section className="inner-hero path-hero section-pad"><div><p className="eyebrow">02 / THE PATH</p><h1>No more<br /><em>guessing.</em></h1><p className="inner-lede">A practical progression from first loops to the patterns that make competitive programming click.</p></div><PathProgressHeader /></section><Roadmap /></main><SiteFooter /></div>;
}