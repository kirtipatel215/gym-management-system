import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Audience from './components/Audience';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTAStrip from './components/CTAStrip';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

export type UserRole = 'member' | 'trainer' | 'admin' | null;

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [userRole, setUserRole] = useState<UserRole>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setCurrentPage('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setUserRole(null);
    handleNavigate('home');
  };

  if (currentPage === 'dashboard' && userRole) {
    return <Dashboard role={userRole} onLogout={handleLogout} />;
  }

  if (currentPage === 'signin' || currentPage === 'signup') {
    return <Auth mode={currentPage as 'signin' | 'signup'} onNavigate={handleNavigate} onLogin={handleLogin} />;
  }

  return (
    <div className="relative min-h-screen text-slate-900 overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900 bg-[#F8FAFC]">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main>
        <Hero />
        <BrandIntro />
        <Features />
        <HowItWorks />
        <Audience />
        <Showcase />
        <Testimonials />
        <Pricing />
        <CTAStrip />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;