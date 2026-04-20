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
      className="relative w-full py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden"
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
            backgroundAttachment: "fixed",
          }}
        />
        {/* Dark Overlay - Same speed as image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl sm:max-w-3xl lg:max-w-4xl">
        {/* Badge */}
        <RevealSection>
          <div data-animate className="mb-6 sm:mb-8 md:mb-10">
            <span className="inline-block text-accent-lime font-bold tracking-[0.2em] text-xs sm:text-sm uppercase px-4 py-2 border border-accent-lime/30 rounded-full bg-accent-lime/5 hover:bg-accent-lime/10 transition-colors duration-300">
              The Truth
            </span>
          </div>
        </RevealSection>

        {/* Main Quote */}
        <div data-animate className="mb-8 sm:mb-12 md:mb-16">
          <SplitText
            text="&quot;Talent is not the problem. The path is.&quot;"
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight sm:leading-snug md:leading-tight"
          />
        </div>

        {/* Description */}
        <RevealSection delay={0.5}>
          <div
            data-animate
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed sm:leading-relaxed md:leading-relaxed font-light">
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
