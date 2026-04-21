// "use client";

// import { RevealSection } from "@/components/animations/RevealSection";
// import Image from "next/image";
// import { Shield, Target, Compass } from "lucide-react";

// export function ParentDifferentiation() {
//   const points = [
//     {
//       icon: Compass,
//       title: "We guide decisions, not just training",
//       text: "Every recommendation is stage-specific, not generic advice.",
//       image: "https://images.unsplash.com/photo-1574629810360-7efbb1925846?q=80&w=2000&auto=format&fit=crop",
//     },
//     {
//       icon: Target,
//       title: "Long-term development is the goal",
//       text: "We are not building a 12-year-old champion. We are building a 22-year-old who still loves competing.",
//       image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2000&auto=format&fit=crop",
//     },
//     {
//       icon: Shield,
//       title: "We protect mental and physical growth",
//       text: "Burnout and injury are predictable. With the right guidance, they are preventable.",
//       image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2000&auto=format&fit=crop",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-background-deep py-20 sm:py-28 lg:py-32">
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-1/2 top-0 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-accent-lime/[0.035] blur-[140px]" />
//       </div>

//       <div className="container relative z-10 mx-auto px-6">
//         <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
//           <RevealSection>
//             <span className="text-accent-lime font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
//               The Difference
//             </span>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.04] text-accent-lime">
//               What we do differently.
//             </h2>
//             <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-soft sm:text-lg">
//               The same athlete can look completely different depending on the
//               guidance system around them.
//             </p>
//           </RevealSection>
//         </div>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto">
//           {points.map((point, i) => (
//             <RevealSection key={point.title} delay={i * 0.15}>
//               <div className="group h-full overflow-hidden rounded-3xl border border-accent-secondary/35 bg-accent-primary/10 transition-all duration-500 hover:-translate-y-2 hover:border-accent-lime/30 hover:shadow-[0_22px_48px_-20px_rgba(31,79,147,0.6)] flex flex-col">
//                 {/* Image Header */}
//                 <div className="relative aspect-[4/3] w-full overflow-hidden">
//                   <Image
//                     src={point.image}
//                     alt={point.title}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-75 group-hover:opacity-100"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-accent-lime/12 to-transparent pointer-events-none" />
                  
//                   {/* Floating Icon */}
//                   <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-surface/90 backdrop-blur-md flex items-center justify-center border border-accent-secondary/35 shadow-[0_10px_25px_-14px_rgba(31,79,147,0.65)] group-hover:border-accent-lime/40 transition-colors duration-300">
//                     <point.icon className="w-5 h-5 text-accent-lime" />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-8 flex-1 flex flex-col">
//                   <span className="mb-4 text-xs font-bold tracking-[0.2em] text-text-muted">
//                     METHOD {(i + 1).toString().padStart(2, "0")}
//                   </span>
//                   <h3 className="text-2xl font-serif mb-4 leading-tight text-accent-secondary transition-colors duration-300">
//                     {point.title}
//                   </h3>
//                   <p className="text-text-soft leading-relaxed flex-1">
//                     {point.text}
//                   </p>
//                 </div>
                
//                 {/* Accent Line */}
//                 <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent-secondary/35 to-transparent group-hover:via-accent-lime/80 transition-all duration-500 scale-x-0 group-hover:scale-100" />
//               </div>
//             </RevealSection>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { RevealSection } from "@/components/animations/RevealSection";
import Image from "next/image";
import { Shield, Target, Compass } from "lucide-react";

export function ParentDifferentiation() {
  const points = [
    {
      icon: Compass,
      title: "We guide decisions, not just training",
      text: "Every recommendation is tailored to the athlete’s stage, so families can make the right decision at the right time.",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbb1925846?q=80&w=2000&auto=format&fit=crop",
    },
    {
      icon: Target,
      title: "Long-term development is the goal",
      text: "We are not trying to create a 12-year-old champion. We are helping build a 22-year-old who still wants to compete.",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2000&auto=format&fit=crop",
    },
    {
      icon: Shield,
      title: "We protect mental and physical growth",
      text: "Burnout and injury are not random. With the right structure and guidance, both can be reduced before they become setbacks.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background-deep py-16 sm:py-20 lg:py-24">
      {/* Soft ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[320px] w-[440px] -translate-x-1/2 rounded-full bg-accent-lime/[0.04] blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <RevealSection>
            <span className="mb-4 inline-flex items-center rounded-full border border-accent-lime/30 bg-accent-lime/12 px-5 py-2 text-sm font-bold uppercase tracking-[0.14em] text-accent-lime shadow-[0_8px_20px_-14px_rgba(var(--accent-primary-rgb),0.55)]">
              The Difference
            </span>

            <h2 className="text-3xl font-serif leading-[1.06] text-text-heading sm:text-4xl lg:text-5xl">
              What we do differently
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-text-soft sm:text-lg">
              The same athlete can look completely different depending on the
              quality of guidance surrounding them.
            </p>
          </RevealSection>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {points.map((point, i) => (
            <RevealSection key={point.title} delay={i * 0.12}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-surface shadow-brand-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-md dark:border-white/10 dark:bg-surface-alt">
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={point.image}
                    alt={point.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

                  {/* Icon */}
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/90 shadow-[0_10px_25px_-16px_rgba(0,0,0,0.28)] backdrop-blur-md dark:border-white/10 dark:bg-surface/85">
                    <point.icon className="h-5 w-5 text-accent-lime" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                    Method {(i + 1).toString().padStart(2, "0")}
                  </span>

                  <h3 className="text-xl font-serif leading-tight text-text-heading sm:text-2xl">
                    {point.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-text-soft sm:text-base">
                    {point.text}
                  </p>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-accent-lime/40 via-accent-lime/15 to-transparent" />
                </div>
              </article>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
