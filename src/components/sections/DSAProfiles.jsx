import { Trophy, Code, LineChart, Star, Target } from 'lucide-react';

const DSAProfiles = () => {
    const profiles = [
        {
            platform: "LeetCode",
            username: "akhilteljeeru",
            stats: [
                { label: "Problems Solved", value: "350+" },
                { label: "Max Rating", value: "1850" },
                { label: "Top %", value: "7%" }
            ],
            color: "text-yellow-400",
            bg: "bg-yellow-400/10",
            link: "https://leetcode.com/akhilteljeeru"
        },
        {
            platform: "CodeChef",
            username: "akhilteljeeru",
            stats: [
                { label: "Highest Rating", value: "1650" },
                { label: "Stars", value: "3★" },
                { label: "Global Rank", value: "Top 5k" }
            ],
            color: "text-green-400",
            bg: "bg-green-400/10",
            link: "https://codechef.com/users/akhilteljeeru"
        },
        {
            platform: "HackerRank",
            username: "akhilteljeeru",
            stats: [
                { label: "Problem Solving", value: "5★" },
                { label: "Python", value: "5★" },
                { label: "Badges", value: "12" }
            ],
            color: "text-accent-blue",
            bg: "bg-accent-blue/10",
            link: "https://hackerrank.com/akhilteljeeru"
        }
    ];

    return (
        <section id="coding-profiles" className="section relative" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans flex items-center justify-center md:justify-start gap-3">
                        <Code className="text-primary" size={32} />
                        <span className="text-primary">DSA & <span className="text-gradient">Coding Profiles</span></span>
                    </h2>
                    <p className="text-secondary mt-4 max-w-2xl mx-auto md:mx-0">
                        Showcasing my problem-solving strength through consistent practice and open-source contributions.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {profiles.map((profile, idx) => (
                        <a
                            key={idx}
                            href={profile.link}
                            target="_blank"
                            rel="noreferrer"
                            className="card flex flex-col group hover:-translate-y-2 transition-transform duration-300"
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[var(--divider)]">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${profile.bg} ${profile.color}`}>
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary">{profile.platform}</h3>
                                    <p className="text-sm font-mono text-secondary group-hover:text-white transition-colors">@{profile.username}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 flex-grow">
                                {profile.stats.map((stat, sIdx) => (
                                    <div key={sIdx} className={sIdx === 0 ? "col-span-2" : "col-span-1"}>
                                        <p className="text-xs font-mono text-secondary uppercase tracking-wider mb-1">{stat.label}</p>
                                        <p className="text-lg font-bold text-primary">{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DSAProfiles;
