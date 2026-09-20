"use client";

import { ArrowUpRight, ExternalLink, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["About", "/about"],
  ["The path", "/path"],
  ["Resources", "/resources"],
  ["Events", "/events"],
  ["The team", "/team"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <Link className="wordmark" href="/" aria-label="CPC home"><Image src="/CPC - Logo - Higher Resolution - Black.png" alt="CPC logo" width={120} height={48} priority /></Link>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
        {links.map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <a className="nav-cta" href="/join">Join the club <ArrowUpRight size={16} /></a>
    </header>
  );
}

export function SiteFooter() {
  return <footer><Link className="wordmark" href="/"><Image src="/CPC - Logo - Higher Resolution - Black.png" alt="CPC logo" width={120} height={48} /></Link><p>Made for the curious.</p><a href="mailto:cpc@jainuniversity.ac.in">Get in touch <ExternalLink size={14} /></a></footer>;
}
