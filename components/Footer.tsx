import React from 'react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/50 backdrop-blur-md border-t border-slate-200 py-16">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">L</div>
                    <span className="font-semibold text-slate-800">{APP_NAME}</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                    Redefining fitness management with elegance and intelligence.
                </p>
            </div>
            
            <div>
                <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">Features</a></li>
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">Enterprise</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a></li>
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms</a></li>
                </ul>
            </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved. Designed with precision.
        </div>
      </div>
    </footer>
  );
};

export default Footer;