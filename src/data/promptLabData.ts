import type { PromptComparison } from '../types';

export const promptLabComparisons: PromptComparison[] = [
  {
    id: "linkedin-post-optimization",
    title: "Technical Post Creation",
    category: "Content Creation",
    scenario: "Converting a weekend coding experiment into an authentic developer post on LinkedIn.",
    beforePrompt: {
      text: "Write a linkedin post about building a prompt engineering portfolio website using react and tailwind.",
      issues: [
        "Vague request resulting in generic AI clichés ('I am thrilled to announce...').",
        "No target audience, tone, or perspective specified.",
        "Lacks concrete technical takeaways or structural guardrails.",
        "Overuses meaningless hashtags and corporate fluff."
      ],
      sampleOutput: `🚀 Thrilled to share that I just built my prompt engineering portfolio website using React and Tailwind CSS! 🎉 It was a game-changer! Check it out!

#PromptEngineering #AI #Coding #Tech #React #Tailwind #Developer #Growth #Success #Innovation`
    },
    afterPrompt: {
      text: `[Role]
You are a junior developer and Prompt Engineer sharing genuine learnings from your latest project on LinkedIn.

[Context]
I just built my first personal portfolio website to showcase prompt engineering techniques, structured prompting workflows, and practical AI applications using React and Tailwind CSS.

[Task]
Write an authentic, value-driven LinkedIn post that shares my learning journey without sounding boastful.

[Constraints]
1. Hook (lines 1-2): Start with an unexpected insight or honest challenge.
2. Structure: 
   - Paragraph 1: Why I built the portfolio (focusing on practical AI rather than hype).
   - Paragraph 2: The 3 core techniques I emphasized (Structured Outputs, Few-Shot, Context Framing).
   - Paragraph 3: The tech stack (React + TypeScript + Tailwind) and why clean data separation matters.
3. Banned phrases: Do not use "thrilled", "game-changer", "delve", "humbled", or "excited to announce".
4. Limit to max 3 relevant hashtags at the bottom.

[Output Format]
Provide the ready-to-publish Markdown text.`,
      breakdown: {
        role: "Junior developer and Prompt Engineer with an authentic, grounded tone.",
        context: "Built a dedicated portfolio showcasing structured prompting with React & Tailwind.",
        task: "Draft a value-packed, honest narrative post highlighting technical lessons.",
        constraints: [
          "No corporate AI clichés ('thrilled', 'game-changer', 'delve')",
          "Strict 3-part narrative structure with actionable takeaways",
          "Max 3 targeted hashtags instead of hashtag spam"
        ],
        outputFormat: "Clean Markdown post ready for 1-click publishing."
      },
      sampleOutput: `Most people think Prompt Engineering is just typing questions into ChatGPT.

Building my first portfolio website taught me otherwise: it’s really about software specifications for language models.

Here is what I focused on when structuring my projects:
💡 Structured Outputs: Forcing strict JSON/Markdown schemas so AI responses connect reliably into apps.
💡 In-Context Demonstrations: Using few-shot examples to lock down tone and formatting without brittle rule lists.
💡 Clean Data Architecture: Separating prompt templates from UI components in React so iterations take seconds.

Built using React, TypeScript, and Tailwind CSS. The biggest lesson? Clear constraints always beat longer prompts.

What prompting techniques do you find most useful when building with LLMs?

#PromptEngineering #GenerativeAI #WebDev`
    },
    keyTakeaway: "Adding explicit persona, negative constraints (banning buzzwords), and structured section requirements transforms an embarrassing cliché into a high-credibility developer post."
  },
  {
    id: "code-refactoring-audit",
    title: "Code Refactoring & Security Audit",
    category: "Coding & Engineering",
    scenario: "Asking an LLM to review and refactor an authentication middleware function.",
    beforePrompt: {
      text: "Fix and improve this express auth code:\n\napp.use((req, res, next) => {\n  const token = req.headers.authorization;\n  if (token == 'secret123') {\n    next();\n  } else {\n    res.send('error');\n  }\n});",
      issues: [
        "Doesn't specify what 'improve' means (security, performance, typing, error codes?).",
        "Returns whatever arbitrary style the model defaults to without explanations.",
        "Missing context regarding JWT validation, status codes, or middleware conventions."
      ],
      sampleOutput: `// Here is improved code:
app.use((req, res, next) => {
  const token = req.headers['authorization'];
  if (token && token.startsWith('Bearer ')) {
    const actualToken = token.slice(7);
    if (actualToken === 'secret123') {
      return next();
    }
  }
  return res.status(401).send('Unauthorized');
});`
    },
    afterPrompt: {
      text: `[Role]
You are a Senior Application Security Architect and Node.js specialist.

[Context]
We are hardening an Express.js REST API against timing attacks, improper header handling, and uninformative error contracts.

[Task]
Review and refactor the provided authentication middleware snippet.

[Constraints]
1. Identify all security flaws in the original snippet in a concise bulleted list.
2. Refactor using Bearer token parsing with crypto.timingSafeEqual or standard JWT verification.
3. Return standard HTTP 401 Unauthorized with a structured JSON error response: { error: { code: string, message: string } }.
4. Include TypeScript type annotations.
5. Provide a short test case demonstrating how to call the middleware.

[Output Format]
Markdown with:
1. Vulnerability Findings
2. Refactored Code Block (TypeScript)
3. Usage & Testing Snippet`,
      breakdown: {
        role: "Senior Application Security Architect & Node.js specialist.",
        context: "Hardening Express REST API against timing attacks and improper token headers.",
        task: "Audit, explain vulnerabilities, and deliver hardened TypeScript middleware.",
        constraints: [
          "Address timing attacks with secure comparison",
          "Enforce JSON error schema with HTTP 401",
          "Provide TypeScript types and test case"
        ],
        outputFormat: "3-part Markdown report (Vulnerabilities, Hardened Code, Test Verification)."
      },
      sampleOutput: `### 1. Vulnerability Findings
- **Hardcoded Secret & String Comparison:** Vulnerable to timing analysis attacks.
- **Missing Bearer Scheme Parsing:** Fails on RFC 6750 standard \`Authorization: Bearer <token>\` headers.
- **Improper HTTP Status & Body:** Returns 200 OK or plain string instead of 401 with standard error JSON.

### 2. Hardened Middleware (TypeScript)
\`\`\`typescript
import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

const API_KEY_BUFFER = Buffer.from(process.env.API_SECRET_KEY || 'default-fallback-key');

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: { code: 'UNAUTHORIZED', message: 'Missing or malformed Authorization header.' }
    });
  }

  const token = authHeader.split(' ')[1];
  const tokenBuffer = Buffer.from(token);

  if (
    tokenBuffer.length !== API_KEY_BUFFER.length ||
    !crypto.timingSafeEqual(tokenBuffer, API_KEY_BUFFER)
  ) {
    return res.status(401).json({
      error: { code: 'INVALID_CREDENTIALS', message: 'Provided token is invalid or expired.' }
    });
  }

  return next();
}
\`\`\``
    },
    keyTakeaway: "By forcing vulnerability diagnosis, explicit standards (RFC 6750, timingSafeEqual), and typed JSON error models, the AI delivers enterprise-grade code instead of a toy fix."
  },
  {
    id: "customer-support-escalation",
    title: "Customer Support Escalation Triage",
    category: "Productivity & Operations",
    scenario: "Extracting urgency, category, customer sentiment, and drafting an empathetic response from angry feedback.",
    beforePrompt: {
      text: "Write a reply to this angry customer email about a lost shipment.",
      issues: [
        "Produces a bland, robotic 'We apologize for any inconvenience' message.",
        "Fails to extract routing metadata (tracking number, priority, department).",
        "Does not define refund/replacement policy bounds or internal escalation notes."
      ],
      sampleOutput: `Dear Customer,

We are very sorry to hear that your shipment is lost. We apologize for the inconvenience. Please contact our shipping carrier or let us know if you need any further assistance.

Best regards,
Customer Support Team`
    },
    afterPrompt: {
      text: `[Role]
You are a Lead Customer Experience Specialist known for empathetic de-escalation and systematic issue triage.

[Context]
Customer email: "I ordered my medical monitors (Order #88219) 10 days ago with guaranteed overnight delivery. The tracking status hasn't moved in 5 days and your phone line is busy. I need this immediately or I am reporting fraud!"

[Task]
1. Triage the ticket by extracting operational metadata into JSON.
2. Draft a de-escalating customer response.

[Constraints]
1. Triage Schema: { orderId: string, priority: "URGENT" | "HIGH" | "MEDIUM", category: string, sentimentScore: -1 to 1, escalationTeam: string }
2. Response Tone: Urgent, highly empathetic, taking direct ownership (no passing blame to courier).
3. Actions: Acknowledge high stakes of medical monitors, offer immediate express replacement with dispatch within 3 hours, and provide direct manager escalation phone/email.

[Output Format]
Output the Triage JSON followed by the Customer Email Draft.`,
      breakdown: {
        role: "Lead Customer Experience Specialist with expertise in de-escalation.",
        context: "High-stakes customer email regarding delayed medical monitor shipment.",
        task: "Perform structured triage JSON extraction and write de-escalating response.",
        constraints: [
          "Strict triage JSON schema with priority and escalation team",
          "Empathy guidelines taking direct ownership",
          "Concrete action items: same-day replacement dispatch + direct manager contact"
        ],
        outputFormat: "JSON Metadata Object + Formatted Email Body."
      },
      sampleOutput: `### TICKET TRIAGE
\`\`\`json
{
  "orderId": "88219",
  "priority": "URGENT",
  "category": "Lost In Transit - Critical Equipment",
  "sentimentScore": -0.92,
  "escalationTeam": "Priority Logistics & Tier-2 Executive Support"
}
\`\`\`

### CUSTOMER RESPONSE
**Subject:** Urgent Update: Order #88219 — Immediate Replacement Dispatched Today

Dear Customer,

I sincerely apologize for the delay and frustration this has caused. Given that your order contains critical medical monitoring equipment, waiting on stalled carrier tracking is completely unacceptable.

Here is what I have immediately done on your behalf:
1. **Express Replacement:** A brand new unit is being packed right now and will be dispatched via Priority Courier within the next 2 hours.
2. **Dedicated Tracking:** Your new expedited tracking number is **USPS-EXP-994182**.
3. **Full Shipping Refund:** I have processed a 100% refund for your expedited delivery charges.

I will personally monitor this delivery until it is safely in your hands. If you need anything before then, you can reach my direct line at **support-lead@example.com** or call **(555) 019-4821**.

With sincere apologies and commitment to your care,  
**Logaranjani** | Lead Customer Experience Specialist`
    },
    keyTakeaway: "Separating operational data extraction from customer-facing empathy ensures backend systems get structured analytics while the human gets immediate resolution."
  }
];
