import './PageHero.css';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';
import { useInView } from 'react-intersection-observer';

const PageHero = ({ badge, title, subtitle, variant = 'default', className = '', children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className={`page-hero ${className}`} ref={ref}>
      <AnimatedBackground variant={variant} />
      <div className="container page-hero-content">
        <div className={`page-hero-text ${inView ? 'visible' : ''}`}>
          {badge && <span className="section-badge">{badge}</span>}
          <h1 className="page-hero-title">{title}</h1>
          {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
          {children && <div className="page-hero-actions">{children}</div>}
        </div>
      </div>
      <div className="page-hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 120L48 105C96 90 192 60 288 50C384 40 480 50 576 58C672 66 768 72 864 70C960 68 1056 58 1152 52C1248 46 1344 44 1392 43L1440 42V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="var(--bg-white)"/>
        </svg>
      </div>
    </section>
  );
};

export default PageHero;
