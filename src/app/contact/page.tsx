import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealSection } from "@/components/animations/RevealSection";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { Clock, ShieldCheck, Zap } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Content */}
            <div className="space-y-12">
              <RevealSection>
                <span className="text-accent-lime font-bold tracking-[0.2em] text-xs uppercase mb-6 block">
                  Let&apos;s Talk
                </span>
                <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight text-text-main">
                  Book a <br />Consultation
                </h1>
                <p className="text-xl text-text-soft leading-relaxed max-w-xl">
                  Tell us where your athlete is. We&apos;ll help identify their stage and build a clear path forward at no obligation.
                </p>
              </RevealSection>

              <div className="space-y-8 pt-8 border-t border-black/[0.05] dark:border-white/5">
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
              <ConsultationForm />
            </RevealSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
