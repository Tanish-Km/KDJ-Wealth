import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CalculatorsPage.css';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import PageHero from '../../components/PageHero/PageHero';
import { getIcon } from '../../components/Icons/icons';
import CalculatorEngine from '../../components/Calculator/CalculatorEngine';
import { calculatorsHeroData, calculatorsList } from '../../data/calculatorsData';

/* ── Animated Section Wrapper ── */
const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

const CalculatorsPage = () => {
  const [activeCalc, setActiveCalc] = useState(null);
  const calcRef = useRef(null);

  /* Smooth scroll to calculator when selected */
  useEffect(() => {
    if (activeCalc && calcRef.current) {
      setTimeout(() => {
        calcRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [activeCalc]);

  const handleSelect = (id) => {
    setActiveCalc((prev) => (prev === id ? null : id));
  };

  const activeCalcData = calculatorsList.find((c) => c.id === activeCalc);

  return (
    <>
      <Helmet>
        <title>Financial Calculators | KDJ Wealth</title>
        <meta name="description" content="Use KDJ Wealth's professional financial calculators — SIP, Lumpsum, SWP, STP, Retirement, Education, Marriage, Home, Goal, and Inflation calculators with interactive charts." />
      </Helmet>

      {/* Hero */}
      <PageHero
        className="calc-hero"
        badge={calculatorsHeroData.badge}
        title={calculatorsHeroData.title}
        subtitle={calculatorsHeroData.subtitle}
        variant="violet"
      />

      {/* Calculator Grid */}
      <section className="section calc-grid-section">
        <svg className="calc-ambient-bg" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0 500 Q 300 450, 600 250 T 1200 50" stroke="#0878C9" strokeWidth="3" fill="none" />
          <path d="M0 550 Q 350 480, 700 280 T 1200 100" stroke="#C89B3C" strokeWidth="2" strokeDasharray="6 6" fill="none" />
          <circle cx="600" cy="250" r="8" fill="#C89B3C" />
          <circle cx="900" cy="150" r="6" fill="#0878C9" />
        </svg>
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-badge">Choose a Calculator</span>
              <h2>Professional Financial Tools</h2>
              <p>Select a calculator below to start planning your financial goals with precision.</p>
            </div>
          </AnimatedSection>

          <div className="calc-selector-grid">
            {calculatorsList.map((calc, i) => (
              <AnimatedSection key={calc.id} delay={i * 0.06}>
                <button
                  className={`calc-selector-card glass-card ${activeCalc === calc.id ? 'calc-selector-card--active' : ''}`}
                  onClick={() => handleSelect(calc.id)}
                  style={{ '--calc-accent': calc.accentColor }}
                  id={`calc-card-${calc.id}`}
                >
                  <div className="calc-selector-icon">
                    {getIcon(calc.icon, 28)}
                  </div>
                  <h3 className="calc-selector-name">{calc.name}</h3>
                  <p className="calc-selector-desc">{calc.shortDescription}</p>
                  <span className="calc-selector-action">
                    {activeCalc === calc.id ? 'Close' : 'Calculate'}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={activeCalc === calc.id ? 'M18 15l-6-6-6 6' : 'M9 18l6-6-6-6'} />
                    </svg>
                  </span>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Active Calculator Panel */}
      {activeCalc && (
        <section className="section section-dark calc-active-section" ref={calcRef} id="active-calculator">
          <div className="animated-bg" aria-hidden="true">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
          </div>
          <div className="container">
            <div className="calc-active-header">
              <div className="calc-active-title-row">
                <div className="calc-active-icon" style={{ '--calc-accent': activeCalcData?.accentColor }}>
                  {getIcon(activeCalcData?.icon, 28)}
                </div>
                <div>
                  <h2>{activeCalcData?.name}</h2>
                  <p>{activeCalcData?.shortDescription}</p>
                </div>
              </div>
              <button className="calc-active-close" onClick={() => setActiveCalc(null)} aria-label="Close calculator">
                {getIcon('close', 20)}
              </button>
            </div>
            <div className="calc-active-body">
              <CalculatorEngine calculatorId={activeCalc} />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section section-light calc-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection>
            <div className="section-header">
              <span className="section-badge">Need Expert Advice?</span>
              <h2>Let Our Advisors Help You Plan</h2>
              <p>These calculators give you a starting point. For a comprehensive, personalized financial plan, speak with our advisory team.</p>
            </div>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/919821891816" className="btn btn-accent glow-pulse" target="_blank" rel="noopener noreferrer">
                {getIcon('messageCircle', 18)} Talk to an Advisor
              </a>
              <Link to="/support" className="btn btn-outline">
                {getIcon('phone', 18)} Schedule a Call
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default CalculatorsPage;
