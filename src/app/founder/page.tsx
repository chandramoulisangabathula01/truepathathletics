// import Image from "next/image";
// import Link from "next/link";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
// import { RevealSection } from "@/components/animations/RevealSection";
// import { ArrowRight, ShieldCheck, Target, Users } from "lucide-react";

// type FounderProfile = {
//   name: string;
//   role: string;
//   image: string;
//   shortBio: string;
//   whyCreated: string;
//   philosophy: string;
//   trustReason: string;
//   focusAreas: string[];
// };

// const founders: FounderProfile[] = [
//   {
//     name: "Founder 01",
//     role: "Performance & Development Lead",
//     image:
//       "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?auto=format&fit=crop&q=80&w=1200",
//     shortBio:
//       "Works directly with athletes on long-term development planning, stage transitions, and performance structure.",
//     whyCreated:
//       "Built True Path Athletics to stop talented athletes from drifting through random training cycles without clear direction.",
//     philosophy:
//       "Train with sequence, not noise. What an athlete needs now should guide every next decision.",
//     trustReason:
//       "Families trust this approach because decisions are explained clearly, measured practically, and adapted as the athlete grows.",
//     focusAreas: [
//       "Stage mapping",
//       "Training priorities",
//       "Competition timing",
//     ],
//   },
//   {
//     name: "Founder 02",
//     role: "Parent Guidance & Communication Lead",
//     image:
//       "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=1200",
//     shortBio:
//       "Supports parents with decision clarity, expectation management, and productive athlete-parent communication.",
//     whyCreated:
//       "Co-created True Path Athletics so families no longer feel overwhelmed by conflicting advice from different sources.",
//     philosophy:
//       "Parents should feel informed, not confused. Better conversations lead to better athlete outcomes.",
//     trustReason:
//       "Parents gain confidence because guidance is practical, realistic, and aligned with both performance and well-being.",
//     focusAreas: [
//       "Parent strategy calls",
//       "Decision frameworks",
//       "Family-athlete alignment",
//     ],
//   },
//   {
//     name: "Founder 03",
//     role: "Athlete Well-Being & Longevity Lead",
//     image:
//       "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=1200",
//     shortBio:
//       "Oversees injury-risk awareness, sustainable workload planning, and systems that protect athlete longevity.",
//     whyCreated:
//       "Joined the founding team to reduce burnout and prevent avoidable setbacks caused by rushed development.",
//     philosophy:
//       "Progress must be sustainable. Long-term potential should never be traded for short-term pressure.",
//     trustReason:
//       "Families trust this system because athlete health, confidence, and continuity stay at the center of every plan.",
//     focusAreas: ["Load management", "Burnout prevention", "Recovery systems"],
//   },
// ];

// const teamTrustPoints = [
//   {
//     title: "Stage-based decision making",
//     text: "Every recommendation is based on where your athlete is right now, not a generic template.",
//     icon: Target,
//   },
//   {
//     title: "Parent-first communication",
//     text: "You always know why a decision is made and what outcome we are aiming for next.",
//     icon: Users,
//   },
//   {
//     title: "Long-term athlete protection",
//     text: "We prioritize sustainable progress to prevent burnout, confusion, and avoidable injuries.",
//     icon: ShieldCheck,
//   },
// ];

// export default function FounderPage() {
//   return (
//     <main className="min-h-screen bg-background">
//       <Navbar />

//       <section className="relative overflow-hidden pb-12 pt-26 sm:pb-14 sm:pt-30 lg:pb-16 lg:pt-34">
//         <div className="pointer-events-none absolute inset-0">
//           <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-accent-lime/[0.08] blur-[130px]" />
//         </div>
//         <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
//           <RevealSection>
//             <div className="mx-auto max-w-3xl text-center">
//               <span className="text-accent-lime font-bold tracking-[0.2em] text-xs uppercase">
//                 Founding Team
//               </span>
//               <h1 className="mt-4 text-4xl font-serif leading-tight text-text-heading sm:text-5xl lg:text-6xl">
//                 Meet the 3 founders behind True Path Athletics
//               </h1>
//               <p className="mt-5 text-base leading-7 text-text-soft sm:text-lg">
//                 Each founder leads a core part of the athlete journey so
//                 families get complete guidance, not fragmented advice.
//               </p>
//             </div>
//           </RevealSection>
//         </div>
//       </section>

