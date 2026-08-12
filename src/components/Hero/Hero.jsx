import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Hero.css';

export default function Hero() {
  const anim = useScrollAnimation();

  return (
    <section className="hero" id="main-content">
      {/* Decorative overlay & depth lighting */}
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__content" ref={anim.ref}>
        <span className={`hero__badge animate-on-scroll ${anim.className}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
          </svg>
          Your Trusted Financial Partner
        </span>

        <h1 className={`hero__title animate-on-scroll animate-delay-1 ${anim.className}`}>
          Build Lasting Wealth with{' '}
          <span className="hero__title-highlight">KDJ Wealth</span>
        </h1>

        <div className="hero__gold-line" aria-hidden="true" />

        <p className={`hero__subtitle animate-on-scroll animate-delay-2 ${anim.className}`}>
          Personalized investment solutions, goal-based financial planning, and expert guidance
          to help you achieve financial confidence — backed by 4+ years of trust and ₹8+ Crore AUM.
        </p>

        {/* Action Buttons */}
        <div className={`hero__actions animate-on-scroll animate-delay-3 ${anim.className}`}>
          <Link to="/support" className="btn btn-accent btn-lg hero__btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Start Your Journey
          </Link>
          <a href="#explore-vines" className="btn btn-outline-light btn-lg hero__btn-secondary">
            Explore Services
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
            </svg>
          </a>
        </div>

        {/* Floating Glass Stats */}
        <div className={`hero__stats animate-on-scroll animate-delay-4 ${anim.className}`}>
          <div className="hero__stat">
            <span className="hero__stat-number">16+</span>
            <span className="hero__stat-label">Services Offered</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">4+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">₹8Cr+</span>
            <span className="hero__stat-label">Assets Managed</span>
          </div>
        </div>

        <div className="hero__trust-footer">
          <span>AMFI-Registered Mutual Fund Distributor</span>
          <span className="hero__trust-dot">•</span>
          <span>FEMA-Compliant Advisory</span>
        </div>
      </div>
    </section>
  );
}
