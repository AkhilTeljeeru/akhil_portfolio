import { MapPin, Briefcase } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section relative flex items-center justify-center">
            <div className="container" style={{ maxWidth: '1000px' }}>

                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 700 }}>
                        About <span style={{ color: 'var(--text-secondary)' }}>Me</span>
                    </h2>
                </div>

                <div className="about-grid">

                    {/* Left: Professional Summary */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                            Hi, I'm Teljeeru Akhil, a Computer Science student focused on AI, Cybersecurity, and Software Development.
                        </p>
                        <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                            I specialize in building secure and intelligent applications using Python, networking, and machine learning, with a strong emphasis on scalable architecture and clean, maintainable code. My work reflects a practical, hands-on approach where I combine Linux, cloud technologies, and security fundamentals to design real-world solutions.
                        </p>
                        <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                            I'm passionate about solving complex problems, continuously learning, and contributing to systems that are reliable, efficient, and secure.
                        </p>
                    </div>

                    {/* Right: Quick Facts Card */}
                    <div>
                        <div className="card" style={{ padding: '2rem 1.75rem' }}>
                            <div style={{ marginBottom: '1.75rem', paddingBottom: '1.75rem', borderBottom: '1px solid var(--divider)' }}>
                                <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.4rem' }}>Akhil Teljeeru</h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <MapPin size={15} style={{ color: 'var(--accent-main)', flexShrink: 0 }} /> India
                                </p>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', marginBottom: '0.6rem' }}>Education</h4>
                                    <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>B.Tech – Computer Science (AI &amp; ML)</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Final Year</div>
                                </div>

                                <div>
                                    <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', marginBottom: '0.6rem' }}>Current Status</h4>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem' }}>
                                        <Briefcase size={15} style={{ color: '#4ade80', marginTop: '2px', flexShrink: 0 }} />
                                        <span style={{ fontWeight: 600 }}>
                                            Actively Interviewing
                                            <span style={{ display: 'block', color: 'var(--text-secondary)', fontWeight: 400, marginTop: '0.2rem' }}>
                                                Open to AI &amp; Cybersecurity Roles
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .about-grid {
                    display: grid;
                    gap: 2rem;
                    grid-template-columns: 1fr;
                }
                @media (min-width: 768px) {
                    .about-grid {
                        grid-template-columns: 2fr 1fr;
                        gap: 2.5rem;
                        align-items: start;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
