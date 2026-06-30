import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import SEOHead from '../components/UI/SEOHead';

const NotFound = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => obs.observe(el));
    return () => reveals.forEach(el => obs.unobserve(el));
  }, []);

  return (
    <>
      <SEOHead 
        title="404: Page Not Found | Skybolt Labs"
        description="The page you are looking for doesn't exist or has been moved."
        url="https://skyboltlabs.co.za/404"
      />
      
      <section className="page-hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div className="section-tag reveal" style={{ justifyContent: 'center' }}>Error 404</div>
          <h1 className="page-hero-title reveal" style={{ transitionDelay: '100ms' }}>
            Page not <span className="accent">found.</span>
          </h1>
          <p className="page-hero-sub reveal" style={{ margin: '0 auto 40px auto', transitionDelay: '200ms' }}>
            We couldn't find the page you were looking for. It might have been removed, renamed, or doesn't exist.
          </p>
          <div className="flex flex-wrap gap-4 justify-center reveal" style={{ transitionDelay: '300ms' }}>
            <Link to="/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Home size={18} />
              Back to Home
            </Link>
            <button onClick={() => window.history.back()} className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
