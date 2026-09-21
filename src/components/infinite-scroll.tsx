"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { ChevronDown, ArrowUp, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/site-chrome";
import styles from "./infinite-scroll.module.css";

function SectionSkeleton({ title, chapter }: { title: string; chapter: string }) {
  return (
    <div className={styles.loadingCard} aria-busy="true">
      <div className={styles.loadingHeader}>
        <div className={styles.pulseRing} />
        <span className={styles.loadingText}>STREAMING {chapter}</span>
      </div>
      <span className={styles.loadingSub}>[ SYNCING MODULE: {title} ]</span>
    </div>
  );
}

// Module-scope static dynamic imports — compatible with Turbopack and Webpack
const AboutSection = dynamic(() => import("./page-sections/about-section"), {
  ssr: false,
  loading: () => <SectionSkeleton title="ABOUT CPC & JAIN UNIVERSITY" chapter="CHAPTER 01" />,
});

const PathSection = dynamic(() => import("./page-sections/path-section"), {
  ssr: false,
  loading: () => <SectionSkeleton title="THE LEARNING PATH" chapter="CHAPTER 02" />,
});

const ResourcesSection = dynamic(() => import("./page-sections/resources-section"), {
  ssr: false,
  loading: () => <SectionSkeleton title="PRACTICE & RESOURCES" chapter="CHAPTER 03" />,
});

const EventsSection = dynamic(() => import("./page-sections/events-section"), {
  ssr: false,
  loading: () => <SectionSkeleton title="UPCOMING EVENTS" chapter="CHAPTER 04" />,
});

const TeamSection = dynamic(() => import("./page-sections/team-section"), {
  ssr: false,
  loading: () => <SectionSkeleton title="THE TEAM & LEADERBOARD" chapter="CHAPTER 05" />,
});

const JoinSection = dynamic(() => import("./page-sections/join-section"), {
  ssr: false,
  loading: () => <SectionSkeleton title="JOIN THE CLUB" chapter="CHAPTER 06" />,
});

interface SectionItem {
  id: string;
  chapter: string;
  title: string;
  tag: string;
  Component: React.ComponentType;
}

const SECTIONS: SectionItem[] = [
  {
    id: "about",
    chapter: "CHAPTER 01",
    title: "ABOUT CPC & JAIN UNIVERSITY",
    tag: "ARCHIVE // THE ROOTS",
    Component: AboutSection,
  },
  {
    id: "path",
    chapter: "CHAPTER 02",
    title: "THE LEARNING PATH",
    tag: "PROGRESSION // 0 TO 1",
    Component: PathSection,
  },
  {
    id: "resources",
    chapter: "CHAPTER 03",
    title: "THE RESOURCE SHELF",
    tag: "PRACTICE // CURATED",
    Component: ResourcesSection,
  },
  {
    id: "events",
    chapter: "CHAPTER 04",
    title: "EVENTS & SESSIONS",
    tag: "CALENDAR // LIVE PEER ROOMS",
    Component: EventsSection,
  },
  {
    id: "team",
    chapter: "CHAPTER 05",
    title: "THE TEAM & LEADERBOARD",
    tag: "COMMUNITY // LEADERBOARD",
    Component: TeamSection,
  },
  {
    id: "join",
    chapter: "CHAPTER 06",
    title: "JOIN THE CLUB",
    tag: "ENTRY // GENERAL & AUDITION",
    Component: JoinSection,
  },
];

export default function InfiniteScroll() {
  // Start with 1 section ready (About) so the transition from landing is immediate
  const [loadedCount, setLoadedCount] = useState<number>(1);
  const [showHud, setShowHud] = useState<boolean>(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Monitor scroll for floating HUD visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowHud(true);
      } else {
        setShowHud(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to auto-load the next section as user scrolls
  const loadNextSection = useCallback(() => {
    setLoadedCount((prev) => {
      if (prev < SECTIONS.length) {
        return prev + 1;
      }
      return prev;
    });
  }, []);

  const unlockAllSections = () => {
    setLoadedCount(SECTIONS.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!sentinelRef.current) return;
    if (loadedCount >= SECTIONS.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          loadNextSection();
        }
      },
      {
        rootMargin: "450px 0px", // Trigger preload 450px before reaching bottom
        threshold: 0.01,
      }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [loadedCount, loadNextSection]);

  const activeChapterName =
    loadedCount > 0 && loadedCount <= SECTIONS.length
      ? SECTIONS[loadedCount - 1].title
      : "ALL CHAPTERS";

  return (
    <div className={styles.feedContainer}>
      {/* Render all currently loaded sections */}
      {SECTIONS.slice(0, loadedCount).map((section, idx) => {
        const SectionComp = section.Component;
        return (
          <div
            key={section.id}
            id={`stream-${section.id}`}
            className={`${styles.sectionWrapper} ${styles.loaded}`}
          >
            {/* Chapter Transition Divider */}
            <div className={styles.chapterBanner}>
              <span className={styles.chapterBadge}>{section.chapter}</span>
              <span className={styles.chapterTitle}>{section.title}</span>
              <span className={styles.chapterLine} />
            </div>

            {/* Render Section Component */}
            <SectionComp />
          </div>
        );
      })}

      {/* Sentinel and interactive load trigger */}
      {loadedCount < SECTIONS.length ? (
        <>
          <div ref={sentinelRef} className={styles.sentinel} />

          <div
            className={styles.scrollCueContainer}
            onClick={loadNextSection}
            role="button"
            tabIndex={0}
            aria-label={`Scroll or click to reveal ${SECTIONS[loadedCount]?.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                loadNextSection();
              }
            }}
          >
            <div className={styles.scrollCuePill}>
              <ChevronDown size={16} className={styles.chevronIcon} />
              <span>
                SCROLL TO UNLOCK {SECTIONS[loadedCount]?.chapter}: {SECTIONS[loadedCount]?.title}
              </span>
            </div>

            <div className={styles.progressBarContainer}>
              <div
                className={styles.progressBarFill}
                style={{ width: `${(loadedCount / SECTIONS.length) * 100}%` }}
              />
            </div>
          </div>
        </>
      ) : (
        <div className={styles.allLoadedBanner}>
          <Sparkles size={14} />
          <span>LIVE FEED COMPLETE · ALL {SECTIONS.length} CHAPTERS UNLOCKED</span>
          <Sparkles size={14} />
        </div>
      )}

      {/* When all sections are loaded, show the grand SiteFooter at the very bottom */}
      {loadedCount === SECTIONS.length && <SiteFooter />}

      {/* Floating HUD navigation pill */}
      {showHud && (
        <aside className={styles.floatingHud} aria-label="Stream navigation">
          <span className={styles.hudCount}>
            {loadedCount}/{SECTIONS.length} CHAPTERS
          </span>
          <span className={styles.hudDivider}>|</span>
          <button
            type="button"
            className={styles.topButton}
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={13} />
            <span>TOP</span>
          </button>
          {loadedCount < SECTIONS.length && (
            <>
              <span className={styles.hudDivider}>|</span>
              <button
                type="button"
                className={styles.topButton}
                onClick={unlockAllSections}
                title="Expand all chapters immediately"
              >
                UNFOLD ALL
              </button>
            </>
          )}
        </aside>
      )}
    </div>
  );
}
