import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import './index.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check local storage for theme preference, default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Setup basic intersection observer for scroll reveal animations
  useEffect(() => {
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

    // Select all sections to animate their entry as they scroll into view
    // Using a simple timeout to ensure DOM is ready
    setTimeout(() => {
      const elements = document.querySelectorAll('.section > .container > div');
      elements.forEach(el => {
        // Only observe if not in first section which animates instantly
        if (!el.closest('#home')) {
          el.style.opacity = '0';
          observer.observe(el);
        }
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container min-h-screen flex flex-col items-stretch" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="flex-grow" style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
