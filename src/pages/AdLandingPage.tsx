import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  ArrowRight, 
  Check, 
  Star, 
  Shield, 
  Clock, 
  Users, 
  Award,
  Globe,
  Heart,
  CheckCircle,
  MapPin,
  Mail
} from 'lucide-react';
import WhatsAppIcon from '../components/UI/WhatsAppIcon';
import SEOHead from '../components/UI/SEOHead';
import TestimonialCarousel from '../components/UI/TestimonialCarousel';
import AnimatedCounter from '../components/UI/AnimatedCounter';
import { Testimonial } from '../types';

const adLandingSchema = {
  "@context": "https://schema.org",
  "@type": "LandingPage",
  "name": "Affordable Website Packages - Skybolt Labs",
  "description": "Professional website packages starting from R1,200. Get your business online with our Starter, Professional, or Enterprise plans. Free hosting, SSL, and support included.",
  "provider": {
    "@type": "Organization",
    "name": "Skybolt Labs",
    "url": "https://skyboltlabs.co.za",
    "telephone": "+27-81-617-2049",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cape Town",
      "addressRegion": "Western Cape",
      "addressCountry": "ZA"
    }
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Starter Website Package",
      "price": "1200",
      "priceCurrency": "ZAR",
      "description": "Perfect for small businesses getting started online"
    },
    {
      "@type": "Offer",
      "name": "Professional Website Package", 
      "price": "4500",
      "priceCurrency": "ZAR",
      "description": "Ideal for growing businesses with advanced needs"
    },
    {
      "@type": "Offer",
      "name": "Enterprise Website Package",
      "price": "7500", 
      "priceCurrency": "ZAR",
      "description": "For large organizations requiring custom solutions"
    }
  ]
};

