// // "use client";

// // import Link from "next/link";
// // import { ArrowRight, ClipboardCheck, Map, RefreshCcw } from "lucide-react";
// // import { motion, useInView } from "framer-motion";
// // import { useRef } from "react";

// // const steps = [
// //   {
// //     id: "01",
// //     title: "Assessment",
// //     text: "We evaluate your athlete's current stage, training load, mindset, and competition reality.",
// //     icon: ClipboardCheck,
// //   },
// //   {
// //     id: "02",
// //     title: "Athlete Roadmap",
// //     text: "You receive a clear next-step plan with priorities for training, recovery, and tournament decisions.",
// //     icon: Map,
// //   },
// //   {
// //     id: "03",
// //     title: "Ongoing Guidance",
// //     text: "We stay with your family through transitions, setbacks, and progress so momentum is protected.",
// //     icon: RefreshCcw,
// //   },
// // ];

// // function StepItem({
// //   step,
// //   index,
// //   className = "",
// // }: {
// //   step: typeof steps[0];
// //   index: number;
// //   className?: string;
// // }) {
// //   const ref = useRef(null);
// //   const isInView = useInView(ref, { once: true, margin: "-50px" });
// //   const Icon = step.icon;

// //   return (
// //     <motion.article
// //       ref={ref}
// //       initial={{ opacity: 0, y: 24 }}
// //       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
// //       transition={{
// //         duration: 0.55,
// //         delay: index * 0.1,
// //         ease: [0.16, 1, 0.3, 1],
// //       }}
// //       className={`group relative flex h-full flex-col items-start px-1 py-2 text-left ${className}`}
// //     >
// //       <div className="mb-4 flex items-center gap-3">
// //         <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-lime/12">
// //           <Icon
// //             className="h-5 w-5 text-accent-lime transition-transform duration-300 group-hover:scale-110"
// //             strokeWidth={1.8}
// //           />
// //         </div>
// //         <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted transition-colors duration-300 group-hover:text-accent-lime">
// //           Phase {step.id}
// //         </span>
// //       </div>

// //       <h3 className="text-2xl font-serif leading-tight text-text-heading">
// //         {step.title}
// //       </h3>
// //       <p className="mt-2 text-sm leading-6 text-text-soft sm:text-[0.95rem]">
// //         {step.text}
// //       </p>
// //     </motion.article>
// //   );
// // }

// // export function HowItWorks() {
// //   const containerRef = useRef(null);
// //   const isInView = useInView(containerRef, { once: true, margin: "-50px" });

// //   return (
// //     <section
// //       ref={containerRef}
// //       className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-background py-4 font-sans selection:bg-accent-lime/20 sm:py-6"
// //     >
// //       <div className="pointer-events-none absolute inset-0">
// //         <div className="absolute left-1/2 top-8 h-[420px] w-[560px] -translate-x-1/2 rounded-full bg-accent-lime/[0.08] blur-[130px]" />
// //         <div className="absolute -left-20 bottom-4 h-56 w-56 rounded-full bg-accent-lime/[0.07] blur-[95px]" />
// //         <div className="absolute -right-20 top-8 h-56 w-56 rounded-full bg-accent-lime/[0.06] blur-[95px]" />
// //       </div>

// //       <div className="container relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
// //           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
// //           className="mx-auto w-full max-w-6xl px-1 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8"
// //         >
// //           <div className="mx-auto max-w-3xl text-center">
// //             <div className="mb-3 flex items-center justify-center gap-3">
// //               <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-lime">
// //                 How It Works
// //               </span>
// //             </div>

// //             <h2 className="text-3xl font-serif leading-tight text-text-heading sm:text-4xl lg:text-5xl">
// //               A simple 3-step system for long-term progress
// //             </h2>

// //             <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-text-soft sm:text-base">
// //               No guesswork, just clear sequence and ongoing guidance that adapts
// //               with your athlete.
// //             </p>
// //           </div>

// //           <div className="mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 md:hidden">
// //             {steps.map((step, i) => (
// //               <StepItem
// //                 key={step.id}
// //                 step={step}
// //                 index={i}
// //                 className="min-w-[78%] snap-start"
// //               />
// //             ))}
// //           </div>

// //           <div className="relative mt-6 hidden md:block">
// //             <div className="pointer-events-none absolute left-[16%] right-[16%] top-5 h-px bg-gradient-to-r from-transparent via-accent-lime/40 to-transparent" />
// //             <div className="grid grid-cols-3 gap-6 lg:gap-8">
// //               {steps.map((step, i) => (
// //                 <StepItem key={step.id} step={step} index={i} className="pt-8" />
// //               ))}
// //             </div>
// //           </div>

// //           <motion.div
// //             initial={{ opacity: 0, y: 24 }}
// //             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
// //             transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
// //             className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
// //           >
// //             <Link
// //               href="/contact"
// //               className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-accent-lime px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:brightness-110 sm:min-h-[50px]"
// //             >
// //               Book Consultation
// //               <ArrowRight
// //                 className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
// //                 strokeWidth={2}
// //               />
// //             </Link>

// //             <Link
// //               href="/contact"
// //               className="inline-flex min-h-[46px] items-center justify-center rounded-xl px-4 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-text-heading transition-all duration-300 hover:text-accent-lime sm:min-h-[50px]"
// //             >
// //               Get Athlete Roadmap
// //             </Link>
// //           </motion.div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import Link from "next/link";
// import { ArrowRight, ClipboardCheck, Map, RefreshCcw } from "lucide-react";
// import { motion, useInView, useReducedMotion } from "framer-motion";
// import { useRef } from "react";

// const steps = [
//   {
//     id: "01",
//     title: "Assessment",
//     text: "We evaluate your athlete's current stage, training load, mindset, and competition reality.",
//     icon: ClipboardCheck,
//   },
//   {
//     id: "02",
//     title: "Athlete Roadmap",
//     text: "You receive a clear next-step plan with priorities for training, recovery, and tournament decisions.",
//     icon: Map,
//   },
//   {
//     id: "03",
//     title: "Ongoing Guidance",
//     text: "We stay with your family through transitions, setbacks, and progress so momentum is protected.",
//     icon: RefreshCcw,
//   },
// ];

// const ease = [0.16, 1, 0.3, 1] as const;

// function StepItem({
//   step,
//   index,
// }: {
//   step: (typeof steps)[number];
//   index: number;
// }) {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const isInView = useInView(ref, { once: true, margin: "-80px" });
//   const Icon = step.icon;
//   const reduce = useReducedMotion();

//   return (
//     <motion.article
//       ref={ref}
//       initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22, scale: 0.98 }}
//       animate={
//         isInView
//           ? reduce
//             ? { opacity: 1 }
//             : { opacity: 1, y: 0, scale: 1 }
//           : reduce
//             ? { opacity: 0 }
//             : { opacity: 0, y: 22, scale: 0.98 }
//       }
//       transition={{
//         duration: 0.6,
//         delay: index * 0.12,
//         ease,
//       }}
//       className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md"
//     >
//       {/* hover glow + sweep */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
//         <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//           <div className="absolute -left-24 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent-lime/15 blur-2xl" />
//           <div className="absolute -right-24 top-1/3 h-40 w-40 -translate-y-1/2 rounded-full bg-accent-lime/10 blur-2xl" />
//         </div>

//         <motion.div
//           aria-hidden
//           initial={{ x: "-60%", opacity: 0 }}
//           whileHover={reduce ? {} : { x: "60%", opacity: 1 }}
//           transition={{ duration: 0.9, ease }}
//           className="absolute top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
//         />
//       </div>

//       <div className="relative z-10 flex items-start gap-4">
//         <motion.div
//           initial={reduce ? {} : { rotate: -8 }}
//           whileHover={reduce ? {} : { rotate: 0, scale: 1.03 }}
//           transition={{ duration: 0.35, ease }}
//           className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-lime/12 ring-1 ring-accent-lime/20"
//         >
//           <Icon
//             className="h-5 w-5 text-accent-lime"
//             strokeWidth={1.8}
//           />
//         </motion.div>

//         <div className="min-w-0">
//           <div className="flex items-center gap-3">
//             <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-text-muted">
//               Phase {step.id}
//             </span>

//             <motion.span
//               initial={{ scaleX: 0 }}
//               animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.12 + 0.15, ease }}
//               className="hidden h-px w-10 origin-left bg-gradient-to-r from-accent-lime/60 to-transparent sm:block"
//             />
//           </div>

//           <h3 className="mt-2 text-2xl font-serif leading-tight text-text-heading">
//             {step.title}
//           </h3>

//           <p className="mt-2 text-sm leading-6 text-text-soft sm:text-[0.95rem]">
//             {step.text}
//           </p>
//         </div>
//       </div>

//       {/* bottom micro accent */}
//       <div className="pointer-events-none absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent-lime/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//     </motion.article>
//   );
// }

// export function HowItWorks() {
//   const containerRef = useRef<HTMLElement | null>(null);
//   const isInView = useInView(containerRef, { once: true, margin: "-120px" });
//   const reduce = useReducedMotion();

//   return (
//     <section
//       ref={containerRef}
//       className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-background py-10 font-sans selection:bg-accent-lime/20 sm:py-14"
//     >
//       {/* animated background */}
//       <div className="pointer-events-none absolute inset-0">
//         <motion.div
//           aria-hidden
//           initial={reduce ? { opacity: 0.5 } : { opacity: 0, scale: 0.95 }}
//           animate={reduce ? { opacity: 0.55 } : { opacity: 1, scale: 1 }}
//           transition={{ duration: 1.0, ease }}
//           className="absolute left-1/2 top-8 h-[460px] w-[640px] -translate-x-1/2 rounded-full bg-accent-lime/[0.08] blur-[140px]"
//         />

//         <motion.div
//           aria-hidden
//           initial={reduce ? {} : { x: -12, y: 10, opacity: 0 }}
//           animate={reduce ? { opacity: 1 } : { x: 0, y: 0, opacity: 1 }}
//           transition={{ duration: 0.9, ease, delay: 0.1 }}
//           className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-accent-lime/[0.07] blur-[100px]"
//         />

//         <motion.div
//           aria-hidden
//           initial={reduce ? {} : { x: 12, y: -10, opacity: 0 }}
//           animate={reduce ? { opacity: 1 } : { x: 0, y: 0, opacity: 1 }}
//           transition={{ duration: 0.9, ease, delay: 0.15 }}
//           className="absolute -right-24 top-6 h-64 w-64 rounded-full bg-accent-lime/[0.06] blur-[100px]"
//         />

//         {/* subtle moving noise grid */}
//         <motion.div
//           aria-hidden
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.18 }}
//           transition={{ duration: 0.8, ease }}
//           className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_0)] [background-size:18px_18px]"
//           style={{
//             maskImage:
//               "radial-gradient(55% 55% at 50% 35%, black 30%, transparent 70%)",
//             WebkitMaskImage:
//               "radial-gradient(55% 55% at 50% 35%, black 30%, transparent 70%)",
//           }}
//         />
//       </div>

//       <div className="container relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={reduce ? { opacity: 0 } : { opacity: 0, y: 26 }}
//           animate={isInView ? (reduce ? { opacity: 1 } : { opacity: 1, y: 0 }) : {}}
//           transition={{ duration: 0.9, ease }}
//           className="mx-auto w-full max-w-6xl"
//         >
//           <div className="mx-auto max-w-3xl text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.7, ease, delay: 0.05 }}
//               className="mb-3 flex items-center justify-center gap-3"
//             >
//               <span className="rounded-full border border-accent-lime/25 bg-accent-lime/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-lime">
//                 How It Works
//               </span>
//             </motion.div>

//             <motion.h2
//               initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
//               animate={isInView ? (reduce ? { opacity: 1 } : { opacity: 1, y: 0 }) : {}}
//               transition={{ duration: 0.8, ease, delay: 0.12 }}
//               className="text-3xl font-serif leading-tight text-text-heading sm:text-4xl lg:text-5xl"
//             >
//               A simple 3-step system for long-term progress
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 12 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.75, ease, delay: 0.18 }}
//               className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-text-soft sm:text-base"
//             >
//               No guesswork, just clear sequence and ongoing guidance that adapts
//               with your athlete.
//             </motion.p>
//           </div>

//           {/* mobile: snap cards */}
//           <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:hidden">
//             {steps.map((step, i) => (
//               <div key={step.id} className="min-w-[82%] snap-start">
//                 <StepItem step={step} index={i} />
//               </div>
//             ))}
//           </div>

//           {/* desktop: timeline + stagger */}
//           <div className="relative mt-10 hidden md:block">
//             <motion.div
//               aria-hidden
//               initial={{ scaleX: 0, opacity: 0 }}
//               animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
//               transition={{ duration: 0.9, ease, delay: 0.15 }}
//               className="pointer-events-none absolute left-[10%] right-[10%] top-7 h-px origin-center bg-gradient-to-r from-transparent via-accent-lime/45 to-transparent"
//             />

//             <div className="grid grid-cols-3 gap-6 lg:gap-8">
//               {steps.map((step, i) => (
//                 <div key={step.id} className="pt-10">
//                   <StepItem step={step} index={i} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <motion.div
//             initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
//             animate={isInView ? (reduce ? { opacity: 1 } : { opacity: 1, y: 0 }) : {}}
//             transition={{ duration: 0.75, delay: 0.22, ease }}
//             className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
//           >
//             <Link
//               href="/contact"
//               className="group relative inline-flex min-h-[48px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-accent-lime px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:brightness-110"
//             >
//               {/* button shine */}
//               <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                 <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent [transform:skewX(-18deg)] group-hover:animate-[shine_900ms_ease-out_1]" />
//               </span>

