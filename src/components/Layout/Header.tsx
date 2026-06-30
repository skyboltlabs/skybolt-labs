import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navStyle = isScrolled ? { background: 'rgba(6,8,16,0.95)' } : { background: 'rgba(6,8,16,0.7)' };

  return (
    <nav style={navStyle}>
      <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
        <img src="/skyboltlabs-logo.svg" alt="Skybolt Labs" style={{ height: '36px', width: 'auto', display: 'block' }} />
      </Link>
      <ul className="nav-links">
        <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
        <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Work</Link></li>
        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
        <li><Link to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>Pricing</Link></li>
        <li><Link to="/blog" className={location.pathname === '/blog' || location.pathname.startsWith('/blog/') ? 'active' : ''}>Blog</Link></li>
        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
      </ul>
      <Link to="/contact" className="nav-cta" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        Get a quote &rarr;
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact" style={{ background: 'var(--accent)', color: '#fff' }}>Get a quote</Link>
      </div>
    </nav>
  );
};

export default Header;