import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Maximize2, Minimize2, Trash2, CornerDownLeft, Sparkles, ExternalLink, Download } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolioConfig';
import { handleTerminalCommand } from './TerminalCommandHandler';

export const TerminalWindow = ({ openInquiryModal }) => {
  const [history, setHistory] = useState([
    {
      type: 'system',
      message: 'INITIALIZING AMIT KUMAR SECURE DEVELOPER WORKSTATION [v2.4.0-edge]',
    },
    {
      type: 'system',
      message: 'Verified MERN Stack Developer | MCA Graduate 2026 | Node.js & Socket.io Specialist',
    },
    {
      type: 'tip',
      message: 'Tip: Type "help" to list commands, or try "skills", "projects", "resume".',
    }
  ]);
  
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll on new output
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const clearTerminal = () => {
    setHistory([]);
  };

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    // Add to history list
    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    // Add prompt entry to output
    setHistory(prev => [...prev, { type: 'prompt', command: trimmed }]);

    // Parse and handle
    const result = handleTerminalCommand(trimmed, { clearTerminal, openInquiryModal });
    if (result) {
      setHistory(prev => [...prev, result]);
    }

    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIdx);
        setInputVal(commandHistory[newIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIdx = historyIndex + 1;
        if (newIdx < commandHistory.length) {
          setHistoryIndex(newIdx);
          setInputVal(commandHistory[newIdx]);
        } else {
          setHistoryIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="w-full h-full flex flex-col font-mono text-xs md:text-sm">
      {/* Mobile toggle button */}
      <div className="lg:hidden mb-2">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between px-3 py-2 bg-cyber-card/90 border border-cyber-border rounded-lg text-cyber-green text-xs"
        >
          <span className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyber-green" />
            <span className="font-semibold">Interactive Terminal</span>
            <span className="text-[10px] text-cyber-text-secondary bg-cyber-green/10 px-2 py-0.5 rounded">
              {isMobileOpen ? 'Click to collapse' : 'Click to launch terminal'}
            </span>
          </span>
          <span className="text-cyber-green font-mono">{isMobileOpen ? '▲' : '▼'}</span>
        </button>
      </div>

      {/* Main Terminal Window Frame */}
      <div 
        onClick={focusInput}
        className={`
          flex flex-col flex-1 bg-[#05090f]/95 backdrop-blur-md rounded-xl border border-cyber-border
          shadow-terminal transition-all duration-300 relative overflow-hidden group hover:border-cyber-border-bright
          ${isExpanded ? 'fixed inset-4 z-50 bg-[#05090f]' : 'h-[360px] md:h-[420px] lg:h-[480px]'}
          ${isMobileOpen ? 'block' : 'hidden lg:flex'}
        `}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a111c] border-b border-cyber-border/70 select-none">
          <div className="flex items-center gap-2">
            {/* macOS window controls */}
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block border border-[#e0443e]/40 shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block border border-[#dea123]/40 shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block border border-[#1aab29]/40 shadow-sm"></span>
            </div>
            
            <div className="flex items-center gap-1.5 text-cyber-text-secondary text-xs">
              <Terminal className="w-3.5 h-3.5 text-cyber-green" />
              <span className="text-cyber-green font-semibold">amit@portfolio</span>
              <span className="text-cyber-text-muted">:</span>
              <span className="text-cyber-cyan">~ (bash)</span>
            </div>
          </div>

          {/* Quick Action controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); clearTerminal(); }}
              title="Clear terminal buffer (cls)"
              className="p-1 rounded text-cyber-text-secondary hover:text-cyber-green hover:bg-cyber-green/10 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
              title={isExpanded ? "Restore size" : "Expand full screen"}
              className="p-1 rounded text-cyber-text-secondary hover:text-cyber-cyan hover:bg-cyber-cyan/10 transition-colors hidden sm:block"
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 text-cyber-text-primary scrollbar-thin">
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {/* System message */}
              {item.type === 'system' && (
                <div className="text-cyber-cyan/90 text-xs flex items-center gap-1.5">
                  <span className="text-cyber-green">❯</span>
                  <span>{item.message}</span>
                </div>
              )}

              {/* Tip message */}
              {item.type === 'tip' && (
                <div className="text-cyber-text-secondary text-xs bg-cyber-card/60 border border-cyber-border/40 px-2.5 py-1.5 rounded my-1">
                  <span className="text-cyber-green font-bold mr-1.5">⚡</span>
                  {item.message}
                </div>
              )}

              {/* User prompt execution line */}
              {item.type === 'prompt' && (
                <div className="flex items-center gap-2 text-cyber-green font-bold mt-2">
                  <span className="text-cyber-cyan">amit@portfolio:~$</span>
                  <span className="text-white">{item.command}</span>
                </div>
              )}

              {/* Help command output */}
              {item.type === 'help' && (
                <div className="mt-2 mb-2 p-2.5 bg-black/40 rounded border border-cyber-border/40 space-y-1">
                  <div className="text-cyber-green text-xs font-semibold mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AVAILABLE COMMANDS:</span>
                  </div>
                  <div className="grid grid-cols-1 gap-1 text-xs">
                    {item.content.map((c, cIdx) => (
                      <div 
                        key={cIdx} 
                        onClick={() => executeCommand(c.command)}
                        className="flex flex-col sm:flex-row sm:items-center justify-between py-0.5 hover:bg-cyber-green/10 px-1 rounded cursor-pointer transition-colors"
                      >
                        <span className="text-cyber-green font-bold">{c.command}</span>
                        <span className="text-cyber-text-secondary text-[11px]">{c.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* About command output */}
              {item.type === 'about' && (
                <div className="mt-2 p-3 bg-cyber-card/70 border border-cyber-green/30 rounded text-xs space-y-2">
                  <div className="text-cyber-green font-bold text-sm">{item.data.name}</div>
                  <div className="text-cyber-cyan text-xs">{item.data.title}</div>
                  <p className="text-cyber-text-primary leading-relaxed">{item.data.description}</p>
                  <div className="text-[11px] text-cyber-text-secondary pt-1 border-t border-cyber-border/40">
                    📍 {item.data.location} | 🎓 {item.data.education.degree} ({item.data.education.institution})
                  </div>
                </div>
              )}

              {/* Skills command output */}
              {item.type === 'skills' && (
                <div className="mt-2 p-3 bg-cyber-card/70 border border-cyber-cyan/30 rounded text-xs space-y-2">
                  <div className="text-cyber-cyan font-bold mb-1">⚡ VERIFIED TECHNICAL COMPETENCIES</div>
                  {item.categories.map((cat, catIdx) => (
                    <div key={catIdx} className="space-y-1">
                      <span className="text-cyber-green font-semibold text-[11px]">[{cat.name}]:</span>
                      <div className="flex flex-wrap gap-1">
                        {cat.skills.map((s, sIdx) => (
                          <span key={sIdx} className="bg-black/60 border border-cyber-border text-cyber-text-primary text-[10px] px-1.5 py-0.5 rounded">
                            {s.name} <span className="text-cyber-cyan/70 text-[9px]">({s.level})</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Projects command output */}
              {item.type === 'projects' && (
                <div className="mt-2 space-y-2">
                  <div className="text-cyber-green font-bold text-xs">🚀 FEATURED PRODUCTION PROJECTS:</div>
                  {item.projects.map((proj, pIdx) => (
                    <div key={pIdx} className="p-2.5 bg-black/60 border border-cyber-border/60 rounded text-xs hover:border-cyber-green/40 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-cyber-green font-bold">{proj.title}</span>
                        {proj.featured && (
                          <span className="text-[10px] px-1.5 py-0.2 bg-cyber-green/20 text-cyber-green border border-cyber-green/40 rounded">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-cyber-text-secondary text-[11px] my-1">{proj.description}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {proj.tags.map((t, tIdx) => (
                          <span key={tIdx} className="text-[9px] px-1 py-0.2 bg-cyber-cyan/10 text-cyber-cyan rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                      {proj.githubUrl && (
                        <div className="mt-2">
                          <a 
                            href={proj.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] text-cyber-green hover:underline"
                          >
                            <span>Inspect Source</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Experience command output */}
              {item.type === 'experience' && (
                <div className="mt-2 p-3 bg-cyber-card/70 border border-cyber-border rounded text-xs space-y-3">
                  <div className="text-cyber-green font-bold">💼 PROFESSIONAL EXPERIENCE</div>
                  {item.experience.map((exp, eIdx) => (
                    <div key={eIdx} className="border-l-2 border-cyber-green pl-2.5 space-y-1">
                      <div className="flex justify-between">
                        <span className="text-white font-bold">{exp.role} @ {exp.company}</span>
                        <span className="text-cyber-text-secondary text-[11px]">{exp.period}</span>
                      </div>
                      <ul className="list-disc list-inside text-cyber-text-secondary text-[11px] space-y-0.5">
                        {exp.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="text-cyber-cyan font-bold pt-2 border-t border-cyber-border/40">🎓 EDUCATION</div>
                  {item.education.map((edu, edIdx) => (
                    <div key={edIdx} className="text-[11px] text-cyber-text-secondary">
                      <span className="text-white font-medium">{edu.degree}</span> — {edu.institution} ({edu.period})
                    </div>
                  ))}
                </div>
              )}

              {/* Contact command output */}
              {item.type === 'contact' && (
                <div className="mt-2 p-3 bg-cyber-card/70 border border-cyber-green/30 rounded text-xs space-y-1.5">
                  <div className="text-cyber-green font-bold text-xs mb-1">📡 VERIFIED DIRECT CHANNELS:</div>
                  <div className="text-cyber-text-primary">
                    <span className="text-cyber-text-secondary">Email:</span>{' '}
                    <a href={`mailto:${item.data.email}`} className="text-cyber-cyan hover:underline">{item.data.email}</a>
                  </div>
                  <div className="text-cyber-text-primary">
                    <span className="text-cyber-text-secondary">Phone:</span>{' '}
                    <a href={`tel:${item.data.phone}`} className="text-cyber-cyan hover:underline">{item.data.phone}</a>
                  </div>
                  <div className="text-cyber-text-primary">
                    <span className="text-cyber-text-secondary">Location:</span> {item.data.location}
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <a href={item.data.github} target="_blank" rel="noopener noreferrer" className="text-cyber-green hover:underline flex items-center gap-1">
                      <span>GitHub</span> <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href={item.data.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyber-cyan hover:underline flex items-center gap-1">
                      <span>LinkedIn</span> <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              {/* Status diagnostics output */}
              {item.type === 'status' && (
                <div className="mt-2 p-3 bg-black/60 border border-cyber-border rounded text-xs space-y-2">
                  <div className="text-cyber-green font-bold flex items-center justify-between">
                    <span>SYSTEM DIAGNOSTICS</span>
                    <span className="text-[10px] text-cyber-cyan">{item.systemStatus.environment}</span>
                  </div>
                  <div className="space-y-1 text-[11px]">
                    {item.systemStatus.services.map((svc, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between py-0.5 border-b border-cyber-border/30">
                        <span className="text-cyber-text-primary">{svc.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-cyber-green font-mono">{svc.ping}</span>
                          <span className="text-[10px] px-1.5 py-0.2 bg-cyber-green/10 text-cyber-green rounded">{svc.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-[10px] text-cyber-text-secondary pt-1">
                    Branch: <span className="text-cyber-cyan">{item.systemStatus.buildBranch}</span> | Protocol: {item.systemStatus.protocol}
                  </div>
                </div>
              )}

              {/* Text, error, warning, success outputs */}
              {item.type === 'text' && (
                <div className="text-cyber-text-primary text-xs">{item.message}</div>
              )}
              {item.type === 'success' && (
                <div className="text-cyber-green text-xs flex items-center gap-1">
                  <span>✔</span>
                  <span>{item.message}</span>
                </div>
              )}
              {item.type === 'warning' && (
                <div className="text-amber-400 text-xs">{item.message}</div>
              )}
              {item.type === 'error' && (
                <div className="text-red-400 text-xs flex items-center gap-1">
                  <span>✖</span>
                  <span>{item.message}</span>
                </div>
              )}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Command Input Prompt Form */}
        <form 
          onSubmit={handleSubmit}
          className="flex items-center gap-2 px-3 py-2.5 bg-[#090f18] border-t border-cyber-border"
        >
          <span className="text-cyber-green font-bold text-xs select-none">amit@portfolio:~$</span>
          <div className="relative flex-1 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help' or command..."
              aria-label="Terminal command prompt"
              autoComplete="off"
              spellCheck="false"
              className="w-full bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-cyber-text-muted/60"
            />
            <span className="terminal-cursor text-cyber-green ml-0.5 select-none font-bold">▋</span>
          </div>
          <button 
            type="submit" 
            aria-label="Submit command"
            className="text-cyber-text-secondary hover:text-cyber-green transition-colors p-1"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