//       <section className="pb-12 sm:pb-14 lg:pb-16">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <RevealSection>
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//               {founders.map((founder) => (
//                 <article
//                   key={founder.name}
//                   className="group overflow-hidden rounded-3xl border border-black/5 bg-surface shadow-brand-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-md dark:border-white/10 dark:bg-surface-alt"
//                 >
//                   <div className="relative h-72 overflow-hidden sm:h-80">
//                     <Image
//                       src={founder.image}
//                       alt={`${founder.name} portrait`}
//                       fill
//                       sizes="(max-width: 1024px) 100vw, 33vw"
//                       className="object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>
//                   <div className="p-5">
//                     <h2 className="text-2xl font-serif text-text-heading">
//                       {founder.name}
//                     </h2>
//                     <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-accent-lime/90">
//                       {founder.role}
//                     </p>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </RevealSection>
//         </div>
//       </section>

//       <section className="py-12 sm:py-14 lg:py-16">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="space-y-5 sm:space-y-6">
//             {founders.map((founder, index) => (
//               <RevealSection key={founder.name} delay={index * 0.05}>
//                 <article className="rounded-3xl border border-black/5 bg-surface p-6 dark:border-white/10 dark:bg-surface-alt sm:p-7">
//                   <div className="flex flex-col gap-4 border-b border-black/[0.06] pb-5 dark:border-white/10 sm:flex-row sm:items-end sm:justify-between">
//                     <div>
//                       <h2 className="text-3xl font-serif text-text-heading">
//                         {founder.name}
//                       </h2>
//                       <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-accent-lime/90">
//                         {founder.role}
//                       </p>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                       {founder.focusAreas.map((area) => (
//                         <span
//                           key={area}
//                           className="rounded-full border border-accent-lime/25 bg-accent-lime/10 px-3 py-1 text-xs font-semibold text-accent-lime"
//                         >
//                           {area}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
//                     <div className="rounded-2xl border border-black/5 bg-background-mid p-4 dark:border-white/10 dark:bg-background-light/40">
//                       <h3 className="text-lg font-semibold text-text-main">
//                         Short Bio
//                       </h3>
//                       <p className="mt-2 text-sm leading-6 text-text-soft">
//                         {founder.shortBio}
//                       </p>
//                     </div>
//                     <div className="rounded-2xl border border-black/5 bg-background-mid p-4 dark:border-white/10 dark:bg-background-light/40">
//                       <h3 className="text-lg font-semibold text-text-main">
//                         Why True Path Athletics Was Created
//                       </h3>
//                       <p className="mt-2 text-sm leading-6 text-text-soft">
//                         {founder.whyCreated}
//                       </p>
//                     </div>
//                     <div className="rounded-2xl border border-black/5 bg-background-mid p-4 dark:border-white/10 dark:bg-background-light/40">
//                       <h3 className="text-lg font-semibold text-text-main">
//                         Coaching Philosophy
//                       </h3>
//                       <p className="mt-2 text-sm leading-6 text-text-soft">
//                         {founder.philosophy}
//                       </p>
//                     </div>
//                     <div className="rounded-2xl border border-black/5 bg-background-mid p-4 dark:border-white/10 dark:bg-background-light/40">
//                       <h3 className="text-lg font-semibold text-text-main">
//                         Why Parents Should Trust This Founder
//                       </h3>
//                       <p className="mt-2 text-sm leading-6 text-text-soft">
//                         {founder.trustReason}
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               </RevealSection>
//             ))}
//           </div>

