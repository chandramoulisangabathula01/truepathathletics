import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "Privacy Policy | True Path Athletics",
  description: "How True Path Athletics handles personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-36 pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-text-main mb-6">
            Privacy Policy
          </h1>
          <p className="text-text-soft leading-relaxed mb-10">
            This website may collect contact information you submit through forms
            so we can respond to your request. We do not sell personal data. We
            use reasonable safeguards to protect information and only keep it as
            long as needed for operations and legal obligations.
          </p>
          <div className="space-y-8 text-text-soft leading-relaxed">
            <div>
              <h2 className="text-2xl font-serif text-text-main mb-2">
                Information We Collect
              </h2>
              <p>
                Name, email, phone number, and message details provided through
                contact forms.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-serif text-text-main mb-2">
                How We Use It
              </h2>
              <p>
                To respond to inquiries, provide guidance, and improve services.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-serif text-text-main mb-2">Contact</h2>
              <p>
                Questions about this policy can be sent to
                {" "}info@truepathathletics.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
