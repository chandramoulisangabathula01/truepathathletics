// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { ArrowRight, Menu, X } from "lucide-react";
// import { ThemeToggle } from "@/components/ui/ThemeToggle";
// import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";

// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// const NAV_LINKS = [
//   { name: "Home", href: "/" },
//   { name: "For Parents", href: "/for-parents" },
//   { name: "The Journey", href: "/journey" },
//   { name: "How We Guide", href: "/guide" },
//   { name: "Contact", href: "/contact" },
// ] as const;

// export function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [hoveredLink, setHoveredLink] = useState<number | null>(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const isTickingRef = useRef(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoaded(true), 50);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const updateScrollUI = () => {
//       const winScroll = window.scrollY;
//       const pageHeight =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;
//       const progress = pageHeight > 0 ? (winScroll / pageHeight) * 100 : 0;

//       setIsScrolled(winScroll > 20);
//       setScrollProgress(Math.min(100, Math.max(0, progress)));
//       isTickingRef.current = false;
//     };

//     const handleScroll = () => {
//       if (isTickingRef.current) return;
//       isTickingRef.current = true;
//       requestAnimationFrame(updateScrollUI);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isMobileMenuOpen]);

//   const closeMobileMenu = () => setIsMobileMenuOpen(false);

//   return (
//     <>
//       <style jsx global>{`
//         @keyframes navEnter {
//           from { opacity: 0; transform: translateY(-20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slideIn {
//           from { opacity: 0; transform: translateX(24px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes shimmerSweep {
//           from { transform: translateX(-100%); }
//           to { transform: translateX(100%); }
//         }
//       `}</style>

//       <nav
//         className={cn(
//           "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
//           isScrolled
//             ? "bg-background-deep/80 py-3 backdrop-blur-xl shadow-[0_4px_30px_-8px_rgba(0,0,0,0.3)] border-b border-black/5 dark:border-white/[0.06] sm:py-3.5"
//             : "bg-black/5 py-5 sm:py-6 lg:py-7 backdrop-blur-[2px] border-b border-white/[0.03]"
//         )}
//         style={{
//           animation: isLoaded
//             ? "navEnter 0.6s cubic-bezier(0.22,1,0.36,1) forwards"
//             : "none",
//           opacity: isLoaded ? undefined : 0,
//         }}
//       >
//         {/* Progress Bar */}
//         <div className="pointer-events-none absolute inset-x-0 top-0 z-[60] h-[2.5px]">
//           <div
//             className="h-full bg-gradient-to-r from-accent-lime via-emerald-400 to-accent-lime transition-[width] duration-200 ease-out"
//             style={{
//               width: `${scrollProgress}%`,
//               boxShadow: scrollProgress > 0 ? "0 0 10px rgba(191,255,0,0.35)" : "none",
//             }}
//           />
//         </div>

//         <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between px-6 sm:px-10 lg:px-14">
//           {/* Logo */}
//           <Link
//             href="/"
//             onClick={closeMobileMenu}
//             className="group flex items-center gap-3"
//             style={{
//               animation: isLoaded ? "fadeUp 0.5s ease 0.15s both" : "none",
//             }}
//           >
//             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F1226] text-xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-105 dark:bg-accent-lime dark:text-background-deep dark:shadow-[0_0_20px_rgba(191,255,0,0.25)]">
//               TP
//             </div>
//             <span className="hidden font-serif text-xl tracking-tight sm:block">
//               True Path{" "}
//               <span className="ml-0.5 align-top font-sans text-sm font-bold text-[#0F1226] dark:text-accent-lime">
//                 ATHLETICS
//               </span>
//             </span>
//           </Link>

