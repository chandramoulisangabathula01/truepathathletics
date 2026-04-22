// "use client";

// import { RevealSection } from "@/components/animations/RevealSection";
// import { PremiumCard } from "@/components/ui/PremiumCard";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export function TruePathSystem() {
//   const steps = [
//     {
//       id: "01",
//       title: "Stage Awareness",
//       text: "Every athlete is at a specific stage of development. Before any decision is made, we identify exactly where they are so the right actions follow.",
//     },
//     {
//       id: "02",
//       title: "Right Action",
//       text: "Once the stage is clear, we align training, mental approach, and parent support with what that stage actually demands.",
//     },
//     {
//       id: "03",
//       title: "Long-Term Path",
//       text: "We protect the athlete's future by making decisions today that don't burn them out tomorrow. The goal is always longevity.",
//     },
//   ];

//   return (
//     <section className="py-32 bg-background-deep relative overflow-hidden">
//       {/* Decorative vertical line */}
//       <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-lime/20 to-transparent hidden lg:block" />

//       <div className="container mx-auto px-6">
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-24 gap-8 max-w-5xl mx-auto">
//           <RevealSection>
//             <span className="text-accent-lime font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
//               The System
//             </span>
//             <h2 className="text-4xl md:text-5xl font-serif mb-6">
//               A guidance system built <br />around stages, not shortcuts.
//             </h2>
//           </RevealSection>
//           <RevealSection delay={0.2} className="pb-2">
//             <Link href="/journey" className="text-accent-lime font-bold flex items-center gap-2 group hover:gap-3 transition-all underline underline-offset-8">
//               Explore The Journey
//               <ArrowRight className="w-5 h-5" />
//             </Link>
//           </RevealSection>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
//           {steps.map((step, i) => (
//             <RevealSection key={step.id} delay={i * 0.2}>
//               <PremiumCard className="group h-full flex flex-col items-start text-left p-0 overflow-hidden border-black/[0.05] dark:border-white/10 bg-black/[0.01] dark:bg-background-light/40">
//                 <div className="w-full h-48 overflow-hidden relative">
//                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
//                    <img 
//                     src={`/images/assets/step${i+1}.png`} 
//                     alt={step.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
//                    />
//                 </div>
//                 <div className="p-8 relative">
//                   <span className="text-6xl font-serif text-accent-lime/10 absolute top-4 right-8 font-bold group-hover:text-accent-lime/20 transition-colors">
//                     {step.id}
//                   </span>
//                   <div className="w-12 h-12 rounded-lg bg-accent-lime/10 flex items-center justify-center text-accent-lime font-bold mb-8 border border-accent-lime/20 relative z-20">
//                     {step.id}
//                   </div>
//                   <h3 className="text-2xl font-serif mb-4 relative z-20 text-text-main">{step.title}</h3>
//                   <p className="text-text-soft leading-relaxed relative z-20">{step.text}</p>
//                 </div>
//               </PremiumCard>
//             </RevealSection>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { RevealSection } from "@/components/animations/RevealSection";
import { PremiumCard } from "@/components/ui/PremiumCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function TruePathSystem() {
  const sectionRef = useRef(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const branchesRef = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      id: "01",
      title: "Stage Awareness",
      text: "Every athlete is at a specific stage of development. Before any decision is made, we identify exactly where they are so the right actions follow.",
    },
    {
      id: "02",
      title: "Right Action",
      text: "Once the stage is clear, we align training, mental approach, and parent support with what that stage actually demands.",
    },
    {
      id: "03",
      title: "Long-Term Path",
      text: "We protect the athlete's future by making decisions today that don't burn them out tomorrow. The goal is always longevity.",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the main vertical progress line
      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 70%",
              end: "bottom 50%",
              scrub: 1.2,
            },
          }
        );
      }

      // Animate each node
      nodesRef.current.forEach((node, i) => {
        if (!node) return;

        gsap.fromTo(
          node,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: node,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Pulse ring
        const ring = node.querySelector("[data-ring]");
        if (ring) {
          gsap.fromTo(
            ring,
            { scale: 1, opacity: 0.6 },
            {
              scale: 2.2,
              opacity: 0,
              duration: 2,
              repeat: -1,
              ease: "power1.out",
              delay: i * 0.6,
            }
          );
        }
      });

      // Animate horizontal branches
      branchesRef.current.forEach((branch) => {
        if (!branch) return;
        gsap.fromTo(
          branch,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: branch,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate cards
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const isLeft = i % 2 === 0;
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: isLeft ? -60 : 60,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Floating blobs
      gsap.to("[data-blob]", {
        y: -25,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 1.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background-deep py-14 sm:py-22 md:py-30 lg:py-40"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background-deep/95 to-background-deep" />
      </div>

      {/* Blobs */}
      <div
        data-blob
        className="absolute top-1/4 -left-32 w-64 h-64 sm:w-80 sm:h-80 bg-accent-lime/5 blur-[120px] rounded-full pointer-events-none"
      />
      <div
        data-blob
        className="absolute bottom-1/4 -right-32 w-64 h-64 sm:w-96 sm:h-96 bg-accent-lime/5 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 flex max-w-5xl flex-col gap-6 sm:mb-14 sm:gap-8 md:mb-20 md:flex-row md:items-end md:justify-between lg:mb-28">
          <RevealSection>
            <span className="text-accent-lime font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">
              The System
            </span>
            <h2 className="mb-4 text-2xl leading-tight font-serif sm:mb-6 sm:text-4xl md:text-5xl">
              A guidance system built{" "}
              <br className="hidden sm:block" />
              around stages, not shortcuts.
            </h2>
          </RevealSection>

          <RevealSection delay={0.2} className="pb-2 flex-shrink-0">
            <Link
              href="/journey"
              className="text-accent-lime font-bold flex items-center gap-2 group hover:gap-3 transition-all underline underline-offset-8 text-sm sm:text-base"
            >
              Explore The Journey
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </RevealSection>
        </div>

        {/* ======================== */}
        {/* DESKTOP: ZIGZAG TIMELINE */}
        {/* ======================== */}
        <div
          ref={timelineRef}
          className="hidden lg:block relative max-w-5xl mx-auto"
        >
          {/* Center Vertical Line Track */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5 z-0">
            {/* Animated Progress Fill */}
            <div
              ref={progressRef}
              className="absolute top-0 left-0 w-full h-full origin-top bg-gradient-to-b from-accent-lime/60 via-accent-lime/40 to-accent-lime/60"
              style={{ transformOrigin: "top center" }}
            />
          </div>

          {/* Steps */}
          <div className="relative z-10 space-y-20">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={step.id}
                  className="relative flex items-center"
                >
                  {/* LEFT SIDE */}
                  <div className={`w-[calc(50%-40px)] ${isLeft ? "pr-0" : ""}`}>
                    {isLeft && (
                      <div
                        ref={(el) => {
                          cardsRef.current[i] = el;
                        }}
                      >
                        <PremiumCard className="group flex flex-col items-start text-left p-0 overflow-hidden border-white/10 bg-background-light/40 hover:border-accent-lime/30 transition-all duration-500">
                          <div className="w-full h-44 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                            <Image
                              src={`/images/assets/step${i + 1}.png`}
                              alt={step.title}
                              fill
                              sizes="(max-width: 1280px) 100vw, 420px"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                            />
                          </div>
                          <div className="p-6 relative w-full">
                            <span className="text-5xl font-serif text-accent-lime/10 absolute top-2 right-6 font-bold group-hover:text-accent-lime/20 transition-colors duration-500 select-none">
                              {step.id}
                            </span>
                            <h3 className="text-xl font-serif mb-3 relative z-20 text-text-main group-hover:text-accent-lime transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-sm text-text-soft leading-relaxed relative z-20">
                              {step.text}
                            </p>
                          </div>
                        </PremiumCard>
                      </div>
                    )}
                  </div>

                  {/* CENTER NODE + BRANCHES */}
                  <div className="relative w-[80px] flex items-center justify-center flex-shrink-0">
                    {/* Horizontal Branch Left */}
                    <div
                      ref={(el) => {
                        branchesRef.current[i] = el;
                      }}
                      className={`absolute top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r ${
                        isLeft
                          ? "right-1/2 w-[40px] from-accent-lime/50 to-accent-lime/20 origin-right"
                          : "left-1/2 w-[40px] from-accent-lime/20 to-accent-lime/50 origin-left"
                      }`}
                    />

                    {/* Node */}
                    <div
                      ref={(el) => {
                        nodesRef.current[i] = el;
                      }}
                      className="relative z-20"
                    >
                      <div
                        data-ring
                        className="absolute inset-[-4px] rounded-full border-2 border-accent-lime/40 pointer-events-none"
                      />
                      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-accent-lime to-accent-lime/70 flex items-center justify-center shadow-[0_0_30px_rgba(132,204,22,0.3)] z-10 border-4 border-background-deep">
                        <span className="text-white font-bold text-sm">
                          {step.id}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className={`w-[calc(50%-40px)] ${!isLeft ? "pl-0" : ""}`}>
                    {!isLeft && (
                      <div
                        ref={(el) => {
                          cardsRef.current[i] = el;
                        }}
                      >
                        <PremiumCard className="group flex flex-col items-start text-left p-0 overflow-hidden border-white/10 bg-background-light/40 hover:border-accent-lime/30 transition-all duration-500">
                          <div className="w-full h-44 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                            <Image
                              src={`/images/assets/step${i + 1}.png`}
                              alt={step.title}
                              fill
                              sizes="(max-width: 1280px) 100vw, 420px"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                            />
                          </div>
                          <div className="p-6 relative w-full">
                            <span className="text-5xl font-serif text-accent-lime/10 absolute top-2 right-6 font-bold group-hover:text-accent-lime/20 transition-colors duration-500 select-none">
                              {step.id}
                            </span>
                            <h3 className="text-xl font-serif mb-3 relative z-20 text-text-main group-hover:text-accent-lime transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-sm text-text-soft leading-relaxed relative z-20">
                              {step.text}
                            </p>
                          </div>
                        </PremiumCard>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* End Dot */}
            <div className="flex justify-center pt-4">
              <div className="w-4 h-4 rounded-full bg-accent-lime/40 border-2 border-accent-lime animate-pulse" />
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* MOBILE / TABLET TIMELINE  */}
        {/* ========================= */}
        <div className="relative mx-auto max-w-xl lg:hidden">
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-[2px] bg-white/5 z-0">
            <div
              className="absolute top-0 left-0 w-full h-full origin-top bg-gradient-to-b from-accent-lime/60 via-accent-lime/40 to-accent-lime/60 mobile-progress"
            />
          </div>

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, i) => (
              <div key={step.id} className="relative flex items-start gap-4 sm:gap-6">
                {/* Node */}
                <div className="relative flex-shrink-0 mt-2 z-10">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-accent-lime to-accent-lime/70 flex items-center justify-center shadow-[0_0_25px_rgba(132,204,22,0.25)] border-4 border-background-deep">
                    <span className="text-white font-bold text-xs sm:text-sm">
                      {step.id}
                    </span>
                  </div>
                  {/* Branch line connecting node to card */}
                  <div className="absolute top-1/2 left-full -translate-y-1/2 w-4 sm:w-6 h-[2px] bg-accent-lime/30" />
                </div>

                {/* Card */}
                <div className="flex-1 min-w-0">
                  <PremiumCard className="group flex flex-col items-start text-left p-0 overflow-hidden border-white/10 bg-background-light/40 hover:border-accent-lime/30 transition-all duration-500">
                    <div className="w-full h-32 sm:h-40 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                      <Image
                        src={`/images/assets/step${i + 1}.png`}
                        alt={step.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 420px"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                      />
                    </div>
                    <div className="p-4 sm:p-6 relative w-full">
                      <span className="text-4xl sm:text-5xl font-serif text-accent-lime/10 absolute top-1 right-4 font-bold group-hover:text-accent-lime/20 transition-colors duration-500 select-none">
                        {step.id}
                      </span>
                      <h3 className="relative z-20 mb-2 text-lg font-serif text-text-main transition-colors duration-300 group-hover:text-accent-lime sm:mb-3 sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="relative z-20 text-sm leading-relaxed text-text-soft">
                        {step.text}
                      </p>
                    </div>
                  </PremiumCard>
                </div>
              </div>
            ))}
          </div>

          {/* End Dot */}
          <div className="flex pl-[18px] sm:pl-[22px] mt-6">
            <div className="w-4 h-4 rounded-full bg-accent-lime/40 border-2 border-accent-lime animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
