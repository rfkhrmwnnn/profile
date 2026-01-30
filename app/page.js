import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials.jsx";
import SkillsAndCerts from "../components/SkillsAndCerts";
import FadeInSection from "../components/FadeInSection";

export const metadata = {
  title: "Beranda | Rifki Hermawan",
  description: "Portofolio profesional Rifki Hermawan — Full Stack Developer & Automation Expert.",
};

export default function Home() {
  return (
    <main className="space-y-24">
      {/* Hero Section Parallax */}
      <HeroSection />

      {/* Testimoni & Skills */}
      <FadeInSection>
        <Testimonials />
      </FadeInSection>

      <FadeInSection>
        <SkillsAndCerts />
      </FadeInSection>
    </main>
  );
}
