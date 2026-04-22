import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StatementBand } from "@/components/sections/StatementBand";
import { VideoUnveil } from "@/components/sections/VideoUnveil";
import { TheProblem } from "@/components/sections/TheProblem";
import { InjuryReality } from "@/components/sections/InjuryReality";
import { TheTruth } from "@/components/sections/TheTruth";
import { TruePathSystem } from "@/components/sections/TruePathSystem";
// import { HowItWorks } from "@/components/sections/HowItWorks";
import { InteractiveAssessment } from "@/components/sections/InteractiveAssessment";
// import { FounderStory } from "@/components/sections/FounderStory";
// import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatementBand />
      <TheProblem />
      <InjuryReality />
      <TheTruth />
      <TruePathSystem />
      {/* <HowItWorks /> */}
      <VideoUnveil />
      <InteractiveAssessment />
      {/* <FounderStory /> */}
      {/* <TestimonialsSection /> */}
      <FinalCTA />
      <Footer />
    </main>
  );
}
