import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../../config/portfolioConfig';
import { HeroCTA } from './HeroCTA';
import { SocialLinks } from './SocialLinks';
import { ShieldCheck, Terminal, MapPin, Sparkles } from 'lucide-react';

export const DeveloperIntroduction = ({ openInquiryModal }) => {
  const { personal } = portfolioConfig;
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation for professional titles
  useEffect(() => {
    const currentFullTitle = personal.typingTitles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing characters
        setDisplayText(currentFullTitle.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullTitle.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting characters
        setDisplayText(currentFullTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % personal.typingTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, personal.typingTitles]);

  return (
    <div className="flex flex-col justify-center space-y-5 text-left py-2">
      {/* Top Status & Greeting */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyber-green/10 border border-cyber-green/30 text-cyber-green text-xs font-mono font-semibold">
          <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></span>
          <span>{personal.greeting}</span>
        </span>

        <span className="inline-flex items-center gap-1 text-xs font-mono text-cyber-text-secondary">
          <ShieldCheck className="w-3.5 h-3.5 text-cyber-cyan" />
          <span>VERIFIED ENGINEER</span>
        </span>

        <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-cyber-text-muted">
          <MapPin className="w-3.5 h-3.5 text-cyber-text-secondary" />
          <span>{personal.location}</span>
        </span>
      </div>

      {/* Main Developer Name */}
      <div className="space-y-1">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
          <span className="hover:text-cyber-green transition-colors duration-300">
            {personal.name}
          </span>
        </h1>

        {/* Animated Professional Title */}
        <div className="h-8 sm:h-9 flex items-center font-mono text-lg sm:text-xl lg:text-2xl font-bold text-cyber-cyan">
          <span className="text-cyber-green mr-2">&gt;</span>
          <span className="text-glow-cyan">
            {displayText}
          </span>
          <span className="terminal-cursor text-cyber-green font-bold ml-1">_</span>
        </div>
      </div>

      {/* Primary Headline */}
      <h2 className="text-lg sm:text-xl font-semibold text-cyber-text-primary leading-snug">
        {personal.headline}
      </h2>

      {/* Supporting Verified Description */}
      <p className="text-cyber-text-secondary text-sm sm:text-base leading-relaxed max-w-xl">
        {personal.description}
      </p>

      {/* Call to Actions */}
      <div className="pt-2">
        <HeroCTA openInquiryModal={openInquiryModal} />
      </div>

      {/* Verified Social & Professional Channels */}
      <div className="pt-2">
        <div className="text-[11px] font-mono text-cyber-text-muted uppercase tracking-wider mb-2">
          Verified Developer Identity & Channels:
        </div>
        <SocialLinks />
      </div>
    </div>
  );
};
