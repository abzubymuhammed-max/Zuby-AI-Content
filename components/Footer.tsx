
import React from 'react';
import { Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-[#0a0a0c]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-600/20 rounded-lg">
              <Cpu className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              ZUBY <span className="text-blue-400">AI</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#about" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">About</a>
            <a href="#activities" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">Activities</a>
            <a href="#projects" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">Projects</a>
            <a href="#skills" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">Skills</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <p className="text-gray-600 text-sm">
            © {currentYear} Zuby AI Content. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm italic">
            "Navigating the intelligence age, one prompt at a time."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
