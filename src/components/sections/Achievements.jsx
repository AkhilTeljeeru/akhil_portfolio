import { Award, Target, Zap, BookOpen, GraduationCap } from 'lucide-react';

const Achievements = () => {
    const list = [
        {
            title: "Cybersecurity Virtual Intern — ShadowFox",
            category: "Internship Experience",
            date: "2024",
            details: "Completed hands-on cybersecurity training focused on ethical hacking and network security. Performed vulnerability assessments in simulated lab environments and gained practical experience using Kali Linux and security analysis tools.",
            icon: <Target size={20} className="text-red-400" />
        },
        {
            title: "Cisco Networking Academy — CCNA: Introduction to Networks",
            category: "Certification",
            date: "2024",
            details: "Gained foundational knowledge in networking concepts including IP addressing, routing, switching, network protocols, and network security fundamentals.",
            icon: <BookOpen size={20} className="text-accent-main" />
        },
        {
            title: "Ethical Hacking Virtual Internship — EduSkills",
            category: "Internship Experience",
            date: "2024",
            details: "Worked on practical ethical hacking tasks, learned penetration testing methodologies, vulnerability scanning, and basic security operations in a virtual lab environment.",
            icon: <Zap size={20} className="text-yellow-400" />
        }
    ];

    return (
        <section id="achievements" className="section relative flex items-center justify-center">
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans flex items-center justify-center md:justify-start gap-3">
                        <Award className="text-primary" size={32} />
                        <span className="text-primary">Achievements & <span className="text-gradient">Highlights</span></span>
                    </h2>
                    <p className="text-secondary mt-4 max-w-2xl mx-auto md:mx-0">
                        A summary of my academic excellence, certifications, and competitive engagements.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {list.map((item, idx) => (
                        <div key={idx} className="card flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--divider)] flex items-center justify-center group-hover:border-[var(--accent-main)] transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-primary">{item.title}</h3>
                                        <p className="text-sm font-mono text-secondary mt-1">{item.category}</p>
                                    </div>
                                </div>
                                <div className="text-[10px] font-mono text-secondary px-2 py-1 rounded bg-[var(--bg-tertiary)] border border-[var(--divider)] whitespace-nowrap">
                                    {item.date}
                                </div>
                            </div>
                            <p className="text-sm text-secondary mt-auto pt-2 border-t border-[rgba(255,255,255,0.05)]">
                                {item.details}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;









