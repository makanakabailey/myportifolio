import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedPlatforms from "@/components/FeaturedPlatforms";
import PortfolioGrid from "@/components/PortfolioGrid";
import ProjectModal from "@/components/ProjectModal";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <Navigation />
      <HeroSection />
      <FeaturedPlatforms />
      <PortfolioGrid onProjectClick={handleProjectClick} />
      <AboutSection />
      <ContactSection />
      
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        projectId={selectedProject}
      />
    </div>
  );
}
