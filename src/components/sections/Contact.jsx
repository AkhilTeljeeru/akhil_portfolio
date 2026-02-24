import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section relative" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
            <div className="container max-w-3xl mx-auto text-center" style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>

                <div className="inline-block animate-slide-up mb-6">
                    <span className="text-sm font-mono px-3 py-1 rounded-full glass text-accent-blue" style={{ border: '1px solid var(--glass-border)' }}>
                        What's Next?
                    </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans">
                    Get In <span className="text-gradient hover:scale-105 inline-block transition-transform duration-300">Touch</span>
                </h2>

                <p className="text-lg text-secondary mb-12 leading-relaxed" style={{ marginBottom: '3rem' }}>
                    I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll thoughtfully respond to every message.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <a href="mailto:akhilteljeeru@example.com" className="btn btn-primary group flex items-center gap-2" style={{ textDecoration: 'none', padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                        Say Hello <ExternalLink size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>

                    <div className="flex gap-4" style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://github.com/akhilteljeeru" target="_blank" rel="noreferrer" className="glass p-4 rounded-xl hover:-translate-y-1 transition-all group cursor-pointer" style={{ padding: '1rem', borderRadius: '0.75rem', textDecoration: 'none', color: 'var(--text-secondary)', border: '1px solid var(--glass-border)' }}>
                            <Github size={24} className="group-hover:text-primary transition-colors" />
                        </a>
                        <a href="https://linkedin.com/in/akhilteljeeru" target="_blank" rel="noreferrer" className="glass p-4 rounded-xl hover:-translate-y-1 transition-all group cursor-pointer" style={{ padding: '1rem', borderRadius: '0.75rem', textDecoration: 'none', color: 'var(--text-secondary)', border: '1px solid var(--glass-border)' }}>
                            <Linkedin size={24} className="group-hover:text-primary transition-colors" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
