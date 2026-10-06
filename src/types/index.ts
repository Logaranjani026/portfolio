export interface Profile {
  name: string;
  tagline: string;
  titles: string[];
  shortBio: string;
  detailedBio: string[];
  status: string;
  location: string;
  currentlyLearning: string[];
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  philosophy: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface PromptTechnique {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  whenToUse: string;
  examplePrompt: string;
  observableOutput: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Prompt Engineering' | 'Generative AI' | 'AI Application' | 'AI / IoT';
  shortDescription: string;
  problem: string;
  solution: string;
  promptTechniques: string[];
  tools: string[];
  result: string;
  featured: boolean;
  pipeline?: {
    step: string;
    description: string;
  }[];
  samplePromptSnippet?: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface PromptComparison {
  id: string;
  title: string;
  category: string;
  scenario: string;
  beforePrompt: {
    text: string;
    issues: string[];
    sampleOutput: string;
  };
  afterPrompt: {
    text: string;
    breakdown: {
      role: string;
      context: string;
      task: string;
      constraints: string[];
      outputFormat: string;
    };
    sampleOutput: string;
  };
  keyTakeaway: string;
}

export interface LibraryPrompt {
  id: string;
  title: string;
  category: 'Content Creation' | 'Coding' | 'Learning' | 'Research' | 'Productivity' | 'AI Agents' | 'Data Analysis';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  useCase: string;
  prompt: string;
  variables?: string[];
  outputPreview?: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Core' | 'Practicing' | 'Exploring';
    note?: string;
  }[];
}

export interface TimelineMilestone {
  year: string;
  period?: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  skills: string[];
  isPlaceholder: boolean;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  resumeUrl: string;
}
