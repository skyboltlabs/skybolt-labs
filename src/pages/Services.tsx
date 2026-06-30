import React, { useEffect, useState } from 'react';
import { Code, Palette, ShoppingCart, Bot, Workflow, Search, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/UI/SEOHead';

const servicesSchema = [
  // Keep original schema
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development",
    "description": "Custom websites and web applications built with modern technologies like React, Node.js, and cutting-edge frameworks.",
    "provider": {
      "@type": "Organization",
      "name": "Skybolt Labs"
    },
    "areaServed": {
      "@type": "Country",
      "name": "South Africa"
    }
  }
];

const Services = () => {

  useEffect(() => {
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

    const processObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const steps = document.querySelectorAll('.step');
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
    };
  }, []);

  const services = [
    {
      icon: <Code size={32} strokeWidth={1.5} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      features: [
        'Custom WordPress Development',
        'React & Node.js Applications',
        'API Integration',
        'Database Design'
      ]
    },
    {
      icon: <Palette size={32} strokeWidth={1.5} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences.',
      features: [
        'User Experience Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Design Systems'
      ]
    },
    {
      icon: <ShoppingCart size={32} strokeWidth={1.5} />,
      title: 'E-commerce Solutions',
      description: 'Powerful online stores that drive sales and grow your business.',
      features: [
        'Shopify Development',
        'WooCommerce Setup',
        'Payment Gateway Integration',
        'Analytics & Reporting'
      ]
    },
    {
      icon: <Bot size={32} strokeWidth={1.5} />,
      title: 'AI Automations & Chatbots',
      description: 'Smart features powered by AI to enhance user engagement.',
      features: [
        'WhatsApp Business Bots',
        'AI Customer Support Agents',
        'Lead Qualification Flows',
        'Workflow Automation'
      ]
    },
    {
      icon: <Workflow size={32} strokeWidth={1.5} />,
      title: 'Workflow Automation',
      description: 'Connect your apps and automate repetitive tasks using Make, n8n, and Zapier.',
      features: [
        'Make.com Scenarios',
        'n8n Custom Automations',
        'Zapier Integrations',
        'API & Webhook Connections'
      ]
    },
    {
      icon: <Search size={32} strokeWidth={1.5} />,
      title: 'SEO & Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence.',
      features: [
        'Search Engine Optimization',
        'Content Marketing',
        'Conversion Rate Optimisation',
        'Analytics & Reporting'
      ]
    }
  ];



  return (
    <>
      <SEOHead
        title="Web Development Services Cape Town | Skybolt Labs"
        description="Professional web development services in Cape Town: custom websites, e-commerce stores, UI/UX design, AI integration. Get a free quote for your project today!"
        keywords="web development services Cape Town, UI/UX design South Africa, e-commerce development, AI integration services, mobile app development Cape Town, SEO services South Africa"
        url="https://skyboltlabs.co.za/services"
        schema={servicesSchema}
      />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Our Services</div>
          <h1 className="page-hero-title">
            Comprehensive solutions to <br />
            <span className="bolt">grow online.</span>
          </h1>
          <p className="page-hero-sub">
            From concept to launch, we provide end-to-end digital services that drive results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services">
        <div className="container">
          <div className="section-tag">What We Offer</div>
          <h2>Tools to <span className="accent">dominate.</span></h2>
          <p className="section-lead">A suite of services designed to cover every aspect of your digital presence.</p>

          <div className="services-grid reveal">
            {services.map((service) => (
              <div key={service.title} className="svc-card">
                <div className="svc-icon-wrap">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="svc-desc">{service.description}</p>
                <ul className="svc-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-teaser">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Pricing</div>
          <h2>Transparent pricing.<br />
            <span className="accent">No surprises.</span>
          </h2>
          <p className="section-lead" style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
            Web projects from R2,500. AI automations from R3,500.<br />
            Retainer plans from R800/month.
          </p>
          <Link to="/pricing" className="btn-primary">
            See full pricing &rarr;
          </Link>
        </div>
      </section>

      {/* Process Section */}
      <section id="process">
        <div className="container">
          <div className="section-tag">Our Process</div>
          <h2>From brief to <span className="accent">launch.</span></h2>
          <p className="section-lead">We follow a proven methodology to ensure your project is delivered on time and exceeds expectations.</p>

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
    </>
  );
};

export default Services;