import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import DSAProfiles from './components/sections/DSAProfiles';
import Achievements from './components/sections/Achievements';
import Opportunities from './components/sections/Opportunities';
import Contact from './components/sections/Contact';
import './index.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Force dark theme as per modern developer aesthetic
    document.documentElement.setAttribute('data-theme', 'dark');

    // Mouse tracking for cursor glow effect
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Scroll progress handler
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll * 100);
      setShowBackToTop(totalScroll > 400);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Intersection observer for scroll reveal animations
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.style.opacity = 1;
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    setTimeout(() => {
      const elements = document.querySelectorAll('.section > .container > div');
      elements.forEach(el => {
        if (!el.closest('#home')) {
          el.style.opacity = '0';
          observer.observe(el);
        }
      });
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container min-h-screen flex flex-col items-stretch" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Scroll Progress Bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '3px', zIndex: 10000, pointerEvents: 'none' }}>
        <div style={{ height: '100%', backgroundColor: 'var(--text-primary)', width: `${scrollProgress}%`, transition: 'width 0.1s ease-out' }} />
      </div>

      {/* Cursor Glow Effect */}
      <div
        className="cursor-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed', right: '2rem', bottom: '2rem', zIndex: 90,
          opacity: showBackToTop ? 1 : 0,
          visibility: showBackToTop ? 'visible' : 'hidden',
          transform: showBackToTop ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.3s ease'
        }}
        className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 shadow-lg cursor-pointer border-none"
        title="Back to Top"
      >
        <ArrowUp size={20} />
      </button>

      <Navbar />

      <main className="flex-grow z-10 relative" style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DSAProfiles />
        <Achievements />
        <Opportunities />
        <Contact />
      </main>

      <Footer className="z-10 relative" />
    </div>
  );
}

export default App;
