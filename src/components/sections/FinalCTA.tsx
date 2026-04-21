"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealSection } from "@/components/animations/RevealSection";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-background py-14 sm:py-20 lg:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-lime/10 blur-[100px] dark:bg-accent-lime/5 sm:h-[500px] sm:w-[500px] sm:blur-[110px] lg:h-[600px] lg:w-[600px] lg:blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <RevealSection>
          <h2 className="mb-5 text-3xl leading-tight font-serif sm:mb-6 sm:text-4xl md:text-5xl lg:mb-8 lg:text-6xl">
            Not Sure What Your Athlete Needs Right Now?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-text-soft sm:mb-10 sm:text-lg lg:mb-12 lg:text-xl">
            Let&apos;s figure out where they are and what they should focus on next.
          </p>
          <div className="mx-auto flex w-full max-w-[520px] flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="btn-premium btn-primary min-h-[52px] w-full px-6 py-3 text-sm sm:w-auto sm:text-base"
            >
              Book Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="btn-premium btn-secondary min-h-[52px] w-full px-6 py-3 text-sm sm:w-auto sm:text-base"
            >
              Schedule a Call
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
