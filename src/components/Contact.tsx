import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { socialLinks, contactInfo } from '../data/socialLinks';
import { LinkedinIcon, GithubIcon } from './Icons';
import { useToast } from './Toast';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { showToast } = useToast();

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending message & trigger mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      showToast('Thank you! Message drafted successfully.');

      // Open mail client
      const mailtoUrl = `mailto:${socialLinks.email}?subject=${encodeURIComponent(
        `[Portfolio Contact] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      window.open(mailtoUrl, '_blank');
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopiedEmail(true);
    showToast('Copied email to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            {contactInfo.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {contactInfo.subheading}
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Connect & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Status Card */}
            <div className="glass-card rounded-2xl p-6 border border-cyan-500/30 shadow-glow-cyan bg-gradient-to-b from-dark-900/90 to-dark-950">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>OPEN FOR OPPORTUNITIES</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Let's discuss Prompt Engineering & AI
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {contactInfo.statusNote}
              </p>

              {/* Direct Email Pill */}
              <div className="p-3.5 rounded-xl bg-dark-950 border border-white/10 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs font-mono text-slate-200 truncate">
                    {socialLinks.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-dark-900 hover:bg-dark-850 text-slate-400 hover:text-cyan-300 border border-white/5 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                </button>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="space-y-3">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 border border-white/10 hover:border-cyan-500/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                      LinkedIn Profile
                    </h4>
                    <p className="text-xs text-slate-400">Connect with me on LinkedIn</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 border border-white/10 hover:border-cyan-500/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                      GitHub Repositories
                    </h4>
                    <p className="text-xs text-slate-400">Explore open source code & prompts</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <h3 className="font-display font-bold text-xl text-white">
                  Send a Direct Message
                </h3>
              </div>

              {isSent ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">
                    Message Prepared!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Your email client should open with your pre-filled message. You can also reach me directly at <code className="text-cyan-300 font-mono">{socialLinks.email}</code>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl bg-dark-950 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Alex Taylor"
                        className={`w-full px-4 py-2.5 rounded-xl bg-dark-950 border text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-cyan-400'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-dark-950 border text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      placeholder="Prompt Engineering Internship / Project Collaboration"
                      className={`w-full px-4 py-2.5 rounded-xl bg-dark-950 border text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.subject ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Hi Logaranjani, I saw your portfolio and would like to discuss..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-dark-950 border text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-colors custom-scrollbar resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-dark-950 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 transition-all shadow-glow-cyan disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
