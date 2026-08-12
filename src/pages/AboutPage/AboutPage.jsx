import { Link } from 'react-router-dom';
import './AboutPage.css';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import PageHero from '../../components/PageHero/PageHero';
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';
import Ambient3DBackground from '../../components/Ambient3DBackground/Ambient3DBackground';
import { getIcon } from '../../components/Icons/icons';
import {
  aboutHeroData,
  storyData,
  missionVisionData,
  approachData,
  statsData,
  teamData,
  certificationsData,
} from '../../data/aboutData';

/* ── Animated Section Wrapper ── */
const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

/* ── Stats Counter ── */
const StatCard = ({ icon, value, label, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div ref={ref} className={`stat-card glass-card scale-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <span className="stat-icon">{getIcon(icon, 28)}</span>
      <span className="stat-value gradient-text">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const AboutPage = () => {
  const { ref: storyRef, inView: storyInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <Helmet>
        <title>About KDJ Wealth | Trusted Financial Partner</title>
        <meta name="description" content="Learn about KDJ Wealth — an AMFI-registered Mutual Fund Distributor with 4+ years of experience and ₹8+ Crore AUM, serving investors across India." />
      </Helmet>

      {/* Hero */}
      <PageHero className="about-hero" badge={aboutHeroData.badge} title={aboutHeroData.title} subtitle={aboutHeroData.subtitle} variant="emerald">
        <a href="https://wa.me/919821891816" className="btn btn-accent glow-pulse" target="_blank" rel="noopener noreferrer">
          {getIcon('phone', 18)} Schedule Free Consultation
        </a>
      </PageHero>

      {/* Our Story */}
      <section className="section about-story-section">
        <Ambient3DBackground variant="about" />
        <svg className="about-ambient-svg" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M-100 450 C 300 200, 600 500, 1300 150" stroke="#10B981" strokeWidth="4" fill="none" />
          <path d="M-100 500 C 400 300, 700 550, 1300 250" stroke="#E67E22" strokeWidth="2" strokeDasharray="8 8" fill="none" />
          <circle cx="450" cy="320" r="140" stroke="#D49B2A" strokeWidth="1" fill="none" />
        </svg>
        <div className="container">
          <div className="about-story-grid" ref={storyRef}>
            <div className={`about-story-content slide-in-left ${storyInView ? 'visible' : ''}`}>
              <span className="section-badge">Our Journey</span>
              <h2>{storyData.title}</h2>
              {storyData.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className={`about-story-visual slide-in-right ${storyInView ? 'visible' : ''}`}>
              <div className="about-story-image-card glass-card">
                <div className="about-story-placeholder">
                  <span className="placeholder-icon">{getIcon('sprout', 48)}</span>
                  <span className="placeholder-text">Growing Wealth<br />Since 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section about-mv-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-badge">What Drives Us</span>
              <h2>Mission & Vision</h2>
            </div>
          </AnimatedSection>
          <div className="about-mv-grid">
            {missionVisionData.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15} className="about-mv-card glass-card">
                <span className="about-mv-icon">{getIcon(item.icon, 36)}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section about-stats-section">
        <AnimatedBackground variant="emerald" />
        <div className="container about-stats-container">
          <div className="about-stats-grid">
            {statsData.map((stat, i) => (
              <StatCard key={i} icon={stat.icon} value={stat.value} label={stat.label} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section about-approach-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-badge">How We Work</span>
              <h2>Our Approach</h2>
              <p>A systematic, research-driven methodology that puts your financial goals at the center of every decision.</p>
            </div>
          </AnimatedSection>
          <div className="about-approach-grid stagger-children">
            {approachData.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="about-approach-card glass-card">
                <div className="about-approach-icon-wrap">
                  <span>{getIcon(item.icon, 28)}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section about-team-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-badge">Leadership</span>
              <h2>Meet Our Director</h2>
              <p>Leading KDJ Wealth with integrity, research, and a long-term vision.</p>
            </div>
          </AnimatedSection>
          <div className="about-team-grid">
            {teamData.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.12} className="about-team-card glass-card">
                <div className="about-team-avatar">
                  <span>{member.initials}</span>
                </div>
                <div className="about-team-info">
                  <h3>{member.name}</h3>
                  <span className="about-team-role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="section about-cert-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <h2>Director&apos;s Message</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection className="about-mv-card glass-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', fontStyle: 'italic', opacity: 0.9 }}>
              &ldquo;True wealth is built over time — not overnight. At KDJ Wealth, our mission is to guide every investor with integrity, research, and a long-term vision, helping them achieve financial confidence for generations to come.&rdquo;
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <strong style={{ fontSize: '1.1rem' }}>Aditya Akhriya</strong>
              <br />
              <span style={{ opacity: 0.7 }}>Director, KDJ Wealth</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications */}
      <section className="section section-light about-cert-section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <h2>Trusted & Certified</h2>
            </div>
          </AnimatedSection>
          <div className="about-cert-grid">
            {certificationsData.map((cert, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="about-cert-badge glass-card">
                <span className="about-cert-check">{getIcon('check', 18)}</span>
                <span>{cert}</span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark about-cta-section">
        <AnimatedBackground variant="emerald" />
        <div className="container about-cta-content">
          <AnimatedSection>
            <h2>Ready to Start Your Wealth Journey?</h2>
            <p>Schedule a free consultation with our advisors and take the first step towards financial freedom.</p>
            <div className="about-cta-buttons">
              <a href="https://wa.me/919821891816" className="btn btn-accent glow-pulse" target="_blank" rel="noopener noreferrer">
                Book Free Consultation
              </a>
              <Link to="/" className="btn btn-outline-light">
                Explore Our Services →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
