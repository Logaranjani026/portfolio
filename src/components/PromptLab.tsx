import React, { useState } from 'react';
import { 
  FlaskConical, 
  Copy, 
  Check, 
  AlertTriangle, 
  CheckCircle2, 
  SplitSquareVertical, 
  Lightbulb, 
  Terminal
} from 'lucide-react';
import { promptLabComparisons } from '../data/promptLabData';
import { useToast } from './Toast';

export const PromptLab: React.FC = () => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [showHighlightBreakdown, setShowHighlightBreakdown] = useState(true);
  const [activeOutputTab, setActiveOutputTab] = useState<'after' | 'before'>('after');
  const [copiedBefore, setCopiedBefore] = useState(false);
  const [copiedAfter, setCopiedAfter] = useState(false);
  const { showToast } = useToast();

  const currentScenario = promptLabComparisons[selectedScenarioIndex];

  const handleCopy = (type: 'before' | 'after') => {
    if (type === 'before') {
      navigator.clipboard.writeText(currentScenario.beforePrompt.text);
      setCopiedBefore(true);
      showToast('Copied baseline prompt to clipboard!');
      setTimeout(() => setCopiedBefore(false), 2000);
    } else {
      navigator.clipboard.writeText(currentScenario.afterPrompt.text);
      setCopiedAfter(true);
      showToast('Copied improved structured prompt to clipboard!');
      setTimeout(() => setCopiedAfter(false), 2000);
    }
  };

  return (
    <section id="prompt-lab" className="py-20 relative bg-dark-900/60 border-y border-white/5">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3">
            <FlaskConical className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE EXPERIMENT BENCH</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Interactive <span className="text-gradient-cyan">Prompt Lab</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            See the exact difference between naive prompts and engineered prompt frameworks. Compare input structures, constraints, and observable model outputs.
          </p>
        </div>

        {/* Scenario Selector Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 custom-scrollbar">
          {promptLabComparisons.map((scenario, idx) => (
            <button
              key={scenario.id}
              onClick={() => setSelectedScenarioIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap flex items-center gap-2 ${
                selectedScenarioIndex === idx
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-glow-cyan font-bold'
                  : 'bg-dark-950/80 text-slate-400 hover:text-slate-200 border border-white/10'
              }`}
            >
              <span>Case 0{idx + 1}:</span>
              <span>{scenario.title}</span>
            </button>
          ))}
        </div>

        {/* Scenario Description Banner */}
        <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
              Active Scenario: {currentScenario.category}
            </span>
            <p className="text-xs sm:text-sm text-slate-200">
              {currentScenario.scenario}
            </p>
          </div>

          <button
            onClick={() => setShowHighlightBreakdown(!showHighlightBreakdown)}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all shrink-0 ${
              showHighlightBreakdown
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-glow-purple'
                : 'bg-dark-950 text-slate-400 border border-white/10 hover:text-slate-200'
            }`}
          >
            <SplitSquareVertical className="w-3.5 h-3.5 text-purple-400" />
            <span>{showHighlightBreakdown ? 'Highlight Structure: ON' : 'Highlight Structure: OFF'}</span>
          </button>
        </div>

        {/* Side-by-Side Prompt Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* LEFT: Before Prompt (Naive) */}
          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-red-500/30 flex flex-col justify-between bg-gradient-to-b from-dark-900/90 to-red-950/20">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
                    <AlertTriangle className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-red-300">
                    Before: Naive / Vague Prompt
                  </h3>
                </div>

                <button
                  onClick={() => handleCopy('before')}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-dark-950 border border-white/10 hover:border-red-500/30 text-slate-300 hover:text-red-300 transition-colors"
                >
                  {copiedBefore ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-red-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Prompt Text */}
              <div className="p-3.5 rounded-xl bg-dark-950 border border-white/10 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed min-h-[140px] mb-4">
                {currentScenario.beforePrompt.text}
              </div>

              {/* Identified Weaknesses */}
              <div>
                <span className="text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider block mb-2">
                  Why this prompt underperforms:
                </span>
                <ul className="space-y-1.5">
                  {currentScenario.beforePrompt.issues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-red-400 font-bold">✕</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Risk: Hallucination & Generic Output</span>
              <span>Quality: Low</span>
            </div>
          </div>

          {/* RIGHT: Improved Prompt (Engineered) */}
          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-cyan-500/40 flex flex-col justify-between bg-gradient-to-b from-dark-900/90 to-cyan-950/20 shadow-glow-cyan">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-cyan-300">
                    Improved: Engineered Prompt
                  </h3>
                </div>

                <button
                  onClick={() => handleCopy('after')}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-dark-950 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  {copiedAfter ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-cyan-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Prompt Text with or without structure highlights */}
              <div className="p-3.5 rounded-xl bg-dark-950 border border-cyan-500/30 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed min-h-[140px] max-h-72 overflow-y-auto custom-scrollbar mb-4">
                {currentScenario.afterPrompt.text}
              </div>

              {/* Structured Elements Breakdown */}
              {showHighlightBreakdown && (
                <div className="p-3 rounded-xl bg-dark-950/90 border border-purple-500/30 space-y-2">
                  <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider block">
                    Structural Breakdown:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
                    <div className="p-2 rounded bg-dark-900 border border-white/5">
                      <strong className="text-cyan-400">[Role]:</strong> {currentScenario.afterPrompt.breakdown.role}
                    </div>
                    <div className="p-2 rounded bg-dark-900 border border-white/5">
                      <strong className="text-blue-400">[Context]:</strong> {currentScenario.afterPrompt.breakdown.context}
                    </div>
                    <div className="p-2 rounded bg-dark-900 border border-white/5 sm:col-span-2">
                      <strong className="text-purple-400">[Constraints]:</strong> {currentScenario.afterPrompt.breakdown.constraints.join(', ')}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-cyan-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Deterministic & Guardrailed
              </span>
              <span className="font-bold">Quality: High</span>
            </div>
          </div>

        </div>

        {/* Observable Output Comparison Showcase */}
        <div className="glass-card rounded-2xl p-6 border border-white/10 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <h3 className="font-display font-bold text-base text-white">
                Observable Output Comparison
              </h3>
            </div>

            <div className="flex items-center gap-2 bg-dark-950 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveOutputTab('after')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  activeOutputTab === 'after'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Engineered Output (Refined)
              </button>
              <button
                onClick={() => setActiveOutputTab('before')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  activeOutputTab === 'before'
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Naive Output (Generic)
              </button>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-dark-950 border border-white/10 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed min-h-[140px] max-h-80 overflow-y-auto custom-scrollbar">
            {activeOutputTab === 'after'
              ? currentScenario.afterPrompt.sampleOutput
              : currentScenario.beforePrompt.sampleOutput}
          </div>

          {/* Key Takeaway */}
          <div className="mt-4 p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-start gap-3">
            <Lightbulb className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p className="text-xs text-cyan-200 leading-relaxed font-sans">
              <strong>Key Engineering Insight:</strong> {currentScenario.keyTakeaway}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
