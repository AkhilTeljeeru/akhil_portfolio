import { Calendar, Award, Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "Cybersecurity Virtual Intern",
            company: "ShadowFox",
            date: "2024 - Present",
            description: "Participated in network security assessments and analyzed threat intelligence feeds."
        },
        {
            title: "Ethical Hacking Virtual Internship",
            company: "Eduskills",
            date: "2023",
            description: "Learned core penetration testing techniques and vulnerability scanning methodologies."
        }
    ];

    const certifications = [
        {
            title: "CCNA Introduction to Networks",
            issuer: "Cisco",
            date: "2023"
        }
    ];

    return (
        <section id="experience" className="section relative" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>

                <div className="mb-16" style={{ marginBottom: '4rem' }}>
                    <h2 className="text-3xl md:text-4xl font-bold font-sans">
                        Experience & <span className="text-gradient">Certifications</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-16" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                            <Briefcase size={20} className="text-accent-blue" />
                            <h3 className="text-xl font-bold text-primary">Work Experience</h3>
                        </div>

                        <div className="relative border-l border-[rgba(255,255,255,0.08)] ml-3 pl-8 pb-4 flex flex-col gap-10" style={{ position: 'relative', borderLeft: '1px solid var(--glass-border)', marginLeft: '0.75rem', paddingLeft: '2rem', paddingBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="relative group" style={{ position: 'relative' }}>
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-accent-blue/30 border-2 border-accent-blue transition-colors group-hover:bg-accent-blue" style={{ position: 'absolute', left: '-37px', top: '0.25rem', width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.3)', border: '2px solid var(--accent-blue)', transition: 'background-color 0.3s' }}></div>

                                    <div className="flex flex-col gap-1" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                        <div className="flex items-center gap-2 text-xs font-mono text-secondary mb-1" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                                            <Calendar size={12} /> {exp.date}
                                        </div>
                                        <h4 className="text-lg font-bold text-primary">{exp.title}</h4>
                                        <p className="text-accent-blue font-medium text-sm mb-2" style={{ color: 'var(--accent-blue)', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.5rem' }}>{exp.company}</p>
                                        <p className="text-secondary text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                            <Award size={20} className="text-accent-violet" />
                            <h3 className="text-xl font-bold text-primary">Certifications</h3>
                        </div>

                        <div className="relative border-l border-[rgba(255,255,255,0.08)] ml-3 pl-8 pb-4 flex flex-col gap-10" style={{ position: 'relative', borderLeft: '1px solid var(--glass-border)', marginLeft: '0.75rem', paddingLeft: '2rem', paddingBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            {certifications.map((cert, idx) => (
                                <div key={idx} className="relative group" style={{ position: 'relative' }}>
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-accent-violet/30 border-2 border-accent-violet transition-colors group-hover:bg-accent-violet" style={{ position: 'absolute', left: '-37px', top: '0.25rem', width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.3)', border: '2px solid var(--accent-violet)', transition: 'background-color 0.3s' }}></div>

                                    <div className="flex flex-col gap-1" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                        <div className="flex items-center gap-2 text-xs font-mono text-secondary mb-1" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                                            <Calendar size={12} /> {cert.date}
                                        </div>
                                        <h4 className="text-lg font-bold text-primary">{cert.title}</h4>
                                        <p className="text-accent-violet font-medium text-sm" style={{ color: 'var(--accent-violet)', fontWeight: 500, fontSize: '0.875rem' }}>{cert.issuer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Experience;
