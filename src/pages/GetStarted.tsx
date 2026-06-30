import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './GetStarted.css';
import { useContactForm } from '../hooks/useContactForm';
import CustomCursor from '../components/UI/CustomCursor';
import WhatsAppIcon from '../components/UI/WhatsAppIcon';

const GetStarted: React.FC = () => {
  const { formData, formStatus, handleInputChange, submitForm } = useContactForm();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [availOnline] = useState(true);

  useEffect(() => {
    // Parse UTM parameters on mount
    const getParam = (name: string) => {
      return new URLSearchParams(window.location.search).get(name) || '';
    };

    const utm_source = getParam('utm_source');
    const utm_medium = getParam('utm_medium');
    const utm_campaign = getParam('utm_campaign');
    const utm_term = getParam('utm_term');

    const sourceEl = document.getElementById('utm_source') as HTMLInputElement;
    const mediumEl = document.getElementById('utm_medium') as HTMLInputElement;
    const campaignEl = document.getElementById('utm_campaign') as HTMLInputElement;
    const termEl = document.getElementById('utm_term') as HTMLInputElement;

    if (sourceEl) sourceEl.value = utm_source;
    if (mediumEl) mediumEl.value = utm_medium;
    if (campaignEl) campaignEl.value = utm_campaign;
    if (termEl) termEl.value = utm_term;

    // Availability signal — always show as online to encourage messages
  }, []);

  const handleLandingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Map the specific landing page fields to the generic form data model if needed
    // or just let useContactForm submit the raw data.
    // The hook submits `formData`. Let's ensure the UTMs and everything are in it.

    // We should grab the hidden fields before submitting if they aren't in state
    const sourceEl = document.getElementById('utm_source') as HTMLInputElement;
    const mediumEl = document.getElementById('utm_medium') as HTMLInputElement;
    const campaignEl = document.getElementById('utm_campaign') as HTMLInputElement;
    const termEl = document.getElementById('utm_term') as HTMLInputElement;

    const dataToSubmit = {
      firstName: (e.target as any).first_name.value,
      lastName: (e.target as any).last_name.value,
      email: (e.target as any).email.value,
      whatsapp: (e.target as any).whatsapp.value,
      service: (e.target as any).service.value,
      budget: (e.target as any).budget.value,
      description: (e.target as any).description.value,
      utm_source: sourceEl?.value || '',
      utm_medium: mediumEl?.value || '',
      utm_campaign: campaignEl?.value || '',
      utm_term: termEl?.value || ''
    };

    // To keep it simple, let's just use the hook's native submit but override the data right before
    // We update the state, but state update is async. So let's just make sure the inputs match the hook's expected names!

  };

  // Actually, let's just use the form standard handling but with the exact names the user provided:
  // name="first_name", "last_name", "email", "whatsapp", "service", "budget", "description"

  // So we map them in useContactForm or handle them here.
  // Wait, I can just name the inputs to match `formData` keys!
  // first_name -> firstName, last_name -> lastName
  // Let's use the hook correctly.

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Grab UTMs again just in case
    const sourceEl = document.getElementById('utm_source') as HTMLInputElement;
    const mediumEl = document.getElementById('utm_medium') as HTMLInputElement;
    const campaignEl = document.getElementById('utm_campaign') as HTMLInputElement;
    const termEl = document.getElementById('utm_term') as HTMLInputElement;

    // We can inject them into formData if they aren't already. But it's easier to just rely on the hidden fields or update formData directly.
    const success = await submitForm(e, ['firstName', 'lastName', 'email', 'service', 'budget', 'description'], 'get-started');

    if (success) {
      // Conversion tracking
      if (typeof window !== 'undefined') {
        const gtag = (window as any).gtag;
        if (typeof gtag === 'function') {
          gtag('event', 'conversion', {
            'send_to': 'AW-XXXXXXXXX/XXXXXXXXX' // Placeholder as requested
          });
        }

        const dataLayer = (window as any).dataLayer = (window as any).dataLayer || [];
        dataLayer.push({
          event: 'form_submit',
          form_type: 'landing_page_quote',
          service: formData.service,
          budget: formData.budget
        });
      }
    }
  };

  const faqs = [
    {
      q: "Is the discovery call really free?",
      a: "Yes, completely. No credit card, no obligation. We have a 30-minute conversation, understand your project, and send you a fixed-price quote. You decide from there."
    },
    {
      q: "What if I don't know exactly what I need?",
      a: "That's what the discovery call is for. Select \"Not sure — need advice\" in the form and describe what you're trying to achieve. We'll figure out the right solution together."
    },
    {
      q: "How is your pricing different from other agencies?",
      a: "We give you a fixed price before we start, agreed in writing. You will never receive an invoice that's higher than what we quoted. No hourly billing, no scope creep surprises."
    },
    {
      q: "Do you work with businesses outside Cape Town?",
      a: "Yes. Around a third of our clients are based elsewhere in South Africa or internationally. Everything runs remotely via video calls and live staging links. Location is never a barrier."
    },
    {
      q: "How quickly can you start?",
      a: "Typically within 3–5 business days of the quote being accepted and the deposit paid. If you have an urgent deadline, mention it in the form and we'll let you know if we can accommodate it."
    }
  ];

  return (
    <>
      <CustomCursor />
      <Helmet>
        <title>Get Started | Skybolt Labs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Helmet>

      {/* Section 1 - Sticky mini-nav */}
      <nav className="lp-nav">
        <a href="/" className="nav-logo">
          <img src="/skyboltlabs-logo.svg" alt="Skybolt Labs" style={{ height: '32px', width: 'auto', display: 'block' }} />
        </a>
        <a href="#contact-form" className="btn-primary">
          Get your free quote →
        </a>
      </nav>

      {/* Section 2 - Hero */}
      <section className="lp-hero">
        <div className="section-tag" style={{ justifyContent: 'center', marginBottom: '16px' }}>⚡ Cape Town's web & AI studio</div>
        <h1 className="lp-hero-headline">
          Your business deserves<br />
          a website that <span className="accent">actually works.</span>
        </h1>
        <p className="lp-hero-subtext">
          Custom websites, AI chatbots, and e-commerce stores built fast,
          priced fairly, and guaranteed to perform. Cape Town based.
        </p>
        {/* Availability signal — always shown as online */}
        <div className="availability-signal">
          <span className="avail-dot" />
          <span className="avail-text">We're online now · Typically replies in under 1 hour</span>
        </div>

        <div className="lp-hero-ctas">
          {/* WhatsApp — primary CTA */}
          <a
            href="https://wa.me/27816172049?text=Hi%20Skybolt%20Labs%2C%20I%27d%20like%20to%20get%20a%20quote"
            className="btn-primary whatsapp-hero-btn"
            target="_blank"
            rel="noreferrer"
            style={{ padding: '14px 24px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <WhatsAppIcon size={20} style={{ color: '#ffffff' }} /> WhatsApp us now — we reply fast
          </a>
          {/* Form — secondary CTA */}
          <a href="#contact-form" className="btn-ghost" style={{ padding: '14px 24px', fontSize: '1rem' }}>
            Get a free quote →
          </a>
        </div>

        {/* Phone number below CTAs */}
        <p className="hero-phone">
          Or call us directly:{' '}
          <a href="tel:+27845921309">+27 84 592 1309</a>
          &nbsp;·&nbsp; Mon–Fri 9am–6pm SAST
        </p>

        <div className="lp-trust-signals">
          <span className="lp-trust-pill">Fixed pricing — no surprises</span>
          <span className="lp-trust-pill">Designs delivered in 3 days</span>
          <span className="lp-trust-pill">150+ happy clients</span>
          <span className="lp-trust-pill">30-day post-launch support</span>
        </div>
      </section>

      {/* Section 3 - Social proof bar */}
      <section className="lp-social-proof">
        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: '16px' }}>
          Trusted by businesses across South Africa
        </div>
        <div className="lp-stat-pills">
          <span>150+ clients served</span>
          <div className="lp-stat-divider"></div>
          <span>300+ projects delivered</span>
          <div className="lp-stat-divider"></div>
          <span>5.0★ average rating</span>
          <div className="lp-stat-divider"></div>
          <span>8+ years experience</span>
        </div>
      </section>

      {/* Section 4 - Problem / solution block */}
      <section className="lp-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="problem-col">
            <h3>Sound familiar?</h3>
            <ul>
              <li><span className="icon">✕</span> Your current website looks outdated and loses you clients</li>
              <li><span className="icon">✕</span> You're spending hours on tasks that could be automated</li>
              <li><span className="icon">✕</span> You got burned by an agency that overpromised and underdelivered</li>
              <li><span className="icon">✕</span> You don't know what your website is actually costing you in lost leads</li>
              <li><span className="icon">✕</span> You got a quote and had no idea what you were paying for</li>
            </ul>
          </div>
          <div className="solution-col">
            <h3>Here's what working with us looks like.</h3>
            <ul>
              <li><span className="icon">✓</span> A fixed price before we start — agreed in writing</li>
              <li id="speed"><span className="icon">✓</span> A live preview of your project within 5 days</li>
              <li><span className="icon">✓</span> Direct communication — no account managers, no middlemen</li>
              <li><span className="icon">✓</span> A site built to rank, load fast, and convert visitors</li>
              <li id="maintenance"><span className="icon">✓</span> 30 days of free support & maintenance after launch</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5 - Services snapshot */}
      <section className="lp-section" id="services" style={{ paddingTop: '0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>What we do.</h2>
        <div className="lp-services-grid">
          <div className="lp-service-card">
            <div className="lp-service-icon">🖥️</div>
            <h3 className="lp-service-headline">Custom Websites</h3>
            <p className="lp-service-text">From R2,500. Live in 2–4 weeks. Zero templates.</p>
            <a href="/services#web" className="lp-service-link" target="_blank" rel="noreferrer">Learn more →</a>
          </div>
          <div className="lp-service-card">
            <div className="lp-service-icon">🤖</div>
            <h3 className="lp-service-headline">AI & WhatsApp Bots</h3>
            <p className="lp-service-text">From R3,500. Automate enquiries, bookings, and support.</p>
            <a href="/services#ai" className="lp-service-link" target="_blank" rel="noreferrer">Learn more →</a>
          </div>
          <div className="lp-service-card" id="ecommerce">
            <div className="lp-service-icon">🛒</div>
            <h3 className="lp-service-headline">Online Stores</h3>
            <p className="lp-service-text">Shopify & custom builds. Peach, Yoco & PayFast ready.</p>
            <a href="/services#ecommerce" className="lp-service-link" target="_blank" rel="noreferrer">Learn more →</a>
          </div>
        </div>
      </section>

      {/* Section 6 - How it works */}
      <section className="lp-section" id="how-it-works" style={{ background: 'var(--bg2)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>How it works.</h2>
        <div className="lp-steps">
          <div className="lp-step">
            <div className="lp-step-number">1</div>
            <div className="lp-step-content">
              <h4>Fill in the form below</h4>
              <p>Takes 2 minutes. Tell us what you need.</p>
            </div>
          </div>
          <div className="lp-step">
            <div className="lp-step-number">2</div>
            <div className="lp-step-content">
              <h4>Free discovery call</h4>
              <p>We call within 24 hours. 30 minutes, no obligation.</p>
            </div>
          </div>
          <div className="lp-step">
            <div className="lp-step-number">3</div>
            <div className="lp-step-content">
              <h4>Receive your fixed quote</h4>
              <p>Detailed scope and price. You decide if you want to proceed.</p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '24px' }}>
            Most clients go from first contact to live site in under 4 weeks.
          </p>
          <a href="#contact-form" className="btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
            Start now — it takes 2 minutes →
          </a>
        </div>
      </section>

      {/* Section 7 - Testimonials */}
      <section className="lp-section" id="testimonials">
        <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>Don't just take our word for it.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="why-card">
            <div className="lp-testimonial-metric">+340% leads</div>
            <p style={{ color: 'var(--dimmer)', fontStyle: 'italic', marginBottom: '16px' }}>
              "Professional, creative, and delivered exactly when we needed..."
            </p>
            <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>— Emma Diek, HealthStream Platform</p>
          </div>
          <div className="why-card">
            <div className="lp-testimonial-metric">R2M revenue month 1</div>
            <p style={{ color: 'var(--dimmer)', fontStyle: 'italic', marginBottom: '16px' }}>
              "Our Shopify store went live in 2 weeks..."
            </p>
            <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>— Nadia Kriel, Indigo Fashion</p>
          </div>
          <div className="why-card">
            <div className="lp-testimonial-metric">80% bookings automated</div>
            <p style={{ color: 'var(--dimmer)', fontStyle: 'italic', marginBottom: '16px' }}>
              "The WhatsApp bot handles 80% of our bookings without human input..."
            </p>
            <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>— James Moloi, Moloi Dining Group</p>
          </div>
        </div>
      </section>

      {/* Section 8 - The conversion form */}
      <section className="lp-section" id="contact-form" style={{ paddingBottom: '40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>
            Get your free quote.<br />
            <span className="accent">We respond within 24 hours.</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--dimmer)', marginBottom: '40px' }}>
            No obligation. No sales pressure. Just a straight answer<br />
            about what your project will cost and how long it will take.
          </p>

          {formStatus === 'success' ? (
            <div style={{
              maxWidth: '600px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '24px',
              padding: '40px 20px',
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'rgba(74,222,128,0.12)',
                border: '2px solid rgba(74,222,128,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                animation: 'fadeUp 0.5s ease both',
              }}>
                ✓
              </div>
              <div style={{ animation: 'fadeUp 0.5s 0.1s ease both', opacity: 0, animationFillMode: 'forwards' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>
                  You're all set! 🎉
                </h2>
                <p style={{ fontSize: '1.0625rem', color: 'var(--dimmer)', lineHeight: 1.65, marginBottom: '32px', maxWidth: '480px' }}>
                  We've received your request and will be in touch within <strong style={{ color: 'var(--text)' }}>24 hours</strong> with a tailored quote. Check your inbox for a confirmation email.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                  <a
                    href="https://wa.me/27816172049?text=Hi%20Skybolt%20Labs%2C%20I%20just%20submitted%20a%20quote%20request"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: 'rgba(37,211,102,0.12)',
                      border: '1px solid rgba(37,211,102,0.35)',
                      color: '#25d366',
                      borderRadius: '10px',
                      padding: '12px 24px',
                      fontSize: '15px',
                      fontWeight: 500,
                      textDecoration: 'none',
                    }}
                  >
                    💬 &nbsp;Chat with us on WhatsApp
                  </a>
                  <span style={{ fontSize: '13px', color: 'var(--dimmer)' }}>or sit tight — we'll reach out soon</span>
                </div>
              </div>
            </div>
          ) : (
          <form
            id="lpForm"
            name="get-started"
            onSubmit={onSubmit}
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="get-started" />
            <input type="hidden" name="bot-field" style={{ display: 'none' }} />
            {/* Row 1 */}
            <div className="form-row">
              <div className="form-group">
                <label>First name *</label>
                <input type="text" name="firstName" value={formData.firstName || ''} onChange={handleInputChange} placeholder="John" required />
              </div>
              <div className="form-group">
                <label>Last name *</label>
                <input type="text" name="lastName" value={formData.lastName || ''} onChange={handleInputChange} placeholder="Doe" required />
              </div>
            </div>

            {/* Row 2 */}
            <div className="form-row">
              <div className="form-group">
                <label>Email address *</label>
                <input type="email" name="email" value={formData.email || ''} onChange={handleInputChange} placeholder="john@company.co.za" required />
              </div>
              <div className="form-group">
                <label>WhatsApp number</label>
                <input type="tel" name="whatsapp" value={formData.whatsapp || ''} onChange={handleInputChange} placeholder="+27 81 234 5678" />
              </div>
            </div>

            {/* Row 3 */}
            <div className="form-row">
              <div className="form-group">
                <label>What do you need? *</label>
                <select name="service" value={formData.service || ''} onChange={handleInputChange} required>
                  <option value="" disabled>Select a service</option>
                  <option value="website">Custom Website</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="ecommerce">E-Commerce Store</option>
                  <option value="ai-chatbot">AI Chatbot / WhatsApp Bot</option>
                  <option value="automation">Workflow Automation</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="seo">SEO & Performance</option>
                  <option value="not-sure">Not sure — need advice</option>
                </select>
              </div>
              <div className="form-group">
                <label>Budget range *</label>
                <select name="budget" value={formData.budget || ''} onChange={handleInputChange} required>
                  <option value="" disabled>Select budget</option>
                  <option value="under-2500">Under R2,500</option>
                  <option value="2500-5000">R2,500 – R5,000</option>
                  <option value="5000-10000">R5,000 – R10,000</option>
                  <option value="10000-20000">R10,000 – R20,000</option>
                  <option value="20000-plus">R20,000+</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
            </div>

            {/* Full width */}
            <div className="form-group">
              <label>Tell us about your project *</label>
              <textarea name="description" rows={4} value={formData.description || ''} onChange={handleInputChange}
                placeholder="What are you trying to achieve? The more detail the better." required></textarea>
            </div>

            {/* Hidden UTM fields */}
            <input type="hidden" name="utm_source" id="utm_source" />
            <input type="hidden" name="utm_medium" id="utm_medium" />
            <input type="hidden" name="utm_campaign" id="utm_campaign" />
            <input type="hidden" name="utm_term" id="utm_term" />

            <button type="submit" className="btn-submit btn-primary" id="lpSubmitBtn" disabled={formStatus === 'submitting'}>
              {formStatus === 'submitting' ? (
                <>
                  <span className="btn-icon">⏳</span>
                  <span className="btn-text" style={{ marginLeft: '8px' }}>Sending...</span>
                </>
              ) : formStatus === 'success' ? (
                <>
                  <span className="btn-icon">✓</span>
                  <span className="btn-text" style={{ marginLeft: '8px' }}>Message sent!</span>
                </>
              ) : formStatus === 'error' ? (
                <>
                  <span className="btn-icon">✕</span>
                  <span className="btn-text" style={{ marginLeft: '8px' }}>Error — try again</span>
                </>
              ) : (
                <>
                  <span className="btn-icon">➤</span>
                  <span className="btn-text" style={{ marginLeft: '8px' }}>Get my free quote →</span>
                </>
              )}
            </button>

            <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--muted)', marginTop: '16px' }}>
              We respond within 24 hours. No automated replies. No spam. Unsubscribe anytime.
            </p>
          </form>
          )}
        </div>
      </section>

      {/* Section 9 - FAQ */}
      <section className="lp-section" id="faq">
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <div key={index} className={`why-card faq-item ${activeFaq === index ? 'open' : ''}`} style={{ padding: '0', cursor: 'pointer', overflow: 'hidden', marginBottom: '16px' }} onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
              <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1rem', margin: 0, fontWeight: 500 }}>{faq.q}</h3>
                <div className="faq-icon" style={{ fontSize: '24px', color: 'var(--green)', transition: 'transform 0.3s', transform: activeFaq === index ? 'rotate(45deg)' : 'rotate(0)' }}>+</div>
              </div>
              {activeFaq === index && (
                <div style={{ padding: '0 24px 24px', color: 'var(--dimmer)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section 10 - Minimal footer */}
      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <a href="/" className="nav-logo" style={{ fontWeight: 600, color: 'var(--text)' }}>
            <img src="/skyboltlabs-logo.svg" alt="Skybolt Labs" style={{ height: '28px', width: 'auto', display: 'block' }} />
          </a>
          <span className="lp-footer-contact">
            <a href="mailto:info@skyboltlabs.co.za">info@skyboltlabs.co.za</a>
            &nbsp;·&nbsp;
            <a href="tel:+27845921309">+27 84 592 1309</a>
            &nbsp;·&nbsp;
            Cape Town, South Africa
          </span>
          <span>© 2026 <span style={{ background: 'linear-gradient(to right, #3b82f6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 600 }}>Skybolt Labs</span>. </span>
        </div>
      </footer>

      <a href="https://wa.me/27816172049?text=Hi%20Skybolt%20Labs%2C%20I%27d%20like%20to%20get%20a%20quote"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp">
        <WhatsAppIcon size={28} style={{ color: '#ffffff' }} />
      </a>
    </>
  );
};

export default GetStarted;
