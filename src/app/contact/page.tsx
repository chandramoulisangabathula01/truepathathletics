import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealSection } from "@/components/animations/RevealSection";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import {
  CalendarDays,
  Clock,
  MessageCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function ContactPage() {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ??
    "https://calendly.com/truepathathletics/30min";
  const whatsAppUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL ??
    "https://wa.me/15551234567?text=Hi%20True%20Path%20Athletics%2C%20I%20would%20like%20a%20consultation%20for%20my%20athlete.";

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-26 pb-14 sm:pt-30 sm:pb-16 lg:pt-34 lg:pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left: Content */}
            <div className="space-y-8 sm:space-y-10">
              <RevealSection>
                <span className="text-accent-lime font-bold tracking-[0.2em] text-xs uppercase mb-6 block">
                  Let&apos;s Talk
                </span>
                <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight text-text-main">
                  Book Free <br />Consultation
                </h1>
                <p className="text-xl text-text-soft leading-relaxed max-w-xl">
                  Tell us where your athlete is. We&apos;ll help identify their stage and build a clear path forward at no obligation.
                </p>
              </RevealSection>

              <RevealSection delay={0.15}>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Link
                    href={calendlyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-black/[0.06] bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent-lime/35 dark:border-white/10 dark:bg-surface-alt"
                  >
                    <CalendarDays className="h-5 w-5 text-accent-lime" />
                    <p className="mt-3 text-sm font-semibold text-text-main">
                      Schedule a Call
                    </p>
                    <p className="mt-1 text-xs leading-5 text-text-soft">
                      Book instantly with Calendly.
                    </p>
                  </Link>
                  <Link
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-black/[0.06] bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent-lime/35 dark:border-white/10 dark:bg-surface-alt"
                  >
                    <MessageCircle className="h-5 w-5 text-accent-lime" />
                    <p className="mt-3 text-sm font-semibold text-text-main">
                      WhatsApp Direct
                    </p>
                    <p className="mt-1 text-xs leading-5 text-text-soft">
                      Fast lead capture via direct message.
                    </p>
                  </Link>
                </div>
              </RevealSection>

              <div className="space-y-8 border-t border-black/[0.05] pt-8 dark:border-white/5">
                <RevealSection delay={0.2} direction="left">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-lime/10 flex items-center justify-center text-accent-lime">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main mb-1">Fast Response</h4>
                      <p className="text-text-soft text-sm">We respond to all inquiries within 24 hours.</p>
                    </div>
                  </div>
                </RevealSection>

                <RevealSection delay={0.3} direction="left">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-lime/10 flex items-center justify-center text-accent-lime">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main mb-1">Free Session</h4>
                      <p className="text-text-soft text-sm">Enjoy a free 30-minute consultation with our lead guides.</p>
                    </div>
                  </div>
                </RevealSection>

                <RevealSection delay={0.4} direction="left">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-lime/10 flex items-center justify-center text-accent-lime">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main mb-1">No Obligation</h4>
                      <p className="text-text-soft text-sm">Direct, honest guidance with zero pressure to commit.</p>
                    </div>
                  </div>
                </RevealSection>
              </div>
            </div>

            {/* Right: Form */}
            <RevealSection delay={0.5} direction="right">
              <div id="consultation-form">
                <ConsultationForm />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
