import React from 'react';
import { Code2, Layers, CheckCircle2 } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolioConfig';

export const TechStackPanel = () => {
  const { skills } = portfolioConfig;

  return (
    <div className="bg-[#070b13]/90 border border-cyber-border rounded-xl p-4 font-mono text-xs shadow-cyber-card backdrop-blur-sm space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-cyber-border/60 pb-2">
        <div className="flex items-center gap-2 text-cyber-cyan">
          <Layers className="w-3.5 h-3.5" />
          <span className="font-bold tracking-wider text-[11px] uppercase">VERIFIED CORE STACK</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-cyber-green">
          <CheckCircle2 className="w-3 h-3" />
          <span>CV Validated</span>
        </div>
      </div>

      {/* Tech Badges Grid */}
      <div className="flex flex-wrap gap-1.5">
        {skills.badges.map((tech, idx) => (
          <span
            key={idx}
            className="
              px-2.5 py-1 rounded-md text-[11px] font-mono
              bg-[#0a111c] border border-cyber-border/70 text-cyber-text-primary
              hover:border-cyber-green hover:text-cyber-green hover:shadow-[0_0_10px_rgba(0,255,102,0.2)]
              transition-all duration-200 cursor-default select-none
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Architectural Specialization Footer */}
      <div className="pt-2 border-t border-cyber-border/40 text-[10px] text-cyber-text-secondary flex items-center justify-between">
        <span>Architecture: <strong className="text-white">MERN + Socket.io</strong></span>
        <span className="text-cyber-cyan">State: <strong className="text-white">React 18</strong></span>
      </div>
    </div>
  );
};