//           {/* Desktop Links */}
//           <div className="hidden items-center md:flex">
//             {NAV_LINKS.map((link, i) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="group relative px-4 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.13em] text-text-soft transition-colors duration-300 hover:text-text-main lg:px-5"
//                 style={{
//                   animation: isLoaded
//                     ? `fadeUp 0.4s ease ${0.25 + i * 0.06}s both`
//                     : "none",
//                 }}
//                 onMouseEnter={() => setHoveredLink(i)}
//                 onMouseLeave={() => setHoveredLink(null)}
//               >
//                 {/* Hover pill */}
//                 <span
//                   className={cn(
//                     "absolute inset-0 rounded-full bg-accent-lime/[0.05] transition-all duration-300 dark:bg-accent-lime/[0.07]",
//                     hoveredLink === i ? "scale-100 opacity-100" : "scale-90 opacity-0"
//                   )}
//                 />
//                 <span className="relative z-10">{link.name}</span>
//                 {/* Underline */}
//                 <span className="absolute bottom-0.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-accent-lime transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-3/5" />
//               </Link>
//             ))}
//           </div>

//           {/* Desktop Right */}
//           <div
//             className="hidden items-center gap-4 md:flex"
//             style={{
//               animation: isLoaded ? "fadeUp 0.4s ease 0.6s both" : "none",
//             }}
//           >
//             <ThemeToggle />
//             <Link
//               href="/contact"
//               className="btn-premium btn-primary group relative hidden overflow-hidden whitespace-nowrap rounded-full px-6 py-2.5 text-sm xl:flex"
//             >
//               <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
//               <span className="relative flex items-center gap-2">
//                 Understand Your Athlete Stage
//                 <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
//               </span>
//             </Link>
//           </div>

//           {/* Mobile Controls */}
//           <div
//             className="flex items-center gap-3 md:hidden"
//             style={{
//               animation: isLoaded ? "fadeUp 0.4s ease 0.4s both" : "none",
//             }}
//           >
//             <ThemeToggle />
//             <button
//               className="relative grid h-10 w-10 place-items-center rounded-full border border-black/[0.08] bg-background-light transition-all duration-300 hover:scale-105 active:scale-95 dark:border-white/10 dark:bg-white/5"
//               onClick={() => setIsMobileMenuOpen((prev) => !prev)}
//               aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
//             >
//               <Menu
//                 className={cn(
//                   "h-5 w-5 absolute transition-all duration-400",
//                   isMobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
//                 )}
//               />
//               <X
//                 className={cn(
//                   "h-5 w-5 absolute transition-all duration-400",
//                   isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
//                 )}
//               />
//             </button>
//           </div>
//         </div>

//         {/* Bottom accent line */}
//         <div
//           className={cn(
//             "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-lime/15 to-transparent transition-opacity duration-500",
//             isScrolled ? "opacity-100" : "opacity-0"
//           )}
//         />
//       </nav>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={cn(
//           "fixed inset-0 z-40 md:hidden transition-[visibility,opacity] duration-500",
//           isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
//         )}
//       >
//         <button
//           className="absolute inset-0 bg-background-deep/50 backdrop-blur-sm"
//           aria-label="Close menu"
//           onClick={closeMobileMenu}
//         />

//         <div
//           className={cn(
//             "absolute inset-y-0 right-0 flex w-full max-w-[340px] flex-col border-l border-white/[0.05] bg-background-deep/[0.97] px-7 pb-10 pt-24 backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
//             isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//           )}
//         >
//           {/* Ambient glow */}
//           <div className="pointer-events-none absolute -left-16 top-1/3 h-48 w-48 rounded-full bg-accent-lime/[0.03] blur-3xl" />

//           <button
//             className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:rotate-90 hover:text-accent-lime"
//             onClick={closeMobileMenu}
//             aria-label="Close menu"
//           >
//             <X className="h-5 w-5" />
//           </button>

//           <div className="flex flex-1 flex-col justify-center gap-1">
//             {NAV_LINKS.map((link, i) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={closeMobileMenu}
//                 className="group flex items-center justify-between rounded-xl px-3 py-3.5 font-serif text-2xl tracking-tight text-white/85 transition-all duration-300 hover:bg-white/[0.03] hover:text-accent-lime"
//                 style={{
//                   animation: isMobileMenuOpen
//                     ? `slideIn 0.4s ease ${0.05 + i * 0.06}s both`
//                     : "none",
//                 }}
//               >
//                 <span className="flex items-center gap-3">
//                   <span className="font-sans text-[0.65rem] font-medium tracking-widest text-white/20">
//                     0{i + 1}
//                   </span>
//                   {link.name}
//                 </span>
//                 <ArrowRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-50" />
//               </Link>
//             ))}
//           </div>

