import React from 'react';
import { Terminal, ArrowUp, Mail } from 'lucide-react';
import { profileData } from '../data/profile';
import { socialLinks } from '../data/socialLinks';
import { LinkedinIcon, GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 relative overflow-hidden py-14">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/5 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-slate-950 font-bold font-mono text-xs shadow-glow-cyan">
                <Terminal className="w-4 h-4 text-slate-950" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                {profileData.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mb-4">
              {profileData.shortBio}
            </p>

            <div className="flex items-center gap-3">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-dark-900 border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-dark-900 border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${socialLinks.email}`}
                className="p-2 rounded-xl bg-dark-900 border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">About & Mindset</a>
              </li>
              <li>
                <a href="#prompt-engineering" className="hover:text-cyan-300 transition-colors">Prompt Engineering</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#prompt-lab" className="hover:text-cyan-300 transition-colors">Interactive Prompt Lab</a>
              </li>
              <li>
                <a href="#prompt-library" className="hover:text-cyan-300 transition-colors">Prompt Library</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills & Tooling</a>
              </li>
            </ul>
          </div>

          {/* Core Philosophy */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-3">
              Focus Areas
            </h4>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-dark-900 border border-white/10 text-slate-300">
                Structured Prompting
              </span>
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-dark-900 border border-white/10 text-slate-300">
                LLM Grounding
              </span>
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-dark-900 border border-white/10 text-slate-300">
                Few-Shot Learning
              </span>
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-dark-900 border border-white/10 text-slate-300">
                AI Coding Tools
              </span>
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-dark-900 border border-white/10 text-slate-300">
                React & TypeScript
              </span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 font-mono">
            <span>© 2026 {profileData.name}.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-slate-400">Built with curiosity, AI, and continuous learning.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900 border border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-all text-xs font-mono group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
