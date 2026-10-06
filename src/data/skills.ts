import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    category: "AI & Prompt Engineering",
    description: "Core focus area: designing, evaluating, and chaining structured prompt systems for LLMs.",
    iconName: "Sparkles",
    skills: [
      { name: "Prompt Engineering", level: "Core", note: "Role, Few-Shot, Chain-of-Thought, Constraints" },
      { name: "Generative AI", level: "Core", note: "Text, Code, Multimodal Workflows" },
      { name: "LLM Workflows", level: "Core", note: "Context Framing & Structured Outputs" },
      { name: "AI Agents", level: "Exploring", note: "Task Decomposition & Tool Selection" },
      { name: "Prompt Optimization", level: "Core", note: "Iterative Refinement & Benchmark Auditing" },
      { name: "Hallucination Reduction", level: "Practicing", note: "Negative Constraints & Knowledge Grounding" }
    ]
  },
  {
    category: "Programming",
    description: "Foundational programming languages used for scripting, algorithmic thinking, and problem solving.",
    iconName: "Code2",
    skills: [
      { name: "Python", level: "Practicing", note: "AI Scripting, Data Extraction, Automation" },
      { name: "JavaScript", level: "Practicing", note: "ES6+, Async/Await, DOM, API calls" },
      { name: "C", level: "Practicing", note: "Foundational memory management & logic" },
      { name: "Java", level: "Practicing", note: "Object-oriented principles & data structures" },
      { name: "TypeScript", level: "Exploring", note: "Type annotations & interface contracts" }
    ]
  },
  {
    category: "Development & Tools",
    description: "Modern frontend and version control tools used to build responsive web applications.",
    iconName: "Layout",
    skills: [
      { name: "React", level: "Practicing", note: "Component Architecture, Hooks, State" },
      { name: "HTML5", level: "Core", note: "Semantic structure & accessibility basics" },
      { name: "CSS3 / Tailwind CSS", level: "Core", note: "Responsive layouts, Flexbox, Grid, Glassmorphism" },
      { name: "Git & GitHub", level: "Core", note: "Version control, branching, PRs, repositories" },
      { name: "Vite", level: "Practicing", note: "Fast build tooling & development server" }
    ]
  },
  {
    category: "AI Tools & Ecosystem",
    description: "Daily generative AI tools used for research, prompt testing, and accelerated development.",
    iconName: "Bot",
    skills: [
      { name: "ChatGPT (GPT-4o)", level: "Core", note: "Prompt testing & system instructions" },
      { name: "Claude 3.5 Sonnet", level: "Core", note: "Long-context analysis & code synthesis" },
      { name: "Google Gemini", level: "Core", note: "Multimodal and research reasoning" },
      { name: "Cursor AI", level: "Practicing", note: "AI-assisted code development" },
      { name: "Perplexity AI", level: "Core", note: "Deep research grounding & citation analysis" }
    ]
  }
];