//               <span className="relative">Book Consultation</span>
//               <ArrowRight
//                 className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
//                 strokeWidth={2}
//               />
//             </Link>

//             <Link
//               href="/contact"
//               className="inline-flex min-h-[48px] items-center justify-center rounded-xl px-4 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-text-heading transition-all duration-300 hover:text-accent-lime"
//             >
//               Get Athlete Roadmap
//             </Link>
//           </motion.div>

//           {/* keyframes for shine */}
//           <style jsx global>{`
//             @keyframes shine {
//               0% {
//                 transform: translateX(-30%) skewX(-18deg);
//                 opacity: 0;
//               }
//               25% {
//                 opacity: 1;
//               }
//               100% {
//                 transform: translateX(230%) skewX(-18deg);
//                 opacity: 0;
//               }
//             }
//           `}</style>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    id: "01",
    title: "Assessment",
    text: "We evaluate your athlete's current stage, training load, mindset, and competition reality.",
  },
  {
    id: "02",
    title: "Athlete Roadmap",
    text: "You receive a clear next-step plan with priorities for training, recovery, and tournament decisions.",
  },
  {
    id: "03",
    title: "Ongoing Guidance",
    text: "We stay with your family through transitions, setbacks, and progress so momentum is protected.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

function StepCard({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  return (
    <motion.article
      ref={ref}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.98 }}
      animate={
        isInView
          ? reduce
            ? { opacity: 1 }
            : { opacity: 1, y: 0, scale: 1 }
          : {}
      }
      transition={{ duration: 0.7, delay: 0.1 * index, ease }}
      className="group relative h-full overflow-hidden rounded-3xl border border-accent-lime/35 bg-gradient-to-b from-slate-100/12 via-slate-200/[0.06] to-slate-900/10 p-5 shadow-[0_0_32px_rgba(var(--accent-primary-rgb),0.20)] backdrop-blur-xl sm:p-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-lime/70 to-transparent" />
        <div className="absolute bottom-0 left-1/2 h-px w-4/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-lime/45 to-transparent" />
        <div className="absolute -bottom-20 left-1/2 h-32 w-36 -translate-x-1/2 rounded-full bg-accent-lime/20 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute left-3 top-0 text-[6.8rem] font-bold leading-none tracking-[-0.04em] text-accent-lime/45 sm:text-[7.4rem]">
        {step.id}
      </div>

      <div className="relative z-10 mt-[5.1rem]">
        <p className="font-mono text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-accent-secondary/95">
          Phase {step.id}
        </p>

        <h3 className="mt-2 text-[2.35rem] font-sans font-semibold leading-[0.95] tracking-[-0.02em] text-slate-50 sm:text-[2.55rem]">
          {step.title}
        </h3>

        <p className="mt-3 max-w-[25ch] text-[1.02rem] leading-[1.6] text-slate-200/82 sm:text-[1.06rem]">
          {step.text}
        </p>
      </div>
    </motion.article>
  );
}

export function HowItWorks() {
  const containerRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();

  return (
    <section
      ref={containerRef}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-slate-950 py-14 font-sans selection:bg-accent-lime/20 lg:py-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(58%_92%_at_76%_25%,rgba(47,111,184,0.28),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(46%_60%_at_52%_84%,rgba(47,111,184,0.20),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,#02060f_0%,#041331_50%,#05112d_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] [mask-image:radial-gradient(62%_78%_at_74%_44%,black_30%,transparent_90%)]" />
      </div>

      <div className="container relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.45fr] lg:gap-10">
          <div className="max-w-xl">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease }}
            >
              <h2 className="text-3xl font-serif leading-[0.95] text-white sm:text-5xl lg:text-6xl">
                A simple
                <br />
                <span className="text-accent-lime">3-step system</span>
                <br />
                for long-term
                <br />
                progress
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-[1.45] text-slate-300 sm:text-[1.12rem]">
                No guesswork, just clear sequence and ongoing guidance that adapts
                with your athlete. We bridge the gap between potential and performance.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-accent-lime px-7 py-3 text-[0.95rem] font-bold uppercase tracking-[0.02em] text-white transition-all duration-300 hover:brightness-110"
                >
                  Book Consultation
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/18 bg-white/[0.02] px-7 py-3 text-[0.95rem] font-bold uppercase tracking-[0.02em] text-slate-100 transition-all duration-300 hover:border-accent-lime/40 hover:text-accent-lime"
                >
                  Get Athlete Roadmap
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {steps.map((step, i) => (
                <StepCard key={step.id} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
