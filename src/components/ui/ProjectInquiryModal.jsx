import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, Terminal, Code2 } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolioConfig';

export const ProjectInquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'MERN Full-Stack Application',
    budget: '$500 - $2,000',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Format mailto link with structured message
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Amit,\n\nI am interested in starting a project with you.\n\nProject Type: ${formData.projectType}\nEstimated Budget: ${formData.budget}\nClient Name: ${formData.name}\nContact Email: ${formData.email}\n\nProject Scope & Requirements:\n${formData.description}\n\nLooking forward to hearing from you!`
    );
    window.location.href = `mailto:${portfolioConfig.personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md font-mono">
      <div 
        className="w-full max-w-lg bg-[#070b13] border border-cyber-green/40 rounded-2xl shadow-terminal overflow-hidden relative animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0a111c] border-b border-cyber-border">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-green animate-pulse"></span>
            <span className="text-cyber-green font-bold text-xs uppercase tracking-wider">
              PROJECT_INITIALIZER // v1.0
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-cyber-text-secondary hover:text-white hover:bg-cyber-card transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-cyber-green/20 border border-cyber-green flex items-center justify-center text-cyber-green">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-white font-bold text-lg">Inquiry Dispatched</h3>
            <p className="text-cyber-text-secondary text-xs leading-relaxed">
              Your inquiry has been compiled and handed off to the dispatcher. Amit will review your requirements and respond within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
            <div>
              <p className="text-cyber-text-secondary mb-3 leading-relaxed">
                Fill out the project parameters below to initiate a freelance engagement or discuss software engineering contracts with <strong className="text-white">{portfolioConfig.personal.name}</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-cyber-text-secondary mb-1">Your Name / Organization *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe or Tech Corp"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#03060c] border border-cyber-border rounded-lg px-3 py-2 text-white placeholder:text-cyber-text-muted focus:outline-none focus:border-cyber-green"
                />
              </div>
              <div>
                <label className="block text-cyber-text-secondary mb-1">Your Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#03060c] border border-cyber-border rounded-lg px-3 py-2 text-white placeholder:text-cyber-text-muted focus:outline-none focus:border-cyber-green"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-cyber-text-secondary mb-1">Project Category</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-[#03060c] border border-cyber-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyber-green"
                >
                  <option>MERN Full-Stack Application</option>
                  <option>Real-Time Socket.io System</option>
                  <option>Frontend / React Optimization</option>
                  <option>RESTful API & Database Architecture</option>
                  <option>Full-Time / Contract Role</option>
                </select>
              </div>
              <div>
                <label className="block text-cyber-text-secondary mb-1">Estimated Budget Scope</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-[#03060c] border border-cyber-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyber-green"
                >
                  <option>&lt; $500 (Small sprint / fix)</option>
                  <option>$500 - $2,000 (Standard MVP / project)</option>
                  <option>$2,000 - $5,000 (Full production suite)</option>
                  <option>Monthly Retainer / Full-Time</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-cyber-text-secondary mb-1">Project Scope & Key Goals *</label>
              <textarea
                rows={3}
                required
                placeholder="Briefly describe what you'd like to build, target deadlines, or technical specs..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-[#03060c] border border-cyber-border rounded-lg px-3 py-2 text-white placeholder:text-cyber-text-muted focus:outline-none focus:border-cyber-green resize-none"
              ></textarea>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-cyber-border/60">
              <span className="text-[10px] text-cyber-text-muted">
                ⚡ Direct dispatch to: {portfolioConfig.personal.email}
              </span>
              <button
                type="submit"
                className="
                  flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-bold
                  bg-cyber-green text-black hover:bg-cyber-green/90 shadow-neon-green
                  transition-all duration-200
                "
              >
                <Send className="w-3.5 h-3.5 text-black" />
                <span>DISPATCH INQUIRY</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
