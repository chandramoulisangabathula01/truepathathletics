// "use client";

// import { RevealSection } from "@/components/animations/RevealSection";
// import { SplitText } from "@/components/animations/SplitText";

// export function TheTruth() {
//   return (
//     <section className="py-40 bg-background-light/10">
//       <div className="container mx-auto px-6 text-center max-w-4xl">
//         <RevealSection>
//           <span className="text-accent-lime font-bold tracking-[0.2em] text-xs uppercase mb-8 block">
//             The Truth
//           </span>
//         </RevealSection>
        
//         <SplitText 
//           text="&quot;Talent is not the problem. The path is.&quot;"
//           className="text-4xl md:text-6xl font-serif mb-12 leading-tight"
//         />

//         <RevealSection delay={0.5}>
//           <p className="text-lg md:text-xl text-text-soft leading-relaxed">
//             We've worked with hundreds of athletes and families. The ones who thrive aren't the most talented. They're the ones who had <span className="text-accent-lime font-bold">clarity</span> about where they were, what they needed, and how to keep going.
//           </p>
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
import { SplitText } from "@/components/animations/SplitText";

gsap.registerPlugin(ScrollTrigger);

export function TheTruth() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !bgContainerRef.current) return;

    // Parallax background effect - apply to entire bg container
    gsap.to(bgContainerRef.current, {
      yPercent: 15,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
    });

    // Content fade and slide up
    gsap.fromTo(
      sectionRef.current.querySelectorAll("[data-animate]"),
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-14 sm:py-22 md:py-30 lg:py-40"
    >
      {/* Background Container - Image + Overlay move together */}
      <div
        ref={bgContainerRef}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        {/* Dark Overlay - Same speed as image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto max-w-2xl px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-4xl lg:px-8">
        {/* Badge */}
        <RevealSection>
          <div data-animate className="mb-5 sm:mb-8 md:mb-10">
            <span className="inline-block rounded-full border border-accent-lime/30 bg-accent-lime/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-lime transition-colors duration-300 hover:bg-accent-lime/10 sm:px-4 sm:py-2 sm:text-sm">
              The Truth
            </span>
          </div>
        </RevealSection>

        {/* Main Quote */}
        <div data-animate className="mb-7 sm:mb-12 md:mb-16">
          <SplitText
            text="&quot;Talent is not the problem. The path is.&quot;"
            className="text-2xl leading-tight font-serif text-white sm:text-3xl sm:leading-snug md:text-5xl md:leading-tight lg:text-6xl"
          />
        </div>

        {/* Description */}
        <RevealSection delay={0.5}>
          <div
            data-animate
            className="space-y-3 sm:space-y-6"
          >
            <p className="text-sm font-light leading-relaxed text-gray-100 sm:text-lg md:text-xl lg:text-2xl">
              We&apos;ve worked with hundreds of athletes and families. The ones who
              thrive aren&apos;t the most talented. They&apos;re the ones who had{" "}
              <span className="text-accent-lime font-bold">clarity</span>
              about where they were, what they needed, and how to keep going.
            </p>
          </div>
        </RevealSection>

        
      </div>
    </section>
  );
}
