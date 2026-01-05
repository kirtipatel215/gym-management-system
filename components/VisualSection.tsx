import React from 'react';
import { motion } from 'framer-motion';

const VisualSection: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-[1400px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[60vh] md:h-[70vh] rounded-[3rem] overflow-hidden shadow-2xl"
        >
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Gym Interior" 
            className="w-full h-full object-cover"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

          {/* Floating Glass Caption */}
          <div className="absolute bottom-12 left-6 right-6 md:left-12 md:bottom-12 flex justify-start">
             <motion.div 
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.3, duration: 0.6 }}
               className="glass px-8 py-6 rounded-2xl max-w-lg border border-white/20"
             >
                <p className="text-xl md:text-2xl font-medium text-white drop-shadow-sm">
                  “Designed for consistency, motivation, and clarity. Experience the difference.”
                </p>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualSection;