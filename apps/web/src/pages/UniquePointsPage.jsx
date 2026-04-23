import React from 'react';
import { UniquePointsSection } from '../components/UniquePointsSection';
import { FooterSection } from '../components/FooterSection';
import { Link } from 'react-router-dom';

export const UniquePointsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between bg-warm-white px-12 border-b border-silver-sage/40 h-16">
        <div className="text-2xl font-bold text-forest font-serif">
          SafeThread
        </div>
        
        <div className="flex gap-8 items-center">
          <Link to="/dashboard" className="text-forest hover:text-terracotta transition-colors font-medium">Dashboard</Link>
          <Link to="/timeline" className="text-forest hover:text-terracotta transition-colors font-medium">Timeline</Link>
        </div>

        <button 
          className="bg-sage text-warm-white border-none h-10 px-6 font-medium rounded-md hover:bg-forest transition-colors"
        >
          Our Unique Points
        </button>
      </header>

      <main className="flex-1">
        <UniquePointsSection />
      </main>

      <FooterSection />
    </div>
  );
};
