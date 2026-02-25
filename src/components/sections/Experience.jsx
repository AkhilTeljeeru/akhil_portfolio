import { Shield, Lock } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "Cybersecurity Virtual Intern",
            company: "ShadowFox",
            date: "2024",
            icon: <Shield size={24} className="text-accent-main" />,
            points: [
                "Performed vulnerability assessments in simulated lab environments",
                "Worked with Kali Linux and security analysis tools",
                "Hands-on ethical hacking and network security practice"
            ]
        },
        {
            title: "Ethical Hacking Virtual Intern",
            company: "EduSkills",
            date: "2024",
            icon: <Lock size={24} className="text-green-400" />,
            points: [
                "Learned penetration testing methodology",
                "Performed vulnerability scanning",
                "Worked in a virtual security lab setup"
            ]
        }
    ];

    return (
        <section id="experience" className="section relative flex items-center justify-center">
            <div className="container">

                <div className="mb-12" style={{ marginBottom: '3rem' }}>
                    <h2 className="text-3xl md:text-4xl font-bold font-sans">
                        <span className="text-secondary">Work</span> Experience
                    </h2>
                </div>

                <div className="flex flex-col gap-6 w-full mx-auto" style={{ maxWidth: '800px' }}>
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="card relative flex flex-col md:flex-row gap-6 p-8 items-start">

                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--divider)] flex items-center justify-center">
                                {exp.icon}
                            </div>

                            <div className="flex-grow flex flex-col gap-3">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                                    <span className="badge w-max bg-[var(--bg-tertiary)]">{exp.date}</span>
                                </div>
                                <div className="text-lg font-medium text-accent-main">{exp.company}</div>

                                <ul className="mt-2 space-y-2">
                                    {exp.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-start gap-3 text-secondary text-base leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0 opacity-50" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;









