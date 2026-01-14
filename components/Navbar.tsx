
import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Activities', href: '#activities', id: 'activities' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Manual Smooth Scroll Function
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'glass-morphism py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 transition-all duration-150" style={{ width: `${scrollProgress}%` }}></div>

      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center gap-2 group relative z-[101]"
        >
          <div className="p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-all duration-300">
            <Cpu className={`w-6 h-6 transition-colors duration-300 ${isScrolled ? 'text-blue-400' : 'text-white'}`} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            ZUBY <span className="text-blue-400">AI</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group/link ${
                activeSection === link.id 
                  ? 'text-blue-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-blue-500 rounded-full animate-in fade-in zoom-in-75 shadow-[0_0_12px_rgba(59,130,246,0.8)]"></span>
              )}
              <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover/link:opacity-100 transition-opacity -z-0 scale-90 group-hover/link:scale-100"></span>
            </a>
          ))}
          
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="ml-6 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(37,99,235,0.2)]"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors relative z-[101]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-[#0a0a0c]/98 backdrop-blur-2xl z-[100] transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`text-3xl font-bold transition-all duration-300 ${
                activeSection === link.id 
                  ? 'text-blue-400 scale-110' 
                  : 'text-gray-500 hover:text-white'
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="mt-8 px-10 py-4 bg-blue-600 text-white text-lg font-bold rounded-2xl shadow-xl shadow-blue-900/20 active:scale-95"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
