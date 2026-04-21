// // "use client";

// // import { useEffect, useRef } from "react";
// // import { motion, useInView } from "framer-motion";
// // import {
// //   AlertCircle,
// //   TrendingDown,
// //   HelpCircle,
// //   DollarSign,
// //   Compass,
// // } from "lucide-react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // /* ───────────────────────── data ───────────────────────── */
// // const problems = [
// //   {
// //     title: "Kids quit too early",
// //     text: "Not because they lack talent—but because no one showed them what's normal.",
// //     image: "/images/problem/quit_early.png",
// //     icon: TrendingDown,
// //     number: "01",
// //   },
// //   {
// //     title: "Parents get confused",
// //     text: "There's no roadmap. Every coach says something different.",
// //     image: "/images/problem/confused.png",
// //     icon: HelpCircle,
// //     number: "02",
// //   },
// //   {
// //     title: "Money gets wasted",
// //     text: "Families invest in the wrong things at the wrong time.",
// //     image: "/images/problem/wasted_money.png",
// //     icon: DollarSign,
// //     number: "03",
// //   },
// //   {
// //     title: "Direction disappears",
// //     text: "Without a clear path, athletes drift—and eventually stop.",
// //     image: "/images/problem/lost_direction.png",
// //     icon: Compass,
// //     number: "04",
// //   },
// // ];

// // /* ──────────────── framer variants ──────────────── */
// // const headingVariants = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as const
// //   },
// // };

// // const cardVariants = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: (i: number) => ({
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       duration: 0.5,
// //       delay: i * 0.1,
// //       ease: [0.22, 1, 0.36, 1] as const
// //     },
// //   }),
// // };

// // /* ──────────────────── component ──────────────────── */
// // export function TheProblem() {
// //   const sectionRef = useRef<HTMLElement>(null);
// //   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
// //   const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
// //   const headerRef = useRef<HTMLDivElement>(null);
// //   const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

// //   /* ── GSAP: magnetic tilt + number reveal ── */
// //   useEffect(() => {
// //     const section = sectionRef.current;
// //     if (!section) return;

// //     const ctx = gsap.context(() => {
// //       const mm = gsap.matchMedia();
// //       mm.add("(pointer: fine)", () => {
// //         cardRefs.current.forEach((card) => {
// //           if (!card) return;

// //           const onMove = (e: MouseEvent) => {
// //             const rect = card.getBoundingClientRect();
// //             const x = e.clientX - rect.left;
// //             const y = e.clientY - rect.top;
// //             const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -2.5;
// //             const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 2.5;

// //             gsap.to(card, {
// //               rotateX,
// //               rotateY,
// //               duration: 0.4,
// //               ease: "power2.out",
// //               transformPerspective: 800,
// //             });
// //           };

// //           const onLeave = () => {
// //             gsap.to(card, {
// //               rotateX: 0,
// //               rotateY: 0,
// //               duration: 0.6,
// //               ease: "elastic.out(1, 0.5)",
// //             });
// //           };

// //           card.addEventListener("mousemove", onMove);
// //           card.addEventListener("mouseleave", onLeave);

// //           return () => {
// //             card.removeEventListener("mousemove", onMove);
// //             card.removeEventListener("mouseleave", onLeave);
// //           };
// //         });
// //       });

