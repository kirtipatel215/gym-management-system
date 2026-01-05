import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-[#4F46E5] text-white hover:bg-[#4338ca] shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 border border-transparent",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-sm",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900",
    glass: "bg-white/40 text-[#0F172A] border border-white/50 backdrop-blur-md hover:bg-white/60 shadow-sm hover:shadow-md"
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
