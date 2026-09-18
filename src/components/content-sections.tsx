import { ArrowUpRight, BookOpen, CalendarDays, Code2, MoveRight, Trophy } from "lucide-react";
import { events, tracks } from "@/content/site";
import { resources } from "@/content/resources";

export function LearningPath() {
  return <section className="path-section section-pad" id="path"><div className="section-label"><span>02</span><span>THE LEARNING PATH</span></div><div className="section-heading"><h2>From first loop<br />to <em>last submission.</em></h2><p>There is no “born competitive” gene. There is a practice loop.</p></div><div className="tracks-grid">{tracks.map((track) => <article className={`track-card ${track.tone}`} key={track.number}><div className="track-top"><span>{track.number}</span><span>{track.tag}</span></div><div className="track-icon">{track.number === "01" ? <Code2 /> : track.number === "02" ? <Trophy /> : <MoveRight />}</div><h3>{track.title}</h3><p>{track.text}</p><a href="/join" aria-label={`Explore ${track.title}`}>Explore <ArrowUpRight size={17} /></a></article>)}</div></section>;
}

export function ResourceShelf() {
  return <section className="resources-section section-pad"><div className="section-label"><span>03</span><span>THE RESOURCE SHELF</span></div><div className="section-heading"><h2>Good problems.<br /><em>Better questions.</em></h2><p>Start small, stay curious, and keep a record of what clicked.</p></div><div className="resource-list">{resources.map((resource) => <a className="resource-item" href="/join" key={resource.title}><div className="resource-icon"><BookOpen size={20} /></div><div><span>{resource.label}</span><h3>{resource.title}</h3><p>{resource.text}</p></div><ArrowUpRight size={20} /></a>)}</div></section>;
}

export function EventsList() {
  return <div className="event-list">{events.map((event) => <article className="event-item" key={event.title}><div className="event-date">{event.date}</div><div className="event-info"><span>{event.type}</span><h3>{event.title}</h3><p>{event.meta}</p></div><a href="/join" aria-label={`Register for ${event.title}`}><CalendarDays size={22} /><ArrowUpRight size={17} /></a></article>)}</div>;
}

export function TeamGrid() {
  return <div className="team-grid"><div className="team-card featured"><div className="avatar avatar-lead">PT</div><span>CLUB LEAD</span><h3>Prit Thacker</h3><p>Problem setter / systems thinker</p></div><div className="team-card"><div className="avatar avatar-open">+</div><span>YOUR NAME HERE</span><h3>Future core team</h3><p>We&apos;re looking for builders</p></div><div className="team-card faculty"><div className="avatar avatar-faculty">JU</div><span>FACULTY COORDINATOR</span><h3>Coming soon</h3><p>Our university partner</p></div></div>;
}