// //       numberRefs.current.forEach((num, i) => {
// //         if (!num) return;
// //         gsap.set(num, { opacity: 0, y: 12, scale: 0.6 });
// //         ScrollTrigger.create({
// //           trigger: num,
// //           start: "top 90%",
// //           once: true,
// //           onEnter: () => {
// //             gsap.to(num, {
// //               opacity: 1,
// //               y: 0,
// //               scale: 1,
// //               duration: 0.6,
// //               delay: i * 0.1,
// //               ease: "back.out(1.7)",
// //             });
// //           },
// //         });
// //       });
// //     }, section);

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative flex h-svh min-h-[600px] max-h-[1080px] flex-col
// //         justify-center overflow-hidden bg-background"
// //     >
// //       {/* ── ambient background ── */}
// //       <div
// //         aria-hidden
// //         className="pointer-events-none absolute inset-0 opacity-[0.03]"
// //         style={{
// //           backgroundImage:
// //             "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
// //         }}
// //       />
// //       <div
// //         aria-hidden
// //         className="pointer-events-none absolute -left-40 top-1/4 h-64 w-64
// //           rounded-full bg-accent-lime/[0.03] blur-[140px]"
// //       />
// //       <div
// //         aria-hidden
// //         className="pointer-events-none absolute -right-40 bottom-1/4 h-64 w-64
// //           rounded-full bg-accent-lime/[0.03] blur-[140px]"
// //       />

// //       <div className="container relative z-10 mx-auto px-5 sm:px-6">
// //         {/* ── header ── */}
// //         <motion.div
// //           ref={headerRef}
// //           initial="hidden"
// //           animate={headerInView ? "visible" : "hidden"}
// //           variants={headingVariants}
// //           className="mx-auto mb-6 max-w-2xl text-center sm:mb-8 lg:mb-10"
// //         >
// //           <span
// //             className="mb-2 block text-[10px] font-bold uppercase tracking-[0.25em]
// //               text-accent-lime sm:mb-3 sm:text-xs"
// //           >
// //             The Problem
// //           </span>

// //           <h2
// //             className="font-serif text-2xl leading-tight text-text-heading
// //               sm:text-3xl md:text-4xl lg:text-5xl"
// //           >
// //             Why athletes stop <br className="hidden sm:block" /> before they
// //             should.
// //           </h2>
// //         </motion.div>

// //         {/* ── cards grid ── */}
// //         <div
// //           className="mx-auto grid max-w-6xl grid-cols-1 gap-3
// //             sm:grid-cols-2 sm:gap-4 lg:gap-5"
// //         >
// //           {problems.map((problem, i) => {
// //             const Icon = problem.icon;
// //             return (
// //               <motion.div
// //                 key={problem.title}
// //                 custom={i}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: true, margin: "-40px" }}
// //                 variants={cardVariants}
// //               >
// //                 <div
// //                   ref={(el) => {
// //                     cardRefs.current[i] = el;
// //                   }}
// //                   className="group relative cursor-default overflow-hidden rounded-xl
// //                     border border-white/[0.05] will-change-transform
// //                     hover:border-accent-lime/15
// //                     h-[140px] sm:h-[160px] md:h-[180px] lg:h-[210px]
// //                     sm:rounded-2xl"
// //                   style={{ transformStyle: "preserve-3d" }}
// //                 >
// //                   {/* bg image */}
// //                   <div className="absolute inset-0 z-0">
// //                     <img
// //                       src={problem.image}
// //                       alt=""
// //                       loading="lazy"
// //                       className="h-full w-full object-cover brightness-[0.2] grayscale
// //                         transition-all duration-[1.6s] ease-out will-change-transform
// //                         group-hover:scale-105 group-hover:brightness-[0.3]
// //                         group-hover:grayscale-[0.4]"
// //                       onError={(e) => {
// //                         e.currentTarget.src =
// //                           "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=800";
// //                       }}
// //                     />
// //                   </div>

// //                   {/* overlay */}
// //                   <div
// //                     className="absolute inset-0 z-[1] bg-background/80
// //                       transition-colors duration-700 group-hover:bg-background/70"
// //                   />

// //                   {/* number watermark */}
// //                   <span
// //                     ref={(el) => {
// //                       numberRefs.current[i] = el;
// //                     }}
// //                     aria-hidden
// //                     className="pointer-events-none absolute right-4 top-3 z-[2] select-none
// //                       font-mono text-4xl font-black text-white/[0.03]
// //                       transition-colors duration-700
// //                       group-hover:text-accent-lime/[0.06]
// //                       sm:right-5 sm:top-4 sm:text-5xl lg:text-6xl"
// //                   >
// //                     {problem.number}
// //                   </span>

