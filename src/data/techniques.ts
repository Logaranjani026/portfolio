import type { PromptTechnique } from '../types';

export const promptTechniques: PromptTechnique[] = [
  {
    id: "role-prompting",
    name: "Role Prompting",
    shortDesc: "Assigning a specific persona, perspective, domain expertise, and tone to prime the LLM's latent knowledge space.",
    fullDesc: "By establishing who the model is acting as (e.g., 'Senior Cloud Security Architect', 'Executive Speechwriter'), you condition the model's vocabulary, depth of analysis, assumptions, and target audience awareness before it processes the primary task.",
    whenToUse: "When you require domain-specific depth, a consistent brand voice, or tailored professional judgment.",
    examplePrompt: `You are an expert Senior Technical Writer specializing in developer documentation for distributed cloud architectures.

Task: Review the following API endpoint description and rewrite it for beginner frontend engineers. Keep the tone empathetic, concise, and technically accurate.`,
    observableOutput: "A high-clarity explanation tailored specifically to junior engineers, replacing confusing jargon with intuitive mental models and clear HTTP error code tables.",
    tags: ["Persona", "Tone Control", "Domain Expertise"]
  },
  {
    id: "few-shot-prompting",
    name: "Few-Shot Prompting",
    shortDesc: "Providing high-quality input-output demonstration pairs within the prompt to guide pattern replication and output format.",
    fullDesc: "Rather than only describing rules abstractly, few-shot prompting gives the LLM 2-4 concrete examples. The model uses in-context learning to infer the exact formatting, stylistic nuances, edge case handling, and transformation patterns required.",
    whenToUse: "When dealing with strict schema compliance, complex classification rules, or stylized text transformation.",
    examplePrompt: `Convert customer feedback into a structured sentiment and action-item JSON object.

Example 1:
Input: "The checkout page crashed twice when I tried applying my coupon code."
Output: {"sentiment": "Negative", "category": "Bug", "urgency": "High", "actionItem": "Investigate coupon validation timeout on checkout"}

Example 2:
Input: "Loved the fast delivery, but wish there were more color options for the hoodie."
Output: {"sentiment": "Mixed", "category": "Feature Request", "urgency": "Low", "actionItem": "Log inventory request for additional apparel colors"}

Now process:
Input: "I cannot log in with Google SSO on iOS since the latest update."
Output:`,
    observableOutput: `{"sentiment": "Negative", "category": "Bug", "urgency": "High", "actionItem": "Debug Google SSO OAuth flow on iOS app build"}`,
    tags: ["Pattern Learning", "JSON Consistency", "In-Context Learning"]
  },
  {
    id: "task-decomposition",
    name: "Task Decomposition (Step-by-Step)",
    shortDesc: "Breaking complex, multi-layered objectives into sequential logical steps without exposing internal hidden reasoning.",
    fullDesc: "Directing the model to solve a problem systematically through explicit sub-tasks (e.g., 1. Parse constraints, 2. Identify edge cases, 3. Draft solution, 4. Validate against constraints). This dramatically reduces hallucinations and logic gaps in observable outputs.",
    whenToUse: "When tackling multi-step logic problems, complex code refactoring, business case audits, or policy compliance checks.",
    examplePrompt: `Analyze the provided SaaS cancellation policy. Follow these explicit steps:
Step 1: Extract all refund eligibility conditions.
Step 2: Identify potential friction points or ambiguities for the end-user.
Step 3: Produce a simplified 3-bullet executive summary suitable for customer FAQ.`,
    observableOutput: "A clear 3-part structured breakdown that isolates factual conditions, highlights friction risks, and provides ready-to-publish FAQ bullets without skipped logic.",
    tags: ["Step-by-Step", "Logic Guardrails", "Multi-Phase"]
  },
  {
    id: "structured-output",
    name: "Structured Output",
    shortDesc: "Enforcing rigorous schemas such as JSON, Markdown tables, or YAML to enable deterministic parsing in software workflows.",
    fullDesc: "Instructing the model to strictly follow explicit key-value schemas, types, and delimiters while banning conversational filler (e.g., 'Sure, here is your answer:'). This makes LLM outputs directly consumable by downstream APIs and database pipelines.",
    whenToUse: "For API pipelines, data extraction, automation agents, dashboard feeds, and database ingest.",
    examplePrompt: `Extract the job requirements from the posting below. Return ONLY a valid JSON object with the following schema:
{
  "jobTitle": string,
  "requiredYearsExperience": number,
  "mustHaveSkills": string[],
  "niceToHaveSkills": string[],
  "remotePolicy": "Remote" | "Hybrid" | "On-site"
}
Do not wrap in markdown or include conversational text.`,
    observableOutput: `{\n  "jobTitle": "Junior Prompt Engineer",\n  "requiredYearsExperience": 1,\n  "mustHaveSkills": ["Prompt Design", "LLM Evaluation", "Python"],\n  "niceToHaveSkills": ["LangChain", "Vector DBs"],\n  "remotePolicy": "Remote"\n}`,
    tags: ["JSON Schema", "Deterministic", "API Ready"]
  },
  {
    id: "context-engineering",
    name: "Context Engineering",
    shortDesc: "Strategically framing relevant background, reference documents, user history, and boundaries inside the prompt window.",
    fullDesc: "Context engineering focuses on organizing external facts, system states, code snippets, or user profiles in the most salient positions. It ensures the model has all necessary reference grounding while minimizing distraction from irrelevant tokens.",
    whenToUse: "When answering questions based on private documentation, user-specific profiles, codebase contexts, or legal transcripts.",
    examplePrompt: `### REFERENCE KNOWLEDGE BASE:
[Document: Return Policy v4.2 - Effective Oct 2025]
- Items can be returned within 30 days of delivery.
- Opened software licenses and digital downloads are strictly non-refundable.

### USER PROFILE:
- Account Tier: Platinum Member (Entitled to 45-day extended returns on physical goods)

### USER QUERY:
"Can I return my opened digital plugin license that I bought 20 days ago?"

Answer the user query strictly using the reference rules and their profile permissions.`,
    observableOutput: "A polite, accurate response confirming that while they enjoy Platinum 45-day physical returns, digital plugin licenses are non-refundable once opened per policy v4.2.",
    tags: ["Grounding", "RAG Optimization", "Hallucination Control"]
  },
  {
    id: "constraint-based-prompting",
    name: "Constraint-Based Prompting",
    shortDesc: "Setting explicit negative constraints, word limits, format boundaries, and safety guardrails to eliminate unwanted behaviors.",
    fullDesc: "Positive instructions specify what to do; negative constraints specify what NOT to do (e.g., 'Do not use buzzwords like leverage or delve', 'Keep response under 80 words', 'Do not assume facts not explicitly stated'). This tightens precision and enforces brand safety.",
    whenToUse: "When outputs tend to be overly verbose, repetitive, biased, or prone to hallucinating unsupported claims.",
    examplePrompt: `Draft a 2-sentence micro-announcement for our product launch.

CONSTRAINTS:
1. Maximum 35 words total.
2. Do not use exclamation marks.
3. Do not use words: "revolutionary", "game-changer", "delve", "seamless".
4. Must include the launch date: March 15.`,
    observableOutput: "On March 15, we are launching our new prompt evaluation suite to help teams benchmark AI response consistency with deterministic metrics.",
    tags: ["Guardrails", "Negative Prompts", "Conciseness"]
  },
  {
    id: "iterative-refinement",
    name: "Iterative Prompt Refinement",
    shortDesc: "Empirically diagnosing output weaknesses, adjusting prompt variables, and testing repeatedly until reaching target performance.",
    fullDesc: "Prompt engineering is rarely one-shot perfection. Iterative refinement is the scientific method applied to prompts: benchmark baseline output → analyze error modes (e.g., vagueness, edge-case failure) → revise prompt constraints/examples → verify across test datasets.",
    whenToUse: "When developing production-grade prompts for customer-facing applications and critical automations.",
    examplePrompt: `Iteration Cycle:
- V1: "Write an email announcing system maintenance." -> Result: Too generic, missing duration and customer actions.
- V2: "Write an email with date and duration." -> Result: Included info but panicked users.
- V3 (Refined): Added empathetic tone guide, bulleted impact summary, and fallback support link.`,
    observableOutput: "A polished, reassuring system maintenance notice with precise maintenance windows, affected features, zero jargon, and 24/7 hotline links.",
    tags: ["Optimization", "Empirical Testing", "Production Quality"]
  },
  {
    id: "prompt-chaining",
    name: "Prompt Chaining",
    shortDesc: "Linking multiple specialized prompts together, where the output of Prompt A becomes the validated input of Prompt B.",
    fullDesc: "Instead of forcing one colossal prompt to solve a 10-step problem, prompt chaining separates tasks into modular units (e.g., Prompt 1: Extract Key Data → Prompt 2: Analyze & Score → Prompt 3: Format Report). This maximizes accuracy at each transition.",
    whenToUse: "For complex multi-stage AI workflows, automated research pipelines, content generation pipelines, and agent tools.",
    examplePrompt: `Pipeline:
[Prompt 1: Raw Text Extraction] -> Extracts bullet points from interview transcript
      ↓
[Prompt 2: Sentiment & Gap Analysis] -> Identifies unanswered questions and emotional cues
      ↓
[Prompt 3: Executive Briefing Generator] -> Compiles a 1-page stakeholder synthesis`,
    observableOutput: "A highly coherent, fact-checked stakeholder summary where each stage was independently validated before feeding the final synthesis.",
    tags: ["Pipelines", "Modular AI", "Multi-Agent"]
  }
];
