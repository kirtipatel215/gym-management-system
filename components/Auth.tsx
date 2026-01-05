import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Lock, User, Github, Shield, Users, UserCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { APP_NAME } from '../constants';
import { UserRole } from '../App';

interface AuthProps {
  mode: 'signin' | 'signup';
  onNavigate: (page: string) => void;
  onLogin: (role: UserRole) => void;
}

const Auth: React.FC<AuthProps> = ({ mode: initialMode, onNavigate, onLogin }) => {
  const [mode, setMode] = useState(initialMode);
  const isSignIn = mode === 'signin';

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#F8FAFC]">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass-card w-full max-w-md p-8 rounded-[2rem] shadow-2xl relative z-10 mx-4"
      >
        <button 
          onClick={() => onNavigate('home')}
          className="absolute top-6 left-6 p-2 rounded-full hover:bg-slate-100/50 transition-colors text-slate-500"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="text-center mb-8 mt-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg shadow-indigo-500/30">
            L
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            {isSignIn ? 'Welcome back' : 'Create an account'}
          </h2>
          <p className="text-slate-500 text-sm">
            {isSignIn ? 'Enter your details to access your workspace.' : 'Start your 30-day free trial today.'}
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); }}>
          {!isSignIn && (
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-800 placeholder:text-slate-400 shadow-sm transition-all"
              />
            </div>
          )}
          
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="email" 
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-800 placeholder:text-slate-400 shadow-sm transition-all"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="password" 
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-800 placeholder:text-slate-400 shadow-sm transition-all"
            />
          </div>

          <div className="pt-2">
             <p className="text-xs font-bold text-slate-400 mb-3 text-center uppercase tracking-wide">Select Role to Demo</p>
             <div className="grid grid-cols-1 gap-2">
                <Button variant="primary" className="w-full" onClick={() => onLogin('member')}>
                    Sign In as Member
                </Button>
                <div className="grid grid-cols-2 gap-2">
                    <Button variant="secondary" className="text-xs" onClick={() => onLogin('trainer')}>
                        As Trainer
                    </Button>
                    <Button variant="secondary" className="text-xs" onClick={() => onLogin('admin')}>
                        As Admin
                    </Button>
                </div>
             </div>
          </div>
        </form>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px bg-slate-200 flex-1" />
          <span className="text-xs text-slate-400 font-medium">OR</span>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/60 border border-white/60 hover:bg-white text-slate-600 text-sm font-medium transition-all shadow-sm">
            <Github className="w-4 h-4" /> Github
          </button>
          <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/60 border border-white/60 hover:bg-white text-slate-600 text-sm font-medium transition-all shadow-sm">
            <div className="w-4 h-4 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold">G</div> Google
          </button>
        </div>

        <p className="text-center mt-8 text-sm text-slate-500">
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => setMode(isSignIn ? 'signup' : 'signin')}
            className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
          >
            {isSignIn ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;