// //                   {/* corner dot */}
// //                   <div
// //                     aria-hidden
// //                     className="absolute left-4 top-4 z-[3] h-1 w-1 rounded-full
// //                       bg-white/[0.06] transition-all duration-500
// //                       group-hover:bg-accent-lime/50
// //                       group-hover:shadow-[0_0_6px_rgba(191,255,0,0.25)]
// //                       sm:left-5 sm:top-5"
// //                   />

// //                   {/* content — horizontal layout */}
// //                   <div
// //                     className="relative z-[4] flex h-full items-end gap-4
// //                       p-4 sm:p-5 lg:items-center lg:p-6"
// //                   >
// //                     {/* icon */}
// //                     <div
// //                       className="hidden shrink-0 items-center justify-center rounded-lg
// //                         border border-white/[0.06] bg-white/[0.03] text-white/30
// //                         backdrop-blur-sm transition-all duration-500
// //                         group-hover:border-accent-lime/25
// //                         group-hover:bg-accent-lime/10 group-hover:text-accent-lime
// //                         sm:flex
// //                         h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11"
// //                     >
// //                       <Icon
// //                         className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
// //                         strokeWidth={1.5}
// //                       />
// //                     </div>

// //                     {/* text block */}
// //                     <div className="min-w-0 flex-1">
// //                       <h3
// //                         className="mb-1 font-serif text-base text-white/90
// //                           transition-colors duration-500 group-hover:text-white
// //                           sm:text-lg lg:text-xl"
// //                       >
// //                         {problem.title}
// //                       </h3>

// //                       <div
// //                         className="mb-1.5 h-px w-6 bg-white/10 transition-all
// //                           duration-700 group-hover:w-10 group-hover:bg-accent-lime/30
// //                           sm:mb-2"
// //                       />

// //                       <p
// //                         className="line-clamp-2 max-w-sm text-xs leading-relaxed
// //                           text-white/40 transition-colors duration-500
// //                           group-hover:text-white/60
// //                           sm:text-sm lg:text-[15px] lg:leading-relaxed"
// //                       >
// //                         {problem.text}
// //                       </p>
// //                     </div>
// //                   </div>

// //                   {/* bottom accent line */}
// //                   <div
// //                     className="absolute bottom-0 left-0 z-[5] h-[2px] w-0
// //                       bg-gradient-to-r from-accent-lime/70 to-accent-lime/0
// //                       transition-all duration-1000 ease-out group-hover:w-full"
// //                   />
// //                 </div>
// //               </motion.div>
// //             );
// //           })}
// //         </div>

// //         {/* ── bottom ornament ── */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.5, delay: 0.4 }}
// //           className="mt-5 flex items-center justify-center gap-3 text-white/15
// //             sm:mt-6 lg:mt-8"
// //         >
// //           <div className="h-px w-6 bg-white/10 sm:w-10" />
// //           <AlertCircle className="h-3.5 w-3.5" />
// //           <div className="h-px w-6 bg-white/10 sm:w-10" />
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// /* ───────────────────────── data ───────────────────────── */
// const problems = [
//   {
//     title: "Kids quit too early",
//     text: "Not because they lack talent—but because no one showed them what's normal.",
//     image: "/images/problem/quit_early.png",
//     shape: "hexagon" as const,
//     side: "left" as const,
//   },
//   {
//     title: "Parents get confused",
//     text: "There's no roadmap. Every coach says something different.",
//     image: "/images/problem/confused.png",
//     shape: "hexagon" as const,
//     side: "right" as const,
//   },
//   {
//     title: "Money gets wasted",
//     text: "Families invest in the wrong things at the wrong time.",
//     image: "/images/problem/wasted_money.png",
//     shape: "rectangle" as const,
//     side: "left" as const,
//   },
//   {
//     title: "Direction disappears",
//     text: "Without a clear path, athletes drift—and eventually stop.",
//     image: "/images/problem/lost_direction.png",
//     shape: "diamond" as const,
//     side: "right" as const,
//   },
// ];

