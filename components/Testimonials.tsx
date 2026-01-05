import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* Background Gradients */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10" />
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by the best.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <blockquote className="text-lg text-slate-700 mb-8 flex-1 leading-relaxed">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-4 mt-auto">
                <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;