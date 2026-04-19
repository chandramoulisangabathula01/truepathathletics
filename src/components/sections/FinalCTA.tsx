"use client";

import { ArrowRight } from "lucide-react";
import { RevealSection } from "@/components/animations/RevealSection";

export function FinalCTA() {
  return (
    <section className="py-40 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-lime/10 dark:bg-accent-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
        <RevealSection>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Not Sure What Your Athlete Needs Right Now?
          </h2>
          <p className="text-xl text-text-soft mb-12 max-w-2xl mx-auto">
            Let's figure out where they are and what they should focus on next.
          </p>
          <button className="btn-premium btn-primary scale-110 w-fit mx-auto">
            Understand Your Athlete's Stage
            <ArrowRight className="w-5 h-5" />
          </button>
        </RevealSection>
      </div>
    </section>
  );
}
