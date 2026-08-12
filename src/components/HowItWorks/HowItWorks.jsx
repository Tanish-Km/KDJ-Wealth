import StepCard from './StepCard';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './HowItWorks.css';

const steps = [
  {
    step: 'STEP ONE',
    title: 'Schedule a Free Consultation',
    description:
      'Start by connecting with our financial advisors. We understand your financial goals, risk appetite, current portfolio, and future aspirations to create a clear picture of your investment needs.',
    gradient: 'linear-gradient(135deg, #dbeafe, #ede9fe)',
    icon: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="20" width="100" height="80" rx="12" fill="#9b81f5" opacity="0.15"/>
        <rect x="20" y="35" width="35" height="20" rx="6" fill="#9b81f5" opacity="0.4"/>
        <rect x="65" y="35" width="35" height="20" rx="6" fill="#22c55e" opacity="0.4"/>
        <rect x="20" y="65" width="80" height="8" rx="4" fill="#9b81f5" opacity="0.2"/>
        <rect x="20" y="80" width="55" height="8" rx="4" fill="#9b81f5" opacity="0.15"/>
        <circle cx="37" cy="45" r="6" fill="white"/>
        <circle cx="82" cy="45" r="6" fill="white"/>
        <path d="M34 45l3 3 6-6" stroke="#9b81f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    step: 'STEP TWO',
    title: 'Get Your Personalized Plan',
    description:
      'Our research team designs a custom investment strategy aligned with your goals — whether it\'s retirement, child education, wealth creation, or tax planning. Start with as little as you\'re comfortable with.',
    gradient: 'linear-gradient(135deg, #dcfce7, #dbeafe)',
    icon: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="15" width="70" height="90" rx="14" fill="#22c55e" opacity="0.15"/>
        <rect x="35" y="30" width="50" height="25" rx="8" fill="#22c55e" opacity="0.3"/>
        <text x="60" y="48" textAnchor="middle" fontFamily="Poppins" fontWeight="700" fontSize="14" fill="#16a34a">₹5,000</text>
        <rect x="35" y="65" width="50" height="10" rx="5" fill="#e2e8f0"/>
        <rect x="35" y="65" width="30" height="10" rx="5" fill="#22c55e" opacity="0.5"/>
        <rect x="35" y="82" width="50" height="10" rx="5" fill="#e2e8f0"/>
        <rect x="35" y="82" width="40" height="10" rx="5" fill="#9b81f5" opacity="0.5"/>
      </svg>
    ),
    showCTA: true,
  },
  {
    step: 'STEP THREE',
    title: 'Grow Your Wealth',
    description:
      'Sit back and let the experts manage your portfolio. We monitor your investments, provide regular reviews, and offer rebalancing recommendations — so your money keeps growing towards your goals.',
    gradient: 'linear-gradient(135deg, #fef3c7, #dcfce7)',
    icon: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="20" width="100" height="80" rx="12" fill="#facc15" opacity="0.15"/>
        <polyline points="25,75 40,60 55,68 70,45 85,50 95,35" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="25,80 40,72 55,76 70,60 85,65 95,52" fill="none" stroke="#9b81f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        <circle cx="95" cy="35" r="5" fill="#22c55e" opacity="0.6"/>
        <rect x="25" y="85" width="70" height="6" rx="3" fill="#e2e8f0"/>
      </svg>
    ),
    showCTA: true,
  },
];

export default function HowItWorks() {
  const anim = useScrollAnimation();

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <div ref={anim.ref}>
          <h2 className={`section-title animate-on-scroll ${anim.className}`}>
            How it <span className="text-gradient">Works?</span>
          </h2>
          <p className={`section-subtitle animate-on-scroll animate-delay-1 ${anim.className}`}>
            Getting started with KDJ Wealth is simple and hassle-free.
            No jargon, no complexity — just smart investing.
          </p>
        </div>

        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <StepCard key={step.step} step={step} index={index} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
