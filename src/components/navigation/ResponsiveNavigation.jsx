import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowRight, ShieldCheck, Download, Code2, Send } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolioConfig';

export const ResponsiveNavigation = ({ openInquiryModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Scroll spy & navbar background blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = ['contact', 'experience', 'projects', 'skills', 'about', 'home'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const elem = document.getElementById(sectionId);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-40 transition-all duration-300
        ${isScrolled 
          ? 'bg-[#030712]/90 backdrop-blur-md border-b border-cyber-border/70 py-3 shadow-lg' 
          : 'bg-transparent py-4 border-b border-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 group select-none"
            aria-label="Amit Kumar Portfolio Home"
          >
            <div className="w-9 h-9 rounded-lg bg-cyber-card border border-cyber-border flex items-center justify-center group-hover:border-cyber-green group-hover:shadow-[0_0_12px_rgba(0,255,102,0.4)] transition-all overflow-hidden">
              <img 
                src="./assets/logo.png" 
                alt="AK Logo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-cyber-green font-mono font-bold text-sm">AK</span>';
                }}
              />
            </div>
            <div className="flex flex-col font-mono">
              <span className="text-white text-sm font-bold tracking-wider group-hover:text-cyber-green transition-colors">
                AMIT KUMAR
              </span>
              <span className="text-[10px] text-cyber-text-secondary">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#070b13]/80 border border-cyber-border/50 rounded-full px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`
                    px-3 py-1 rounded-full text-xs font-mono transition-all duration-200
                    ${isActive 
                      ? 'text-cyber-green bg-cyber-green/10 font-bold border border-cyber-green/30 shadow-[0_0_8px_rgba(0,255,102,0.2)]' 
                      : 'text-cyber-text-secondary hover:text-white hover:bg-cyber-card'}
                  `}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="./Amit Kumar Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Amit_Kumar_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs text-cyber-text-secondary border border-cyber-border hover:border-cyber-cyan hover:text-cyber-cyan transition-all"
              title="Download Verified Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => openInquiryModal()}
              className="
                flex items-center gap-1.5 px-4 py-2 rounded-lg font-mono text-xs font-bold
                bg-cyber-green text-black border border-cyber-green shadow-neon-green
                hover:shadow-[0_0_25px_rgba(0,255,102,0.6)] hover:-translate-y-0.5 active:translate-y-0
                transition-all duration-200
              "
            >
              <Send className="w-3.5 h-3.5 text-black" />
              <span>START A PROJECT</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => openInquiryModal()}
              className="px-2.5 py-1.5 rounded-lg bg-cyber-green text-black font-mono text-xs font-bold"
            >
              Hire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-cyber-card border border-cyber-border text-cyber-text-primary hover:text-cyber-green"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#06090f]/98 border-b border-cyber-border backdrop-blur-xl px-4 py-6 space-y-4 font-mono text-sm">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`
                  px-3 py-2 rounded-lg transition-colors
                  ${activeSection === link.id ? 'bg-cyber-green/10 text-cyber-green font-bold border-l-2 border-cyber-green' : 'text-cyber-text-secondary hover:text-white'}
                `}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-cyber-border/60 flex flex-col gap-2">
            <a
              href="./Amit Kumar Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Amit_Kumar_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-cyber-cyan text-cyber-cyan text-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Verified Resume</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openInquiryModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyber-green text-black font-bold text-xs"
            >
              <Send className="w-4 h-4" />
              <span>Start A Project / Hire Me</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
