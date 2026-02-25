import { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Eye, Download, Code2 } from 'lucide-react';

const Hero = () => {

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden section" style={{ position: 'relative', overflow: 'hidden' }}>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-main/10 rounded-full blur-[120px] pointer-events-none" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'rgba(0, 255, 255, 0.1)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />

            <div className="container relative z-10" style={{ position: 'relative', zIndex: 10 }}>
                <div className="max-w-4xl">

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] text-xs font-mono text-secondary mb-8 animate-fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.75rem', borderRadius: '9999px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span>Open to Work • Ready for Immediate Hire</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold font-sans animate-slide-up delay-100 tracking-tighter" style={{ lineHeight: 1 }}>
                        Teljeeru Akhil<br />
                        <span className="text-secondary font-medium tracking-tight mt-2 block" style={{ fontSize: '0.6em' }}>
                            AI & Cybersecurity Engineer
                        </span>
                    </h1>

                    <div className="mt-4 animate-slide-up delay-100 border-l-2 border-accent-main pl-4 py-1">
                        <p className="text-lg md:text-xl font-medium text-white mb-1">
                            Final-year B.Tech | Open to Software Developer, AI/ML & Cybersecurity roles
                        </p>
                        <p className="text-base md:text-lg text-secondary">
                            Strong in DSA, System Design & real-world security projects
                        </p>
                    </div>

                    <p className="text-lg md:text-xl text-secondary max-w-3xl mt-6 animate-slide-up delay-200" style={{ lineHeight: 1.6, fontWeight: 400 }}>
                        I build intelligent, secure, and highly scalable cloud-native systems. With a strong foundation in Linux, AWS, and modern networking, I specialize in architecting real-world AI applications and robust security solutions. I am actively seeking roles where I can leverage my expertise to solve complex engineering challenges.
                    </p>



                    <div className="flex flex-wrap gap-4 mt-10 animate-slide-up delay-300 items-center">
                        <a href="/my_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ height: '3rem', padding: '0 1.5rem', gap: '0.5rem' }}>
                            View <Eye size={18} />
                        </a>
                        <a href="/my_resume.pdf" download className="btn btn-primary" style={{ height: '3rem', padding: '0 1.5rem', gap: '0.5rem' }}>
                            Resume <Download size={18} />
                        </a>
                        <a href="#contact" className="btn btn-secondary" style={{ height: '3rem', padding: '0 1.5rem' }}>
                            Contact Me
                        </a>

                        <div className="flex gap-2 sm:gap-3 ml-auto sm:ml-4 border-l border-[var(--divider)] pl-4">
                            <a href="https://github.com/AkhilTeljeeru" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-lg border border-[var(--divider)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] hover:border-white transition-all text-secondary hover:text-white"
                                title="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/akhil-teljeeru/" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-lg border border-[var(--divider)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] hover:border-white transition-all text-secondary hover:text-white"
                                title="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://leetcode.com/u/akhil_teljeeru/" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-lg border border-[var(--divider)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] hover:border-white transition-all text-secondary hover:text-white"
                                title="LeetCode">
                                <Code2 size={20} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>


        </section>
    );
};

export default Hero;









