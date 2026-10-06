import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, Terminal, Copy, Check, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import type { Project } from '../types';
import { GithubIcon } from './Icons';
import { useToast } from './Toast';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const { showToast } = useToast();

  if (!project) return null;

  const handleCopyPrompt = () => {
    if (project.samplePromptSnippet) {
      navigator.clipboard.writeText(project.samplePromptSnippet);
      setCopiedPrompt(true);
      showToast('Copied project prompt blueprint to clipboard!');
      setTimeout(() => setCopiedPrompt(false), 2500);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="glass-card rounded-2xl border border-cyan-500/40 w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl p-6 sm:p-8 relative bg-dark-900"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-dark-950 border border-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Title */}
          <div className="pr-12 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              {project.category}
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-dark-950/80 border border-red-500/20">
              <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider block mb-2">
                Problem Statement
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-dark-950/80 border border-emerald-500/20">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                Engineered Solution
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Workflow Pipeline if present */}
          {project.pipeline && (
            <div className="mb-6">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-3">
                Execution Workflow & Architecture
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {project.pipeline.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-dark-950 border border-white/10 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-semibold text-cyan-300 mb-1 block">
                        {step.step}
                      </span>
                      <p className="text-xs text-slate-300 leading-normal">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prompting Techniques & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-dark-950/80 border border-white/10">
              <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5 mb-3">
                <Layers className="w-3.5 h-3.5" /> Prompting Techniques Used
              </span>
              <ul className="space-y-2">
                {project.promptTechniques.map((tech, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-dark-950/80 border border-white/10">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5 mb-3">
                <Cpu className="w-3.5 h-3.5" /> Tools & Environment
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-dark-900 border border-white/10 text-xs font-mono text-slate-200">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-white/5">
                <span className="text-[11px] font-mono text-emerald-400 block font-semibold mb-1">
                  Validated Result:
                </span>
                <p className="text-xs text-slate-300">{project.result}</p>
              </div>
            </div>
          </div>

          {/* Sample Prompt Snippet if available */}
          {project.samplePromptSnippet && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" /> Core Prompt Blueprint
                </span>
                <button
                  onClick={handleCopyPrompt}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-dark-950 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  {copiedPrompt ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Copy Blueprint</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-dark-950 border border-white/10 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto custom-scrollbar">
                {project.samplePromptSnippet}
              </div>
            </div>
          )}

          {/* Modal Footer Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-dark-950 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-dark-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-glow-cyan"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Prototype</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-dark-950 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Close Project
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
