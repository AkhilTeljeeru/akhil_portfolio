import { ArrowRight, Github, Linkedin, Mail, Eye, Download, Code2 } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="section" style={{ position: 'relative', overflow: 'hidden', minHeight: '100dvh', display: 'flex', alignItems: 'center' }}>

            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px', background: 'rgba(0, 255, 255, 0.08)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />

            <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
                <div style={{ maxWidth: '900px' }}>

                    {/* Status badge */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.75rem', borderRadius: '9999px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '100%' }}>
                        <span style={{ position: 'relative', display: 'flex', height: '0.5rem', width: '0.5rem', flexShrink: 0 }}>
                            <span className="animate-ping" style={{ position: 'absolute', display: 'inline-flex', height: '100%', width: '100%', borderRadius: '50%', background: '#4ade80', opacity: 0.75 }}></span>
                            <span style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', height: '0.5rem', width: '0.5rem', background: '#22c55e' }}></span>
                        </span>
                        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Open to Work • Ready for Immediate Hire</span>
                    </div>

                    {/* Main heading */}
                    <h1 className="animate-slide-up delay-100 hero-heading" style={{ fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em' }}>
                        Teljeeru Akhil
                        <span style={{ display: 'block', fontSize: '0.55em', fontWeight: 500, letterSpacing: '-0.01em', color: 'var(--text-secondary)', marginTop: '0.35em' }}>
                            AI &amp; Cybersecurity Engineer
                        </span>
                    </h1>

                    {/* Tagline */}
                    <div className="animate-slide-up delay-100" style={{ marginTop: '1.25rem', borderLeft: '2px solid var(--accent-main)', paddingLeft: '1rem', paddingTop: '0.25rem', paddingBottom: '0.25rem' }}>
                        <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)', fontWeight: 600, color: 'white', marginBottom: '0.35rem', lineHeight: 1.4 }}>
                            Final-year B.Tech | Open to Software Developer, AI/ML &amp; Cybersecurity roles
                        </p>
                        <p style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                            Strong in DSA, System Design &amp; real-world security projects
                        </p>
                    </div>

                    {/* Description */}
                    <p className="animate-slide-up delay-200" style={{ fontSize: 'clamp(0.85rem, 2.2vw, 1.05rem)', color: 'var(--text-secondary)', maxWidth: '700px', marginTop: '1.25rem', lineHeight: 1.65, fontWeight: 400 }}>
                        I build intelligent, secure, and highly scalable cloud-native systems. With a strong foundation in Linux, AWS, and modern networking, I specialize in architecting real-world AI applications and robust security solutions.
                    </p>

                    {/* CTA Buttons */}
                    <div className="animate-slide-up delay-300 hero-buttons">
                        <a href="/my_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ height: '2.75rem', padding: '0 1.25rem', gap: '0.4rem' }}>
                            View <Eye size={16} />
                        </a>
                        <a href="/my_resume.pdf" download className="btn btn-primary" style={{ height: '2.75rem', padding: '0 1.25rem', gap: '0.4rem' }}>
                            Resume <Download size={16} />
                        </a>
                        <a href="#contact" className="btn btn-secondary" style={{ height: '2.75rem', padding: '0 1.25rem' }}>
                            Contact Me
                        </a>

                        <div className="hero-social-icons">
                            <a href="https://github.com/AkhilTeljeeru" target="_blank" rel="noopener noreferrer"
                                style={{ width: '2.75rem', height: '2.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid var(--divider)', background: 'var(--bg-secondary)', color: 'var(--text-secondary)', transition: 'all 0.2s', textDecoration: 'none' }}
                                title="GitHub"
                                onMouseOver={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff'; }}
                                onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--divider)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                            >
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/akhil-teljeeru/" target="_blank" rel="noopener noreferrer"
                                style={{ width: '2.75rem', height: '2.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid var(--divider)', background: 'var(--bg-secondary)', color: 'var(--text-secondary)', transition: 'all 0.2s', textDecoration: 'none' }}
                                title="LinkedIn"
                                onMouseOver={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff'; }}
                                onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--divider)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                            >
                                <Linkedin size={18} />
                            </a>
                            <a href="https://leetcode.com/u/akhil_teljeeru/" target="_blank" rel="noopener noreferrer"
                                style={{ width: '2.75rem', height: '2.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid var(--divider)', background: 'var(--bg-secondary)', color: 'var(--text-secondary)', transition: 'all 0.2s', textDecoration: 'none' }}
                                title="LeetCode"
                                onMouseOver={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff'; }}
                                onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--divider)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                            >
                                <Code2 size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .hero-heading {
                    font-size: clamp(2.4rem, 9vw, 5rem);
                }
                .hero-buttons {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                    margin-top: 2rem;
                    align-items: center;
                }
                .hero-social-icons {
                    display: flex;
                    gap: 0.5rem;
                    margin-left: auto;
                    padding-left: 1rem;
                    border-left: 1px solid var(--divider);
                }
                @media (max-width: 480px) {
                    .hero-social-icons {
                        margin-left: 0;
                        padding-left: 0;
                        border-left: none;
                        width: 100%;
                    }
                    .hero-buttons {
                        gap: 0.65rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