// /* ───────── Lightning SVG path ───────── */
// const LightningPath = () => {
//   const pathRef = useRef<SVGPathElement>(null);
//   const glowRef = useRef<SVGPathElement>(null);

//   useEffect(() => {
//     if (!pathRef.current || !glowRef.current) return;

//     const path = pathRef.current;
//     const glow = glowRef.current;
//     const length = path.getTotalLength();

//     gsap.set([path, glow], {
//       strokeDasharray: length,
//       strokeDashoffset: length,
//     });

//     gsap.to([path, glow], {
//       strokeDashoffset: 0,
//       duration: 3,
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: path.closest("section"),
//         start: "top 50%",
//         once: true,
//       },
//     });
//   }, []);

//   const d = `
//     M 600,0
//     L 600,60
//     Q 590,80 560,100
//     L 510,140
//     Q 490,155 495,175
//     L 520,200
//     Q 540,215 530,235
//     L 510,260
//     Q 500,280 520,300
//     L 570,330
//     Q 610,350 650,365
//     L 710,380
//     Q 750,390 770,375
//     L 780,360
//     Q 790,340 770,330
//     L 730,340
//     Q 700,350 690,370
//     L 680,400
//     Q 670,430 650,450
//     L 620,490
//     Q 600,510 580,520
//     L 540,500
//     Q 510,490 490,500
//     L 470,520
//     Q 455,540 470,555
//     L 510,570
//     Q 540,580 560,600
//     L 590,640
//     Q 610,665 640,680
//     L 700,700
//     Q 750,710 790,720
//     L 830,740
//     Q 855,755 850,780
//     L 840,810
//     Q 830,840 835,870
//     L 840,900
//   `;

//   return (
//     <svg
//       className="absolute inset-0 z-[2] h-full w-full pointer-events-none hidden lg:block"
//       viewBox="0 0 1200 900"
//       preserveAspectRatio="xMidYMid slice"
//       fill="none"
//     >
//       <defs>
//         <filter id="bolt-glow">
//           <feGaussianBlur stdDeviation="8" result="blur" />
//           <feMerge>
//             <feMergeNode in="blur" />
//             <feMergeNode in="blur" />
//             <feMergeNode in="SourceGraphic" />
//           </feMerge>
//         </filter>
//         <filter id="bolt-glow-soft">
//           <feGaussianBlur stdDeviation="16" result="blur" />
//           <feMerge>
//             <feMergeNode in="blur" />
//             <feMergeNode in="blur" />
//             <feMergeNode in="blur" />
//           </feMerge>
//         </filter>
//       </defs>

//       {/* Wide soft glow */}
//       <path
//         d={d}
//         className="stroke-[#bfff00] dark:stroke-[#bfff00]"
//         strokeWidth="12"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         filter="url(#bolt-glow-soft)"
//         opacity="0.15"
//       />

//       {/* Glow layer */}
//       <path
//         ref={glowRef}
//         d={d}
//         className="stroke-[#7ab800] dark:stroke-[#bfff00]"
//         strokeWidth="6"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         filter="url(#bolt-glow)"
//         opacity="0.4"
//       />

//       {/* Main bolt */}
//       <path
//         ref={pathRef}
//         d={d}
//         className="stroke-[#7ab800] dark:stroke-[#bfff00]"
//         strokeWidth="2.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// };

