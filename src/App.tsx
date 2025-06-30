import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FinanceOperations from './components/FinanceOperations';
import ReportsAnalytics from './components/ReportsAnalytics';
import LogisticsExports from './components/LogisticsExports';
import InvoicingCompliance from './components/InvoicingCompliance';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scrolling for navigation links
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main>
        <section id="overview">
          <HeroSection />
        </section>
        
        <FinanceOperations />
        <ReportsAnalytics />
        <InvoicingCompliance />
        <LogisticsExports />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;