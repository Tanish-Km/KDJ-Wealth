import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { vinesData } from '../../data/vinesData';
import VineCard from './VineCard';
import './ExploreVines.css';

export default function ExploreVines() {
  const [activeStep] = useState(0);
  const sectionRef = useRef(null);
  const totalServices = vinesData.length;

  return (
    <section className="explore-vines section" id="explore-vines" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="explore-vines__header">
          <span className="section-badge">Comprehensive Offerings</span>
          <h2 className="section-title">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive wealth management solutions tailored to your unique financial
            goals, risk profile, and future aspirations.
          </p>

          {/* Service Chapter Progress Bar */}
          <div className="explore-vines__progress-bar" aria-label="Services chapter indicator">
            <span className="explore-vines__progress-counter">
              {String(activeStep + 1).padStart(2, '0')} / {totalServices}
            </span>
            <div className="explore-vines__progress-track">
              <div
                className="explore-vines__progress-fill"
                style={{ width: `${((activeStep + 1) / totalServices) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* 16-Service Card Stage */}
        <div className="explore-vines__stage">
          {vinesData.map((vine, index) => (
            <div
              key={vine.id}
              className={`explore-vines__card-wrapper ${
                index === activeStep
                  ? 'explore-vines__card-wrapper--active'
                  : index < activeStep
                  ? 'explore-vines__card-wrapper--passed'
                  : 'explore-vines__card-wrapper--upcoming'
              }`}
              data-service-index={index}
            >
              <VineCard vine={vine} index={index} total={totalServices} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="explore-vines__cta">
          <Link to="/support" className="btn btn-primary btn-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Start Investing Today
          </Link>
        </div>
      </div>
    </section>
  );
}
