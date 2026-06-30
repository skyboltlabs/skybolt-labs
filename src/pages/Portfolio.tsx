import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/UI/SEOHead';

const portfolioSchema = {
  // Keep original schema
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Skybolt Labs Portfolio",
  "description": "Showcase of web development projects including e-commerce stores, corporate websites, and AI-powered applications.",
  "creator": {
    "@type": "Organization",
    "name": "Skybolt Labs"
  },
  "about": [
    { "@type": "Thing", "name": "Web Development" },
    { "@type": "Thing", "name": "E-commerce" },
    { "@type": "Thing", "name": "AI Integration" }
  ]
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => obs.observe(el));

    // 3D card tilt
    const projectCards = document.querySelectorAll('.project-card') as NodeListOf<HTMLElement>;
    projectCards.forEach(card => {
      const handleMouseMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 6}deg) scale(1.02)`;
      };
      const handleMouseLeave = () => {
        card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
      };
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => reveals.forEach(el => obs.unobserve(el));
  }, [activeFilter]); // re-run when filter changes to re-bind events to new DOM nodes

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI Integration' }
  ];

  const projects = [
    {
      id: 1,
      title: 'TechCorp Website',
      description: 'Modern corporate website with AI-powered chatbot and advanced analytics.',
      category: 'web',
      tags: ['React', 'Node.js', 'AI', 'Analytics'],
      link: 'https://techcorpapp.netlify.app/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Fashion E-commerce',
      description: 'High-converting online store with personalized shopping experience.',
      category: 'ecommerce',
      tags: ['Shopify', 'React', 'Payment Gateway'],
      link: 'https://fashionlute.netlify.app/',
      image: 'https://images.unsplash.com/photo-1603798125914-7b5d27789248?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'HealthTech App',
      description: 'Mobile application for health tracking with AI-powered insights.',
      category: 'mobile',
      tags: ['React Native', 'AI', 'Health'],
      link: 'https://healthtechappai.netlify.app/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'FinTech Dashboard',
      description: 'Real-time financial dashboard with advanced data visualization.',
      category: 'web',
      tags: ['React', 'D3.js', 'API', 'Charts'],
      link: 'https://fintechproai.netlify.app/',
      image: 'https://images.unsplash.com/photo-1651341050677-24dba59ce0fd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Restaurant Chain',
      description: 'Multi-location restaurant website with online ordering system.',
      category: 'ecommerce',
      tags: ['WordPress', 'WooCommerce', 'Delivery'],
      link: 'https://restaurant-chain.netlify.app/',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'AI Content Generator',
      description: 'Web application that generates marketing content using AI.',
      category: 'ai',
      tags: ['React', 'OpenAI', 'GPT-4', 'API'],
      link: 'https://aicontentgeneratorapp.netlify.app/',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // We map project IDs to background classes from the CSS
  const getProjectBgClass = (id: number) => {
    const classes = ['proj-a', 'proj-b', 'proj-c', 'proj-d'];
    return classes[id % classes.length];
  };

  return (
    <>
      <SEOHead
        title="Web Development Portfolio Cape Town | Skybolt Labs Projects"
        description="View our web development portfolio featuring e-commerce stores, corporate websites, and AI-powered applications. See how we've helped Cape Town businesses succeed online."
        keywords="web development portfolio Cape Town, website examples South Africa, e-commerce portfolio, React projects, AI integration examples, Cape Town web design showcase"
        url="https://skyboltlabs.co.za/portfolio"
        schema={portfolioSchema}
      />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Featured Work</div>
          <h1 className="page-hero-title">
            Projects that <br />
            <span className="bolt">moved the needle.</span>
          </h1>
          <p className="page-hero-sub">
            A few of the things we've shipped. Each one came with a brief, a problem, and a measurable result.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{ padding: '40px 40px 0', background: 'var(--bg2)' }}>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className="tech-pill"
                style={
                  activeFilter === category.id
                    ? { background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' }
                    : {}
                }
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="portfolio-grid reveal">
            {filteredProjects.map((project) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                className={`project-card ${getProjectBgClass(project.id)}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="project-img">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-body">
                  <div>
                    <div className="project-tag">{project.category}</div>
                    <h3>{project.title}</h3>
                    <p className="project-desc">{project.description}</p>

                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '12px' }}>
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-pill" style={{ padding: '2px 8px', fontSize: '10px' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="project-arrow"><ArrowUpRight size={24} /></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Ready to Start?</div>
          <h2>Let's build something<br /><span className="accent">extraordinary.</span></h2>
          <p>Get a fixed-price quote within 24 hours. Free 30-minute discovery call.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">Start your project &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;