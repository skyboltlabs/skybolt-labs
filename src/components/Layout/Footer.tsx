import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import WhatsAppIcon from '../UI/WhatsAppIcon';

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="nav-logo" style={{ textDecoration: 'none', marginBottom: '16px', display: 'block' }}>
            <img src="/skyboltlabs-logo.svg" alt="Skybolt Labs" style={{ height: '40px', width: 'auto', display: 'block' }} />
          </Link>
          <p>Building high-performance digital products for ambitious businesses. Cape Town based, globally delivered.</p>
          <div className="footer-socials">
            <a href="https://wa.me/27816172049" className="social-link" aria-label="WhatsApp"><WhatsAppIcon size={20} /></a>
            <a href="https://www.facebook.com/profile.php?id=61556704706621" className="social-link" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="https://linkedin.com/company/skybolt-labs" className="social-link" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Web Development</Link></li>
            <li><Link to="/services">AI Automations</Link></li>
            <li><Link to="/services">E-Commerce</Link></li>
            <li><Link to="/services">UI/UX Design</Link></li>
            <li><Link to="/services">SEO &amp; Performance</Link></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@skyboltlabs.co.za" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={16} /> info@skyboltlabs.co.za</a></li>
            <li><a href="tel:+27845921309" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={16} /> +27 84 592 1309</a></li>
            <li><a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} /> Cape Town, South Africa</a></li>
            <li><a href="https://wa.me/27816172049" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><WhatsAppIcon size={16} /> WhatsApp us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 <span style={{ background: 'linear-gradient(to right, #3b82f6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 600 }}>Skybolt Labs</span>. All rights reserved.</span>
        <span>Made with ⚡ in Cape Town</span>
      </div>
    </footer>
  );
};

export default Footer;