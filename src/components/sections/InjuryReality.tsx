// "use client";

// import { RevealSection } from "@/components/animations/RevealSection";
// import { PremiumCard } from "@/components/ui/PremiumCard";

// export function InjuryReality() {
//   const points = [
//     {
//       title: "Starting too hard, too early",
//       text: "Young bodies aren't ready for high-intensity loads before a strength base is built.",
//     },
//     {
//       title: "Lack of proper strength and conditioning",
//       text: "Technique alone doesn't protect the body. Physical preparation is non-negotiable.",
//     },
//     {
//       title: "No focus on mobility and flexibility",
//       text: "Stiffness leads to compensation. Compensation leads to injury.",
//     },
//     {
//       title: "Skipping recovery and rest",
//       text: "Growth happens in rest. Athletes who skip it eventually pay the price.",
//     },
//   ];

//   return (
//     <section className="py-32 relative overflow-hidden bg-background-deep">
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="flex flex-col mb-20 text-center">
//           <RevealSection>
//             <span className="text-accent-lime font-bold tracking-[0.2em] text-xs uppercase mb-4 block opacity-60">
//               A Key Reality
//             </span>
//             <h2 className="text-4xl md:text-5xl font-serif mb-6">
//               Why Some Athletes Stop Because of Injury
//             </h2>
//             <p className="text-text-soft max-w-2xl mx-auto">
//               Injuries don't just happen — they're often the result of missing the right foundation at the right time.
//             </p>
//           </RevealSection>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           {points.map((point, i) => (
//             <RevealSection key={i} delay={i * 0.1}>
//               <PremiumCard className="h-full border-red-500/10 hover:border-red-500/30">
//                 <h3 className="text-xl font-serif mb-4 leading-tight">{point.title}</h3>
//                 <p className="text-sm text-text-soft leading-relaxed">{point.text}</p>
//               </PremiumCard>
//             </RevealSection>
//           ))}
//         </div>

//         <RevealSection delay={0.5} className="max-w-4xl mx-auto">
//           <div className="p-8 rounded-2xl border border-accent-lime/20 bg-accent-lime/5 text-center relative group overflow-hidden transition-all hover:bg-accent-lime/10">
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-lime to-transparent" />
//             <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed">
//               "Injuries are not always bad — they often show where the athlete needs to improve."
//             </p>
//           </div>
//         </RevealSection>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { RevealSection } from "@/components/animations/RevealSection";

gsap.registerPlugin(ScrollTrigger);

export function InjuryReality() {
  const sectionRef = useRef(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const quoteRef = useRef<HTMLDivElement>(null);
  const crossRef = useRef<HTMLDivElement>(null);

  const points = [
    {
      title: "Starting too hard, too early",
      text: "Young bodies aren't ready for high-intensity loads before a strength base is built.",
    },
    {
      title: "Lack of proper strength and conditioning",
      text: "Technique alone doesn't protect the body. Physical preparation is non-negotiable.",
    },
    {
      title: "No focus on mobility and flexibility",
      text: "Stiffness leads to compensation. Compensation leads to injury.",
    },
    {
      title: "Skipping recovery and rest",
      text: "Growth happens in rest. Athletes who skip it eventually pay the price.",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Cross lines draw
      if (crossRef.current) {
        const hLine = crossRef.current.querySelector("[data-h-line]");
        const vLine = crossRef.current.querySelector("[data-v-line]");

        if (hLine) {
          gsap.fromTo(
            hLine,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 1,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: crossRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
        if (vLine) {
          gsap.fromTo(
            vLine,
            { scaleY: 0 },
            {
              scaleY: 1,
              duration: 1,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: crossRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
              delay: 0.2,
            }
          );
        }

        // Center node
        const node = crossRef.current.querySelector("[data-center]");
        if (node) {
          gsap.fromTo(
            node,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: crossRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
              delay: 0.5,
            }
          );
        }
      }

      // Quadrant items
      itemsRef.current.forEach((item, i) => {
        if (!item) return;

        const directions = [
          { x: -30, y: -20 },
          { x: 30, y: -20 },
          { x: -30, y: 20 },
          { x: 30, y: 20 },
        ];

        gsap.fromTo(
          item,
          { opacity: 0, x: directions[i].x, y: directions[i].y },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: crossRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            delay: 0.4 + i * 0.1,
          }
        );
      });

      // Quote
      if (quoteRef.current) {
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      gsap.to("[data-float]", {
        y: -18,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 md:py-28 lg:py-32 overflow-hidden bg-background-deep"
    >
      {/* BG */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.04]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background-deep/95 to-background-deep" />
      </div>

      <div
        data-float
        className="absolute top-1/4 -left-20 w-48 h-48 sm:w-64 sm:h-64 bg-red-500/5 blur-[100px] rounded-full pointer-events-none"
      />
      <div
        data-float
        className="absolute bottom-1/4 -right-20 w-48 h-48 sm:w-72 sm:h-72 bg-accent-lime/5 blur-[100px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
          <RevealSection>
            <span className="text-accent-lime font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-3 sm:mb-4 block opacity-60">
              A Key Reality
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 leading-tight">
              Why Some Athletes Stop Because of Injury
            </h2>
            <p className="text-sm sm:text-base text-text-soft max-w-2xl mx-auto leading-relaxed">
              Injuries don't just happen — they're often the result of missing
              the right foundation at the right time.
            </p>
          </RevealSection>
        </div>

        {/* ======================== */}
        {/* + CROSS 2x2 LAYOUT      */}
        {/* ======================== */}
        <div
          ref={crossRef}
          className="relative max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Horizontal Line */}
          <div
            data-h-line
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent origin-center z-10 pointer-events-none"
          />

          {/* Vertical Line */}
          <div
            data-v-line
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-red-500/30 to-transparent origin-center z-10 pointer-events-none"
          />

          {/* Center Node */}
          <div
            data-center
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
          >
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500/60 shadow-[0_0_20px_rgba(239,68,68,0.4)]" />
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {points.map((point, i) => (
              <div
                key={i}
                ref={(el) => {
                  itemsRef.current[i] = el;
                }}
                className={`group p-6 sm:p-8 lg:p-10 ${
                  i === 0
                    ? "sm:border-r sm:border-b border-red-500/[0.08]"
                    : i === 1
                    ? "sm:border-b border-red-500/[0.08]"
                    : i === 2
                    ? "sm:border-r border-red-500/[0.08]"
                    : ""
                }`}
              >
                {/* Number */}
                <span className="text-red-500/20 font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-3 sm:mb-4 block group-hover:text-red-500/50 transition-colors duration-300">
                  0{i + 1}
                </span>

                {/* Title */}
                <h3 className="text-base sm:text-lg lg:text-xl font-serif text-text-main mb-2 sm:mb-3 leading-snug group-hover:text-red-400 transition-colors duration-300">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-text-soft leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto">
          <div 
            ref={quoteRef} 
            className="relative p-8 sm:p-12 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1d3e7a] to-[#122b5e] shadow-2xl group"
          >
            {/* Subtle glow effect */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-white/30" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 font-bold">
                  The Mindset
                </span>
              </div>
              
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-serif italic text-white leading-tight sm:leading-snug">
                &quot;Injuries are not always bad — they often show where the athlete
                needs to improve.&quot;
              </p>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-24 bg-gradient-to-r from-accent-lime/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}