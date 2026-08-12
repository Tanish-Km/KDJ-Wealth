import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero/Hero';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import ExploreVines from '../../components/ExploreVines/ExploreVines';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import FAQ from '../../components/FAQ/FAQ';
import FinalCTA from '../../components/FinalCTA/FinalCTA';
import { initGSAP, killGSAP } from '../../gsapAnimations';

const VinesPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx;
    const timer = setTimeout(() => {
      ctx = initGSAP(containerRef.current);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (ctx && typeof ctx.revert === 'function') {
        ctx.revert();
      }
      killGSAP();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <Helmet>
        <title>KDJ Wealth | Trusted Financial Partner for Lasting Wealth</title>
        <meta name="description" content="KDJ Wealth offers personalized investment solutions, mutual fund advisory, goal-based financial planning, and comprehensive wealth management services." />
      </Helmet>
      <Hero />
      <WhyChoose />
      <ExploreVines />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default VinesPage;
