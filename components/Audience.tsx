import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { AUDIENCE_SECTIONS } from '../constants';
import { Button } from './ui/Button';

const Audience: React.FC = () => {
  return (
    <>
      {AUDIENCE_SECTIONS.map((section, index) => {
        const isReversed = index % 2 !== 0;
        
        return (
          <section key={section.id} id={section.id} className="py-24 relative overflow-hidden">
             {/* Alternate backgrounds */}
            {index % 2 === 0 ? (
                 <div className="absolute inset-0 bg-indigo-50/30 -z-10" />
            ) : (
                <div className="absolute inset-0 bg-white -z-10" />
            )}
            
            <div className="container mx-auto px-6 max-w-[1400px]">
              <div className={`flex flex-col lg:flex-row items-center gap-16 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/50 text-indigo-700 text-xs font-bold mb-6">
                     <section.icon className="w-4 h-4" />
                     {section.title.toUpperCase()}
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                    {section.subtitle}
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {section.description}
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {section.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="primary">
                    Learn More
                  </Button>
                </motion.div>

                {/* Visual Side */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex-1 w-full"
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 bg-white">
                        <img 
                            src={section.image} 
                            alt={section.title} 
                            className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                        />
                        {/* Glass Overlay Card inside image */}
                        <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl hidden md:block">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase">Active Status</p>
                                    <p className="text-lg font-bold text-slate-900">Excellent</p>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                                    <section.icon className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Audience;