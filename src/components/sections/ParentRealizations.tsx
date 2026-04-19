"use client";

import { RevealSection } from "@/components/animations/RevealSection";
import { SplitText } from "@/components/animations/SplitText";
import { CheckCircle2, Quote } from "lucide-react";

export function ParentRealizations() {
  const realizations = [
    "Their child's timeline is different from everyone else's, and that's okay.",
    "Pressure was hurting more than helping.",
    "The right guidance changes everything, not more training.",
  ];

  const parentQuotes = [
    "We thought we were helping by pushing harder. We realized we were only adding to the confusion.",
    "The biggest change happened when we stopped chasing the next game and started planning the next stage.",
  ];

  return (
    <section className="relative overflow-hidden bg-background-deep py-20 sm:py-28 md:py-32 lg:py-36">
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background-deep/96 to-background-deep" />
        <div className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent-lime/[0.04] blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
          <RevealSection>
            <span className="text-accent-lime font-bold tracking-[0.2em] text-xs uppercase mb-4 block inline-flex px-4 py-1.5 rounded-full border border-accent-lime/20 bg-accent-lime/5 backdrop-blur-md">
              What Parents Start Realizing
            </span>
            <SplitText
              text="Clarity calms the noise around every decision."
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.04] text-accent-lime"
            />
          </RevealSection>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 max-w-7xl mx-auto">
          {/* Left Column: Quotes with Glassmorphism */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {parentQuotes.map((quote, i) => (
              <RevealSection key={quote} delay={0.12 * i}>
                <div className="h-full rounded-3xl border border-accent-secondary/35 bg-accent-primary/12 backdrop-blur-xl p-8 sm:p-10 shadow-[0_18px_45px_-22px_rgba(31,79,147,0.55)] transition-transform duration-500 hover:-translate-y-1 hover:bg-accent-primary/18 relative overflow-hidden group">
                  <Quote className="absolute -top-6 -left-4 w-24 h-24 text-accent-secondary/20 group-hover:text-accent-primary/25 transition-colors duration-500 rotate-12" />
                  <div className="relative z-10">
                    <p className="text-xl sm:text-2xl font-serif italic leading-relaxed text-text-heading">
                      &ldquo;{quote}&rdquo;
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-px w-12 bg-accent-lime/70" />
                      <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Parent Perspective</span>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Right Column: Key Learnings Glass Card */}
          <RevealSection delay={0.2}>
            <div className="h-full rounded-3xl border border-accent-lime/20 bg-accent-lime/5 backdrop-blur-xl p-8 sm:p-10 shadow-[0_0_40px_rgba(132,204,22,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-lime/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <h3 className="text-2xl sm:text-3xl font-serif text-accent-secondary mb-2 relative z-10">
                The Shift in Focus
              </h3>
              <p className="text-text-soft text-sm mb-8 relative z-10">What happens when parents change their approach.</p>
              
              <div className="mt-8 space-y-6 relative z-10">
                {realizations.map((realization, i) => (
                  <div key={realization} className="flex items-start gap-5 group">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-lime text-background-deep shadow-[0_0_15px_rgba(132,204,22,0.3)] transition-transform duration-300 group-hover:scale-110">
                      <CheckCircle2 className="w-5 h-5" />
                    </span>
                    <p className="text-base sm:text-lg leading-relaxed text-text-soft font-medium">
                      {realization}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
