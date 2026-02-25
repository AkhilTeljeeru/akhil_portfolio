import { useState, useEffect } from 'react';
import { Eye, Download, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Simple active section tracking
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

    const navLinks = [
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Opportunities', id: 'opportunities' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`} style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 50,
            padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
            transition: 'all 0.3s ease',
        }}>
            <div className="container flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#home" className="font-mono text-xl font-bold flex items-center gap-2" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>
                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm">
                        TA
                    </div>
                    <span>Teljeeru Akhil.</span>
                </a>

                <div className="flex items-center gap-6" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div className="nav-links hidden md:flex" style={{ display: 'flex', gap: '1.5rem' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={`#${link.id}`}
                                className="text-sm font-medium transition-colors"
                                style={{
                                    color: activeSection === link.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s',
                                    fontSize: '0.875rem',
                                    position: 'relative'
                                }}
                                onMouseOver={(e) => { if (activeSection !== link.id) e.target.style.color = 'var(--text-primary)' }}
                                onMouseOut={(e) => { if (activeSection !== link.id) e.target.style.color = 'var(--text-secondary)' }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div className="hidden sm:flex items-center gap-3 mr-2" style={{ borderRight: '1px solid var(--divider)', paddingRight: '1rem' }}>
                            <a href="https://github.com/AkhilTeljeeru" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/akhil-teljeeru/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>

                        <a
                            href="/my_resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary text-sm hidden sm:flex"
                            style={{ padding: '0 1rem', height: '2rem', fontSize: '0.85rem' }}
                        >
                            <Eye size={14} /> View
                        </a>
                        <a
                            href="/my_resume.pdf"
                            download
                            className="btn btn-primary text-sm hidden sm:flex"
                            style={{ padding: '0 1rem', height: '2rem', fontSize: '0.85rem' }}
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









