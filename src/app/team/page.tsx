import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { TeamGrid } from "@/components/content-sections";
import { Leaderboard } from "@/components/leaderboard";

export default function TeamPage() {
  return <div className="site-shell"><SiteHeader /><main><section className="inner-hero section-pad"><p className="eyebrow">04 / THE TEAM</p><h1>Learn in<br /><em>good company.</em></h1><p className="inner-lede">Students lead the practice. Faculty helps us make it last.</p></section><section className="team-section section-pad"><div className="section-label"><span>01</span><span>THE PEOPLE BEHIND THE PROBLEMS</span></div><TeamGrid /></section><Leaderboard /></main><SiteFooter /></div>;
}
