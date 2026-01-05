import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input, TextArea } from './ui/Input';
import { Button } from './ui/Button';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col md:flex-row gap-16 items-start mx-auto">
            
            {/* Text Info */}
            <div className="flex-1 sticky top-32">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Let's shape the future together.
                </h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                    Ready to modernize your fitness facility? Our team is ready to help you build the perfect setup for your gym.
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                            ✉️
                        </div>
                        <div>
                            <div className="text-sm font-medium text-slate-500">Email Us</div>
                            <div className="font-semibold text-slate-900">hello@luminafit.com</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                            📍
                        </div>
                        <div>
                            <div className="text-sm font-medium text-slate-500">Visit Us</div>
                            <div className="font-semibold text-slate-900">San Francisco, CA</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Glass Form */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
            >
                <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-[2.5rem] shadow-2xl space-y-6 border border-white/50 bg-white/40">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input placeholder="First Name" label="Name" required />
                        <Input placeholder="Last Name" label="Last Name" required />
                    </div>
                    <Input type="email" placeholder="john@gym.com" label="Email Address" required />
                    <TextArea rows={4} placeholder="Tell us about your gym..." label="Message" required />
                    
                    <Button variant="primary" className="w-full h-12 text-lg" disabled={submitted}>
                        {submitted ? 'Message Sent!' : 'Send Message'}
                    </Button>
                    {submitted && (
                        <p className="text-center text-green-600 text-sm font-medium animate-pulse">
                            Thanks! We'll be in touch shortly.
                        </p>
                    )}
                </form>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;