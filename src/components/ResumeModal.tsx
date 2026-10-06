import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, CheckCircle2, Info, Mail } from 'lucide-react';
import { profileData } from '../data/profile';
import { socialLinks } from '../data/socialLinks';
import { skillsData } from '../data/skills';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="glass-card rounded-2xl border border-cyan-500/40 w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl p-6 sm:p-8 relative bg-dark-900"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-dark-950 border border-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close resume modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pr-10">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">{profileData.name} — Resume Snapshot</h3>
              <p className="text-xs font-mono text-cyan-400">{profileData.tagline}</p>
            </div>
          </div>

          {/* Customization Tip */}
          <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-6 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p className="text-xs text-cyan-200">
              <strong>Customization note:</strong> Place your real PDF in <code className="text-cyan-300 font-mono">public/resume.pdf</code> or update <code className="text-cyan-300 font-mono">socialLinks.resumeUrl</code> in <code className="text-cyan-300 font-mono">src/data/socialLinks.ts</code>.
            </p>
          </div>

          {/* Quick Summary Preview */}
          <div className="p-5 rounded-xl bg-dark-950/80 border border-white/10 space-y-4 mb-6">
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                Executive Profile Summary
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {profileData.shortBio}
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-2">
                Core Competencies & Focus
              </span>
              <div className="flex flex-wrap gap-1.5">
                {skillsData.flatMap((c) => c.skills.slice(0, 3)).map((s, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-900 border border-white/10 text-slate-300">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                Currently Learning & Refining
              </span>
              <ul className="space-y-1">
                {profileData.currentlyLearning.slice(0, 4).map((topic, idx) => (
                  <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <a
                href={socialLinks.resumeUrl === '#resume' ? '#' : socialLinks.resumeUrl}
                download="Logaranjani_Resume.pdf"
                onClick={(e) => {
                  if (socialLinks.resumeUrl === '#resume') {
                    e.preventDefault();
                    alert('Please add your resume PDF to public/resume.pdf or update socialLinks.resumeUrl in src/data/socialLinks.ts!');
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-dark-950 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 shadow-glow-cyan transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Resume</span>
              </a>

              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-dark-950 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Directly</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
