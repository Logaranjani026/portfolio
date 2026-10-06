# Logaranjani — Prompt Engineering & AI Portfolio

> **"Turning Ideas Into Better AI Interactions."**  
> A modern, premium, dark-mode personal portfolio website engineered specifically for **Logaranjani** to showcase prompt engineering techniques, AI experiments, practical projects, and a structured learning journey.

---

## 🚀 Live Demo & Preview
- **Local Dev Server**: `http://localhost:5173/`
- **Tech Stack**: React 18 + TypeScript + Vite + Tailwind CSS + Lucide Icons + Framer Motion

---

## 🌟 Key Features & Sections

1. **Futuristic Minimal Dark Theme**: Glassmorphic UI cards (`backdrop-blur-xl`), deep space dark backdrop (`#05070B`), cyan (`#06B6D4`) and purple (`#A855F7`) accents.
2. **Interactive Prompt Flow Simulator (Hero)**: Live streaming simulation showing prompt input → model parameter tuning → structured JSON/Markdown observable output.
3. **About Me & Mindset**: Honest beginner positioning focusing on empirical testing, structure over vagueness, and an active **"Currently Learning"** card.
4. **Prompt Engineering Section**:
   - Visual 6-step pipeline: *User Goal → Structured Prompt → LLM Inference → Observable Output → Iterative Refinement → Production Quality*.
   - 8 core prompting technique cards with full deep-dive inspection modals (Role Prompting, Few-Shot, Task Decomposition, Structured Output, Context Engineering, Constraint-based, Iterative Refinement, Prompt Chaining).
5. **Featured Projects Showcase**:
   - Filterable by category (*Prompt Engineering, Generative AI, AI Application, AI / IoT*).
   - Deep-dive modals with problem statements, solutions, workflow diagrams, prompt blueprints, and tools.
   - Featured projects:
     - 🤖 **AI LinkedIn Content Generator**
     - 📚 **AI Study Assistant & Concept Breakdown**
     - 🎯 **AI Skill Proof & Evidence Generator**
     - 🚗 **Radar-Based Smart Driver Guidance & Accident Avoidance System**
6. **Interactive Prompt Lab**:
   - Side-by-side Before (naive) vs. After (engineered) prompt comparisons across real scenarios.
   - Interactive syntax highlighter breaking down `[Role]`, `[Context]`, `[Task]`, `[Constraints]`, and `[Format]`.
   - Real-time observable output comparison and 1-click clipboard copy with toast notifications.
7. **Searchable Prompt Library**:
   - Real-time text search across title, tags, and use-cases.
   - Multi-category chips (*Content Creation, Coding, Learning, Research, Productivity, AI Agents, Data Analysis*).
   - Difficulty ratings (*Beginner, Intermediate, Advanced*).
   - Instant 1-click prompt copying.
8. **Skills & Tooling Ecosystem**:
   - Clean, transparent capability tags across 4 categories (AI/Prompting, Programming, Web & Dev, AI Tools) without fake percentage bars.
9. **Growth Trajectory Timeline**:
   - Chronological milestones tracking the journey from prompt engineering fundamentals to autonomous AI agents.
10. **Certifications & Continuous Learning**:
    - Showcase cards with clear markers and step-by-step guidance for adding live credential URLs.
11. **Contact & Socials**:
    - Validated contact form, direct email copy pill, and centralized social profile links.
12. **Resume Modal**:
    - Executive summary preview and 1-click PDF download trigger.

---

## 📁 Project Architecture

All customizable portfolio data is isolated in `src/data/`, so you can update your entire website without touching React layout components!

