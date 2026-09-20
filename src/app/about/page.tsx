import { ArrowUpRight } from "lucide-react";
import { PhilosophyMetrics } from "@/components/philosophy-metrics";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function AboutPage() {
  return <div className="site-shell"><SiteHeader /><main><section className="inner-hero about-hero section-pad"><p className="eyebrow">01 / ABOUT CPC</p><h1>A room for<br /><em>better thinking.</em></h1><p className="inner-lede">We teach people to code without AI by building the durable problem-solving skill that lasts beyond any one tool.</p></section><section className="manifesto section-pad"><div className="section-label"><span>01</span><span>WHY THIS CLUB EXISTS</span></div><div className="manifesto-grid"><h2>“I don&apos;t get DSA” is a <em>starting point.</em></h2><div><p className="large-copy">The gap between knowing syntax and knowing how to think is where we work. CPC is a peer-led room for making that gap smaller, one problem at a time.</p><p className="muted-copy">No gatekeeping. No magic prompts. Just good questions, stubborn curiosity, and a team that gets better in public.</p><a className="arrow-link" href="/path">See the learning path <ArrowUpRight size={17} /></a></div></div><PhilosophyMetrics /></section></main><SiteFooter /></div>;
}
