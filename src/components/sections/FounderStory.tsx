import Image from "next/image";
import { RevealSection } from "@/components/animations/RevealSection";

const founderPreview = [
  {
    name: "FOUNDER 01",
    role: "PERFORMANCE & DEVELOPMENT LEAD",
    image:
      "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?auto=format&fit=crop&q=80&w=1200",
    line: "Guiding stage-based athlete progress with evidence-based strategies for peak physical development.",
    stickers: [
      { icon: "👟", className: "bottom-12 -left-4 xl:-left-8 rotate-[-15deg]" },
      { icon: "🎾", className: "-top-6 -right-4 xl:-right-6 rotate-[15deg]" }
    ]
  },
  {
    name: "FOUNDER 02",
    role: "PARENT GUIDANCE & COMMUNICATION LEAD",
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=1200",
    line: "Empowering families with clarity, resources, and transparent communication for informed decisions.",
    stickers: [
      { icon: "⚽", className: "-top-8 left-8 lg:-left-2 rotate-[-20deg]" },
      { icon: "🏆", className: "bottom-8 -right-4 xl:-right-8 rotate-[12deg]" }
    ]
  },
  {
    name: "FOUNDER 03",
    role: "ATHLETE WELL-BEING & LONGEVITY LEAD",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=1200",
    line: "Protecting athlete health, recovery, and fostering resilience for sustainable careers.",
    stickers: [
      { icon: "🏸", className: "top-12 -left-6 xl:-left-10 rotate-[-10deg]" },
      { icon: "🏅", className: "-bottom-6 right-8 rotate-[15deg]" }
    ]
  },
];

export function FounderStory() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-0 top-1/3 h-56 w-56 rounded-full bg-accent-lime/5 blur-[100px]" />
        <div className="absolute left-0 bottom-1/4 h-56 w-56 rounded-full bg-accent-lime/5 blur-[90px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <RevealSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-serif text-text-heading sm:text-4xl lg:text-5xl uppercase tracking-wide">
              OUR FOUNDERS
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-soft sm:text-lg max-w-xl mx-auto">
              Expert guidance from a specialized team dedicated to long-term athlete development.
            </p>
          </div>
        </RevealSection>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 xl:gap-8 lg:max-w-[70rem] mx-auto px-2 sm:px-0">
          {founderPreview.map((founder, index) => (
            <RevealSection key={founder.name} delay={index * 0.1}>
              <article className="relative group h-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[28px] border border-black/[0.04] bg-gradient-to-b from-surface to-background text-center transition-all duration-400 hover:-translate-y-2 hover:shadow-brand-md dark:border-white/[0.06] dark:from-surface-alt/80 dark:to-background-deep/60 backdrop-blur-xl p-6 sm:px-7 flex flex-col items-center">
                
                {/* Subtle top glare */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Embedded Card Stickers */}
                {founder.stickers?.map((sticker, idx) => (
                  <div
                    key={idx}
                    className={`absolute z-10 flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-[14px] border border-black/5 dark:border-white/10 bg-white/90 dark:bg-surface-alt/90 shadow-xl backdrop-blur-md select-none transition-transform duration-500 group-hover:scale-110 ${sticker.className}`}
                  >
                    <span className="text-xl lg:text-2xl drop-shadow-sm">
                      {sticker.icon}
                    </span>
                  </div>
                ))}

                <div className="relative mb-5 h-[200px] w-[140px] sm:h-[220px] sm:w-[150px] lg:h-[240px] lg:w-[160px] overflow-hidden rounded-full border-[3px] border-white/10 dark:border-white/5 bg-background shadow-inner transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(190,255,50,0.15)] group-hover:border-accent-lime/20">
                  <Image
                    src={founder.image}
                    alt={`${founder.name} profile`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                
                <h3 className="text-lg lg:text-xl font-serif text-text-heading mb-1 tracking-wider transition-colors duration-300 group-hover:text-accent-lime">
                  {founder.name}
                </h3>
                
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-accent-lime mb-3 h-8 flex items-center justify-center">
                  {founder.role}
                </p>
                
                <p className="text-xs sm:text-sm leading-relaxed text-text-soft relative z-10">
                  {founder.line}
                </p>
              </article>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
