"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function StatementBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteWrapperRef = useRef<HTMLDivElement>(null);
  const revealLayerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const lastProgress = useRef(0);
  const velocity = useRef(0);
  const rafId = useRef<number>(0);
  const hasCompleted = useRef(false);

  const lerp = useCallback((start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const quoteWrapper = quoteWrapperRef.current;
    const revealLayer = revealLayerRef.current;
    const ball = ballRef.current;
    const glow = glowRef.current;
    const trail = trailRef.current;
    const particles = particlesRef.current;

    if (
      !section ||
      !quoteWrapper ||
      !revealLayer ||
      !ball ||
      !glow ||
      !trail ||
      !particles
    )
      return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      revealLayer.style.clipPath = "inset(0 0% 0 0)";
      return;
    }

    const particleElements: HTMLDivElement[] = [];
    const PARTICLE_COUNT = 12;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = document.createElement("div");
      p.className = "absolute rounded-full pointer-events-none";
      p.style.cssText = `
        width: ${gsap.utils.random(3, 8)}px;
        height: ${gsap.utils.random(3, 8)}px;
        background: radial-gradient(circle, rgba(190, 255, 50, 0.9), rgba(190, 255, 50, 0));
        opacity: 0;
        will-change: transform, opacity;
        filter: blur(${gsap.utils.random(0, 1)}px);
      `;
      particles.appendChild(p);
      particleElements.push(p);
    }

    const ctx = gsap.context(() => {
      const ballX = gsap.quickTo(ball, "x", {
        duration: 0.6,
        ease: "power3.out",
      });
      const ballRotation = gsap.quickTo(ball, "rotation", {
        duration: 0.5,
        ease: "power2.out",
      });
      const ballScaleX = gsap.quickTo(ball, "scaleX", {
        duration: 0.3,
        ease: "power2.out",
      });
      const ballScaleY = gsap.quickTo(ball, "scaleY", {
        duration: 0.3,
        ease: "power2.out",
      });
      const glowX = gsap.quickTo(glow, "x", {
        duration: 0.8,
        ease: "power3.out",
      });
      const glowOpacity = gsap.quickTo(glow, "opacity", {
        duration: 0.4,
        ease: "power2.out",
      });
      const trailX = gsap.quickTo(trail, "x", {
        duration: 1.0,
        ease: "power4.out",
      });
      const trailScaleX = gsap.quickTo(trail, "scaleX", {
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.set(ball, { scale: 0, opacity: 0 });
      gsap.set(glow, { opacity: 0 });
      gsap.set(trail, { opacity: 0 });

      let hasEntered = false;
      let currentSmoothedProgress = 0;
      let targetProgress = 0;
      let isAnimating = false;
      let maxProgressReached = 0;

      const smoothLoop = () => {
        const diff = targetProgress - currentSmoothedProgress;
        if (Math.abs(diff) > 0.0001) {
          currentSmoothedProgress = lerp(
            currentSmoothedProgress,
            targetProgress,
            0.08
          );

          const quoteWidth = quoteWrapper.getBoundingClientRect().width;
          const ballSize = ball.getBoundingClientRect().width || 56;

          const sectionRect = section.getBoundingClientRect();
          const wrapperRect = quoteWrapper.getBoundingClientRect();
          const offsetLeft = wrapperRect.left - sectionRect.left;

          const startX = -offsetLeft - ballSize;
          const endX = quoteWidth + offsetLeft + ballSize;

          const x = gsap.utils.interpolate(
            startX,
            endX,
            currentSmoothedProgress
          );

          const revealPercent = Math.min(
            100,
            Math.max(0, ((x + ballSize * 0.5) / quoteWidth) * 100)
          );

          revealLayer.style.clipPath = `inset(0 ${100 - revealPercent}% 0 0)`;

          rafId.current = requestAnimationFrame(smoothLoop);
        } else {
          isAnimating = false;
        }
      };

      const startSmoothLoop = () => {
        if (!isAnimating) {
          isAnimating = true;
          rafId.current = requestAnimationFrame(smoothLoop);
        }
      };

      let lastDirection = 0;

      const render = (progress: number) => {
        if (hasCompleted.current) return;

        maxProgressReached = Math.max(maxProgressReached, progress);
        const clampedProgress = maxProgressReached;

        const quoteWidth = quoteWrapper.getBoundingClientRect().width;
        const ballSize = ball.getBoundingClientRect().width || 56;

        const sectionRect = section.getBoundingClientRect();
        const wrapperRect = quoteWrapper.getBoundingClientRect();
        const offsetLeft = wrapperRect.left - sectionRect.left;

        const startX = -offsetLeft - ballSize;
        const endX = quoteWidth + offsetLeft + ballSize;

        const delta = clampedProgress - lastProgress.current;
        velocity.current = lerp(velocity.current, delta * 100, 0.3);
        const absVelocity = Math.abs(velocity.current);
        const direction = Math.sign(delta);

        if (
          direction !== 0 &&
          direction !== lastDirection &&
          lastDirection !== 0
        ) {
          gsap.to(ball, {
            scaleX: 0.75,
            scaleY: 1.25,
            duration: 0.15,
            ease: "power3.out",
            onComplete: () => {
              gsap.to(ball, {
                scaleX: 1,
                scaleY: 1,
                duration: 0.4,
                ease: "elastic.out(1.2, 0.4)",
              });
            },
          });
        }
        lastDirection = direction;

        const x = gsap.utils.interpolate(startX, endX, clampedProgress);

        ballX(x);

        const rotationAmount =
          clampedProgress * 1440 + velocity.current * 15;
        ballRotation(rotationAmount);

        const squashFactor = gsap.utils.clamp(
          0.85,
          1.15,
          1 + absVelocity * 0.08
        );
        const stretchFactor = gsap.utils.clamp(
          0.85,
          1.15,
          1 - absVelocity * 0.05
        );
        ballScaleX(squashFactor);
        ballScaleY(stretchFactor);

        glowX(x);
        glowOpacity(gsap.utils.clamp(0.15, 0.8, absVelocity * 2));

        trailX(x - ballSize * 0.5);
        trailScaleX(gsap.utils.clamp(0.3, 2.5, absVelocity * 3));

        targetProgress = clampedProgress;
        startSmoothLoop();

        if (absVelocity > 0.1) {
          const particleIndex = Math.floor(Math.random() * PARTICLE_COUNT);
          const p = particleElements[particleIndex];
          const offsetY = gsap.utils.random(-30, 30);
          const offsetX = gsap.utils.random(-20, 10);

          gsap.killTweensOf(p);
          gsap.set(p, {
            x: x + ballSize * 0.5 + offsetX,
            y: offsetY,
            opacity: gsap.utils.random(0.4, 0.9),
            scale: gsap.utils.random(0.5, 1.5),
          });
          gsap.to(p, {
            opacity: 0,
            y: offsetY + gsap.utils.random(-40, 40),
            x: `+=${gsap.utils.random(-30, -60)}`,
            scale: 0,
            duration: gsap.utils.random(0.5, 1.2),
            ease: "power3.out",
          });
        }

        if (clampedProgress >= 0.98 && !hasCompleted.current) {
          hasCompleted.current = true;

          revealLayer.style.clipPath = "inset(0 0% 0 0)";

          gsap.to(ball, {
            x: endX + ballSize * 2,
            scaleX: 1.4,
            scaleY: 0.7,
            opacity: 0,
            duration: 0.6,
            ease: "power3.in",
          });

          gsap.to(glow, {
            opacity: 0,
            scale: 2,
            duration: 0.5,
            ease: "power2.out",
          });

          gsap.to(trail, {
            opacity: 0,
            scaleX: 4,
            duration: 0.4,
            ease: "power2.out",
          });

          particleElements.forEach((p, i) => {
            gsap.killTweensOf(p);
            gsap.set(p, {
              x: endX,
              y: gsap.utils.random(-40, 40),
              opacity: 0.8,
              scale: gsap.utils.random(0.8, 2),
            });
            gsap.to(p, {
              opacity: 0,
              x: `+=${gsap.utils.random(30, 100)}`,
              y: `+=${gsap.utils.random(-60, 60)}`,
              scale: 0,
              duration: gsap.utils.random(0.6, 1.4),
              delay: i * 0.03,
              ease: "power3.out",
            });
          });
        }

        lastProgress.current = clampedProgress;
      };

      render(0);

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 70%",
        scrub: 0.5,
        invalidateOnRefresh: true,
        onEnter: () => {
          if (!hasEntered) {
            hasEntered = true;
            gsap.to(ball, {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: "elastic.out(1, 0.5)",
            });
            gsap.to(trail, {
              opacity: 1,
              duration: 0.5,
              delay: 0.3,
            });
            gsap.fromTo(
              glow,
              { opacity: 0, scale: 0.5 },
              { opacity: 0.6, scale: 1, duration: 1, ease: "power2.out" }
            );
          }
        },
        onUpdate: (self) => {
          if (!hasCompleted.current) {
            render(self.progress);
          }
        },
        onRefresh: (self) => {
          if (!hasCompleted.current) {
            render(self.progress);
          }
        },
      });

      gsap.to(ball, {
        y: -3,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, section);

    return () => {
      cancelAnimationFrame(rafId.current);
      ctx.revert();
      particleElements.forEach((p) => p.remove());
    };
  }, [lerp]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 border-y border-white/5 bg-background-light/20 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-lime/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6">
        <div
          ref={quoteWrapperRef}
          className="relative max-w-4xl mx-auto px-1 md:px-3 py-6"
        >
          {/* ★ FIXED: Invisible structural placeholder — no ghost text visible */}
          <h2
            aria-hidden="true"
            className="text-2xl md:text-4xl font-serif text-transparent text-center leading-relaxed select-none pointer-events-none"
          >
            Most athletes don&apos;t quit because of talent. They quit because
            they{" "}
            <span className="text-transparent font-sans font-bold italic">
              don&apos;t understand the journey.
            </span>
          </h2>

          {/* Revealed text layer */}
          <div
            ref={revealLayerRef}
            className="pointer-events-none absolute inset-0 z-10"
            style={{ clipPath: "inset(0 100% 0 0)", willChange: "clip-path" }}
          >
            <h2 className="text-2xl md:text-4xl font-serif text-text-main text-center leading-relaxed">
              Most athletes don&apos;t quit because of talent. They quit because
              they{" "}
              <span className="text-accent-lime font-sans font-bold italic drop-shadow-[0_0_20px_rgba(190,255,50,0.3)]">
                don&apos;t understand the journey.
              </span>
            </h2>
          </div>

          {/* Motion trail */}
          <div
            ref={trailRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1/2 z-[18] -translate-y-1/2 h-10 w-24 md:h-14 md:w-36 will-change-transform origin-right"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(190, 255, 50, 0.08) 40%, rgba(190, 255, 50, 0.15) 100%)",
              borderRadius: "50%",
              filter: "blur(8px)",
              opacity: 0,
            }}
          />

          {/* Ball glow */}
          <div
            ref={glowRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1/2 z-[19] -translate-y-1/2 h-28 w-28 md:h-40 md:w-40 will-change-transform"
            style={{
              background:
                "radial-gradient(circle, rgba(190, 255, 50, 0.2) 0%, rgba(190, 255, 50, 0.05) 40%, transparent 70%)",
              transform: "translate(-50%, -50%)",
              marginLeft: "32px",
              marginTop: "0px",
              filter: "blur(4px)",
            }}
          />

          {/* Particles container */}
          <div
            ref={particlesRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1/2 z-[21] -translate-y-1/2 w-full h-full"
          />

          {/* Tennis Ball */}
          <div
            ref={ballRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1/2 z-20 -translate-y-1/2 h-14 w-14 md:h-32 md:w-32 will-change-transform"
            style={{ transformOrigin: "center center" }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/assets/tennis_ball.svg"
                alt=""
                width={128}
                height={128}
                priority
                className="h-full w-full rounded-full object-cover"
                style={{
                  filter:
                    "drop-shadow(0 8px 24px rgba(0,0,0,0.4)) drop-shadow(0 0 12px rgba(190,255,50,0.15))",
                }}
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15) 0%, transparent 50%)",
                  mixBlendMode: "overlay",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}