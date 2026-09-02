import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';

const Journey = () => {
  const { data } = usePortfolio();

  if (!data.journey || data.journey.length === 0) return null;

  return (
    <section id="journey" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Developer <span className="text-gradient">Journey</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-px"></div>

          <div className="space-y-12">
            {data.journey.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center md:justify-between w-full ${
                    isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 mt-1 md:mt-0 z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

                  <div className="w-full pl-12 md:pl-0 md:w-5/12">
                    <div className={`glass-card p-6 rounded-2xl relative ${
                      isEven 
                        ? 'md:mr-auto' 
                        : 'md:ml-auto'
                    }`}>
                      {/* Triangle Pointer */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-surface/80 border-t border-r border-white/5 transform ${
                        isEven ? '-right-2 rotate-45 border-l-0 border-b-0' : '-left-2 -rotate-135 border-l-0 border-b-0'
                      }`}></div>

                      <div className="text-sm font-bold text-primary mb-2 bg-primary/10 inline-block px-3 py-1 rounded-full">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Journey;