// /* ───────── Crack overlay ───────── */
// const CrackOverlay = () => (
//   <svg
//     className="absolute inset-0 z-[1] h-full w-full pointer-events-none"
//     viewBox="0 0 1400 1000"
//     preserveAspectRatio="xMidYMid slice"
//     fill="none"
//   >
//     {[
//       "M 0 200 L 80 220 L 120 180 L 160 200 L 200 170 L 230 190",
//       "M 0 200 L 60 250 L 100 240 L 130 280 L 150 270",
//       "M 120 180 L 140 140 L 180 130 L 200 110",
//       "M 1400 150 L 1320 180 L 1280 160 L 1240 190 L 1200 170 L 1170 185",
//       "M 1280 160 L 1260 120 L 1220 100 L 1200 80",
//       "M 0 650 L 100 670 L 150 640 L 200 660 L 250 630 L 290 650",
//       "M 100 670 L 80 720 L 120 750 L 100 780",
//       "M 150 640 L 180 600 L 220 580 L 250 560",
//       "M 1400 700 L 1300 720 L 1260 690 L 1220 710 L 1180 690",
//       "M 1300 720 L 1280 770 L 1320 800 L 1300 830",
//       "M 0 450 L 60 440 L 100 470 L 140 450 L 170 460",
//       "M 1400 400 L 1340 420 L 1300 400 L 1260 430 L 1230 410",
//       "M 300 50 L 330 80 L 350 70 L 380 90",
//       "M 1100 850 L 1130 830 L 1150 850 L 1180 830",
//       "M 200 850 L 240 830 L 260 850 L 300 830 L 320 850",
//       "M 1100 50 L 1120 80 L 1150 70 L 1170 90",
//     ].map((d, i) => (
//       <path
//         key={i}
//         d={d}
//         className="stroke-gray-300 dark:stroke-gray-600"
//         strokeWidth={0.4 + (i % 3) * 0.3}
//         opacity={0.15 + (i % 4) * 0.05}
//       />
//     ))}
//   </svg>
// );

// /* ───────── Shape components ───────── */
// const HexagonImage = ({ src, alt }: { src: string; alt: string }) => {
//   const id = alt.replace(/\s+/g, "-").toLowerCase();
//   return (
//     <div className="relative w-[160px] h-[180px] sm:w-[180px] sm:h-[200px] lg:w-[200px] lg:h-[220px]">
//       <svg
//         viewBox="0 0 200 220"
//         className="w-full h-full"
//         style={{
//           filter:
//             "drop-shadow(0 0 12px rgba(191, 255, 0, 0.25))",
//         }}
//       >
//         <defs>
//           <clipPath id={`hex-clip-${id}`}>
//             <polygon points="100,4 196,54 196,166 100,216 4,166 4,54" />
//           </clipPath>
//           <filter id={`hex-glow-${id}`}>
//             <feGaussianBlur stdDeviation="3" result="blur" />
//             <feMerge>
//               <feMergeNode in="blur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>

//         <image
//           href={src}
//           x="0"
//           y="0"
//           width="200"
//           height="220"
//           clipPath={`url(#hex-clip-${id})`}
//           preserveAspectRatio="xMidYMid slice"
//           className="[filter:grayscale(100%)_brightness(0.7)_contrast(1.1)] dark:[filter:grayscale(100%)_brightness(0.7)_contrast(1.1)]
//             light:[filter:grayscale(30%)_brightness(0.9)_contrast(1.05)]"
//         />

//         <polygon
//           points="100,2 198,53 198,167 100,218 2,167 2,53"
//           fill="none"
//           className="stroke-[#7ab800] dark:stroke-[#bfff00]"
//           strokeWidth="3"
//           filter={`url(#hex-glow-${id})`}
//         />
//       </svg>
//     </div>
//   );
// };

// const RectangleImage = ({ src, alt }: { src: string; alt: string }) => (
//   <div
//     className="relative w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px]
//       overflow-hidden rounded-md
//       border-[2.5px] border-[#7ab800] dark:border-[#bfff00]
//       shadow-[0_0_15px_rgba(122,184,0,0.25),0_0_30px_rgba(122,184,0,0.1)]
//       dark:shadow-[0_0_15px_rgba(191,255,0,0.3),0_0_30px_rgba(191,255,0,0.1)]"
//   >
//     <img
//       src={src}
//       alt={alt}
//       className="w-full h-full object-cover
//         grayscale-[30%] brightness-[0.9] contrast-[1.05]
//         dark:grayscale brightness-[0.7] dark:contrast-[1.1]"
//       onError={(e) => {
//         e.currentTarget.src =
//           "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=800";
//       }}
//     />
//   </div>
// );

