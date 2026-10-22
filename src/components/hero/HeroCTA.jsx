import React from 'react';
import { ArrowRight, Code2, Sparkles, Send } from 'lucide-react';

export const HeroCTA = ({ openInquiryModal }) => {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const elem = document.getElementById('projects');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = (e) => {
    e.preventDefault();
    if (openInquiryModal) {
      openInquiryModal();
    } else {
      const elem = document.getElementById('contact');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
      {/* Primary Neon Green CTA Button */}
      <button
        onClick={handleStartProject}
        className="
          relative group px-6 py-3.5 rounded-lg font-mono text-sm font-bold
          bg-cyber-green text-black overflow-hidden
          shadow-neon-green hover:shadow-[0_0_30px_rgba(0,255,102,0.6)]
          transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0
          flex items-center justify-center gap-2
        "
        aria-label="Start a Project or open project inquiry form"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Send className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-200" />
          <span>START A PROJECT</span>
          <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none"></div>
      </button>

      {/* Secondary Outlined Cyan CTA Button */}
      <a
        href="#projects"
        onClick={handleScrollToProjects}
        className="
          px-6 py-3.5 rounded-lg font-mono text-sm font-semibold
          bg-transparent text-cyber-cyan border border-cyber-cyan/50
          hover:bg-cyber-cyan/10 hover:border-cyber-cyan shadow-sm hover:shadow-neon-cyan
          transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0
          flex items-center justify-center gap-2
        "
        aria-label="Explore My Work"
      >
        <Code2 className="w-4 h-4 text-cyber-cyan" />
        <span>EXPLORE MY WORK</span>
      </a>
    </div>
  );
};
