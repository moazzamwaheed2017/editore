import React, { useState } from 'react';
import { Edit3, Mail, Twitter, Facebook, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [hoveredLink, setHoveredLink] = useState('');

  const productLinks = [
    'AI Detector',
    'Paraphraser', 
    'Grammar Checker',
    'Plagiarism Checker',
    'AI Humanizer',
    'Citation Generator'
  ];

  const companyLinks = [
    'About Us',
    'Careers',
    'Press',
    'Blog',
    'Contact'
  ];

  const resourceLinks = [
    'Help Center',
    'API Documentation',
    'Writing Guide',
    'Templates',
    'Webinars'
  ];

  const legalLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'GDPR'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white text-sm font-semibold rounded-full mb-6">
            📧 Stay Updated
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get the Latest Writing Tips & AI Updates
          </h2>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our newsletter for exclusive writing guides, feature updates, and AI writing insights 
            delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Subscribe →
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Edit3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Editore</span>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering writers worldwide with cutting-edge AI technology. Transform your writing 
              process and achieve excellence with our comprehensive suite of intelligent tools.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Github, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                    onMouseEnter={() => setHoveredLink(link)}
                    onMouseLeave={() => setHoveredLink('')}
                  >
                    {link}
                    <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300 ${
                      hoveredLink === link ? 'w-full' : 'w-0'
                    }`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                    onMouseEnter={() => setHoveredLink(link)}
                    onMouseLeave={() => setHoveredLink('')}
                  >
                    {link}
                    <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300 ${
                      hoveredLink === link ? 'w-full' : 'w-0'
                    }`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                    onMouseEnter={() => setHoveredLink(link)}
                    onMouseLeave={() => setHoveredLink('')}
                  >
                    {link}
                    <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300 ${
                      hoveredLink === link ? 'w-full' : 'w-0'
                    }`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                    onMouseEnter={() => setHoveredLink(link)}
                    onMouseLeave={() => setHoveredLink('')}
                  >
                    {link}
                    <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300 ${
                      hoveredLink === link ? 'w-full' : 'w-0'
                    }`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Editore. All rights reserved. Empowering writers with AI technology.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Made with ❤️ for writers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;