import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;