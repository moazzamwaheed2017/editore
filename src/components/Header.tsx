import React, { useState, useEffect } from 'react';
import { Edit3 } from 'lucide-react';

const Header: React.FC = () => {
  const [activeItem, setActiveItem] = useState('');

  const menuItems = [
    'AI Detector',
    'Paraphraser', 
    'Grammar Checker',
    'Summarizer',
    'Plagiarism Checker',
    'AI Humanizer',
    'Citation Generator',
    'Translator',
    'Co-Writer'
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/85 backdrop-blur-[10px] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg flex items-center justify-center">
            <Edit3 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Editore</span>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item}
              className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 group"
              onMouseEnter={() => setActiveItem(item)}
              onMouseLeave={() => setActiveItem('')}
            >
              {item}
              <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300 ${
                activeItem === item ? 'w-full' : 'w-0'
              }`} />
              <div className={`absolute inset-0 bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-lg transition-all duration-300 ${
                activeItem === item ? 'opacity-100' : 'opacity-0'
              }`} />
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2">
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5 bg-gray-700"></div>
            <div className="w-full h-0.5 bg-gray-700"></div>
            <div className="w-full h-0.5 bg-gray-700"></div>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;