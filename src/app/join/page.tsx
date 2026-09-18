import { AuditionGate } from "@/components/audition-gate";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { TerminalRegistration } from "@/components/terminal-registration";

export default function JoinPage() {
  return <div className="site-shell"><SiteHeader /><main><section className="inner-hero section-pad"><p className="eyebrow">05 / JOIN CPC</p><h1>Bring a question.<br /><em>Leave with a method.</em></h1><p className="inner-lede">Skill level is optional. Curiosity is the only prerequisite.</p></section><section className="join-section section-pad"><div className="join-mark">CPC<span>↗</span></div><div className="join-copy"><p className="eyebrow">YOUR NEXT TAB</p><h2>Start where<br /><em>you are.</em></h2><p>Give us the honest version. The terminal sends a JSON registration to the club queue.</p><TerminalRegistration /></div><div className="join-note">NEXT INTAKE<br /><strong>FALL / 2026</strong><br /><span>JAIN UNIVERSITY</span></div></section><AuditionGate /></main><SiteFooter /></div>;
}
