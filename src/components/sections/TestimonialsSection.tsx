import Link from "next/link";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { RevealSection } from "@/components/animations/RevealSection";

const parentFeedback = [
  {
    quote:
      "Before True Path, we were reacting every week. Now we have clarity, and our daughter is happier in training.",
    name: "Parent of U14 athlete",
  },
  {
    quote:
      "They helped us make better tournament decisions and avoid burnout. It changed how our family supports sport.",
    name: "Parent of U16 athlete",
  },
];

const athleteStories = [
  {
    title: "From Plateau to Progress",
    text: "Moved from inconsistent regional results to stable top-bracket finishes within one season.",
    result: "Confidence and match consistency improved",
  },
  {
    title: "Stronger Under Pressure",
    text: "Transitioned from high stress and low belief to a repeatable pre-match routine and better performance.",
    result: "Higher conversion in close matches",
  },
];

const progressHighlights = [
  { value: "+142", label: "Ranking spots gained (combined athletes)" },
  { value: "87%", label: "Reported confidence improvement in competition" },
  { value: "4.6x", label: "Higher weekly training consistency" },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden border-y border-black/[0.05] bg-background py-14 dark:border-white/10 sm:py-18 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-accent-lime font-bold tracking-[0.2em] text-xs uppercase">
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl font-serif leading-tight text-text-heading sm:text-4xl lg:text-5xl">
              Real outcomes from families and athletes
            </h2>
          </div>
        </RevealSection>

        <div className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <RevealSection>
            <article className="rounded-3xl border border-black/5 bg-surface p-6 shadow-brand-sm dark:border-white/10 dark:bg-surface-alt sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-lime/90">
                Parent Feedback
              </p>
              <div className="mt-5 space-y-4">
                {parentFeedback.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-black/5 bg-background-mid p-4 dark:border-white/10 dark:bg-background-light/40"
                  >
                    <div className="mb-2 flex gap-1 text-accent-lime">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm leading-7 text-text-soft sm:text-base">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </RevealSection>

          <RevealSection delay={0.1}>
            <article className="rounded-3xl border border-black/5 bg-surface p-6 shadow-brand-sm dark:border-white/10 dark:bg-surface-alt sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-lime/90">
                Athlete Success Stories
              </p>
              <div className="mt-5 space-y-4">
                {athleteStories.map((story) => (
                  <div
                    key={story.title}
                    className="rounded-2xl border border-black/5 bg-background-mid p-4 dark:border-white/10 dark:bg-background-light/40"
                  >
                    <h3 className="text-xl font-serif text-text-heading">
                      {story.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-text-soft sm:text-base">
                      {story.text}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent-lime/10 px-3 py-1 text-xs font-semibold text-accent-lime">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {story.result}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </RevealSection>
        </div>

        <RevealSection delay={0.2}>
          <article className="mt-4 rounded-3xl border border-accent-lime/20 bg-gradient-to-r from-accent-lime/10 via-transparent to-accent-secondary/15 p-6 sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-lime/90">
              Ranking / Progress Improvements
            </p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {progressHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-accent-lime/20 bg-background/70 p-4 text-center"
                >
                  <p className="text-2xl font-bold text-text-heading sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-text-soft sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </RevealSection>

        <RevealSection delay={0.3}>
          <div className="mt-8 text-center">
            <Link href="/contact" className="btn-premium btn-primary inline-flex px-7 py-3 text-sm sm:text-base">
              Schedule a Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

