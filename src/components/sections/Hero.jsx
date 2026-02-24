import { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download, Code2 } from 'lucide-react';
import ResumeModal from '../ResumeModal';

const Hero = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'rgba(0, 112, 243, 0.1)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />

            <div className="container relative z-10" style={{ position: 'relative', zIndex: 10 }}>
                <div className="max-w-4xl">

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] text-xs font-mono text-secondary mb-8 animate-fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.75rem', borderRadius: '9999px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span>Open to Work • Ready for Immediate Hire</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold font-sans animate-slide-up delay-100 mt-4 tracking-tighter" style={{ lineHeight: 1 }}>
                        Akhil<br />
                        <span className="text-secondary font-medium tracking-tight mt-2 block" style={{ fontSize: '0.6em' }}>
                            AI & Software Developer
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-secondary max-w-2xl mt-4 animate-slide-up delay-200" style={{ lineHeight: 1.5, fontWeight: 400 }}>
                        <span className="text-primary font-medium text-white block mb-2">
                            Building intelligent real-world applications using Python, Machine Learning and Full-Stack Development
                        </span>
                        Strong in Data Structures & Algorithms with a passion for writing scalable software. Look at my projects below!
                    </p>

                    <div className="flex flex-wrap gap-3 mt-8 animate-slide-up delay-300" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        <a href="#projects" className="btn btn-primary" style={{ height: '3rem', padding: '0 1.5rem' }}>
                            View Work <ArrowRight size={18} />
                        </a>
                        <button onClick={() => setIsResumeOpen(true)} className="btn btn-secondary" style={{ height: '3rem', padding: '0 1.5rem' }}>
                            <Download size={18} /> Resume
                        </button>

                        <div className="flex gap-2 ml-auto sm:ml-4 border-l border-[var(--divider)] pl-4">
                            <a href="https://github.com/teljeeruakhil" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-lg border border-[var(--divider)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] hover:border-white transition-all text-secondary hover:text-white"
                                title="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/akhilteljeeru" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-lg border border-[var(--divider)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] hover:border-white transition-all text-secondary hover:text-white"
                                title="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://leetcode.com/u/akhil_teljeeru/" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-lg border border-[var(--divider)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] hover:border-white transition-all text-secondary hover:text-white"
                                title="LeetCode">
                                <Code2 size={20} />
                            </a>
                            <a href="mailto:akhilteljeeru@example.com"
                                className="w-12 h-12 flex items-center justify-center rounded-lg border border-[var(--divider)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] hover:border-white transition-all text-secondary hover:text-white"
                                title="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

        </section>
    );
};

export default Hero;
