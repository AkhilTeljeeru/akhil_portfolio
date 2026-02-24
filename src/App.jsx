import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import DSAProfiles from './components/sections/DSAProfiles';
import GitHubSection from './components/sections/GitHub';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import './index.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Force dark theme as per modern developer aesthetic
    document.documentElement.setAttribute('data-theme', 'dark');

    // Mouse tracking for cursor glow effect
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

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
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-container min-h-screen flex flex-col items-stretch" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Cursor Glow Effect */}
      <div
        className="cursor-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />

      <Navbar />

      <main className="flex-grow z-10 relative" style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DSAProfiles />
        <GitHubSection />
        <Achievements />
        <Contact />
      </main>

      <Footer className="z-10 relative" />
    </div>
  );
}

export default App;
