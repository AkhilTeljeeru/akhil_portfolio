import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            padding: '3rem 0 2rem 0',
            borderTop: '1px solid var(--glass-border)',
            marginTop: 'auto',
            background: 'var(--bg-color)'
        }}>
            <div className="container flex flex-col items-center justify-center text-center gap-6" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem'
            }}>
                <div className="font-mono text-xl font-bold text-gradient tracking-wider">
                    AT.
                </div>

                <div className="flex gap-6" style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="https://github.com/akhilteljeeru" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}>
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/akhil-teljeeru/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}>
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:akhilteljeeru@example.com" className="text-secondary hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}>
                        <Mail size={20} />
                    </a>
                </div>

                <p className="text-sm font-mono text-secondary mt-4" style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '0.85rem' }}>
                    Designed & Built by Akhil Teljeeru
                </p>
                <div className="flex items-center gap-2 justify-center text-xs text-secondary opacity-60" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', fontSize: '0.75rem', opacity: 0.6 }}>
                    <span className="w-1 h-1 rounded-full bg-accent-main" style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-main)' }}></span>
                    All rights reserved. © {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    );
};

export default Footer;









