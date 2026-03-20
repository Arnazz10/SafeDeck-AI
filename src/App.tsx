/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'motion/react';
import { ShieldCheck, ArrowRight, Zap, ShieldAlert, Radio, Smartphone, ChevronRight, Activity, Bell, Search, User, LayoutDashboard, Settings, LogOut } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardView from './views/DashboardView';
import HazardDetailView from './views/HazardDetailView';
import LiveMonitorView from './views/LiveMonitorView';
import MobileCompanionView from './views/MobileCompanionView';
import SettingsView from './views/SettingsView';
import UserView from './views/UserView';
import LoginView from './views/LoginView';
import { Hazard } from './types';

// --- Landing Components ---

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const LandingPage = ({ onEnter }: { onEnter: () => void }) => {
  return (
    <div className="bg-white text-text-primary overflow-x-hidden">
      {/* Landing Nav */}
    <nav className="fixed top-0 left-0 right-0 z-[100] h-[52px] flex items-center justify-between px-6 backdrop-blur-xl bg-white/80 border-b border-border">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-primary w-5 h-5" />
          <span className="font-bold text-lg tracking-tight">SafeDeck<span className="text-primary">AI</span></span>
        </div>
        <button 
          onClick={onEnter}
          className="pill-button pill-button-dark text-[12px] font-bold"
        >
          Operator Login
        </button>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,113,227,0.05)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-5xl text-center space-y-8">
          <Reveal>
            <h1 className="hero-title">
              Automotive Safety. <br />
              <span className="text-primary">AI-Driven.</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-text-secondary text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
              SafeDeckAI uses advanced neural networks to detect car accidents, technical failures, and road hazards in real-time. 
              The future of vehicle safety is here.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <button 
                onClick={onEnter}
                className="pill-button pill-button-primary px-10 py-4 text-lg flex items-center gap-2 group"
              >
                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="pill-button pill-button-ghost text-lg">
                Watch the film
              </button>
            </div>
          </Reveal>
        </div>

        {/* Hero Image / Mockup */}
        <Reveal delay={0.6}>
          <div className="mt-24 relative max-w-6xl mx-auto px-6">
            <div className="rounded-[32px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-border bg-surface aspect-[16/9]">
              <img 
                src="/src/assets/car_hazard_detection.png" 
                alt="Car Hazard Detection" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Bento Grid Features */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Mastering the road.</h2>
            <p className="text-text-secondary text-xl font-light">Advanced AI for the next generation of automotive security.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
          <div className="md:col-span-8 bento-card relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Neural Engine.</h3>
              <p className="text-text-secondary text-lg font-light max-w-md">
                Our custom-built AI processes thousands of data points per second to identify anomalies before they become hazards.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-100 group-hover:scale-105 transition-transform duration-1000">
              <img src="/src/assets/car_neural_net.png" className="w-full h-full object-cover rounded-tl-[60px]" />
            </div>
          </div>
          
          <div className="md:col-span-4 bento-card bg-primary text-white flex flex-col justify-end relative overflow-hidden group">
            <img src="/src/assets/car_dashboard.png" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10">
              <ShieldAlert className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-2">Instant Response.</h3>
              <p className="opacity-80 font-light">
                Automated protocols trigger within milliseconds of detection.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bento-card flex flex-col justify-between relative overflow-hidden group h-full">
            <img src="/src/assets/traffic_monitor.png" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center">
                <Radio className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Live Telemetry.</h3>
                <p className="text-text-secondary text-sm font-light">
                  Continuous feedback loop from every sensor in the network.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 bento-card flex items-center justify-between">
            <div className="max-w-md">
              <h3 className="text-3xl font-bold mb-4">Companion App.</h3>
              <p className="text-text-secondary text-lg font-light">
                Stay connected in the field with our mobile interface. Real-time alerts and checklists for rapid resolution.
              </p>
            </div>
            <div className="hidden md:block w-48 h-48 bg-white rounded-3xl shadow-xl border border-border flex items-center justify-center overflow-hidden">
              <img src="/src/assets/companion_app.png" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-primary w-6 h-6" />
              <span className="font-bold text-xl tracking-tight">SafeDeckAI</span>
            </div>
            <p className="text-text-secondary text-sm max-w-xs leading-relaxed">
              The world's most advanced real-time hazard detection system. Built for the future of safety.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <h4 className="text-[11px] font-bold uppercase tracking-widest">Product</h4>
              <ul className="space-y-2 text-[13px] text-text-secondary">
                <li className="hover:text-primary cursor-pointer">Features</li>
                <li className="hover:text-primary cursor-pointer">Security</li>
                <li className="hover:text-primary cursor-pointer">Enterprise</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[11px] font-bold uppercase tracking-widest">Company</h4>
              <ul className="space-y-2 text-[13px] text-text-secondary">
                <li className="hover:text-primary cursor-pointer">About</li>
                <li className="hover:text-primary cursor-pointer">Careers</li>
                <li className="hover:text-primary cursor-pointer">Contact</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[11px] font-bold uppercase tracking-widest">Legal</h4>
              <ul className="space-y-2 text-[13px] text-text-secondary">
                <li className="hover:text-primary cursor-pointer">Privacy</li>
                <li className="hover:text-primary cursor-pointer">Terms</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border/50 text-[11px] text-text-secondary flex justify-between">
          <span>© 2024 SafeDeckAI Inc. All rights reserved.</span>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('operator_auth') === 'true';
  });
  const [showLogin, setShowLogin] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedHazard, setSelectedHazard] = useState<Hazard | null>(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('operator_auth', 'true');
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('operator_auth');
    setActiveView('dashboard');
  };

  const handleSelectHazard = (hazard: Hazard) => {
    setSelectedHazard(hazard);
    setActiveView('hazard-detail');
  };

  const handleBackToDashboard = () => {
    setSelectedHazard(null);
    setActiveView('dashboard');
  };

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
      case 'hazards':
        return <DashboardView onSelectHazard={handleSelectHazard} />;
      case 'monitor':
        return <LiveMonitorView />;
      case 'mobile':
        return <MobileCompanionView />;
      case 'settings':
        return <SettingsView />;
      case 'user':
        return <UserView />;
      case 'hazard-detail':
        return selectedHazard ? (
          <HazardDetailView hazard={selectedHazard} onBack={handleBackToDashboard} />
        ) : (
          <DashboardView onSelectHazard={handleSelectHazard} />
        );
      default:
        return <DashboardView onSelectHazard={handleSelectHazard} />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      {!isAuthenticated ? (
        !showLogin ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
          >
            <LandingPage onEnter={() => setShowLogin(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="login"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <LoginView onLogin={handleLogin} />
          </motion.div>
        )
      ) : (
        <motion.div 
          key="app"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="min-h-screen bg-white text-text-primary flex"
        >
          <Sidebar activeView={activeView} onViewChange={setActiveView} onLogout={handleLogout} />
          
          <div className="flex-1 flex flex-col min-w-0">
            <Navbar onUserClick={() => setActiveView('user')} />
            
            <main className="flex-1 ml-64 pt-[52px] overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeView}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {renderView()}
                </motion.div>
              </AnimatePresence>
            </main>
          </div>

          {/* Toast Notification Simulation */}
          <div className="fixed bottom-10 right-10 z-[100]">
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="bg-white/80 backdrop-blur-2xl p-5 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-border flex items-center gap-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-0.5">Live Update</p>
                <p className="text-sm font-bold tracking-tight">Sector 4: Analysis Complete</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
