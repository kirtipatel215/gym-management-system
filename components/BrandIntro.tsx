import React from 'react';
import { motion } from 'framer-motion';

const BrandIntro: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Text Content */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1"
            >
                <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-4">Our Philosophy</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    Fitness isn't just about sweat.<br/>
                    It's about <span className="text-slate-500">connection.</span>
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    We built Lumina Fit because traditional gym software is clunky, ugly, and disconnects owners from their members. 
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Our platform bridges the gap with a design-first approach that makes managing a gym feel as good as a personal best.
                </p>
                <div className="flex gap-8">
                    <div>
                        <div className="text-3xl font-bold text-slate-900">500+</div>
                        <div className="text-sm text-slate-500 mt-1">Gyms Partnered</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-slate-900">1M+</div>
                        <div className="text-sm text-slate-500 mt-1">Workouts Logged</div>
                    </div>
                </div>
            </motion.div>

            {/* Image Grid */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1 grid grid-cols-2 gap-4"
            >
                <div className="space-y-4 pt-8">
                    <img 
                        src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=600" 
                        alt="Gym Vibe 1" 
                        className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-500" 
                    />
                    <img 
                        src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=600" 
                        alt="Gym Vibe 2" 
                        className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500" 
                    />
                </div>
                <div className="space-y-4">
                    <img 
                        src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=600" 
                        alt="Gym Vibe 3" 
                        className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500" 
                    />
                    <img 
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600" 
                        alt="Gym Vibe 4" 
                        className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-500" 
                    />
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;