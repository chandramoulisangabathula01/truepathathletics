import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParentsHero } from "@/components/sections/ParentsHero";
import { ParentTruths } from "@/components/sections/ParentTruths";
import { ParentMistakes } from "@/components/sections/ParentMistakes";
import { ParentRealizations } from "@/components/sections/ParentRealizations";
import { ParentDifferentiation } from "@/components/sections/ParentDifferentiation";
import { VideoUnveil } from "@/components/sections/VideoUnveil";
// import { HowItWorks } from "@/components/sections/HowItWorks";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function ForParents() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ParentsHero />
      <ParentMistakes />
      <ParentTruths />
      <ParentRealizations />
      <ParentDifferentiation />
      <VideoUnveil 
        title="Watch: How to Guide Your Athlete the Right Way"
        text="A quick explanation of what parents most commonly misunderstand and what to do instead."
        posterUrl="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
        videoUrl="/video/for_parents/for_parents_video.mp4"
      />
      {/* <HowItWorks /> */}
      <FinalCTA />
      <Footer />
    </main>
  );
}

