import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './DisclaimerPage.css';

const SECTIONS = [
  { id: 'distributor-status', label: 'Distributor Status' },
  { id: 'investment-risk', label: 'Investment Risk' },
  { id: 'no-guarantee', label: 'No Guarantee of Returns' },
  { id: 'information-accuracy', label: 'Information Accuracy' },
  { id: 'suitability', label: 'Suitability of Investments' },
  { id: 'third-party', label: 'Third-Party Links & Content' },
  { id: 'calculators', label: 'Calculators & Illustrations' },
  { id: 'performance', label: 'Performance & Market Data' },
  { id: 'liability', label: 'Limitation of Liability' },
  { id: 'regulatory', label: 'Regulatory & Compliance' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'modifications', label: 'Changes & Acceptance' }
];

export default function DisclaimerPage() {
  const [activeSection, setActiveSection] = useState('distributor-status');

  // Scrollspy to highlight current active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="disclaimer-page">
      <Helmet>
        <title>Legal Disclaimer &amp; Regulatory Disclosures | KDJ Wealth</title>
        <meta
          name="description"
          content="Official regulatory disclaimer, mutual fund risk disclosures, and distributor compliance information for KDJ Wealth (AMFI ARN: 153803)."
        />
        <link rel="canonical" href="https://www.kdjcapitalresearch.com/disclaimer" />
      </Helmet>

      {/* ── Light Luxury Page Header ── */}
      <section className="disclaimer-hero">
        <div className="container">
          <div className="disclaimer-hero-inner">
            <div className="disclaimer-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Regulatory &amp; Statutory Disclosure</span>
            </div>
            <h1 className="disclaimer-title">Legal Disclaimer &amp; Disclosures</h1>
            <p className="disclaimer-subtitle">
              Comprehensive transparency guidelines, mutual fund risk parameters, and statutory terms of engagement for KDJ Wealth investors.
            </p>
            <div className="disclaimer-meta-tags">
              <span className="meta-pill arn-pill">
                <strong>AMFI ARN:</strong> 153803
              </span>
              <span className="meta-pill status-pill">
                <strong>Category:</strong> Mutual Fund Distributor
              </span>
              <span className="meta-pill date-pill">
                <strong>Last Updated:</strong> August 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Legal Content Layout ── */}
      <section className="disclaimer-content-section">
        <div className="container disclaimer-layout-grid">
          {/* Sticky Navigation Sidebar */}
          <aside className="disclaimer-sidebar">
            <div className="sidebar-sticky-card">
              <div className="sidebar-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="8" y1="6" x2="21" y2="6"/>
                  <line x1="8" y1="12" x2="21" y2="12"/>
                  <line x1="8" y1="18" x2="21" y2="18"/>
                  <line x1="3" y1="6" x2="3.01" y2="6"/>
                  <line x1="3" y1="12" x2="3.01" y2="12"/>
                  <line x1="3" y1="18" x2="3.01" y2="18"/>
                </svg>
                <span>Table of Contents</span>
              </div>
              <nav className="sidebar-nav">
                {SECTIONS.map((sec, idx) => (
                  <button
                    key={sec.id}
                    type="button"
                    className={`sidebar-nav-link ${activeSection === sec.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(sec.id)}
                  >
                    <span className="nav-num">{idx + 1}</span>
                    <span className="nav-label">{sec.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Legal Documents Body */}
          <main className="disclaimer-main-body">
            {/* Critical Statutory Alert Banner */}
            <div className="statutory-risk-banner">
              <div className="risk-banner-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <div className="risk-banner-text">
                <span className="risk-tag">Statutory Mandate (SEBI / AMFI)</span>
                <h3>Mutual Fund investments are subject to market risks, read all scheme related documents carefully before investing.</h3>
              </div>
            </div>

            {/* 1. Distributor Status */}
            <article id="distributor-status" className="legal-article-card">
              <div className="article-header">
                <span className="article-num">01</span>
                <h2>Disclaimer &amp; Distributor Status</h2>
              </div>
              <div className="article-body">
                <div className="highlight-callout">
                  <strong>KDJ Wealth</strong> is an <strong>AMFI-Registered Mutual Fund Distributor (ARN: 153803)</strong>.
                </div>
                <p>
                  The information, content, materials, articles, market commentary, educational resources, tools, calculators, illustrations, performance data, scheme information and other materials available on this website are provided for general informational and educational purposes only.
                </p>
                <p>
                  They are intended to help investors understand mutual funds and related investment concepts and <strong>should not be construed as investment advice, financial planning advice, tax advice, legal advice</strong>, or a recommendation, solicitation or offer to buy, sell or otherwise transact in any particular security, mutual fund scheme or financial product.
                </p>
                <p>
                  KDJ Wealth acts as a Mutual Fund Distributor and distributes mutual fund products of various Asset Management Companies (AMCs). <strong>KDJ Wealth is not a SEBI-registered Investment Adviser</strong> unless expressly stated otherwise. Any information or assistance provided through this website or our related services should not be interpreted as independent investment advisory services.
                </p>
              </div>
            </article>

            {/* 2. Investment Risk */}
            <article id="investment-risk" className="legal-article-card">
              <div className="article-header">
                <span className="article-num">02</span>
                <h2>Investment Risk</h2>
              </div>
              <div className="article-body">
                <p className="lead-paragraph">
                  Mutual Fund investments are subject to market risks, read all scheme related documents carefully before investing.
                </p>
                <p>
                  Mutual fund investments are subject to market, credit, liquidity, interest-rate, concentration, volatility and other risks depending upon the nature and underlying investments of the scheme. The value of investments may go up or down, and investors may receive returns that are lower than the amount invested. There is no assurance or guarantee that the investment objective of any mutual fund scheme will be achieved.
                </p>
                <div className="risk-factors-grid">
                  <div className="risk-factor-box">
                    <span className="rf-title">Market &amp; Volatility Risk</span>
                    <p>Asset values fluctuate with macroeconomic cycles, global events, and equity markets.</p>
                  </div>
                  <div className="risk-factor-box">
                    <span className="rf-title">Interest Rate &amp; Credit Risk</span>
                    <p>Debt instruments are exposed to yield changes and borrower default probabilities.</p>
                  </div>
                  <div className="risk-factor-box">
                    <span className="rf-title">Liquidity Risk</span>
                    <p>Certain securities may experience temporary trading volume or exit constraints.</p>
                  </div>
                  <div className="risk-factor-box">
                    <span className="rf-title">Concentration Risk</span>
                    <p>Sectoral or thematic funds carry exposure tied directly to specific industry outcomes.</p>
                  </div>
                </div>
                <p>
                  <strong>Past performance</strong> of a mutual fund scheme, benchmark, asset class or investment strategy is <strong>not indicative of future performance</strong>. Historical returns, illustrations, examples or projections, wherever displayed, are provided only for reference and should not be interpreted as a guarantee or expectation of future returns.
                </p>
                <div className="notice-box">
                  <p>
                    Investors should carefully read the <strong>Scheme Information Document (SID)</strong>, <strong>Statement of Additional Information (SAI)</strong>, <strong>Key Information Memorandum (KIM)</strong> and other applicable scheme-related documents before making any investment decision.
                  </p>
                </div>
              </div>
            </article>

            {/* 3. No Guarantee of Returns */}
            <article id="no-guarantee" className="legal-article-card">
              <div className="article-header">
                <span className="article-num">03</span>
                <h2>No Guarantee of Returns</h2>
              </div>
              <div className="article-body">
                <p>
                  <strong>KDJ Wealth does not guarantee, assure or promise</strong> any fixed or assured return, profit, capital protection or performance in relation to any mutual fund scheme or investment.
                </p>
                <p>
                  Investment decisions should be made after considering the investor&apos;s financial objectives, investment horizon, risk tolerance, financial circumstances and suitability of the relevant product.
                </p>
              </div>
            </article>

            {/* 4. Information Accuracy */}
            <article id="information-accuracy" className="legal-article-card">
              <div className="article-header">
                <span className="article-num">04</span>
                <h2>Information Accuracy</h2>
              </div>
              <div className="article-body">
                <p>
                  KDJ Wealth makes reasonable efforts to provide information that is accurate and up to date. However, information displayed on this website, including NAVs, returns, performance figures, scheme details, market data, calculations, illustrations, reports and other information, may be obtained from AMCs, AMFI, registrars, exchanges, regulatory authorities, publicly available sources or other third-party sources.
                </p>
                <p>
                  Such information may be subject to delays, revisions, omissions or errors. KDJ Wealth does not warrant or guarantee that all information is complete, accurate, current or error-free and shall not be responsible for any loss arising solely from reliance on such information.
                </p>
                <p className="subtle-note">
                  Wherever applicable, the source and date of information should be considered before relying upon any data or performance information.
                </p>
              </div>
            </article>

            {/* 5. Suitability of Investments */}
            <article id="suitability" className="legal-article-card">
              <div className="article-header">
                <span className="article-num">05</span>
                <h2>Suitability of Investments</h2>
              </div>
              <div className="article-body">
                <p>
                  Different investments carry different levels and types of risk and may not be suitable for every investor.
                </p>
                <p>
                  Information provided through this website is general in nature and does not take into account the individual circumstances, financial objectives, investment experience, risk appetite, liquidity requirements or tax situation of any particular investor.
                </p>
                <p>
                  Investors should independently evaluate the suitability of any investment and, where appropriate, consult a suitably qualified and registered professional before making investment decisions.
                </p>
              </div>
            </article>

            {/* 6. Third-Party Links and Content */}
            <article id="third-party" className="legal-article-card">
              <div className="article-header">
                <span className="article-num">06</span>
                <h2>Third-Party Links and Content</h2>
              </div>
              <div className="article-body">
                <p>
                  This website may contain links to websites, applications, platforms, tools or other resources operated by third parties (such as AMFI, CVLKRA, SEBI, and partner AMCs). Such links are provided for convenience and informational purposes only.
                </p>
                <p>
                  KDJ Wealth does not control, guarantee, endorse or assume responsibility for the accuracy, availability, security, privacy practices or content of third-party websites or services. Accessing such third-party resources is at the user&apos;s own discretion and risk.
                </p>
              </div>
            </article>

            {/* 7. Calculators, Illustrations and Examples */}
            <article id="calculators" className="legal-article-card">
              <div className="article-header">
                <span className="article-num">07</span>
                <h2>Calculators, Illustrations and Examples</h2>
              </div>
              <div className="article-body">
                <p>
                  Any calculators, projections, illustrations, examples, charts or simulations available on this website (such as SIP, Lumpsum, SWP, and Retirement planning tools) are provided solely for educational and illustrative purposes.
                </p>
                <p>
                  Actual investment outcomes may differ materially from any illustration or calculation due to market conditions, expenses, taxes, change in interest rates, scheme performance and other factors. Such illustrations should not be considered a guarantee, prediction or assurance of actual returns.
                </p>
              </div>
            </article>

            {/* 8. Performance and Market Information */}
            <article id="performance" className="legal-article-card">
              <div className="article-header">
                <span className="article-num">08</span>
                <h2>Performance and Market Information</h2>
              </div>
              <div className="article-body">
                <p>
                  Any market views, commentary, research-based observations or performance information presented on this website represent information available at the time of publication and may change as market conditions change.
                </p>
                <p>
                  Such information should not be interpreted as a promise, prediction or assurance of future market movements or investment performance.
                </p>
                <p>
                  Where performance or statistical information is presented, investors should consider the relevant period, benchmark, methodology, assumptions and applicable disclosures before drawing conclusions.
                </p>
              </div>
            </article>

            {/* 9. Limitation of Liability */}
            <article id="liability" className="legal-article-card">
              <div className="article-header">
                <span className="article-num">09</span>
                <h2>Limitation of Liability</h2>
              </div>
              <div className="article-body">
                <p>
                  To the maximum extent permitted under applicable law, KDJ Wealth, its partners, directors, employees, representatives and affiliates shall not be liable for any direct, indirect, incidental, special, consequential or other loss, damage, cost or expense arising from or in connection with:
                </p>
                <ul className="legal-bullet-list">
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>The use of or inability to use this website;</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>Reliance on any information, data, content, calculation, illustration or material available on the website;</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>Investment decisions made by an investor;</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>Changes in market conditions or investment values;</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>Inaccuracies, omissions, delays or interruptions in third-party information; or</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>Any technical, operational or service-related interruption.</span>
                  </li>
                </ul>
                <p className="subtle-note">
                  Nothing contained in this disclaimer is intended to exclude or limit any liability that cannot lawfully be excluded or limited under applicable law.
                </p>
              </div>
            </article>

            {/* 10. Regulatory and Compliance Disclosure */}
            <article id="regulatory" className="legal-article-card">
              <div className="article-header">
                <span className="article-num">10</span>
                <h2>Regulatory and Compliance Disclosure</h2>
              </div>
              <div className="article-body">
                <p>
                  KDJ Wealth operates as an AMFI-Registered Mutual Fund Distributor and undertakes its distribution activities in accordance with applicable laws, regulations, circulars, guidelines and codes of conduct issued by relevant regulatory and industry bodies, including <strong>SEBI</strong> and <strong>AMFI</strong>, as applicable.
                </p>
                <p>
                  KDJ Wealth does not represent that every investment product or service mentioned on this website is suitable for every investor.
                </p>
                <p>
                  Investors are encouraged to verify the relevant scheme and distributor-related information from official sources and carefully review all applicable documents before investing.
                </p>
              </div>
            </article>

            {/* 11. Intellectual Property */}
            <article id="intellectual-property" className="legal-article-card">
              <div className="article-header">
                <span className="article-num">11</span>
                <h2>Intellectual Property</h2>
              </div>
              <div className="article-body">
                <p>
                  Unless otherwise stated, the content, text, graphics, logos, designs, photographs, reports, documents, software, website elements and other materials available on this website are owned by or licensed to KDJ Wealth and are protected under applicable intellectual property laws.
                </p>
                <p>
                  No material from this website may be reproduced, modified, copied, distributed, published, transmitted or commercially exploited without prior written permission, except where permitted under applicable law.
                </p>
              </div>
            </article>

            {/* 12. Changes to this Disclaimer & Acceptance */}
            <article id="modifications" className="legal-article-card">
              <div className="article-header">
                <span className="article-num">12</span>
                <h2>Changes to this Disclaimer &amp; Acceptance</h2>
              </div>
              <div className="article-body">
                <p>
                  KDJ Wealth reserves the right to modify, update or amend this Disclaimer from time to time to reflect changes in applicable laws, regulations, business practices or website functionality.
                </p>
                <p>
                  Any updated version will be published on this website and shall become effective upon publication. Users are encouraged to review this page periodically.
                </p>
                <div className="acceptance-box">
                  <h4>Acceptance of Terms</h4>
                  <p>
                    By accessing, browsing or using this website and its services, you acknowledge that you have read, understood and agreed to this Disclaimer and the other applicable policies and terms published on the website.
                  </p>
                  <p>
                    If you do not agree with any part of this Disclaimer, you should discontinue use of the website and its services.
                  </p>
                </div>
              </div>
            </article>

            {/* ── Official Compliance Seal Card ── */}
            <div className="compliance-seal-card">
              <div className="seal-left">
                <div className="seal-emblem">
                  <span>KDJ</span>
                </div>
                <div className="seal-info">
                  <h3>KDJ Capital Research</h3>
                  <p className="seal-role">AMFI-Registered Mutual Fund Distributor</p>
                  <p className="seal-arn">
                    ARN Registration Number: <strong>153803</strong>
                  </p>
                </div>
              </div>
              <div className="seal-right">
                <span className="seal-date-badge">Effective Date: August 2026</span>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
