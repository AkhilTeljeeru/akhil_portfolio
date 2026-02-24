import { useEffect, useState } from 'react';
import { ArrowRight, Download, Terminal, Github, Linkedin } from 'lucide-react';

const Hero = () => {
    const roles = [
        "AI Engineer",
        "Software Developer",
        "Backend Developer"
    ];

    const [currentRole, setCurrentRole] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        let timer;
        const handleType = () => {
            const fullText = roles[currentRole];

            if (!isDeleting && typedText === fullText) {
                timer = setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && typedText === "") {
                setIsDeleting(false);
                setCurrentRole((prev) => (prev + 1) % roles.length);
                setTypingSpeed(100);
            } else {
                const nextText = isDeleting
                    ? fullText.substring(0, typedText.length - 1)
                    : fullText.substring(0, typedText.length + 1);

                setTypedText(nextText);
                setTypingSpeed(isDeleting ? 50 : 100);
                timer = setTimeout(handleType, typingSpeed);
            }
        };

        timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [typedText, isDeleting, currentRole, typingSpeed, roles]);

    return (
        <section id="home" className="section relative min-h-screen flex items-center justify-center pt-32 pb-16" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
            <div className="container flex flex-col items-center text-center gap-12" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '3rem' }}>

                {/* Main Content */}
                <div className="flex-col gap-6 items-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                    <div className="inline-block animate-slide-up">
                        <span className="text-2xl md:text-3xl font-mono px-6 py-3 rounded-full glass" style={{ color: 'var(--accent-blue)', border: '1px solid var(--glass-border)' }}>
                            Welcome to my portfolio
                        </span>
                    </div>

                    <h1 className="text-7xl md:text-9xl font-bold font-sans animate-slide-up delay-100" style={{ lineHeight: 1.1 }}>
                        Hi, I'm <span className="text-gradient">Akhil Teljeeru</span>
                    </h1>

                    <div className="h-14 animate-slide-up delay-200 mt-4">
                        <h2 className="text-4xl md:text-5xl text-secondary font-mono">
                            <span className="opacity-70">&gt;</span> {typedText}
                            <span className="animate-pulse" style={{ animation: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>_</span>
                        </h2>
                    </div>

                    <p className="text-2xl md:text-3xl text-secondary max-w-3xl mt-6 animate-slide-up delay-300">
                        I design and build intelligent, scalable backend systems.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-8 animate-slide-up delay-300" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                        <a href="#projects" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
                            Download Resume <Download size={18} />
                        </a>
                    </div>

                    <div className="flex justify-center gap-4 mt-6 animate-slide-up delay-300" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                        <a href="https://github.com/teljeeruakhil" target="_blank" rel="noopener noreferrer"
                            className="p-3 glass rounded-full hover:border-[rgba(255,255,255,0.2)] transition-colors text-secondary hover:text-white"
                            style={{ padding: '0.75rem', borderRadius: '50%', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'all 0.2s ease', display: 'flex' }}>
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/akhilteljeeru" target="_blank" rel="noopener noreferrer"
                            className="p-3 glass rounded-full hover:border-[rgba(255,255,255,0.2)] transition-colors text-secondary hover:text-white"
                            style={{ padding: '0.75rem', borderRadius: '50%', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'all 0.2s ease', display: 'flex' }}>
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
