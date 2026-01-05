import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative">
       {/* Background Blob */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600">
            Simple plans that grow with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mx-auto">
          {PRICING_PLANS.map((plan, index) => {
            const isMiddle = index === 1;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`
                  relative p-8 rounded-[2rem] border transition-all duration-300
                  ${isMiddle 
                    ? 'glass shadow-2xl scale-105 z-10 border-indigo-200' 
                    : 'bg-white/40 border-white/50 backdrop-blur-sm shadow-lg hover:bg-white/60'
                  }
                `}
              >
                {isMiddle && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-lg font-medium text-slate-500 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-slate-900 mb-2">{plan.price}</div>
                  <span className="text-sm text-slate-400">per month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isMiddle ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                    variant={isMiddle ? 'primary' : 'glass'} 
                    className="w-full"
                >
                  Choose {plan.name}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;