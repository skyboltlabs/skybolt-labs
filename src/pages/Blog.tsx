import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';
import SEOHead from '../components/UI/SEOHead';
import { useToast } from '../contexts/ToastContext';

const blogSchema = {
  // Keep original schema
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Skybolt Labs Blog",
  "description": "Insights, tips, and trends from the world of web development, AI integration, and digital marketing."
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { showSuccess, showError } = useToast();

  useEffect(() => {
    // Scroll reveal
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

  const blogPosts = [
    {
      id: '1',
      title: 'The Future of Web Development: AI-Powered Websites',
      excerpt: 'Discover how artificial intelligence is revolutionizing web development and what it means for businesses.',
      author: 'Alex Johnson',
      date: '2024-01-15',
      readTime: 5,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI', 'Web Development', 'Technology'],
      featured: true
    },
    {
      id: '2',
      title: 'Essential UI/UX Design Principles for Modern Websites',
      excerpt: 'Learn the fundamental design principles that create exceptional user experiences.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: 7,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['UI/UX', 'Design', 'User Experience'],
      featured: false
    },
    {
      id: '3',
      title: 'E-commerce Trends That Will Dominate 2024',
      excerpt: 'Stay ahead of the competition with these emerging e-commerce trends and strategies.',
      author: 'Sarah Chen',
      date: '2024-01-05',
      readTime: 6,
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['E-commerce', 'Business', 'Trends'],
      featured: true
    },
    {
      id: '4',
      title: 'Building High-Performance React Applications',
      excerpt: 'Tips and best practices for creating fast, scalable React applications.',
      author: 'Sarah Chen',
      date: '2024-01-02',
      readTime: 8,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Performance', 'Development'],
      featured: false
    },
    {
      id: '5',
      title: 'The Rise of Headless CMS: Why Your Business Needs It',
      excerpt: 'Explore the benefits of headless CMS and how it can transform your content strategy.',
      author: 'Emma Wilson',
      date: '2023-12-28',
      readTime: 4,
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['CMS', 'Content Strategy', 'Technology'],
      featured: false
    },
    {
      id: '6',
      title: 'SEO Best Practices for Modern Websites',
      excerpt: 'Master the art of SEO with these proven strategies and techniques.',
      author: 'Alex Johnson',
      date: '2023-12-25',
      readTime: 6,
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['SEO', 'Marketing', 'Digital Strategy'],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribing(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-newsletter-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ email: newsletterEmail })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to subscribe');
      }
      showSuccess('Successfully Subscribed!', 'Thank you for subscribing to our newsletter.');
      setNewsletterEmail('');
    } catch (error: any) {
      showError('Subscription Failed', `There was an issue: ${error.message}.`);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <>
      <SEOHead 
        title="Web Development Blog Cape Town | Skybolt Labs Insights"
        description="Expert insights on web development, AI integration, and digital marketing from Cape Town's leading web development agency. Stay updated with the latest trends and tips."
        keywords="web development blog Cape Town, AI integration insights, digital marketing tips South Africa, React development blog, e-commerce trends, Cape Town tech blog"
        url="https://skyboltlabs.co.za/blog"
        schema={blogSchema}
      />
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Skybolt Labs Blog</div>
          <h1 className="page-hero-title">
            Insights from the <br />
            <span className="accent">cutting edge.</span>
          </h1>
          <p className="page-hero-sub">
            Thoughts, tips, and trends from the world of web development, design, and AI automation.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section style={{ padding: '40px 0', background: 'var(--bg2)' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div style={{ position: 'relative' }}>
            <Search style={{ position: 'absolute', top: '16px', left: '16px', color: 'var(--muted)' }} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '48px', margin: 0 }}
            />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section style={{ background: 'var(--bg)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Featured <span className="bolt">Articles.</span></h2>

            <div className="portfolio-grid reveal" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
              {featuredPosts.map((post) => (
                <div key={post.id} className="why-card" style={{ padding: 0, overflow: 'hidden' }}>
                  <div style={{ position: 'relative', height: '250px' }}>
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'var(--accent)', color: '#fff', padding: '4px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>Featured</div>
                  </div>
                  
                  <div style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User size={14} /> {post.author}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {new Date(post.date).toLocaleDateString()}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {post.readTime} min read</div>
                    </div>
                    
                    <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>{post.title}</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '24px', lineHeight: 1.6 }}>{post.excerpt}</p>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {post.tags.map(tag => <span key={tag} className="tech-pill" style={{ fontSize: '11px', padding: '4px 10px' }}>{tag}</span>)}
                      </div>
                      <Link to={`/blog/${post.id}`} style={{ color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                        Read More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section style={{ background: 'var(--bg2)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Latest <span className="accent">Articles.</span></h2>

            <div className="services-grid reveal">
              {regularPosts.map((post) => (
                <div key={post.id} className="why-card" style={{ padding: 0, overflow: 'hidden' }}>
                  <div style={{ position: 'relative', height: '180px' }}>
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  
                  <div style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User size={12} /> {post.author}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> {post.readTime} min</div>
                    </div>
                    
                    <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>{post.title}</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '13px', marginBottom: '20px', lineHeight: 1.6 }}>{post.excerpt}</p>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        {post.tags.slice(0, 2).map(tag => <span key={tag} className="tech-pill" style={{ fontSize: '10px', padding: '2px 8px' }}>{tag}</span>)}
                      </div>
                      <Link to={`/blog/${post.id}`} style={{ color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', fontSize: '13px' }}>
                        Read <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Stay Updated</div>
          <h2>Join our <span className="bolt">Newsletter.</span></h2>
          <p>Subscribe to get the latest insights delivered to your inbox.</p>
          <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '16px', maxWidth: '500px', margin: '40px auto 0' }}>
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
              className="form-input"
              style={{ margin: 0 }}
            />
            <button type="submit" disabled={isSubscribing} className="btn-primary" style={{ padding: '0 32px' }}>
              {isSubscribing ? '...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Blog;