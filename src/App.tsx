import React, { useEffect } from 'react';
import { ArrowUpIcon } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { SocialProof } from './components/SocialProof';
import { PricingTeaser } from './components/PricingTeaser';
import { Footer } from './components/Footer';
export function App() {
  useEffect(() => {
    // Add fade-in animation on scroll
    const observerOptions = {
      threshold: 0.1
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <SocialProof />
        <PricingTeaser />
      </main>
      <Footer />
      {/* Scroll to top button */}
      <button onClick={scrollToTop} className="fixed bottom-6 right-6 p-2 rounded-full bg-teal-500 text-white shadow-lg hover:bg-teal-600 transition-all z-50" aria-label="Scroll to top">
        <ArrowUpIcon size={24} />
      </button>
    </div>;
}