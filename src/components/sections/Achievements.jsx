import { Award, Target, Zap } from 'lucide-react';

const Achievements = () => {
    const list = [
        {
            title: "CCNA Introduction to Networks",
            issuer: "Cisco",
            date: "2023",
            icon: <Award size={20} className="text-accent-violet" />
        },
        {
            title: "Ethical Hacking Virtual Internship",
            issuer: "Eduskills",
            date: "2023",
            icon: <Zap size={20} className="text-accent-blue" />
        },
        {
            title: "Cybersecurity Virtual Intern",
            issuer: "ShadowFox",
            date: "2024 - Present",
            icon: <Zap size={20} className="text-accent-blue" />
        }
    ];

    return (
        <section id="achievements" className="section relative" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans flex items-center justify-center md:justify-start gap-3">
                        <Target className="text-primary" size={32} />
                        <span className="text-primary">Achievements & <span className="text-gradient">Training</span></span>
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    {list.map((item, idx) => (
                        <div key={idx} className="card flex items-center justify-between group hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--divider)] flex items-center justify-center group-hover:border-[var(--accent-blue)] transition-colors">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-primary">{item.title}</h3>
                                    <p className="text-sm text-secondary">{item.issuer}</p>
                                </div>
                            </div>
                            <div className="text-xs font-mono text-secondary px-3 py-1 rounded bg-[var(--bg-tertiary)] border border-[var(--divider)]">
                                {item.date}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
