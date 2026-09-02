import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const Experience = () => {
  const { data } = usePortfolio();

  if (!data.experience || data.experience.length === 0) return null;

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Experience <span className="text-gradient">& Learning</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {data.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="text-primary font-medium text-sm">{exp.company} • {exp.dates}</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