```
my-projects/
├── public/
│   └── resume.pdf                 # Drop your PDF resume here
├── src/
│   ├── types/
│   │   └── index.ts               # TypeScript interfaces & types
│   ├── data/                      # 💡 EDIT YOUR PORTFOLIO HERE
│   │   ├── profile.ts             # Name, bio, tagline, "currently learning", stats
│   │   ├── projects.ts            # Featured projects, problems, solutions, blueprints
│   │   ├── techniques.ts          # 8 prompt engineering technique deep dives
│   │   ├── promptLabData.ts       # Before vs. After comparison cases
│   │   ├── promptLibrary.ts       # Searchable prompt templates vault
│   │   ├── skills.ts              # Skill tags & tool proficiencies
│   │   ├── journey.ts             # Learning milestones & timeline
│   │   ├── certifications.ts      # Certifications & credential links
│   │   └── socialLinks.ts         # GitHub, LinkedIn, Email, Resume URLs
│   ├── components/
│   │   ├── Navbar.tsx             # Responsive header with mobile drawer
│   │   ├── Hero.tsx               # Hero banner with live prompt runner simulator
│   │   ├── About.tsx              # Story & Currently Learning card
│   │   ├── PromptEngineering.tsx  # Visual pipeline & 8 technique cards + modal
│   │   ├── Projects.tsx           # Filterable projects gallery
│   │   ├── ProjectModal.tsx       # In-depth project inspection modal
│   │   ├── PromptLab.tsx          # Interactive Before/After prompt testbench
│   │   ├── PromptLibrary.tsx      # Searchable & filterable prompt library
│   │   ├── Skills.tsx             # Skill badge clusters
│   │   ├── Journey.tsx            # Growth milestone timeline
│   │   ├── Certifications.tsx     # Credentials showcase
│   │   ├── Contact.tsx            # Contact form & social cards
│   │   ├── Footer.tsx             # Footer & back-to-top button
│   │   ├── ResumeModal.tsx        # Resume snapshot preview modal
│   │   ├── Toast.tsx              # Toast notification system
│   │   └── Icons.tsx              # Lightweight SVG icons
│   ├── App.tsx                    # Main app shell
│   ├── index.css                  # Tailwind styles & glassmorphism utilities
│   └── main.tsx                   # React entrypoint
├── index.html                     # SEO metadata, title, fonts
├── tailwind.config.js             # Theme & color tokens
└── package.json
```

---

## 🛠️ How to Run Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173/` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## ✍️ How to Customize Your Content

### 1. Update Profile & Bio
Open `src/data/profile.ts` and modify your name, titles, bio paragraphs, or learning topics:
```typescript
export const profileData: Profile = {
  name: "Logaranjani",
  tagline: "PROMPT ENGINEER • AI ENTHUSIAST",
  shortBio: "I’m a beginner Prompt Engineer passionate about Generative AI...",
  ...
};
```

### 2. Update Social Links, Email, & Resume
Open `src/data/socialLinks.ts`:
```typescript
export const socialLinks: SocialLinks = {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  email: "your.real.email@gmail.com",
  resumeUrl: "/resume.pdf" // or link to a Google Drive PDF
};
```

### 3. Add a New Project
Open `src/data/projects.ts` and append a new object to `projectsData`:
```typescript
{
  id: "my-new-ai-project",
  title: "AI Customer Support Classifier",
  category: "Prompt Engineering",
  shortDescription: "Deterministic classification of customer tickets...",
  problem: "High volume of unclassified support emails...",
  solution: "Few-shot prompt matrix generating strict JSON categories...",
  promptTechniques: ["Few-Shot", "Structured Output"],
  tools: ["GPT-4o", "Python", "Vite"],
  result: "99.4% classification accuracy on test dataset.",
  featured: true,
  githubUrl: "https://github.com/your-username/support-classifier",
  liveUrl: "https://your-demo-url.com"
}
```

### 4. Add a New Prompt to the Library
Open `src/data/promptLibrary.ts` and add a new item:
```typescript
{
  id: "prompt-sql-optimizer",
  title: "SQL Query Performance Tuner",
  category: "Coding",
  difficulty: "Intermediate",
  useCase: "Find bottlenecks in slow queries and generate compound index plans.",
  prompt: `You are a Principal Database Administrator...`,
  tags: ["SQL", "Performance", "Database"]
}
```

### 5. Add Real Certifications
Open `src/data/certifications.ts`, update `credentialUrl` with your certificate link, and set `isPlaceholder: false`.

---

## 🚢 Deployment Guide

### Deploy on Vercel (Recommended — Free & 1-Click)
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"**. Done!

### Deploy on Netlify
1. Go to [netlify.com](https://netlify.com) and import your Git repo.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **"Deploy site"**.

### Environment Variables
No backend or API keys are strictly required for standard browsing or prompt copying. All functionality works 100% client-side out of the box!
