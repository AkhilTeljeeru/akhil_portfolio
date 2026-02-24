import { Code2, Cpu, Database, Cloud, Layout, Shield } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code2 size={24} />,
            skills: ["Python", "Java", "JavaScript", "SQL"]
        },
        {
            title: "AI & ML",
            icon: <Cpu size={24} />,
            skills: ["NLP", "Scikit-learn", "Machine Learning", "Data Analysis"]
        },
        {
            title: "Backend & Tools",
            icon: <Database size={24} />,
            skills: ["Flask", "REST APIs", "Git", "Linux", "Docker"]
        },
        {
            title: "Cloud",
            icon: <Cloud size={24} />,
            skills: ["AWS", "Cloud Infrastructure", "Deployment"]
        },
        {
            title: "Web",
            icon: <Layout size={24} />,
            skills: ["HTML5", "CSS3", "React", "Node.js", "TailwindCSS"]
        },
        {
            title: "Cybersecurity",
            icon: <Shield size={24} />,
            skills: ["Network Security", "Kali Linux", "Ethical Hacking", "Threat Intel"]
        }
    ];

    return (
        <section id="skills" className="section relative" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '1100px' }}>

                <div className="mb-12" style={{ marginBottom: '3rem' }}>
                    <h2 className="text-3xl md:text-4xl font-bold font-sans">
                        Tech <span className="text-gradient">Stack</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="glass-card hover:-translate-y-1 transition-transform duration-300" style={{ padding: '1.5rem', border: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
                            <div className="flex items-center gap-4 mb-5" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                                <div className="p-2 rounded-md bg-[rgba(255,255,255,0.03)] text-secondary border border-[rgba(255,255,255,0.05)]" style={{ background: 'rgba(255, 255, 255, 0.03)', color: 'var(--text-secondary)', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-primary" style={{ color: 'var(--text-primary)' }}>{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1 text-xs font-mono rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] text-secondary transition-colors cursor-default hover:bg-[rgba(255,255,255,0.05)] hover:text-primary"
                                        style={{
                                            padding: '0.25rem 0.75rem',
                                            fontSize: '0.75rem',
                                            borderRadius: '9999px',
                                            background: 'rgba(255,255,255,0.02)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            color: 'var(--text-secondary)',
                                            fontFamily: 'var(--font-mono)'
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
