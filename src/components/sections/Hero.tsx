import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Trophy, Users } from "lucide-react";

const BADGES = [
  { icon: Trophy, label: "Stage-aware coaching" },
  { icon: Users, label: "Parent decision clarity" },
  { icon: ArrowUpRight, label: "Long-term athlete development" },
] as const;

export function Hero() {
  return (
    <section className="px-3 pb-4 pt-3 sm:px-4 sm:pb-6 lg:px-6">
      <div className="relative mx-auto w-full max-w-[1536px] overflow-hidden rounded-[14px] sm:rounded-[16px]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/bgimage2.png"
            alt="Hero background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,12,36,0.92)_0%,rgba(7,20,56,0.7)_44%,rgba(7,20,56,0.2)_72%,rgba(7,20,56,0.06)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-[58%] bg-[radial-gradient(circle_at_40%_40%,rgba(11,38,91,0.25),transparent_58%)]" />

        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
          <Image
            src="/images/hero/bgrightimage.png"
            alt="Athlete in action"
            fill
            priority
            className="object-contain object-right-bottom"
            sizes="(max-width: 1024px) 96vw, 58vw"
          />
        </div> */}

        <div className="relative z-10 px-4 py-8 sm:min-h-[560px] sm:px-8 sm:py-10 lg:min-h-[660px] lg:px-[74px] lg:py-[72px]">
          <div className="max-w-[860px] lg:pt-1">
            <h1 className="!font-sans text-[clamp(1.95rem,10vw,4.8rem)] font-medium !leading-[0.98] !tracking-[-0.03em] text-white">
              The Right Path
              <br />
              Matters More Than
              <br />
              Talent
            </h1>

            <p className="mt-5 max-w-[540px] text-[clamp(0.98rem,3.6vw,1.3rem)] font-normal leading-[1.46] text-white/88 sm:mt-7">
              We guide athletes and parents through every stage of development
              so they do not quit, burn out, or lose years chasing the wrong
              plan.
            </p>

            <div className="mt-7 sm:mt-8">
              <Link
                href="/contact"
                className="inline-flex min-h-[58px] w-full max-w-[332px] items-center justify-center gap-2.5 rounded-[14px] bg-accent-lime px-6 text-[0.95rem] font-semibold text-white shadow-[0_8px_26px_var(--accent-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 sm:min-h-[62px] sm:w-auto sm:px-8 sm:text-[1.03rem]"
              >
                Get Athlete Roadmap
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-12 sm:gap-3">
              {BADGES.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-[#2d3754]/74 px-3 py-2 text-center text-[0.67rem] font-semibold uppercase tracking-[0.04em] text-white/92 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[2px] sm:px-4 sm:py-[9px] sm:text-[0.8rem]"
                >
                  <Icon className="h-4 w-4 text-white/90" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
