import { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

/**
 * APP STORE URL CONFIGURATION PLACEHOLDERS:
 * Replace placeholders below with actual live store URLs when available.
 */
const ANDROID_APP_URL = '#android-app-link';
const IOS_APP_URL = '#ios-app-link';

const navLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/' },
  { label: 'Calculators', to: '/calculators' },
  { label: 'NRI Investments', to: '/nri-investments' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Contact', to: '/support' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [compact, setCompact] = useState(false);
  const [compactMenuOpen, setCompactMenuOpen] = useState(false);
  const compactRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          setScrolled(y > 20);
          setCompact(y > 300);
          if (y <= 100) setCompactMenuOpen(false);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* Close compact menu on click outside */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (compactRef.current && !compactRef.current.contains(e.target)) {
        setCompactMenuOpen(false);
      }
    };
    if (compactMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [compactMenuOpen]);

  /* Close compact menu on Escape */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setCompactMenuOpen(false);
    };
    if (compactMenuOpen) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [compactMenuOpen]);

  const handleCompactNav = useCallback(() => {
    setCompactMenuOpen(false);
  }, []);

  const headerClasses = [
    'header',
    scrolled ? 'header--scrolled' : '',
    compact ? 'header--compact' : '',
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClasses} id="site-header" ref={compactRef}>
      <div className="header__inner container">
        {/* Sun Logo Emblem */}
        <Link to="/" className="header__logo" aria-label="KDJ Wealth — Home" onClick={handleCompactNav}>
          <img src="/sun-logo.png" alt="KDJ Wealth Sun Logo" className="header__logo-img" />
          <span className="header__logo-text">KDJ WEALTH</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Main Navigation">
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                  }
                >
                  {link.label.toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons Cluster */}
        <div className="header__actions-cluster">
          {/* Satin Gold Pill CTA Button */}
          <Link to="/support" className="btn header__gold-pill-cta">
            GET STARTED
          </Link>
        </div>

        {/* Compact Mode Toggle (desktop only, visible when scrolled) */}
        <button
          className="header__compact-toggle"
          onClick={() => setCompactMenuOpen(!compactMenuOpen)}
          aria-expanded={compactMenuOpen}
          aria-label={compactMenuOpen ? 'Close navigation' : 'Open navigation'}
        >
          <span className={`header__compact-dots ${compactMenuOpen ? 'header__compact-dots--open' : ''}`}>
            <span /><span /><span />
          </span>
        </button>

        {/* Compact Dropdown */}
        <div className={`header__compact-dropdown ${compactMenuOpen ? 'header__compact-dropdown--open' : ''}`}>
          <ul className="header__compact-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `header__compact-link ${isActive ? 'header__compact-link--active' : ''}`
                  }
                  onClick={handleCompactNav}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="header__compact-app-download">
            <span className="header__download-label">Download app:</span>
            <div className="header__download-icons">
              <a href={ANDROID_APP_URL} target="_blank" rel="noopener noreferrer" className="header__app-icon-link" aria-label="Android app placeholder">
                Android
              </a>
              <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer" className="header__app-icon-link" aria-label="iOS app placeholder">
                iOS
              </a>
            </div>
          </div>
          <Link to="/support" className="btn btn-primary header__compact-cta" onClick={handleCompactNav}>
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`header__burger ${mobileOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`header__mobile-overlay ${mobileOpen ? 'header__mobile-overlay--open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={`header__mobile ${mobileOpen ? 'header__mobile--open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <ul className="header__mobile-list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `header__mobile-link ${isActive ? 'header__mobile-link--active' : ''}`
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile App Download Option */}
        <div className="header__mobile-download">
          <span className="header__mobile-download-title">Download our app</span>
          <div className="header__mobile-download-buttons">
            <a
              href={ANDROID_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="header__mobile-store-btn"
              aria-label="Get it on Google Play Store"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.6 2.25c-.2.23-.33.56-.33.97v17.56c0 .41.13.74.33.97l.08.07 9.83-9.83v-.24L3.68 2.18l-.08.07zm13.43 13.43-3.08-3.08v-.24l3.08-3.08.07.04 3.65 2.08c1.04.59 1.04 1.56 0 2.16l-3.65 2.08-.07.04zm-3.08-3.32L4.12 2.53 13.06 11.47l.89.89zm0 .24L4.12 21.47l9.83-9.83-.89-.89z"/>
              </svg>
              <span>Android</span>
            </a>
            <a
              href={IOS_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="header__mobile-store-btn"
              aria-label="Download on Apple App Store"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.35c.67-.82 1.13-1.97.99-3.11-.98.04-2.19.66-2.88 1.47-.62.72-1.16 1.89-.99 3.01 1.09.09 2.22-.55 2.88-1.37z"/>
              </svg>
              <span>App Store</span>
            </a>
          </div>
        </div>

        <Link to="/support" className="btn btn-primary header__mobile-cta" onClick={() => setMobileOpen(false)}>
          Get Started
        </Link>
      </nav>
    </header>
  );
}
