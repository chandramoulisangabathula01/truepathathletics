"use client";

import Image from "next/image";
import { PrecisionReveal } from "@/components/animations/PrecisionReveal";
import { Activity, Brain, Shield, HeartHandshake } from "lucide-react";

const pillars = [
  {
    title: "Performance",
    icon: Activity,
    image: "/images/assets/guide_performance.png",
    items: [
      { name: "Tennis Training", desc: "Stage-specific technical and tactical development." },
      { name: "Match Strategy", desc: "Learn how to think during competition and not just practice." },
      { name: "Video Analysis", desc: "Film review to accelerate pattern recognition." }
    ]
  },
  {
    title: "Development",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Stage-Based Planning", desc: "A roadmap aligned to where the athlete actually is right now." },
      { name: "Mental Guidance", desc: "Confidence and focus built into daily training and not added later." },
      { name: "Competition Readiness", desc: "Preparing mentally, physically, and tactically for the next level." }
    ]
  },
  {
    title: "Foundation",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Nutrition", desc: "Practical fueling strategies built for real families." },
      { name: "Recovery", desc: "Sleep and rest protocols that keep athletes healthy through demanding seasons." },
      { name: "Injury Prevention", desc: "Movement screening and load management before problems develop." }
    ]
  },
  {
    title: "Parents",
    icon: HeartHandshake,
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Decision-Making Support", desc: "Help with the hard calls: timing, tournaments, and specialization." },
      { name: "Long-Term Planning", desc: "A 2 to 4 year roadmap that aligns expectations with reality." },
      { name: "Communication Guidance", desc: "Frameworks for conversations after hard losses and with coaches." }
    ]
  }
];

export function GuidePillars() {
  return (
    <section className="py-40 bg-[#0A0A1F]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {pillars.map((pillar, i) => (
            <PrecisionReveal key={pillar.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-accent-lime/30 transition-all duration-700">
                {/* Media Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-110 transition-all duration-[3s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1F] to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-accent-lime/10 backdrop-blur-md flex items-center justify-center text-accent-lime border border-accent-lime/20">
                      <pillar.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-3xl font-serif text-white">{pillar.title}</h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-10 space-y-8">
                  {pillar.items.map((item) => (
                    <div key={item.name} className="relative pl-6 border-l border-white/10 group/item">
                      <div className="absolute left-[-1px] top-1.5 w-[2px] h-3 bg-accent-lime opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      <h4 className="text-lg font-bold text-white mb-2 group-hover/item:text-accent-lime transition-colors">{item.name}</h4>
                      <p className="text-white/50 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </PrecisionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
