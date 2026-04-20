import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "Terms of Service | True Path Athletics",
  description: "Terms governing use of the True Path Athletics website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-36 pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-text-main mb-6">
            Terms of Service
          </h1>
          <p className="text-text-soft leading-relaxed mb-10">
            By using this website, you agree to use it lawfully and respectfully.
            Content is provided for informational purposes and does not replace
            professional medical advice.
          </p>
          <div className="space-y-8 text-text-soft leading-relaxed">
            <div>
              <h2 className="text-2xl font-serif text-text-main mb-2">
                Acceptable Use
              </h2>
              <p>
                Do not misuse the site, attempt unauthorized access, or submit
                harmful content.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-serif text-text-main mb-2">
                Intellectual Property
              </h2>
              <p>
                Text, visuals, and branding are owned by True Path Athletics
                unless otherwise stated.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-serif text-text-main mb-2">
                Changes
              </h2>
              <p>
                These terms may be updated periodically. Continued use implies
                acceptance of updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
