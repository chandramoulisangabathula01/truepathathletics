// "use client";

// import { RevealSection } from "@/components/animations/RevealSection";
// import Image from "next/image";
// import { AlertTriangle, Clock, RefreshCw, HandCoins } from "lucide-react";

// export function ParentMistakes() {
//   const mistakes = [
//     {
//       icon: Clock,
//       title: "Too much pressure, too early",
//       text: "When winning equals worth at age 8, athletes learn to fear failure instead of learning from it.",
//     },
//     {
//       icon: HandCoins,
//       title: "Spending without direction",
//       text: "Private lessons, elite camps, and equipment do not matter if the timing is wrong.",
//     },
//     {
//       icon: RefreshCw,
//       title: "Comparing their child to others",
//       text: "Every athlete matures differently. Comparison is almost always misleading and always damaging.",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden border-y border-accent-secondary/20 bg-background-light/5 py-16 sm:py-24 md:py-28 lg:py-32">
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-accent-lime/[0.03] blur-[140px]" />
//       </div>

//       <div className="container relative z-10 mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
//           {/* Left Column: Image Feature */}
//           <RevealSection className="order-2 lg:order-1 relative aspect-[4/5] lg:aspect-auto lg:h-[650px] w-full rounded-3xl overflow-hidden border border-accent-secondary/35 shadow-[0_22px_60px_-28px_rgba(31,79,147,0.6)]">
//             <Image 
//               src="https://images.unsplash.com/photo-1627627256673-021d7b322521?q=80&w=2000&auto=format&fit=crop"
//               alt="Athlete looking focused and pressured"
//               fill
//               className="object-cover opacity-80 grayscale-[30%] transition-transform duration-700 hover:scale-105 hover:grayscale-0"
//             />
//             {/* Cinematic Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-background-deep/40 to-transparent pointer-events-none" />
//             <div className="absolute inset-0 bg-gradient-to-r from-background-deep/60 via-accent-lime/12 to-transparent pointer-events-none" />
            
//             {/* Overlay Graphic Element */}
//             <div className="absolute bottom-10 left-10 right-10 p-6 rounded-2xl bg-accent-primary/15 backdrop-blur-md border border-accent-secondary/35 shadow-[0_14px_34px_-20px_rgba(31,79,147,0.65)]">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-full bg-accent-lime/10 flex items-center justify-center border border-accent-lime/20">
//                   <AlertTriangle className="w-6 h-6 text-accent-lime" />
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-white tracking-wide">Common Pitfalls</p>
//                   <p className="text-xs text-white/70 mt-1 uppercase tracking-widest">Identify & Correct</p>
//                 </div>
//               </div>
//             </div>
//           </RevealSection>

//           {/* Right Column: Text & List */}
//           <div className="order-1 lg:order-2">
//             <RevealSection>
//               <span className="text-accent-lime font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
//                 Where Most Parents Go Wrong
//               </span>
//               <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.04] text-accent-lime">
//                 With the best <br className="hidden sm:block" /> intentions.
//               </h2>
//               <p className="text-base sm:text-lg text-text-soft mb-12 max-w-xl">
//                 Nobody teaches parents how to support long-term athlete
//                 development. These mistakes are common and highly fixable.
//               </p>
//             </RevealSection>

