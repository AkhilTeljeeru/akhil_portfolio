import { Code2, BrainCircuit, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Coding Languages",
            icon: <Code2 size={24} className="text-secondary" />,
            skills: ["Python", "Java"]
        },
        {
            title: "AI / ML",
            icon: <BrainCircuit size={24} className="text-green-400" />,
            skills: ["NumPy", "Pandas", "Scikit-learn", "NLP"]
        },
        {
            title: "Cybersecurity",
            icon: <Wrench size={24} className="text-red-400" />,
            skills: ["Linux Security", "Network Security"]
        },
        {
            title: "Networking",
            icon: <Database size={24} className="text-accent-violet" />,
            skills: ["TCP/IP", "DNS", "HTTP/HTTPS", "Firewalls"]
        },
        {
            title: "Tools & Frameworks",
            icon: <Code2 size={24} className="text-secondary" />,
            skills: ["GitHub", "VS Code", "Unity"]
        }
    ];

    return (
        <section id="skills" className="section relative" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>

                <div className="mb-12" style={{ marginBottom: '3rem' }}>
                    <h2 className="text-3xl md:text-4xl font-bold font-sans">
                        Technical <span className="text-secondary">Skills</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mx-auto" style={{ maxWidth: '800px' }}>
                    {skillCategories.map((category, idx) => {
                        // If it is the last item and the total is odd, we want it to span both columns and center itself on desktop
                        const isLastOddItem = idx === skillCategories.length - 1 && skillCategories.length % 2 !== 0;
                        return (
                            <div
                                key={idx}
                                className={`card flex flex-col items-start gap-4 h-full ${isLastOddItem ? 'md:col-span-2 md:w-[calc(50%-0.75rem)] md:mx-auto' : ''}`}
                                style={isLastOddItem ? { width: '100%' } : {}}
                            >
                                <div className="flex items-center gap-3 w-full border-b border-[var(--divider)] pb-4">
                                    <div className="text-white">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-primary font-mono">{category.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2 w-full mt-2" style={{ padding: '0.25rem' }}>
                                    {category.skills.map((skill, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="badge whitespace-nowrap"
                                            style={{ width: 'max-content' }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Skills;
