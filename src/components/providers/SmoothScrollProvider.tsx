"use client";

import { useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.08,             // Linear interpolation for a buttery, continuous flow
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.25,  // Increased slightly so scrolling feels faster and more responsive
      touchMultiplier: 1.35, 
      syncTouch: true,        // syncTouch true often makes mobile flow feel more native
    });

    const onLenisScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", onLenisScroll);

    let rafId = 0;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off("scroll", onLenisScroll);
      lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}
