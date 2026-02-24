import { Mail, Github, Linkedin, ExternalLink, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section relative" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
            <div className="container max-w-4xl mx-auto" style={{ maxWidth: '800px', margin: '0 auto' }}>

                <div className="mb-12 text-center" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <h2 className="text-3xl md:text-4xl font-bold font-sans">
                        Get In <span className="text-secondary">Touch</span>
                    </h2>
                    <p className="text-secondary mt-4 max-w-2xl mx-auto">
                        I'm actively looking for new opportunities in Software Development and AI/ML Engineering.
                        My inbox is always open for discussions, collaborations, or just a quick hello.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono mb-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Open to opportunities
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <a href="mailto:akhilteljeeru@example.com" className="flex items-center gap-2 text-secondary hover:text-white transition-colors group px-4 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--divider)] hover:border-[var(--accent-blue)]" style={{ textDecoration: 'none' }}>
                            <Mail size={18} className="text-accent-blue" />
                            <span>akhilteljeeru@example.com</span>
                        </a>

                        <div className="flex items-center gap-2 text-secondary px-4 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--divider)]">
                            <Phone size={18} className="text-green-400" />
                            <span>+91 (Add Number)</span>
                        </div>

                        <div className="flex items-center gap-2 text-secondary px-4 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--divider)]">
                            <MapPin size={18} className="text-red-400" />
                            <span>India</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-2">
                        <a href="https://linkedin.com/in/akhilteljeeru" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-secondary)] border border-[var(--divider)] hover:bg-[var(--bg-tertiary)] hover:text-accent-blue transition-colors text-secondary" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/akhilteljeeru" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-secondary)] border border-[var(--divider)] hover:bg-[var(--bg-tertiary)] hover:text-white transition-colors text-secondary" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
