import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const CertificateCard = ({ cert }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full relative"
    >
      <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-primary">
        <Award className="w-5 h-5" />
      </div>
      
      <div className="relative h-48 overflow-hidden bg-surface-lighter p-4 flex items-center justify-center">
        <img 
          src={cert.image} 
          alt={cert.title} 
          className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://via.placeholder.com/400x300/1e1e1e/6366f1?text=${encodeURIComponent(cert.title)}`;
          }}
          loading="lazy"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow border-t border-white/5">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
          {cert.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          Issuer: <span className="text-gray-300">{cert.issuer}</span>
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">{cert.date}</span>
          
          <a 
            href={cert.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-hover transition-colors bg-primary/10 px-3 py-1.5 rounded-lg"
          >
            View Certificate <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  const { data } = usePortfolio();

  if (!data.certificates || data.certificates.length === 0) return null;

  return (
    <section id="certificates" className="py-24 bg-surface-lighter/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Certifications
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.certificates.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Certificates;
