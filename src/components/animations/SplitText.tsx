"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
  type?: "words" | "lines";
}

export function SplitText({ text, className, type = "words" }: SplitTextProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll(".split-item");

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 20,
        filter: "blur(4px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const parts = type === "words" ? text.split(" ") : [text];

  return (
    <h2 ref={containerRef} className={className}>
      {parts.map((part, i) => (
        <span
          key={i}
          className="split-item inline-block mr-[0.25em]"
          style={{ willChange: "transform, opacity, filter" }}
        >
          {part}
        </span>
      ))}
    </h2>
  );
}
