import React from 'react';
import { Mail } from 'lucide-react';
import { Github } from './icons/Github';
import { Linkedin } from './icons/Linkedin';
import { usePortfolio } from '../context/PortfolioContext';

const Footer = () => {
  const { data } = usePortfolio();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="mb-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">{data.personal.name}</h2>
          <p className="text-gray-400 text-sm">
            {data.personal.headline}
          </p>
        </div>
        
        <div className="flex space-x-6 mb-8">
          <a 
            href={data.social.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <Github className="w-5 h-5" />
          </a>
          <a 
            href={data.social.linkedin} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href={`mailto:${data.personal.email}`}
            className="text-gray-500 hover:text-white transition-colors"
            title="Email"
          >
            <span className="sr-only">Email</span>
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear > 2026 ? currentYear : 2026} {data.personal.name}. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
