"use client";

import Link from "next/link";
import { ArrowRight, ClipboardCheck, Map, RefreshCcw } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    id: "01",
    title: "Assessment",
    text: "We evaluate your athlete's current stage, training load, mindset, and competition reality.",
    icon: ClipboardCheck,
  },
  {
    id: "02",
    title: "Athlete Roadmap",
    text: "You receive a clear next-step plan with priorities for training, recovery, and tournament decisions.",
    icon: Map,
  },
  {
    id: "03",
    title: "Ongoing Guidance",
    text: "We stay with your family through transitions, setbacks, and progress so momentum is protected.",
    icon: RefreshCcw,
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = step.icon;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.21, 1.02, 0.49, 1],
      }}
      className="group relative flex h-full flex-col rounded-[2.5rem] border border-white/5 bg-surface/40 px-6 pb-10 pt-14 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-accent-lime/30 hover:bg-surface/70 hover:shadow-[0_20px_40px_-20px_rgba(var(--accent-primary-rgb),0.3)] sm:px-8 sm:pb-12"
    >
      {/* Background Watermark Number */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden rounded-[2.5rem]">
        <span className="translate-y-8 select-none font-serif text-[14rem] font-bold leading-none tracking-tighter text-white/[0.02] transition-colors duration-700 group-hover:text-accent-lime/[0.04]">
          {parseInt(step.id)}
        </span>
      </div>

      {/* Top Centered Icon */}
      <div className="absolute -top-8 left-1/2 z-20 -translate-x-1/2">
        <motion.div
          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-background-deep shadow-xl transition-all duration-500 group-hover:border-accent-lime/40 group-hover:bg-accent-lime/5 group-hover:shadow-[0_0_20px_rgba(var(--accent-primary-rgb),0.2)]"
        >
          {/* Subtle top reflection */}
          <div className="absolute inset-x-3 -top-px h-px bg-gradient-to-r from-transparent via-accent-lime/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <Icon className="h-6 w-6 text-text-muted transition-colors duration-500 group-hover:text-accent-lime" strokeWidth={1.5} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center text-center">
        <h3 className="mb-4 font-serif text-2xl font-medium text-text-heading transition-colors duration-300 group-hover:text-accent-primary">
          {step.title}
        </h3>

        <p className="text-base leading-relaxed text-text-soft transition-colors duration-300 group-hover:text-text-main">
          {step.text}
        </p>
      </div>

      {/* Hover Line at Bottom */}
      <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-t-full bg-accent-lime opacity-0 transition-all duration-500 group-hover:w-1/2 group-hover:opacity-100" />
    </motion.article>
  );
}

export function HowItWorks() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-background-deep py-24 sm:py-32 lg:py-40"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent-lime/[0.04] blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-20 max-w-3xl text-center sm:mb-24"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-lime/20 bg-accent-lime/10 px-4 py-1.5 shadow-[0_0_15px_rgba(var(--accent-primary-rgb),0.1)] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-lime" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-lime">
              How It Works
            </span>
          </div>

          <h2 className="text-4xl font-serif leading-[1.05] tracking-tight text-text-heading sm:text-5xl lg:text-6xl">
            A simple 3-step system for{" "}
            <span className="bg-gradient-to-r from-accent-lime to-accent-secondary bg-clip-text text-transparent">
              long-term
            </span>{" "}
            athlete progress
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-text-soft sm:text-lg">
            No guesswork. Just clarity, sequence, and consistent guidance that
            evolves with your athlete.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="relative pt-8">
          {/* Connecting Line connecting icons across cards */}
          {/* Positioned exactly vertically centered with the top edge of the cards: card has mt-0, relative parent pt-8 -> line top-8 */}
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-8 z-0 hidden h-px -translate-y-1/2 bg-white/[0.04] lg:block">
            <motion.div
              style={{ scaleX: lineScaleX, transformOrigin: "left" }}
              className="h-full bg-gradient-to-r from-accent-lime/40 via-accent-lime to-accent-lime shadow-[0_0_10px_rgba(var(--accent-primary-rgb),0.4)]"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, i) => (
              <StepCard key={step.id} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-20 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-24"
        >
          <Link
            href="/contact"
            className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-accent-lime px-8 py-4 text-base font-bold text-white shadow-[0_8px_20px_-8px_rgba(var(--accent-primary-rgb),0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_30px_-10px_rgba(var(--accent-primary-rgb),0.6)] active:scale-[0.98] sm:w-auto overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Free Consultation
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-4 text-base font-semibold text-text-heading backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
          >
            Get Athlete Roadmap
          </Link>
        </motion.div>
      </div>
    </section>
  );
}