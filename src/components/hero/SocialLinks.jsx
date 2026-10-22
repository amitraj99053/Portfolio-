import React from 'react';
import { Github, Linkedin, Mail, FileText, Phone } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolioConfig';

export const SocialLinks = ({ className = "" }) => {
  const { personal } = portfolioConfig;

  const links = [
    {
      name: "GitHub",
      url: personal.githubUrl,
      icon: Github,
      accent: "hover:text-cyber-green hover:border-cyber-green/50",
      label: "View GitHub Profile"
    },
    {
      name: "LinkedIn",
      url: personal.linkedinUrl,
      icon: Linkedin,
      accent: "hover:text-cyber-cyan hover:border-cyber-cyan/50",
      label: "Connect on LinkedIn"
    },
    {
      name: "Email",
      url: `mailto:${personal.email}`,
      icon: Mail,
      accent: "hover:text-cyber-green hover:border-cyber-green/50",
      label: "Send Email"
    },
    {
      name: "Phone",
      url: `tel:${personal.phone}`,
      icon: Phone,
      accent: "hover:text-cyber-cyan hover:border-cyber-cyan/50",
      label: "Direct Phone Call"
    },
    {
      name: "Resume",
      url: personal.resumeUrl,
      icon: FileText,
      accent: "hover:text-cyber-purple hover:border-cyber-purple/50",
      label: "Download Verified Resume",
      download: "Amit_Kumar_Resume.pdf"
    }
  ];

  return (
    <div className={`flex items-center gap-2.5 flex-wrap ${className}`}>
      {links.map((link, idx) => {
        const Icon = link.icon;
        return (
          <a
            key={idx}
            href={link.url}
            target={link.url.startsWith('mailto:') || link.url.startsWith('tel:') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            download={link.download}
            aria-label={link.label}
            title={link.label}
            className={`
              flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs
              bg-[#0a0f18]/80 border border-cyber-border/70 text-cyber-text-secondary
              transition-all duration-200 hover:-translate-y-0.5
              ${link.accent}
            `}
          >
            <Icon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{link.name}</span>
          </a>
        );
      })}
    </div>
  );
};
