"use client";

import { useEffect, useRef } from "react";
import { RevealSection } from "@/components/animations/RevealSection";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function JourneyTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressPathRef = useRef<SVGPathElement>(null);
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);

  type StageItem = {
    stage: string;
    subtitle: string;
    feeling: string;
    focus: string;
    image: string;
    side: "left" | "right";
    note?: string;
  };

  const stages: StageItem[] = [
    {
      stage: "Ignition",
      subtitle: "The spark that starts everything",
      feeling: "Excited, curious, free",
      focus: "Explore freely. Don't specialize yet.",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
      side: "left",
    },
    {
      stage: "Awareness",
      subtitle: "Learning how the game really works",
      feeling: "Engaged, sometimes overwhelmed",
      focus: "Build fundamentals. Accept correction.",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbb1925846?q=80&w=1600&auto=format&fit=crop",
      side: "right",
    },
    {
      stage: "Momentum",
      subtitle: "Progress starts to feel real",
      feeling: "Confident, motivated",
      focus: "Stay consistent. Build habits, not just results.",
      image:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1600&auto=format&fit=crop",
      side: "left",
    },
    {
      stage: "Resistance",
      subtitle: "The wall every athlete must face",
      feeling: "Frustrated, stuck, questioning",
      focus: "Don't quit. This is where growth lives.",
      note: "This is where most athletes feel stuck — and where many quit.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
      side: "right",
    },
    {
      stage: "Adaptation",
      subtitle: "The body and mind catch up",
      feeling: "Tired, but things are resolving",
      focus: "Trust the process. Recovery is training.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop",
      side: "left",
    },
    {
      stage: "Commitment",
      subtitle: "The decision to go deeper",
      feeling: "Clear, focused, sometimes isolated",
      focus: "Own your identity as an athlete.",
      image:
        "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1600&auto=format&fit=crop",
      side: "right",
    },
    {
      stage: "Competition",
      subtitle: "Testing against the best",
      feeling: "Pressure, nerves, deep focus",
      focus: "Compete to learn. Results are feedback.",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop",
      side: "left",
    },
    {
      stage: "Breakthrough",
      subtitle: "Something shifts permanently",
      feeling: "Surprised, empowered, hungry",
      focus: "Understand what created it—then repeat.",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
      side: "right",
    },
    {
      stage: "Identity",
      subtitle: "The athlete becomes the role",
      feeling: "Grounded, purposeful",
      focus: "Lead from your identity. Your standard sets others'.",
      image:
        "https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=1600&auto=format&fit=crop",
      side: "left",
    },
    {
      stage: "Continuity",
      subtitle: "The long game is the only game",
      feeling: "Mature, seasoned, invested",
      focus: "Give back. Keep growing differently.",
      image:
        "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?q=80&w=1600&auto=format&fit=crop",
      side: "right",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || !progressPathRef.current) return;

    const path = progressPathRef.current;
    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          end: "bottom 72%",
          scrub: 1.15,
        },
      });

      milestoneRefs.current.forEach((card) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 56 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );

        const image = card.querySelector("[data-stage-image]");
        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.12 },
            {
              scale: 1,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background-deep py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-8 h-[360px] w-[560px] -translate-x-1/2 rounded-full bg-accent-lime/[0.05] blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <RevealSection>
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.24em] text-accent-lime/90">
              The Journey
            </span>

            <h2 className="text-3xl font-serif leading-[1.06] text-text-heading sm:text-4xl lg:text-5xl">
              Every athlete moves through stages
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-text-soft sm:text-lg">
              The path is not random. Each stage brings its own emotions,
              pressure, and priorities. What matters is knowing what to focus on
              next.
            </p>
          </RevealSection>
        </div>

        <div className="relative mx-auto mt-16 max-w-7xl sm:mt-20">
          {/* desktop road */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <svg
              viewBox="0 0 1400 2200"
              className="h-full w-full"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 360 120
                   C 570 70, 760 180, 980 240
                   C 1160 288, 1170 445, 1000 545
                   C 850 632, 610 590, 500 705
                   C 392 818, 445 980, 655 1045
                   C 868 1112, 1090 1088, 1125 1250
                   C 1150 1366, 996 1420, 780 1400
                   C 575 1382, 428 1460, 430 1590
                   C 432 1722, 610 1785, 815 1800
                   C 1000 1812, 1115 1875, 1050 2000
                   C 990 2115, 810 2132, 640 2080"
                stroke="rgba(var(--accent-primary-rgb),0.10)"
                strokeWidth="90"
                strokeLinecap="round"
              />

              <path
                d="M 360 120
                   C 570 70, 760 180, 980 240
                   C 1160 288, 1170 445, 1000 545
                   C 850 632, 610 590, 500 705
                   C 392 818, 445 980, 655 1045
                   C 868 1112, 1090 1088, 1125 1250
                   C 1150 1366, 996 1420, 780 1400
                   C 575 1382, 428 1460, 430 1590
                   C 432 1722, 610 1785, 815 1800
                   C 1000 1812, 1115 1875, 1050 2000
                   C 990 2115, 810 2132, 640 2080"
                stroke="rgba(var(--accent-primary-rgb),0.24)"
                strokeWidth="30"
                strokeLinecap="round"
              />

              <path
                d="M 360 120
                   C 570 70, 760 180, 980 240
                   C 1160 288, 1170 445, 1000 545
                   C 850 632, 610 590, 500 705
                   C 392 818, 445 980, 655 1045
                   C 868 1112, 1090 1088, 1125 1250
                   C 1150 1366, 996 1420, 780 1400
                   C 575 1382, 428 1460, 430 1590
                   C 432 1722, 610 1785, 815 1800
                   C 1000 1812, 1115 1875, 1050 2000
                   C 990 2115, 810 2132, 640 2080"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="10 14"
              />

              <path
                ref={progressPathRef}
                d="M 360 120
                   C 570 70, 760 180, 980 240
                   C 1160 288, 1170 445, 1000 545
                   C 850 632, 610 590, 500 705
                   C 392 818, 445 980, 655 1045
                   C 868 1112, 1090 1088, 1125 1250
                   C 1150 1366, 996 1420, 780 1400
                   C 575 1382, 428 1460, 430 1590
                   C 432 1722, 610 1785, 815 1800
                   C 1000 1812, 1115 1875, 1050 2000
                   C 990 2115, 810 2132, 640 2080"
                stroke="rgba(var(--accent-primary-rgb),0.85)"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* mobile line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent-lime/10 via-accent-lime/35 to-accent-lime/10 lg:hidden" />

          <div className="relative flex flex-col gap-8 sm:gap-10 lg:gap-14">
            {stages.map((item, i) => {
              const isLeft = item.side === "left";

              return (
                <div
                  key={item.stage}
                  ref={(el) => {
                    milestoneRefs.current[i] = el;
                  }}
                  className={`relative pl-12 lg:pl-0 ${
                    isLeft ? "lg:pr-[48%]" : "lg:pl-[48%]"
                  }`}
                >
                  {/* subtle connector instead of round icon */}
                  <div
                    className={`absolute left-5 top-16 h-px w-10 bg-gradient-to-r from-accent-lime/45 to-transparent lg:top-1/2 lg:w-14 ${
                      isLeft
                        ? "lg:left-[41.2%]"
                        : "lg:left-[50.6%]"
                    }`}
                  />

                  <article className="group overflow-hidden rounded-[30px] border border-black/5 bg-surface shadow-brand-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-md dark:border-white/10 dark:bg-surface-alt">
                    <div className="grid min-h-[320px] grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
                      {/* image */}
                      <div className="relative min-h-[240px] overflow-hidden lg:min-h-full">
                        <Image
                          src={item.image}
                          alt={item.stage}
                          fill
                          data-stage-image
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-black/40" />

                        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                          Stage {(i + 1).toString().padStart(2, "0")}
                        </div>

                        <div className="absolute inset-x-5 bottom-5">
                          <h3 className="text-2xl font-serif leading-tight text-white sm:text-[1.9rem]">
                            {item.stage}
                          </h3>
                          <p className="mt-2 max-w-md text-sm leading-6 text-white/88 sm:text-base">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* content */}
                      <div className="flex flex-col justify-center p-6 sm:p-7 lg:p-8">
                        <div className="grid gap-5">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                              What they feel
                            </p>
                            <p className="mt-2 text-base leading-7 text-text-main sm:text-lg">
                              {item.feeling}
                            </p>
                          </div>

                          <div className="h-px w-full bg-gradient-to-r from-accent-lime/25 to-transparent" />

                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                              Focus on
                            </p>
                            <p className="mt-2 text-sm leading-7 text-text-soft sm:text-base">
                              {item.focus}
                            </p>
                          </div>

                          {item.note && (
                            <>
                              <div className="h-px w-full bg-gradient-to-r from-accent-warm/30 to-transparent" />
                              <div className="rounded-2xl bg-accent-warm/[0.08] px-4 py-3">
                                <p className="text-sm leading-6 text-text-main">
                                  {item.note}
                                </p>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}