//           <RevealSection delay={0.2}>
//             <article className="mt-6 rounded-3xl border border-black/5 bg-surface p-6 dark:border-white/10 dark:bg-surface-alt sm:p-7">
//               <h2 className="text-3xl font-serif text-text-heading sm:text-4xl">
//                 Why parents trust our founding team
//               </h2>
//               <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
//                 {teamTrustPoints.map((point) => (
//                   <div
//                     key={point.title}
//                     className="rounded-2xl border border-black/5 bg-background-mid p-4 dark:border-white/10 dark:bg-background-light/40"
//                   >
//                     <div className="flex items-start gap-3">
//                       <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-lime/10 text-accent-lime">
//                         <point.icon className="h-4 w-4" />
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-text-main">
//                           {point.title}
//                         </h3>
//                         <p className="mt-1 text-sm leading-6 text-text-soft">
//                           {point.text}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </article>
//           </RevealSection>

//           <RevealSection delay={0.35}>
//             <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
//               <Link
//                 href="/contact"
//                 className="btn-premium btn-primary min-h-[52px] px-7 py-3 text-sm sm:text-base"
//               >
//                 Book Free Consultation
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//               <Link
//                 href="/contact"
//                 className="btn-premium btn-secondary min-h-[52px] px-7 py-3 text-sm sm:text-base"
//               >
//                 Schedule a Call
//               </Link>
//             </div>
//           </RevealSection>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealSection } from "@/components/animations/RevealSection";
import {
  ArrowRight,
  ShieldCheck,
  Target,
  Users,
  Quote,
  Sparkles,
} from "lucide-react";

type FounderProfile = {
  name: string;
  role: string;
  image: string;
  shortBio: string;
  origin: string;
  philosophy: string;
  trustSignal: string;
  focusAreas: string[];
};

const founders: FounderProfile[] = [
  {
    name: "Founder 01",
    role: "Performance & Development",
    image:
      "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?auto=format&fit=crop&q=80&w=1200",
    shortBio:
      "Architects long-term development plans, maps stage transitions, and structures every training phase around where the athlete actually is — not where others think they should be.",
    origin:
      "After watching too many talented athletes plateau from random, disconnected training cycles, the need for a sequenced system became impossible to ignore.",
    philosophy:
      "What an athlete needs right now should shape every next decision. Sequence over noise, always.",
    trustSignal:
      "Every recommendation comes with a clear rationale, practical metrics, and built-in adaptability as the athlete evolves.",
    focusAreas: [
      "Stage mapping",
      "Training architecture",
      "Competition timing",
    ],
  },
  {
    name: "Founder 02",
    role: "Parent Strategy & Communication",
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=1200",
    shortBio:
      "Guides families through decision clarity, expectation calibration, and the kind of productive conversations that actually move the needle for young athletes.",
    origin:
      "Too many parents were drowning in conflicting advice from coaches, social media, and other families — making high-stakes decisions without a framework.",
    philosophy:
      "Informed parents raise confident athletes. Better family conversations create better competitive outcomes.",
    trustSignal:
      "Guidance is specific, actionable, and designed to align both performance goals and family well-being under one roof.",
    focusAreas: [
      "Decision frameworks",
      "Strategy sessions",
      "Family alignment",
    ],
  },
  {
    name: "Founder 03",
    role: "Athlete Longevity & Well-Being",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=1200",
    shortBio:
      "Designs sustainable workload systems, monitors injury-risk signals, and ensures that progress never comes at the cost of long-term health or motivation.",
    origin:
      "Joined the founding team after seeing preventable burnout and avoidable injuries sideline athletes who were pushed too hard, too fast, without a safety net.",
    philosophy:
      "Potential is meaningless if it's traded for short-term pressure. Progress must be built to last.",
    trustSignal:
      "Health, confidence, and continuity sit at the center of every plan — not as afterthoughts, but as non-negotiables.",
    focusAreas: [
      "Load intelligence",
      "Burnout prevention",
      "Recovery systems",
    ],
  },
];