// const DiamondImage = ({ src, alt }: { src: string; alt: string }) => (
//   <div className="relative w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px]">
//     <div
//       className="w-full h-full overflow-hidden
//         border-[2.5px] border-[#7ab800] dark:border-[#bfff00]
//         shadow-[0_0_15px_rgba(122,184,0,0.25),0_0_30px_rgba(122,184,0,0.1)]
//         dark:shadow-[0_0_15px_rgba(191,255,0,0.3),0_0_30px_rgba(191,255,0,0.1)]"
//       style={{ transform: "rotate(45deg)" }}
//     >
//       <img
//         src={src}
//         alt={alt}
//         className="w-full h-full object-cover
//           grayscale-[30%] brightness-[0.9] contrast-[1.05]
//           dark:grayscale dark:brightness-[0.7] dark:contrast-[1.1]"
//         style={{ transform: "rotate(-45deg) scale(1.42)" }}
//         onError={(e) => {
//           e.currentTarget.src =
//             "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=800";
//         }}
//       />
//     </div>
//   </div>
// );

// /* ───────── Spark particles ───────── */
// const SparkParticles = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;
//     const container = containerRef.current;
//     const sparks: HTMLDivElement[] = [];

//     const getTheme = () => {
//       return document.documentElement.classList.contains("dark")
//         ? "dark"
//         : "light";
//     };

//     const createSpark = () => {
//       const spark = document.createElement("div");
//       const x = 30 + Math.random() * 40;
//       const y = Math.random() * 100;
//       const size = Math.random() * 2.5 + 0.5;
//       const theme = getTheme();

//       const color = theme === "dark" ? "#bfff00" : "#7ab800";

//       spark.style.cssText = `
//         position: absolute;
//         left: ${x}%;
//         top: ${y}%;
//         width: ${size}px;
//         height: ${size}px;
//         background: ${color};
//         border-radius: 50%;
//         pointer-events: none;
//         box-shadow: 0 0 ${size * 3}px ${color}, 0 0 ${size * 6}px ${color}66;
//       `;

//       container.appendChild(spark);
//       sparks.push(spark);

//       gsap.fromTo(
//         spark,
//         { opacity: 0, scale: 0 },
//         {
//           opacity: 0.8,
//           scale: 1,
//           duration: 0.2,
//           onComplete: () => {
//             gsap.to(spark, {
//               opacity: 0,
//               scale: 0,
//               y: (Math.random() - 0.5) * 30,
//               x: (Math.random() - 0.5) * 30,
//               duration: 0.5 + Math.random() * 0.5,
//               onComplete: () => {
//                 spark.remove();
//                 const idx = sparks.indexOf(spark);
//                 if (idx > -1) sparks.splice(idx, 1);
//               },
//             });
//           },
//         }
//       );
//     };

//     const interval = setInterval(createSpark, 400);
//     return () => {
//       clearInterval(interval);
//       sparks.forEach((s) => s.remove());
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="absolute inset-0 z-[3] pointer-events-none overflow-hidden"
//     />
//   );
// };

// /* ──────────── framer variants ──────────── */
// const headingVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as const,
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 50, scale: 0.9 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.8,
//       delay: 0.2 + i * 0.15,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   }),
// };

// /* ──────────────────── main component ──────────────────── */
// export function TheProblem() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const headerRef = useRef<HTMLDivElement>(null);
//   const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen overflow-hidden
//         bg-white dark:bg-[#0a0a0a]
//         transition-colors duration-500"
//     >
//       {/* ── Textured background ── */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0
//           opacity-[0.03] dark:opacity-[0.05]"
//         style={{
//           backgroundImage:
//             "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
//         }}
//       />

