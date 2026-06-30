import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Mail,
  Phone,
  Clock,
  ArrowRight
} from 'lucide-react';
import WhatsAppIcon from '../components/UI/WhatsAppIcon';
import SEOHead from '../components/UI/SEOHead';
import { useToast } from '../contexts/ToastContext';
import { useContactForm } from '../hooks/useContactForm';

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "LocalBusiness",
    "@id": "https://skyboltlabs.co.za",
    "name": "Skybolt Labs",
    "telephone": "+27-81-617-2049",
    "email": "skyboltlabs@outlook.com"
  }
};

const Contact = () => {
  const location = useLocation();

  const {
    formData,
    formStatus,
    formErrors,
    handleInputChange,
    setFormData,
    submitForm,
  } = useContactForm();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

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
    return () => reveals.forEach(el => obs.unobserve(el));
  }, []);

  // Pre-fill form data from URL params or state
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const stateData = location.state as any;

    if (stateData?.selectedPlan) {
      setFormData(prev => ({
        ...prev,
        projectType: 'web-development',
        budget: stateData.selectedPlan === 'Starter' ? '2500-5000' :
          stateData.selectedPlan === 'Professional' ? '5000-10000' :
            stateData.selectedPlan === 'Enterprise' ? '20000-plus' : 'not-sure',
        message: `I'm interested in the ${stateData.selectedPlan} plan. Please provide more details about what's included and next steps.`
      }));
    }

    const plan = urlParams.get('plan');
    if (plan) {
      setFormData(prev => ({
        ...prev,
        projectType: 'web-development',
        budget: plan === 'starter' ? 'under-2500' :
          plan === 'professional' ? '2500-5000' :
            plan === 'enterprise' ? '5000-10000' : 'not-sure',
        message: `I'm interested in the ${plan.charAt(0).toUpperCase() + plan.slice(1)} plan. Please provide more details.`
      }));
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(e, ['firstName', 'lastName', 'email', 'projectType', 'budget', 'message'], 'contact');
  };

  const faqs = [
    { question: 'How quickly will you respond to my enquiry?', answer: <>We respond to every message within 24 hours, Monday to Friday. If you send a WhatsApp message directly to <a href="https://wa.me/27816172049">+27 81 617 2049</a> you'll usually hear back within a few hours. We don't use automated replies -- a real person reads every enquiry.</> },
    { question: 'Do I need a big budget to work with you?', answer: 'No. Our web projects start from R2,500 and AI automation projects from R3,500. We work with solo founders, small businesses, and large organisations. If you\'re not sure what your budget should be, select "Not sure yet" in the form and we\'ll recommend what makes sense for your goals.' },
    { question: 'What happens after I submit the form?', answer: <>You'll receive a confirmation email immediately. Within 24 hours a member of our team will reach out to schedule a <a href="#contact">free 30-minute discovery call</a>. On that call we listen, ask the right questions, and scope your project. You'll receive a fixed-price quote within 24 hours of the call -- no obligation to proceed.</> },
    { question: 'Do you require full payment upfront?', answer: 'No. We work on a 50/50 split -- 50% to begin, 50% on delivery before the site goes live. For larger projects we can discuss a three-stage milestone structure. We never ask for full payment before work begins.' },
    { question: 'Will I be locked into a contract?', answer: 'For once-off projects, no ongoing contract. You pay for the project and it\'s yours. For retainer plans there is a minimum one-month commitment, cancellable with 30 days notice. We\'d rather earn your continued business than lock you in.' },
    { question: 'Can you work with clients outside Cape Town?', answer: 'Absolutely. We\'re based in Cape Town but roughly a third of our clients are based elsewhere in South Africa or internationally. Everything is handled remotely via video calls, shared staging links, and Figma. You never need to be in the same room as us.' },
    { question: 'What if I\'m not sure exactly what I need?', answer: 'That\'s completely normal and it\'s exactly what the discovery call is for. Select "Not sure -- need advice" in the Project Type field and describe what you\'re trying to achieve in the project description box. We\'ll figure out the right solution together.' },
    { question: 'Do you sign NDAs?', answer: 'Yes, on request. If your project involves sensitive business information or unreleased products we\'re happy to sign a mutual NDA before the discovery call. Just mention it in your message.' }
  ];

  return (
    <>
      <SEOHead
        title="Contact Skybolt Labs | Web Development Cape Town | Get Free Quote"
        description="Contact our Cape Town web development team for a free consultation. Call +27 81 617 2049 or email us."
        keywords="contact skybolt labs, web development consultation Cape Town, free quote web development"
        url="https://skyboltlabs.co.za/contact"
        schema={contactSchema}
      />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Contact Us</div>
          <h1 className="page-hero-title">
            Let's build something <br />
            <span className="accent">amazing together.</span>
          </h1>
          <p className="page-hero-sub">
            Ready to transform your digital presence? Get in touch with our team of experts and let's discuss your vision.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 reveal">

            {/* Form / Success panel */}
            <div className="why-card">
              {formStatus === 'success' ? (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '48px 24px',
                  gap: '20px',
                }}>
                  <div style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: 'rgba(74,222,128,0.12)',
                    border: '1px solid rgba(74,222,128,0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    animation: 'fadeUp 0.5s ease both',
                  }}>
                    ✓
                  </div>
                  <div style={{ animation: 'fadeUp 0.5s 0.1s ease both', opacity: 0, animationFillMode: 'forwards' }}>
                    <h3 style={{ fontSize: '22px', marginBottom: '10px', color: 'var(--text)' }}>
                      Message received!
                    </h3>
                    <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6, maxWidth: '380px', margin: '0 auto 20px' }}>
                      Thanks for reaching out. A member of our team will respond within <strong style={{ color: 'var(--text)' }}>24 hours</strong>. We'll send a confirmation to your email address.
                    </p>
                    <a
                      href="https://wa.me/27816172049"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(37,211,102,0.12)',
                        border: '1px solid rgba(37,211,102,0.3)',
                        color: '#25d366',
                        borderRadius: '8px',
                        padding: '10px 20px',
                        fontSize: '14px',
                        fontWeight: 500,
                        textDecoration: 'none',
                        transition: 'background 0.2s',
                      }}
                    >
                      💬 &nbsp;Need a faster response? WhatsApp us
                    </a>
                  </div>
                </div>
              ) : (
              <form
                name="contact"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">First Name *</label>
                    <input type="text" name="firstName" required value={formData.firstName} onChange={handleInputChange} className={`form-input ${formErrors.firstName ? 'error' : ''}`} placeholder="John" />
                    {formErrors.firstName && <span className="field-error" aria-live="polite">{formErrors.firstName}</span>}
                  </div>
                  <div>
                    <label className="form-label">Last Name *</label>
                    <input type="text" name="lastName" required value={formData.lastName} onChange={handleInputChange} className={`form-input ${formErrors.lastName ? 'error' : ''}`} placeholder="Doe" />
                    {formErrors.lastName && <span className="field-error" aria-live="polite">{formErrors.lastName}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className={`form-input ${formErrors.email ? 'error' : ''}`} placeholder="john@example.com" />
                    {formErrors.email && <span className="field-error" aria-live="polite">{formErrors.email}</span>}
                  </div>
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="form-input" placeholder="+27 81 617 2049" />
                  </div>
                </div>

                <div>
                  <label className="form-label">Company Name</label>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="form-input" placeholder="Your Company" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="form-label">Project Type *</label>
                    <select name="projectType" required value={formData.projectType} onChange={handleInputChange} className={`form-input ${formErrors.projectType ? 'error' : ''}`}>
                      <option value="" disabled>Select service</option>
                      <option value="web-development">Web Development</option>
                      <option value="landing-page">Landing Page</option>
                      <option value="ecommerce">E-Commerce Store</option>
                      <option value="ai-automation">AI Automation / Chatbot</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="seo-performance">SEO &amp; Performance</option>
                      <option value="workflow-automation">Workflow Automation</option>
                      <option value="retainer">Retainer / Ongoing Support</option>
                      <option value="not-sure">Not sure — need advice</option>
                    </select>
                    {formErrors.projectType && <span className="field-error" aria-live="polite">{formErrors.projectType}</span>}
                  </div>
                  <div>
                    <label className="form-label">Budget Range *</label>
                    <select name="budget" required value={formData.budget} onChange={handleInputChange} className={`form-input ${formErrors.budget ? 'error' : ''}`}>
                      <option value="" disabled>Select budget</option>
                      <option value="under-2500">Under R2,500</option>
                      <option value="2500-5000">R2,500 – R5,000</option>
                      <option value="5000-10000">R5,000 – R10,000</option>
                      <option value="10000-20000">R10,000 – R20,000</option>
                      <option value="20000-plus">R20,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                    {formErrors.budget && <span className="field-error" aria-live="polite">{formErrors.budget}</span>}
                  </div>
                  <div>
                    <label className="form-label">Timeline</label>
                    <select name="timeline" value={formData.timeline} onChange={handleInputChange} className="form-input">
                      <option value="" disabled>Select timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-2-months">1 – 2 months</option>
                      <option value="2-4-months">2 – 4 months</option>
                      <option value="4-plus-months">4+ months</option>
                      <option value="exploring">Just exploring for now</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label">Project Description *</label>
                  <textarea name="message" required rows={6} value={formData.message} onChange={handleInputChange} className={`form-input ${formErrors.message ? 'error' : ''}`} placeholder="Tell us about your project goals, requirements..." />
                  {formErrors.message && <span className="field-error" aria-live="polite">{formErrors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: '16px',
                    opacity: formStatus === 'submitting' ? 0.75 : 1,
                    background: formStatus === 'success' ? 'var(--green, #4ade80)' : formStatus === 'error' ? '#ef4444' : '',
                    pointerEvents: formStatus === 'success' || formStatus === 'error' ? 'none' : 'auto'
                  }}
                >
                  {formStatus === 'submitting' && <><span className="btn-icon">⏳</span><span className="btn-text" style={{ marginLeft: '8px' }}>Sending...</span></>}
                  {formStatus === 'success' && <><span className="btn-icon">✓</span><span className="btn-text" style={{ marginLeft: '8px' }}>Message sent! We'll be in touch within 24 hours</span></>}
                  {formStatus === 'error' && <><span className="btn-icon">✕</span><span className="btn-text" style={{ marginLeft: '8px' }}>Something went wrong — please try again</span></>}
                  {formStatus === 'idle' && <><span className="btn-icon">➤</span><span className="btn-text" style={{ marginLeft: '8px' }}>Send Message</span></>}
                </button>
                <p className="form-reassurance">
                  We respond to every enquiry within 24 hours. No automated replies, no sales scripts.
                </p>
              </form>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="services-grid" style={{ gridTemplateColumns: '1fr 1fr', marginBottom: '32px' }}>
                <div className="svc-card" style={{ padding: '24px' }}>
                  <div className="svc-icon-wrap" style={{ width: '40px', height: '40px', fontSize: '18px', marginBottom: '12px' }}>
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <h3 style={{ fontSize: '16px' }}>Email Us</h3>
                  <a href="mailto:skyboltlabs@outlook.com" style={{ fontSize: '13px', color: 'var(--text)', textDecoration: 'none' }}>info@skyboltlabs.co.za</a>
                  <p style={{ fontSize: '12px', color: 'var(--dimmer)' }}>We respond within 24 hours</p>
                </div>

                <div className="svc-card" style={{ padding: '24px' }}>
                  <div className="svc-icon-wrap" style={{ width: '40px', height: '40px', fontSize: '18px', marginBottom: '12px' }}>
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <h3 style={{ fontSize: '16px' }}>Call Us</h3>
                  <a href="tel:+27845921309" style={{ fontSize: '13px', color: 'var(--text)', textDecoration: 'none' }}>+27 84 592 1309</a>
                  <p style={{ fontSize: '12px', color: 'var(--dimmer)' }}>Mon-Fri 9AM-6PM SAST</p>
                </div>

                <a href="https://wa.me/27816172049" target="_blank" rel="noopener noreferrer" className="svc-card contact-card-link" style={{ padding: '24px', textDecoration: 'none', display: 'block', color: 'inherit' }}>
                  <div className="svc-icon-wrap" style={{ width: '40px', height: '40px', fontSize: '18px', marginBottom: '12px' }}>
                    <WhatsAppIcon size={20} className="text-white" />
                  </div>
                  <h3 style={{ fontSize: '16px' }}>WhatsApp Us</h3>
                  <div style={{ fontSize: '13px', color: 'var(--text)' }}>+27 81 617 2049</div>
                  <p style={{ fontSize: '12px', color: 'var(--dimmer)' }}>Tap to open a chat directly</p>
                </a>

                <div className="svc-card" style={{ padding: '24px' }}>
                  <div className="svc-icon-wrap" style={{ width: '40px', height: '40px', fontSize: '18px', marginBottom: '12px' }}>
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <h3 style={{ fontSize: '16px' }}>Business Hours</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text)' }}>Mon-Fri: 9AM-6PM SAST</p>
                  <p style={{ fontSize: '12px', color: 'var(--dimmer)' }}>Weekend support available</p>
                  <a href="#contact" className="book-call-link">
                    Book a free discovery call &rarr;
                    {/* TODO: replace with Calendly link */}
                  </a>
                </div>
              </div>

              <div className="why-card" style={{ background: 'var(--bg2)' }}>
                <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Why Choose Skybolt Labs?</h3>
                <ul className="svc-features">
                  <li><span style={{ color: 'var(--green)' }}>Fixed pricing</span> You get a quote before we start. No surprises, ever.</li>
                  <li><span style={{ color: 'var(--green)' }}>Fast delivery</span> Designs in 3 days. Most sites live within 7 days.</li>
                  <li><span style={{ color: 'var(--green)' }}>Cape Town based</span> We're local, available, and easy to reach.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ background: 'var(--bg2)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>FAQ</div>
          <h2 style={{ textAlign: 'center' }}>Frequently Asked <span className="accent">Questions.</span></h2>
          <p className="section-lead" style={{ textAlign: 'center', margin: '0 auto 40px' }}>Get answers to common questions about our services and process.</p>

          <div className="space-y-4 reveal">
            {faqs.map((faq, index) => (
              <div key={index} className={`why-card faq-item ${activeAccordion === index ? 'open' : ''}`} style={{ padding: '0', cursor: 'pointer', overflow: 'hidden' }} onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}>
                <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '16px', margin: 0 }}>{faq.question}</h3>
                  <div className="faq-icon">+</div>
                </div>
                {activeAccordion === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="faq-footer-note">
            Still have questions?
            <a href="https://wa.me/27816172049" target="_blank" rel="noopener noreferrer"> Message us on WhatsApp</a>
            {" "}and we'll answer straight away.
          </p>
        </div>
      </section>

    </>
  );
};

export default Contact;
