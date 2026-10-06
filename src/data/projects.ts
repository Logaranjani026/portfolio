import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "ai-linkedin-content-generator",
    title: "AI LinkedIn Content Generator",
    category: "Prompt Engineering",
    shortDescription: "A structured prompt framework that converts raw technical project notes into engaging, authentic LinkedIn thought-leadership posts.",
    problem: "Engineers and learners often struggle to translate raw technical achievements into engaging, well-formatted LinkedIn posts without sounding robotic, overly boastful, or cliché.",
    solution: "Designed a multi-parameter prompt template that enforces authentic tone, structured hooks, bulleted takeaways, technical accuracy, and zero AI clichés (banning overused emojis and corporate fluff).",
    promptTechniques: [
      "Role Prompting (Technical Copywriter)",
      "Constraint-based Prompting (Banning clichés & fluff)",
      "Structured Output (Hook, Core Story, 3 Takeaways, CTA)",
      "Iterative Refinement (Tuning tone for authenticity)"
    ],
    tools: ["ChatGPT", "Claude 3.5 Sonnet", "Prompt Matrix", "Markdown"],
    result: "Produces relatable, high-engagement posts in seconds with consistent voice, strong opening hooks, and high-value technical takeaways.",
    featured: true,
    pipeline: [
      { step: "Input Project Context", description: "User pastes raw notes, tech stack, and what they learned." },
      { step: "Role & Tone Calibration", description: "Prompts AI as an authentic tech builder sharing practical learnings." },
      { step: "Constraint Check", description: "Filters out buzzwords, excessive hashtags, and fake hype." },
      { step: "Structured Generation", description: "Outputs formatted post with hook, narrative, takeaways, and question." }
    ],
    samplePromptSnippet: `You are an authentic Tech Creator and Engineer who writes concise, high-value LinkedIn posts for developers.

INPUT DATA:
- Project: [PROJECT NAME]
- Problem Solved: [PROBLEM]
- Key Technical Learning: [LEARNING]

GUIDELINES:
1. Hook (First 2 lines): Start with an unexpected insight or honest challenge.
2. Body: Explain the solution in 3 short, punchy paragraphs.
3. Key Takeaways: 3 clean bullet points formatted with "💡".
4. Call to Action: Ask an engaging question to foster genuine comments.
5. CONSTRAINTS: Do not use words like "thrilled", "game changer", "delve". No more than 3 relevant hashtags.`,
    githubUrl: "https://github.com/Logaranjani026/portfolio",
    liveUrl: undefined
  },
  {
    id: "ai-study-assistant",
    title: "AI Study Assistant & Concept Breakdown",
    category: "Generative AI",
    shortDescription: "An intelligent pedagogical prompting framework that transforms dense study materials into progressive summaries, analogies, and active recall quizzes.",
    problem: "Students and self-taught developers get overwhelmed by dense textbooks and technical documentation, struggling with passive reading rather than active synthesis.",
    solution: "Engineered a structured prompt engine that reads raw study texts and decomposes them into Feynman-technique analogies, visual mental models, high-yield summary cards, and self-testing quiz questions.",
    promptTechniques: [
      "Context Engineering (Document Grounding)",
      "Structured Output (Summary, Analogy, Quiz Questions)",
      "Task Decomposition (Multi-tier Difficulty Levels)",
      "Few-Shot Prompting (Formatting Q&A pairs)"
    ],
    tools: ["Prompt Engineering", "Claude", "Gemini 1.5 Pro", "Markdown"],
    result: "Reduces study review time by 60% while significantly boosting conceptual retention through active recall and multi-level explanations.",
    featured: true,
    pipeline: [
      { step: "Source Input Ingestion", description: "Ingests syllabus chapter, lecture transcript, or technical article." },
      { step: "Feynman Analogy Engine", description: "Translates complex mechanisms into real-world analogies." },
      { step: "Concept Extraction", description: "Extracts key definitions, formulas, and critical gotchas." },
      { step: "Interactive Quiz Generator", description: "Generates 5 tiered questions with hidden spoiler explanations." }
    ],
    samplePromptSnippet: `Act as a master tutor skilled in the Feynman Technique and cognitive science.

STUDY MATERIAL:
[PASTE TEXTBOOK CHAPTER OR NOTES HERE]

TASK:
1. "Explain Like I'm 12": Provide an intuitive real-world analogy explaining the core mechanism.
2. "High-Yield Summary": 4 concise bullet points covering key principles.
3. "Common Pitfalls": 2 mistakes beginners frequently make.
4. "Active Recall Quiz": 3 conceptual questions with answers formatted under collapsible markdown details.`,
    githubUrl: "https://github.com/Logaranjani026/portfolio",
    liveUrl: undefined
  },
  {
    id: "ai-skill-proof-generator",
    title: "AI Skill Proof & Project Evidence Generator",
    category: "AI Application",
    shortDescription: "A systematic tool that transforms project descriptions and commits into recruiter-ready STAR-format skill evidence.",
    problem: "Early-career tech talent struggle to articulate their project contributions clearly on resumes and portfolios in metrics-driven STAR (Situation, Task, Action, Result) formats.",
    solution: "Constructed a prompt framework that extracts technical competencies, architectural decisions, and measurable outcomes from project summaries, formatting them into tailored resume bullets and interview talking points.",
    promptTechniques: [
      "Role Prompting (Senior Tech Recruiter & Hiring Manager)",
      "Constraint-based Prompting (Quantifiable impact, strong action verbs)",
      "Structured Output (STAR Format Matrix, Resume Bullets, Interview Prompts)",
      "Iterative Refinement (Tailoring to specific job descriptions)"
    ],
    tools: ["Prompt Engineering", "OpenAI API", "Python", "Vite/React"],
    result: "Helps candidates create compelling, credible project descriptions that highlight real problem-solving and technical craftsmanship without exaggeration.",
    featured: true,
    pipeline: [
      { step: "Project Ingestion", description: "User submits project repo link, feature list, and tech stack." },
      { step: "Skill Extraction", description: "Identifies hard technical skills, architectural patterns, and soft skills." },
      { step: "STAR Synthesis", description: "Drafts Situation, Task, Action, and quantifiable Result." },
      { step: "Resume Ready Bullets", description: "Formats 3 high-impact resume bullets beginning with strong action verbs." }
    ],
    samplePromptSnippet: `You are an expert Technical Hiring Manager and Career Coach.

PROJECT DETAILS:
- Title: [PROJECT NAME]
- Technologies: [TECH STACK]
- Core Problem Solved: [PROBLEM]
- My Direct Contribution: [ACTIONS TAKEN]

TASK:
Produce:
1. STAR Summary Table (Situation, Task, Action, Result).
2. Three high-impact resume bullet points starting with strong past-tense action verbs (e.g., "Engineered", "Implemented", "Architected").
3. Two potential technical interview questions a recruiter might ask about this project, along with recommended talking points.

CONSTRAINTS:
- Do not exaggerate achievements or invent fake metrics.
- Focus on demonstrated problem-solving and architectural clarity.`,
    githubUrl: "https://github.com/Logaranjani026/portfolio",
    liveUrl: undefined
  },
  {
    id: "radar-smart-driver-guidance",
    title: "Radar-Based Smart Driver Guidance & Accident Avoidance",
    category: "AI / IoT",
    shortDescription: "An intelligent sensor-driven driver assistance concept combining radar distance sensing, obstacle classification, and real-time safe directional guidance.",
    problem: "Blind spots, poor visibility conditions (fog/rain/night), and delayed human reaction times lead to severe road collisions and avoidable accidents.",
    solution: "Designed a multi-stage intelligent safety framework utilizing ultrasonic/radar distance sensing coupled with decision logic to detect proximity hazards, analyze collision vectors, and provide dynamic steering/braking recommendations.",
    promptTechniques: [
      "Task Decomposition (Sensor Ingestion → Hazard Assessment → Decision Recommendation)",
      "Constraint-based Logic (Sub-second response time prioritisation)",
      "Structured Output (Directional Warning Matrix, Severity Levels)"
    ],
    tools: ["Radar/Ultrasonic Sensors", "Microcontroller / IoT Logic", "Python", "Decision Trees", "AI Logic"],
    result: "Demonstrates an end-to-end intelligent safety workflow: detecting obstacles in real-time and providing actionable guidance (e.g., 'Safe Lane Left', 'Emergency Brake') to prevent collisions.",
    featured: true,
    pipeline: [
      { step: "1. Detection", description: "Radar and distance sensors scan blind spots and forward zones for proximity obstacles." },
      { step: "2. Analysis", description: "Calculates relative speed, closure rate, and collision probability threshold." },
      { step: "3. Decision Engine", description: "Evaluates clearance in adjacent zones (Left, Right, Center) to find safest avoidance corridor." },
      { step: "4. Real-time Guidance", description: "Delivers immediate visual/audio directional cues to the driver to avert danger." }
    ],
    samplePromptSnippet: `[AI Decision Simulator Prompt for IoT Safety System]
You are the Real-Time Navigation Safety Engine for a smart vehicle assistance system.

SENSOR TELEMETRY:
- Front Distance: 12 meters (Closing speed: 40 km/h - HIGH RISK)
- Left Zone Distance: 28 meters (Clear)
- Right Zone Distance: 4 meters (Obstacle present - BLOCKED)

TASK:
1. Classify immediate Hazard Severity: [CRITICAL | WARNING | NOMINAL]
2. Compute primary avoidance recommendation.
3. Return output in strict JSON format:
{
  "hazardLevel": "CRITICAL",
  "recommendedAction": "STEER_LEFT_AND_DECELERATE",
  "reasoning": "Front collision risk imminent within 1.1s. Right flank obstructed. Left lane provides >25m clear buffer.",
  "audioAlertMessage": "Warning: Hazard ahead. Veer left safely."
}`,
    githubUrl: "https://github.com/Logaranjani026/portfolio",
    liveUrl: undefined
  }
];
