import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import SpiderCrawlAnimation from './SpiderCrawlAnimation';

const HeroSection: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    "Revolutionize Your Writing",
    "AI Meets Human Creativity", 
    "Your Smart Writing Companion"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center overflow-hidden">
      <SpiderCrawlAnimation />
      
      {/* Light beams */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent transform -rotate-45 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="inline-block transform transition-all duration-1000 ease-in-out">
              {phrases[currentPhrase]}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform your writing process with cutting-edge AI technology. 
            From grammar checking to content generation, experience the future of writing.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10 flex items-center">
              Try Editore
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full transition-all duration-300 hover:border-teal-400 hover:text-teal-600 hover:shadow-lg">
            <span className="flex items-center">
              Explore Features
              <Play className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" />
            </span>
          </button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-20 animate-bounce delay-300"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full opacity-20 animate-bounce delay-700"></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-gradient-to-r from-blue-300 to-teal-300 rounded-full opacity-30 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;