//             <div className="space-y-8 lg:space-y-10">
//               {mistakes.map((mistake, i) => (
//                 <RevealSection key={i} delay={0.2 + (i * 0.1)}>
//                   <div className="flex gap-5 group">
//                     <div className="shrink-0 mt-1">
//                       <div className="w-14 h-14 rounded-2xl bg-accent-primary/12 flex items-center justify-center border border-accent-secondary/35 transition-colors duration-300 group-hover:bg-accent-lime/10 group-hover:border-accent-lime/30 shadow-inner">
//                         <mistake.icon className="w-6 h-6 text-text-muted group-hover:text-accent-lime transition-colors duration-300" />
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-xl sm:text-2xl font-serif mb-2 leading-tight text-accent-secondary transition-colors">
//                         {mistake.title}
//                       </h3>
//                       <p className="text-text-soft text-sm sm:text-base leading-relaxed">
//                         {mistake.text}
//                       </p>
//                     </div>
//                   </div>
//                 </RevealSection>
//               ))}
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { RevealSection } from "@/components/animations/RevealSection";
import Image from "next/image";
import { AlertTriangle, Clock, RefreshCw, HandCoins } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ParentMistakes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);

  const mistakes = [
    {
      icon: Clock,
      title: "Too much pressure, too early",
      text: "When winning equals worth at age 8, athletes learn to fear failure instead of learning from it.",
    },
    {
      icon: HandCoins,
      title: "Spending without direction",
      text: "Private lessons, elite camps, and equipment do not matter if the timing is wrong.",
    },
    {
      icon: RefreshCw,
      title: "Comparing their child to others",
      text: "Every athlete matures differently. Comparison is almost always misleading and always damaging.",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Image parallax
      if (imageRef.current) {
        const img = imageRef.current.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { y: 30 },
            {
              y: -30,
              ease: "none",
              scrollTrigger: {
                trigger: imageRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
              },
            }
          );
        }
      }

      // Overlay card slide up
      if (overlayRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: overlayRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // List items stagger
      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.1,
          }
        );

        // Icon separator line draw
        const line = item.querySelector("[data-line]");
        if (line) {
          gsap.fromTo(
            line,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              delay: i * 0.1 + 0.3,
            }
          );
        }
      });

      // Floating blob
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
      className="relative overflow-hidden bg-background-deep py-16 sm:py-24 md:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03]"
          style={{
            backgroundImage:
              "url('/images/problem/confused.png')",
          }}
        />
        <div className="absolute inset-0" />
      </div>

      {/* Blobs */}
      <div
        data-float
        className="pointer-events-none absolute -right-20 top-1/3 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-accent-lime/5 blur-[120px]"
      />
      <div
        data-float
        className="pointer-events-none absolute -left-20 bottom-1/4 h-48 w-48 sm:h-56 sm:w-56 rounded-full bg-accent-lime/5 blur-[100px]"
      />

      {/* Top Line */}
      <div className="absolute top-0 left-0 w-full h-px" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-center max-w-7xl mx-auto">
          {/* Left: Image */}
          <RevealSection className="order-2 lg:order-1">
            <div
              ref={imageRef}
              className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:h-[550px] xl:h-[600px] w-full rounded-xl sm:rounded-2xl overflow-hidden group"
            >
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-10 h-10 sm:w-14 sm:h-14 border-t-2 border-l-2 border-accent-lime/30 rounded-tl-xl pointer-events-none z-30" />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-10 h-10 sm:w-14 sm:h-14 border-b-2 border-r-2 border-accent-lime/30 rounded-br-xl pointer-events-none z-30" />

              <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  src="/images/problem/confused.png"
                  alt="Athlete looking focused and pressured"
                  fill
                  className="object-cover opacity-80 grayscale-[30%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-90"
                />
              </div>

              {/* Gradients */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-background-deep/30 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-background-deep/40 to-transparent pointer-events-none z-10" /> */}

              {/* Overlay Card */}
              <div
                ref={overlayRef}
                className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-8 md:left-8 md:right-8 z-20"
              >
                <div className="p-4 sm:p-5 rounded-xl border border-white/10 bg-background-deep/60 backdrop-blur-md">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-accent-lime/10 flex items-center justify-center border border-accent-lime/20 flex-shrink-0">
                      <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-lime" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
                        Common Pitfalls
                      </p>
                      <p className="text-[10px] sm:text-xs text-white/50 mt-0.5 uppercase tracking-widest">
                        Identify & Correct
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <RevealSection>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 sm:mb-5 leading-tight">
               Where Most Parents Go Wrong  
              </span>
              <h2 className="text-accent-lime font-bold tracking-[0.2em] text-[20px] sm:text-md uppercase mb-3 sm:mb-4 block ">
                 
                <br className="hidden sm:block" />
                <span className="italic">With the best intentions.</span>
              </h2>
              <p className="text-sm sm:text-base text-text-soft mb-8 sm:mb-10 max-w-xl leading-relaxed">
                Nobody teaches parents how to support long-term athlete
                development. These mistakes are common and highly fixable.
              </p>
            </RevealSection>

            {/* Mistakes List */}
            <div className="space-y-0">
              {mistakes.map((mistake, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    itemsRef.current[i] = el;
                  }}
                  className="group"
                >
                  <div className="flex gap-4 sm:gap-5 py-5 sm:py-6">
                    {/* Icon */}
                    <div className="shrink-0 mt-0.5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/[0.03] flex items-center justify-center border border-white/[0.06] transition-all duration-500 group-hover:bg-accent-lime/10 group-hover:border-accent-lime/20">
                        <mistake.icon className="w-4 h-4 sm:w-5 sm:h-5 text-text-muted group-hover:text-accent-lime transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg lg:text-xl font-serif mb-1.5 sm:mb-2 leading-tight text-text-main group-hover:text-accent-lime transition-colors duration-300">
                        {mistake.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-soft leading-relaxed">
                        {mistake.text}
                      </p>
                    </div>
                  </div>

                  {/* Separator */}
                  {i < mistakes.length - 1 && (
                    <div
                      data-line
                      className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.04] to-transparent origin-left"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}