"use client";

import { RevealSection } from "@/components/animations/RevealSection";
import { SplitText } from "@/components/animations/SplitText";
import { Compass, Shield, Users } from "lucide-react";

const parentHighlights = [
  { icon: Compass, label: "Clear stage direction" },
  { icon: Users, label: "Confident parent support" },
  { icon: Shield, label: "Long-term athlete protection" },
] as const;

export function ParentsHero() {
  return (
    <section className="px-2 pb-6 pt-2 sm:px-4 lg:px-6">
      <div className="relative mx-auto w-full max-w-[1536px] overflow-hidden rounded-[16px] border border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/assets/parent.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[linear-gradient(98deg,rgba(6,12,20,0.92)_4%,rgba(12,23,36,0.8)_42%,rgba(12,23,36,0.42)_68%,rgba(12,23,36,0.32)_100%)]" />
          <div className="absolute inset-y-0 left-0 w-[62%] bg-[radial-gradient(circle_at_25%_35%,rgba(79,111,133,0.42),transparent_62%)]" />
        </div>

        <div className="pointer-events-none absolute -left-16 top-10 h-52 w-52 rounded-full bg-accent-lime/20 blur-[90px]" />
        <div className="pointer-events-none absolute -right-12 bottom-10 h-52 w-52 rounded-full bg-accent-lime/16 blur-[100px]" />

        <div className="relative z-10 min-h-[560px] px-6 py-12 sm:px-10 lg:min-h-[640px] lg:px-[74px] lg:py-[72px]">
          <div className="max-w-[900px] lg:pt-4">
            <RevealSection>
              <span className="inline-flex items-center rounded-full border border-white/30 bg-white/14 px-5 py-2 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_20px_-14px_rgba(255,255,255,0.45)] backdrop-blur-sm">
                For Parents
              </span>
            </RevealSection>

            <SplitText
              text="Your Role in Their Journey Matters Most"
              className="mt-6 max-w-[860px] !font-sans text-[clamp(2.25rem,5.9vw,4.85rem)] font-medium !leading-[0.98] !tracking-[-0.03em] text-white"
            />

            <RevealSection delay={0.3}>
              <p className="mt-7 max-w-[600px] text-[clamp(1rem,1.1vw,1.2rem)] font-normal leading-[1.45] text-white/88">
                Most athletes do not quit because they lack talent. They quit
                because the path is misunderstood and support decisions happen
                without stage clarity.
              </p>
            </RevealSection>

            <RevealSection delay={0.45}>
              <div className="mt-10 flex flex-wrap gap-3">
                {parentHighlights.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-[#2d3754]/74 px-4 py-[9px] text-[0.78rem] font-semibold uppercase tracking-[0.04em] text-white/92 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[2px]"
                  >
                    <Icon className="h-4 w-4 text-white/90" />
                    {label}
                  </span>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}
