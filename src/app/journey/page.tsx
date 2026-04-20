import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealSection } from "@/components/animations/RevealSection";
import { JourneyTimeline } from "@/components/sections/JourneyTimeline";
import { VideoUnveil } from "@/components/sections/VideoUnveil";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function JourneyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="px-2 pb-6 pt-2 sm:px-4 lg:px-6">
        <div className="relative mx-auto w-full max-w-[1536px] overflow-hidden rounded-[16px] border border-accent-secondary/35">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/images/assets/guide_performance.png')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-[linear-gradient(98deg,rgba(6,17,34,0.9)_6%,rgba(13,36,68,0.82)_44%,rgba(13,36,68,0.52)_70%,rgba(13,36,68,0.36)_100%)]" />
            <div className="absolute inset-y-0 left-0 w-[62%] bg-[radial-gradient(circle_at_28%_35%,rgba(74,143,216,0.34),transparent_64%)]" />
          </div>

          <div className="pointer-events-none absolute -left-14 top-10 h-56 w-56 rounded-full bg-accent-lime/22 blur-[95px]" />
          <div className="pointer-events-none absolute -right-10 bottom-8 h-52 w-52 rounded-full bg-accent-secondary/24 blur-[105px]" />

          <div className="relative z-10 min-h-[520px] px-6 py-12 sm:px-10 sm:py-14 lg:min-h-[620px] lg:px-[74px] lg:py-[72px]">
            <div className="max-w-[900px] lg:pt-6">
              <RevealSection>
                <span className="inline-flex items-center rounded-full border border-white/24 bg-white/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/95 backdrop-blur-sm">
                  Our Framework
                </span>
              </RevealSection>

              <RevealSection delay={0.12}>
                <h1 className="mt-6 text-[clamp(2.2rem,5.7vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.03em] text-white">
                  The True Path Journey
                </h1>
              </RevealSection>

              <RevealSection delay={0.22}>
                <p className="mt-7 max-w-[640px] text-[clamp(1rem,1.2vw,1.35rem)] font-normal leading-[1.45] text-white/88">
                  Every athlete goes through these stages. Most people don&apos;t
                  recognize them until it&apos;s too late.
                </p>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <VideoUnveil
        title="Watch the Full Journey Explained"
        text="Every athlete goes through these stages and this explains what really happens at each one."
      />

      <JourneyTimeline />

      <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-lime/12 blur-[130px]" />
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-accent-secondary/35 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
          <RevealSection>
            <div className="mx-auto mb-12 h-1 w-16 bg-accent-lime" />
            <h2 className="text-3xl md:text-5xl font-serif mb-10 italic text-text-heading leading-snug lg:px-12">
              &ldquo;The goal is not to rush through stages. It is to understand
              them.&rdquo;
            </h2>
            <div className="space-y-4">
              <p className="text-xl text-text-soft">
                Most athletes quit in the wrong stage.
              </p>
              <p className="text-2xl font-bold text-accent-lime">
                We make sure yours doesn&apos;t.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
