"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PrecisionRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  stagger?: number;
}

export function PrecisionReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1.2,
  distance = 50,
  stagger = 0,
}: PrecisionRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const x = direction === "left" ? distance : direction === "right" ? -distance : 0;
    const y = direction === "up" ? distance : direction === "down" ? -distance : 0;

    const ctx = gsap.context(() => {
      // Find all direct children or elements marked for staggered animation
      const targets = element.children.length > 0 ? element.children : element;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          x,
          y,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          duration,
          delay,
          stagger,
          ease: "expo.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [direction, delay, duration, distance, stagger]);

  return (
    <div ref={elementRef} className="will-change-transform">
      {children}
    </div>
  );
}
