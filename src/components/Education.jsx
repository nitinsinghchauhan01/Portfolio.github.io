import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const Education = () => {
  const { data } = usePortfolio();

  if (!data.education || data.education.length === 0) return null;

  return (
    <section id="education" className="py-24 bg-surface-lighter/30 border-y border-white/5 relative overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full mix-blend-screen filter blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Education
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {data.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              {/* Highlight bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-cyan-400"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {edu.university}
                  </h3>
                  <div className="text-lg text-gray-300 font-medium mb-3">
                    {edu.degree} — {edu.course}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1.5 text-primary" />
                      {edu.dates}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1.5 text-primary" />
                      {edu.location}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg px-4 py-2 border border-white/10 self-start">
                  <div className="text-xs text-gray-400 mb-0.5">{edu.gradeLabel}</div>
                  <div className="text-xl font-bold text-white">{edu.grade}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Education;
