import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm font-medium text-slate-500 ml-1">{label}</label>}
      <input
        className={`
          w-full px-4 py-3 rounded-2xl
          bg-white/50 backdrop-blur-sm
          border border-white/40
          text-slate-800 placeholder:text-slate-400
          focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50
          transition-all duration-300
          shadow-sm
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

export const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string }> = ({ label, className = '', ...props }) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && <label className="text-sm font-medium text-slate-500 ml-1">{label}</label>}
        <textarea
          className={`
            w-full px-4 py-3 rounded-2xl
            bg-white/50 backdrop-blur-sm
            border border-white/40
            text-slate-800 placeholder:text-slate-400
            focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50
            transition-all duration-300
            shadow-sm
            resize-none
            ${className}
          `}
          {...props}
        />
      </div>
    );
  };
