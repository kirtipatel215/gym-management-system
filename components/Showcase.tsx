import React from 'react';
import { motion } from 'framer-motion';

const Showcase: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1540497077202-7c8a33801524?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1534258936925-c48947387603?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Designed for modern spaces.
            </h2>
            <p className="text-slate-400 text-lg">
                Technology that looks as good as your facility.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((src, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative rounded-2xl overflow-hidden h-80 group ${index % 2 === 0 ? 'lg:translate-y-8' : ''}`}
                >
                    <img 
                        src={src} 
                        alt={`Showcase ${index}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;