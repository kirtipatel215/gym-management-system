import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative z-20">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Everything you need to run a modern gym.
          </h2>
          <p className="text-lg text-slate-600">
            A complete suite of tools designed to work together seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card group rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-300 border border-white/60"
            >
              <div className="p-8 pb-0 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                    {feature.description}
                </p>
                <div className="flex items-center text-indigo-600 font-medium text-sm mb-8 cursor-pointer hover:underline">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
              
              {/* Image Preview Area */}
              <div className="relative h-64 overflow-hidden mt-auto mx-8 mb-8 rounded-2xl">
                 <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay z-10" />
                 <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;