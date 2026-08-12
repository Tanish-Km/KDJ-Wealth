import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './FinalCTA.css';

export default function FinalCTA() {
  const anim = useScrollAnimation();

  return (
    <section className="final-cta" id="final-cta">
      <div className="final-cta__bg" aria-hidden="true">
        <div className="final-cta__shape final-cta__shape--1" />
        <div className="final-cta__shape final-cta__shape--2" />
        <div className="final-cta__shape final-cta__shape--3" />
      </div>

      <div className="container final-cta__content" ref={anim.ref}>
        <h2 className={`final-cta__title animate-on-scroll ${anim.className}`}>
          Start Your{' '}
          <span className="final-cta__title-highlight">Wealth Creation Journey</span>{' '}
          Today
        </h2>
        <p className={`final-cta__subtitle animate-on-scroll animate-delay-1 ${anim.className}`}>
          Start your wealth creation journey with KDJ Wealth today.
          Get expert guidance and personalized investment solutions.
        </p>
        <Link
          to="/support"
          className={`btn btn-accent final-cta__btn animate-on-scroll animate-delay-2 ${anim.className}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Get Started Today
        </Link>
      </div>
    </section>
  );
}
