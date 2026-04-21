"use client";

import { useEffect, useRef } from "react";
import { RevealSection } from "@/components/animations/RevealSection";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export function JourneyTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressPathRef = useRef<SVGPathElement>(null);
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);

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
          end: "bottom 20%",
          scrub: 2.5,
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
                   S 1170 445, 1000 545
                   S 610 590, 500 705
                   S 445 980, 655 1045
                   S 1090 1088, 1125 1250
                   S 996 1420, 780 1400
                   S 428 1460, 430 1590
                   S 610 1785, 815 1800
                   S 1115 1875, 1050 2000
                   S 810 2132, 640 2080"
                stroke="rgba(var(--accent-primary-rgb),0.10)"
                strokeWidth="90"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M 360 120
                   C 570 70, 760 180, 980 240
                   S 1170 445, 1000 545
                   S 610 590, 500 705
                   S 445 980, 655 1045
                   S 1090 1088, 1125 1250
                   S 996 1420, 780 1400
                   S 428 1460, 430 1590
                   S 610 1785, 815 1800
                   S 1115 1875, 1050 2000
                   S 810 2132, 640 2080"
                stroke="rgba(var(--accent-primary-rgb),0.24)"
                strokeWidth="30"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M 360 120
                   C 570 70, 760 180, 980 240
                   S 1170 445, 1000 545
                   S 610 590, 500 705
                   S 445 980, 655 1045
                   S 1090 1088, 1125 1250
                   S 996 1420, 780 1400
                   S 428 1460, 430 1590
                   S 610 1785, 815 1800
                   S 1115 1875, 1050 2000
                   S 810 2132, 640 2080"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="10 14"
              />

              <path
                ref={progressPathRef}
                d="M 360 120
                   C 570 70, 760 180, 980 240
                   S 1170 445, 1000 545
                   S 610 590, 500 705
                   S 445 980, 655 1045
                   S 1090 1088, 1125 1250
                   S 996 1420, 780 1400
                   S 428 1460, 430 1590
                   S 610 1785, 815 1800
                   S 1115 1875, 1050 2000
                   S 810 2132, 640 2080"
                stroke="rgba(var(--accent-primary-rgb),0.85)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
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

                  <article className="group relative overflow-hidden rounded-[32px] border border-accent-lime/20 bg-surface/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:border-accent-lime/60 hover:bg-surface/60 hover:shadow-[0_0_40px_rgba(var(--accent-primary-rgb),0.2)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    
                    <div className="grid min-h-[360px] grid-cols-1 lg:grid-cols-[1fr_1fr] relative z-10">
                      
                      {/* image */}
                      <div className={`relative min-h-[260px] lg:min-h-full overflow-hidden ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                        <Image
                          src={item.image}
                          alt={item.stage}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          data-stage-image
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-transparent to-transparent opacity-60" />

                        <div className="absolute right-6 top-6 rounded-full border border-accent-lime/30 bg-background-deep/60 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-lime backdrop-blur-md">
                          Stage {(i + 1).toString().padStart(2, "0")}
                        </div>
                      </div>

                      {/* content */}
                      <div className={`flex flex-col justify-center p-7 sm:p-9 lg:p-10 ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="grid gap-6">
                          <div>
                            <h3 className="text-[1.6rem] font-serif leading-tight text-text-heading sm:text-[2rem]">
                              {item.stage}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-text-soft sm:text-base">
                              {item.subtitle}
                            </p>
                          </div>

                          <div className="h-px w-full bg-gradient-to-r from-accent-lime/25 to-transparent" />

                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-lime/80">
                              What they feel
                            </p>
                            <p className="mt-2 text-base leading-7 text-text-main sm:text-lg">
                              {item.feeling}
                            </p>
                          </div>

                          <div className="h-px w-full bg-gradient-to-r from-accent-lime/20 to-transparent" />

                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                              Focus on
                            </p>
                            <p className="mt-2 text-sm leading-7 text-text-soft sm:text-base">
                              {item.focus}
                            </p>
                          </div>

                          {item.note && (
                            <>
                              <div className="h-px w-full bg-gradient-to-r from-accent-warm/30 to-transparent" />
                              <div className="rounded-2xl border border-accent-warm/10 bg-accent-warm/[0.05] shadow-inner px-5 py-4">
                                <p className="text-sm font-medium leading-6 text-text-main">
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