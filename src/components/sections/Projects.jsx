import { useState } from 'react';
import { Github, ExternalLink, Activity, Code2, Globe, BrainCircuit } from 'lucide-react';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: "AI Resume Screening System",
            category: "AI/ML",
            problem: "Recruiters spend too much time manually screening resumes for specific job descriptions.",
            solution: "NLP-based applicant tracking system that ranks candidates based on JD similarity and extracts key skills.",
            impact: "Automated screening for hundreds of resumes, achieving high precision in keyword matching.",
            techStack: ["Python", "NLP", "Scikit-Learn", "Pandas", "Flask"],
            features: ["Resume Parsing", "JD Similarity Scoring", "Skill Extraction"],
            github: "https://github.com/akhilteljeeru",
            demo: "#"
        },
        {
            title: "E-Commerce Backend Framework",
            category: "Web",
            problem: "Need a highly scalable, secure backend for managing products, users, and transactions.",
            solution: "Designed a robust REST API ecosystem with JWT authentication, role-based access, and optimized queries.",
            impact: "Handled simulated high-traffic loads with <200ms response times.",
            techStack: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
            features: ["JWT Auth", "Caching", "Rate Limiting", "Admin Dashboard API"],
            github: "https://github.com/akhilteljeeru",
            demo: "#"
        },
        {
            title: "Advanced Pathfinding Visualizer",
            category: "DSA",
            problem: "Students struggle to understand how complex graph algorithms operate visually.",
            solution: "Built an interactive grid visualizer for Dijkstra, A*, BFS, and DFS algorithms.",
            impact: "Used as an educational tool to demonstrate performance differences between varied heuristic approaches.",
            techStack: ["React", "JavaScript", "Algorithms", "CSS"],
            features: ["Maze Generation", "Speed Control", "Real-time Visualization"],
            github: "https://github.com/akhilteljeeru",
            demo: "#"
        },
        {
            title: "Fake News Detection System",
            category: "AI/ML",
            problem: "Proliferation of misinformation across digital news platforms.",
            solution: "Text vectorization and supervised learning model classifying news accuracy.",
            impact: "Achieved 94% accuracy on the test dataset.",
            techStack: ["Machine Learning", "Python", "NLTK", "Flask"],
            features: ["Text Vectorization", "Classification Pipeline"],
            github: "https://github.com/akhilteljeeru",
            demo: "#"
        }
    ];

    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

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
                    <div className="flex gap-2 p-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--divider)]">
                        {['All', 'AI/ML', 'Web', 'DSA'].map(f => (
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
                        <div key={idx} className="card flex flex-col h-full group">

                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-2">
                                    {project.category === 'AI/ML' && <BrainCircuit size={18} className="text-accent-blue" />}
                                    {project.category === 'Web' && <Globe size={18} className="text-accent-violet" />}
                                    {project.category === 'DSA' && <Code2 size={18} className="text-green-400" />}
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
                                    <span className="text-xs font-semibold uppercase text-secondary mr-2">Problem:</span>
                                    <span className="text-sm text-primary opacity-90">{project.problem}</span>
                                </div>
                                <div>
                                    <span className="text-xs font-semibold uppercase text-secondary mr-2">Solution:</span>
                                    <span className="text-sm text-primary opacity-90">{project.solution}</span>
                                </div>
                                <div>
                                    <span className="text-xs font-semibold uppercase text-secondary mr-2">Impact:</span>
                                    <span className="text-sm text-primary opacity-90">{project.impact}</span>
                                </div>
                            </div>

                            <div className="mt-auto flex flex-col gap-4 border-t border-[var(--divider)] pt-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, tIdx) => (
                                        <span key={tIdx} className="text-xs font-mono px-2 py-1 rounded bg-[var(--bg-tertiary)] border border-[var(--divider)] text-secondary">
                                            {tech}
                                        </span>
                                    ))}
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
