import React, { useState } from 'react';
import { ResponsiveNavigation } from './components/navigation/ResponsiveNavigation';
import { HeroSection } from './components/hero/HeroSection';
import {
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from './components/sections/OtherSections';
import { ProjectInquiryModal } from './components/ui/ProjectInquiryModal';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const openInquiryModal = () => setIsInquiryOpen(true);
  const closeInquiryModal = () => setIsInquiryOpen(false);

  return (
    <div className="min-h-screen bg-[#030712] text-white relative overflow-x-hidden">
      {/* Cyber Matrix grid background – full page */}
      <div className="fixed inset-0 cyber-grid-bg opacity-60 pointer-events-none z-0" />
      <div className="fixed inset-0 scanlines-overlay opacity-20 pointer-events-none z-0" />

      {/* Navigation */}
      <ResponsiveNavigation openInquiryModal={openInquiryModal} />

      {/* Content Layers */}
      <div className="relative z-10">
        <HeroSection openInquiryModal={openInquiryModal} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection openInquiryModal={openInquiryModal} />
        <Footer />
      </div>

      {/* Global Project Inquiry Modal */}
      <ProjectInquiryModal isOpen={isInquiryOpen} onClose={closeInquiryModal} />
    </div>
  );
}
