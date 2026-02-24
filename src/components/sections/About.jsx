import { Code2, Database, MapPin, Briefcase } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section relative" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>

                <div className="mb-12" style={{ marginBottom: '3rem' }}>
                    <h2 className="text-3xl md:text-4xl font-bold font-sans">
                        About <span className="text-secondary">Me</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-12 gap-10 items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', alignItems: 'center' }}>

                    {/* Left: Professional Summary */}
                    <div className="md:col-span-8 flex flex-col gap-6" style={{ gridColumn: 'span 8 / span 8', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <p className="text-secondary text-lg leading-relaxed" style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                            B.Tech Computer Science student specializing in AI & Cybersecurity with hands-on experience in Linux administration and AWS cloud services. I have built practical projects in security, cloud, and intelligent systems, and I possess a strong foundation in networking, system design, and access control. I am passionate about building secure and scalable AI-driven infrastructure and continuously improving my problem-solving skills. I am a quick learner and actively seeking entry-level opportunities in AI, Cybersecurity, and Cloud Security.
                        </p>
                    </div>

                    {/* Right: Quick Facts Card */}
                    <div className="md:col-span-4" style={{ gridColumn: 'span 4 / span 4' }}>
                        <div className="card flex flex-col" style={{ padding: '2.5rem 2rem' }}>
                            <div className="mb-8 pb-8 border-b border-[var(--divider)]">
                                <h3 className="font-bold text-xl text-primary mb-2">Akhil Teljeeru</h3>
                                <p className="text-sm text-secondary flex items-center gap-1.5">
                                    <MapPin size={16} className="text-accent-blue" /> India
                                </p>
                            </div>

                            <div className="flex flex-col gap-10">
                                <div>
                                    <h4 className="text-xs uppercase tracking-wider text-secondary font-mono mb-3">Education</h4>
                                    <div className="text-base text-primary font-medium">
                                        B.Tech – Computer Science (AI & ML)
                                    </div>
                                    <div className="text-sm text-secondary mt-1">
                                        Final Year
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs uppercase tracking-wider text-secondary font-mono mb-3">Current Status</h4>
                                    <div className="flex items-start gap-2 text-sm text-primary">
                                        <Briefcase size={16} className="text-green-400 mt-[3px] shrink-0" />
                                        <span className="leading-relaxed font-medium">
                                            Actively Interviewing <span className="opacity-40 mx-1">|</span> <span className="text-secondary font-normal block sm:inline mt-1 sm:mt-0">Open to AI & Cybersecurity Roles</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
