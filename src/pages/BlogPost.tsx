import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import SEOHead from '../components/UI/SEOHead';

const BlogPost = () => {
  const { id } = useParams();

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
      content: `
        <p>Artificial Intelligence is no longer a futuristic concept—it's here, and it's transforming the way we build and interact with websites. As we move into 2024, AI-powered websites are becoming the new standard for businesses looking to provide exceptional user experiences and streamline their operations.</p>
        
        <h2>The Shift to Intelligent Interfaces</h2>
        <p>Traditional websites operate on predefined logic, offering a static experience to all visitors. AI changes this paradigm by introducing dynamic interfaces that adapt to individual users in real-time. By analyzing user behavior, preferences, and browsing history, AI algorithms can instantly restructure layouts, highlight relevant products, and deliver hyper-personalized content. This level of customization significantly improves user engagement and conversion rates, making the website feel like a dedicated concierge.</p>

        <h2>Automating the Development Lifecycle</h2>
        <p>Beyond the user experience, AI is fundamentally altering how developers write code and manage projects. AI-assisted coding tools like GitHub Copilot and advanced language models are dramatically accelerating the development timeline. Developers can now generate boilerplate code, debug complex issues, and write comprehensive tests in a fraction of the time. This allows agencies like Skybolt Labs to focus on high-level architecture, creative design, and complex integrations, delivering superior products faster than ever before.</p>

        <h2>Intelligent Customer Support and Engagement</h2>
        <p>Modern AI chatbots have evolved far beyond the frustrating, script-based bots of the past. Today's conversational AI can understand natural language, interpret context, and handle complex customer inquiries autonomously. They provide instant, 24/7 support, guiding users through purchasing decisions or troubleshooting technical issues. By integrating these intelligent assistants, businesses can scale their customer service operations efficiently while maintaining a high standard of user satisfaction.</p>

        <h2>Embracing the AI Revolution</h2>
        <p>The integration of AI into web development is not just a trend; it's a fundamental shift in how digital experiences are crafted and consumed. Businesses that adopt AI-powered websites will gain a decisive competitive advantage, offering faster, smarter, and more engaging platforms. At Skybolt Labs, we specialize in weaving AI seamlessly into web architectures, ensuring our clients remain at the forefront of digital innovation.</p>
      `,
      author: 'Alex Johnson',
      date: '2024-01-15',
      readTime: 5,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['AI', 'Web Development', 'Technology']
    },
    {
      id: '2',
      title: 'Essential UI/UX Design Principles for Modern Websites',
      excerpt: 'Learn the fundamental design principles that create exceptional user experiences.',
      content: `
        <p>Great design is invisible. When users navigate your website effortlessly, find what they need quickly, and enjoy the experience, that's when you know you've achieved excellent UI/UX design. But what makes design truly exceptional in the modern web landscape?</p>
        
        <h2>The Foundation: User-Centered Design</h2>
        <p>Every design decision should start and end with the user. Understanding your audience's needs, behaviors, and pain points is crucial for creating interfaces that truly serve their purpose. This means moving beyond aesthetic preferences and relying on data-driven insights gathered through user interviews, heatmaps, and usability testing. A user-centered approach ensures that the digital product aligns perfectly with the mental models of its target demographic.</p>

        <h2>Clarity, Simplicity, and Visual Hierarchy</h2>
        <p>In an era of information overload, clarity is king. Modern UI/UX design favors minimalist, breathable interfaces where every element serves a distinct purpose. By leveraging whitespace, typography, and contrast, designers establish a clear visual hierarchy. This guides the user's eye naturally from the most critical information—like primary calls to action—down to secondary details, drastically reducing cognitive load and decision fatigue.</p>

        <h2>Consistency and Predictability</h2>
        <p>Consistency builds trust and intuition. When a user learns how to interact with a component on one page, they expect it to behave identically on another. Establishing a robust design system with standardized color palettes, typography scales, button states, and interaction patterns ensures a cohesive experience across the entire platform. Predictable navigation and intuitive layouts empower users to accomplish their goals faster and with fewer errors.</p>

        <h2>Accessibility and Inclusive Design</h2>
        <p>Exceptional design must be inclusive. Designing for accessibility means ensuring that users of all abilities can perceive, understand, navigate, and interact with your website. This involves maintaining high color contrast ratios, providing clear alternative text for images, supporting keyboard navigation, and ensuring screen-reader compatibility. Inclusive design not only expands your audience but often leads to simpler, more robust interfaces that benefit everyone.</p>
      `,
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: 7,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['UI/UX', 'Design', 'User Experience']
    },
    {
      id: '3',
      title: 'E-commerce Trends That Will Dominate 2024',
      excerpt: 'Stay ahead of the competition with these emerging e-commerce trends and strategies.',
      content: `
        <p>The e-commerce landscape is evolving rapidly, driven by changing consumer behaviors, technological advances, and global market shifts. As we progress through 2024, several key trends are reshaping how businesses sell online and how customers shop.</p>
        
        <h2>Hyper-Personalization Powered by Machine Learning</h2>
        <p>Generic storefronts are becoming a thing of the past. In 2024, successful e-commerce platforms utilize advanced machine learning to deliver hyper-personalized shopping experiences. By analyzing real-time behavioral data, purchase history, and even contextual factors like weather or location, algorithms can dynamically adjust product recommendations, promotional offers, and content. This creates a bespoke journey for every individual, drastically improving conversion rates and customer loyalty.</p>

        <h2>The Rise of Social Commerce and Shoppable Video</h2>
        <p>The boundaries between social media and e-commerce continue to blur. Consumers increasingly expect to purchase products directly within their favorite social apps without the friction of navigating to an external website. Furthermore, shoppable short-form video—popularized by platforms like TikTok—is revolutionizing product discovery. Brands are leveraging authentic, engaging video content with integrated checkout features, turning viral moments into immediate sales.</p>

        <h2>Augmented Reality (AR) and Virtual Try-Ons</h2>
        <p>One of the biggest hurdles in online shopping is the inability to physically interact with products. Augmented Reality (AR) is bridging this gap by allowing customers to visualize items in their own space or virtually "try on" clothing, accessories, and makeup. By providing a highly interactive and confident buying experience, AR technologies significantly reduce return rates and increase customer satisfaction.</p>

        <h2>Sustainable and Transparent Commerce</h2>
        <p>Modern consumers are highly conscious of their environmental footprint and expect brands to reflect their values. Transparency in sourcing, sustainable packaging, and carbon-neutral shipping options are no longer just "nice-to-haves"—they are critical competitive differentiators. E-commerce businesses that prominently feature their sustainability initiatives and offer eco-friendly choices are seeing increased loyalty from ethically-minded shoppers.</p>
      `,
      author: 'Sarah Chen',
      date: '2024-01-05',
      readTime: 6,
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['E-commerce', 'Business', 'Trends']
    },
    {
      id: '4',
      title: 'Building High-Performance React Applications',
      excerpt: 'Tips and best practices for creating fast, scalable React applications.',
      content: `
        <p>React has become the go-to framework for building modern web applications, but with great power comes great responsibility. Creating high-performance React applications requires understanding both the framework's capabilities and potential pitfalls.</p>
        
        <h2>Mastering State Management and Renders</h2>
        <p>The core of React performance lies in understanding when and why components re-render. Unnecessary renders can cripple application speed, especially on lower-end devices. Developers must leverage tools like React.memo, useMemo, and useCallback judiciously to prevent expensive recalculations and re-rendering of large component trees when props remain unchanged. Furthermore, keeping state as localized as possible, rather than hoisting everything to a global store, ensures that state updates only trigger renders where absolutely necessary.</p>

        <h2>Code Splitting and Lazy Loading</h2>
        <p>Shipping a massive JavaScript bundle to the client is a surefire way to ruin load times. Code splitting allows developers to break down the application into smaller, manageable chunks that are loaded on demand. By utilizing React.lazy and Suspense, you can defer the loading of heavy components, non-critical routes, or large third-party libraries until the exact moment the user needs them, resulting in a dramatically faster initial page load.</p>

        <h2>Optimizing Data Fetching</h2>
        <p>How and when you fetch data heavily impacts perceived performance. Modern React applications should leverage advanced data-fetching libraries like React Query or SWR, which provide built-in caching, background refetching, and optimistic updates. Additionally, migrating to Server-Side Rendering (SSR) or Static Site Generation (SSG) via frameworks like Next.js can pre-render data-heavy pages on the server, delivering fully formed HTML to the client instantly and vastly improving SEO and Core Web Vitals.</p>

        <h2>Virtualization for Large Data Sets</h2>
        <p>Rendering thousands of items in a list or grid will inevitably choke the browser's DOM, regardless of framework efficiency. Virtualization (or windowing) techniques solve this by only rendering the elements that are currently visible within the user's viewport. Libraries like react-window drastically reduce the number of DOM nodes created, maintaining silky smooth 60fps scrolling even when dealing with massive datasets.</p>
      `,
      author: 'Sarah Chen',
      date: '2024-01-02',
      readTime: 8,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['React', 'Performance', 'Development']
    },
    {
      id: '5',
      title: 'The Rise of Headless CMS: Why Your Business Needs It',
      excerpt: 'Explore the benefits of headless CMS and how it can transform your content strategy.',
      content: `
        <p>Content Management Systems (CMS) have evolved significantly over the past decade. While traditional CMS platforms like WordPress served us well, the modern digital landscape demands more flexibility, performance, and scalability. Enter headless CMS—a game-changing approach that's revolutionizing how businesses manage and deliver content.</p>
        
        <h2>Decoupling Content from Presentation</h2>
        <p>Unlike traditional, monolithic CMS platforms that tightly bind the backend database to the frontend presentation layer, a Headless CMS completely separates the two. It acts strictly as a content repository, exposing data via robust APIs (REST or GraphQL). This decoupling grants development teams absolute freedom to design and build the frontend using any modern framework—such as React, Vue, or Next.js—without being constrained by the rigid templating engines of legacy systems.</p>

        <h2>True Omnichannel Delivery</h2>
        <p>In today's ecosystem, content must live on more than just a website. It needs to be consumed by mobile apps, smartwatches, digital kiosks, and voice assistants. Because a Headless CMS delivers content purely as data via APIs, that single source of truth can be distributed seamlessly across an infinite number of touchpoints. You update the content once in the backend, and it instantly syncs across your entire digital ecosystem, ensuring unparalleled consistency and saving countless hours of redundant data entry.</p>

        <h2>Unmatched Performance and Security</h2>
        <p>Because the frontend is decoupled, developers can leverage modern architectures like Jamstack to generate static sites or utilize advanced caching layers at the edge. This results in lightning-fast page load speeds and perfect Core Web Vitals scores. From a security standpoint, the separation means the CMS backend and database are abstracted away from the public-facing site, significantly reducing the attack surface and practically eliminating the vulnerabilities common to traditional, plugin-heavy CMS platforms.</p>

        <h2>Future-Proofing Your Tech Stack</h2>
        <p>Technology moves fast, and getting locked into a specific monolithic vendor can hinder growth. A Headless architecture allows businesses to continuously iterate, redesign, or completely swap out their frontend technologies without ever having to migrate or restructure their underlying content database. It empowers agile, scalable development that adapts fluidly to future innovations.</p>
      `,
      author: 'Emma Wilson',
      date: '2023-12-28',
      readTime: 4,
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['CMS', 'Content Strategy', 'Technology']
    },
    {
      id: '6',
      title: 'SEO Best Practices for Modern Websites',
      excerpt: 'Master the art of SEO with these proven strategies and techniques.',
      content: `
        <p>Search Engine Optimization (SEO) continues to evolve as search engines become more sophisticated and user expectations rise. In 2024, successful SEO requires a holistic approach that combines technical excellence, quality content, and exceptional user experience.</p>
        
        <h2>Core Web Vitals and Technical Foundation</h2>
        <p>Google's algorithm increasingly prioritizes user experience, making Core Web Vitals an absolute necessity rather than a technical luxury. Websites must optimize for fast loading speeds (LCP), rapid interactivity (INP), and visual stability (CLS). A robust technical foundation—including clean semantic HTML, logical URL structures, secure HTTPS protocols, and an impeccable mobile-first responsive design—ensures that search engine bots can efficiently crawl, render, and index your site without encountering performance roadblocks.</p>

        <h2>Intent-Driven Content Strategies</h2>
        <p>Keyword stuffing is dead. Modern SEO relies on deeply understanding user search intent—the 'why' behind the query. Content must be comprehensive, authoritative, and structured to directly answer the user's implicit and explicit questions. By organizing content into topical clusters with a strong pillar page and strategic internal linking, businesses can signal deep expertise to search engines, capturing valuable long-tail search traffic and establishing themselves as industry authorities.</p>

        <h2>Leveraging Structured Data (Schema.org)</h2>
        <p>Structured data is the secret weapon of modern SEO. By injecting JSON-LD schema markup into your codebase, you translate your content into a highly standardized format that search engines instantly understand. Whether it's marking up articles, product reviews, local business details, or FAQs, structured data enables rich snippets in search results. These visually enhanced listings drastically improve click-through rates and help your brand dominate the Search Engine Results Pages (SERPs).</p>

        <h2>E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness</h2>
        <p>As AI-generated content floods the web, search engines are doubling down on E-E-A-T. They prioritize content created by verifiable humans with real-world experience and credentials. Establishing trust requires clear author bylines, robust "About Us" pages, transparent sourcing, high-quality backlinks from reputable domains, and consistent positive user signals. Building a brand's off-page authority is just as crucial as optimizing its on-page content.</p>
      `,
      author: 'Alex Johnson',
      date: '2023-12-25',
      readTime: 6,
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['SEO', 'Marketing', 'Digital Strategy']
    }
  ];

  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="page-hero-title mb-4">Post Not Found</h1>
          <p className="page-hero-sub mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Skybolt Labs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://skyboltlabs.co.za/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://skyboltlabs.co.za/blog/${post.id}`
    },
    "keywords": post.tags.join(", "),
    "articleSection": "Technology",
    "inLanguage": "en-ZA"
  };

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook': url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`; break;
      case 'twitter': url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`; break;
      case 'linkedin': url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`; break;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <>
      <SEOHead 
        title={`${post.title} - Skybolt Labs Blog`}
        description={post.excerpt}
        keywords={`${post.tags.join(', ')}, web development Cape Town, ${post.author}`}
        image={post.image}
        url={`https://skyboltlabs.co.za/blog/${post.id}`}
        type="article"
        author={post.author}
        publishedTime={post.date}
        schema={blogPostSchema}
      />
      
      {/* Hero Section */}
      <section className="page-hero" style={{ padding: '200px 40px 100px', background: `linear-gradient(to bottom, rgba(6,8,16,0.5), var(--bg)), url('${post.image}') center/cover` }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'left' }}>
          <Link to="/blog" style={{ color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', fontWeight: 600 }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
            {post.tags.map((tag) => (
              <span key={tag} className="tech-pill">{tag}</span>
            ))}
          </div>
          
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontFamily: 'var(--font-display)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
            {post.title}
          </h1>
          
          <div style={{ display: 'flex', gap: '24px', fontSize: '14px', color: 'var(--muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><User size={16} /> {post.author}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} /> {new Date(post.date).toLocaleDateString()}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> {post.readTime} min read</div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 reveal">
            {/* Main Content */}
            <article className="lg:col-span-3">
              <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Author Bio */}
              <div className="why-card" style={{ marginTop: '48px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                <div style={{ width: '64px', height: '64px', background: 'var(--accent)', borderRadius: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User size={32} color="#fff" />
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', marginBottom: '4px' }}>{post.author}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '14px' }}>Senior Developer at Skybolt Labs</p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {/* Share */}
                <div className="why-card" style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '16px', display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
                    <Share2 size={18} /> Share Article
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <button onClick={() => handleShare('facebook')} className="btn-ghost" style={{ width: '100%', justifyContent: 'center' }}><Facebook size={16} /> Facebook</button>
                    <button onClick={() => handleShare('twitter')} className="btn-ghost" style={{ width: '100%', justifyContent: 'center' }}><Twitter size={16} /> Twitter</button>
                    <button onClick={() => handleShare('linkedin')} className="btn-ghost" style={{ width: '100%', justifyContent: 'center' }}><Linkedin size={16} /> LinkedIn</button>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="why-card" style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Related Articles</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {blogPosts
                      .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
                      .slice(0, 3)
                      .map((relatedPost) => (
                        <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} style={{ display: 'flex', gap: '12px', textDecoration: 'none' }}>
                          <img src={relatedPost.image} alt={relatedPost.title} style={{ width: '64px', height: '64px', borderRadius: '8px', objectFit: 'cover' }} />
                          <div>
                            <h4 style={{ fontSize: '13px', color: 'var(--text)', fontWeight: 600, lineHeight: 1.4, marginBottom: '4px' }}>{relatedPost.title}</h4>
                            <p style={{ fontSize: '11px', color: 'var(--muted)' }}>{relatedPost.readTime} min read</p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2>Ready to <span className="accent">start?</span></h2>
          <p>Let's work together to implement these strategies for your business.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">Get Started Today &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;