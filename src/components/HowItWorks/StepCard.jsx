import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function StepCard({ step, index, reverse }) {
  const anim = useScrollAnimation({ threshold: 0.15 });

  return (
    <div ref={anim.ref} className={`step-card ${reverse ? 'step-card--reverse' : ''}`}>
      {/* Text side */}
      <div className={`step-card__text ${reverse ? 'animate-slide-right' : 'animate-slide-left'} ${anim.className}`}>
        <span className="step-card__label">{step.step}</span>
        <h3 className="step-card__title">{step.title}</h3>
        <p className="step-card__desc">{step.description}</p>
        {step.showCTA && (
          <a href="/support/" className="btn btn-primary step-card__cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download our App
          </a>
        )}
      </div>

      {/* Image side */}
      <div
        className={`step-card__visual ${reverse ? 'animate-slide-left' : 'animate-slide-right'} ${anim.className}`}
        style={{ background: step.gradient }}
      >
        <div className="step-card__number" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </div>
        <div className="step-card__illustration" aria-label={`Step ${index + 1}: ${step.title}`}>
          {step.icon}
        </div>
      </div>
    </div>
  );
}
