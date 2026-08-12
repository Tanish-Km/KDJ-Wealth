import './AnimatedBackground.css';

const AnimatedBackground = ({ variant = 'default' }) => {
  return (
    <div className={`animated-bg-wrapper animated-bg-${variant}`}>
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="grid-pattern" />
    </div>
  );
};

export default AnimatedBackground;
