import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(58, 134, 255, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#e1e8f2] via-[#f0f4f8] to-[#e1e8f2] flex items-center justify-center overflow-hidden">
      {/* Spider Crawl Animation Background */}
      <SpiderCrawlAnimation />
      
      {/* Animated Light Beams */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 3 }}
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-[#3a86ff] to-transparent transform rotate-45"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-[#00c896] to-transparent transform -rotate-45"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#3a86ff] to-[#00c896] rounded-full opacity-20"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-[#00c896] to-[#3a86ff] rounded-full opacity-20"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 left-5 w-12 h-12 bg-gradient-to-r from-[#3a86ff]/30 to-[#00c896]/30 rounded-full opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Powered by AI Badge */}
        <motion.div 
          className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#00c896]/20 mb-8"
          variants={itemVariants}
        >
          <motion.div 
            className="w-2 h-2 bg-[#00c896] rounded-full mr-2"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span className="text-sm font-medium text-[#1a1a1a]">⚡ Powered by Advanced AI</span>
        </motion.div>

        {/* Animated Headline */}
        <motion.div className="mb-6" variants={itemVariants}>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight"
            style={{ letterSpacing: '-0.96px' }}
          >
            <motion.span
              key={currentPhrase}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
              className="inline-block bg-gradient-to-r from-[#1a1a1a] via-[#3a86ff] to-[#00c896] bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% 100%',
                animation: 'gradient-shift 3s ease-in-out infinite'
              }}
            >
              {phrases[currentPhrase]}
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          className="text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed mb-12"
          variants={itemVariants}
        >
          Transform your writing process with cutting-edge AI technology. 
          From grammar checking to content generation, experience the future of writing.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.button 
            className="group relative px-8 py-4 bg-gradient-to-r from-[#3a86ff] to-[#00c896] text-white font-semibold rounded-full overflow-hidden shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#3a86ff]/80 to-[#00c896]/80"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center">
              Try Editore Free
              <motion.div
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.button>
          
          <motion.button 
            className="group px-8 py-4 border-2 border-[#3a86ff]/30 text-[#1a1a1a] font-semibold rounded-full transition-all duration-300 hover:border-[#00c896] hover:bg-[#00c896]/5 hover:shadow-lg backdrop-blur-sm"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="flex items-center">
              <motion.div
                className="mr-2 w-6 h-6 border-2 border-[#3a86ff] rounded-full flex items-center justify-center"
                whileHover={{ 
                  borderColor: "#00c896",
                  backgroundColor: "#00c896",
                  color: "#ffffff"
                }}
              >
                <Play className="w-3 h-3 ml-0.5" />
              </motion.div>
              Explore Features
            </span>
          </motion.button>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {[
            { icon: "🤖", title: "AI-Powered", desc: "Advanced algorithms for intelligent writing assistance" },
            { icon: "⚡", title: "Real-time", desc: "Instant feedback and suggestions as you type" },
            { icon: "🎯", title: "Precision", desc: "Accurate grammar, style, and tone improvements" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="text-3xl mb-3"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-semibold text-[#1a1a1a] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#4a4a4a]">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#3a86ff]/30 rounded-full flex justify-center"
          animate={{ borderColor: ["rgba(58, 134, 255, 0.3)", "rgba(0, 200, 150, 0.6)", "rgba(58, 134, 255, 0.3)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-[#00c896] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;