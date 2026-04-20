// "use client";

// import { PrecisionReveal } from "@/components/animations/PrecisionReveal";

// export function FounderStory() {
//   return (
//     <section className="py-40 bg-background relative overflow-hidden">
//       {/* Decorative Gradient */}
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-lime/20 to-transparent" />
      
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
//           {/* Media: Cinematic Visual */}
//           <PrecisionReveal direction="left">
//             <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group shadow-2xl">
//                <img 
//                 src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=800" 
//                 alt="The Vision"
//                 className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-[3s]"
//                />
//                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
//                <div className="absolute bottom-10 left-10 right-10">
//                   <p className="text-white font-serif text-3xl italic leading-relaxed text-left">
//                     "Training is the easy part. Knowing what to train, and when, is where most athletes fail."
//                   </p>
//                </div>
//             </div>
//           </PrecisionReveal>

//           {/* Content: The Narrative */}
//           <div className="space-y-12 text-left">
//             <PrecisionReveal direction="right">
//               <span className="text-accent-lime font-bold tracking-[0.2em] text-xs uppercase mb-6 block">
//                 The Vision
//               </span>
//               <h2 className="text-4xl md:text-5xl font-serif text-text-main leading-tight mb-8">
//                 Built from the <span className="italic">trenches</span> of development.
//               </h2>
              
//               <div className="space-y-6 text-lg text-text-soft font-medium leading-relaxed">
//                 <p>
//                   True Path Athletics was born from a simple realization: Talent is abundant, but guidance is rare.
//                 </p>
//                 <p>
//                   We saw too many athletes quit, too many parents get overwhelmed, and too much potential get lost in the noise of a generic approach.
//                 </p>
//                 <p>
//                   Our mission is to provide the clarity and confidence required to navigate the long-term journey of athletic development.
//                 </p>
//               </div>

//               <div className="pt-10 flex items-center gap-6">
//                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-lime/30">
//                     <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" alt="Founder" className="w-full h-full object-cover" />
//                  </div>
//                  <div>
//                     <p className="font-bold text-text-main">Lead Guide</p>
//                     <p className="text-sm text-text-soft">True Path Athletics</p>
//                  </div>
//               </div>
//             </PrecisionReveal>
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
import Image from "next/image";
import { PrecisionReveal } from "@/components/animations/PrecisionReveal";

gsap.registerPlugin(ScrollTrigger);

export function FounderStory() {
  const sectionRef = useRef(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef(null);
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const founderRef = useRef(null);
  const topLineRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (topLineRef.current) {
        gsap.fromTo(
          topLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { y: 20 },
          {
            y: -20,
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

      if (quoteRef.current) {
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      paragraphsRef.current.forEach((p, i) => {
        if (!p) return;
        gsap.fromTo(
          p,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: p,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.1,
          }
        );
      });

      if (founderRef.current) {
        gsap.fromTo(
          founderRef.current,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: founderRef.current,
              start: "top 92%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      gsap.to("[data-float]", {
        y: -15,
        duration: 3.5,
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
      className="relative h-screen min-h-[600px] max-h-[1000px] flex items-center bg-background overflow-hidden"
    >
      {/* Decorative Top Line */}
      <div
        ref={topLineRef}
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-lime/20 to-transparent origin-center"
      />

      {/* Background Blobs */}
      <div
        data-float
        className="absolute top-1/3 -right-20 w-48 h-48 sm:w-64 sm:h-64 bg-accent-lime/5 blur-[100px] rounded-full pointer-events-none"
      />
      <div
        data-float
        className="absolute bottom-1/4 -left-20 w-48 h-48 sm:w-56 sm:h-56 bg-accent-lime/5 blur-[80px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto h-full">
          {/* ======================== */}
          {/* LEFT: Cinematic Visual   */}
          {/* ======================== */}
          <PrecisionReveal direction="left">
            <div className="relative mx-auto lg:mx-0 w-full max-w-xs sm:max-w-sm lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-l-2 border-accent-lime/30 rounded-tl-2xl pointer-events-none z-20" />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-r-2 border-accent-lime/30 rounded-br-2xl pointer-events-none z-20" />

              {/* Image Container */}
              <div className="relative h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[70vh] max-h-[500px] lg:max-h-[600px] rounded-xl sm:rounded-2xl overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    ref={imageRef}
                    className="relative w-full h-[115%]"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=800"
                      alt="The Vision"
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-[3s]"
                    />
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70" />

                {/* Quote */}
                <div
                  ref={quoteRef}
                  className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6"
                >
                  <div className="relative">
                    <div className="absolute -left-2 top-0 bottom-0 w-[2px] bg-accent-lime/60 rounded-full" />
                    <p className="text-white font-serif text-sm sm:text-base md:text-lg lg:text-xl italic leading-snug sm:leading-relaxed text-left pl-3">
                      &ldquo;Training is the easy part. Knowing what to train, and
                      when, is where most athletes fail.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </PrecisionReveal>

          {/* ======================== */}
          {/* RIGHT: The Narrative     */}
          {/* ======================== */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-left">
            <PrecisionReveal direction="right">
              <span className="text-accent-lime font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-2 sm:mb-3 block">
                The Vision
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-serif text-text-main leading-tight mb-3 sm:mb-4 lg:mb-5">
                Built from the <span className="italic">trenches</span> of
                development.
              </h2>

              <div className="space-y-2.5 sm:space-y-3 lg:space-y-4 text-sm sm:text-base lg:text-[0.95rem] text-text-soft font-medium leading-relaxed">
                <p
                  ref={(el) => {
                    paragraphsRef.current[0] = el;
                  }}
                >
                  True Path Athletics was born from a simple realization: Talent
                  is abundant, but guidance is rare.
                </p>
                <p
                  ref={(el) => {
                    paragraphsRef.current[1] = el;
                  }}
                >
                  We saw too many athletes quit, too many parents get
                  overwhelmed, and too much potential get lost in the noise of a
                  generic approach.
                </p>
                <p
                  ref={(el) => {
                    paragraphsRef.current[2] = el;
                  }}
                >
                  Our mission is to provide the clarity and confidence required
                  to navigate the long-term journey of athletic development.
                </p>
              </div>

              {/* Founder Info */}
              <div
                ref={founderRef}
                className="pt-4 sm:pt-5 lg:pt-6 flex items-center gap-3 sm:gap-4"
              >
                <div className="relative group/avatar flex-shrink-0">
                  <div className="absolute -inset-1 rounded-full border border-accent-lime/20 group-hover/avatar:border-accent-lime/40 transition-colors duration-500" />
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-accent-lime/30 group-hover/avatar:border-accent-lime/60 transition-colors duration-500">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
                      alt="Founder"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover group-hover/avatar:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div>
                  <p className="font-bold text-text-main text-xs sm:text-sm">
                    Lead Guide
                  </p>
                  <p className="text-[10px] sm:text-xs text-text-soft">
                    True Path Athletics
                  </p>
                </div>

                <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-accent-lime/20 to-transparent ml-2" />
              </div>
            </PrecisionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
