import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from './icons/Github';
import { usePortfolio } from '../context/PortfolioContext';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden bg-surface-lighter">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://via.placeholder.com/600x400/1e1e1e/6366f1?text=${encodeURIComponent(project.title)}`;
          }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-colors"
              title="View Source"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.liveDemo && (
            <a 
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-colors"
              title="View Live"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs text-primary font-semibold mb-2 tracking-wider uppercase">
          {project.category}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs font-medium text-gray-500 bg-white/5 px-2 py-1 rounded">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { data } = usePortfolio();
  const [filter, setFilter] = useState('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(data.projects.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, [data.projects]);

  const filteredProjects = data.projects.filter(p => 
    filter === 'All' || p.category === filter
  );

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? 'bg-primary text-white' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Projects;
