
// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { motion, AnimatePresence } from "motion/react";
// import { RevealSection } from "@/components/animations/RevealSection";
// import Stepper, { Step } from "@/components/ui/Stepper";
// import {
//   CheckCircle2,
//   ArrowRight,
//   Zap,
//   Target,
//   Shield,
//   Flame,
// } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// export function InteractiveAssessment() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const progressBarRef = useRef<HTMLDivElement>(null);
//   const resultCardsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const ctaRef = useRef<HTMLDivElement>(null);

//   const [assessmentData, setAssessmentData] = useState<
//     Record<string, string>
//   >({});
//   const [isCompleted, setIsCompleted] = useState(false);

//   const questions = [
//     {
//       id: "feeling",
//       icon: <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-energy-red" />,
//       question: "How does your athlete feel about training right now?",
//       options: [
//         "Excited and energized",
//         "Motivated but sometimes overwhelmed",
//         "Frustrated or stuck",
//         "Tired - I am just going through the motions",
//       ],
//     },
//     {
//       id: "level",
//       icon: <Target className="h-4 w-4 sm:h-5 sm:w-5 text-focus-cyan" />,
//       question: "What describes their current level of play?",
//       options: [
//         "Developmental / Just starting",
//         "Competitive / Local elite",
//         "Regional / National candidate",
//         "Collegiate / Professional target",
//       ],
//     },
//     {
//       id: "concern",
//       icon: <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-recovery-teal" />,
//       question: "What is your primary concern right now?",
//       options: [
//         "Burnout and mental fatigue",
//         "Performance plateaus",
//         "Injury risk and durability",
//         "The pressure to succeed",
//       ],
//     },
//     {
//       id: "goal",
//       icon: <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-accent-lime" />,
//       question:
//         "What is the number one outcome you want in the next 3 months?",
//       options: [
//         "A breakthrough in confidence",
//         "Elite physical resilience",
//         "Technical mastery and consistency",
//         "Clear direction and purpose",
//       ],
//     },
//   ] as const;

//   const totalSteps = questions.length;
//   const answeredCount = Object.keys(assessmentData).length;
//   const progress = (answeredCount / totalSteps) * 100;

//   const handleOptionSelect = (stepId: string, option: string) => {
//     setAssessmentData((prev) => ({ ...prev, [stepId]: option }));
//   };

//   const handleAssessmentComplete = () => {
//     setIsCompleted(true);
//   };

//   useEffect(() => {
//     if (!progressBarRef.current) return;
//     gsap.to(progressBarRef.current, {
//       width: `${progress}%`,
//       duration: 0.6,
//       ease: "power3.out",
//     });
//   }, [progress]);

//   useEffect(() => {
//     if (!isCompleted || !sectionRef.current) return;

//     const ctx = gsap.context(() => {
//       resultCardsRef.current.forEach((card, i) => {
//         if (!card) return;
//         gsap.fromTo(
//           card,
//           { opacity: 0, x: -30, scale: 0.95 },
//           {
//             opacity: 1,
//             x: 0,
//             scale: 1,
//             duration: 0.6,
//             ease: "back.out(1.2)",
//             delay: 0.4 + i * 0.15,
//           }
//         );
//       });

//       if (ctaRef.current) {
//         gsap.fromTo(
//           ctaRef.current,
//           { opacity: 0, scale: 0.9, y: 30 },
//           {
//             opacity: 1,
//             scale: 1,
//             y: 0,
//             duration: 0.8,
//             ease: "elastic.out(1, 0.75)",
//             delay: 1.2,
//           }
//         );
//       }
//     }, sectionRef);

//     return () => ctx.revert();
//   }, [isCompleted]);

//   /* ─────────────────────── RESULT SCREEN ─────────────────────── */
//   if (isCompleted) {
//     return (
//       <section
//         ref={sectionRef}
//         className="relative h-screen min-h-[580px] max-h-[1000px] bg-background-deep overflow-hidden flex items-center py-10 sm:py-14 lg:py-16"
//       >
//         {/* BG */}
//         <div className="absolute inset-0 -z-10">
//           <div
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.04]"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2000&auto=format&fit=crop')",
//             }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background-deep/95 to-background-deep" />
//         </div>

//         <div className="pointer-events-none absolute -left-20 top-1/4 h-56 w-56 rounded-full bg-accent-lime/5 blur-[120px]" />
//         <div className="pointer-events-none absolute -right-20 bottom-1/4 h-56 w-56 rounded-full bg-accent-lime/5 blur-[140px]" />
//         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-lime/20 to-transparent" />

