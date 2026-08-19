import { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/FloatingElements/WhatsAppButton';
import ScrollToTop from './components/FloatingElements/ScrollToTop';
import VinesPage from './pages/VinesPage/VinesPage';
import AboutPage from './pages/AboutPage/AboutPage';
import NRIPage from './pages/NRIPage/NRIPage';
import BlogsPage from './pages/BlogsPage/BlogsPage';
import SupportPage from './pages/SupportPage/SupportPage';
import CalculatorsPage from './pages/CalculatorsPage/CalculatorsPage';
import DisclaimerPage from './pages/DisclaimerPage/DisclaimerPage';
import GrievancePolicyPage from './pages/GrievancePolicyPage/GrievancePolicyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage/TermsPage';
import DisclosurePage from './pages/DisclosurePage/DisclosurePage';
import { initGSAP, killGSAP } from './gsapAnimations';
import './App.css';

/* Scroll to top instantly on route change */
function ScrollToTopOnNav() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTopOnNav />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<VinesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route path="/nri-investments" element={<NRIPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/grievance-policy" element={<GrievancePolicyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-use" element={<TermsPage />} />
            <Route path="/disclosure" element={<DisclosurePage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
