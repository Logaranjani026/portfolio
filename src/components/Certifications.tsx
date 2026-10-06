import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Info, FileCode } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative bg-dark-900/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>CREDENTIALS & COURSEWORK</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Certifications & <span className="text-gradient-cyan">Verified Learning</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Continuous professional coursework and certifications in Prompt Engineering, LLM architectures, and software development.
          </p>
        </div>

        {/* Customization Note Box */}
        <div className="glass-card rounded-2xl p-4 sm:p-5 border border-cyan-500/30 mb-10 max-w-4xl mx-auto flex items-start gap-3.5 bg-gradient-to-r from-cyan-950/20 to-dark-950">
          <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300">
            <strong className="text-cyan-300 font-semibold block mb-1">
              Customization Guide for Logaranjani:
            </strong>
            To add your verified certificates, open <code className="text-cyan-300 bg-dark-950 px-1.5 py-0.5 rounded border border-white/10 font-mono">src/data/certifications.ts</code> and update the course titles, issuers, and your live certificate links.
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 text-slate-400 border border-white/5">
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-xs text-cyan-400 font-medium mb-4">
                  {cert.issuer}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-white/5">
                {cert.isPlaceholder ? (
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <FileCode className="w-3 h-3 text-cyan-400" /> [ADD CREDENTIAL]
                    </span>
                    <span className="text-[10px] text-cyan-400">Editable in code</span>
                  </div>
                ) : (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
