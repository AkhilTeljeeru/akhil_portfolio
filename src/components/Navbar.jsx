import { useState, useEffect } from 'react';
import { Eye, Download, Github, Linkedin, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ['home', 'about', 'skills', 'projects', 'opportunities', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(section);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when body is scrolled (mobile menu open)
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Opportunities', id: 'opportunities' },
        { name: 'Contact', id: 'contact' },
    ];

    const handleNavClick = (id) => {
        setMobileMenuOpen(false);
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <>
            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 50,
                    padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
                    transition: 'all 0.3s ease',
                    ...(isScrolled ? {
                        background: 'rgba(0,0,0,0.85)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                    } : {})
                }}
            >
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo */}
                    <a
                        href="#home"
                        style={{ textDecoration: 'none', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1rem' }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', background: 'white', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>
                            TA
                        </div>
                        <span>Teljeeru Akhil.</span>
                    </a>

                    {/* Desktop nav */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        {/* Links — hidden on mobile */}
                        <div className="desktop-nav-links" style={{ display: 'flex', gap: '1.5rem' }}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={`#${link.id}`}
                                    style={{
                                        color: activeSection === link.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                                        textDecoration: 'none',
                                        fontSize: '0.875rem',
                                        fontWeight: 500,
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseOver={(e) => { if (activeSection !== link.id) e.target.style.color = 'var(--text-primary)'; }}
                                    onMouseOut={(e) => { if (activeSection !== link.id) e.target.style.color = 'var(--text-secondary)'; }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Desktop actions — hidden on mobile */}
                        <div className="desktop-nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderRight: '1px solid var(--divider)', paddingRight: '1rem' }}>
                                <a href="https://github.com/AkhilTeljeeru" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                                    <Github size={18} />
                                </a>
                                <a href="https://www.linkedin.com/in/akhil-teljeeru/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                                    <Linkedin size={18} />
                                </a>
                            </div>
                            <a href="/my_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0 1rem', height: '2rem', fontSize: '0.8rem', gap: '0.35rem' }}>
                                <Eye size={13} /> View
                            </a>
                            <a href="/my_resume.pdf" download className="btn btn-primary" style={{ padding: '0 1rem', height: '2rem', fontSize: '0.8rem', gap: '0.35rem' }}>
                                <Download size={13} /> Resume
                            </a>
                        </div>

                        {/* Hamburger — shown only on mobile */}
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--divider)',
                                borderRadius: '6px',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                display: 'none',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '2.25rem',
                                height: '2.25rem',
                                flexShrink: 0,
                            }}
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 49,
                    background: 'rgba(0,0,0,0.6)',
                    opacity: mobileMenuOpen ? 1 : 0,
                    pointerEvents: mobileMenuOpen ? 'all' : 'none',
                    transition: 'opacity 0.3s ease',
                }}
                onClick={() => setMobileMenuOpen(false)}
            />
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 49,
                    background: '#0a0a0a',
                    borderBottom: '1px solid var(--divider)',
                    transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
                    transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
                    padding: '5rem 1.5rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                }}
                className="mobile-drawer"
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={`#${link.id}`}
                        onClick={() => handleNavClick(link.id)}
                        style={{
                            color: activeSection === link.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            padding: '0.85rem 0',
                            borderBottom: '1px solid var(--divider)',
                            transition: 'color 0.2s',
                        }}
                    >
                        {link.name}
                    </a>
                ))}

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                    <a href="https://github.com/AkhilTeljeeru" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><Github size={22} /></a>
                    <a href="https://www.linkedin.com/in/akhil-teljeeru/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><Linkedin size={22} /></a>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                    <a href="/my_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center', gap: '0.5rem' }}>
                        <Eye size={16} /> View Resume
                    </a>
                    <a href="/my_resume.pdf" download className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', gap: '0.5rem' }}>
                        <Download size={16} /> Download
                    </a>
                </div>
            </div>

            {/* Responsive styles */}
            <style>{`
                @media (max-width: 767px) {
                    .desktop-nav-links { display: none !important; }
                    .desktop-nav-actions { display: none !important; }
                    .mobile-menu-btn { display: flex !important; }
                }
                @media (min-width: 768px) {
                    .mobile-menu-btn { display: none !important; }
                    .mobile-drawer { display: none !important; }
                }
            `}</style>
        </>
    );
};

export default Navbar;
