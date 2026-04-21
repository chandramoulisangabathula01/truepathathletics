"use client";

import { RevealSection } from "@/components/animations/RevealSection";
import Image from "next/image";

export function ParentTruths() {
  const truths = [
    {
      title: "Development is not linear",
      text: "Plateaus and setbacks are normal. They are signs that development is happening, not that something is wrong.",
      image: "/images/assets/parent.png",
    },
    {
      title: "Losing is part of growth",
      text: "The athlete who never loses never learns how to compete under pressure. Losing at the right stage builds real resilience.",
      image: "/images/problem/quit_early.png",
    },
    {
      title: "Early success does not equal long-term success",
      text: "Dominating at age 10 guarantees nothing at 17. The path is longer than most people realize.",
      image: "/images/problem/lost_direction.png",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background-deep py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[320px] w-[420px] -translate-x-1/2 rounded-full bg-accent-lime/[0.04] blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <RevealSection>
            <span className="mb-4 inline-flex items-center rounded-full border border-accent-lime/30 bg-accent-lime/12 px-5 py-2 text-sm font-bold uppercase tracking-[0.14em] text-accent-lime shadow-[0_8px_20px_-14px_rgba(var(--accent-primary-rgb),0.55)]">
              What Every Parent Must Understand
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.03] text-accent-lime">
              Three truths that change everything.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-8  sm:text-lg">
              Families move faster and with less stress when they understand
              what development actually looks like.
            </p>
          </RevealSection>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:gap-14 lg:gap-16">
          {truths.map((truth, i) => {
            const isEven = i % 2 === 1;
            return (
              <div 
                key={i} 
                className={`flex flex-col gap-8 md:gap-16 items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                <div className="w-full md:w-1/2">
                  <RevealSection
                    delay={0.1}
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-accent-secondary/35 bg-accent-primary/10 shadow-[0_18px_45px_-22px_rgba(31,79,147,0.55)]"
                  >
                    <Image
                      src={truth.image}
                      alt={truth.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105 opacity-80"
                    />
                    <div className="absolute inset-0  pointer-events-none" />
                  </RevealSection>
                </div>
                
                <div className="w-full md:w-1/2">
                  <RevealSection delay={0.2} className="flex flex-col max-w-md">
                    <span className="mb-6 inline-flex items-center gap-4 text-xs font-bold tracking-[0.25em] text-accent-lime/90 opacity-80">
                      <span className="h-px w-8 bg-accent-lime/60" />
                      TRUTH {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-serif mb-5 leading-tight text-accent-primary">
                      {truth.title}
                    </h3>
                    <p className="text-lg leading-relaxed">
                      {truth.text}
                    </p>
                  </RevealSection>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
