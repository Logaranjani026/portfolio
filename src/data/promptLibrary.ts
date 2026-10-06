import type { LibraryPrompt } from '../types';

export const promptLibraryData: LibraryPrompt[] = [
  {
    id: "prompt-feynman-concept-explainer",
    title: "Feynman Technique Concept Breakdown",
    category: "Learning",
    difficulty: "Beginner",
    useCase: "Break down any complex technical, mathematical, or scientific concept into simple intuitive mental models.",
    prompt: `Act as a world-class educator who uses the Feynman Technique to teach complex subjects.

CONCEPT TO EXPLAIN: [INSERT TOPIC / CONCEPT]
TARGET AUDIENCE: [e.g. Beginner Developer / 12-Year-Old / Non-Technical Stakeholder]

Please structure your response as follows:
1. One-Sentence Core Mental Model: An intuitive everyday physical analogy.
2. Step-by-Step Mechanism: How it works behind the scenes in 3 simple steps.
3. Why Jargon Confuses People: Identify 2 confusing buzzwords and explain what they actually mean in plain English.
4. "Gotcha" Pitfall: The most common misconception beginners have and how to avoid it.
5. Micro Self-Test: 1 interactive multiple-choice question to verify understanding.`,
    tags: ["Learning", "Mental Models", "Education", "Feynman"]
  },
  {
    id: "prompt-typescript-refactor",
    title: "TypeScript Strict Refactor & Type Guard Generator",
    category: "Coding",
    difficulty: "Intermediate",
    useCase: "Safely refactor untyped JavaScript or loose 'any' types into robust, discriminating union types with custom type guards.",
    prompt: `You are a Principal TypeScript Engineer specializing in type safety, Discriminated Unions, and zero-runtime-overhead design.

INPUT CODE:
[PASTE JAVASCRIPT / TYPESCRIPT CODE HERE]

REQUIREMENTS:
1. Refactor all \`any\` or \`unknown\` types into strict, explicit interfaces or Discriminated Unions.
2. Generate custom Type Guard functions (\`isType(obj: unknown): obj is Type\`) for runtime validation.
3. Preserve the exact original runtime behavior with zero regressions.
4. Provide unit tests using Vitest/Jest demonstrating edge case safety.
5. CONSTRAINTS: Do not use \`as any\` or non-null assertions (\`!\`). Add comments explaining non-trivial generic constraints.`,
    tags: ["TypeScript", "Refactoring", "Type Safety", "Clean Code"]
  },
  {
    id: "prompt-technical-spec-generator",
    title: "Feature Technical Specification (RFC/Design Doc)",
    category: "AI Agents",
    difficulty: "Advanced",
    useCase: "Draft an end-to-end technical engineering design document for a proposed software feature or microservice.",
    prompt: `You are a Principal Software Architect writing a formal Technical Specification Document (RFC).

FEATURE TITLE: [FEATURE NAME]
CORE GOAL: [1-2 SENTENCE SUMMARY]
CONSTRAINTS: [e.g., Latency < 100ms, Serverless, MySQL/Postgres]

Generate a technical specification following this exact schema:
1. Executive Summary & Problem Statement
2. High-Level Architecture & Component Diagram (Ascii/Mermaid notation)
3. API Contract Definition (OpenAPI / REST schemas with response codes)
4. Data Model & Database Schema Changes
5. Security & Privacy Threat Model (STRIDE considerations)
6. Observability & Telemetry (Metrics to track, logging events, alert thresholds)
7. Rollback & Disaster Recovery Strategy
8. Open Questions & Unresolved Edge Cases`,
    tags: ["Architecture", "RFC", "System Design", "Engineering"]
  },
  {
    id: "prompt-research-synthesis-matrix",
    title: "Multi-Source Research Synthesis Matrix",
    category: "Research",
    difficulty: "Intermediate",
    useCase: "Consolidate multiple conflicting research papers, market reports, or user interviews into a unified comparison matrix.",
    prompt: `You are an Investigative Research Analyst and Knowledge Synthesizer.

SOURCE MATERIALS:
[PASTE EXCERPTS OR SUMMARIES OF SOURCE 1, 2, 3]

TASK:
1. Construct a Markdown Comparison Table with columns:
   | Key Dimension | Source 1 Claim | Source 2 Claim | Source 3 Claim | Consensus Level (High/Medium/Conflicted) |
2. Identify 3 critical areas of divergence or contradictory claims.
3. Synthesize the underlying root causes for these discrepancies (e.g., different sample sizes, opposing definitions, temporal shifts).
4. Provide a balanced, evidence-grounded summary recommendation.
5. CONSTRAINTS: Do not extrapolate beyond the text. Explicitly state whenever information is missing or unverified.`,
    tags: ["Research", "Synthesis", "Market Analysis", "Matrix"]
  },
  {
    id: "prompt-cold-outreach-email",
    title: "Authentic High-Conversion Networking Outreach",
    category: "Productivity",
    difficulty: "Beginner",
    useCase: "Draft personalized, respectful networking or mentorship emails that get opened and answered by busy engineering leaders.",
    prompt: `You are an expert career strategist helping a junior engineer send a respectful, personalized networking message.

TARGET PERSON: [Name, Role, Company]
RECENT WORK/POST OF THEIRS I ADMIRED: [Specific article, repo, or talk]
MY BACKGROUND: [Brief 1-sentence intro]
SPECIFIC REASON FOR OUTREACH: [1 specific question or feedback request]

GUIDELINES:
1. Length: Under 120 words total.
2. Hook: Mention their specific work in sentence 1 with genuine insight.
3. Value/Ask: Ask exactly ONE low-friction question that can be answered in 2 minutes.
4. Tone: Humble, observant, professional (no sycophancy or generic flattery).
5. Banned words: "quick 15-min chat", "pick your brain", "synergy", "aspiring".`,
    tags: ["Productivity", "Networking", "Career", "Communication"]
  },
  {
    id: "prompt-sql-query-optimizer",
    title: "SQL Query Performance & Index Analyzer",
    category: "Data Analysis",
    difficulty: "Advanced",
    useCase: "Analyze slow relational database queries, explain execution bottlenecks, and recommend optimal indexing strategies.",
    prompt: `You are a Senior Database Administrator (DBA) and PostgreSQL/MySQL Performance Tuner.

SLOW QUERY:
[PASTE SQL QUERY HERE]

TABLE METRICS & CURRENT INDEXES:
- Table Size: [e.g. 5 Million rows]
- Existing Indexes: [e.g. PRIMARY KEY (id)]

TASK:
1. Query Analysis: Break down the query execution bottlenecks (e.g., sequential scans, un-sargable WHERE predicates, cartesian joins).
2. Optimized Query: Rewrite the SQL query for maximum efficiency.
3. Indexing Recommendations: Provide exact \`CREATE INDEX\` statements with compound column ordering justification (Equality -> Range -> Sort).
4. Expected Performance Delta: Explain why this modification reduces IOPS and execution time.`,
    tags: ["SQL", "Data Analysis", "Optimization", "Database"]
  },
  {
    id: "prompt-viral-hook-generator",
    title: "High-Engagement Technical Hook Generator",
    category: "Content Creation",
    difficulty: "Beginner",
    useCase: "Generate 5 distinct opening hooks for blog posts, tutorials, or social posts across different psychological angles.",
    prompt: `You are a master digital storyteller specializing in technical writing and developer audience engagement.

TOPIC / LESSON: [WHAT YOU LEARNED OR BUILT]
TARGET AUDIENCE: [e.g. Developers / Designers / Tech Founders]

Generate 5 distinct opening hooks based on these specific angles:
1. "The Contrarian Angle" (Challenges a widely held belief or common practice).
2. "The Cost of a Mistake" (Highlights a painful error and how to avoid it).
3. "The Simple Framework" (Offers a clean 3-step solution to a known frustration).
4. "The Before vs. After" (Demonstrates a dramatic contrast in clarity or speed).
5. "The Story/Curiosity Gap" (Opens in the middle of an interesting discovery).

CONSTRAINTS:
- No emojis in the hooks.
- Keep each hook under 280 characters.
- Ensure technical credibility (no clickbait that fails to deliver).`,
    tags: ["Content Creation", "Storytelling", "Hooks", "Engagement"]
  },
  {
    id: "prompt-agent-action-planner",
    title: "Autonomous Agent Tool Execution Planner",
    category: "AI Agents",
    difficulty: "Advanced",
    useCase: "Direct an autonomous LLM agent to validate inputs, select appropriate tool calls, and produce deterministic action plans.",
    prompt: `You are the Task Planning & Execution Module for an autonomous AI assistant.

AVAILABLE TOOLS:
- search_web(query: string)
- execute_python_code(script: string)
- inspect_file(filepath: string)
- write_file(filepath: string, content: string)

USER OBJECTIVE: [OBJECTIVE]
CURRENT ENVIRONMENT STATE: [ENVIRONMENT INFO]

TASK:
Generate a deterministic execution plan. Return ONLY a JSON object:
{
  "objectiveStatus": "IN_PROGRESS" | "COMPLETED" | "BLOCKED",
  "reasoningSummary": "Short explanation of logical decision",
  "nextToolCall": {
    "toolName": string,
    "parameters": Record<string, any>
  },
  "expectedOutcome": string,
  "fallbackPlan": string
}
Do not output conversational wrapper text.`,
    tags: ["AI Agents", "Tool Calling", "Autonomous", "JSON Schema"]
  }
];
