// "use client";

// import { useEffect, useRef } from "react";
// import { Play } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { RevealSection } from "@/components/animations/RevealSection";

// gsap.registerPlugin(ScrollTrigger);

// interface VideoUnveilProps {
//   title?: string;
//   text?: string;
//   supportingLine?: string;
//   posterUrl?: string;
// }

// export function VideoUnveil({
//   title = "Understand the Idea in 60 Seconds",
//   text = "This explains why most athletes struggle — and how we guide them differently.",
//   supportingLine = "Built from real coaching experience with developing athletes.",
//   posterUrl = "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80",
// }: VideoUnveilProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!videoRef.current) return;

//     gsap.fromTo(
//       videoRef.current,
//       {
//         width: "80%",
//         scale: 0.9,
//         borderRadius: "40px",
//       },
//       {
//         width: "100%",
//         scale: 1,
//         borderRadius: "16px",
//         ease: "none",
//         scrollTrigger: {
//           trigger: videoRef.current,
//           start: "top 90%",
//           end: "top 20%",
//           scrub: 1,
//         },
//       }
//     );
//   }, []);

//   return (
//     <section ref={containerRef} className="py-32 bg-background-light/5">
//       <div className="container mx-auto px-6 mb-16 text-center">
//         <RevealSection>
//           <span className="text-accent-lime font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
//             Video
//           </span>
//           <h2 className="text-4xl md:text-5xl font-serif mb-6">
//             {title}
//           </h2>
//           <p className="text-text-soft max-w-2xl mx-auto">
//             {text}
//           </p>
//         </RevealSection>
//       </div>

//       <div className="container mx-auto px-6 flex justify-center">
//         <div
//           ref={videoRef}
//           className="aspect-video relative overflow-hidden bg-background-light rounded-[40px] shadow-2xl border border-white/10 group cursor-pointer"
//         >
//           {/* Poster Image Overlay */}
//           <div 
//             className="absolute inset-0 bg-cover bg-center grayscale opacity-60 group-hover:scale-105 transition-transform duration-700" 
//             style={{ backgroundImage: `url(${posterUrl})` }}
//           />
//           <div className="absolute inset-0 bg-background-deep/40 transition-opacity group-hover:opacity-20" />

//           {/* Play Button */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-20 h-20 bg-accent-lime rounded-full flex items-center justify-center shadow-[0_0_30px_var(--accent-glow)] transition-transform group-hover:scale-110 active:scale-95 duration-500 relative">
//               <div className="absolute inset-0 rounded-full border-2 border-accent-lime/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
//               <Play className="w-8 h-8 text-white fill-white ml-1" />
//             </div>
//           </div>

//           <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
//             <div className="text-left">
//               <p className="text-white font-serif text-xl mb-1">{title}</p>
//               <p className="text-white/60 text-sm">{supportingLine}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealSection } from "@/components/animations/RevealSection";

gsap.registerPlugin(ScrollTrigger);

interface VideoUnveilProps {
  title?: string;
  text?: string;
  supportingLine?: string;
  posterUrl?: string;
  videoUrl?: string;
}

export function VideoUnveil({
  title = "Understand the Idea in 60 Seconds",
  text = "This explains why most athletes struggle — and how we guide them differently.",
  supportingLine = "Built from real coaching experience with developing athletes.",
  posterUrl = "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80",
  videoUrl = "/video/landing/True_Path_Athletics.mp4",
}: VideoUnveilProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Handle Play/Pause
  const togglePlay = () => {
    if (!videoElementRef.current) return;
    if (isPlaying) {
      videoElementRef.current.pause();
    } else {
      videoElementRef.current.play();
      setHasInteracted(true);
    }
    setIsPlaying(!isPlaying);
  };

  // Handle Mute/Unmute
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Don't trigger play/pause
    if (!videoElementRef.current) return;
    videoElementRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (!videoRef.current || !containerRef.current) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(max-width: 767px)", () => {
        gsap.set(videoRef.current, {
          width: "100%",
          scale: 1,
          borderRadius: "14px",
          opacity: 1,
        });
      });

      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          videoRef.current,
          {
            width: "86%",
            scale: 0.92,
            borderRadius: "36px",
            opacity: 0.82,
          },
          {
            width: "70%",
            scale: 1,
            borderRadius: "16px",
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              end: "top 10%",
              scrub: 1.2,
              pin: false,
            },
          }
        );
      });
    }, containerRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="py-8 sm:py-24 md:py-28 lg:py-32 bg-background-light/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-12 lg:mb-16 text-center">
        <RevealSection>
          <span className="text-accent-lime font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-3 sm:mb-4 block">
            Video
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-text-soft max-w-2xl mx-auto">
            {text}
          </p>
        </RevealSection>
      </div>

      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <div
          ref={videoRef}
          onClick={togglePlay}
          aria-label={`${title}. ${supportingLine}`}
          className="relative aspect-video w-full cursor-pointer overflow-hidden border border-white/10 bg-background-light shadow-2xl group sm:w-[88%] lg:w-[70%]"
          style={{ borderRadius: "16px" }}
        >
          {/* Video Element */}
          <video
            ref={videoElementRef}
            src={videoUrl}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            loop
            muted={isMuted}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Poster / Overlay for when not active or loading */}
          {!hasInteracted && !isPlaying && (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                style={{ backgroundImage: `url(${posterUrl})` }}
              />
              <div className="absolute inset-0 bg-background-deep/40 group-hover:bg-background-deep/20 transition-all duration-500" />
            </>
          )}

          {/* Mute/Unmute Toggle - Positioned on side as requested */}
          <button
            onClick={toggleMute}
            className={`absolute top-4 right-4 z-30 p-2.5 rounded-full backdrop-blur-md border border-white/10 text-white transition-all duration-300 shadow-lg ${
              isMuted 
                ? "bg-accent-lime/90 hover:bg-accent-lime" 
                : "bg-background-deep/60 hover:bg-accent-lime"
            }`}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>

          {/* Play Button Overlay (Visible when paused or before first interaction) */}
          {(!isPlaying || !hasInteracted) && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-accent-lime rounded-full flex items-center justify-center shadow-[0_0_30px_var(--accent-glow)] transition-transform group-hover:scale-110 active:scale-95 duration-500 relative pointer-events-auto">
                <div className="absolute inset-0 rounded-full border-2 border-accent-lime/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white fill-white ml-0.5 sm:ml-1" />
              </div>
            </div>
          )}


        </div>
      </div>
    </section>
  );
}
