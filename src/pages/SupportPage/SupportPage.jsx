import { useState } from 'react';
import './SupportPage.css';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import PageHero from '../../components/PageHero/PageHero';
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';
import Ambient3DBackground from '../../components/Ambient3DBackground/Ambient3DBackground';
import { getIcon } from '../../components/Icons/icons';
import {
  supportHeroData, contactMethodsData, supportFaqData,
  workingHoursData, officeAddressData,
} from '../../data/supportData';

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className={`support-faq-item glass-card ${isOpen ? 'open' : ''}`} onClick={onClick}>
    <div className="support-faq-q">
      <span>{question}</span>
      <span className="support-faq-icon">{isOpen ? '−' : '+'}</span>
    </div>
    {isOpen && <div className="support-faq-a"><p>{answer}</p></div>}
  </div>
);

const SupportPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been submitted. Our team will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | KDJ Wealth</title>
        <meta name="description" content="Need help with your investments? Contact KDJ Wealth via email, phone, or WhatsApp. We're here to help with personalized financial guidance." />
      </Helmet>

      <PageHero className="support-hero" badge={supportHeroData.badge} title={supportHeroData.title} subtitle={supportHeroData.subtitle} variant="violet" />

      {/* Contact Methods */}
      <section className="section support-contact-section">
        <Ambient3DBackground variant="contact" />
        <div className="container">
          <div className="support-contact-grid">
            {contactMethodsData.map((method, i) => (
              <AnimatedSection key={i} delay={i * 0.12} className="support-contact-card glass-card">
                <span className="support-contact-icon">{getIcon(method.icon, 32)}</span>
                <h3>{method.title}</h3>
                <span className="support-contact-value">{method.value}</span>
                <p>{method.description}</p>
                <a href={method.action} className="btn btn-outline" target={method.action.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                  {method.actionLabel}
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section section-light support-form-section">
        <Ambient3DBackground variant="contact" />
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-badge">Get In Touch</span>
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>
          </AnimatedSection>
          <div className="support-form-grid">
            <AnimatedSection className="support-form-card glass-card">
              <form onSubmit={handleSubmit}>
                <div className="support-form-row">
                  <div className="support-form-group">
                    <label htmlFor="support-name">Full Name *</label>
                    <input id="support-name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                  </div>
                  <div className="support-form-group">
                    <label htmlFor="support-email">Email *</label>
                    <input id="support-email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                  </div>
                </div>
                <div className="support-form-row">
                  <div className="support-form-group">
                    <label htmlFor="support-phone">Phone</label>
                    <input id="support-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                  </div>
                  <div className="support-form-group">
                    <label htmlFor="support-subject">Subject *</label>
                    <select id="support-subject" name="subject" value={formData.subject} onChange={handleChange} required>
                      <option value="">Select a topic</option>
                      <option value="account">Account Query</option>
                      <option value="investment">Investment Question</option>
                      <option value="kyc">KYC / Documentation</option>
                      <option value="portfolio">Portfolio Review</option>
                      <option value="nri">NRI Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="support-form-group">
                  <label htmlFor="support-message">Message *</label>
                  <textarea id="support-message" name="message" value={formData.message} onChange={handleChange} required placeholder="How can we help you?" rows={5} />
                </div>
                <button type="submit" className="btn btn-primary support-submit-btn">
                  Send Message →
                </button>
              </form>
            </AnimatedSection>

            <div className="support-info-col">
              {/* Working Hours */}
              <AnimatedSection delay={0.1} className="support-hours-card glass-card">
                <h3>{getIcon('clock', 20)} Working Hours</h3>
                <ul className="support-hours-list">
                  {workingHoursData.map((item, i) => (
                    <li key={i}>
                      <span className="support-hours-day">{item.day}</span>
                      <span className="support-hours-time">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* Office Address */}
              <AnimatedSection delay={0.2} className="support-address-card glass-card">
                <h3>{getIcon('mapPin', 20)} Our Office</h3>
                <p>{officeAddressData.line1}</p>
                <p>{officeAddressData.line2}</p>
                <p>{officeAddressData.line3}</p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section support-faq-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-badge">Quick Help</span>
              <h2>Frequently Asked Questions</h2>
            </div>
          </AnimatedSection>
          <div className="support-faq-list">
            {supportFaqData.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <FaqItem question={faq.question} answer={faq.answer} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark support-cta-section">
        <AnimatedBackground variant="emerald" />
        <div className="container support-cta-content">
          <AnimatedSection>
            <h2>Can't Find What You're Looking For?</h2>
            <p>Our advisory team is always available to help you with personalized support.</p>
            <div className="support-cta-buttons">
              <a href="https://wa.me/919821891816" className="btn btn-accent glow-pulse" target="_blank" rel="noopener noreferrer">{getIcon('messageCircle', 18)} Chat on WhatsApp</a>
              <a href="tel:+919821891816" className="btn btn-outline-light">{getIcon('phone', 18)} Call Us Directly</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default SupportPage;