//       {/* ── Light mode subtle pattern ── */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-0"
//         style={{
//           backgroundImage:
//             "url('https://www.transparenttextures.com/patterns/white-diamond.png')",
//         }}
//       />

//       {/* ── Vignette ── */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0
//           bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.04)_100%)]
//           dark:bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]"
//       />

//       {/* ── Crack overlay ── */}
//       <CrackOverlay />

//       {/* ── Lightning bolt ── */}
//       <LightningPath />

//       {/* ── Spark particles ── */}
//       <SparkParticles />

//       {/* ── Ambient glows ── */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute left-[20%] top-[20%] h-80 w-80
//           rounded-full blur-[120px]
//           bg-[#7ab800]/[0.04] dark:bg-[#bfff00]/[0.015]"
//       />
//       <div
//         aria-hidden
//         className="pointer-events-none absolute right-[20%] bottom-[20%] h-80 w-80
//           rounded-full blur-[120px]
//           bg-[#7ab800]/[0.04] dark:bg-[#bfff00]/[0.015]"
//       />
//       <div
//         aria-hidden
//         className="pointer-events-none absolute left-1/2 top-1/2
//           -translate-x-1/2 -translate-y-1/2
//           h-[500px] w-[500px] rounded-full blur-[200px]
//           bg-[#7ab800]/[0.02] dark:bg-[#bfff00]/[0.008]"
//       />

//       <div className="container relative z-10 mx-auto px-5 sm:px-6 py-16 sm:py-20 lg:py-24">
//         {/* ── Header ── */}
//         <motion.div
//           ref={headerRef}
//           initial="hidden"
//           animate={headerInView ? "visible" : "hidden"}
//           variants={headingVariants}
//           className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 lg:mb-20"
//         >
//           <span
//             className="block text-xs font-bold uppercase tracking-[0.3em]
//               text-[#7ab800] dark:text-[#bfff00]
//               sm:text-sm transition-colors duration-500"
//           >
//             The Problem
//           </span>
//         </motion.div>

//         {/* ── Problem rows ── */}
//         <div className="mx-auto max-w-5xl space-y-12 sm:space-y-16 lg:space-y-20">
//           {problems.map((problem, i) => {
//             const isLeft = problem.side === "left";

//             return (
//               <motion.div
//                 key={problem.title}
//                 custom={i}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-80px" }}
//                 variants={itemVariants}
//                 className={`flex flex-col items-center gap-6 sm:gap-8 lg:gap-14 ${
//                   isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
//                 }`}
//               >
//                 {/* Text */}
//                 <div
//                   className={`flex-1 text-center ${
//                     isLeft ? "lg:text-right" : "lg:text-left"
//                   }`}
//                 >
//                   <h3
//                     className="font-serif text-2xl leading-tight sm:text-3xl lg:text-4xl
//                       mb-3 lg:mb-4 transition-colors duration-500
//                       text-gray-900 dark:text-white/90"
//                   >
//                     {problem.title}
//                   </h3>
//                   <p
//                     className={`text-sm italic leading-relaxed sm:text-base lg:text-lg
//                       max-w-xs mx-auto transition-colors duration-500
//                       text-gray-500 dark:text-white/45
//                       ${isLeft ? "lg:ml-auto lg:mr-0" : "lg:mr-auto lg:ml-0"}`}
//                   >
//                     {problem.text}
//                   </p>
//                 </div>

