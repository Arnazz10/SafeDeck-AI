import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, User, ArrowRight, Car } from 'lucide-react';

interface LoginViewProps {
  onLogin: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md space-y-8 relative z-10"
      >
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-primary rounded-[24px] flex items-center justify-center shadow-2xl shadow-primary/20">
              <ShieldCheck className="text-white w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">SafeDeck<span className="text-primary">AI</span></h1>
          <p className="text-text-secondary font-light">Secure Operator Portal • Central Control</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-text-secondary" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Operator Email"
                className="w-full pl-12 pr-4 py-4 bg-surface border border-border rounded-2xl focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-text-secondary" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Access Key"
                className="w-full pl-12 pr-4 py-4 bg-surface border border-border rounded-2xl focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-hover shadow-xl shadow-primary/20 active:scale-[0.98] transition-all group"
          >
            Authorize Access <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="pt-8 flex items-center justify-center gap-8 border-t border-border">
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 cursor-help">
            <Car className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Auto-Detect ON</span>
          </div>
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 cursor-help">
             <ShieldCheck className="w-4 h-4" />
             <span className="text-[10px] font-bold uppercase tracking-widest">Encrypted SSL</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginView;
