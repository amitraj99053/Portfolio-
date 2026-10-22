import React from 'react';
import { Github, Linkedin, Mail, MapPin, Code2, Terminal, Sparkles, 
         GraduationCap, Briefcase, Award, ExternalLink, Download, ChevronRight, Star, Zap } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolioConfig';

/* ─────────────────────────── ABOUT ─────────────────────────── */
export const AboutSection = () => {
  const { personal, education, experience, certifications } = portfolioConfig;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle BG gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyber-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyber-border" />
          <h2 className="font-mono text-cyber-green text-sm uppercase tracking-[0.3em]">01. ABOUT_NODE</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyber-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left – Profile bio */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-2">
                Who I Am
              </h3>
              <div className="w-16 h-0.5 bg-cyber-green rounded-full mb-5" />
            </div>

            <div className="space-y-4 text-cyber-text-secondary leading-relaxed text-sm sm:text-base">
              <p>
                I'm <strong className="text-white">Amit Kumar</strong> — an MCA Graduate (2026) from 
                <strong className="text-cyber-cyan"> GL Bajaj Institute of Technology And Management</strong>, 
                specializing in MERN stack engineering and real-time backend systems.
              </p>
              <p>
                I currently work as a <strong className="text-white">Web Development Intern at Digiluma</strong>, 
                where I architect full-stack React applications and optimize CI/CD pipelines. My engineering focus 
                is building performant, scalable, and maintainable systems.
              </p>
              <p>
                I thrive on solving complex, high-impact problems — from designing real-time geolocation-based 
                socket architectures to implementing facial recognition authentication systems.
              </p>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-cyber-border/40">
              {[
                { num: '18+', label: 'GitHub Repos' },
                { num: '2+', label: 'Years Building' },
                { num: '5+', label: 'Core Stacks' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-3 bg-[#070b13] border border-cyber-border rounded-xl">
                  <div className="text-2xl font-black text-cyber-green font-mono">{stat.num}</div>
                  <div className="text-[11px] text-cyber-text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={personal.resumeUrl}
                download="Amit_Kumar_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyber-green text-black font-mono font-bold text-xs shadow-neon-green hover:shadow-[0_0_25px_rgba(0,255,102,0.5)] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
              <a
                href={personal.githubUrl}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-cyber-border text-cyber-text-secondary font-mono text-xs hover:border-cyber-green hover:text-cyber-green transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right – Education & Certs timeline */}
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-[#070b13] border border-cyber-border rounded-xl p-5">
              <h4 className="flex items-center gap-2 text-cyber-cyan font-mono font-bold text-xs uppercase tracking-wider mb-4">
                <GraduationCap className="w-4 h-4" />
                EDUCATION_RECORD
              </h4>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="flex gap-3 pb-4 border-b border-cyber-border/40 last:border-0 last:pb-0">
                    <div className="w-2 h-2 rounded-full bg-cyber-green mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm">{edu.degree}</p>
                      <p className="text-cyber-text-secondary text-xs mt-0.5">{edu.institution}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-mono text-cyber-text-muted">{edu.period}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${edu.status === 'In Progress' ? 'bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30' : 'bg-cyber-green/10 text-cyber-green border border-cyber-green/30'}`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience preview */}
            <div className="bg-[#070b13] border border-cyber-border rounded-xl p-5">
              <h4 className="flex items-center gap-2 text-cyber-cyan font-mono font-bold text-xs uppercase tracking-wider mb-4">
                <Briefcase className="w-4 h-4" />
                EXPERIENCE_LOG
              </h4>
              {experience.map((exp, i) => (
                <div key={i}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-white font-bold text-sm">{exp.role}</p>
                      <p className="text-cyber-green text-xs font-mono">{exp.company}</p>
                    </div>
                    <span className="text-[10px] font-mono text-cyber-text-muted bg-cyber-card px-2 py-0.5 rounded border border-cyber-border/40 flex-shrink-0 ml-2">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex gap-2 text-xs text-cyber-text-secondary">
                        <ChevronRight className="w-3 h-3 text-cyber-green mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="bg-[#070b13] border border-cyber-border rounded-xl p-5">
              <h4 className="flex items-center gap-2 text-cyber-cyan font-mono font-bold text-xs uppercase tracking-wider mb-4">
                <Award className="w-4 h-4" />
                CERTIFICATIONS
              </h4>
              <div className="space-y-2">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-center justify-between py-1.5 border-b border-cyber-border/30 last:border-0">
                    <div>
                      <p className="text-white text-xs font-medium">{cert.title}</p>
                      <p className="text-[11px] text-cyber-text-muted">{cert.issuer}</p>
                    </div>
                    <span className="text-[10px] font-mono text-cyber-cyan">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────── SKILLS ─────────────────────────── */
export const SkillsSection = () => {
  const { skills } = portfolioConfig;

  const levelMap = {
    'Expert': 95, 'Advanced': 80, 'Intermediate': 65, 'Foundational': 50
  };

  const levelColor = {
    'Expert': 'bg-cyber-green', 
    'Advanced': 'bg-cyber-cyan', 
    'Intermediate': 'bg-purple-400', 
    'Foundational': 'bg-yellow-400'
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cyber-green/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyber-border" />
          <h2 className="font-mono text-cyber-green text-sm uppercase tracking-[0.3em]">02. SKILL_MATRIX</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyber-border" />
        </div>

        <div className="text-center mb-10">
          <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">Technical Arsenal</h3>
          <p className="text-cyber-text-secondary max-w-lg mx-auto text-sm">
            Verified engineering competencies built through hands-on MERN stack development and production-grade projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.categories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="bg-[#070b13] border border-cyber-border rounded-xl p-5 hover:border-cyber-green/30 transition-colors group"
            >
              <h4 className="flex items-center gap-2 text-cyber-cyan font-mono font-bold text-xs uppercase tracking-wider mb-4">
                <Zap className="w-3.5 h-3.5 text-cyber-cyan" />
                {category.name}
              </h4>

              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-cyber-text-primary text-xs font-medium">{skill.name}</span>
                      <span className="text-[10px] font-mono text-cyber-text-muted">{skill.level}</span>
                    </div>
                    <div className="h-1 bg-[#0a111c] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${levelColor[skill.level] || 'bg-cyber-green'} transition-all duration-700 ease-out`}
                        style={{ width: `${levelMap[skill.level] || 60}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────── PROJECTS ─────────────────────────── */
export const ProjectsSection = () => {
  const { projects, personal } = portfolioConfig;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-cyber-purple/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyber-border" />
          <h2 className="font-mono text-cyber-green text-sm uppercase tracking-[0.3em]">03. PROJECT_LOG</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyber-border" />
        </div>

        <div className="text-center mb-10">
          <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">Featured Production Work</h3>
          <p className="text-cyber-text-secondary max-w-lg mx-auto text-sm">
            Real-time systems, full-stack architectures, and high-impact engineering projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`relative bg-[#070b13] border rounded-xl overflow-hidden group transition-all duration-300 hover:-translate-y-1
                ${project.featured ? 'border-cyber-green/30 hover:border-cyber-green/60 hover:shadow-neon-green' : 'border-cyber-border hover:border-cyber-cyan/30 hover:shadow-neon-cyan'}`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-0.5 bg-cyber-green text-black text-[10px] font-mono font-bold rounded-full">
                  <Star className="w-2.5 h-2.5" />
                  <span>FEATURED</span>
                </div>
              )}

              {/* Project image or gradient placeholder */}
              <div className="h-36 sm:h-44 overflow-hidden relative bg-[#04070d]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center relative">
                    <div className="absolute inset-0 cyber-grid-bg opacity-30" />
                    <div className="relative z-10 text-center">
                      <Code2 className="w-8 h-8 text-cyber-green/50 mx-auto mb-2" />
                      <span className="text-[10px] font-mono text-cyber-text-muted uppercase tracking-wider">{project.category}</span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b13] to-transparent opacity-70" />
              </div>

              {/* Card content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white font-bold text-base leading-tight">{project.title}</h3>
                  <span className="text-[10px] text-cyber-text-muted font-mono flex-shrink-0">{project.date}</span>
                </div>
                <p className="text-cyber-text-secondary text-xs leading-relaxed mb-3">{project.description}</p>

                {/* Stats badges for featured */}
                {project.stats && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {Object.values(project.stats).map((stat, sIdx) => (
                      <span key={sIdx} className="text-[10px] px-2 py-0.5 bg-cyber-green/10 text-cyber-green border border-cyber-green/30 rounded font-mono">
                        {stat}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2 py-0.5 bg-[#0a111c] text-cyber-cyan border border-cyber-border/60 rounded font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono text-cyber-green hover:underline"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View Source</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono text-cyber-cyan hover:underline"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Repos CTA */}
        <div className="text-center">
          <a
            href={`${personal.githubUrl}?tab=repositories`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-cyber-border font-mono text-sm text-cyber-text-secondary hover:border-cyber-green hover:text-cyber-green transition-all"
          >
            <Github className="w-4 h-4" />
            <span>Browse All Repositories</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────── CONTACT ─────────────────────────── */
export const ContactSection = ({ openInquiryModal }) => {
  const { personal } = portfolioConfig;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-cyber-green/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyber-border" />
          <h2 className="font-mono text-cyber-green text-sm uppercase tracking-[0.3em]">05. CONTACT_CHANNEL</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyber-border" />
        </div>

        <h3 className="text-4xl sm:text-5xl font-black text-white mb-4">
          Let's Build Something<br/>
          <span className="text-cyber-green text-glow-green">Extraordinary.</span>
        </h3>

        <p className="text-cyber-text-secondary text-base mb-10 max-w-xl mx-auto leading-relaxed">
          Available for freelance MERN stack projects, real-time system architecture, and full-time Software Engineering roles.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={openInquiryModal}
            className="px-8 py-4 rounded-xl bg-cyber-green text-black font-mono font-black text-sm shadow-neon-green hover:shadow-[0_0_30px_rgba(0,255,102,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            START A PROJECT
          </button>
          <a
            href={`mailto:${personal.email}`}
            className="px-8 py-4 rounded-xl border border-cyber-cyan text-cyber-cyan font-mono font-bold text-sm hover:bg-cyber-cyan/10 hover:shadow-neon-cyan hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            SEND DIRECT EMAIL
          </a>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
          {[
            { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
            { icon: MapPin, label: 'Location', value: personal.location, href: null },
            { icon: Github, label: 'GitHub', value: '@amitraj99053', href: personal.githubUrl },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-[#070b13] border border-cyber-border rounded-xl p-4 text-center hover:border-cyber-green/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-cyber-green/10 border border-cyber-green/30 flex items-center justify-center mx-auto mb-2">
                  <Icon className="w-4 h-4 text-cyber-green" />
                </div>
                <p className="text-[10px] text-cyber-text-muted font-mono mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs text-cyber-cyan hover:underline break-all">{item.value}</a>
                ) : (
                  <p className="text-xs text-cyber-text-primary">{item.value}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Social row */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {[
            { name: 'GitHub', href: personal.githubUrl, icon: Github },
            { name: 'LinkedIn', href: personal.linkedinUrl, icon: Linkedin },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={i}
                href={s.href}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyber-border text-cyber-text-secondary hover:border-cyber-green hover:text-cyber-green font-mono text-xs transition-all"
              >
                <Icon className="w-3.5 h-3.5" />
                {s.name}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────── FOOTER ─────────────────────────── */
export const Footer = () => {
  const { personal } = portfolioConfig;
  return (
    <footer className="border-t border-cyber-border/40 py-6 px-4 font-mono text-xs text-cyber-text-muted">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© 2025–2026 <strong className="text-cyber-green">{personal.name}</strong>. All rights reserved.</span>
        <span className="text-[11px]">Built with React 18 · Tailwind CSS · Three.js · Framer Motion · Vite</span>
      </div>
    </footer>
  );
};
