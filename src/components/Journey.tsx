import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, CheckCircle2, Clock } from 'lucide-react';
import { journeyTimeline } from '../data/journey';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3">
            <Milestone className="w-3.5 h-3.5 text-cyan-400" />
            <span>GROWTH TRAJECTORY</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            My Learning <span className="text-gradient-cyan">Journey & Milestones</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            A chronological roadmap of how I started, what I built, and the advanced agentic systems I am actively learning today.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-32 space-y-12 pb-6">
          {journeyTimeline.map((item, idx) => {
            const isCompleted = item.status === 'Completed';
            const isInProgress = item.status === 'In Progress';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Milestone Node on vertical line */}
                <div
                  className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                    isCompleted
                      ? 'bg-dark-950 border-cyan-400 text-cyan-400 shadow-glow-cyan'
                      : isInProgress
                      ? 'bg-dark-950 border-purple-400 text-purple-400 shadow-glow-purple animate-pulse'
                      : 'bg-dark-950 border-slate-700 text-slate-600'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <Clock className="w-4 h-4" />
                  )}
                </div>

                {/* Left Year Badge for large screens */}
                <div className="sm:absolute sm:-left-32 sm:top-1.5 sm:w-24 sm:text-right hidden sm:block">
                  <span className="font-mono text-xs font-bold text-cyan-400">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">
                    {item.period}
                  </span>
                </div>

                {/* Milestone Card Content */}
                <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-cyan-500/30 transition-all">
                  
                  {/* Status & Mobile Year Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="sm:hidden text-xs font-mono text-cyan-400 font-bold">
                      {item.year} • {item.period}
                    </span>
                    
                    <span
                      className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                        isCompleted
                          ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                          : 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-white/5">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-cyan-400 font-bold">›</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
