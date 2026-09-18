"use client";

import { Check, LockKeyhole, MoveRight, RotateCcw } from "lucide-react";
import { useState } from "react";

export function AuditionGate() {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<"idle" | "correct" | "wrong">("idle");
  const isCorrect = answer.trim() === "-2";

  function checkAnswer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(isCorrect ? "correct" : "wrong");
  }

  function reset() {
    setAnswer("");
    setResult("idle");
  }

  return <section className="audition-panel"><div className="audition-heading"><span className="eyebrow"><LockKeyhole size={14} /> CORE TEAM / GATE 01</span><span className="audition-status">EDGE-CASE CHECK</span></div><h2>Show us how<br /><em>you think.</em></h2><p className="audition-copy">Before the monitored audition, solve one small problem without an assistant. Read the constraint carefully: the maximum subarray must be non-empty.</p><div className="problem-box"><span>PROBLEM 001 / KADANE&apos;S EDGE</span><p>What is the maximum subarray sum of:</p><code>[-5, -2, -9]</code><small>Return one number. No explanation needed.</small></div>{result === "correct" ? <div className="audition-result correct"><Check size={18} /><div><strong>Correct. You found the edge.</strong><span>The monitored audition is the next step.</span></div><a href="mailto:cpc@jainuniversity.ac.in?subject=CPC%20core%20team%20audition">Request the audition <MoveRight size={16} /></a></div> : <form className="audition-form" onSubmit={checkAnswer}><label htmlFor="audition-answer">Your output</label><div><input id="audition-answer" inputMode="numeric" value={answer} onChange={(event) => { setAnswer(event.target.value); setResult("idle"); }} placeholder="e.g. -2" /><button type="submit">Check answer <MoveRight size={16} /></button></div>{result === "wrong" && <p className="audition-error">Not quite. Remember: the subarray cannot be empty.</p>}</form>}{result === "correct" && <button className="audition-reset" onClick={reset} type="button"><RotateCcw size={14} /> Try again</button>}</section>;
}
