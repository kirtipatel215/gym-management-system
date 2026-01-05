import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { APP_NAME } from '../constants';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const handleNavClick = (page: string, hash?: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    if (hash && page === 'home') {
      setTimeout(() => {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navItems = [
    { label: 'Features', id: 'features' },
    { label: 'How it Works', id: 'how-it-works' },
    { label: 'For Members', id: 'members' },
    { label: 'For Trainers', id: 'trainers' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' }
  ];

  // Logic for dynamic styling
  const isDarkBg = isScrolled || isMobileMenuOpen;
  
  // When background is dark (scrolled or mobile menu), text is white. 
  // When background is transparent (at top), text is dark slate because the Hero background is light.
  const logoTextColor = isDarkBg ? 'text-white' : 'text-slate-900';
  const linkTextColor = isDarkBg ? 'text-slate-300' : 'text-slate-600';
  const linkHoverColor = isDarkBg ? 'hover:text-indigo-400' : 'hover:text-indigo-600';
  const signInTextColor = isDarkBg ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900';
  const mobileToggleColor = isDarkBg ? 'text-white' : 'text-slate-900';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4 flex justify-center`}
    >
      <div className={`
        w-full max-w-[1400px] rounded-full px-6 py-3 flex items-center justify-between
        transition-all duration-300
        ${isDarkBg ? 'bg-slate-900/80 backdrop-blur-xl border border-white/5 shadow-2xl' : 'bg-transparent border border-transparent'}
      `}>
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/30">
            L
          </div>
          <span className={`font-bold text-lg tracking-tight transition-colors duration-300 ${logoTextColor}`}>{APP_NAME}</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label} 
              onClick={() => handleNavClick('home', item.id)}
              className={`text-sm font-medium transition-colors duration-300 ${linkTextColor} ${linkHoverColor}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={() => onNavigate('signin')}
            className={`text-sm font-medium transition-colors duration-300 ${signInTextColor}`}
          >
            Sign In
          </button>
          <Button 
            variant="primary" 
            size="sm"
            onClick={() => onNavigate('signup')}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 transition-colors duration-300 ${mobileToggleColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="absolute top-24 left-4 right-4 p-6 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col gap-4 shadow-2xl lg:hidden"
        >
          {navItems.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick('home', item.id)}
              className="text-lg font-medium text-slate-200 py-2 border-b border-slate-800 last:border-0 text-left"
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="secondary" className="w-full" onClick={() => handleNavClick('signin')}>Sign In</Button>
            <Button variant="primary" className="w-full" onClick={() => handleNavClick('signup')}>Get Started</Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;