//           <div
//             style={{
//               animation: isMobileMenuOpen
//                 ? `slideIn 0.4s ease ${0.05 + NAV_LINKS.length * 0.06}s both`
//                 : "none",
//             }}
//           >
//             <Link
//               href="/contact"
//               onClick={closeMobileMenu}
//               className="btn-premium btn-primary group relative w-full justify-center overflow-hidden rounded-xl py-3.5"
//             >
//               <span className="relative flex items-center gap-2">
//                 Understand Your Athlete Stage
//                 <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import gsap from "gsap";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "For Parents", href: "/for-parents" },
  { name: "The Journey", href: "/journey" },
  { name: "How We Guide", href: "/guide" },
  { name: "Contact", href: "/contact" },
] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const mobileCtrlRef = useRef<HTMLDivElement>(null);
  const mobileDrawerRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const mobileCTARef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const isTickingRef = useRef(false);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Broadcast navbar height as CSS variable
  useEffect(() => {
    const broadcast = () => {
      if (!navRef.current) return;
      const h = navRef.current.offsetHeight;
      document.documentElement.style.setProperty("--nav-h", `${h}px`);
    };

    broadcast();
    const ro = new ResizeObserver(broadcast);
    if (navRef.current) ro.observe(navRef.current);
    window.addEventListener("resize", broadcast, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", broadcast);
    };
  }, [isScrolled]);

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0
      );

      tl.fromTo(
        logoRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 },
        0.3
      );

      if (linksRef.current) {
        const links = linksRef.current.querySelectorAll("a");
        tl.fromTo(
          links,
          { y: -15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.06 },
          0.4
        );
      }

      tl.fromTo(
        actionsRef.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 },
        0.5
      );

      tl.fromTo(
        mobileCtrlRef.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 },
        0.5
      );
    });

    return () => ctx.revert();
  }, []);

  // Scroll handler
  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const h =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const p = h > 0 ? (y / h) * 100 : 0;

      setIsScrolled(y > 20);
      setScrollProgress(Math.min(100, Math.max(0, p)));
      isTickingRef.current = false;
    };

    const onScroll = () => {
      if (isTickingRef.current) return;
      isTickingRef.current = true;
      requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Progress bar GSAP
  useEffect(() => {
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        width: `${scrollProgress}%`,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [scrollProgress]);

  // Lock body
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Mobile menu animation
  useEffect(() => {
    if (isMobileMenuOpen) {
      tlRef.current = gsap.timeline({ defaults: { ease: "power3.out" } });

      tlRef.current.fromTo(
        mobileDrawerRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.5 },
        0
      );

      tlRef.current.fromTo(
        mobileLinksRef.current.filter(Boolean),
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.06 },
        0.2
      );

      tlRef.current.fromTo(
        mobileCTARef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.5
      );
    } else if (tlRef.current) {
      tlRef.current.reverse();
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "sticky top-0 z-50 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isScrolled
            ? "bg-background-deep/85 py-1 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.04),0_8px_40px_-12px_rgba(0,0,0,0.45)] sm:py-3.5"
            : "bg-background-deep/60 py-1 sm:py-2 lg:py-3 backdrop-blur-xl border-b border-white/[0.04]"
        )}
        style={{ opacity: 0 }}
      >
        {/* Progress */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[60] h-[2px] overflow-hidden">
          <div
            ref={progressRef}
            className="h-full w-0 bg-gradient-to-r from-accent-lime/80 via-accent-lime to-accent-secondary"
            style={{
              boxShadow:
                scrollProgress > 0
                  ? "0 0 10px var(--accent-glow), 0 0 2px var(--accent-primary)"
                  : "none",
            }}
          />
        </div>

        <div className="mx-auto flex w-full max-w-[1460px] items-center justify-between px-1 sm:px-1 lg:px-1">
          {/* Logo */}
          <Link
            ref={logoRef}
            href="/"
            onClick={closeMobileMenu}
            className="group relative flex items-center gap-3"
            style={{ opacity: 0 }}
          >
            <div className="relative flex h-7 md:h-10 items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo/logo_truepath.png"
                alt="True Path Logo"
                width={240}
                height={80}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div ref={linksRef} className="ml-auto hidden items-center md:flex">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative px-3.5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-text-soft transition-colors duration-300 hover:text-text-main lg:px-5"
                onMouseEnter={() => setHoveredLink(i)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{ opacity: 0 }}
              >
                <span
                  className={cn(
                    "absolute inset-x-1 inset-y-0 rounded-lg bg-text-main/[0.04] transition-all duration-300",
                    hoveredLink === i
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-0"
                  )}
                />
                <span className="relative z-10">{link.name}</span>
                <span
                  className={cn(
                    "absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-accent-lime transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    hoveredLink === i ? "w-3/5 opacity-100" : "w-0 opacity-0"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div
            ref={actionsRef}
            className="hidden items-center gap-4 md:flex"
            style={{ opacity: 0 }}
          >
            <Link
              href="/contact"
              className="btn-premium btn-primary group relative hidden overflow-hidden whitespace-nowrap rounded-full px-5 py-2.5 text-sm xl:flex"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative flex items-center gap-2">
                Understand Your Athlete Stage
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div
            ref={mobileCtrlRef}
            className="flex items-center gap-3 md:hidden"
            style={{ opacity: 0 }}
          >
            <button
              className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-surface-alt/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-accent-lime/20 active:scale-95"
              onClick={() => setIsMobileMenuOpen((p) => !p)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <Menu
                className={cn(
                  "h-5 w-5 text-text-soft absolute transition-all duration-400",
                  isMobileMenuOpen
                    ? "opacity-0 rotate-90 scale-0"
                    : "opacity-100 rotate-0 scale-100"
                )}
              />
              <X
                className={cn(
                  "h-5 w-5 text-text-soft absolute transition-all duration-400",
                  isMobileMenuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-0"
                )}
              />
            </button>
            <ThemeToggle />
          </div>
        </div>

        {/* Bottom glow */}
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-lime/10 to-transparent transition-opacity duration-600",
            isScrolled ? "opacity-100" : "opacity-0"
          )}
        />
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-[visibility,opacity] duration-400",
          isMobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        )}
      >
        <button
          className={cn(
            "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-400",
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          aria-label="Close menu"
          onClick={closeMobileMenu}
        />

        <div
          ref={mobileDrawerRef}
          className="absolute inset-y-0 right-0 flex w-full max-w-[320px] flex-col border-l border-border bg-background-deep/95 px-6 pb-8 pt-24 backdrop-blur-2xl sm:max-w-[360px] sm:px-8"
          style={{ transform: "translateX(100%)" }}
        >
          <div className="pointer-events-none absolute -left-20 top-1/3 h-52 w-52 rounded-full bg-accent-lime/[0.02] blur-[80px]" />

          <button
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-border text-text-soft transition-all duration-300 hover:rotate-90 hover:border-accent-lime/20 hover:text-accent-lime sm:right-7 sm:top-6"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-1 flex-col justify-center gap-0.5">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.name}
                ref={(el) => {
                  mobileLinksRef.current[i] = el;
                }}
                href={link.href}
                onClick={closeMobileMenu}
                className="group flex items-center justify-between rounded-xl px-3 py-3.5 font-serif text-[1.4rem] tracking-tight text-text-main transition-all duration-300 hover:bg-surface-alt/50 hover:text-accent-lime sm:text-2xl"
                style={{ opacity: 0 }}
              >
                <span className="flex items-center gap-3">
                  <span className="font-sans text-[0.6rem] font-medium tracking-[0.2em] text-text-muted">
                    0{i + 1}
                  </span>
                  {link.name}
                </span>
                <ArrowRight className="h-4 w-4 -translate-x-2 text-text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-accent-lime/60 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          <div ref={mobileCTARef} style={{ opacity: 0 }}>
            <div className="mb-5 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="btn-premium btn-primary group relative w-full justify-center overflow-hidden rounded-xl py-3.5"
            >
              <span className="relative flex items-center gap-2 text-sm">
                Understand Your Athlete Stage
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
