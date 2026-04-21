"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { RevealSection } from "@/components/animations/RevealSection";
import Image from "next/image";
import { AlertTriangle, Clock, RefreshCw, HandCoins } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ParentMistakes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bgImageRef = useRef<HTMLDivElement>(null);

  const mistakes = [
    {
      icon: Clock,
      num: "01",
      title: "Too much pressure, too early",
      text: "When winning equals worth at age 8, athletes learn to fear failure instead of learning from it.",
    },
    {
      icon: HandCoins,
      num: "02",
      title: "Spending without direction",
      text: "Private lessons, elite camps, and equipment do not matter if the timing is wrong.",
    },
    {
      icon: RefreshCw,
      num: "03",
      title: "Comparing their child to others",
      text: "Every athlete matures differently. Comparison is almost always misleading and always damaging.",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (bgImageRef.current) {
        gsap.fromTo(
          bgImageRef.current,
          { y: -20 },
          {
            y: 20,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }

      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 42, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 72%",
              toggleActions: "play none none reverse",
            },
            delay: 0.15 + i * 0.12,
          }
        );

        const icon = card.querySelector("[data-icon]");
        if (icon) {
          gsap.fromTo(
            icon,
            { scale: 0.75, rotate: -12, opacity: 0 },
            {
              scale: 1,
              rotate: 0,
              opacity: 1,
              duration: 0.45,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 72%",
                toggleActions: "play none none reverse",
              },
              delay: 0.3 + i * 0.12,
            }
          );
        }
      });

      gsap.to("[data-float]", {
        y: -15,
        duration: 4.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background-deep py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10">
        <div ref={bgImageRef} className="absolute inset-[-24px]">
          <Image
            src="/images/problem/confused.png"
            alt="Background"
            fill
            className="object-cover opacity-[0.06] blur-[1px]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background-deep/95 to-background-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-background-deep via-transparent to-background-deep/95" />
      </div>

      <div
        data-float
        className="pointer-events-none absolute -right-20 top-1/4 h-48 w-48 rounded-full bg-accent-lime/[0.07] blur-[120px] sm:h-64 sm:w-64"
      />
      <div
        data-float
        className="pointer-events-none absolute -left-20 bottom-1/3 h-48 w-48 rounded-full bg-accent-lime/[0.07] blur-[100px] sm:h-56 sm:w-56"
      />

      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent-lime/20 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent-lime/15 to-transparent" />

      <div className="container relative z-10 mx-auto w-full px-6">
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">
          <RevealSection>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-lime/30 bg-accent-lime/12 px-5 py-2 shadow-[0_8px_20px_-14px_rgba(var(--accent-primary-rgb),0.55)] backdrop-blur-sm">
              <AlertTriangle className="h-3.5 w-3.5 text-accent-lime" />
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-accent-lime">
                Where Parents Go Wrong
              </span>
            </div>

            <h2 className="text-3xl font-serif leading-[1.08] text-text-heading sm:text-4xl lg:text-5xl">
              With the best{" "}
              <span className="italic text-accent-lime">intentions</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-text-soft sm:text-lg">
              Nobody teaches parents how to support long-term athlete
              development. These mistakes are common &mdash; and highly
              fixable.
            </p>
          </RevealSection>
        </div>

        <div className="perspective-[1200px] mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-3 lg:gap-6">
          {mistakes.map((mistake, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-accent-lime/40 hover:shadow-[0_12px_40px_-12px_rgba(var(--accent-primary-rgb),0.4)]"
            >
              <div className="pointer-events-none absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-accent-lime/[0.08] to-transparent sm:h-28" />

              <div className="relative z-10 p-6 sm:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="select-none font-serif text-4xl font-semibold text-white/5 transition-colors duration-500 group-hover:text-white/10 lg:text-5xl">
                    {mistake.num}
                  </span>
                  <div
                    data-icon
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent-lime/20 bg-accent-lime/10 transition-all duration-500 group-hover:scale-105 group-hover:border-accent-lime/45 group-hover:bg-accent-lime/20"
                  >
                    <mistake.icon className="h-5 w-5 text-accent-lime transition-all duration-500 group-hover:scale-110" />
                  </div>
                </div>

                <h3 className="text-xl font-serif leading-tight text-white transition-colors duration-300 group-hover:text-accent-primary sm:text-2xl">
                  {mistake.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                  {mistake.text}
                </p>

                <div className="mt-6 border-t border-white/10 pt-4 transition-colors duration-500 group-hover:border-accent-lime/30">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent-lime/55 transition-colors duration-500 group-hover:bg-accent-lime" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40 transition-colors duration-500 group-hover:text-white/70">
                      Common mistake #{i + 1}
                    </span>
                  </div>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-accent-lime/45 via-accent-lime/18 to-transparent transition-all duration-500 group-hover:from-accent-lime/80" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10 lg:mt-12">
          <RevealSection delay={0.6}>
            <div className="mx-auto inline-flex max-w-xl items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent-lime/10" />
              <p className="px-2 text-xs italic text-text-muted sm:text-sm">
                &quot;The best thing a parent can do is understand the stage
                &mdash; and protect the process.&quot;
              </p>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent-lime/10" />
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
