import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealSection } from "@/components/animations/RevealSection";

const founderPreview = [
  {
    name: "Founder 01",
    role: "Performance & Development Lead",
    image:
      "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?auto=format&fit=crop&q=80&w=1200",
    line: "Guides stage-based athlete progress and long-term performance decisions.",
  },
  {
    name: "Founder 02",
    role: "Parent Guidance & Communication Lead",
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=1200",
    line: "Supports families with clarity, communication, and better decision-making.",
  },
  {
    name: "Founder 03",
    role: "Athlete Well-Being & Longevity Lead",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=1200",
    line: "Protects athlete confidence, recovery, and long-term sustainability.",
  },
];

export function FounderStory() {
  return (
    <section className="relative overflow-hidden bg-background py-14 sm:py-18 lg:py-22">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/3 h-56 w-56 rounded-full bg-accent-lime/5 blur-[100px]" />
        <div className="absolute left-0 bottom-1/4 h-56 w-56 rounded-full bg-accent-lime/5 blur-[90px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-accent-lime font-bold tracking-[0.2em] text-xs uppercase">
              Founders
            </span>
            <h2 className="mt-4 text-3xl font-serif leading-tight text-text-heading sm:text-4xl lg:text-5xl">
              Built by a 3-founder team focused on athlete outcomes
            </h2>
            <p className="mt-4 text-base leading-7 text-text-soft sm:text-lg">
              Each founder leads a different part of the system so athletes and
              parents receive complete, practical guidance.
            </p>
          </div>
        </RevealSection>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {founderPreview.map((founder, index) => (
            <RevealSection key={founder.name} delay={index * 0.08}>
              <article className="group h-full overflow-hidden rounded-3xl border border-black/5 bg-surface shadow-brand-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-md dark:border-white/10 dark:bg-surface-alt">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={`${founder.name} profile`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-serif text-text-heading">
                    {founder.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-lime/90">
                    {founder.role}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-text-soft">
                    {founder.line}
                  </p>
                </div>
              </article>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={0.2}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/founder"
              className="btn-premium btn-secondary min-h-[52px] px-7 py-3 text-sm sm:text-base"
            >
              View Founder Profiles
            </Link>
            <Link
              href="/contact"
              className="btn-premium btn-primary min-h-[52px] px-7 py-3 text-sm sm:text-base"
            >
              Book Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

