import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero/Hero';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import ExploreVines from '../../components/ExploreVines/ExploreVines';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import FAQ from '../../components/FAQ/FAQ';
import FinalCTA from '../../components/FinalCTA/FinalCTA';

const VinesPage = () => {
  return (
    <>
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
    </>
  );
};

export default VinesPage;
