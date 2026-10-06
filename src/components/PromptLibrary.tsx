import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  BookMarked, 
  Search, 
  Copy, 
  Check, 
  SlidersHorizontal, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Terminal,
  Tag
} from 'lucide-react';
import { promptLibraryData } from '../data/promptLibrary';
import type { LibraryPrompt } from '../types';
import { useToast } from './Toast';

const categories = [
  'All',
  'Content Creation',
  'Coding',
  'Learning',
  'Research',
  'Productivity',
  'AI Agents',
  'Data Analysis'
] as const;

const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'] as const;

export const PromptLibrary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [expandedPromptId, setExpandedPromptId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { showToast } = useToast();

  const filteredPrompts = useMemo(() => {
    return promptLibraryData.filter((prompt) => {
      // Category filter
      if (selectedCategory !== 'All' && prompt.category !== selectedCategory) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== 'All' && prompt.difficulty !== selectedDifficulty) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = prompt.title.toLowerCase().includes(query);
        const matchesUseCase = prompt.useCase.toLowerCase().includes(query);
        const matchesTags = prompt.tags.some((t) => t.toLowerCase().includes(query));
        const matchesPrompt = prompt.prompt.toLowerCase().includes(query);
        return matchesTitle || matchesUseCase || matchesTags || matchesPrompt;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const handleCopy = (prompt: LibraryPrompt) => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopiedId(prompt.id);
    showToast(`Copied "${prompt.title}" to clipboard!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedPromptId(expandedPromptId === id ? null : id);
  };

  return (
    <section id="prompt-library" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3">
            <BookMarked className="w-3.5 h-3.5 text-cyan-400" />
            <span>REUSABLE PROMPT BLUEPRINTS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Curated <span className="text-gradient-cyan">Prompt Library</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            A searchable vault of production-tested prompt templates. Copy in one click, insert your variables, and accelerate your AI interactions.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="glass-card rounded-2xl p-5 border border-white/10 mb-10 space-y-4">
          
          {/* Top row: Search input + Difficulty filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search prompts by keyword, topic, tag (e.g., 'TypeScript', 'RFC', 'Feynman')..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 focus:border-cyan-400 focus:outline-none text-xs sm:text-sm text-slate-200 placeholder-slate-500 transition-colors"
              />
            </div>

            {/* Difficulty Selector */}
            <div className="flex items-center gap-1.5 shrink-0 bg-dark-950 p-1 rounded-xl border border-white/10 overflow-x-auto">
              <span className="text-[11px] font-mono text-slate-400 px-2 flex items-center gap-1">
                <SlidersHorizontal className="w-3 h-3 text-cyan-400" /> Level:
              </span>
              {difficulties.map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    selectedDifficulty === diff
                      ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-glow-cyan font-semibold'
                    : 'bg-dark-950/70 text-slate-400 hover:text-slate-200 border border-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-6">
          <span>Showing {filteredPrompts.length} prompt {filteredPrompts.length === 1 ? 'template' : 'templates'}</span>
          {(searchQuery || selectedCategory !== 'All' || selectedDifficulty !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedDifficulty('All');
              }}
              className="text-cyan-400 hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPrompts.map((item, idx) => {
            const isExpanded = expandedPromptId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-dark-950 text-cyan-300 border border-cyan-500/20">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      {item.category}
                    </span>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        item.difficulty === 'Beginner'
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                          : item.difficulty === 'Intermediate'
                          ? 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                          : 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                      }`}
                    >
                      {item.difficulty}
                    </span>
                  </div>

                  {/* Title & Use Case */}
                  <h3 className="font-display font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{item.useCase}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 flex items-center gap-1">
                        <Tag className="w-2.5 h-2.5 text-cyan-400/60" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Prompt Preview / Full View */}
                  <div className="p-3.5 rounded-xl bg-dark-950 border border-white/10 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed relative overflow-hidden mb-4">
                    <div className="flex items-center gap-1 text-[10px] text-cyan-400 font-bold mb-1.5 uppercase tracking-wider">
                      <Terminal className="w-3 h-3" /> Template Body:
                    </div>
                    {isExpanded ? item.prompt : `${item.prompt.slice(0, 180)}...`}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>{isExpanded ? 'Collapse' : 'Expand Prompt'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => handleCopy(item)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-200 bg-dark-950 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-all shadow-sm"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
