import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './PrivacyPolicyPage.css';

const SECTIONS = [
  { id: 'about-kdj', label: '1. About KDJ Wealth' },
  { id: 'scope', label: '2. Scope of Policy' },
  { id: 'info-collected', label: '3. Information We Collect' },
  { id: 'why-collect', label: '4. Why We Collect & Use Info' },
  { id: 'legal-basis', label: '5. Legal Basis for Processing' },
  { id: 'cookies', label: '6. Cookies & Tracking' },
  { id: 'how-we-share', label: '7. How We Share Information' },
  { id: 'third-party-links', label: '8. Third-Party Links & Services' },
  { id: 'aadhaar-identity', label: '9. Aadhaar & Identity Data' },
  { id: 'data-security', label: '10. Data Security Safeguards' },
  { id: 'data-retention', label: '11. Data Retention' },
  { id: 'your-rights', label: '12. Your Rights & Choices' },
  { id: 'marketing', label: '13. Marketing Communications' },
  { id: 'children-privacy', label: '14. Children\'s Privacy' },
  { id: 'user-content', label: '15. User-Submitted Content' },
  { id: 'data-transfers', label: '16. Cross-Border Data Transfers' },
  { id: 'data-breach', label: '17. Data Breach Protocols' },
  { id: 'accuracy', label: '18. Accuracy of Information' },
  { id: 'policy-changes', label: '19. Changes to Privacy Policy' },
  { id: 'governing-law', label: '20. Governing Law' },
  { id: 'contact-desk', label: '21. Privacy Officer & Inquiries' },
  { id: 'consent-ack', label: '22. Consent & Acknowledgement' }
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('about-kdj');

  // Scrollspy for active section highlight in sticky sidebar
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
    <div className="privacy-page">
      <Helmet>
        <title>Privacy Policy &amp; Data Protection | KDJ Wealth</title>
        <meta
          name="description"
          content="Official Privacy Policy and Data Protection guidelines for KDJ Wealth (AMFI Registered Mutual Fund Distributor ARN: 153803). Learn how we collect, process, and protect your data."
        />
        <link rel="canonical" href="https://www.kdjcapitalresearch.com/privacy-policy" />
      </Helmet>

      {/* ── Light Luxury Page Header ── */}
      <section className="privacy-hero">
        <div className="container">
          <div className="privacy-hero-inner">
            <div className="privacy-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span>Data Protection &amp; Confidentiality Framework</span>
            </div>
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-subtitle">
              KDJ Wealth respects your privacy and is committed to safeguarding personal and financial information entrusted to us with industry-standard security.
            </p>
            <div className="privacy-meta-tags">
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
      <section className="privacy-content-section">
        <div className="container privacy-layout-grid">
          {/* Sticky Navigation Sidebar */}
          <aside className="privacy-sidebar">
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
                <span>Policy Contents</span>
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
          <main className="privacy-main-body">
            {/* Overview Intro Box */}
            <div className="privacy-intro-card">
              <div className="intro-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="intro-text">
                <p>
                  <strong>KDJ Wealth</strong> (“KDJ”, “we”, “us”, or “our”) respects your privacy and is committed to protecting the personal information entrusted to us.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, process, store, disclose and protect information when you access or use our website, mobile application, digital platforms, forms, communication channels and investment-related services (collectively, the “Services”).
                </p>
                <p className="intro-subtext">
                  This Privacy Policy should be read together with our Terms &amp; Conditions, Disclaimer, Grievance Policy and other applicable policies displayed on our website or application.
                </p>
              </div>
            </div>

            {/* 1. About KDJ */}
            <article id="about-kdj" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">01</span>
                <h2>About KDJ</h2>
              </div>
              <div className="article-body">
                <p>
                  KDJ Wealth is engaged in providing investment-related and mutual fund distribution services to investors.
                </p>
                <p>
                  Depending on the Services you use, KDJ may act as a Mutual Fund Distributor and may facilitate investment-related activities through authorised mutual fund companies, registrars and transfer agents (RTAs), KYC agencies, payment service providers, technology providers and other regulated or authorised service providers.
                </p>
                <div className="highlight-callout">
                  KDJ does not independently control the privacy practices of third-party platforms, websites, applications or service providers. Their respective privacy policies and terms may also apply to information processed by them.
                </div>
              </div>
            </article>

            {/* 2. Scope of This Privacy Policy */}
            <article id="scope" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">02</span>
                <h2>Scope of This Privacy Policy</h2>
              </div>
              <div className="article-body">
                <p>This Privacy Policy applies to personal information collected when you:</p>
                <div className="checklist-grid">
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Visit or browse our website</span>
                  </div>
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Use our mobile application or digital platforms</span>
                  </div>
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Register for an account or portal</span>
                  </div>
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Submit an enquiry or contact request</span>
                  </div>
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Request information regarding mutual funds or Services</span>
                  </div>
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Initiate or complete an investment or transaction</span>
                  </div>
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Complete KYC or account-opening procedures</span>
                  </div>
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Submit documents or financial statements</span>
                  </div>
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Communicate with us via Email, Phone, WhatsApp or SMS</span>
                  </div>
                  <div className="checklist-item">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Use investor dashboards &amp; portfolio features</span>
                  </div>
                  <div className="checklist-item full-width">
                    <div className="check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Participate in surveys, campaigns, or other interactions with KDJ</span>
                  </div>
                </div>
                <p className="subtle-note">
                  This Policy does not apply to third-party websites, applications, services or platforms that are not owned or controlled by KDJ.
                </p>
              </div>
            </article>

            {/* 3. Information We Collect */}
            <article id="info-collected" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">03</span>
                <h2>Information We Collect</h2>
              </div>
              <div className="article-body">
                <p>
                  Depending upon the Services you use and the requirements applicable to your account, we may collect the following categories of information:
                </p>

                {/* 3.1 Directly Provided */}
                <div className="subsection-block">
                  <h3 className="subsection-title">3.1 Information You Provide Directly</h3>
                  <div className="tags-cluster">
                    <span className="info-tag">Full Name</span>
                    <span className="info-tag">Date of Birth</span>
                    <span className="info-tag">Gender</span>
                    <span className="info-tag">Mobile Number</span>
                    <span className="info-tag">Email Address</span>
                    <span className="info-tag">Residential &amp; Communication Address</span>
                    <span className="info-tag">PAN &amp; Tax Information</span>
                    <span className="info-tag">KYC Documents &amp; Proofs</span>
                    <span className="info-tag">Photograph &amp; Signature</span>
                    <span className="info-tag">Bank Account Details &amp; Cancelled Cheque</span>
                    <span className="info-tag">Nominee Details</span>
                    <span className="info-tag">Occupation &amp; Income Range</span>
                    <span className="info-tag">Investment Objectives &amp; Horizon</span>
                    <span className="info-tag">Risk Profile Parameters</span>
                    <span className="info-tag">FATCA / CRS &amp; Tax Residency</span>
                    <span className="info-tag">Account Login Credentials</span>
                  </div>
                  <p className="subtle-note">
                    We collect only such information as may reasonably be required for the relevant purpose, subject to applicable law and regulatory requirements.
                  </p>
                </div>

                {/* 3.2 Automatically Collected */}
                <div className="subsection-block">
                  <h3 className="subsection-title">3.2 Information Collected Automatically</h3>
                  <p>
                    When you visit or use our website or application, technical information may be collected automatically, including: IP address, browser type and version, device type, operating system, pages visited, date and time of access, session and interaction data, error logs, and cookies required for analytics, security, and performance.
                  </p>
                </div>

                {/* 3.3 Third Parties */}
                <div className="subsection-block">
                  <h3 className="subsection-title">3.3 Information Received From Third Parties</h3>
                  <p>
                    Where permitted by law, we may receive verified data from authorized third parties including: Mutual fund AMCs, RTAs (CAMS, KFintech), KYC Registration Agencies (KRAs), regulatory authorities, payment gateways, and authentication service providers for transaction execution, due diligence, and fraud prevention.
                  </p>
                </div>
              </div>
            </article>

            {/* 4. Why We Collect and Use Your Information */}
            <article id="why-collect" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">04</span>
                <h2>Why We Collect and Use Your Information</h2>
              </div>
              <div className="article-body">
                <div className="purposes-grid">
                  <div className="purpose-card">
                    <div className="purpose-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <polyline points="16 11 18 13 22 9"/>
                      </svg>
                    </div>
                    <h4>4.1 Providing Services</h4>
                    <p>Creating and maintaining accounts, facilitating mutual fund purchases, switches, redemptions, SIPs, and delivering portfolio statements.</p>
                  </div>

                  <div className="purpose-card">
                    <div className="purpose-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                      </svg>
                    </div>
                    <h4>4.2 KYC &amp; AML Compliance</h4>
                    <p>Fulfilling statutory KYC, Anti-Money Laundering (AML) checks, due diligence, and SEBI/AMFI regulatory reporting requirements.</p>
                  </div>

                  <div className="purpose-card">
                    <div className="purpose-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="5" width="20" height="14" rx="2"/>
                        <line x1="2" y1="10" x2="22" y2="10"/>
                      </svg>
                    </div>
                    <h4>4.3 Transactions &amp; Payments</h4>
                    <p>Validating bank accounts, generating transaction records, clearing payments via authorized payment gateways, and preventing unauthorized transfers.</p>
                  </div>

                  <div className="purpose-card">
                    <div className="purpose-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      </svg>
                    </div>
                    <h4>4.4 Essential Communications</h4>
                    <p>Sending transaction confirmations, security alerts, portfolio updates, KYC notifications, and responding to support queries.</p>
                  </div>

                  <div className="purpose-card">
                    <div className="purpose-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="20" x2="18" y2="10"/>
                        <line x1="12" y1="20" x2="12" y2="4"/>
                        <line x1="6" y1="20" x2="6" y2="14"/>
                      </svg>
                    </div>
                    <h4>4.5 Performance &amp; Analytics</h4>
                    <p>Troubleshooting technical issues, optimizing website performance, and enhancing digital user interfaces using aggregated metrics.</p>
                  </div>

                  <div className="purpose-card">
                    <div className="purpose-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                    <h4>4.6 Fraud Prevention</h4>
                    <p>Identifying suspicious activity, investigating incidents, enforcing Terms &amp; Conditions, and protecting investor assets from cyber threats.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* 5. Legal Basis for Processing */}
            <article id="legal-basis" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">05</span>
                <h2>Legal Basis for Processing</h2>
              </div>
              <div className="article-body">
                <p>
                  Depending upon the circumstances and applicable law, KDJ may process personal information based on:
                </p>
                <ul className="legal-bullet-list">
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>Your informed consent;</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>The necessity of providing or facilitating investment services requested by you;</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>Compliance with statutory and regulatory mandates (SEBI, AMFI, PMLA, Income Tax Act);</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>Legitimate uses recognized under applicable data protection laws;</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>Prevention, detection, and investigation of fraud or unlawful activities.</span>
                  </li>
                </ul>
                <div className="notice-box">
                  <p>
                    Where consent is relied upon, you may withdraw consent subject to applicable law. However, withdrawal of consent may affect our ability to provide certain Services where information is mandatory for regulatory compliance.
                  </p>
                </div>
              </div>
            </article>

            {/* 6. Cookies and Similar Technologies */}
            <article id="cookies" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">06</span>
                <h2>Cookies and Similar Technologies</h2>
              </div>
              <div className="article-body">
                <p>
                  Our website and digital platforms use cookies to maintain secure login sessions, remember user preferences, analyze website performance, and detect security threats.
                </p>
                <p>
                  You may manage or disable cookies through your browser settings. However, disabling certain functional cookies may affect the operational features of the portal.
                </p>
              </div>
            </article>

            {/* 7. How We Share Your Information */}
            <article id="how-we-share" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">07</span>
                <h2>How We Share Your Information</h2>
              </div>
              <div className="article-body">
                <div className="highlight-callout">
                  <strong>Strict Privacy Standard:</strong> KDJ Wealth <strong>does NOT sell or rent</strong> your personal information to third parties for their independent marketing or commercial use.
                </div>
                <p>We may share information solely in the following controlled contexts:</p>
                <div className="sharing-context-list">
                  <div className="context-item">
                    <h4>7.1 Financial &amp; Mutual Fund Ecosystem</h4>
                    <p>With mutual fund AMCs, RTAs (CAMS/KFintech), KYC Registration Agencies, transaction exchanges, and payment banks required to execute your investments.</p>
                  </div>
                  <div className="context-item">
                    <h4>7.2 Technology &amp; Operational Service Providers</h4>
                    <p>With secure cloud infrastructure, communication partners (SMS, Email, OTP), cybersecurity auditors, and technical service providers bound by strict confidentiality agreements.</p>
                  </div>
                  <div className="context-item">
                    <h4>7.3 Regulatory &amp; Government Authorities</h4>
                    <p>Where required under SEBI/AMFI circulars, Prevention of Money Laundering Act (PMLA), court orders, tax authorities, or lawful government directives.</p>
                  </div>
                  <div className="context-item">
                    <h4>7.4 Protection of Rights &amp; Business Transfers</h4>
                    <p>To investigate security breaches, enforce agreements, or in the event of a corporate restructuring subject to equivalent privacy safeguards.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* 8. Third-Party Links and Services */}
            <article id="third-party-links" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">08</span>
                <h2>Third-Party Links and Services</h2>
              </div>
              <div className="article-body">
                <p>
                  Our website contains links to third-party platforms (such as AMFI, CVLKRA, SEBI, and AMC portals). KDJ is not responsible for the privacy practices, cookies, or content of third-party platforms. We recommend reviewing their independent privacy policies.
                </p>
              </div>
            </article>

            {/* 9. Aadhaar and Identity Information */}
            <article id="aadhaar-identity" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">09</span>
                <h2>Aadhaar and Identity Information</h2>
              </div>
              <div className="article-body">
                <p>
                  Where Aadhaar information or e-KYC is requested, its collection, masking, and validation are strictly subject to applicable law, UIDAI guidelines, and regulatory requirements. Alternative legally permitted identification methods remain available.
                </p>
                <p className="subtle-note">
                  KDJ does not request Aadhaar details for any purpose unrelated to lawful KYC and regulatory verification.
                </p>
              </div>
            </article>

            {/* 10. Data Security Safeguards */}
            <article id="data-security" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">10</span>
                <h2>Data Security Safeguards</h2>
              </div>
              <div className="article-body">
                <p>
                  KDJ implements robust technical and organizational measures to protect personal data against unauthorized access, loss, misuse, or alteration:
                </p>
                <div className="security-features-grid">
                  <div className="sec-feat-card">
                    <span className="sec-feat-title">Encrypted Transmission</span>
                    <p>Industry-standard TLS/SSL encryption for all data in transit across our digital channels.</p>
                  </div>
                  <div className="sec-feat-card">
                    <span className="sec-feat-title">Access Controls</span>
                    <p>Strict role-based access restrictions and multi-factor authentication protocols for internal systems.</p>
                  </div>
                  <div className="sec-feat-card">
                    <span className="sec-feat-title">Infrastructure Monitoring</span>
                    <p>Continuous security logging, vulnerability tracking, and automated backup mechanisms.</p>
                  </div>
                  <div className="sec-feat-card">
                    <span className="sec-feat-title">Vendor Governance</span>
                    <p>Comprehensive confidentiality and data protection obligations enforced on all technology vendors.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* 11. Data Retention */}
            <article id="data-retention" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">11</span>
                <h2>Data Retention</h2>
              </div>
              <div className="article-body">
                <p>
                  We retain personal information only for as long as reasonably necessary to provide services, resolve disputes, enforce agreements, and fulfill mandatory statutory retention obligations under SEBI, PMLA, tax, and audit regulations.
                </p>
                <p>
                  When data is no longer legally required to be retained, it is securely deleted, anonymized, or destroyed in accordance with our retention policies.
                </p>
              </div>
            </article>

            {/* 12. Your Rights and Choices */}
            <article id="your-rights" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">12</span>
                <h2>Your Rights and Choices</h2>
              </div>
              <div className="article-body">
                <p>Subject to applicable law, you have rights regarding your personal data:</p>
                <ul className="legal-bullet-list">
                  <li>
                    <span className="bullet-dot">•</span>
                    <span><strong>Access &amp; Review:</strong> Request details of personal data maintained in our records;</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span><strong>Correction &amp; Updating:</strong> Request correction of inaccurate, outdated, or incomplete records;</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span><strong>Deletion:</strong> Request erasure of data where legally permissible (subject to statutory retention mandates);</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span><strong>Opt-Out:</strong> Unsubscribe from non-essential promotional communications;</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span><strong>Grievance Redressal:</strong> Raise inquiries or complaints regarding the processing of your personal information.</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* 13. Marketing and Promotional Communications */}
            <article id="marketing" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">13</span>
                <h2>Marketing and Promotional Communications</h2>
              </div>
              <div className="article-body">
                <p>
                  You may opt out of promotional communications at any time by clicking the unsubscribe link in our emails or emailing us directly.
                </p>
                <p className="subtle-note">
                  Opting out of promotional messages will not stop essential transactional, regulatory, security, or account-servicing communications.
                </p>
              </div>
            </article>

            {/* 14. Children's Privacy */}
            <article id="children-privacy" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">14</span>
                <h2>Children&apos;s Privacy</h2>
              </div>
              <div className="article-body">
                <p>
                  Our Services are intended for individuals legally capable of entering into financial transactions. We do not knowingly collect personal information from minors except where investments are made by a natural guardian in compliance with SEBI guidelines.
                </p>
              </div>
            </article>

            {/* 15. User-Submitted Content */}
            <article id="user-content" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">15</span>
                <h2>User-Submitted Content</h2>
              </div>
              <div className="article-body">
                <p>
                  If you voluntarily submit feedback, reviews, or testimonials on public portions of our website, please ensure you do not share confidential financial, PAN, or account credentials.
                </p>
              </div>
            </article>

            {/* 16. Data Transfers */}
            <article id="data-transfers" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">16</span>
                <h2>Cross-Border Data Transfers</h2>
              </div>
              <div className="article-body">
                <p>
                  Personal information is primarily processed and stored on secure cloud servers located within India. Any cross-border data transfer is conducted strictly in accordance with applicable Indian data protection laws and contractual safeguards.
                </p>
              </div>
            </article>

            {/* 17. Data Breach and Security Incidents */}
            <article id="data-breach" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">17</span>
                <h2>Data Breach and Security Incidents</h2>
              </div>
              <div className="article-body">
                <p>
                  In the event of a confirmed personal data breach requiring notification under applicable law, KDJ will promptly investigate, contain the incident, implement remedial actions, and notify affected individuals and regulatory authorities as required.
                </p>
              </div>
            </article>

            {/* 18. Accuracy of Information */}
            <article id="accuracy" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">18</span>
                <h2>Accuracy of Information</h2>
              </div>
              <div className="article-body">
                <p>
                  You are responsible for ensuring that the personal and bank information provided to KDJ remains accurate, current, and complete, and for notifying us promptly of any changes.
                </p>
              </div>
            </article>

            {/* 19. Changes to This Privacy Policy */}
            <article id="policy-changes" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">19</span>
                <h2>Changes to This Privacy Policy</h2>
              </div>
              <div className="article-body">
                <p>
                  KDJ may update this Privacy Policy periodically to reflect service updates, technological changes, or regulatory modifications. The revised version will be posted on this page with an updated “Last Updated” date.
                </p>
              </div>
            </article>

            {/* 20. Governing Law */}
            <article id="governing-law" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">20</span>
                <h2>Governing Law</h2>
              </div>
              <div className="article-body">
                <p>
                  This Privacy Policy shall be governed by and construed in accordance with the applicable laws of the Republic of India.
                </p>
              </div>
            </article>

            {/* 21. Privacy Officer & Inquiries */}
            <article id="contact-desk" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">21</span>
                <h2>Privacy Officer &amp; Inquiries</h2>
              </div>
              <div className="article-body">
                <p>
                  If you have questions, concerns, requests, or complaints relating to your personal information, data processing practices, or this Privacy Policy, you may submit your inquiry to our Privacy &amp; Compliance Officer through the designated support channels on our official <strong>Contact &amp; Support</strong> page.
                </p>
                <div className="highlight-callout">
                  KDJ Wealth will make reasonable efforts to address and resolve all legitimate privacy requests in accordance with applicable Indian data protection laws and regulatory guidelines.
                </div>
              </div>
            </article>

            {/* 22. Consent and Acknowledgement */}
            <article id="consent-ack" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">22</span>
                <h2>Consent and Acknowledgement</h2>
              </div>
              <div className="article-body">
                <div className="acceptance-box">
                  <h4>Investor Acknowledgement</h4>
                  <p>
                    By using our website, application, or Services, or by voluntarily providing your personal information to KDJ Wealth, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
                  </p>
                  <p>
                    Where consent is required under applicable law, KDJ obtains such consent through appropriate digital or documented mechanisms.
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
                <span className="seal-date-badge">Effective / Last Updated: 16 August 2026</span>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
