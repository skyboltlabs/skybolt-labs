import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../components/UI/WhatsAppIcon';
import SEOHead from '../components/UI/SEOHead';

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "Organization",
    "name": "Skybolt Labs",
    "description": "Premium web development agency based in Cape Town, South Africa, with 8+ years of experience creating exceptional digital experiences.",
    "foundingDate": "2016",
    "numberOfEmployees": "1-10",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cape Town",
      "addressRegion": "Western Cape",
      "addressCountry": "ZA"
    },
    "knowsAbout": [
      "Web Development",
      "React",
      "Node.js",
      "AI Integration",
      "E-commerce",
      "UI/UX Design"
    ]
  }
};

const About = () => {
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

  const stats = [
    { label: 'Happy clients', value: '150+' },
    { label: 'Projects delivered', value: '300+' },
    { label: 'Days avg. delivery', value: '10–14' },
    { label: 'Years building', value: '8+' }
  ];

  const values = [
    {
      title: 'Transparency',
      description: 'We quote before we start and we stick to it. No hourly billing, no scope creep invoices, no surprises at the end.'
    },
    {
      title: 'Speed',
      description: 'We use AI-accelerated development to deliver in days, not months. Most projects go from brief to live in under two weeks.'
    },
    {
      title: 'Directness',
      description: 'You work with the person building your product, not an account manager. Questions get answered the same day.'
    },
    {
      title: 'Craft',
      description: "We don't use templates. Every site is designed and built from scratch for the specific business it represents."
    }
  ];

  return (
    <>
      <SEOHead 
        title="About Skybolt Labs | Web Development Team Cape Town"
        description="Meet our experienced web development team in Cape Town. 8+ years of expertise in creating exceptional digital experiences for businesses across South Africa and beyond."
        keywords="about skybolt labs, web development team Cape Town, experienced developers South Africa, Cape Town web agency, professional web developers"
        url="https://skyboltlabs.co.za/about"
        schema={aboutSchema}
      />
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>— ABOUT SKYBOLT LABS</div>
          <h1 className="page-hero-title reveal">
            Built in Cape Town.<br />
            <span className="accent">Built to perform.</span>
          </h1>
          <p className="page-hero-sub reveal" style={{ transitionDelay: '100ms', margin: '0 auto' }}>
            We build high-performance websites and AI-powered systems
            for businesses that are serious about growth. Fast delivery,
            fixed pricing, and direct access to the people doing the work.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal">
            <div>
              <div className="section-tag">— OUR MISSION</div>
              <h2>We make great digital<br />
                <span className="accent">products accessible.</span>
              </h2>
              <p className="section-lead" style={{ marginBottom: '24px' }}>
                Skybolt Labs started from a simple observation: most small and
                medium businesses in South Africa were being priced out of
                quality web development, or being handed templated sites that
                looked like everyone else's. We exist to change that.
              </p>
              <p className="section-lead">
                We combine senior-level development with AI-accelerated delivery
                to produce work that competes with what large agencies charge
                three times as much for. Based in Cape Town, working with clients
                across South Africa and internationally.
              </p>
              
            </div>

            <div className="mission-quote-card reveal" style={{ transitionDelay: '100ms' }}>
              <div className="quote-mark">&#8220;</div>
              <p className="quote-text">
                Good digital products shouldn't be a luxury.
                They should be the baseline for every serious business.
              </p>
              <div className="quote-attribution">
                — Founder, Skybolt Labs
              </div>
            </div>
          </div>

          <div className="stats-row reveal" style={{ transitionDelay: '200ms' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <div className="proof-num" style={stat.value === '10–14' ? { whiteSpace: 'nowrap' } : {}}>{stat.value}</div>
                <div className="proof-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values">
        <div className="container">
          <div className="section-tag">Our values</div>
          <h2>How we work,<br />
            <span className="accent">every single project.</span>
          </h2>
          <p className="section-lead">
            Not aspirational statements. Actual commitments we make
            to every client from day one.
          </p>

          <div className="why-grid reveal" style={{ marginTop: '48px' }}>
            {values.map((value, index) => (
              <div key={value.title} className="why-card">
                <div className="why-num" style={{ fontSize: '32px', marginBottom: '16px' }}>0{index + 1}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="section-tag">— WHO WE ARE</div>
          <h2>Built by someone who<br />
            <span className="accent">actually gives a damn.</span>
          </h2>

          <div className="who-we-are-grid mt-12 reveal">
            <div className="founder-card">
              <div className="founder-avatar">
                {/* Real photo here. If not available use initials avatar below */}
                <div className="founder-initials">QC</div>
              </div>
              <div className="founder-name">Quint Chamisa</div>
              <div className="founder-role">Founder & Lead Developer</div>
              <div className="founder-location">📍 Cape Town, South Africa</div>
              <div className="founder-tags">
                <span className="tech-pill">React & Next.js</span>
                <span className="tech-pill">AI Automations</span>
                <span className="tech-pill">UI/UX Design</span>
                <span className="tech-pill">E-Commerce</span>
              </div>
              <a href="https://wa.me/27816172049?text=Hi%2C%20I%20found%20you%20on%20the%20Skybolt%20Labs%20website"
                 className="linkedin-link" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={16} /> Message me directly →
              </a>
            </div>

            <div className="founder-bio">
              <p>
                Skybolt Labs is a boutique studio, not a big agency.
                When you work with us, you work directly with the founder —
                the person scoping your project, designing your interface,
                and writing your code. No account managers. No handoffs.
                No juniors assigned to your brief while the senior is
                somewhere else.
              </p>
              <p>
                For projects that require specialist skills — motion design,
                copywriting, advanced backend architecture — we bring in
                trusted contractors from our network, vetted and briefed
                to the same standard we hold ourselves to.
              </p>
              <p>
                This keeps the team lean, the communication direct, and
                the quality consistent. It's also why we can deliver in
                days instead of weeks.
              </p>

              <div className="bio-commitments">
                <div className="bio-commitment">
                  <span className="commitment-icon">✓</span>
                  <span>You have direct access to the founder throughout</span>
                </div>
                <div className="bio-commitment">
                  <span className="commitment-icon">✓</span>
                  <span>Messages answered same day, Mon–Fri</span>
                </div>
                <div className="bio-commitment">
                  <span className="commitment-icon">✓</span>
                  <span>8+ years of web development experience</span>
                </div>
                <div className="bio-commitment">
                  <span className="commitment-icon">✓</span>
                  <span>150+ clients served across SA and internationally</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="cta-section" id="contact">
        <div className="cta-glow"></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Work with us
          </div>
          <h2>
            Ready to build something<br />
            <span className="accent">that actually works?</span>
          </h2>
          <p>
            Get a fixed-price quote within 24 hours.
            Free discovery call, no obligation.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              Get your free quote →
            </Link>
            <a href="https://wa.me/27816172049" className="btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <WhatsAppIcon size={16} /> WhatsApp us
            </a>
          </div>
          <div className="cta-detail">
            <span>Fixed pricing</span>
            <span>Response within 24 hours</span>
            <span>Cape Town based</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;