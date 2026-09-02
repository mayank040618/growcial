import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <span className="text-gradient">Grow</span>cial
        </a>

        <div className="nav-links desktop-only">
          <a href="#services" className="nav-link">Services</a>
          <a href="#work" className="nav-link">Our Work</a>
          <a href="#about" className="nav-link">About</a>
        </div>

        <div className="nav-actions desktop-only">
          <button className="btn btn-outline">Log In</button>
          <button className="btn btn-primary">
            Get Started <ArrowRight size={16} />
          </button>
        </div>

        <button 
          className="mobile-toggle mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu glass-panel">
          <a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#work" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Our Work</a>
          <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <div className="mobile-actions">
            <button className="btn btn-outline full-width">Log In</button>
            <button className="btn btn-primary full-width">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
