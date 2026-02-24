import { Github, ExternalLink, Activity } from 'lucide-react';

const Projects = () => {
    const featuredProject = {
        title: "Cyber Threat Intelligence Toolkit",
        problem: "Security analysts lack centralized, easily accessible threat data.",
        solution: "A Python-based centralized detection system with real-time log analysis and automated reporting.",
        impact: "Reduces manual analysis time by 70% and accelerates incident response.",
        tags: ["Python", "Flask", "React", "Cybersecurity", "Elasticsearch"],
        github: "https://github.com/akhilteljeeru",
        demo: "#"
    };

    const otherProjects = [
        {
            title: "AI Resume Screening System",
            description: "An NLP-based resume applicant tracking system that ranks candidates for recruiters based on job description similarity, skill extraction, and experience analysis.",
            tags: ["Python", "NLP", "Scikit", "Pandas"],
            github: "https://github.com/akhilteljeeru"
        },
        {
            title: "Fake News Detection System",
            description: "Machine learning model for accurate news classification. Utilizes advanced text vectorization and supervised learning to detect misinformation with high accuracy.",
            tags: ["ML", "Python", "NLTK", "Flask"],
            github: "https://github.com/akhilteljeeru"
        }
    ];

    return (
        <section id="projects" className="section relative" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '1100px' }}>

                <div className="mb-12" style={{ marginBottom: '4rem' }}>
                    <h2 className="text-3xl md:text-4xl font-bold font-sans">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                </div>

                {/* Featured Project Layout */}
                <div className="glass-card mb-12 flex flex-col md:flex-row gap-0 group relative overflow-hidden" style={{ padding: '0', display: 'flex', flexDirection: 'row', border: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>

                    <div className="flex-1 p-8 md:p-10 relative z-10" style={{ flex: 1, padding: '3rem' }}>
                        <div className="flex items-center gap-2 mb-4 text-secondary font-mono text-sm" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                            <Activity size={14} className="text-accent-blue" /> FEATURED WORK
                        </div>

                        <h3 className="text-3xl font-bold mb-6 text-primary">{featuredProject.title}</h3>

                        <div className="flex flex-col gap-4 mb-8" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                            <div>
                                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1" style={{ fontSize: '0.75rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Problem</h4>
                                <p className="text-secondary" style={{ color: 'var(--text-secondary)' }}>{featuredProject.problem}</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1" style={{ fontSize: '0.75rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Solution</h4>
                                <p className="text-secondary" style={{ color: 'var(--text-secondary)' }}>{featuredProject.solution}</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1" style={{ fontSize: '0.75rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Impact</h4>
                                <p className="text-secondary" style={{ color: 'var(--text-secondary)' }}>{featuredProject.impact}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                            {featuredProject.tags.map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 font-mono text-xs rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] text-secondary" style={{ padding: '0.25rem 0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', color: 'var(--text-secondary)' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4" style={{ display: 'flex', gap: '1rem' }}>
                            <a href={featuredProject.github} target="_blank" rel="noreferrer" className="btn btn-secondary text-sm" style={{ padding: '0.5rem 1rem' }}>
                                <Github size={16} /> Source Code
                            </a>
                            <a href={featuredProject.demo} target="_blank" rel="noreferrer" className="btn btn-primary text-sm" style={{ padding: '0.5rem 1rem' }}>
                                <ExternalLink size={16} /> Live Demo
                            </a>
                        </div>
                    </div>

                    {/* Clean Developer Console/UI Representation */}
                    <div className="flex-1 hidden md:flex flex-col border-l border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.2)]" style={{ flex: 1, display: 'flex', flexDirection: 'column', borderLeft: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)' }}>
                        <div className="flex items-center px-4 py-3 border-b border-[rgba(255,255,255,0.05)] bg-[rgba(0,0,0,0.3)]" style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.3)' }}>
                            <div className="flex gap-2" style={{ display: 'flex', gap: '0.5rem' }}>
                                <div className="w-3 h-3 rounded-full bg-red-400/80" style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(248, 113, 113, 0.8)' }}></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400/80" style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(250, 204, 21, 0.8)' }}></div>
                                <div className="w-3 h-3 rounded-full bg-green-400/80" style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(74, 222, 128, 0.8)' }}></div>
                            </div>
                            <span className="mx-auto text-xs font-mono text-secondary opacity-60">app.py - Cyber Threat Monitor</span>
                        </div>
                        <div className="p-6 font-mono text-xs text-secondary leading-loose" style={{ padding: '1.5rem', fontFamily: 'monospace', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                            <p>$ cti-toolkit start --dashboard</p>
                            <p className="text-green-400" style={{ color: '#4ade80' }}>&gt; Initializing elastic backend...</p>
                            <p>&gt; Listening on interface eth0</p>
                            <p>&gt; Analyzing 1,420 incoming connections/sec</p>
                            <p className="text-yellow-400 mt-2" style={{ color: '#facc15', marginTop: '0.5rem' }}>&gt; [WARN] Unusual payload detected from 192.168.1.5</p>
                            <p className="text-red-400" style={{ color: '#f87171' }}>&gt; [ALERT] Signature Match: SQLi attemped</p>
                            <p className="text-accent-blue" style={{ color: 'var(--accent-blue)' }}>&gt; Action taken: Auto-dropped packet. Updating rules...</p>
                            <br />
                            <p>&gt; System optimal. 0 active threats.</p>
                            <p className="animate-pulse">_</p>
                        </div>
                    </div>
                </div>

                {/* Regular Grid for others */}
                <div className="grid md:grid-cols-2 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {otherProjects.map((project, idx) => (
                        <div key={idx} className="glass-card flex flex-col hover:-translate-y-1 transition-transform duration-300" style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
                            <div className="flex justify-between items-start mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                                <a href={project.github} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}>
                                    <Github size={20} />
                                </a>
                            </div>

                            <p className="text-secondary mb-6 flex-1 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, fontSize: '0.875rem', lineHeight: 1.6 }}>
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="text-xs font-mono text-secondary" style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                                        {tag}
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

export default Projects;
