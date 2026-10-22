import React from 'react';
import { Activity, ShieldCheck, GitBranch, Cpu, Server } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolioConfig';

export const SystemStatusPanel = () => {
  const { systemStatus, currentFocus } = portfolioConfig;

  return (
    <div className="bg-[#070b13]/90 border border-cyber-border rounded-xl p-4 font-mono text-xs shadow-cyber-card space-y-3.5 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-cyber-border/60 pb-2">
        <div className="flex items-center gap-2 text-cyber-green">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span className="font-bold tracking-wider text-[11px] uppercase">DEV_ENVIRONMENT STATUS</span>
        </div>
        <span className="text-[10px] text-cyber-text-muted bg-cyber-card px-2 py-0.5 rounded border border-cyber-border/40">
          Client Telemetry
        </span>
      </div>

      {/* Verified Status Rows */}
      <div className="space-y-2">
        {systemStatus.services.map((svc) => (
          <div key={svc.id} className="flex items-center justify-between text-[11px] py-1 border-b border-cyber-border/20 last:border-0">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${svc.indicator === 'emerald' ? 'bg-cyber-green shadow-[0_0_8px_rgba(0,255,102,0.8)]' : 'bg-cyber-cyan shadow-[0_0_8px_rgba(0,240,255,0.8)]'}`}></span>
              <span className="text-cyber-text-primary font-medium">{svc.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyber-cyan font-mono text-[10px]">{svc.ping}</span>
              <span className="text-cyber-text-secondary text-[10px] bg-black/40 px-1.5 py-0.5 rounded border border-cyber-border/40">
                {svc.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Meta indicators */}
      <div className="pt-1 flex items-center justify-between text-[10px] text-cyber-text-muted border-t border-cyber-border/40">
        <div className="flex items-center gap-1">
          <GitBranch className="w-3 h-3 text-cyber-green" />
          <span>branch: <span className="text-cyber-green font-semibold">main</span></span>
        </div>
        <div className="flex items-center gap-1">
          <Server className="w-3 h-3 text-cyber-cyan" />
          <span>edge: <span className="text-cyber-cyan font-semibold">Vite+React</span></span>
        </div>
      </div>

      {/* Current Focus subsection */}
      <div className="pt-2 border-t border-cyber-border/60">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-cyber-cyan font-bold text-[10px] uppercase flex items-center gap-1">
            <Cpu className="w-3 h-3 text-cyber-cyan" />
            <span>{currentFocus.title}</span>
          </span>
          <span className="text-[9px] text-cyber-green bg-cyber-green/10 border border-cyber-green/30 px-1.5 py-0.2 rounded font-mono">
            {currentFocus.badge}
          </span>
        </div>
        <p className="text-[11px] text-cyber-text-secondary leading-relaxed">
          {currentFocus.items[0]}
        </p>
      </div>
    </div>
  );
};
