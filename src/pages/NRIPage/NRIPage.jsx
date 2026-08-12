import { useState } from 'react';
import './NRIPage.css';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import PageHero from '../../components/PageHero/PageHero';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';
import Ambient3DBackground from '../../components/Ambient3DBackground/Ambient3DBackground';
import { getIcon } from '../../components/Icons/icons';
import {
  nriHeroData, whyIndiaData, investmentOptionsData,
  nriStepsData, caseStudiesData, nriFaqData,
} from '../../data/nriData';

/* ── Helpers ── */
const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

const formatCurrency = (val) => {
  if (val >= 10000000) return '₹' + (val / 10000000).toFixed(2) + ' Cr';
  if (val >= 100000) return '₹' + (val / 100000).toFixed(2) + ' L';
  if (val >= 1000) return '₹' + (val / 1000).toFixed(1) + 'k';
  return '₹' + Math.round(val).toLocaleString('en-IN');
};

/* ── SIP Calculator ── */
const SIPCalculator = () => {
  const [monthly, setMonthly] = useState(10000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const monthlyRate = rate / 12 / 100;
  const totalMonths = years * 12;
  const invested = monthly * totalMonths;
  const fv = monthly * ((Math.pow(1 + monthlyRate, totalMonths) - 1) * (1 + monthlyRate) / monthlyRate);
  const gains = fv - invested;

  return (
    <div className="calc-card glass-card">
      <h3>{getIcon('calculator', 20)} SIP Calculator</h3>
      <div className="calc-inputs">
        <label>Monthly SIP (₹)<input type="range" min="500" max="100000" step="500" value={monthly} onChange={e => setMonthly(+e.target.value)} /><span className="calc-val">{formatCurrency(monthly)}</span></label>
        <label>Duration (Years)<input type="range" min="1" max="30" value={years} onChange={e => setYears(+e.target.value)} /><span className="calc-val">{years} yrs</span></label>
        <label>Expected Return (%)<input type="range" min="1" max="30" step="0.5" value={rate} onChange={e => setRate(+e.target.value)} /><span className="calc-val">{rate}%</span></label>
      </div>
      <div className="calc-results">
        <div className="calc-result-item"><span>Invested</span><strong>{formatCurrency(invested)}</strong></div>
        <div className="calc-result-item accent"><span>Returns</span><strong>{formatCurrency(gains)}</strong></div>
        <div className="calc-result-item primary"><span>Total Value</span><strong>{formatCurrency(fv)}</strong></div>
      </div>
    </div>
  );
};

/* ── FAQ Item ── */
const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className={`nri-faq-item glass-card ${isOpen ? 'open' : ''}`} onClick={onClick}>
    <div className="nri-faq-q">
      <span>{question}</span>
      <span className="nri-faq-icon">{isOpen ? '−' : '+'}</span>
    </div>
    {isOpen && <div className="nri-faq-a"><p>{answer}</p></div>}
  </div>
);

/* ── Case Study Modal ── */
const CaseStudyCard = ({ study, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="nri-case-card glass-card" onClick={() => setIsOpen(true)}>
        <div className="nri-case-number">{String(index + 1).padStart(2, '0')}</div>
        <h3>{study.title}</h3>
        <p>{study.outcome}</p>
        <button className="nri-case-btn" onClick={() => setIsOpen(true)}>Read Full Case Study →</button>
      </div>

      {isOpen && (
        <div className="nri-modal-overlay" onClick={() => setIsOpen(false)} role="presentation">
          <div className="nri-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="nri-modal-close" onClick={() => setIsOpen(false)} aria-label="Close modal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="nri-modal-header">
              <span className="nri-modal-badge">CASE STUDY #{index + 1}</span>
              <h2 className="nri-modal-title">{study.title}</h2>
              <div className="nri-modal-meta">
                <span>FEMA Compliant</span>
                <span className="nri-modal-dot">·</span>
                <span>NRI Wealth Advisory</span>
              </div>
            </div>
            <div className="nri-modal-body">
              <div>
                <h4>Investor Profile</h4>
                <ul>{study.profile.map((p, i) => <li key={i}>{p}</li>)}</ul>
              </div>
              <div>
                <h4>Challenge</h4>
                <ul>{study.challenge.map((c, i) => <li key={i}>{c}</li>)}</ul>
              </div>
              <div>
                <h4>KDJ Wealth Solution</h4>
                <ul>{study.solution.map((s, i) => <li key={i}>{s}</li>)}</ul>
              </div>
              <div className="nri-modal-outcome">
                <h4>Outcome &amp; Results</h4>
                <p>{study.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* ── Main Page ── */
const NRIPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Helmet>
        <title>NRI Investment in India | KDJ Wealth</title>
        <meta name="description" content="FEMA-compliant NRI investment advisory in India. Invest in mutual funds with KDJ Wealth's AMFI-registered advisors." />
      </Helmet>

      {/* Hero */}
      <PageHero className="nri-hero" badge={nriHeroData.badge} title={nriHeroData.title} subtitle={nriHeroData.subtitle} variant="emerald">
        <a href="https://wa.me/919821891816" className="btn btn-accent glow-pulse" target="_blank" rel="noopener noreferrer">{getIcon('globe', 18)} Talk to NRI Advisor</a>
        <a href="#nri-calc" className="btn btn-outline-light">{getIcon('barChart', 18)} Try Our Calculator</a>
      </PageHero>

      {/* Why India */}
      <section className="section nri-why-section">
        <Ambient3DBackground variant="nri" />
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-badge">Why Invest in India</span>
              <h2>India — The World's Growth Engine</h2>
              <p>With robust GDP growth, favorable demographics, and maturing capital markets, India offers unparalleled investment opportunities for NRIs.</p>
            </div>
          </AnimatedSection>
          <div className="nri-why-grid">
            {whyIndiaData.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="nri-why-card glass-card">
                <span className="nri-why-icon">{getIcon(item.icon, 32)}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="white" to="light" />

      {/* Investment Options */}
      <section className="section section-light nri-options-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-badge">Investment Avenues</span>
              <h2>What NRIs Can Invest In</h2>
            </div>
          </AnimatedSection>
          <div className="nri-tabs">
            {investmentOptionsData.map((opt, i) => (
              <button key={i} className={`nri-tab ${activeTab === i ? 'active' : ''}`} onClick={() => setActiveTab(i)}>
                {opt.title}
              </button>
            ))}
          </div>
          <AnimatedSection className="nri-tab-content glass-card">
            <h3>{investmentOptionsData[activeTab].title}</h3>
            <p>{investmentOptionsData[activeTab].description}</p>
            <ul className="nri-features-list">
              {investmentOptionsData[activeTab].features.map((f, i) => (
                <li key={i}><span className="nri-check">{getIcon('check', 16)}</span> {f}</li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="section nri-steps-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-badge">Getting Started</span>
              <h2>How It Works for NRIs</h2>
            </div>
          </AnimatedSection>
          <div className="nri-steps-timeline">
            {nriStepsData.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.15} className="nri-step-item">
                <div className="nri-step-number">{step.step}</div>
                <div className="nri-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section section-dark nri-calc-section" id="nri-calc">
        <AnimatedBackground variant="violet" />
        <div className="container nri-calc-container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-badge">Plan Your Investment</span>
              <h2>SIP Calculator</h2>
              <p>See how your money can grow with systematic monthly investments.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <SIPCalculator />
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section nri-cases-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-badge">Real Success Stories</span>
              <h2>NRI Case Studies</h2>
              <p>See how we've helped NRIs across the globe build wealth in India.</p>
            </div>
          </AnimatedSection>
          <div className="nri-cases-grid">
            {caseStudiesData.map((study, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <CaseStudyCard study={study} index={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="white" to="light" />

      {/* FAQ */}
      <section className="section section-light nri-faq-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-badge">Common Questions</span>
              <h2>NRI Investment FAQ</h2>
            </div>
          </AnimatedSection>
          <div className="nri-faq-list">
            {nriFaqData.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <FaqItem question={faq.question} answer={faq.answer} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark nri-cta-section">
        <AnimatedBackground variant="emerald" />
        <div className="container nri-cta-content">
          <AnimatedSection>
            <h2>Start Your India Investment Journey Today</h2>
            <p>Our AMFI-registered NRI specialists are ready to build your personalized investment plan.</p>
            <a href="https://wa.me/919821891816" className="btn btn-accent glow-pulse" target="_blank" rel="noopener noreferrer">Schedule Free NRI Consultation →</a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default NRIPage;
