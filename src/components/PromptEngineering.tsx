import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Workflow, 
  Sparkles, 
  ArrowRight, 
  FileCode, 
  GitMerge, 
  CheckCircle, 
  Copy, 
  Check, 
  X, 
  Terminal,
  Target,
  Maximize2
} from 'lucide-react';
import { promptTechniques } from '../data/techniques';
import type { PromptTechnique } from '../types';
import { useToast } from './Toast';

const workflowSteps = [
  { step: "1. USER GOAL", desc: "Define explicit objective & user requirements", icon: Target, color: "text-cyan-400" },
  { step: "2. STRUCTURED PROMPT", desc: "Inject Role, Context, Constraints, & Format", icon: FileCode, color: "text-blue-400" },
  { step: "3. LLM INFERENCE", desc: "Frontier model processes token context", icon: Sparkles, color: "text-purple-400" },
  { step: "4. OBSERVABLE OUTPUT", desc: "Evaluate initial response against schema", icon: Terminal, color: "text-amber-400" },
  { step: "5. ITERATIVE REFINEMENT", desc: "Empirically tune constraints & edge-cases", icon: GitMerge, color: "text-indigo-400" },
  { step: "6. PRODUCTION OUTPUT", desc: "Deterministic, deployable AI solution", icon: CheckCircle, color: "text-emerald-400" },
];

export const PromptEngineering: React.FC = () => {
  const [selectedTechnique, setSelectedTechnique] = useState<PromptTechnique | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { showToast } = useToast();

  const handleCopy = (id: string, text: string, name: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    showToast(`Copied ${name} template to clipboard!`);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="prompt-engineering" className="py-20 relative bg-dark-900/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3">
            <Workflow className="w-3.5 h-3.5 text-cyan-400" />
            <span>METHODOLOGY & PATTERNS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            The Science of <span className="text-gradient-cyan">Prompt Engineering</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Prompt Engineering is not guessing keywords. It is a systematic, repeatable software workflow designed to achieve deterministic, reliable outcomes from non-deterministic models.
          </p>
        </div>

        {/* Visual Workflow Pipeline */}
        <div className="mb-20">
          <div className="text-center mb-6">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
              End-to-End Prompt Optimization Workflow
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-4 border border-white/10 flex flex-col items-start justify-between relative group hover:border-cyan-500/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between w-full mb-3">
                      <div className={`w-8 h-8 rounded-lg bg-dark-950 border border-white/10 flex items-center justify-center ${step.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">Step 0{idx + 1}</span>
                    </div>
                    <h3 className="font-mono font-bold text-xs text-white mb-1.5">{step.step}</h3>
                    <p className="text-[11px] text-slate-400 leading-normal">{step.desc}</p>
                  </div>

                  {/* Arrow for large screens */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400/70" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 8 Techniques Section */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-display font-bold text-2xl text-white">8 Core Prompting Techniques</h3>
              <p className="text-xs sm:text-sm text-slate-400">Tested and structured patterns used across modern LLM applications.</p>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
              Click any card to inspect prompt & output
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {promptTechniques.map((tech, idx) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedTechnique(tech)}
                className="glass-card rounded-2xl p-5 border border-white/10 hover:border-cyan-500/40 cursor-pointer group flex flex-col justify-between transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-dark-950 text-cyan-400 border border-cyan-500/20">
                      Technique 0{idx + 1}
                    </span>
                    <Maximize2 className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <h4 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {tech.name}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                    {tech.shortDesc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {tech.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Technique Detail Modal */}
      <AnimatePresence>
        {selectedTechnique && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-card rounded-2xl border border-cyan-500/40 w-full max-w-3xl max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl p-6 sm:p-8 relative bg-dark-900"
            >
              <button
                onClick={() => setSelectedTechnique(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-dark-950 border border-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="mb-6 pr-10">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>PROMPTING TECHNIQUE DEEP DIVE</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">{selectedTechnique.name}</h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">{selectedTechnique.fullDesc}</p>
              </div>

              {/* When to use */}
              <div className="p-3.5 rounded-xl bg-dark-950/80 border border-white/10 mb-6">
                <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                  When to use this technique:
                </span>
                <p className="text-xs text-slate-300">{selectedTechnique.whenToUse}</p>
              </div>

              {/* Example Prompt Box */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-purple-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" /> Example Prompt Template
                  </span>
                  <button
                    onClick={() => handleCopy(selectedTechnique.id, selectedTechnique.examplePrompt, selectedTechnique.name)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-dark-950 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    {copiedId === selectedTechnique.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Copy Template</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-dark-950 border border-white/10 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed">
                  {selectedTechnique.examplePrompt}
                </div>
              </div>

              {/* Observable Output Box */}
              <div>
                <span className="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1.5 mb-2">
                  <CheckCircle className="w-3.5 h-3.5" /> Observable Output Characteristics
                </span>
                <div className="p-4 rounded-xl bg-dark-950/90 border border-emerald-500/20 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {selectedTechnique.observableOutput}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedTechnique(null)}
                  className="px-5 py-2 rounded-xl bg-dark-950 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  Close Deep Dive
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
