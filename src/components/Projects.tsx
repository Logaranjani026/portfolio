import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Sparkles, ArrowRight, ExternalLink, Layers, CheckCircle } from 'lucide-react';
import { projectsData } from '../data/projects';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';

const categories = ['All', 'Prompt Engineering', 'Generative AI', 'AI Application', 'AI / IoT'] as const;

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Featured <span className="text-gradient-cyan">AI Projects & Experiments</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Real, practical implementations demonstrating prompt optimization, structured AI outputs, cognitive scaffolds, and hardware-software safety logic.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-dark-950 shadow-glow-cyan font-bold'
                  : 'bg-dark-900/80 border border-white/10 text-slate-400 hover:text-slate-200 hover:bg-dark-850'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    <Sparkles className="w-3 h-3" />
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-dark-950 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/30 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-dark-950 border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                        title="Open Live Prototype"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Short Description */}
                <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {project.shortDescription}
                </p>

                {/* Problem / Solution Snapshot */}
                <div className="p-3.5 rounded-xl bg-dark-950/70 border border-white/5 space-y-2 mb-5">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-red-400 font-bold block">
                      Problem:
                    </span>
                    <p className="text-xs text-slate-400 line-clamp-2">{project.problem}</p>
                  </div>
                  <div className="pt-2 border-t border-white/5">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                      Solution:
                    </span>
                    <p className="text-xs text-slate-300 line-clamp-2">{project.solution}</p>
                  </div>
                </div>

                {/* Techniques Badges */}
                <div className="mb-5">
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 mb-2">
                    <Layers className="w-3 h-3 text-cyan-400" /> Prompting Focus:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.promptTechniques.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-900 border border-white/10 text-slate-300"
                      >
                        {tech.split('(')[0]}
                      </span>
                    ))}
                    {project.promptTechniques.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-dark-900 text-slate-500">
                        +{project.promptTechniques.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer: Deep Dive Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                  <CheckCircle className="w-3 h-3" />
                  <span>Tested & Documented</span>
                </div>

                <button
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all group-hover:shadow-glow-cyan"
                >
                  <span>Architecture & Prompts</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
