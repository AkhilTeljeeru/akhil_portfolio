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
        <section id="contact" ref={sectionRef} className="section relative flex items-center justify-center overflow-hidden min-h-screen py-20">
            <div className={`container transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ maxWidth: '1000px', padding: '0 1rem' }}>

                <div className="contact-grid">

                    {/* Left Column: Typography and Info */}
                    <div className="flex flex-col gap-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-main)]/10 border border-[var(--accent-main)]/20 text-[var(--accent-main)] text-sm font-medium tracking-wide w-max">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-main)] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent-main)]"></span>
                                </span>
                                Open to opportunities
                            </div>

                            <h2 style={{ fontSize: 'clamp(1.75rem, 6vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15 }}>
                                Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-main)] to-purple-400">impactful.</span>
                            </h2>

                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg">
                                I'm actively looking for new roles in Software Development and AI/ML Engineering.
                                Whether you have an exciting project, a role to fill, or just want to chat tech—my inbox is open.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 pt-4 border-t border-[var(--divider)]">
                            <a href="mailto:akhilteljeeru@example.com" className="group flex items-center gap-5">
                                <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] border border-[var(--divider)] flex items-center justify-center group-hover:border-[var(--accent-main)] group-hover:bg-[var(--accent-main)]/5 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300">
                                    <Mail size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-main)] transition-colors" />
                                </div>
                                <span className="text-lg font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-main)] transition-colors">
                                    akhilteljeeru@example.com
                                </span>
                            </a>

                            <div className="group flex items-center gap-5">
                                <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] border border-[var(--divider)] flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-400/5 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] transition-all duration-300">
                                    <Phone size={20} className="text-[var(--text-secondary)] group-hover:text-green-400 transition-colors" />
                                </div>
                                <span className="text-lg font-medium text-[var(--text-primary)] transition-colors">
                                    +91 (7569073941)
                                </span>
                            </div>

                            <div className="group flex items-center gap-5 w-max">
                                <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] border border-[var(--divider)] flex items-center justify-center group-hover:border-red-400 group-hover:bg-red-400/5 group-hover:shadow-[0_0_15px_rgba(248,113,113,0.3)] transition-all duration-300">
                                    <MapPin size={20} className="text-[var(--text-secondary)] group-hover:text-red-400 transition-colors" />
                                </div>
                                <span className="text-lg font-medium text-[var(--text-primary)] transition-colors">
                                    India
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <a href="https://www.linkedin.com/in/akhil-teljeeru/" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--bg-secondary)] border border-[var(--divider)] text-[var(--text-secondary)] hover:border-[#0A66C2] hover:text-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.3)] hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
                                <Linkedin size={22} />
                            </a>
                            <a href="https://github.com/akhilteljeeru" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--bg-secondary)] border border-[var(--divider)] text-[var(--text-secondary)] hover:border-white hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300" aria-label="GitHub">
                                <Github size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Minimal Stacked Form */}
                    <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
                        <div className="form-card">

                            <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>

                                <div className="form-group">
                                    <label htmlFor="user_name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        id="user_name"
                                        required
                                        className="form-input"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="user_email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        id="user_email"
                                        required
                                        className="form-input"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        required
                                        className="form-input"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        required
                                        rows={4}
                                        className="form-textarea"
                                        placeholder="Hello, I'd like to talk about..."
                                    ></textarea>
                                </div>

                                <div style={{ marginTop: '0.5rem' }}>
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="form-submit-btn"
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', position: 'relative', height: '1.5rem' }}>
                                            <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease', opacity: status === 'idle' ? 1 : 0, transform: status === 'idle' ? 'translateY(0)' : 'translateY(-10px)', pointerEvents: status === 'idle' ? 'auto' : 'none' }}>
                                                <span>Send Message</span>
                                                <ArrowRight size={18} />
                                            </div>
                                            <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease', opacity: status === 'sending' ? 1 : 0, transform: status === 'sending' ? 'translateY(0)' : 'translateY(10px)', pointerEvents: 'none' }}>
                                                <Loader2 size={18} className="animate-spin" />
                                                <span>Sending...</span>
                                            </div>
                                            <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4ade80', transition: 'all 0.3s ease', opacity: status === 'success' ? 1 : 0, transform: status === 'success' ? 'translateY(0)' : 'translateY(10px)', pointerEvents: 'none' }}>
                                                <CheckCircle2 size={18} />
                                                <span>Message Sent!</span>
                                            </div>
                                            <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f87171', transition: 'all 0.3s ease', opacity: status === 'error' ? 1 : 0, transform: status === 'error' ? 'translateY(0)' : 'translateY(10px)', pointerEvents: 'none' }}>
                                                <AlertCircle size={18} />
                                                <span>Failed to send</span>
                                            </div>
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

// Note: contact-grid styles are injected via index.css or a style block is not needed here;
// the contact-grid class is defined in index.css

export default Contact;









