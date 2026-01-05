import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

const CTAStrip: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-[1400px]">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 shadow-2xl text-center py-20 px-8 md:px-20"
        >
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
            
            {/* Glow blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Your fitness journey deserves better technology.
                </h2>
                <p className="text-indigo-100 text-lg md:text-xl mb-10">
                    Join thousands of gyms transforming their member experience today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="secondary" size="lg" className="border-none shadow-xl text-indigo-600 hover:text-indigo-700">
                        Get Started Now
                    </Button>
                    <Button variant="glass" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                        Contact Sales
                    </Button>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAStrip;