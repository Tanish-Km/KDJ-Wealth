import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './DisclosurePage.css';

const SECTIONS = [
  { id: 'amc-commission', label: '1. Commission from AMCs' },
  { id: 'no-upfront', label: '2. No Upfront Commission' },
  { id: 'regular-vs-direct', label: '3. Regular Plan vs Direct Plan' },
  { id: 'conflict-interest', label: '4. Conflict of Interest' },
  { id: 'commission-info', label: '5. Commission Info & CAS' },
  { id: 'transaction-charges', label: '6. Transaction Charges' },
  { id: 'changes-disclosure', label: '7. Changes to Disclosure' },
  { id: 'regulatory-inquiries', label: '8. Regulatory Inquiries' }
];

export default function DisclosurePage() {
  const [activeSection, setActiveSection] = useState('amc-commission');

  // Scrollspy to highlight active section in sticky sidebar
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
    <div className="disclosure-page">
      <Helmet>
        <title>Commission &amp; Distribution Disclosure | KDJ Capital Research</title>
        <meta
          name="description"
          content="Official Commission &amp; Distribution Remuneration Disclosure for KDJ Capital Research (AMFI Registered Mutual Fund Distributor ARN: 153803)."
        />
        <link rel="canonical" href="https://www.kdjcapitalresearch.com/disclosure" />
      </Helmet>

      {/* ── Light Luxury Page Header ── */}
      <section className="disclosure-hero">
        <div className="container">
          <div className="disclosure-hero-inner">
            <div className="disclosure-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              <span>Regulatory Transparency &amp; Remuneration</span>
            </div>
            <h1 className="disclosure-title">Commission &amp; Distribution Disclosure</h1>
            <p className="disclosure-subtitle">
              At KDJ Capital Research, we believe transparency is essential to responsible mutual fund distribution. This Disclosure outlines our remuneration structure and distribution model.
            </p>
            <div className="disclosure-meta-tags">
              <span className="meta-pill arn-pill">
                <strong>AMFI ARN:</strong> 153803
              </span>
              <span className="meta-pill status-pill">
                <strong>Category:</strong> Mutual Fund Distributor
              </span>
              <span className="meta-pill date-pill">
                <strong>Last Updated:</strong> 16 August 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Policy Content Layout ── */}
      <section className="disclosure-content-section">
        <div className="container disclosure-layout-grid">
          {/* Sticky Navigation Sidebar */}
          <aside className="disclosure-sidebar">
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
                <span>Disclosure Outline</span>
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
                    <span className="nav-label">{sec.label.replace(/^\d+\.\s*/, '')}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Legal Disclosure Body */}
          <main className="disclosure-main-body">
            {/* Overview Intro Box */}
            <div className="disclosure-intro-card">
              <div className="intro-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="intro-text">
                <p>
                  <strong>KDJ Capital Research</strong> is an AMFI-Registered Mutual Fund Distributor operating under <strong>ARN-153803</strong>.
                </p>
                <p>
                  At KDJ Capital Research, we believe transparency is essential to responsible mutual fund distribution. This Disclosure explains the nature of our remuneration, our distribution model, and the potential conflict of interest arising from distributor commissions.
                </p>
              </div>
            </div>

            {/* 1. Commission from Asset Management Companies */}
            <article id="amc-commission" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">01</span>
                <h2>Commission from Asset Management Companies</h2>
              </div>
              <div className="article-body">
                <p className="lead-p">
                  KDJ Capital Research receives <strong>trail commission</strong> from Asset Management Companies (AMCs) for eligible investments made by investors through Regular Plans of mutual fund schemes distributed by us.
                </p>
                <div className="features-bullet-grid">
                  <div className="feat-item">
                    <div className="feat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Paid directly by respective AMCs out of scheme expense ratios</span>
                  </div>
                  <div className="feat-item">
                    <div className="feat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>NOT separately collected from the investor as an advisory fee</span>
                  </div>
                  <div className="feat-item full-width">
                    <div className="feat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Commission rates vary across AMCs, scheme types, asset categories, and regulatory caps</span>
                  </div>
                </div>
                <p className="subtle-note">
                  Commission rates may change from time to time in accordance with the applicable SEBI regulatory framework and individual AMC policies.
                </p>
              </div>
            </article>

            {/* 2. No Upfront Commission */}
            <article id="no-upfront" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">02</span>
                <h2>No Upfront Commission</h2>
              </div>
              <div className="article-body">
                <p>
                  Mutual fund distribution in India strictly follows the applicable <strong>full-trail commission framework</strong>.
                </p>
                <div className="highlight-callout">
                  <strong>Regulatory Standard:</strong> KDJ Capital Research <strong>does NOT receive upfront commission</strong> or upfronting of trail commission, except where specifically permitted under the applicable SEBI/AMFI regulatory framework.
                </div>
                <p>
                  AMFI guidelines mandate that mutual fund distributors receive trail commission on investments mobilised under Regular Plans solely from the AMCs with whom they are empanelled, calculated on a daily net asset value (AUM) basis.
                </p>
              </div>
            </article>

            {/* 3. Regular Plan and Direct Plan */}
            <article id="regular-vs-direct" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">03</span>
                <h2>Regular Plan and Direct Plan</h2>
              </div>
              <div className="article-body">
                <p>
                  KDJ Capital Research distributes mutual fund schemes under the <strong>Regular Plan</strong> in its capacity as an AMFI-Registered Mutual Fund Distributor.
                </p>
                <div className="comparison-cards-grid">
                  <div className="plan-card regular-plan">
                    <div className="plan-badge">Distributed by KDJ</div>
                    <h4>Regular Plan</h4>
                    <p>Carries distributor support, portfolio tracking, onboarding assistance, and distributor trail commission paid by the AMC.</p>
                  </div>
                  <div className="plan-card direct-plan">
                    <div className="plan-badge non-distrib">Self-Directed</div>
                    <h4>Direct Plan</h4>
                    <p>Do not carry distributor commission and are not distributed through KDJ Capital Research. Lower Total Expense Ratio (TER).</p>
                  </div>
                </div>
                <p className="subtle-note">
                  Investors should understand the differences between Regular and Direct Plans, including their respective expense structures and servicing models, before making an investment decision.
                </p>
              </div>
            </article>

            {/* 4. Conflict of Interest */}
            <article id="conflict-interest" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">04</span>
                <h2>Conflict of Interest</h2>
              </div>
              <div className="article-body">
                <p>
                  Since KDJ Capital Research receives trail commission from AMCs for eligible Regular Plan investments, a <strong>potential conflict of interest</strong> may arise.
                </p>
                <div className="risk-warning-card">
                  <div className="risk-card-head">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                    <h4>Non-Endorsement &amp; Objective Suitability</h4>
                  </div>
                  <p>
                    The commission received by KDJ Capital Research does not, by itself, represent an indication of the quality, performance, suitability, or expected return of any mutual fund scheme.
                  </p>
                </div>
                <p>
                  Investment decisions should always be based on the investor&apos;s own investment objective, risk profile, financial circumstances, investment horizon, and the specific features and risks of the relevant scheme.
                </p>
              </div>
            </article>

            {/* 5. Commission Information */}
            <article id="commission-info" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">05</span>
                <h2>Commission Information &amp; CAS Transparency</h2>
              </div>
              <div className="article-body">
                <p>
                  Commission rates are subject to change and may differ from one scheme or AMC to another based on asset class (equity, debt, hybrid, solution-oriented) and investor categorization.
                </p>
                <div className="features-bullet-grid">
                  <div className="feat-item">
                    <div className="feat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Investors may request scheme-specific distributor commission rates from KDJ Capital Research at any time.</span>
                  </div>
                  <div className="feat-item">
                    <div className="feat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Investors can refer to their half-yearly <strong>Consolidated Account Statement (CAS)</strong> issued by RTAs/depositories.</span>
                  </div>
                </div>
                <p className="subtle-note">
                  The half-yearly CAS discloses the exact gross commission paid by AMCs to distributors against the investor&apos;s folios in complete compliance with SEBI transparency norms.
                </p>
              </div>
            </article>

            {/* 6. Transaction Charges */}
            <article id="transaction-charges" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">06</span>
                <h2>Transaction Charges</h2>
              </div>
              <div className="article-body">
                <p>
                  Where applicable and where KDJ Capital Research has opted to levy transaction charges, such charges are subject to the strict limits and conditions prescribed by SEBI and AMFI from time to time.
                </p>
                <div className="highlight-callout">
                  Any applicable transaction charge is disclosed, deducted at the AMC subscription level, and processed strictly in accordance with the prevailing regulatory framework.
                </div>
              </div>
            </article>

            {/* 7. Changes to this Disclosure */}
            <article id="changes-disclosure" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">07</span>
                <h2>Changes to this Disclosure</h2>
              </div>
              <div className="article-body">
                <p>
                  Commission structures, regulatory requirements, and applicable mutual fund distribution practices may evolve over time.
                </p>
                <p>
                  KDJ Capital Research will update this Disclosure when material changes occur to its remuneration structure or when required by applicable SEBI/AMFI regulatory mandates.
                </p>
              </div>
            </article>

            {/* 8. Regulatory Inquiries */}
            <article id="regulatory-inquiries" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">08</span>
                <h2>Regulatory Inquiries &amp; Inquiries</h2>
              </div>
              <div className="article-body">
                <p>
                  If you have questions, inquiries, or require scheme-specific commission disclosure details, you may reach out through our official communication channels on our designated <strong>Contact &amp; Support</strong> page.
                </p>
                <div className="acceptance-box">
                  <h4>Associated Regulatory Policies</h4>
                  <p>
                    This Disclosure should be read together with KDJ Capital Research&apos;s <strong>Disclaimer</strong>, <strong>Terms &amp; Conditions</strong>, <strong>Privacy Policy</strong>, and other applicable statutory disclosures.
                  </p>
                </div>
              </div>
            </article>

            {/* ── Official Compliance Seal Footer Card ── */}
            <div className="compliance-seal-card">
              <div className="seal-left">
                <div className="seal-emblem">
                  <span>KDJ</span>
                </div>
                <div className="seal-info">
                  <h3>KDJ Capital Research</h3>
                  <p className="seal-role">AMFI Registered Mutual Fund Distributor</p>
                  <p className="seal-arn">
                    ARN Registration: <strong>153803</strong>
                  </p>
                </div>
              </div>
              <div className="seal-right">
                <span className="seal-date-badge">Last Updated: 16 August 2026</span>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
