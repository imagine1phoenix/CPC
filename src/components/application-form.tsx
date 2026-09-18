"use client";

import { MoveRight } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

export function ApplicationForm() {
  const [applicationSent, setApplicationSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`CPC application from ${data.get("name")}`);
    const body = encodeURIComponent([`Name: ${data.get("name")}`, `University email: ${data.get("email")}`, `Year: ${data.get("year")}`, `Experience: ${data.get("experience")}`, `Curiosity: ${data.get("curiosity")}`].join("\n"));
    window.location.href = `mailto:cpc@jainuniversity.ac.in?subject=${subject}&body=${body}`;
    setApplicationSent(true);
  }

  if (applicationSent) return <div className="application-success"><strong>Your draft is ready.</strong><span>Send it from your email app and we&apos;ll take it from there.</span></div>;

  return <form className="application-form" onSubmit={handleSubmit}><label>Name<input name="name" required placeholder="Your name" /></label><label>University email<input name="email" type="email" required placeholder="you@jainuniversity.ac.in" /></label><label>Year<select name="year" defaultValue="" required><option value="" disabled>Select year</option><option>First year</option><option>Second year</option><option>Third year</option><option>Fourth year</option></select></label><label>Experience<select name="experience" defaultValue="" required><option value="" disabled>Choose one</option><option>Brand new to CP</option><option>I&apos;ve tried a few problems</option><option>I compete regularly</option></select></label><label className="form-wide">What are you curious about?<textarea name="curiosity" required placeholder="A problem, topic, or idea..."></textarea></label><button className="button button-dark" type="submit">Prepare my application <MoveRight size={18} /></button></form>;
}
