import React, { lazy, Suspense } from 'react';
import { TerminalWindow } from './TerminalWindow';
import { DeveloperIntroduction } from './DeveloperIntroduction';
import { SystemStatusPanel } from './SystemStatusPanel';
import { TechStackPanel } from './TechStackPanel';
import { Terminal, Shield, Sparkles, ChevronDown } from 'lucide-react';

// Lazy-load the heavy Three.js scene — does NOT block first paint
const InteractiveScene = lazy(() =>
  import('./InteractiveScene').then((m) => ({ default: m.InteractiveScene }))
);

const SceneFallback = () => (
  <div className="w-full min-h-[300px] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3 text-cyber-text-muted font-mono text-xs">
      <div className="w-8 h-8 rounded-full border-2 border-cyber-green border-t-transparent animate-spin" />
      <span>LOADING 3D ENGINE...</span>
    </div>
  </div>
);

export const HeroSection = ({ openInquiryModal }) => {
  const handleScrollDown = () => {
    const elem = document.getElementById('about');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-between pt-20 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-green/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-cyber-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main 3-Column Responsive Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center flex-1 my-auto">
        
        {/* Left Column (Desktop 4 cols) — Interactive Terminal */}
        {/* On Mobile: Rendered below the intro, collapsible */}
        <div className="order-2 lg:order-1 lg:col-span-4 w-full h-full flex flex-col justify-center">
          <div className="w-full">
            <div className="hidden lg:flex items-center gap-2 mb-2 text-xs font-mono text-cyber-text-secondary">
              <span className="w-2 h-2 rounded-full bg-cyber-green"></span>
              <span className="uppercase tracking-wider">SECURE TERMINAL INTERFACE</span>
            </div>
            <TerminalWindow openInquiryModal={openInquiryModal} />
          </div>
        </div>

        {/* Center Column (Desktop 4 or 5 cols) — Developer Introduction */}
        {/* On Mobile: Rendered first so visitors immediately see the headline & CTA */}
        <div className="order-1 lg:order-2 lg:col-span-4 xl:col-span-5 w-full flex flex-col justify-center">
          <DeveloperIntroduction openInquiryModal={openInquiryModal} />
        </div>

        {/* Right Column (Desktop 4 or 3 cols) — 3D Cyber Visual & Tech Status */}
        <div className="order-3 lg:col-span-4 xl:col-span-3 w-full flex flex-col gap-4 justify-center">
          {/* 3D Interactive Scene */}
          <div className="w-full bg-[#05090f]/80 border border-cyber-border rounded-xl p-2 shadow-cyber-card relative overflow-hidden group hover:border-cyber-cyan/40 transition-colors">
            <Suspense fallback={<SceneFallback />}>
              <InteractiveScene />
            </Suspense>
          </div>

          {/* Developer System Status & Verified Tech Panels */}
          <div className="space-y-3">
            <SystemStatusPanel />
            <div className="hidden sm:block">
              <TechStackPanel />
            </div>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="w-full flex flex-col items-center justify-center pt-6 pb-2 text-cyber-text-muted hover:text-cyber-green transition-colors cursor-pointer select-none" onClick={handleScrollDown}>
        <span className="text-[10px] font-mono tracking-widest uppercase mb-1">
          SCROLL TO EXPLORE ARCHITECTURE
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-cyber-green/70" />
      </div>
    </section>
  );
};