//         <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           <div className="mx-auto w-full max-w-3xl">
//             {/* Success */}
//             <motion.div
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
//               className="mb-6 text-center sm:mb-8"
//             >
//               <div className="mb-4 inline-flex items-center justify-center sm:mb-5">
//                 <div className="relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
//                   <div className="absolute inset-0 animate-pulse rounded-full bg-accent-lime/20" />
//                   <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-lime to-accent-lime/70 shadow-[0_0_30px_rgba(132,204,22,0.3)] sm:h-12 sm:w-12">
//                     <CheckCircle2 className="h-5 w-5 text-white sm:h-6 sm:w-6" />
//                   </div>
//                 </div>
//               </div>

//               <span className="text-accent-lime font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-2 block">
//                 Assessment Complete
//               </span>
//               <h2 className="mb-2 text-xl font-serif sm:text-2xl md:text-3xl leading-tight">
//                 Blueprint Generated
//               </h2>
//               <p className="max-w-lg mx-auto text-xs leading-relaxed text-text-soft sm:text-sm">
//                 Your athlete&apos;s profile has been established. Here is the
//                 summary of their current state.
//               </p>
//             </motion.div>

//             {/* Summary */}
//             <div className="mb-6 grid grid-cols-1 gap-2.5 sm:mb-8 sm:grid-cols-2 sm:gap-3">
//               {questions.map((q, idx) => (
//                 <div
//                   key={q.id}
//                   ref={(el) => {
//                     resultCardsRef.current[idx] = el;
//                   }}
//                   className="group flex items-start gap-2.5 rounded-lg border border-accent-lime/15 bg-accent-lime/[0.04] p-3 transition-all duration-300 hover:border-accent-lime/30 hover:bg-accent-lime/[0.08] sm:p-3.5"
//                 >
//                   <div className="flex-shrink-0 rounded-md bg-white/5 p-2 group-hover:bg-accent-lime/10 transition-colors duration-300">
//                     {q.icon}
//                   </div>
//                   <div className="min-w-0 text-left">
//                     <p className="mb-0.5 text-[9px] font-bold uppercase tracking-[0.15em] text-accent-lime sm:text-[10px]">
//                       {q.id}
//                     </p>
//                     <p className="break-words text-xs font-medium text-text-soft sm:text-sm leading-snug">
//                       {assessmentData[q.id] ?? "—"}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* CTA */}
//             <div
//               ref={ctaRef}
//               className="mx-auto max-w-xl text-center space-y-3"
//             >
//               <div className="relative overflow-hidden rounded-xl border border-accent-lime/20 bg-gradient-to-br from-accent-lime/10 via-transparent to-transparent p-5 sm:p-6">
//                 <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-accent-lime/30 pointer-events-none" />
//                 <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-accent-lime/30 pointer-events-none" />

//                 <h3 className="relative z-10 mb-2 text-base font-serif sm:text-lg">
//                   Ready to Execute?
//                 </h3>
//                 <p className="relative z-10 mb-4 text-xs text-text-soft sm:text-sm">
//                   Claim your custom roadmap built for these parameters.
//                 </p>

//                 <Link
//                   href="/contact"
//                   className="group relative z-10 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg border-2 border-accent-lime bg-accent-lime px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(132,204,22,0.4)] hover:brightness-110 sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     Activate Protocol
//                     <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
//                   </span>
//                   <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
//                 </Link>
//               </div>

//               <p className="text-[9px] italic text-text-muted sm:text-[10px]">
//                 &quot;The right plan is built around your athlete, not a
//                 template.&quot;
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   /* ─────────────────────── QUESTION SCREEN ─────────────────────── */
//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-screen min-h-[580px] max-h-[1000px] bg-background-deep overflow-hidden flex items-center py-10 sm:py-14 lg:py-16"
//     >
//       {/* BG */}
//       <div className="absolute inset-0 -z-10">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.04]"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2000&auto=format&fit=crop')",
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background-deep/95 to-background-deep" />
//       </div>

//       <motion.div
//         animate={{ y: [-12, 12, -12] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         className="pointer-events-none absolute -right-20 top-1/4 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-accent-lime/5 blur-[120px]"
//       />
//       <motion.div
//         animate={{ y: [12, -12, 12] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         className="pointer-events-none absolute -left-20 bottom-1/4 h-48 w-48 sm:h-56 sm:w-56 rounded-full bg-accent-lime/5 blur-[100px]"
//       />

//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-lime/20 to-transparent" />

