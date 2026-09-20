"use client";

import React from "react";

interface CassetteTapeProps {
  title?: string;
  side?: string;
  variant?: "jain" | "craft" | "cpc" | "1" | "2" | "3" | "same";
  className?: string;
}

export function CassetteTape({
  title = "ABOUT",
  side = "SIDE A",
  variant = "jain",
  className = "",
}: CassetteTapeProps) {
  // Authentic cassette assets matching the reference design
  // The primary hero cassette from the user reference is Cassette.webp (translucent acrylic with index card)
  const cassetteSrcMap: Record<string, string> = {
    jain: "/about/Cassette.webp",
    craft: "/about/Cassette.webp", // "same cassette" as requested by user
    cpc: "/about/Cassette.webp",   // "same cassette" as requested by user
    "1": "/about/Cassette.webp",
    "2": "/about/2.webp",
    "3": "/about/3.webp",
    same: "/about/Cassette.webp",
  };

  const src = cassetteSrcMap[variant] || "/about/Cassette.webp";

  return (
    <div className={`cassette-container ${className}`}>
      <img
        src={src}
        alt={`${title} Cassette Tape - ${side}`}
        className="cassette-svg"
        loading="eager"
        decoding="async"
        draggable={false}
      />
    </div>
  );
}

