import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './GrievancePolicyPage.css';

const SECTIONS = [
  { id: 'commitment', label: '1. Our Commitment' },
  { id: 'how-to-raise', label: '2. How to Raise a Grievance' },
  { id: 'info-to-include', label: '3. Information to Include' },
  { id: 'redressal-process', label: '4. Redressal Process' },
  { id: 'timeline', label: '5. Resolution Timeline' },
  { id: 'amc-rta-scope', label: '6. AMC / RTA Entities Scope' },
  { id: 'sebi-scores', label: '7. Escalation to SEBI SCORES' },
  { id: 'smart-odr', label: '8. Online Dispute Resolution (ODR)' },
  { id: 'confidentiality', label: '9. Confidentiality & Privacy' },
  { id: 'fraud-security', label: '10. Fraud & Security Alerts' },
  { id: 'important-note', label: '11. Important Disclosures' },
  { id: 'contact-details', label: '12. Regulatory Framework' }
];

export default function GrievancePolicyPage() {
  const [activeSection, setActiveSection] = useState('commitment');

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
    <div className="grievance-page">
      <Helmet>
        <title>Investor Grievance Redressal Policy | KDJ Capital Research</title>
        <meta
          name="description"
          content="Official Investor Grievance Redressal Policy, timelines, and resolution mechanisms for KDJ Capital Research (AMFI Registered Mutual Fund Distributor ARN: 153803)."
        />
        <link rel="canonical" href="https://www.kdjcapitalresearch.com/grievance-policy" />
      </Helmet>

      {/* ── Light Luxury Page Header ── */}
      <section className="grievance-hero">
        <div className="container">
          <div className="grievance-hero-inner">
            <div className="grievance-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Investor Protection &amp; Redressal Framework</span>
            </div>
            <h1 className="grievance-title">Investor Grievance Policy</h1>
            <p className="grievance-subtitle">
              Fair, transparent, and prompt redressal mechanism for all investors associated with KDJ Capital Research.
            </p>
            <div className="grievance-meta-tags">
              <span className="meta-pill arn-pill">
                <strong>AMFI ARN:</strong> 153803
              </span>
              <span className="meta-pill status-pill">
                <strong>Category:</strong> Mutual Fund Distributor
              </span>
              <span className="meta-pill date-pill">
                <strong>Effective &amp; Updated:</strong> 16 August 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Policy Content Layout ── */}
      <section className="grievance-content-section">
        <div className="container grievance-layout-grid">
          {/* Sticky Navigation Sidebar */}
          <aside className="grievance-sidebar">
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
                <span>Policy Outline</span>
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

          {/* Main Legal Policy Body */}
          <main className="grievance-main-body">
            {/* 1. Our Commitment */}
            <article id="commitment" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">01</span>
                <h2>Our Commitment</h2>
              </div>
              <div className="article-body">
                <p className="lead-p">
                  At <strong>KDJ Capital Research</strong>, we value the trust of our investors and are committed to providing fair, transparent, and timely service.
                </p>
                <p>
                  We take investor complaints and grievances seriously and endeavour to resolve them in a fair and appropriate manner.
                </p>
                <p>
                  This policy explains how an investor can raise a grievance with KDJ Capital Research and the structured process followed for addressing such grievances.
                </p>
              </div>
            </article>

            {/* 2. How to Raise a Grievance */}
            <article id="how-to-raise" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">02</span>
                <h2>How to Raise a Grievance</h2>
              </div>
              <div className="article-body">
                <p>
                  An investor having any complaint or grievance regarding the services provided by KDJ Capital Research may submit a formal complaint through our designated support channels on our official <strong>Contact &amp; Support</strong> page.
                </p>
                <div className="highlight-callout">
                  <strong>Standard Redressal Practice:</strong> Investors are encouraged to submit their grievances through recorded written communications with complete transaction details so that the complaint can be properly recorded, referenced, investigated, and addressed with complete documentation.
                </div>
              </div>
            </article>

            {/* 3. Information to Include in a Complaint */}
            <article id="info-to-include" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">03</span>
                <h2>Information to Include in a Complaint</h2>
              </div>
              <div className="article-body">
                <p>
                  To help us understand and resolve the matter efficiently, investors are requested to provide, wherever applicable:
                </p>
                <div className="checklist-grid">
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Full name of the investor</span>
                  </div>
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Registered mobile number</span>
                  </div>
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Registered email address</span>
                  </div>
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>PAN or Folio number, if relevant</span>
                  </div>
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Details of the transaction or service involved</span>
                  </div>
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Date of the incident or transaction</span>
                  </div>
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>A clear, factual description of the grievance</span>
                  </div>
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Relevant documents, statements, or screenshots</span>
                  </div>
                  <div className="checklist-item full-width">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Any other information that may assist in resolving the matter</span>
                  </div>
                </div>

                {/* Security Warning Box */}
                <div className="security-alert-box">
                  <div className="sec-alert-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  </div>
                  <div className="sec-alert-content">
                    <h4>Confidentiality &amp; Security Warning</h4>
                    <p>
                      Investors should <strong>never share passwords, OTPs, PINs, or other confidential authentication credentials</strong> as part of a grievance communication.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* 4. Grievance Redressal Process (5-Step Visual Timeline) */}
            <article id="redressal-process" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">04</span>
                <h2>Grievance Redressal Process</h2>
              </div>
              <div className="article-body">
                <p>
                  Once a grievance is received, KDJ Capital Research will review the matter and take appropriate steps to address it through our standard 5-step framework:
                </p>

                <div className="process-timeline">
                  {/* Step 1 */}
                  <div className="timeline-step-card">
                    <div className="step-badge">Step 1</div>
                    <div className="step-details">
                      <h4>Receipt of Complaint</h4>
                      <p>The grievance will be received, acknowledged, and recorded for formal review.</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="timeline-step-card">
                    <div className="step-badge">Step 2</div>
                    <div className="step-details">
                      <h4>Review &amp; Examination</h4>
                      <p>The complaint will be examined thoroughly along with the relevant transaction details, internal records, and supporting documentation.</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="timeline-step-card">
                    <div className="step-badge">Step 3</div>
                    <div className="step-details">
                      <h4>Coordination, Where Required</h4>
                      <p>If the matter relates to an AMC, RTA, bank, payment service provider, KYC agency, or another concerned entity, KDJ Capital Research may coordinate with the relevant entity and assist the investor in taking the matter forward.</p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="timeline-step-card">
                    <div className="step-badge">Step 4</div>
                    <div className="step-details">
                      <h4>Response and Resolution</h4>
                      <p>After reviewing the grievance, an appropriate written response will be provided to the investor. Where the matter requires action or information from another entity, the investor will be updated accordingly.</p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="timeline-step-card">
                    <div className="step-badge">Step 5</div>
                    <div className="step-details">
                      <h4>Closure &amp; Confirmation</h4>
                      <p>The grievance will be treated as resolved or closed once an appropriate response or resolution has been provided, or the matter has been appropriately escalated to the concerned entity or applicable grievance mechanism.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* 5. Grievance Resolution Timeline */}
            <article id="timeline" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">05</span>
                <h2>Grievance Resolution Timeline</h2>
              </div>
              <div className="article-body">
                <div className="timeline-highlight-box">
                  <div className="th-days">7 Working Days</div>
                  <div className="th-text">
                    <strong>Direct Resolution Target:</strong> Where a grievance can be resolved directly by KDJ Capital Research, we will endeavour to provide an appropriate response within 7 working days.
                  </div>
                </div>
                <p>
                  KDJ Capital Research will endeavour to acknowledge and address investor grievances as promptly as reasonably possible.
                </p>
                <p>
                  If resolution requires information, confirmation, or action from an Asset Management Company (AMC), Registrar &amp; Transfer Agent (RTA), bank, or another third party, additional time may be required.
                </p>
                <p className="subtle-note">
                  Any applicable timeline prescribed by SEBI, AMFI, the concerned AMC/RTA, or other regulatory authority shall prevail.
                </p>
              </div>
            </article>

            {/* 6. Grievances Relating to AMC / RTA / Other Entities */}
            <article id="amc-rta-scope" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">06</span>
                <h2>Grievances Relating to AMC / RTA / Other Entities</h2>
              </div>
              <div className="article-body">
                <p>
                  Certain operational and regulatory matters are directly controlled by the concerned AMC, RTA, bank, payment service provider, or depository. Such matters may include, among others:
                </p>
                <div className="scope-tags-container">
                  <span className="scope-tag">Scheme-level transaction processing</span>
                  <span className="scope-tag">Redemption processing &amp; payouts</span>
                  <span className="scope-tag">NAV-related computations</span>
                  <span className="scope-tag">Folio maintenance &amp; consolidation</span>
                  <span className="scope-tag">Account statements (CAS / SOA)</span>
                  <span className="scope-tag">KYC modification &amp; validation</span>
                  <span className="scope-tag">Bank mandate / NACH registration</span>
                  <span className="scope-tag">Payment or settlement clearing</span>
                </div>
                <p>
                  Where appropriate, KDJ Capital Research will actively assist the investor in communicating with the concerned entity.
                </p>
                <p className="notice-box-text">
                  <strong>Please Note:</strong> KDJ Capital Research cannot independently change, modify, or override official records, decisions, or operational processes controlled directly by another entity.
                </p>
              </div>
            </article>

            {/* 7. Escalation to SEBI – SCORES */}
            <article id="sebi-scores" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">07</span>
                <h2>Escalation to SEBI – SCORES</h2>
              </div>
              <div className="article-body">
                <p>
                  If an investor is not satisfied with the resolution of a grievance, or the grievance remains unresolved, the investor may approach the <strong>Securities and Exchange Board of India (SEBI)</strong> through its centralized <strong>SCORES</strong> platform, subject to the applicable regulatory process.
                </p>
                <p className="subtle-note">
                  Investors should ordinarily first approach the concerned intermediary / entity for resolution of their grievance before escalating.
                </p>

                <div className="portal-escalation-card">
                  <div className="portal-card-header">
                    <span className="portal-badge">SEBI Regulatory Portal</span>
                    <h3>SEBI SCORES (SEBI Complaints Redress System)</h3>
                  </div>
                  <p>
                    Investors can use SCORES to lodge and track complaints online in accordance with SEBI&apos;s applicable grievance redressal framework.
                  </p>
                  <a
                    href="https://scores.sebi.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portal-link-btn"
                  >
                    <span>Visit SEBI SCORES Portal</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            {/* 8. Online Dispute Resolution – SMART ODR */}
            <article id="smart-odr" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">08</span>
                <h2>Online Dispute Resolution – SMART ODR</h2>
              </div>
              <div className="article-body">
                <p>
                  Where applicable, investors may also use the <strong>SMART Online Dispute Resolution (ODR)</strong> mechanism for eligible securities-market disputes.
                </p>

                <div className="portal-escalation-card">
                  <div className="portal-card-header">
                    <span className="portal-badge">Securities Market Portal</span>
                    <h3>SMART ODR Portal</h3>
                  </div>
                  <p>
                    A unified online dispute resolution platform designed for resolving eligible investor claims and disputes efficiently through conciliation and arbitration.
                  </p>
                  <a
                    href="https://smartodr.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portal-link-btn"
                  >
                    <span>Access SMART ODR Portal</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
                <p className="subtle-note">
                  The applicable eligibility requirements, procedures, and terms of the ODR mechanism will apply.
                </p>
              </div>
            </article>

            {/* 9. Confidentiality and Personal Information */}
            <article id="confidentiality" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">09</span>
                <h2>Confidentiality and Personal Information</h2>
              </div>
              <div className="article-body">
                <p>
                  Information provided by an investor while raising a grievance will be used solely for the purpose of reviewing, investigating, and resolving the complaint and for complying with applicable legal and regulatory requirements.
                </p>
                <p>
                  Where necessary, relevant information may be shared with the concerned AMC, RTA, bank, service provider, regulator, or other appropriate entity for resolving the grievance.
                </p>
                <p>
                  KDJ Capital Research will handle all such information in strict accordance with its <strong>Privacy Policy</strong> and applicable statutory standards.
                </p>
              </div>
            </article>

            {/* 10. Fraud or Unauthorized Transactions */}
            <article id="fraud-security" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">10</span>
                <h2>Fraud or Unauthorized Transactions</h2>
              </div>
              <div className="article-body">
                <p>
                  If an investor suspects an unauthorized transaction, fraud, misuse of personal information, or any suspicious account activity, the investor should <strong>immediately contact</strong>:
                </p>
                <ul className="fraud-contact-list">
                  <li>
                    <div className="fraud-dot">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                      </svg>
                    </div>
                    <div>
                      <strong>KDJ Capital Research:</strong> Immediate notification through our designated support channels on our official Contact page.
                    </div>
                  </li>
                  <li>
                    <div className="fraud-dot">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                      </svg>
                    </div>
                    <div>
                      <strong>The Concerned AMC / RTA:</strong> To freeze or verify transaction folios immediately.
                    </div>
                  </li>
                  <li>
                    <div className="fraud-dot">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                      </svg>
                    </div>
                    <div>
                      <strong>Relevant Bank or Payment Service Provider:</strong> Where financial account or banking mandate unauthorized debits occur.
                    </div>
                  </li>
                </ul>
                <p>
                  Investors should also take any other appropriate action required under applicable cybersecurity and banking regulations.
                </p>
                <div className="security-alert-box">
                  <div className="sec-alert-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                  <div className="sec-alert-content">
                    <h4>Security Reminder</h4>
                    <p>
                      Investors should <strong>never share OTPs, passwords, PINs, or other confidential authentication credentials</strong> with anyone claiming to represent KDJ Capital Research.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* 11. Important Note */}
            <article id="important-note" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">11</span>
                <h2>Important Disclosures</h2>
              </div>
              <div className="article-body">
                <p>
                  The grievance redressal process is intended to address service-related complaints regarding the distribution support provided by KDJ Capital Research.
                </p>
                <p>
                  A grievance <strong>does not guarantee reversal of a valid transaction, compensation for market losses, or any particular investment outcome</strong>.
                </p>
                <div className="statutory-note-box">
                  <strong>Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.</strong>
                </div>
              </div>
            </article>

            {/* 12. Regulatory Framework & Status */}
            <article id="contact-details" className="compliance-seal-card">
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
                <span className="seal-date-badge">Effective / Last Updated: 16 August 2026</span>
              </div>
            </article>
          </main>
        </div>
      </section>
    </div>
  );
}
