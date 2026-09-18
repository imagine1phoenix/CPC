"use client";

import { ArrowUpRight, CornerDownLeft, LoaderCircle, Terminal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Registration = { name: string; handle: string; why: string };

export function TerminalRegistration() {
  const [registration, setRegistration] = useState<Registration>({ name: "", handle: "", why: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function submitRegistration(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");

    try {
      const response = await fetch("/api/apply", {
        body: JSON.stringify({ ...registration, source: "terminal-registration" }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      if (!response.ok) throw new Error("Registration endpoint unavailable");
      setSubmitted(true);
    } catch {
      setError("The signal could not be sent. Try again in a moment.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) return <div className="terminal-window terminal-success"><div className="terminal-bar"><Terminal size={15} /> cpc-init <span>● ● ●</span></div><div className="terminal-body"><p><span className="terminal-prompt">&gt;</span> registration accepted</p><p className="terminal-muted">Your signal is in the queue. Watch your inbox for the next move.</p><Link className="terminal-action" href="/">Return to base <ArrowUpRight size={15} /></Link></div></div>;

  return <form className="terminal-window" onSubmit={submitRegistration}><div className="terminal-bar"><Terminal size={15} /> cpc-init <span>● ● ●</span></div><div className="terminal-body"><p className="terminal-muted">CPC onboarding sequence / v1.0</p><label><span><i>&gt;</i> Enter your name:</span><input autoFocus name="name" required value={registration.name} onChange={(event) => setRegistration({ ...registration, name: event.target.value })} placeholder="type here" /></label><label><span><i>&gt;</i> Codeforces / LeetCode handle:</span><input name="handle" required value={registration.handle} onChange={(event) => setRegistration({ ...registration, handle: event.target.value })} placeholder="or type none" /></label><label><span><i>&gt;</i> Why CPC?</span><textarea name="why" required value={registration.why} onChange={(event) => setRegistration({ ...registration, why: event.target.value })} placeholder="one honest line" /></label>{error && <p className="terminal-error">{error}</p>}<button className="terminal-submit" disabled={sending} type="submit">{sending ? <><LoaderCircle className="spin" size={15} /> sending signal...</> : <><CornerDownLeft size={15} /> send registration</>}</button></div></form>;
}
