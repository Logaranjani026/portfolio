import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Layers, Cpu, Repeat, Code2, Compass, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>ABOUT ME & MY JOURNEY</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Building with <span className="text-gradient-cyan">Curiosity, Structure, & Code.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            I believe effective Prompt Engineering is not about magic words; it is the discipline of specifying precise software behaviors through structured language models.
          </p>
        </div>

        {/* Main Grid: Narrative + Currently Learning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="font-display font-bold text-xl text-white mb-4 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>My Story & Approach</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {profileData.detailedBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Status banner */}
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <p className="text-xs font-mono text-slate-300">
                  <strong className="text-emerald-400 font-semibold">Current Status:</strong> {profileData.status}
                </p>
              </div>
            </div>

            {/* Philosophy Mini Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {profileData.philosophy.map((item, idx) => (
                <div key={idx} className="glass-card rounded-xl p-4 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                      {item.icon === 'Layers' && <Layers className="w-4 h-4" />}
                      {item.icon === 'Repeat' && <Repeat className="w-4 h-4" />}
                      {item.icon === 'Cpu' && <Cpu className="w-4 h-4" />}
                    </div>
                    <h4 className="font-semibold text-white text-xs sm:text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Currently Learning Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-cyan-500/30 shadow-glow-cyan relative overflow-hidden bg-gradient-to-b from-dark-900/90 to-dark-950">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Currently Learning</h3>
                    <p className="text-[11px] font-mono text-purple-300">Active Skill Sprint 2026</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-purple-500/20 text-purple-200 border border-purple-500/30">
                  Continuous
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                As a dedicated beginner, I spend focused time each week studying, coding, and testing frontier LLM capabilities:
              </p>

              <div className="space-y-2.5">
                {profileData.currentlyLearning.map((topic, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-dark-950/60 border border-white/5 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-md bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-medium text-slate-200">{topic}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 font-mono">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  No fake claims
                </span>
                <span className="text-cyan-400 font-mono text-[11px]">100% Honest Positioning</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
