import { useState, useEffect, useRef, useCallback } from 'react';
import './BlogsPage.css';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import PageHero from '../../components/PageHero/PageHero';
import Ambient3DBackground from '../../components/Ambient3DBackground/Ambient3DBackground';
import { getIcon } from '../../components/Icons/icons';
import { blogsHeroData, categoriesData, blogPostsData } from '../../data/blogsData';
import { animateBlogModalOpen, animateBlogModalClose } from '../../gsapAnimations';

const categoryIcons = {
  'Mutual Funds': 'briefcase',
  'Market Insights': 'trendingUp',
  'SIP': 'barChart',
  'Tax Planning': 'percent',
  'NRI Investing': 'globe',
  'Retirement': 'sunset',
};

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

const categoryColors = {
  'Mutual Funds': '#DD6B20',
  'Market Insights': '#C53030',
  'SIP': '#D69E2E',
  'Tax Planning': '#276749',
  'NRI Investing': '#3182CE',
  'Retirement': '#B7791F',
};

/* ── Blog Modal ── */
const BlogModal = ({ post, onClose, triggerRef }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const closeBtnRef = useRef(null);
  const color = categoryColors[post.category] || '#0B2545';

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
    if (contentRef.current) {
      animateBlogModalOpen(contentRef.current);
    }
    const targetNode = triggerRef?.current;
    return () => {
      document.body.style.overflow = '';
      if (targetNode) {
        targetNode.focus();
      }
    };
  }, [triggerRef]);

  const handleClose = useCallback(() => {
    if (contentRef.current) {
      animateBlogModalClose(contentRef.current, onClose);
    } else {
      onClose();
    }
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === modalRef.current) handleClose();
  };

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [handleClose]);

  return (
    <div className="blog-modal-overlay" ref={modalRef} onClick={handleOverlayClick} role="presentation">
      <div
        className="blog-modal"
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-article-title"
      >
        <button
          className="blog-modal-close"
          onClick={handleClose}
          aria-label="Close article modal"
          ref={closeBtnRef}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div className="blog-modal-header">
          <span className="blog-modal-badge" style={{ background: color }}>{post.category}</span>
          <h2 className="blog-modal-title" id="modal-article-title">{post.title}</h2>
          <div className="blog-modal-meta">
            <span>{post.date}</span>
            <span className="blog-modal-dot">·</span>
            <span>{post.readTime}</span>
            <span className="blog-modal-dot">·</span>
            <span>By {post.author}</span>
          </div>
        </div>
        <div className="blog-modal-body">
          {post.image && (
            <figure className="blog-modal-figure" style={{ marginBottom: '24px' }}>
              <img src={post.image} alt={post.title} className="blog-modal-image" style={{ width: '100%', borderRadius: '12px', height: 'auto' }} />
              {post.caption && <figcaption style={{ fontSize: '0.85rem', color: '#526B82', marginTop: '8px', textAlign: 'center' }}>{post.caption}</figcaption>}
            </figure>
          )}
          {post.content ? (
            post.content.map((para, i) => <p key={i}>{para}</p>)
          ) : (
            <p>{post.excerpt}</p>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Blog Card ── */
const BlogCard = ({ post, delay, onReadMore }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const btnRef = useRef(null);
  const color = categoryColors[post.category] || '#0B2545';

  return (
    <article ref={ref} className={`blog-card glass-card scale-in ${inView ? 'visible' : ''} ${post.featured ? 'blog-card-featured' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <div className="blog-card-image" style={{ background: `linear-gradient(135deg, ${color}18, ${color}08)` }}>
        <div className="blog-card-placeholder" style={{ color }}>
          {getIcon(categoryIcons[post.category] || 'chartLine', 48)}
        </div>
        <span className="blog-card-badge" style={{ background: color }}>{post.category}</span>
      </div>
      <div className="blog-card-body">
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-meta">
          <span>{post.date}</span>
          <span className="blog-card-dot">·</span>
          <span>{post.readTime}</span>
        </div>
        <div className="blog-card-footer">
          <span className="blog-card-author">By {post.author}</span>
          <button
            ref={btnRef}
            className="blog-card-link"
            onClick={() => onReadMore({ post, triggerRef: btnRef })}
            aria-label={`Read article: ${post.title}`}
          >
            Read More →
          </button>
        </div>
      </div>
    </article>
  );
};

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedData, setSelectedData] = useState(null);

  const filteredPosts = blogPostsData.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Investment Blogs &amp; Insights | KDJ Wealth</title>
        <meta name="description" content="Expert investment insights on mutual funds, SIPs, market analysis, tax planning, and financial planning from KDJ Wealth." />
      </Helmet>

      <PageHero className="blogs-hero" badge={blogsHeroData.badge} title={blogsHeroData.title} subtitle={blogsHeroData.subtitle} variant="violet" />

      <section className="section blogs-main-section">
        <Ambient3DBackground variant="blogs" />
        <div className="container">
          {/* Search & Filter */}
          <AnimatedSection className="blogs-controls">
            <div className="blogs-search">
              <span className="blogs-search-icon">{getIcon('target', 18)}</span>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="blogs-search-input"
              />
            </div>
            <div className="blogs-categories">
              {categoriesData.map((cat) => (
                <button
                  key={cat}
                  className={`blogs-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Blog Grid */}
          <div className="blogs-grid">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, i) => (
                <BlogCard key={post.id} post={post} delay={i * 0.08} onReadMore={setSelectedData} />
              ))
            ) : (
              <div className="blogs-empty">
                <span className="blogs-empty-icon">{getIcon('mail', 40)}</span>
                <h3>No articles found</h3>
                <p>Try a different search term or category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section section-light blogs-newsletter-section">
        <div className="container">
          <AnimatedSection className="blogs-newsletter glass-card">
            <div className="blogs-newsletter-content">
              <span className="section-badge">Stay Updated</span>
              <h2>Subscribe to Our Newsletter</h2>
              <p>Get weekly investment insights, market analysis, and exclusive tips delivered to your inbox.</p>
              <div className="blogs-newsletter-form">
                <input type="email" placeholder="Enter your email address" className="blogs-newsletter-input" />
                <button className="btn btn-accent">Subscribe</button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Modal */}
      {selectedData && (
        <BlogModal
          post={selectedData.post}
          triggerRef={selectedData.triggerRef}
          onClose={() => setSelectedData(null)}
        />
      )}
    </>
  );
};

export default BlogsPage;
