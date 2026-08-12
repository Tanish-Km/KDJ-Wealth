import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/' },
  { label: 'NRI Investments', href: '/nri-investments' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact', href: '/support' },
];

const resourceLinks = [
  { label: 'FAQ', href: '/#faq' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact', href: '/support' },
  { label: 'NRI Guide', href: '/nri-investments' },
];

const finePrintLinks = [
  { label: 'Disclaimers', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Grievance Policy', href: '#' },
];

const serviceLinks = [
  { label: 'Wealth Management', href: '/#wealth-management' },
  { label: 'Mutual Funds', href: '/#mutual-funds' },
  { label: 'Financial Planning', href: '/#financial-planning' },
  { label: 'Retirement Planning', href: '/#retirement-planning' },
  { label: 'Tax Planning', href: '/#tax-planning' },
  { label: 'NRI Investment Services', href: '/#nri-investment' },
];

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        {/* Top section */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="KDJ Wealth — Home">
              <img src="/sun-logo.png" alt="KDJ Wealth Sun Logo" className="footer__logo-img" />
              <span className="footer__logo-text">KDJ Wealth</span>
            </Link>
            <p className="footer__tagline">
              Building lasting wealth through personalized investment solutions, expert
              guidance, and goal-based financial planning.
            </p>

            {/* Social icons */}
            <div className="footer__socials">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="footer__social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer__social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer__social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="footer__links-grid">
            <div className="footer__col">
              <h3 className="footer__col-title">Company</h3>
              <ul className="footer__col-list">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="footer__link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h3 className="footer__col-title">Resources</h3>
              <ul className="footer__col-list">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') && !link.href.includes('#') ? (
                      <Link to={link.href} className="footer__link">{link.label}</Link>
                    ) : (
                      <a href={link.href} className="footer__link">{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h3 className="footer__col-title">Fine Print</h3>
              <ul className="footer__col-list">
                {finePrintLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer__link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h3 className="footer__col-title">Our Services</h3>
              <ul className="footer__col-list">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer__link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact & Form */}
        <div className="footer__middle">
          <div className="footer__contact">
            <h3 className="footer__col-title">Get in Touch</h3>
            <div className="footer__contact-items">
              <a
                href="https://www.kdjcapitalresearch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__contact-item"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                www.kdjcapitalresearch.com
              </a>
              <a href="mailto:Info.kdjcapital@gmail.com" className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Info.kdjcapital@gmail.com
              </a>
              <a href="tel:+919821891816" className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +91 9821891816
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="footer__form-wrap">
            <h3 className="footer__col-title">Let&apos;s Connect</h3>
            {submitted ? (
              <div className="footer__form-success">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Thank you! We&apos;ll get back to you soon.</span>
              </div>
            ) : (
              <form className="footer__form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  aria-label="Your Name"
                  className="footer__input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  aria-label="Phone Number"
                  className="footer__input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  aria-label="Email Address"
                  className="footer__input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <button type="submit" className="btn btn-primary footer__submit">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="footer__disclaimer">
          <p>
            <strong>Disclaimer:</strong> KDJ Wealth is an AMFI-registered
            Mutual Fund Distributor. Mutual Fund investments are subject to market
            risks, read all scheme related documents carefully. Past performance is not indicative
            of future returns. KDJ Wealth follows a transparent, ethical, and client-first
            approach. We are committed to regulatory compliance and responsible financial advisory
            practices while ensuring that all investment recommendations are aligned with your
            financial objectives and risk profile.
          </p>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} KDJ Wealth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
