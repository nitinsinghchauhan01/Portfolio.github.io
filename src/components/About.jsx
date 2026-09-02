import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Target, Calendar } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const About = () => {
  const { data } = usePortfolio();

  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-400" />,
      title: "B.Tech CSE",
      value: "Lovely Professional University"
    },
    {
      icon: <Target className="w-6 h-6 text-cyan-400" />,
      title: "CGPA",
      value: "8.2"
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-400" />,
      title: "Graduation",
      value: "2029"
    },
    {
      icon: <Code2 className="w-6 h-6 text-emerald-400" />,
      title: "Focus",
      value: "Software Development"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m a Computer Science and Engineering student at Lovely Professional University, focused on building practical software projects and strengthening my programming and problem-solving skills. I enjoy working with web technologies, databases, and programming while continuously learning and improving.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {cards.map((card, idx) => (
              <div 
                key={idx} 
                className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-sm text-gray-400 font-medium mb-1">{card.title}</h3>
                <p className="text-lg font-semibold text-white">{card.value}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