const AdLandingPage = () => {

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

  const pricingTiers = [
    {
      name: 'Starter',
      price: 'R1,200',
      originalPrice: 'R2,500',
      savings: 'Save R1,300',
      description: 'Perfect for small businesses getting started online',
      deliveryTime: '3-5 days',
      features: [
        'Custom Professional Design',
        'Mobile-Responsive Layout',
        'Basic SEO Optimization',
        '1 Business Email Account',
        'Google Business Profile Setup',
        'Free Domain Name (1 Year)',
        'Free SSL Certificate + Hosting',
        '1 Week Post-Launch Support',
        'Contact Form Integration'
      ],
      popular: false,
      ctaText: 'Get Started Now',
      badge: 'Most Affordable'
    },
    {
      name: 'Professional',
      price: 'R4,500',
      originalPrice: 'R8,000',
      savings: 'Save R3,500',
      description: 'Ideal for growing businesses with advanced needs',
      deliveryTime: '7-10 days',
      features: [
        'Everything in Starter Plan',
        'Advanced Custom Development',
        'Content Management System',
        '3 Business Email Accounts',
        'Advanced SEO & Analytics',
        'E-commerce Ready Platform',
        'Premium Hosting & Security',
        'Social Media Integration',
        '3 Months Premium Support',
        'Performance Optimization'
      ],
      popular: true,
      ctaText: 'Choose Professional',
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: 'R7,500',
      originalPrice: 'R15,000',
      savings: 'Save R7,500',
      description: 'For businesses requiring custom solutions',
      deliveryTime: '14-21 days',
      features: [
        'Everything in Professional Plan',
        'Custom Web Application',
        'Advanced API Development',
        'AI Integration Features',
        'Enterprise-Grade Security',
        'Performance Optimization',
        'Dedicated Account Manager',
        'Cloud Infrastructure Setup',
        '10 Business Email Accounts',
        '6 Months Premium Support',
        'Priority Development Queue'
      ],
      popular: false,
      ctaText: 'Go Enterprise',
      badge: 'Best Value'
    }
  ];

  const benefits = [
    { icon: Clock, title: 'Fast Delivery', description: 'Get your website live in 3-21 days depending on your package' },
    { icon: Shield, title: 'Secure & Reliable', description: 'Free SSL certificates and enterprise-grade security included' },
    { icon: Users, title: '150+ Happy Clients', description: 'Join our growing family of successful businesses' },
    { icon: Award, title: '8+ Years Experience', description: 'Proven track record in web development and design' },
    { icon: Globe, title: 'Mobile-First Design', description: 'Your website will look perfect on all devices' },
    { icon: Heart, title: 'Ongoing Support', description: 'We provide continued support even after launch' }
  ];

  const stats = [
    { number: 150, suffix: '+', label: 'Happy Clients', icon: Users },
    { number: 300, suffix: '+', label: 'Websites Built', icon: Globe },
    { number: 8, suffix: '+', label: 'Years Experience', icon: Clock },
    { number: 5, suffix: '.0', label: 'Star Rating', icon: Star }
  ];

  const testimonials: Testimonial[] = [
    { id: '1', name: 'Sarah Johnson', company: 'TechCorp Solutions', role: 'CEO & Founder', content: 'Skybolt Labs delivered exactly what we needed within budget and on time. Our new website has increased our leads by 300%!', rating: 5, image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150', projectType: 'Professional Package', location: 'Cape Town, SA' },
    { id: '2', name: 'Michael Chen', company: 'Fashion Forward', role: 'Marketing Director', content: 'The Starter package was perfect for our small business. Professional design at an unbeatable price!', rating: 5, image: 'https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=150', projectType: 'Starter Package', location: 'Johannesburg, SA' },
    { id: '3', name: 'Emma Davis', company: 'HealthTech Innovations', role: 'Product Manager', content: 'The Enterprise package gave us everything we needed for our complex requirements. Exceptional value for money!', rating: 5, image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=150', projectType: 'Enterprise Package', location: 'Durban, SA' }
  ];

  const whatsappMessage = encodeURIComponent("Hi! I'm interested in your website packages. Can we discuss my project?");
  const whatsappUrl = `https://wa.me/27816172049?text=${whatsappMessage}`;

  return (
    <>
      <SEOHead 
        title="Affordable Website Packages - Skybolt Labs 🚀 | From R1,200"
        description="Professional website packages starting from R1,200. Get your business online with our Starter, Professional, or Enterprise plans. Free hosting, SSL, and support included in Cape Town."
        keywords="affordable website packages Cape Town, cheap website design South Africa, website packages R1200, professional website development, small business websites Cape Town"
        url="https://skyboltlabs.co.za/ad-landing"
        schema={adLandingSchema}
      />
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>🔥 Limited Time Offer - Up to 50% Off!</div>
          <h1 className="page-hero-title">
            Affordable Websites by <br />
            <span className="accent">Skybolt Labs 🚀</span>
          </h1>
          <p className="page-hero-sub">
            Get your business online with professional websites starting from just <span style={{ color: 'var(--accent)', fontWeight: 700 }}>R1,200</span>. Free hosting, SSL, and support included!
          </p>
          <div className="cta-buttons" style={{ marginTop: '32px' }}>
            <a href="tel:+27816172049" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={18} /> Call Now: +27 81 617 2049
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <WhatsAppIcon size={18} /> WhatsApp Us
            </a>
          </div>

          {/* Trust Indicators */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', marginTop: '48px', color: 'var(--muted)', fontSize: '13px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Star size={16} color="#fbbf24" fill="#fbbf24" /> 5.0 Google Rating</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Shield size={16} color="var(--green)" /> SSL Secured</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Users size={16} color="var(--accent)" /> 150+ Happy Clients</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} color="var(--blue)" /> Cape Town Based</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '60px 0', background: 'var(--bg2)' }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
            {stats.map((stat, index) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', padding: '16px', borderRadius: '16px', background: 'var(--bg)', border: '1px solid var(--border)', marginBottom: '16px' }}>
                  <stat.icon size={24} color="var(--accent)" />
                </div>
                <div style={{ fontSize: '36px', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: '8px' }}>
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div style={{ fontSize: '14px', color: 'var(--muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="section-tag" style={{ justifyContent: 'center' }}>Pricing</div>
          <h2 style={{ textAlign: 'center' }}>Choose Your Perfect <span className="accent">Package.</span></h2>
          <p className="section-lead" style={{ textAlign: 'center', margin: '0 auto 40px' }}>Professional websites at unbeatable prices. All packages include free hosting, SSL, and support.</p>

          <div className="pricing-grid reveal">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className={`pricing-card ${tier.popular ? 'popular' : ''}`}>
                {tier.popular && <div className="popular-badge">{tier.badge}</div>}
                
                <h3 className="plan-name">{tier.name}</h3>
                <p className="plan-desc">{tier.description}</p>
                
                <div className="plan-price-wrap">
                  <span className="original-price">{tier.originalPrice}</span>
                  <div className="plan-price">{tier.price}</div>
                  <div style={{ color: 'var(--green)', fontSize: '14px', fontWeight: 600, marginTop: '8px' }}>{tier.savings}</div>
                  <div style={{ color: 'var(--accent)', fontSize: '13px', fontWeight: 500, marginTop: '4px' }}>⚡ Delivered in {tier.deliveryTime}</div>
                </div>

                <ul className="plan-features">
                  {tier.features.map((feature, idx) => (
                    <li key={idx}><CheckCircle size={16} color="var(--green)" /> {feature}</li>
                  ))}
                </ul>

                <Link 
                  to={{ pathname: '/contact', search: `?plan=${tier.name.toLowerCase()}` }}
                  state={{ selectedPlan: tier.name }}
                  className={tier.popular ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {tier.ctaText}
                </Link>

                <div style={{ marginTop: '16px', textAlign: 'center', fontSize: '13px', color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span>Or contact us directly:</span>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                    <a href="tel:+27816172049" style={{ color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}><Phone size={14} /> Call</a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}><WhatsAppIcon size={14} /> WhatsApp</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="section-tag" style={{ justifyContent: 'center' }}>Benefits</div>
          <h2 style={{ textAlign: 'center' }}>Why Choose <span className="bolt">Skybolt Labs?</span></h2>
          <p className="section-lead" style={{ textAlign: 'center', margin: '0 auto 40px' }}>We deliver professional websites that help your business grow online.</p>

          <div className="services-grid reveal">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="svc-card">
                <div className="svc-icon-wrap" style={{ width: '48px', height: '48px' }}>
                  <benefit.icon size={20} className="text-white" />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="section-tag" style={{ justifyContent: 'center' }}>Testimonials</div>
          <h2 style={{ textAlign: 'center' }}>What Our Clients <span className="accent">Say.</span></h2>
          <p className="section-lead" style={{ textAlign: 'center', margin: '0 auto 40px' }}>Don't just take our word for it. Here's what our satisfied clients have to say.</p>
          
          <div className="reveal">
            <TestimonialCarousel testimonials={testimonials} autoplay={true} autoplayInterval={6000} />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>⏰ Limited Time Offer</div>
          <h2>Ready to Get <span className="bolt">Online?</span></h2>
          <p>Don't wait! Get your professional website today and start attracting more customers.</p>
          
          <div className="cta-buttons" style={{ marginBottom: '32px' }}>
            <a href="tel:+27816172049" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={18} /> Call Now
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <WhatsAppIcon size={18} /> WhatsApp Us
            </a>
          </div>

          <div>
            <Link to="/contact" className="btn-ghost">Or Fill Out Our Contact Form &rarr;</Link>
          </div>

          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', color: 'var(--muted)', fontSize: '13px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={16} /> skyboltlabs@outlook.com</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} /> Cape Town, South Africa</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={16} /> Mon-Fri: 9AM-6PM SAST</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdLandingPage;