import { Code2, Database, Server, Compass } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section relative" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>

                <div className="mb-12" style={{ marginBottom: '3rem' }}>
                    <h2 className="text-3xl md:text-4xl font-bold font-sans">
                        About <span className="text-gradient">Me</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-12 gap-10 items-start" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', alignItems: 'start' }}>

                    {/* Left: Professional Summary */}
                    <div className="md:col-span-7 flex flex-col gap-6" style={{ gridColumn: 'span 7 / span 7', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <p className="text-secondary text-lg leading-relaxed" style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                            I am an AI Engineer & Backend Developer focused on building real-world, intelligent systems. My expertise lies at the intersection of robust backend architecture and data-driven solutions, allowing me to build applications that are both highly scalable and smart.
                        </p>
                        <p className="text-secondary text-lg leading-relaxed" style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                            Whether it's deploying machine learning models, designing RESTful APIs, or managing cloud infrastructure, I take a holistic approach to software engineering. My goal is to write clean, modular code that scales seamlessly under load while delivering tangible business impact.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1rem' }}>
                            <div className="flex items-start gap-3" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <div className="text-accent-blue mt-1"><Server size={20} /></div>
                                <div>
                                    <h4 className="font-semibold text-primary" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Backend Systems</h4>
                                    <p className="text-sm text-secondary">APIs, Microservices, DBs</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <div className="text-accent-violet mt-1"><Code2 size={20} /></div>
                                <div>
                                    <h4 className="font-semibold text-primary" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>AI Integration</h4>
                                    <p className="text-sm text-secondary">ML deployment, LLMs</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Photo Card & Stats */}
                    <div className="md:col-span-5" style={{ gridColumn: 'span 5 / span 5' }}>
                        <div className="glass-card flex flex-col items-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', border: '1px solid var(--glass-border)' }}>
                            <div className="relative mb-6" style={{ position: 'relative', marginBottom: '1.5rem' }}>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-violet-500 blur-md opacity-30" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, borderRadius: '50%', background: 'var(--accent-gradient)', filter: 'blur(12px)', opacity: 0.3 }}></div>
                                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-[rgba(255,255,255,0.1)] relative z-10 bg-black/50" style={{ width: '10rem', height: '10rem', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)', position: 'relative', zIndex: 10, background: 'rgba(0,0,0,0.5)' }}>
                                    {/* Using a placeholder that fits the dark minimal aesthetic */}
                                    <img
                                        src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=400&auto=format&fit=crop"
                                        alt="Akhil Teljeeru"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', filter: 'contrast(1.1) brightness(0.9) grayscale(20%)' }}
                                    />
                                </div>
                            </div>

                            <p className="text-center text-sm text-secondary mb-6 italic" style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                "Constantly learning, constantly building."
                            </p>

                            <div className="w-full grid grid-cols-2 gap-4 border-t border-[rgba(255,255,255,0.08)] pt-6" style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                                <div className="text-center" style={{ textAlign: 'center' }}>
                                    <h4 className="text-2xl font-bold text-gradient font-mono">3+</h4>
                                    <p className="text-xs text-secondary uppercase tracking-wider mt-1" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem' }}>Projects</p>
                                </div>
                                <div className="text-center border-l border-[rgba(255,255,255,0.08)]" style={{ textAlign: 'center', borderLeft: '1px solid var(--glass-border)' }}>
                                    <h4 className="text-2xl font-bold text-gradient font-mono">2</h4>
                                    <p className="text-xs text-secondary uppercase tracking-wider mt-1" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem' }}>Internships</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
