import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Layout, Bot, CheckCircle2, Cpu } from 'lucide-react';
import { skillsData } from '../data/skills';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Sparkles: Sparkles,
  Code2: Code2,
  Layout: Layout,
  Bot: Bot,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative bg-dark-900/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Skills & <span className="text-gradient-cyan">Tooling Ecosystem</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Categorized technical abilities with honest proficiency indicators. No inflated percentage bars—just transparent, verified competencies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, idx) => {
            const Icon = iconMap[category.iconName] || Sparkles;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">{category.category}</h3>
                      <p className="text-xs text-slate-400">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills Tag Cloud / Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-dark-950/80 border border-white/5 hover:border-cyan-500/30 transition-colors flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-semibold text-xs text-slate-200">{skill.name}</span>
                          <span
                            className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                              skill.level === 'Core'
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                                : skill.level === 'Practicing'
                                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                                : 'bg-slate-800 text-slate-400 border border-slate-700'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        {skill.note && (
                          <p className="text-[11px] text-slate-400 leading-tight">{skill.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer note */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1 text-slate-400">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" /> Hands-on Practiced
                  </span>
                  <span>{category.skills.length} competencies</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
