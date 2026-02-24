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

                <div className="grid md:grid-cols-2 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

                    {/* Direct Contact */}
                    <div className="card flex flex-col gap-6">
                        <h3 className="text-xl font-semibold text-primary font-mono mb-2 border-b border-[var(--divider)] pb-4">Direct Contact</h3>

                        <a href="mailto:akhilteljeeru@example.com" className="flex items-center gap-4 text-secondary hover:text-white transition-colors group" style={{ textDecoration: 'none' }}>
                            <div className="w-12 h-12 rounded-full border border-[var(--divider)] bg-[var(--bg-tertiary)] flex items-center justify-center group-hover:border-white transition-colors">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-mono text-secondary mb-1">Email</p>
                                <p className="font-medium text-primary">akhilteljeeru@example.com</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 text-secondary">
                            <div className="w-12 h-12 rounded-full border border-[var(--divider)] bg-[var(--bg-tertiary)] flex items-center justify-center">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-mono text-secondary mb-1">Phone</p>
                                <p className="font-medium text-primary">+91 (Add Number)</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-secondary">
                            <div className="w-12 h-12 rounded-full border border-[var(--divider)] bg-[var(--bg-tertiary)] flex items-center justify-center">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-mono text-secondary mb-1">Location</p>
                                <p className="font-medium text-primary">India</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Profiles */}
                    <div className="card flex flex-col gap-6">
                        <h3 className="text-xl font-semibold text-primary font-mono mb-2 border-b border-[var(--divider)] pb-4">Social Profiles</h3>

                        <a href="https://linkedin.com/in/akhilteljeeru" target="_blank" rel="noreferrer" className="flex items-center justify-between text-secondary hover:text-white transition-colors group p-4 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--divider)] hover:border-white" style={{ textDecoration: 'none' }}>
                            <div className="flex items-center gap-3">
                                <Linkedin size={24} />
                                <span className="font-medium text-primary">LinkedIn</span>
                            </div>
                            <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>

                        <a href="https://github.com/akhilteljeeru" target="_blank" rel="noreferrer" className="flex items-center justify-between text-secondary hover:text-white transition-colors group p-4 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--divider)] hover:border-white" style={{ textDecoration: 'none' }}>
                            <div className="flex items-center gap-3">
                                <Github size={24} />
                                <span className="font-medium text-primary">GitHub</span>
                            </div>
                            <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
