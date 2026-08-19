import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './TermsPage.css';

const SECTIONS = [
  { id: 'use-of-website', label: '1. Use of Website' },
  { id: 'our-services', label: '2. Our Services' },
  { id: 'investment-risk', label: '3. Investment Info & Risk' },
  { id: 'transaction-processing', label: '4. Transaction Processing' },
  { id: 'user-information', label: '5. Information Provided by Users' },
  { id: 'website-content', label: '6. Website Content' },
  { id: 'third-party-services', label: '7. Third-Party Services' },
  { id: 'intellectual-property', label: '8. Intellectual Property' },
  { id: 'limitation-liability', label: '9. Limitation of Liability' },
  { id: 'indemnity', label: '10. Indemnity' },
  { id: 'terms-changes', label: '11. Changes to These Terms' },
  { id: 'governing-law', label: '12. Governing Law & Courts' },
  { id: 'contact-desk', label: '13. Investor Support & Inquiries' },
  { id: 'acceptance', label: '14. Acceptance of Terms' }
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('use-of-website');

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
    <div className="terms-page">
      <Helmet>
        <title>Terms &amp; Conditions | KDJ Capital Research</title>
        <meta
          name="description"
          content="Official Terms &amp; Conditions and Terms of Use for KDJ Capital Research (AMFI Registered Mutual Fund Distributor ARN: 153803)."
        />
        <link rel="canonical" href="https://www.kdjcapitalresearch.com/terms-of-use" />
      </Helmet>

      {/* ── Light Luxury Page Header ── */}
      <section className="terms-hero">
        <div className="container">
          <div className="terms-hero-inner">
            <div className="terms-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
              <span>User Agreement &amp; Terms of Service</span>
            </div>
            <h1 className="terms-title">Terms &amp; Conditions</h1>
            <p className="terms-subtitle">
              Welcome to the website of KDJ Capital Research. Please review these binding terms governing your access to our digital platforms and services.
            </p>
            <div className="terms-meta-tags">
              <span className="meta-pill arn-pill">
                <strong>AMFI ARN:</strong> 153803
              </span>
              <span className="meta-pill status-pill">
                <strong>Entity:</strong> Mutual Fund Distributor
              </span>
              <span className="meta-pill date-pill">
                <strong>Last Updated:</strong> 16 August 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Policy Content Layout ── */}
      <section className="terms-content-section">
        <div className="container terms-layout-grid">
          {/* Sticky Navigation Sidebar */}
          <aside className="terms-sidebar">
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
                <span>Terms Outline</span>
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

          {/* Main Terms Body */}
          <main className="terms-main-body">
            {/* Overview Intro Box */}
            <div className="terms-intro-card">
              <div className="intro-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="intro-text">
                <p>
                  Welcome to the website of <strong>KDJ Capital Research</strong> (“KDJ”, “we”, “us”, or “our”). KDJ Capital Research is an AMFI-Registered Mutual Fund Distributor operating under <strong>ARN-153803</strong>.
                </p>
                <p>
                  Please read these Terms &amp; Conditions (“Terms”) carefully before using our website, services, or any related platform. By accessing or using our website, you acknowledge that you have read, understood, and agreed to these Terms, along with our <strong>Privacy Policy</strong>, <strong>Disclaimer</strong>, and <strong>Grievance Policy</strong>.
                </p>
              </div>
            </div>

            {/* 1. Use of Website */}
            <article id="use-of-website" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">01</span>
                <h2>Use of Website</h2>
              </div>
              <div className="article-body">
                <p className="lead-p">
                  You may use this website only for lawful purposes and in accordance with these Terms.
                </p>
                <p>
                  The information and services available through the website are intended for general investor and informational purposes. You agree not to misuse the website, provide false information, attempt unauthorised access, or use the website in violation of any applicable law or regulation.
                </p>
              </div>
            </article>

            {/* 2. Our Services */}
            <article id="our-services" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">02</span>
                <h2>Our Services</h2>
              </div>
              <div className="article-body">
                <p>
                  KDJ Capital Research acts as a Mutual Fund Distributor and may facilitate mutual fund investments and provide related investor support and services.
                </p>
                <div className="features-bullet-grid">
                  <div className="feat-item">
                    <div className="feat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Assistance with mutual fund transactions and order routing</span>
                  </div>
                  <div className="feat-item">
                    <div className="feat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Investor onboarding and KYC-related verification processes</span>
                  </div>
                  <div className="feat-item">
                    <div className="feat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Transaction support and portfolio report generation</span>
                  </div>
                  <div className="feat-item">
                    <div className="feat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Other investor servicing facilities made available from time to time</span>
                  </div>
                </div>
                <div className="highlight-callout">
                  The availability and execution of any transaction may depend upon the relevant Asset Management Company (AMC), Registrar &amp; Transfer Agent (RTA), bank, payment service provider, technology platform or other authorised service provider.
                </div>
              </div>
            </article>

            {/* 3. Investment Information and Risk */}
            <article id="investment-risk" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">03</span>
                <h2>Investment Information and Risk</h2>
              </div>
              <div className="article-body">
                <p>
                  Information, articles, market updates, calculators, illustrations, scheme information, and other content available on this website are provided for <strong>informational and educational purposes only</strong>.
                </p>
                <div className="risk-warning-card">
                  <div className="risk-card-head">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                    <h4>No Guarantee of Returns &amp; Market Risks</h4>
                  </div>
                  <p>
                    Such information should not be treated as a guarantee of returns or capital protection. Mutual fund investments are subject to market risks and there can be no assurance or guarantee of returns. Past performance is not indicative of future performance.
                  </p>
                </div>
                <p>
                  You should read the relevant <strong>Scheme Information Document (SID)</strong>, <strong>Key Information Memorandum (KIM)</strong>, and other applicable scheme documents carefully before investing.
                </p>
                <p>
                  Investment decisions remain the sole responsibility of the investor, who should consider their own financial circumstances, investment objectives, and risk profile, and seek independent professional advice where appropriate.
                </p>
              </div>
            </article>

            {/* 4. Transaction Processing */}
            <article id="transaction-processing" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">04</span>
                <h2>Transaction Processing</h2>
              </div>
              <div className="article-body">
                <p>
                  KDJ may facilitate or transmit investment instructions through authorised platforms, AMCs, RTAs, banks, or other service providers.
                </p>
                <p>
                  Submission of an investment instruction does not by itself guarantee successful execution. Transactions may be affected by applicable cut-off timings, business holidays, payment processing windows, KYC requirements, technical issues, regulatory requirements, or circumstances beyond KDJ&apos;s reasonable control.
                </p>
                <div className="highlight-callout">
                  The applicable NAV, allotment of mutual fund units, and settlement of transactions shall be determined solely by the relevant AMC/RTA in accordance with applicable SEBI regulations and scheme offer documents.
                </div>
              </div>
            </article>

            {/* 5. Information Provided by Users */}
            <article id="user-information" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">05</span>
                <h2>Information Provided by Users</h2>
              </div>
              <div className="article-body">
                <p>
                  You agree that all information and documents provided to KDJ shall be true, accurate, complete, and up to date.
                </p>
                <p>
                  You are responsible for informing KDJ of any material change or discrepancy in the information provided by you.
                </p>
                <div className="notice-box">
                  <p>
                    KDJ may delay, reject, or suspend a service or transaction where required information is incomplete, inaccurate, or where required for regulatory, compliance, or security purposes.
                  </p>
                </div>
              </div>
            </article>

            {/* 6. Website Content */}
            <article id="website-content" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">06</span>
                <h2>Website Content</h2>
              </div>
              <div className="article-body">
                <p>
                  KDJ makes reasonable efforts to keep the information on the website accurate and updated. However, information may contain errors, omissions, delays, or content obtained from third-party sources.
                </p>
                <p>
                  KDJ does not guarantee that all information will always be complete, accurate, current, or error-free.
                </p>
                <p className="subtle-note">
                  Official records, statements, and scheme information of the relevant AMC, RTA, or other authorised institution shall prevail where applicable.
                </p>
              </div>
            </article>

            {/* 7. Third-Party Websites and Services */}
            <article id="third-party-services" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">07</span>
                <h2>Third-Party Websites and Services</h2>
              </div>
              <div className="article-body">
                <p>
                  Our website may contain links to or integrations with third-party websites, platforms, or services (such as AMFI, SEBI, CVLKRA, or AMC portals).
                </p>
                <p>
                  These third parties have their own terms, privacy policies, and practices. KDJ does not control or take responsibility for the content, availability, security, or practices of such third-party websites or services.
                </p>
                <p className="subtle-note">
                  Links are provided for convenience and do not necessarily constitute an endorsement or recommendation by KDJ.
                </p>
              </div>
            </article>

            {/* 8. Intellectual Property */}
            <article id="intellectual-property" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">08</span>
                <h2>Intellectual Property</h2>
              </div>
              <div className="article-body">
                <p>
                  All text, logos, graphics, designs, images, reports, articles, software, and other content available on this website are owned by or licensed to KDJ, unless otherwise stated.
                </p>
                <p>
                  You may not copy, reproduce, modify, distribute, publish, sell, or commercially use any such content without prior written permission from KDJ.
                </p>
              </div>
            </article>

            {/* 9. Limitation of Liability */}
            <article id="limitation-liability" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">09</span>
                <h2>Limitation of Liability</h2>
              </div>
              <div className="article-body">
                <p>
                  To the maximum extent permitted by applicable law, KDJ shall not be responsible for losses arising from:
                </p>
                <div className="liability-factors-grid">
                  <div className="factor-box">
                    <span className="factor-num">01</span>
                    <p>Market movements, price fluctuations, or investment outcome decisions</p>
                  </div>
                  <div className="factor-box">
                    <span className="factor-num">02</span>
                    <p>Delays, processing errors, or failures by AMCs, RTAs, banks, or payment gateways</p>
                  </div>
                  <div className="factor-box">
                    <span className="factor-num">03</span>
                    <p>Technical failures, telecommunication interruptions, or internet disruptions</p>
                  </div>
                  <div className="factor-box">
                    <span className="factor-num">04</span>
                    <p>Incorrect or incomplete information provided by users</p>
                  </div>
                  <div className="factor-box full-width">
                    <span className="factor-num">05</span>
                    <p>Any other circumstances or force majeure events beyond KDJ&apos;s reasonable control</p>
                  </div>
                </div>
                <p className="subtle-note">
                  Nothing in these Terms shall exclude or limit any liability that cannot legally be excluded or limited under applicable Indian law.
                </p>
              </div>
            </article>

            {/* 10. Indemnity */}
            <article id="indemnity" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">10</span>
                <h2>Indemnity</h2>
              </div>
              <div className="article-body">
                <p>
                  You agree to indemnify and hold KDJ harmless, to the extent permitted by law, against claims, losses, damages, or expenses arising from your misuse of the website, breach of these Terms, violation of applicable laws, or submission of false, fraudulent, or misleading information.
                </p>
              </div>
            </article>

            {/* 11. Changes to These Terms */}
            <article id="terms-changes" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">11</span>
                <h2>Changes to These Terms</h2>
              </div>
              <div className="article-body">
                <p>
                  KDJ may modify, update, or revise these Terms, website content, or services from time to time to reflect changes in our services, applicable laws, regulations, or business practices.
                </p>
                <p>
                  Updated Terms will be published on the website with the revised “Last Updated” date. Continued use of the website after such changes constitutes acceptance of the revised Terms.
                </p>
              </div>
            </article>

            {/* 12. Governing Law */}
            <article id="governing-law" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">12</span>
                <h2>Governing Law &amp; Jurisdiction</h2>
              </div>
              <div className="article-body">
                <p>
                  These Terms shall be governed by and interpreted in accordance with the laws of the Republic of India.
                </p>
                <div className="jurisdiction-box">
                  <div className="jur-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Exclusive Legal Jurisdiction</h4>
                    <p>
                      Subject to applicable regulatory grievance mechanisms and applicable law, disputes arising in connection with these Terms shall be subject to the jurisdiction of the competent courts in <strong>New Delhi, Delhi</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* 13. Investor Support & Inquiries */}
            <article id="contact-desk" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">13</span>
                <h2>Investor Support &amp; Inquiries</h2>
              </div>
              <div className="article-body">
                <p>
                  For any questions, clarifications, or service-related concerns regarding these Terms &amp; Conditions, investors may reach out through the official communication channels on our designated <strong>Contact &amp; Support</strong> page.
                </p>
                <div className="highlight-callout">
                  KDJ Capital Research makes reasonable efforts to address all investor queries promptly in accordance with applicable AMFI and SEBI regulatory standards.
                </div>
              </div>
            </article>

            {/* 14. Acceptance */}
            <article id="acceptance" className="policy-article-card">
              <div className="article-header">
                <span className="article-num">14</span>
                <h2>Acceptance of Terms</h2>
              </div>
              <div className="article-body">
                <div className="acceptance-box">
                  <h4>Binding Agreement</h4>
                  <p>
                    By accessing or using the KDJ website or services, you confirm that you have read, understood, and agreed to these Terms &amp; Conditions, together with our <strong>Privacy Policy</strong>, <strong>Disclaimer</strong>, and other applicable policies.
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
