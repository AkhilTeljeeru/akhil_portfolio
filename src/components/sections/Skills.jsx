import { Code2, BrainCircuit, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code2 size={24} />,
            skills: ["Python", "JavaScript", "C++"]
        },
        {
            title: "Core CS",
            icon: <Database size={24} />,
            skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "OS"]
        },
        {
            title: "AI / ML",
            icon: <BrainCircuit size={24} />,
            skills: ["NumPy", "Pandas", "Scikit-learn", "NLP", "TensorFlow"]
        },
        {
            title: "Web Development",
            icon: <Globe size={24} />,
            skills: ["React", "Node.js", "Express", "Firebase", "HTML", "CSS"]
        },
        {
            title: "Tools",
            icon: <Wrench size={24} />,
            skills: ["Git", "GitHub", "VS Code", "Postman"]
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="card flex flex-col items-start gap-4">
                            <div className="flex items-center gap-3 w-full border-b border-[var(--divider)] pb-4">
                                <div className="text-white">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-primary font-mono">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2 w-full mt-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="badge"
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
