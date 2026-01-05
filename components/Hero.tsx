import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg" 
            alt="Gym Background" 
            className="w-full h-full object-cover opacity-20 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/80 to-[#F8FAFC]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent" />
      </div>

      {/* Ambient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-sm font-medium text-slate-600">Lumina Fit v2.0 is live</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Smarter Fitness. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              Beautifully Managed.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            The all-in-one platform for modern gyms, trainers, and members. 
            Experience a seamless, glass-inspired interface designed for growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button variant="primary" size="lg" className="w-full sm:w-auto group">
              Get Started 
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
                variant="glass" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Features
            </Button>
          </div>
        </motion.div>

        {/* Floating Glass Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="glass-card rounded-[2.5rem] p-3 md:p-5 shadow-2xl overflow-hidden border border-white/60 bg-white/40">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9]">
                <img 
                src="https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg" 
                alt="Dashboard Preview" 
                className="w-full h-full object-cover opacity-90"
                />
                {/* Overlay UI elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
            </div>
             
             {/* Floating Stats */}
             <div className="absolute top-12 left-10 hidden md:block">
                 <div className="glass px-6 py-4 rounded-2xl shadow-lg flex items-center gap-4 animate-float">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                    <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Revenue</div>
                        <div className="text-xl font-bold text-slate-900">$124k</div>
                    </div>
                 </div>
             </div>

             <div className="absolute bottom-12 right-10 hidden md:block">
                 <div className="glass px-6 py-4 rounded-2xl shadow-lg flex items-center gap-4 animate-float animation-delay-2000">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                    <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Members</div>
                        <div className="text-xl font-bold text-slate-900">1,248</div>
                    </div>
                 </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;