export default function VineCard({ vine, index = 0, total = 16 }) {
  const serviceNumber = String(index + 1).padStart(2, '0');

  return (
    <article
      className="vine-card glass-card"
      style={{
        '--vine-accent': vine.accentColor || '#0B2545',
      }}
      data-vine-id={vine.id}
    >
      {/* Top accent bar */}
      <div className="vine-card__accent" aria-hidden="true" />

      {/* Header Info */}
      <div className="vine-card__header-row">
        <span className="vine-card__service-num">Service {serviceNumber} / {String(total).padStart(2, '0')}</span>
        <div className="vine-card__tags">
          {vine.tags.map((tag) => (
            <span key={tag} className="vine-card__tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="vine-card__horizon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <span>{vine.timeHorizon}</span>
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="vine-card__name">{vine.name}</h3>
      <p className="vine-card__desc">{vine.description}</p>

      {/* Key Attributes */}
      <dl className="vine-card__attrs">
        {vine.attributes.map((attr) => (
          <div key={attr.label} className="vine-card__attr">
            <dt className="vine-card__attr-label">{attr.label}:</dt>
            <dd className="vine-card__attr-value">{attr.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