const trustPillars = [
  {
    title: "Stage-Based Decisions",
    text: "Every recommendation reflects where your athlete is right now — not a one-size-fits-all template.",
    icon: Target,
  },
  {
    title: "Transparent Communication",
    text: "You'll always understand the reasoning behind each decision and what milestone we're working toward next.",
    icon: Users,
  },
  {
    title: "Sustainable Progress",
    text: "We build systems that protect long-term potential — preventing burnout, confusion, and avoidable setbacks.",
    icon: ShieldCheck,
  },
];

function FounderCard({ founder }: { founder: FounderProfile }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-black/5 bg-surface shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-accent-lime/30 hover:shadow-xl dark:border-white/[0.06] dark:bg-white/[0.02] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_16px_48px_-16px_rgba(var(--accent-primary-rgb),0.25)] sm:rounded-3xl">
      <div className="relative h-64 overflow-hidden sm:h-72 lg:h-80">
        <Image
          src={founder.image}
          alt={`${founder.name} portrait`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
            {founder.name}
          </h2>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-accent-lime/90">
            {founder.role}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 px-5 pt-5 sm:px-6 sm:pt-6">
        {founder.focusAreas.map((area) => (
          <span
            key={area}
            className="rounded-full border border-accent-lime/20 bg-accent-lime/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-lime dark:bg-accent-lime/[0.06] dark:text-accent-lime/80"
          >
            {area}
          </span>
        ))}
      </div>
      <div className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-4">
        <p className="text-sm leading-relaxed text-text-soft sm:text-[15px] sm:leading-7">
          {founder.shortBio}
        </p>
      </div>
    </article>
  );
}

