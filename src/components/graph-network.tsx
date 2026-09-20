"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, Container } from "@tsparticles/engine";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";

const particlesInit = async (engine: Engine) => {
  await loadSlim(engine);
};

interface GraphNetworkProps {
  id?: string;
  className?: string;
}

export function GraphNetwork({ id = "cpc-global-graph-network", className = "graph-network" }: GraphNetworkProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<Container | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Pause/resume based on visibility to save resources on low-end devices
  useEffect(() => {
    if (!wrapperRef.current || shouldReduceMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const container = containerRef.current;
          if (!container) return;
          if (entry.isIntersecting) {
            container.play();
          } else {
            container.pause();
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  const handleParticlesLoaded = useCallback(async (container?: Container) => {
    containerRef.current = container ?? null;
  }, []);

  return (
    <div ref={wrapperRef} style={{ display: "contents" }}>
      <ParticlesProvider init={particlesInit}>
        <Particles
          className={className}
          id={id}
          particlesLoaded={handleParticlesLoaded}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: "transparent" } },
            detectRetina: true,
            fpsLimit: 60,
            interactivity: {
              detectsOn: "window",
              events: {
                onHover: { enable: !shouldReduceMotion, mode: "grab" },
                resize: { enable: true },
              },
              modes: {
                grab: {
                  distance: 160,
                  links: { opacity: 0.55 },
                },
              },
            },
            particles: {
              color: { value: ["#00ffff", "#00ff88"] },
              links: {
                color: "#00ffff",
                distance: 130,
                enable: true,
                opacity: 0.16,
                width: 1,
              },
              move: {
                enable: !shouldReduceMotion,
                outModes: { default: "bounce" },
                speed: 0.3,
              },
              number: {
                density: { enable: false },
                value: 40,
              },
              opacity: {
                value: { min: 0.2, max: 0.55 },
              },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 2.2 } },
            },
            responsive: [
              {
                maxWidth: 768,
                options: {
                  particles: {
                    number: { value: 20 },
                    links: { distance: 100, opacity: 0.14 },
                  },
                },
              },
            ],
          }}
        />
      </ParticlesProvider>
    </div>
  );
}
