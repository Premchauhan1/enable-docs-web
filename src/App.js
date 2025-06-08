import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import WhyEnableDocs from './components/WhyEnableDocs';
import IndustriesWeServe from './components/IndustriesWeServe';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollIndicator from './components/ScrollIndicator';
import { initScrollAnimation, initSmoothScroll } from './utils/scrollAnimation';

function App() {
  // Initialize scroll animations when component mounts
  useEffect(() => {
    // Initialize scroll-based animations
    const cleanupScrollAnimation = initScrollAnimation();
    
    // Initialize smooth scrolling for anchor links
    initSmoothScroll();
    
    // Cleanup function for when component unmounts
    return () => {
      cleanupScrollAnimation();
    };
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <ScrollIndicator />
      <Navbar />
      <Header />
      <Services />
      <AboutUs />
      <WhyEnableDocs />
      <IndustriesWeServe />
      <Footer />
    </div>
  );
}

export default App;
