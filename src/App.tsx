import { useState } from 'react';
import { ToastProvider } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PromptEngineering } from './components/PromptEngineering';
import { Projects } from './components/Projects';
import { PromptLab } from './components/PromptLab';
import { PromptLibrary } from './components/PromptLibrary';
import { Skills } from './components/Skills';
import { Journey } from './components/Journey';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <ToastProvider>
      <div className="min-h-screen bg-dark-950 text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
        
        {/* Navigation Bar */}
        <Navbar onOpenResume={() => setResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section */}
          <Hero onOpenResume={() => setResumeModalOpen(true)} />

          {/* About Section */}
          <About />

          {/* Prompt Engineering Section */}
          <PromptEngineering />

          {/* Projects Showcase */}
          <Projects />

          {/* Interactive Prompt Lab */}
          <PromptLab />

          {/* Searchable Prompt Library */}
          <PromptLibrary />

          {/* Skills & Ecosystem */}
          <Skills />

          {/* Learning Journey Timeline */}
          <Journey />

          {/* Certifications */}
          <Certifications />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Resume Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />

      </div>
    </ToastProvider>
  );
}

export default App;
