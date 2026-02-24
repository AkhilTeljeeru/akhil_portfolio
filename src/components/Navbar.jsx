import { useState, useEffect } from 'react';
import { Moon, Sun, Download } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Simple active section tracking
            const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
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

    const navLinks = [
        { name: 'About', id: 'about' },
        { name: 'Tech', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Experience', id: 'experience' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`} style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 50,
            padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
            transition: 'all 0.3s ease',
            backdropFilter: isScrolled ? 'blur(16px)' : 'none',
            backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
            borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        }}>
            <div className="container flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#home" className="font-mono text-xl font-bold" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>
                    AT<span className="text-gradient">.</span>
                </a>

                <div className="flex items-center gap-6" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div className="nav-links hidden md:flex" style={{ display: 'flex', gap: '2rem' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={`#${link.id}`}
                                className="text-sm font-medium transition-colors"
                                style={{
                                    color: activeSection === link.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s',
                                    fontSize: '0.9rem',
                                    fontWeight: activeSection === link.id ? 600 : 500,
                                    position: 'relative'
                                }}
                                onMouseOver={(e) => { if (activeSection !== link.id) e.target.style.color = 'var(--text-primary)' }}
                                onMouseOut={(e) => { if (activeSection !== link.id) e.target.style.color = 'var(--text-secondary)' }}
                            >
                                {link.name}
                                {activeSection === link.id && (
                                    <span style={{
                                        position: 'absolute',
                                        bottom: '-4px',
                                        left: '0',
                                        width: '100%',
                                        height: '2px',
                                        background: 'var(--accent-gradient)',
                                        borderRadius: '2px'
                                    }}></span>
                                )}
                            </a>
                        ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full transition-colors flex items-center justify-center"
                            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', display: 'flex', padding: 0 }}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary text-sm hidden sm:flex"
                            style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
                        >
                            <Download size={14} /> Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
