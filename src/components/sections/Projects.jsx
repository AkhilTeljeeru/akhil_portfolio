import { useState } from 'react';
import { Github, ExternalLink, Code2, Globe, BrainCircuit } from 'lucide-react';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: "Cyber Threat Intelligence (CTI) Toolkit",
            category: "Cybersecurity / Cloud-Linux",
            problem: "Traditional systems lack automated real-time monitoring for USB activity, malicious URLs, and suspicious files.",
            solution: "Developed a Python-based CTI toolkit to detect and analyze security threats.",
            impact: "Improved incident analysis by automating threat detection and providing real-time security visibility.",
            techStack: ["Python", "HTML", "CSS"],
            features: ["USB activity monitoring", "Malicious URL scanning", "Suspicious file analysis", "Automated threat detection", "Structured security report generation", "Real-time dashboard for vulnerability insights"],
            github: "https://github.com/akhilteljeeru",
            demo: "#",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "AI Resume Screening System",
            category: "AI/ML",
            problem: "Manual resume screening is time-consuming and inefficient for recruiters.",
            solution: "Built an NLP-based AI system that analyzes resumes and ranks candidates based on job requirements.",
            impact: "Reduced manual screening effort and improved recruitment efficiency through intelligent candidate filtering.",
            techStack: ["Python", "NLP", "Machine Learning", "HTML", "CSS"],
            features: ["Resume parsing and skill extraction", "Job description matching", "Candidate ranking system", "Automated screening workflow", "Simple web-based interface"],
            github: "https://github.com/akhilteljeeru",
            demo: "#",
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Fake News & Phishing Detection NLP",
            category: "AI/ML",
            problem: "Users struggle to identify malicious phishing links and sophisticated fake news articles.",
            solution: "Trained an NLP model to classify text credibility and cross-reference known phishing URL patterns.",
            impact: "Demonstrated 90%+ precision model capabilities for text-based semantic classification.",
            techStack: ["Python", "NLTK", "Machine Learning", "Flask API"],
            features: ["TF-IDF Text Vectorization", "URL Pattern Analysis", "Web Dashboard Integration"],
            github: "https://github.com/akhilteljeeru",
            demo: "#",
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category.includes(filter));

    return (
        <section id="projects" className="section relative" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                    {filteredProjects.map((project, idx) => (
                        <div key={idx} className="card relative flex flex-col h-full group overflow-hidden border border-[var(--divider)] hover:border-[rgba(255,255,255,0.3)] transition-all duration-300 bg-[var(--bg-secondary)] p-6 rounded-xl">

                            {/* Hover Image Background */}
                            <div
                                className="absolute inset-0 z-0 bg-cover bg-center opacity-0 group-hover:opacity-[0.12] transition-opacity duration-500 ease-in-out pointer-events-none"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-2">
                                        {project.category.includes('AI') && <BrainCircuit size={18} className="text-green-400" />}
                                        {project.category.includes('Cybersecurity') && <Globe size={18} className="text-red-400" />}
                                        {project.category.includes('Cloud') && <Code2 size={18} className="text-accent-blue" />}
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

                                <div className="flex flex-col gap-3 flex-grow mb-6">
                                    <div>
                                        <span className="text-xs font-semibold uppercase text-secondary block mb-1">Problem:</span>
                                        <span className="text-sm text-primary opacity-90">{project.problem}</span>
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold uppercase text-secondary block mb-1">Solution & Highlights:</span>
                                        <span className="text-sm text-primary opacity-90">{project.solution}</span>
                                        <ul className="text-sm text-secondary mt-2 flex flex-col gap-1 list-none pl-1">
                                            {project.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex gap-2 items-start">
                                                    <span className="text-accent-blue mt-[4px] text-[10px]">●</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold uppercase text-secondary block mb-1">Impact:</span>
                                        <span className="text-sm font-medium text-white bg-white/5 inline-block px-2 py-1 rounded border border-white/10">{project.impact}</span>
                                    </div>
                                </div>

                                <div className="mt-auto flex flex-col gap-4 border-t border-[var(--divider)] pt-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, tIdx) => (
                                            <span key={tIdx} className="text-[11px] font-mono px-2 py-1 rounded bg-[var(--bg-tertiary)] border border-[var(--divider)] text-secondary">
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