function FounderDeepDive({
  founder,
  index,
}: {
  founder: FounderProfile;
  index: number;
}) {
  const isReversed = index % 2 !== 0;

  const sections = [
    { label: "The Origin", content: founder.origin },
    { label: "The Philosophy", content: founder.philosophy },
    { label: "The Trust Signal", content: founder.trustSignal },
  ];

  return (
    <RevealSection delay={index * 0.05}>
      <article className="overflow-hidden rounded-2xl border border-black/5 bg-surface shadow-sm transition-all duration-500 hover:border-accent-lime/30 dark:border-white/[0.06] dark:bg-white/[0.015] dark:shadow-none sm:rounded-3xl">
        <div
          className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
        >
          {/* Image side */}
          <div className="relative h-64 shrink-0 overflow-hidden sm:h-72 lg:h-auto lg:w-2/5">
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/30" />
            {isReversed && (
              <div className="absolute inset-0 hidden bg-gradient-to-l from-transparent via-transparent to-black/30 lg:block" />
            )}
          </div>

          {/* Content side */}
          <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-10">
            {/* Header */}
            <div className="mb-6 flex flex-col gap-4 border-b border-black/5 pb-5 dark:border-white/[0.06] sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="font-serif text-5xl font-bold text-black/[0.03] dark:text-white/[0.04]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="-mt-2 font-serif text-2xl font-bold text-text-heading sm:text-3xl">
                  {founder.name}
                </h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-accent-lime/90 dark:text-accent-lime/80">
                  {founder.role}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:pb-1">
                {founder.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-accent-lime/20 bg-accent-lime/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-lime dark:bg-accent-lime/[0.06] dark:text-accent-lime/80"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Content blocks */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {sections.map((section) => (
                <div
                  key={section.label}
                  className="rounded-xl border border-black/5 bg-background-mid p-4 transition-colors duration-300 hover:border-black/10 hover:bg-black/[0.02] dark:border-white/[0.05] dark:bg-white/[0.02] dark:hover:border-white/[0.1] dark:hover:bg-white/[0.03] sm:p-5"
                >
                  <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-accent-lime/80 dark:text-accent-lime/70">
                    {section.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-soft sm:text-[15px] sm:leading-7">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Philosophy pull-quote (mobile-friendly) */}
            <div className="mt-5 flex items-start gap-3 rounded-xl bg-accent-lime/10 px-4 py-3 dark:bg-accent-lime/[0.04] sm:hidden">
              <Quote className="mt-0.5 h-4 w-4 shrink-0 text-accent-lime/70 dark:text-accent-lime/50" />
              <p className="text-sm italic leading-relaxed text-text-soft dark:text-white/50">
                {founder.philosophy}
              </p>
            </div>
          </div>
        </div>
      </article>
    </RevealSection>
  );
}

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden pb-14 pt-28 sm:pb-18 sm:pt-32 lg:pb-20 lg:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-lime/[0.06] blur-[160px]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-lime/15 to-transparent" />

        <div className="container relative z-10 mx-auto px-5 sm:px-8 lg:px-10">
          <RevealSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-lime/25 bg-accent-lime/[0.08] px-4 py-1.5 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-accent-lime" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-lime">
                  Founding Team
                </span>
              </div>
              <h1 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight text-text-heading sm:text-5xl lg:text-6xl">
                The people behind
                <br />
                <span className="italic text-accent-lime">
                  True Path Athletics
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-text-soft sm:text-base sm:leading-8 lg:text-lg">
                Three distinct disciplines. One unified system. Each founder
                owns a critical dimension of the athlete journey so your family
                receives complete, connected guidance.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Founder Cards (Overview) ─── */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <RevealSection>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {founders.map((founder) => (
                <FounderCard key={founder.name} founder={founder} />
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Founder Deep Dives ─── */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <RevealSection>
            <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-text-heading sm:text-4xl">
                Inside the founding team
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-text-soft sm:text-base sm:leading-8">
                What drives each founder, how they think about development, and
                why families continue to rely on their guidance.
              </p>
            </div>
          </RevealSection>

          <div className="space-y-6 sm:space-y-8">
            {founders.map((founder, index) => (
              <FounderDeepDive
                key={founder.name}
                founder={founder}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust Pillars ─── */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-lime/15 to-transparent" />

        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <RevealSection>
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-text-heading sm:text-4xl">
                Built on three commitments
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-text-soft sm:text-base sm:leading-8">
                These aren&apos;t marketing promises. They&apos;re the
                operational principles that shape every plan, call, and
                recommendation.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.1}>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
              {trustPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group rounded-2xl border border-black/5 bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-lime/30 hover:shadow-md dark:border-white/[0.06] dark:bg-white/[0.02] dark:shadow-none dark:hover:border-accent-lime/20 dark:hover:bg-white/[0.03] sm:p-7"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent-lime/20 bg-accent-lime/10 text-accent-lime transition-all duration-300 group-hover:scale-105 group-hover:border-accent-lime/40 group-hover:bg-accent-lime/15 dark:bg-accent-lime/[0.08]">
                    <pillar.icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-semibold text-text-heading">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-soft sm:text-[15px] sm:leading-7">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative pb-20 sm:pb-28 lg:pb-32">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <RevealSection delay={0.15}>
            <div className="mx-auto max-w-2xl rounded-2xl border border-black/5 bg-surface p-8 text-center shadow-lg dark:border-white/[0.06] dark:bg-white/[0.02] dark:shadow-none sm:rounded-3xl sm:p-12">
              <h2 className="font-serif text-2xl font-bold text-text-heading sm:text-3xl">
                Ready to talk with our team?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-soft sm:text-base sm:leading-7">
                Book a free consultation to see how our system fits your
                athlete&apos;s current stage and your family&apos;s goals.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-premium btn-primary inline-flex min-h-[52px] items-center gap-2 px-7 py-3 text-sm sm:text-base"
                >
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-premium btn-secondary inline-flex min-h-[52px] items-center px-7 py-3 text-sm sm:text-base"
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}