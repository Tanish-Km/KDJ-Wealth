import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { featuresData } from '../../data/featuresData';
import FeatureCard from './FeatureCard';
import './WhyChoose.css';

export default function WhyChoose() {
  const [activeStep] = useState(0);
  const sectionRef = useRef(null);

  return (
    <section className="why-choose section" id="why-choose" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="why-choose__header">
          <span className="section-badge">Why Partner With Us</span>
          <h2 className="section-title">
            Why Choose <span className="text-gradient">KDJ Wealth</span>
          </h2>
          <p className="section-subtitle">
            Your trusted partner for personalized investment solutions, research-driven
            strategies, and long-term wealth creation.
          </p>

          {/* Story Progress Indicator */}
          <div className="why-choose__progress-bar" aria-label="Story chapters">
            <span className="why-choose__progress-counter">{activeStep + 1} / 5</span>
            <div className="why-choose__progress-track">
              {featuresData.map((_, i) => (
                <div
                  key={i}
                  className={`why-choose__progress-step ${i <= activeStep ? 'why-choose__progress-step--active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Story Card Stage */}
        <div className="why-choose__stage">
          {featuresData.map((feature, index) => (
            <div
              key={feature.title}
              className={`why-choose__story-card-wrapper ${
                index === activeStep
                  ? 'why-choose__story-card-wrapper--active'
                  : index < activeStep
                  ? 'why-choose__story-card-wrapper--passed'
                  : 'why-choose__story-card-wrapper--upcoming'
              }`}
              data-step={index}
            >
              <FeatureCard feature={feature} index={index} total={featuresData.length} />
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="why-choose__cta">
          <Link to="/support" className="btn btn-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Talk to an Expert Now
          </Link>
        </div>
      </div>
    </section>
  );
}
