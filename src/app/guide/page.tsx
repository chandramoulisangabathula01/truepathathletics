import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealSection } from "@/components/animations/RevealSection";
import { GuidePillars } from "@/components/sections/GuidePillars";
import { VideoUnveil } from "@/components/sections/VideoUnveil";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-26 pb-12 sm:pt-30 sm:pb-14 lg:pt-34 lg:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-lime/5 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <RevealSection>
            <span className="text-accent-lime font-bold tracking-[0.2em] text-xs uppercase mb-6 block">
              Our Approach
            </span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight text-text-main">
              How We Guide the Journey
            </h1>
            <p className="text-xl md:text-2xl text-text-soft leading-relaxed max-w-2xl mx-auto">
              Every athlete gets a guidance system built around their stage and not a generic program.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Video Section Wrapper */}
      <section className="bg-black/[0.02] py-14 dark:bg-white/[0.02] sm:py-16 lg:py-20">
        <div className="container mx-auto mb-10 px-6 text-center sm:mb-12 lg:mb-14">
          <RevealSection>
            <h2 className="text-4xl font-serif mb-4">How We Actually Guide Athletes</h2>
            <p className="text-text-soft max-w-2xl mx-auto">A walkthrough of the approach and what we look at, how we make decisions, and why stage-based guidance works.</p>
          </RevealSection>
        </div>
        <VideoUnveil
          title="The Guidance Walkthrough"
          text="This explains why most athletes struggle and how we guide them differently."
          supportingLine="A detailed look at our stage-based decision matrix."
        />
      </section>

      {/* Core Statement */}
      <section className="border-y border-black/[0.05] bg-background py-16 dark:border-white/5 sm:py-18 lg:py-22">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <RevealSection>
            <h2 className="text-3xl md:text-5xl font-serif text-text-main leading-snug">
              &ldquo;We don&apos;t just train athletes. We guide their development based on <span className="text-accent-lime underline underline-offset-8 decoration-accent-lime/30">where they are.</span>&rdquo;
            </h2>
          </RevealSection>
        </div>
      </section>

      {/* The Pillars */}
      <GuidePillars />

      <FinalCTA />
      <Footer />
    </main>
  );
}
