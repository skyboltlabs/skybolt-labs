import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../components/UI/WhatsAppIcon';
import SEOHead from '../components/UI/SEOHead';

const Home = () => {
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

    // Floating cards hover-adjust
    const floatingCards = document.querySelectorAll('.floating-card') as NodeListOf<HTMLElement>;
    floatingCards.forEach(card => {
      const handleMouseEnter = () => { card.style.transform += ' scale(1.05)'; };
      const handleMouseLeave = () => { card.style.transform = card.style.transform.replace(' scale(1.05)', ''); };
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    const processObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const steps = document.querySelectorAll('#process .step');
          steps.forEach((step, i) => {
            setTimeout(() => {
              step.classList.add('visible');
            }, i * 150);
          });
          processObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    const processSection = document.querySelector('#process');
    if (processSection) processObserver.observe(processSection);

    return () => {
      reveals.forEach(el => obs.unobserve(el));
      if (processSection) processObserver.unobserve(processSection);
      // Handlers not explicitly removed here as page unmounts anyway and card references are destroyed
    };
  }, []);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Skybolt Labs",
    "image": "https://skyboltlabs.co.za/og-image.jpg",
    "logo": "https://skyboltlabs.co.za/og-image.jpg",
    "url": "https://skyboltlabs.co.za",
    "telephone": "+27816172049",
    "email": "skyboltlabs@outlook.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cape Town",
      "addressRegion": "Western Cape",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.9249,
      "longitude": 18.4241
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61556704706621",
      "https://linkedin.com/company/skybolt-labs",
      "https://wa.me/27816172049"
    ],
    "priceRange": "$$",
    "description": "Cape Town's fastest web development and AI automation studio. Custom websites, AI chatbots, e-commerce, and more."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Skybolt Labs",
    "url": "https://skyboltlabs.co.za"
  };

  const combinedSchema = [orgSchema, websiteSchema];

  return (
    <>
      <SEOHead
        title="Skybolt Labs — Cape Town Web & AI Studio"
        description="Cape Town's fastest web development and AI automation studio. Custom websites, AI chatbots, e-commerce, and more. Fixed prices, fast delivery."
        keywords="web development, AI automation, e-commerce, Cape Town, Next.js, React"
        schema={combinedSchema}
      />

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-grid"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>

        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="eyebrow-dot"></span>
              Cape Town's web &amp; AI studio
            </div>
            <h1>
              We build<br />
              <span className="bolt">faster,</span> smarter<br />
              <span className="accent">digital products.</span>
            </h1>
            <p className="hero-sub">
              Custom websites, <strong>AI automations</strong>, and e-commerce
              that actually convert. Fixed prices. Fast delivery. Zero templates.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">Start your project &rarr;</Link>
              <Link to="/portfolio" className="btn-ghost">View our work</Link>
            </div>
            <div className="hero-proof">
              <div className="proof-item">
                <div className="proof-num">150+</div>
                <div className="proof-label">Happy clients</div>
              </div>
              <div className="proof-item">
                <div className="proof-num">300+</div>
                <div className="proof-label">Projects delivered</div>
              </div>
              <div className="proof-item">
                <div className="proof-num">5.0★</div>
                <div className="proof-label">Average rating</div>
              </div>
              <div className="proof-item">
                <div className="proof-num">8+</div>
                <div className="proof-label">Years building</div>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '24px' }}>
              <Link to="/pricing" style={{ color: 'inherit', textDecoration: 'none' }}>
                Web projects from R2,500 · AI automations from R3,500 · Retainers from R800/month
              </Link>
            </p>
          </div>

          <div className="hero-right">
            <div className="hero-canvas">
              <div className="hero-sphere-ring"></div>
              <div className="hero-sphere"></div>

              <div className="floating-card fc-1">
                <div className="card-icon">🤖</div>
                <div className="card-title">AI chatbot live</div>
                <div className="card-sub">Responding in 0.3s</div>
              </div>
              <div className="floating-card fc-2">
                <div className="card-icon">📈</div>
                <div className="card-title">+340% conversions</div>
                <div className="card-sub">Retail client, 2024</div>
              </div>
              <div className="floating-card fc-3">
                <div className="card-icon">⚡</div>
                <div className="card-title">3-day design sprint</div>
                <div className="card-sub">Figma &rarr; live site</div>
              </div>
              <div className="floating-card fc-4">
                <div className="card-icon">🇿🇦</div>
                <div className="card-title">Cape Town based</div>
                <div className="card-sub">SA payment gateways</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          <div className="marquee-item"><span>⚡</span> Web Development</div>
          <div className="marquee-item"><span>🤖</span> AI Automations</div>
          <div className="marquee-item"><span>🛒</span> E-Commerce</div>
          <div className="marquee-item"><span>🎨</span> UI/UX Design</div>
          <div className="marquee-item"><span>📱</span> Mobile-First</div>
          <div className="marquee-item"><span>⚙️</span> API Integrations</div>
          <div className="marquee-item"><span>📈</span> SEO &amp; Performance</div>
          <div className="marquee-item"><span>💬</span> WhatsApp Bots</div>
          <div className="marquee-item"><span>🔐</span> Secure &amp; Scalable</div>
          {/* duplicate for seamless loop */}
          <div className="marquee-item"><span>⚡</span> Web Development</div>
          <div className="marquee-item"><span>🤖</span> AI Automations</div>
          <div className="marquee-item"><span>🛒</span> E-Commerce</div>
          <div className="marquee-item"><span>🎨</span> UI/UX Design</div>
          <div className="marquee-item"><span>📱</span> Mobile-First</div>
          <div className="marquee-item"><span>⚙️</span> API Integrations</div>
          <div className="marquee-item"><span>📈</span> SEO &amp; Performance</div>
          <div className="marquee-item"><span>💬</span> WhatsApp Bots</div>
          <div className="marquee-item"><span>🔐</span> Secure &amp; Scalable</div>
        </div>
      </div>

      {/* Services */}
      <section id="services">
        <div className="container">
          <div className="section-tag">What we do</div>
          <h2>Every tool your business<br />needs to <span className="accent">grow online.</span></h2>
          <p className="section-lead">From a sharp landing page to full AI-powered workflows. We scope fast, design faster, and build things that work.</p>

          <div className="services-grid reveal">
            <div className="svc-card">
              <div className="svc-icon-wrap">🖥️</div>
              <h3>Web Development</h3>
              <p className="svc-desc">Custom-built websites and web apps. Fast, SEO-optimised, and built to convert. Never a template.</p>
              <ul className="svc-features">
                <li>React &amp; Next.js</li>
                <li>Node.js backend</li>
                <li>Database design</li>
                <li>API development</li>
              </ul>
            </div>
            <div className="svc-card">
              <div className="svc-icon-wrap">🤖</div>
              <h3>AI Automations <span className="badge-new">New</span></h3>
              <p className="svc-desc">Chatbots, WhatsApp flows, lead qualification bots, and smart automations that save hours every week.</p>
              <ul className="svc-features">
                <li>WhatsApp business bots</li>
                <li>AI customer support</li>
                <li>Lead gen automation</li>
                <li>Make / n8n workflows</li>
              </ul>
            </div>
            <div className="svc-card">
              <div className="svc-icon-wrap">🛒</div>
              <h3>E-Commerce</h3>
              <p className="svc-desc">High-converting online stores with SA payment gateways and full inventory management.</p>
              <ul className="svc-features">
                <li>Shopify &amp; WooCommerce</li>
                <li>Peach, Yoco, PayFast</li>
                <li>Payment integration</li>
                <li>Analytics &amp; reporting</li>
              </ul>
            </div>
            <div className="svc-card">
              <div className="svc-icon-wrap">🎨</div>
              <h3>UI/UX Design</h3>
              <p className="svc-desc">Figma prototypes that feel real. User research, wireframes, design systems built to scale.</p>
              <ul className="svc-features">
                <li>User research</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Design systems</li>
              </ul>
            </div>
            <div className="svc-card">
              <div className="svc-icon-wrap">📈</div>
              <h3>SEO &amp; Performance</h3>
              <p className="svc-desc">Core Web Vitals, local Cape Town SEO, and technical SEO that gets you found by the right people.</p>
              <ul className="svc-features">
                <li>On-page SEO</li>
                <li>Core Web Vitals</li>
                <li>Local Cape Town SEO</li>
                <li>Speed optimisation</li>
              </ul>
            </div>
            <div className="svc-card">
              <div className="svc-icon-wrap">⚙️</div>
              <h3>Integrations &amp; APIs</h3>
              <p className="svc-desc">Connect your tools. CRM pipelines, third-party APIs, custom dashboards, and automated data flows.</p>
              <ul className="svc-features">
                <li>CRM integrations</li>
                <li>Zapier / Make</li>
                <li>Custom dashboards</li>
                <li>Data pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work">
        <div className="container">
          <div className="section-tag">Featured work</div>
          <h2>Projects that<br /><span className="bolt">moved the needle.</span></h2>
          <p className="section-lead">A few of the things we've shipped. Each one came with a brief, a problem, and a measurable result.</p>

          <div className="portfolio-grid reveal">
            <div className="project-card p-featured proj-a" id="tilt-a">
              <div className="project-img">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" alt="TechCorp Enterprise Platform" />
              </div>
              <div className="project-body">
                <div>
                  <div className="project-tag">Web Development</div>
                  <h3>TechCorp Enterprise Platform</h3>
                  <p className="project-desc">Full Next.js rebuild with custom dashboard and API layer</p>
                  <div className="project-result">&uarr; 340% lead increase post-launch</div>
                </div>

              </div>
            </div>

            <div className="project-card proj-b" id="tilt-b">
              <div className="project-img">
                <img src="https://images.unsplash.com/photo-1603798125914-7b5d27789248?auto=format&fit=crop&w=800&q=80" alt="Fashion Store" />
              </div>
              <div className="project-body">
                <div>
                  <div className="project-tag">E-Commerce</div>
                  <h3>Fashion Store</h3>
                  <p className="project-desc">Shopify plus Peach Payments, custom UI</p>
                  <div className="project-result">&uarr; R2M revenue month 1</div>
                </div>

              </div>
            </div>

            <div className="project-card proj-c" id="tilt-c">
              <div className="project-img">
                <img src="https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=800&q=80" alt="Restaurant AI Booking Bot" />
              </div>
              <div className="project-body">
                <div>
                  <div className="project-tag">AI Automation</div>
                  <h3>Restaurant AI Booking Bot</h3>
                  <p className="project-desc">WhatsApp chatbot with live availability</p>
                  <div className="project-result">80% of bookings automated</div>
                </div>

              </div>
            </div>

            <div className="project-card proj-d" id="tilt-d">
              <div className="project-img">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" alt="Health Patient Portal" />
              </div>
              <div className="project-body">
                <div>
                  <div className="project-tag">Web App</div>
                  <h3>Health Patient Portal</h3>
                  <p className="project-desc">Full-stack patient management app</p>
                  <div className="project-result">&darr; 60% admin time saved</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why">
        <div className="container">
          <div className="section-tag">Why Skybolt Labs</div>
          <h2>We're not your average<br /><span className="accent">digital agency.</span></h2>
          <p className="section-lead">We're a tight, senior team. No juniors handed your project. No inflated timelines. Just sharp work, delivered fast.</p>

          <div className="why-grid reveal">
            <div className="why-card">
              <div className="why-num">01</div>
              <h3>Fixed-price, no surprises</h3>
              <p>We scope your project, give you a fixed price, and stick to it. No hourly billing, no hidden extras. What we quote is what you pay.</p>
            </div>
            <div className="why-card">
              <div className="why-num">02</div>
              <h3>AI-first thinking</h3>
              <p>We don't just build websites. We ask: where can AI save you time, money, or staff? Every project gets an automation audit baked in.</p>
            </div>
            <div className="why-card">
              <div className="why-num">03</div>
              <h3>Cape Town local, global delivery</h3>
              <p>We know the SA market. Peach, Yoco, PayFast, RICA compliance, local SEO. We've done it. We also serve clients across 25+ countries.</p>
            </div>
            <div className="why-card">
              <div className="why-num">04</div>
              <h3>You see progress every 3 days</h3>
              <p>No disappearing for weeks. You get a live staging link from day one. Every 3 days, there's something new to click, test, and approve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process">
        <div className="container">
          <div className="section-tag">How we work</div>
          <h2>From brief to <span className="bolt">live in weeks,</span><br />not months.</h2>
          <p className="section-lead">A proven process that keeps things moving without sacrificing quality.</p>

          <div className="process-steps">
            <div className="process-line"></div>
            {[
              { step: '01', icon: '🎯', title: 'Discovery', timeframe: 'Day 1', description: 'Free 30-minute call. We listen, ask the right questions, and send you a fixed-price scope document within 24 hours. No obligation.', deliverable: 'Scope doc + fixed quote' },
              { step: '02', icon: '✏️', title: 'Design', timeframe: 'Days 2–3', description: 'High-fidelity Figma prototypes that look and feel like the real thing. Two rounds of revisions included. You approve everything before we write a line of code.', deliverable: 'Figma prototype' },
              { step: '03', icon: '⚡', title: 'Build', timeframe: 'Days 4–10', description: 'Agile sprints with a live staging link from day one. You see real progress every 3–5 days and can give feedback at any point.', deliverable: 'Live staging link' },
              { step: '04', icon: '🚀', title: 'Launch', timeframe: 'Days 11–14', description: 'Full QA across devices and browsers, SEO setup, speed optimisation, and a handover session so your team knows exactly how to use what we\'ve built.', deliverable: 'Live site + training' },
              { step: '05', icon: '🛡️', title: 'Support', timeframe: '30 days free', description: 'We stay on call for 30 days post-launch at no extra cost. Bug fixes, tweaks, and questions answered. After that, our retainer plans keep things running.', deliverable: 'Priority support' }
            ].map((item) => (
              <div key={item.step} className="step">
                <div className="step-dot">{item.icon}</div>
                <div className="step-num-label">Step {item.step}</div>
                <div className="step-timeframe">{item.timeframe}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="deliverable-badge">{item.deliverable}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ background: 'var(--bg2)', padding: '70px 40px' }}>
        <div className="container">
          <div className="section-tag">Technologies we use</div>
          <h2 style={{ marginBottom: '32px' }}>The stack behind<br /><span className="accent">every project.</span></h2>
          <div className="tech-grid reveal">
            <span className="tech-pill">React</span>
            <span className="tech-pill">Next.js</span>
            <span className="tech-pill">TypeScript</span>
            <span className="tech-pill">Node.js</span>
            <span className="tech-pill">Python</span>
            <span className="tech-pill">AWS</span>
            <span className="tech-pill">Docker</span>
            <span className="tech-pill">GraphQL</span>
            <span className="tech-pill">MongoDB</span>
            <span className="tech-pill">PostgreSQL</span>
            <span className="tech-pill">Redis</span>
            <span className="tech-pill">Tailwind CSS</span>
            <span className="tech-pill">Figma</span>
            <span className="tech-pill">Shopify</span>
            <span className="tech-pill">WordPress</span>
            <span className="tech-pill">Supabase</span>
            <span className="tech-pill">Make (Integromat)</span>
            <span className="tech-pill">n8n</span>
            <span className="tech-pill">OpenAI API</span>
            <span className="tech-pill">Peach Payments</span>
            <span className="tech-pill">PayFast</span>
            <span className="tech-pill">Yoco</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <div className="container">
          <div className="section-tag">What clients say</div>
          <h2>We let the work<br /><span className="accent">do the talking.</span></h2>
          <p className="section-lead">Don't take our word for it. Here's what businesses we've worked with have to say.</p>

          <div className="testi-grid reveal">
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p className="testi-quote">"Professional, creative, and delivered exactly when we needed. The AI integration was a game-changer for our patient management system. They understood our complex requirements perfectly."</p>
              <div className="testi-author">
                <div className="avatar">ED</div>
                <div>
                  <div className="author-name">Emma Diek</div>
                  <div className="author-role">Product Manager, HealthStream Platform</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p className="testi-quote">"Our Shopify store went live in 2 weeks. Sales in the first month exceeded anything we projected. The team knew SA e-commerce inside and out, from Peach Payments to local SEO."</p>
              <div className="testi-author">
                <div className="avatar">NK</div>
                <div>
                  <div className="author-name">Nadia Kriel</div>
                  <div className="author-role">Founder, Indigo Fashion Cape Town</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p className="testi-quote">"The WhatsApp bot they built handles 80% of our bookings without human input. Our staff now focus on the actual restaurant. Best tech investment we've ever made."</p>
              <div className="testi-author">
                <div className="avatar">JM</div>
                <div>
                  <div className="author-name">James Moloi</div>
                  <div className="author-role">Owner, Moloi Dining Group</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="cta-glow"></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Ready to build?</div>
          <h2>Let's make something<br /><span className="accent">that actually works.</span></h2>
          <p>Get a fixed-price quote within 24 hours. Free 30-minute discovery call, no obligation.</p>
          <div className="cta-buttons">
            <a href="mailto:skyboltlabs@outlook.com" className="btn-primary">Start your project &rarr;</a>
            <a href="https://wa.me/27816172049" className="btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><WhatsAppIcon size={16} /> WhatsApp us</a>
          </div>
          <div className="cta-detail">
            <span>Fixed pricing</span>
            <span>3-day design turnaround</span>
            <span>30-day post-launch support</span>
            <span>Cape Town based</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;