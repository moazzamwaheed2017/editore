import React, { useState } from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See AI Writing in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how Editore transforms your writing process with intelligent suggestions, 
            real-time corrections, and seamless collaboration features.
          </p>
        </div>

        <div className="relative group">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.02]">
            {/* Video placeholder */}
            <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-teal-900/20 flex items-center justify-center relative">
              <img 
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop"
                alt="AI Writing Demo"
                className="w-full h-full object-cover"
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="group/play w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl"
                >
                  <Play className="w-8 h-8 text-blue-600 ml-1 group-hover/play:scale-110 transition-transform duration-300" />
                </button>
              </div>

              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </div>

            {/* Glowing effects */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">AI</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Suggestions</h3>
              <p className="text-gray-600 text-sm">Real-time AI-powered writing recommendations</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instant Corrections</h3>
              <p className="text-gray-600 text-sm">Grammar and style fixes as you type</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">Seamless team writing and editing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;