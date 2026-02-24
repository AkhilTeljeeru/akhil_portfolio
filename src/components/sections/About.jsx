import { Code2, Database, MapPin, Briefcase } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section relative" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>

                <div className="mb-12" style={{ marginBottom: '3rem' }}>
                    <h2 className="text-3xl md:text-4xl font-bold font-sans">
                        About <span className="text-secondary">Me</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-12 gap-10 items-start" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', alignItems: 'start' }}>

                    {/* Left: Professional Summary */}
                    <div className="md:col-span-8 flex flex-col gap-6" style={{ gridColumn: 'span 8 / span 8', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <p className="text-secondary text-lg leading-relaxed" style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                            I am a final-year Computer Science student passionate about solving scalable problems. I specialize in building real-world Full-Stack applications and integrating Machine Learning models into robust backend architectures.
                        </p>
                        <p className="text-secondary text-lg leading-relaxed" style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                            With a strong foundation in <strong className="text-primary font-medium">Data Structures & Algorithms</strong>, I don't just write code; I engineer solutions that are optimized for performance. Whether it's designing RESTful microservices or deploying intelligent AI-driven features, I focus on delivering tangible business impact.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1rem' }}>
                            <div className="card p-4 flex flex-col gap-2">
                                <div className="text-white"><Code2 size={24} /></div>
                                <h4 className="font-semibold text-primary mt-2" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Problem Solving</h4>
                                <p className="text-sm text-secondary">Strong DSA Fundamentals, LeetCode, CodeChef.</p>
                            </div>
                            <div className="card p-4 flex flex-col gap-2">
                                <div className="text-white"><Database size={24} /></div>
                                <h4 className="font-semibold text-primary mt-2" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>System Design</h4>
                                <p className="text-sm text-secondary">Scalable backends, ML Deployments.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Quick Facts Card */}
                    <div className="md:col-span-4" style={{ gridColumn: 'span 4 / span 4' }}>
                        <div className="card flex flex-col" style={{ padding: '2rem' }}>
                            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[var(--divider)]">
                                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden bg-[var(--bg-tertiary)] border border-[var(--divider)] flex items-center justify-center font-mono text-xl text-white">
                                    AT
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-primary">Akhil Teljeeru</h3>
                                    <p className="text-sm text-secondary flex items-center gap-1 mt-1">
                                        <MapPin size={14} /> India
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div>
                                    <h4 className="text-xs uppercase tracking-wider text-secondary font-mono mb-2">Current Status</h4>
                                    <div className="flex items-center gap-2 text-sm text-primary">
                                        <Briefcase size={16} /> Seeking Entry-Level Roles
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-wider text-secondary font-mono mb-2">Education</h4>
                                    <div className="text-sm text-primary">
                                        B.Tech Computer Science<br />(Final Year)
                                    </div>
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
