import React from 'react';
import { motion } from 'framer-motion';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white/40 backdrop-blur-sm relative border-y border-white/50">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="mb-20 text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simplicity in motion.
          </h2>
          <p className="text-lg text-slate-600">From sign-up to sweat in four simple steps.</p>
        </div>

        <div className="flex flex-col gap-32 relative mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-200 to-transparent -translate-x-1/2" />

          {STEPS.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Text Side */}
                <div className={`flex-1 text-center ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full glass border-2 border-indigo-100 text-indigo-600 font-bold text-xl mb-6 shadow-xl z-10 relative bg-white`}>
                    {step.id}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0 inline-block">
                    {step.description}
                  </p>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full">
                  <div className="relative group rounded-[2rem] overflow-hidden shadow-2xl glass p-3 border border-white/60">
                     <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/3]">
                        <img 
                            src={step.image} 
                            alt={step.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                     </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;