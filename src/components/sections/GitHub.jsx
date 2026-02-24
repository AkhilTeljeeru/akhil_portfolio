import { Github, GitBranch, Star, GitCommit } from 'lucide-react';

const GitHubSection = () => {
    // Simulated contribution data for a rich, active developer graph
    const generateContributions = () => {
        const weeks = 52;
        const daysPerWeek = 7;
        const data = [];

        for (let w = 0; w < weeks; w++) {
            const week = [];
            for (let d = 0; d < daysPerWeek; d++) {
                // Higher probability of activity in recent weeks, lower in past
                const activeProp = Math.random() * 100;
                let level = 0; // 0: none, 1: low, 2: med, 3: high, 4: max

                if (activeProp > 40) {
                    const intensity = Math.random();
                    if (intensity > 0.9) level = 4;
                    else if (intensity > 0.6) level = 3;
                    else if (intensity > 0.3) level = 2;
                    else level = 1;
                }

                week.push(level);
            }
            data.push(week);
        }
        return data;
    };

    const contributionData = generateContributions();

    const getColorClass = (level) => {
        switch (level) {
            case 1: return 'bg-accent-blue/30 border border-accent-blue/10'; // #0e4429 on github dark
            case 2: return 'bg-accent-blue/50 border border-accent-blue/20'; // #006d32
            case 3: return 'bg-accent-blue/80 border border-accent-blue/30'; // #26a641
            case 4: return 'bg-accent-blue border border-accent-blue/40 shadow-[0_0_8px_rgba(59,130,246,0.5)]'; // #39d353
            default: return 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)]';
        }
    };

    const stats = [
        { label: "Total Commits (2024)", value: "1,420+", icon: <GitCommit size={18} /> },
        { label: "Repositories", value: "32", icon: <Github size={18} /> },
        { label: "Stars Earned", value: "128", icon: <Star size={18} /> },
        { label: "Pull Requests", value: "84", icon: <GitBranch size={18} /> }
    ];

    return (
        <section id="github" className="section relative" style={{ paddingTop: '6rem', paddingBottom: '8rem' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div className="mb-12" style={{ marginBottom: '3rem' }}>
                    <h2 className="text-3xl md:text-4xl font-bold font-sans flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Github size={36} className="text-primary" />
                        <span className="text-primary">Open Source & <span className="text-gradient">Continuous Learning</span></span>
                    </h2>
                    <p className="text-secondary mt-4 max-w-2xl" style={{ marginTop: '1rem', color: 'var(--text-secondary)', maxWidth: '42rem' }}>
                        I actively contribute to open-source projects, learn in public, and maintain a consistent coding habit to sharpen my skills.
                    </p>
                </div>

                <div className="glass-card mb-8" style={{ padding: '2rem', border: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', overflowX: 'auto' }}>

                    <div className="flex justify-between items-end mb-6 min-w-[700px]" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem', minWidth: '700px' }}>
                        <h3 className="text-lg font-semibold flex items-center gap-2 text-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                            <span style={{ fontSize: '0.875rem' }}>3,010 contributions in the last year</span>
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-secondary font-mono" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                            <span>Less</span>
                            <div className="w-3 h-3 rounded-sm bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)]" style={{ width: '12px', height: '12px', borderRadius: '2px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}></div>
                            <div className="w-3 h-3 rounded-sm bg-accent-blue/30 border border-accent-blue/10" style={{ width: '12px', height: '12px', borderRadius: '2px', background: 'rgba(59, 130, 246, 0.3)', border: '1px solid rgba(59, 130, 246, 0.1)' }}></div>
                            <div className="w-3 h-3 rounded-sm bg-accent-blue/50 border border-accent-blue/20" style={{ width: '12px', height: '12px', borderRadius: '2px', background: 'rgba(59, 130, 246, 0.5)', border: '1px solid rgba(59, 130, 246, 0.2)' }}></div>
                            <div className="w-3 h-3 rounded-sm bg-accent-blue/80 border border-accent-blue/30" style={{ width: '12px', height: '12px', borderRadius: '2px', background: 'rgba(59, 130, 246, 0.8)', border: '1px solid rgba(59, 130, 246, 0.3)' }}></div>
                            <div className="w-3 h-3 rounded-sm bg-accent-blue border border-accent-blue/40" style={{ width: '12px', height: '12px', borderRadius: '2px', background: 'rgba(59, 130, 246, 1)', border: '1px solid rgba(59, 130, 246, 0.4)' }}></div>
                            <span>More</span>
                        </div>
                    </div>

                    <div className="flex gap-1 min-w-[700px]" style={{ display: 'flex', gap: '0.25rem', minWidth: '700px' }}>
                        {contributionData.map((week, wIdx) => (
                            <div key={wIdx} className="flex flex-col gap-1" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                {week.map((level, dIdx) => (
                                    <div
                                        key={`${wIdx}-${dIdx}`}
                                        className={`w-[11px] h-[11px] rounded-sm transition-colors duration-300 ${getColorClass(level)}`}
                                        style={{ width: '11px', height: '11px', borderRadius: '2px', transition: 'background-color 0.3s ease' }}
                                        title={`Contributions: Level ${level}`}
                                    ></div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
                    {stats.map((stat, idx) => (
                        <div key={idx} className="glass-card text-center transition-transform hover:-translate-y-1" style={{ padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
                            <div className="text-secondary mb-3" style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{stat.icon}</div>
                            <h4 className="text-2xl font-bold text-primary font-mono mb-1" style={{ color: 'var(--text-primary)', fontFamily: 'monospace', marginBottom: '0.25rem' }}>{stat.value}</h4>
                            <p className="text-xs text-secondary uppercase tracking-wider" style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GitHubSection;