//                 {/* Image */}
//                 <div className="shrink-0">
//                   {problem.shape === "hexagon" && (
//                     <HexagonImage src={problem.image} alt={problem.title} />
//                   )}
//                   {problem.shape === "rectangle" && (
//                     <RectangleImage src={problem.image} alt={problem.title} />
//                   )}
//                   {problem.shape === "diamond" && (
//                     <DiamondImage src={problem.image} alt={problem.title} />
//                   )}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problems = [
  {
    number: "01",
    title: "Kids quit too early",
    text: "Not because they lack talent—but because no one showed them what's normal.",
    image: "/images/problem/quit_early.png",
    side: "left" as const,
  },
  {
    number: "02",
    title: "Parents get confused",
    text: "There's no roadmap. Every coach says something different.",
    image: "/images/problem/confused.png",
    side: "right" as const,
  },
  {
    number: "03",
    title: "Money gets wasted",
    text: "Families invest in the wrong things at the wrong time.",
    image: "/images/problem/wasted_money.png",
    side: "left" as const,
  },
  {
    number: "04",
    title: "Direction disappears",
    text: "Without a clear path, athletes drift—and eventually stop.",
    image: "/images/problem/lost_direction.png",
    side: "right" as const,
  },
];

const ProblemCard = ({
  problem,
  index,
}: {
  problem: (typeof problems)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = problem.side === "left";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`grid items-center gap-6 sm:gap-8 lg:gap-16 ${
        isLeft ? "lg:grid-cols-[1.05fr_1fr]" : "lg:grid-cols-[1fr_1.05fr]"
      }`}
    >
      {/* Image */}
      <motion.div
        className={`${isLeft ? "lg:order-1" : "lg:order-2"}`}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
          <motion.img
            src={problem.image}
            alt={problem.title}
            className="h-[220px] w-full object-cover sm:h-[320px] lg:h-[400px]"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1461896836934-ber40692d67f?auto=format&fit=crop&q=80&w=1200";
            }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

          <motion.div
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-lime/60 to-transparent"
            initial={{ opacity: 0, scaleX: 0.7 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <div
        className={`flex flex-col justify-center ${
          isLeft ? "lg:order-2" : "lg:order-1"
        } text-center lg:text-left`}
      >
        <motion.div
          className="mb-4 flex items-center justify-center gap-4 lg:mb-5 lg:justify-start"
          initial={{ opacity: 0, x: -12 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <span className="text-sm font-bold tracking-[0.24em] text-accent-lime/90 sm:text-base">
            {problem.number}
          </span>
          <span className="h-px w-14 bg-accent-lime/50" />
        </motion.div>

        <motion.h3
          className="max-w-xl text-[1.75rem] font-bold leading-[1.08] text-text-heading sm:text-[2.25rem] lg:text-[3rem]"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {problem.title}
        </motion.h3>

        <motion.p
          className="mt-4 max-w-xl text-[0.98rem] leading-7 text-text-muted sm:mt-5 sm:text-lg sm:leading-8 lg:text-[1.2rem] lg:leading-9"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {problem.text}
        </motion.p>
      </div>
    </motion.div>
  );
};

const Divider = () => (
  <motion.div
    className="py-10 sm:py-12"
    initial={{ opacity: 0, scaleX: 0.92 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="mx-auto h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
  </motion.div>
);

export function TheProblem() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <section className="relative overflow-hidden bg-background-deep">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent-lime/[0.04] blur-[130px]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      <div className="container relative mx-auto px-4 py-14 sm:px-6 sm:py-18 lg:py-24">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20"
        >
          <motion.span
            className="inline-block text-xs font-bold uppercase tracking-[0.28em] text-accent-lime/90 sm:text-sm"
            initial={{ opacity: 0, letterSpacing: "0.18em" }}
            animate={headerInView ? { opacity: 1, letterSpacing: "0.28em" } : {}}
            transition={{ duration: 0.6 }}
          >
            The Problem
          </motion.span>

          <motion.h2
            className="mt-3 text-3xl font-bold leading-[1.04] text-text-heading sm:mt-4 sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            Why athletes stop before they should
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg lg:text-[1.15rem]"
            initial={{ opacity: 0, y: 18 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            Most athletes do not fall behind because of talent. They fall behind
            because the path is unclear, the timing is wrong, and families are
            left to figure it out alone.
          </motion.p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          {problems.map((problem, i) => (
            <div key={problem.title}>
              <ProblemCard problem={problem} index={i} />
              {i < problems.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
