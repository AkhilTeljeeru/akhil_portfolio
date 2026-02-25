import { useState } from 'react';
import { Github, ExternalLink, Code2, Globe, BrainCircuit } from 'lucide-react';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: "Cyber Threat Intelligence (CTI) Toolkit",
            category: "Cybersecurity / Cloud-Linux",
            description: "Developed a Python-based CTI toolkit for automated threat detection and analysis, replacing manual monitoring for USB activity, malicious URLs, and suspicious files.",
            impact: "Improved incident analysis through automated detection.",
            techStack: ["Python", "HTML", "CSS"],
            github: "https://github.com/AkhilTeljeeru",
            demo: "https://cyberthreatintelligence.onrender.com",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "AI Resume Screening System",
            category: "AI/ML",
            description: "Built an NLP-based system to analyze and rank resumes based on job requirements, eliminating slow and inefficient manual screening for recruiters.",
            impact: "Reduced manual effort & improved recruitment efficiency.",
            techStack: ["Python", "NLP", "Machine Learning", "HTML", "CSS"],
            github: "https://github.com/AkhilTeljeeru",
            demo: "https://ai-resume-project-beige.vercel.app/",
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Fake News & Phishing Detection NLP",
            category: "AI/ML",
            description: "Trained an NLP model to classify text credibility and detect malicious URL patterns to help users identify phishing links and fake news.",
            impact: "Achieved 90%+ precision in semantic classification.",
            techStack: ["Python", "NLTK", "Machine Learning", "Flask API"],
            github: "https://github.com/AkhilTeljeeru",
            demo: "#",
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category.includes(filter));

    return (
        <section id="projects" className="section relative flex items-center justify-center">
            <div className="container" style={{ maxWidth: '1000px' }}>

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" style={{ marginBottom: '3rem' }}>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-sans">
                            Featured <span className="text-secondary">Projects</span>
                        </h2>
                        <p className="text-secondary mt-2 max-w-xl">
                            A selection of my best work focusing on Machine Learning, scalable Web Development, and complex Algorithmic problem-solving.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-2 p-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--divider)]">
                        {['All', 'AI/ML', 'Cybersecurity', 'Cloud/Linux'].map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${filter === f ? 'bg-[var(--bg-tertiary)] text-primary shadow-sm border border-[var(--divider)]' : 'text-secondary hover:text-primary'}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                    {filteredProjects.map((project, idx) => (
                        <div key={idx} className="card relative flex flex-col h-full shrink-0 w-[85vw] sm:w-[420px] snap-center sm:snap-start group overflow-hidden border border-[var(--divider)] hover:border-[rgba(255,255,255,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-500 bg-[var(--bg-secondary)] p-7 rounded-2xl">

                            {/* Hover Image Background with subtle gradient overlay */}
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-[var(--bg-secondary)]/90 to-transparent z-10" />
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-30 transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-2">
                                        {project.category.includes('AI') && <BrainCircuit size={18} className="text-green-400" />}
                                        {project.category.includes('Cybersecurity') && <Globe size={18} className="text-red-400" />}
                                        {project.category.includes('Cloud') && <Code2 size={18} className="text-accent-main" />}
                                        <span className="text-xs font-mono uppercase tracking-wider text-secondary">{project.category}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors" title="Source Code">
                                            <Github size={18} />
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors" title="Live Demo">
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>

                                <div className="flex flex-col gap-4 flex-grow mb-6">
                                    <p className="text-sm text-primary opacity-90 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="mt-2">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--divider)] shadow-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500/80"></span>
                                            <span className="text-xs font-medium text-white/95">{project.impact}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 border-t border-[var(--divider)] relative z-10">
                                    <div className="flex flex-wrap items-center gap-2">
                                        {project.techStack.map((tech, tIdx) => (
                                            <span key={tIdx} className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-[var(--bg-tertiary)] text-secondary border border-[var(--divider)] hover:border-white transition-colors cursor-default">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;










