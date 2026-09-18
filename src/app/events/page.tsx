import { ArrowUpRight } from "lucide-react";
import { EventsList } from "@/components/content-sections";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function EventsPage() {
  return <div className="site-shell"><SiteHeader /><main><section className="inner-hero section-pad"><p className="eyebrow">03 / EVENTS</p><h1>Put ideas<br /><em>in motion.</em></h1><p className="inner-lede">Seminars, practice rounds, and inter-college contests that make the work social.</p></section><section className="events-section section-pad"><div className="section-label"><span>01</span><span>WHAT&apos;S NEXT</span></div><div className="events-heading"><h2>Show up.<br /><em>Try things.</em></h2><a className="button button-outline" href="/join">Join the club <ArrowUpRight size={16} /></a></div><EventsList /></section></main><SiteFooter /></div>;
}
