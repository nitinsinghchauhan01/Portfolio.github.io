import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Github } from './icons/Github';
import { Linkedin } from './icons/Linkedin';
import { usePortfolio } from '../context/PortfolioContext';

const Hero = () => {
  const { data } = usePortfolio();

  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              {data.personal.availability}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4 text-white">
              Hello, I'm <br />
              <span className="text-gradient">{data.personal.name}</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-gray-300 font-medium mb-6">
              {data.personal.headline}
            </h2>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {data.personal.description}
            </p>
            
            {/* Tech line */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-400 mb-10 font-medium">
              <span>Python</span>
              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              <span>C++</span>
              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              <span>JavaScript</span>
              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              <span>SQL</span>
              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              <span>Web Development</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a 
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 transition-colors border border-white/10"
              >
                <Mail className="mr-2 w-4 h-4" />
                Contact Me
              </a>
              
              <div className="flex items-center gap-4 ml-2">
                <a 
                  href={data.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors border border-white/10"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={data.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors border border-white/10"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end relative w-full max-w-md mx-auto"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-dashed border-primary/30 animate-[spin_25s_linear_infinite_reverse]"></div>
              
              {/* Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_30px_rgba(99,102,241,0.2)] bg-surface-lighter z-10">
                <img 
                  src="/profile.jpg" 
                  alt={data.personal.name} 
                  className="w-full h-full object-cover object-top filter contrast-125"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x400?text=Profile";
                  }}
                />
              </div>
              
              {/* Floating tech nodes */}
              <div className="absolute top-0 right-10 w-12 h-12 rounded-xl glass-card flex items-center justify-center animate-[bounce_4s_infinite] shadow-lg border border-primary/20 z-20">
                <span className="font-bold text-lg text-cyan-400">{'</>'}</span>
              </div>
              <div className="absolute bottom-10 left-0 w-10 h-10 rounded-full glass-card flex items-center justify-center animate-[bounce_5s_infinite_reverse] shadow-lg border border-primary/20 z-20">
                <span className="text-xs font-bold text-primary">JS</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
