import { useState, useRef, useEffect } from 'react';
import { Mail, Github, Linkedin, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setStatus('success');
                    form.current.reset();
                    setTimeout(() => setStatus('idle'), 5000);
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setStatus('error');
                    setTimeout(() => setStatus('idle'), 5000);
                }
            );
    };

    return (
        <section id="contact" ref={sectionRef} className="section relative flex items-center justify-center overflow-hidden">
            <div className={`container max-w-7xl mx-auto px-6 md:px-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start xl:items-center">

                    {/* Left Column: Typography and Info */}
                    <div className="flex flex-col gap-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20 text-[var(--accent-blue)] text-sm font-medium tracking-wide w-max">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-blue)] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent-blue)]"></span>
                                </span>
                                Open to opportunities
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-[1.15] text-[var(--text-primary)]">
                                Let's connect and build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-blue)] to-purple-400">impactful.</span>
                            </h2>

                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg">
                                I'm actively looking for new roles in Software Development and AI/ML Engineering.
                                Whether you have an exciting project, a role to fill, or just want to chat tech—my inbox is open.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 pt-4 border-t border-[var(--divider)]">
                            <a href="mailto:akhilteljeeru@example.com" className="group flex items-center gap-5 w-max">
                                <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] border border-[var(--divider)] flex items-center justify-center group-hover:border-[var(--accent-blue)] group-hover:bg-[var(--accent-blue)]/5 transition-all duration-300">
                                    <Mail size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-blue)] transition-colors" />
                                </div>
                                <span className="text-lg font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors">
                                    akhilteljeeru@example.com
                                </span>
                            </a>

                            <div className="group flex items-center gap-5 w-max">
                                <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] border border-[var(--divider)] flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-400/5 transition-all duration-300">
                                    <Phone size={20} className="text-[var(--text-secondary)] group-hover:text-green-400 transition-colors" />
                                </div>
                                <span className="text-lg font-medium text-[var(--text-primary)]">
                                    +91 (Add Number)
                                </span>
                            </div>

                            <div className="group flex items-center gap-5 w-max">
                                <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] border border-[var(--divider)] flex items-center justify-center group-hover:border-red-400 group-hover:bg-red-400/5 transition-all duration-300">
                                    <MapPin size={20} className="text-[var(--text-secondary)] group-hover:text-red-400 transition-colors" />
                                </div>
                                <span className="text-lg font-medium text-[var(--text-primary)]">
                                    India
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <a href="https://linkedin.com/in/akhilteljeeru" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--bg-secondary)] border border-[var(--divider)] text-[var(--text-secondary)] hover:border-[#0A66C2] hover:text-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.3)] hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
                                <Linkedin size={22} />
                            </a>
                            <a href="https://github.com/akhilteljeeru" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--bg-secondary)] border border-[var(--divider)] text-[var(--text-secondary)] hover:border-white hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300" aria-label="GitHub">
                                <Github size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Minimal Stacked Form */}
                    <div className="relative w-full max-w-xl lg:max-w-none mx-auto">
                        <div className="relative bg-[var(--bg-secondary)]/50 backdrop-blur-xl border border-[var(--divider)] rounded-2xl p-8 sm:p-10 shadow-2xl">

                            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-8">

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="user_name" className="text-sm text-[var(--text-secondary)] font-medium">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        id="user_name"
                                        required
                                        className="w-full px-4 py-5 rounded-lg bg-transparent border border-[var(--divider)] text-white placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-blue)] focus:ring-1 focus:ring-[var(--accent-blue)] focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="user_email" className="text-sm text-[var(--text-secondary)] font-medium">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        id="user_email"
                                        required
                                        className="w-full px-4 py-5 rounded-lg bg-transparent border border-[var(--divider)] text-white placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-blue)] focus:ring-1 focus:ring-[var(--accent-blue)] focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="subject" className="text-sm text-[var(--text-secondary)] font-medium">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        required
                                        className="w-full px-4 py-5 rounded-lg bg-transparent border border-[var(--divider)] text-white placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-blue)] focus:ring-1 focus:ring-[var(--accent-blue)] focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-sm text-[var(--text-secondary)] font-medium">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        required
                                        rows="7"
                                        className="w-full px-4 py-5 rounded-lg bg-transparent border border-[var(--divider)] text-white placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-blue)] focus:ring-1 focus:ring-[var(--accent-blue)] focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 resize-none"
                                        placeholder="Hello, I'd like to talk about..."
                                    ></textarea>
                                </div>

                                <div className="mt-6 w-full">
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full flex items-center justify-center gap-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold text-base py-4 px-6 rounded-lg border border-transparent hover:bg-white hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                    >
                                        <div className="relative flex items-center justify-center transition-all z-10 w-full">
                                            {status === 'idle' && (
                                                <div className="flex items-center gap-2">
                                                    <span>Send Message</span>
                                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            )}
                                            {status === 'sending' && (
                                                <div className="flex items-center gap-2 text-[var(--bg-primary)]">
                                                    <Loader2 size={18} className="animate-spin" />
                                                    <span>Sending...</span>
                                                </div>
                                            )}
                                            {status === 'success' && (
                                                <div className="flex items-center gap-2 text-green-700">
                                                    <CheckCircle2 size={18} />
                                                    <span>Message Sent!</span>
                                                </div>
                                            )}
                                            {status === 'error' && (
                                                <div className="flex items-center gap-2 text-red-700">
                                                    <AlertCircle size={18} />
                                                    <span>Failed to send</span>
                                                </div>
                                            )}
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
