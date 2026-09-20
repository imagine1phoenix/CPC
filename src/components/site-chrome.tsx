"use client";

import { ExternalLink, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
  isAccent?: boolean;
}

const navLinks: NavItem[] = [
  { label: "ABOUT", href: "/about" },
  { label: "THE PATH", href: "/path" },
  { label: "RESOURCES", href: "/resources" },
  { label: "EVENTS", href: "/events" },
  { label: "THE TEAM", href: "/team" },
  { label: "JOIN", href: "/join", isAccent: true },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="topbar">
      {/* Brand logo on the left */}
      <div className="topbar-left">
        <Link className="topbar-logo" href="/" aria-label="CPC Home">
          <Image
            src="/cpc-logo-transparent.png"
            alt="CPC Logo"
            width={98}
            height={39}
            priority
            className="topbar-logo-img"
          />
        </Link>
      </div>

      {/* Desktop Pill Navigation Bar */}
      <nav className="nav-pill" aria-label="Main Navigation">
        <ul className="nav-pill-list">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-pill-link${item.isAccent ? " nav-pill-accent" : ""}${isActive ? " nav-pill-active" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Right container with mobile toggle */}
      <div className="topbar-right">
        <button
          className="mobile-pill-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-nav-overlay${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-nav-content">
          <ul className="mobile-nav-list">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`mobile-nav-link${item.isAccent ? " mobile-nav-accent" : ""}${pathname === item.href ? " mobile-nav-active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="wordmark" href="/">
        <Image
          src="/cpc-logo-transparent.png"
          alt="CPC logo"
          width={110}
          height={44}
        />
      </Link>
      <p>Made for the curious.</p>
      <a href="mailto:cpc@jainuniversity.ac.in">
        Get in touch <ExternalLink size={14} />
      </a>
    </footer>
  );
}