//       <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <div className="mx-auto max-w-3xl flex flex-col">
//           {/* Header */}
//           <div className="mb-4 text-center sm:mb-5">
//             <RevealSection>
//               <span className="text-accent-lime font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-2 block">
//                 Direct Assessment
//               </span>
//               <h2 className="mb-2 text-xl font-serif sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
//                 Where Is Your Athlete Right Now?
//               </h2>
//               <p className="mx-auto max-w-xl text-xs leading-relaxed text-text-soft sm:text-sm">
//                 Answer 4 quick questions for clarity on current stage and the
//                 best path forward.
//               </p>
//             </RevealSection>
//           </div>

//           {/* Progress */}
//           <div className="mb-4 sm:mb-5">
//             <div className="mb-1.5 flex items-center justify-between">
//               <span className="text-[9px] font-semibold uppercase tracking-wider text-accent-lime sm:text-[10px] flex items-center gap-1.5">
//                 <span className="h-1 w-1 rounded-full bg-accent-lime animate-pulse" />
//                 Progress
//               </span>
//               <span className="text-[9px] text-text-soft sm:text-[10px]">
//                 {answeredCount} / {totalSteps}
//               </span>
//             </div>
//             <div className="h-1 w-full overflow-hidden rounded-full bg-white/5 sm:h-1.5">
//               <div
//                 ref={progressBarRef}
//                 className="h-full rounded-full bg-gradient-to-r from-accent-lime to-accent-lime/70"
//                 style={{ width: `${progress}%` }}
//               />
//             </div>
//           </div>

//           {/* Stepper */}
//           <div className="flex-1">
//             <Stepper
//               initialStep={1}
//               onFinalStepCompleted={handleAssessmentComplete}
//             >
//               {questions.map((q, idx) => (
//                 <Step key={q.id}>
//                   {/* Question */}
//                   <div className="mb-4 text-center sm:mb-5">
//                     <motion.div
//                       initial={{ scale: 0.8, opacity: 0 }}
//                       animate={{ scale: 1, opacity: 1 }}
//                       transition={{ type: "spring", delay: 0.1 }}
//                       className="mb-2 sm:mb-3 mx-auto inline-flex items-center justify-center rounded-lg bg-white/5 p-2 sm:p-2.5"
//                     >
//                       {q.icon}
//                     </motion.div>
//                     <h3 className="text-base font-serif leading-snug sm:text-lg md:text-xl lg:text-2xl max-w-xl mx-auto">
//                       {q.question}
//                     </h3>
//                     <p className="mt-1 text-[9px] text-text-muted sm:text-[10px]">
//                       Step {idx + 1} of {totalSteps}
//                     </p>
//                   </div>

//                   {/* Options */}
//                   <div className="grid grid-cols-1 gap-2 sm:gap-2.5 md:grid-cols-2">
//                     {q.options.map((option, i) => {
//                       const isSelected = assessmentData[q.id] === option;
//                       return (
//                         <motion.button
//                           key={i}
//                           whileHover={{ y: -1 }}
//                           whileTap={{ scale: 0.98 }}
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.25, delay: i * 0.06 }}
//                           onClick={() =>
//                             handleOptionSelect(q.id, option)
//                           }
//                           className={`group relative flex w-full text-left items-center overflow-hidden rounded-lg border p-3 transition-all duration-300 sm:rounded-xl sm:p-3.5 ${
//                             isSelected
//                               ? "border-accent-lime bg-accent-lime/10 shadow-[0_0_15px_rgba(132,204,22,0.12)]"
//                               : "border-white/[0.06] bg-white/[0.03] hover:border-accent-lime/30 hover:bg-white/[0.06]"
//                           }`}
//                         >
//                           <AnimatePresence>
//                             {isSelected && (
//                               <motion.div
//                                 layoutId={`selectedbg-${q.id}`}
//                                 className="absolute inset-0 bg-gradient-to-br from-accent-lime/10 to-transparent pointer-events-none"
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 exit={{ opacity: 0 }}
//                               />
//                             )}
//                           </AnimatePresence>

//                           <div className="relative z-10 flex w-full items-center justify-between gap-3">
//                             <span
//                               className={`text-xs font-medium sm:text-sm leading-snug transition-colors duration-300 ${
//                                 isSelected
//                                   ? "text-accent-lime"
//                                   : "text-text-soft group-hover:text-text-main"
//                               }`}
//                             >
//                               {option}
//                             </span>

//                             <div
//                               className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-5 sm:w-5 ${
//                                 isSelected
//                                   ? "border-accent-lime bg-accent-lime"
//                                   : "border-white/20 group-hover:border-accent-lime/40"
//                               }`}
//                             >
//                               <AnimatePresence>
//                                 {isSelected && (
//                                   <motion.div
//                                     initial={{ scale: 0 }}
//                                     animate={{ scale: 1 }}
//                                     exit={{ scale: 0 }}
//                                     transition={{
//                                       type: "spring",
//                                       bounce: 0.6,
//                                     }}
//                                   >
//                                     <CheckCircle2 className="h-2.5 w-2.5 text-white sm:h-3 sm:w-3" />
//                                   </motion.div>
//                                 )}
//                               </AnimatePresence>
//                             </div>
//                           </div>
//                         </motion.button>
//                       );
//                     })}
//                   </div>
//                 </Step>
//               ))}
//             </Stepper>
//           </div>

//           {/* Footer */}
//           <div className="mt-4 text-center sm:mt-5">
//             <p className="text-[9px] italic text-text-muted sm:text-[10px]">
//               &quot;The first step to progress is knowing exactly where you
//               are.&quot;
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, AnimatePresence } from "motion/react";
import { RevealSection } from "@/components/animations/RevealSection";
import Stepper, { Step } from "@/components/ui/Stepper";
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  Target,
  Shield,
  Flame,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function InteractiveAssessment() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const resultCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [assessmentData, setAssessmentData] = useState<Record<string, string>>(
    {}
  );
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: "feeling",
      label: "Current mindset",
      icon: <Flame className="h-4 w-4 text-energy-red" />,
      question: "How does your athlete feel about training right now?",
      options: [
        "Excited and energized",
        "Motivated but sometimes overwhelmed",
        "Frustrated or stuck",
        "Tired — just going through the motions",
      ],
    },
    {
      id: "level",
      label: "Current level",
      icon: <Target className="h-4 w-4 text-focus-cyan" />,
      question: "What best describes their current level of play?",
      options: [
        "Developmental / Just starting",
        "Competitive / Local elite",
        "Regional / National candidate",
        "Collegiate / Professional target",
      ],
    },
    {
      id: "concern",
      label: "Primary concern",
      icon: <Shield className="h-4 w-4 text-recovery-teal" />,
      question: "What is your primary concern right now?",
      options: [
        "Burnout and mental fatigue",
        "Performance plateaus",
        "Injury risk and durability",
        "Pressure to succeed",
      ],
    },
    {
      id: "goal",
      label: "Near-term goal",
      icon: <Zap className="h-4 w-4 text-accent-lime" />,
      question: "What outcome matters most in the next 3 months?",
      options: [
        "A breakthrough in confidence",
        "Elite physical resilience",
        "Technical mastery and consistency",
        "Clear direction and purpose",
      ],
    },
  ] as const;

  const totalSteps = questions.length;
  const answeredCount = Object.keys(assessmentData).length;
  const progress = (answeredCount / totalSteps) * 100;

  const handleOptionSelect = (stepId: string, option: string) => {
    setAssessmentData((prev) => ({ ...prev, [stepId]: option }));
  };

  const handleAssessmentComplete = () => {
    setIsCompleted(true);
  };

  useEffect(() => {
    if (!progressBarRef.current) return;
    gsap.to(progressBarRef.current, {
      width: `${progress}%`,
      duration: 0.45,
      ease: "power3.out",
    });
  }, [progress]);

  useEffect(() => {
    if (!isCompleted || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      resultCardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
            delay: 0.12 + i * 0.06,
          }
        );
      });

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
            delay: 0.35,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isCompleted]);

  if (isCompleted) {
    return (
      <section
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden bg-background-deep"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background-deep via-background-deep to-background-mid" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-lime/20 to-transparent" />

        <div className="container mx-auto flex min-h-screen items-center px-5 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto w-full max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-center"
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent-lime/20 bg-accent-lime/10">
                <CheckCircle2 className="h-5 w-5 text-accent-lime" />
              </div>

              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-lime/90 sm:text-[11px]">
                Assessment Complete
              </span>

              <h2 className="mt-3 text-2xl font-serif leading-tight text-text-heading sm:text-3xl lg:text-4xl">
                Your athlete blueprint is ready
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-text-soft sm:text-base">
                A concise summary of the current state and the next step forward.
              </p>
            </motion.div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-4">
              {questions.map((q, idx) => (
                <div
                  key={q.id}
                  ref={(el) => {
                    resultCardsRef.current[idx] = el;
                  }}
                  className="rounded-2xl border border-black/5 bg-surface p-4 shadow-brand-sm dark:border-white/10 dark:bg-surface-alt"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background-light">
                      {q.icon}
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                        {q.label}
                      </p>
                      <p className="mt-1.5 text-sm font-medium leading-6 text-text-main">
                        {assessmentData[q.id] ?? "—"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div ref={ctaRef} className="mx-auto mt-6 max-w-2xl text-center sm:mt-7">
              <div className="rounded-3xl border border-black/5 bg-surface p-6 shadow-brand-md dark:border-white/10 dark:bg-surface-alt sm:p-7">
                <h3 className="text-xl font-serif text-text-heading sm:text-2xl">
                  Ready for the next step?
                </h3>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-text-soft sm:text-base">
                  Turn this assessment into a clear roadmap built around your athlete.
                </p>

                <div className="mt-5">
                  <Link
                    href="/contact"
                    className="btn-premium btn-primary inline-flex min-w-[210px] px-6 py-3"
                  >
                    Book a consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-background-deep"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background-deep via-background-deep to-background-mid" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-lime/20 to-transparent" />

      <div className="container mx-auto flex min-h-screen items-center px-5 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <div className="text-center">
            <RevealSection>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-lime/90 sm:text-[11px]">
                Direct Assessment
              </span>

              <h2 className="mt-3 text-2xl font-serif leading-tight text-text-heading sm:text-3xl lg:text-4xl">
                Where is your athlete right now?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-text-soft sm:text-base">
                Answer four quick questions to clarify the current stage and best path forward.
              </p>
            </RevealSection>
          </div>

          <div className="mt-5 rounded-2xl border border-black/5 bg-surface p-4 shadow-brand-sm dark:border-white/10 dark:bg-surface-alt sm:mt-6 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                  Progress
                </p>
                <p className="mt-1 text-sm text-text-soft">
                  {answeredCount} of {totalSteps} completed
                </p>
              </div>

              <div className="text-sm font-medium text-text-main">
                {Math.round(progress)}%
              </div>
            </div>

            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/5">
              <div
                ref={progressBarRef}
                className="h-full rounded-full bg-accent-lime"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mt-5 sm:mt-6">
            <Stepper
              initialStep={1}
              onFinalStepCompleted={handleAssessmentComplete}
            >
              {questions.map((q, idx) => (
                <Step key={q.id}>
                  <div className="rounded-3xl border border-black/5 bg-surface p-5 shadow-brand-md dark:border-white/10 dark:bg-surface-alt sm:p-6 lg:p-7">
                    <div className="text-center">
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-background-light"
                      >
                        {q.icon}
                      </motion.div>

                      <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                        Step {idx + 1} of {totalSteps}
                      </p>

                      <h3 className="mx-auto mt-3 max-w-2xl text-xl font-serif leading-tight text-text-heading sm:text-2xl lg:text-[1.75rem]">
                        {q.question}
                      </h3>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                      {q.options.map((option, i) => {
                        const isSelected = assessmentData[q.id] === option;

                        return (
                          <motion.button
                            key={i}
                            type="button"
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.99 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.22, delay: i * 0.04 }}
                            onClick={() => handleOptionSelect(q.id, option)}
                            className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-200 ${
                              isSelected
                                ? "border-accent-lime/40 bg-accent-lime/[0.08] shadow-brand-sm"
                                : "border-black/5 bg-background-light hover:border-accent-lime/20 hover:bg-surface-elevated dark:border-white/10 dark:bg-background-light"
                            }`}
                          >
                            <AnimatePresence>
                              {isSelected && (
                                <motion.div
                                  layoutId={`selectedbg-${q.id}`}
                                  className="absolute inset-0 bg-gradient-to-br from-accent-lime/[0.07] to-transparent"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                />
                              )}
                            </AnimatePresence>

                            <div className="relative z-10 flex items-start justify-between gap-3">
                              <span className="text-sm font-medium leading-6 text-text-main">
                                {option}
                              </span>

                              <div
                                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                                  isSelected
                                    ? "border-accent-lime bg-accent-lime"
                                    : "border-text-muted/30"
                                }`}
                              >
                                <AnimatePresence>
                                  {isSelected && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      exit={{ scale: 0 }}
                                      transition={{ type: "spring", bounce: 0.4 }}
                                    >
                                      <CheckCircle2 className="h-3 w-3 text-white" />
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                </Step>
              ))}
            </Stepper>
          </div>

          <p className="mt-5 text-center text-xs italic text-text-muted sm:mt-6 sm:text-sm">
            “The first step to progress is knowing exactly where you are.”
          </p>
        </div>
      </div>
    </section>
  );
}