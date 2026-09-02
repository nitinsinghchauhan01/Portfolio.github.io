import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const Learning = () => {
  const { data } = usePortfolio();

  if (!data.learning || data.learning.length === 0) return null;

  return (
    <section id="learning" className="py-24 bg-surface-lighter/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Currently <span className="text-gradient">Learning</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.learning.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 flex items-center gap-4 group hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Learning;
