import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal, FileText, CheckCircle, RefreshCw, Cpu, Layers, Zap } from 'lucide-react';
import { profileData } from '../data/profile';

interface HeroProps {
  onOpenResume: () => void;
}

const heroDemos = [
  {
    mode: "Structured Output",
    inputPrompt: "Extract action items, priority & owner from meeting transcript.",
    model: "Claude 3.5 Sonnet",
    temperature: "0.2 (Deterministic)",
    output: `{
  "status": "PROCESSED",
  "actionItems": [
    { "task": "Ship Prompt Lab v1.0", "owner": "Logaranjani", "priority": "CRITICAL" },
    { "task": "Benchmark few-shot cases", "owner": "AI Core", "priority": "HIGH" }
  ],
  "confidenceScore": 0.99
}`
  },
  {
    mode: "Role & Tone Engine",
    inputPrompt: "Explain Prompt Engineering to a non-technical recruiter in 2 sentences.",
    model: "GPT-4o",
    temperature: "0.4 (Calibrated)",
    output: `"Prompt engineering is the craft of designing clear, structured instructions and constraints so AI models produce reliable, production-grade results instead of vague guesses. Think of it as writing precise software blueprints using natural language."`
  },
  {
    mode: "Safety & Constraints",
    inputPrompt: "Summarize API changelog under 30 words without buzzwords.",
    model: "Gemini 1.5 Pro",
    temperature: "0.0 (Strict)",
    output: `"Updated endpoint authentication to require Bearer tokens with SHA-256 signatures. Fixed rate limiting on batch exports. Response times reduced by 40ms."`
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeDemoIndex, setActiveDemoIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const currentDemo = heroDemos[activeDemoIndex];

  useEffect(() => {
    setIsSimulating(true);
    setDisplayedText("");
    let currentIdx = 0;
    const targetText = currentDemo.output;

    const interval = setInterval(() => {
      if (currentIdx < targetText.length) {
        setDisplayedText(targetText.slice(0, currentIdx + 4));
        currentIdx += 4;
      } else {
        setDisplayedText(targetText);
        setIsSimulating(false);
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [activeDemoIndex]);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Brand & Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Label Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold tracking-wider uppercase mb-6 shadow-glow-cyan">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>{profileData.tagline}</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-6">
              Turning Ideas Into <br className="hidden sm:inline" />
              <span className="text-gradient-cyan">Better AI Interactions.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              {profileData.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-dark-950 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 transition-all shadow-glow-cyan group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-dark-900/90 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-dark-850 transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>

              <a
                href="#prompt-lab"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-xs text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Terminal className="w-4 h-4 text-purple-400" />
                <span>Try Prompt Lab →</span>
              </a>
            </div>

            {/* Quick Metrics / Signals */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 w-full">
              {profileData.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-cyan-400">{stat.label}</span>
                  <span className="text-[11px] text-slate-400">{stat.subtext}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Prompt Flow Engine Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-2xl glass-card p-5 sm:p-6 shadow-glass border border-white/10 overflow-hidden">
              {/* Top Bar with Mode Switchers */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    prompt_engine_v1.0
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    Live Simulator
                  </span>
                </div>
              </div>

              {/* Demo selector pills */}
              <div className="flex items-center gap-1.5 mb-4 overflow-x-auto pb-1 custom-scrollbar">
                {heroDemos.map((demo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveDemoIndex(idx)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                      activeDemoIndex === idx
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'bg-dark-900/60 text-slate-400 hover:text-slate-200 border border-white/5'
                    }`}
                  >
                    {demo.mode}
                  </button>
                ))}
              </div>

              {/* Input Prompt Section */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                  <span className="flex items-center gap-1 text-cyan-400 font-semibold">
                    <Zap className="w-3 h-3" /> Input Objective
                  </span>
                  <span>temp: {currentDemo.temperature}</span>
                </div>
                <div className="p-3 rounded-xl bg-dark-950/80 border border-white/10 text-xs font-mono text-slate-200 leading-relaxed">
                  <span className="text-cyan-400 font-bold">&gt; </span>
                  {currentDemo.inputPrompt}
                </div>
              </div>

              {/* Flow Pipeline Node */}
              <div className="flex items-center justify-center my-3">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900/90 border border-purple-500/30 text-[10px] font-mono text-purple-300 shadow-glow-purple">
                  <Layers className="w-3 h-3 text-purple-400" />
                  <span>Model: {currentDemo.model}</span>
                  {isSimulating ? (
                    <RefreshCw className="w-3 h-3 animate-spin text-cyan-400" />
                  ) : (
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  )}
                </div>
              </div>

              {/* Output Stream Section */}
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <Sparkles className="w-3 h-3" /> Structured Observable Output
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">tokens: 142</span>
                </div>
                <div className="p-3.5 rounded-xl bg-dark-950/90 border border-cyan-500/20 text-xs font-mono text-slate-300 min-h-[140px] max-h-[170px] overflow-y-auto custom-scrollbar whitespace-pre-wrap leading-relaxed shadow-inner">
                  {displayedText}
                  {isSimulating && (
                    <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse align-middle" />
                  )}
                </div>
              </div>

              {/* Footer Indicator */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Deterministic schema enforced</span>
                <span className="text-cyan-400 hover:underline cursor-pointer" onClick={() => setActiveDemoIndex((prev) => (prev + 1) % heroDemos.length)}>
                  Next Scenario →
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
