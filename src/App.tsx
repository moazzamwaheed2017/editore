import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PersonaSection from './components/PersonaSection';
import VideoSection from './components/VideoSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PersonaSection />
        <VideoSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;