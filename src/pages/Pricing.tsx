import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import SEOHead from '../components/UI/SEOHead';
import WhatsAppIcon from '../components/UI/WhatsAppIcon';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (['web', 'ai-automations', 'retainers'].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.history.pushState(null, '', `#${tab}`);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const webPricingTiers = [
    {
      name: 'Starter',
      price: 'R2,500',
      description: 'Perfect for small businesses getting started online',
      features: [
        'Custom Design',
        'Responsive Layout',
        'Basic SEO',
        '1 Business Email',
        'Google Business Profile Setup',
        'Free Domain Name',
        'Free SSL + Hosting (1 Year)',
        '1 Week Post-Launch Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 'R4,500',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Everything in Starter',
        'Custom Development',
        'CMS Integration',
        '3 Business Emails',
        'Advanced SEO',
        'Analytics Setup',
        'E-commerce Ready',
        'Premium Hosting',
        '3 Months Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'R7,500',
      description: 'For large organizations requiring custom solutions',
      features: [
        'Everything in Professional',
        'Custom Web Application',
        'API Development',
        'AI Integration',
        'Advanced Security',
        'Performance Optimization',
        'Dedicated Support',
        'Cloud Infrastructure',
        '10 Business Emails',
        '6 Months Support'
      ],
      popular: false
    }
  ];

  const aiPricingTiers = [
    {
      name: 'Starter Bot',
      price: 'R3,500',
      description: 'Best for: Small businesses wanting their first automation.',
      features: [
        'WhatsApp FAQ bot (up to 20 responses)',
        'Lead capture flow',
        'Email notification on new enquiry',
        '2 weeks delivery',
        '2 weeks post-launch support'
      ],
      popular: false
    },
    {
      name: 'Business Automation',
      price: 'R6,500',
      description: 'Best for: Businesses ready to automate a real workflow.',
      features: [
        'Custom AI chatbot (website or WhatsApp)',
        'Lead qualification flow with scoring',
        'CRM integration (HubSpot, Pipedrive, or custom)',
        'Automated follow-up sequences',
        'Make / n8n workflow build',
        '1 month post-launch support'
      ],
      popular: true
    },
    {
      name: 'Full AI Suite',
      price: 'R12,000+',
      description: 'Best for: Businesses replacing manual processes at scale.',
      features: [
        'Everything in Business Automation',
        'Multi-channel deployment (web + WhatsApp + email)',
        'Custom AI knowledge base trained on your content',
        'Dashboard with automation analytics',
        'Staff handoff logic and escalation flows',
        '3 months support + monthly optimisation'
      ],
      popular: false
    }
  ];

  const retainerPricingTiers = [
    {
      name: 'Care',
      price: 'R800',
      period: '/month',
      buttonText: 'Start Care Plan →',
      description: 'Essential maintenance for peace of mind',
      features: [
        'Uptime monitoring',
        'Security patches',
        'Up to 2 hours of content updates per month',
        'Monthly performance report',
        '48-hour response time'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: 'R1,800',
      period: '/month',
      buttonText: 'Start Growth Plan →',
      description: 'Active growth and development',
      features: [
        'Everything in Care',
        'Up to 6 hours development changes per month',
        'SEO monitoring and monthly recommendations',
        'Analytics review and insights call',
        '24-hour response time',
        'Priority queue for new projects'
      ],
      popular: true
    },
    {
      name: 'Partner',
      price: 'R3,500',
      period: '/month',
      buttonText: 'Enquire About Partner →',
      description: 'Your dedicated tech team',
      features: [
        'Everything in Growth',
        'Up to 15 hours development per month',
        'Dedicated account manager',
        'Monthly strategy session (1 hour)',
        'Same-day response time',
        'First access to new Skybolt Labs services'
      ],
      popular: false
    }
  ];

  const faqData = [
    {
      question: "What if my project doesn't fit neatly into one of your tiers?",
      answer: "Most don't, and that's fine. The tiers are starting points, not rigid boxes. After your free discovery call we'll put together a custom scope document with a fixed price that fits your actual project. You're never locked into a package."
    },
    {
      question: "Do you require full payment upfront?",
      answer: "No. We work on a 50/50 split – 50% to begin the project, 50% on delivery before the site goes live. For larger Enterprise or AI Suite projects we can discuss a three-stage payment milestone structure."
    },
    {
      question: "How long does a typical project take?",
      answer: "Landing pages and starter sites typically take 1–2 weeks. Business sites take 3–4 weeks. Web apps and AI automation projects range from 3–8 weeks depending on complexity. You'll get an exact timeline in your scope document."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes. Many clients start on Launch or Starter Bot and expand once they've seen results. We treat every client as a long-term relationship, not a once-off transaction."
    },
    {
      question: "Do your prices include hosting?",
      answer: "The Starter web tier includes free hosting for one year. Professional and Scale tiers include premium hosting. AI automation projects do not include hosting by default but we can add it – ask us during scoping."
    },
    {
      question: "Do you offer discounts for nonprofits or early-stage startups?",
      answer: "Yes, on a case-by-case basis. Reach out directly and tell us about your project. We believe good digital tools shouldn't be out of reach for organisations doing meaningful work."
    },
    {
      question: "What happens after the 30-day post-launch support period?",
      answer: "You're welcome to move onto one of our retainer plans, which start at R800/month. Alternatively you can come back to us project-by-project. There's no obligation to continue, but most clients do."
    }
  ];

  return (
    <>
      <SEOHead
        title="Pricing — Skybolt Labs | Web Development & AI Automations Cape Town"
        description="Transparent, fixed-price web development and AI automation pricing for Cape Town businesses. Web projects from R2,500. No hidden fees."
      />

      {/* Hero */}
      <section className="hero" style={{ padding: '120px 20px 60px', minHeight: 'auto' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Pricing Plans</div>
          <h2>Clear, honest <span className="accent">pricing.</span></h2>
          <p className="section-lead" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Every project gets a fixed price before we start.<br />
            No hourly billing. No hidden extras. No surprises.
          </p>
        </div>
      </section>

      {/* Pricing Toggle & Cards */}
      <section style={{ paddingTop: '20px' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <div className="pricing-toggle">
              <button 
                className={`toggle-btn ${activeTab === 'web' ? 'active' : ''}`}
                onClick={() => handleTabChange('web')}
              >
                Web Projects
              </button>
              <button 
                className={`toggle-btn ${activeTab === 'ai-automations' ? 'active' : ''}`}
                onClick={() => handleTabChange('ai-automations')}
              >
                AI Automations
              </button>
              <button 
                className={`toggle-btn ${activeTab === 'retainers' ? 'active' : ''}`}
                onClick={() => handleTabChange('retainers')}
              >
                Retainers
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {(activeTab === 'web' ? webPricingTiers : activeTab === 'ai-automations' ? aiPricingTiers : retainerPricingTiers).map((tier) => (
                <div
                  key={tier.name}
                  className="why-card relative"
                  style={tier.popular ? { borderColor: 'var(--accent)', transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(91,92,246,0.15)' } : {}}
                >
                  {tier.popular && (
                    <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: '#fff', fontSize: '11px', fontWeight: 600, padding: '4px 12px', borderRadius: '100px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Most Popular
                    </div>
                  )}

                  <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{tier.name}</h3>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '24px', minHeight: '40px' }}>{tier.description}</p>
                    <div className="price-number">
                      {tier.price}
                      {(tier as any).period && <span className="price-period">{(tier as any).period}</span>}
                    </div>
                    {(tier as any).period && (
                      <div className="price-note">Billed monthly · Cancel anytime</div>
                    )}
                  </div>

                  <ul className="svc-features" style={{ marginBottom: '32px' }}>
                    {tier.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>

                  <Link
                    to={`/contact?plan=${tier.name.toLowerCase()}`}
                    className={tier.popular ? 'btn-primary' : 'btn-ghost'}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {(tier as any).buttonText || 'Get Started'}
                  </Link>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {activeTab === 'retainers' && (
            <p className="retainer-note">
              All plans include onboarding in the first week. 
              No lock-in contracts. Cancel with 30 days notice.
            </p>
          )}
        </div>
      </section>

      {/* Pricing FAQ */}
      <section style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className="section-tag" style={{ justifyContent: 'center' }}>FAQ</div>
          <h2 style={{ textAlign: 'center' }}>Got questions?</h2>
          
          <div className="space-y-4" style={{ marginTop: '40px' }}>
            {faqData.map((faq, index) => (
              <div key={index} className={`why-card faq-item ${openFaqIndex === index ? 'open' : ''}`} style={{ padding: '0', cursor: 'pointer', overflow: 'hidden' }} onClick={() => toggleFaq(index)}>
                <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '16px', margin: 0 }}>{faq.question}</h3>
                  <div className="faq-icon">+</div>
                </div>
                {openFaqIndex === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
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
            <Link to="/contact" className="btn-primary">Start your project &rarr;</Link>
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

export default Pricing;
