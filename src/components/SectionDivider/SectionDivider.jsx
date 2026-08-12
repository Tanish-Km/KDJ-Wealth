import './SectionDivider.css';

const SectionDivider = ({ from = 'light', to = 'dark', flip = false }) => {
  const fillColor = to === 'dark' ? 'var(--bg-dark)' : to === 'light' ? 'var(--bg-light)' : 'var(--bg-white)';

  return (
    <div className={`section-divider ${flip ? 'section-divider-flip' : ''}`} style={{ background: from === 'dark' ? 'var(--bg-dark)' : from === 'light' ? 'var(--bg-light)' : 'var(--bg-white)' }}>
      <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 100L60 88C120 76 240 52 360 42C480 32 600 36 720 46C840 56 960 72 1080 76C1200 80 1320 72 1380 68L1440 64V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" fill={fillColor}/>
      </svg>
    </div>
  );
};

export default SectionDivider;
