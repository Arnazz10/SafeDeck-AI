import React from 'react';
import { motion } from 'motion/react';
import { Settings as SettingsIcon, Bell, Shield, Eye, Smartphone, Save } from 'lucide-react';

const SettingsView: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-10 space-y-10"
    >
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-2">Settings.</h1>
          <p className="text-text-secondary text-lg font-light">Configure your safety environment and preferences.</p>
        </div>
        <button className="pill-button pill-button-primary flex items-center gap-2">
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="bento-card p-8 space-y-8">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Bell className="w-5 h-5 text-primary" /> Notifications
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Hazard Alerts', desc: 'Real-time hazard detection notifications.' },
                { label: 'System Health', desc: 'Weekly reports on sensor and AI status.' },
                { label: 'Mobile Sync', desc: 'Sync alerts with your companion device.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">{item.label}</p>
                    <p className="text-xs text-text-secondary">{item.desc}</p>
                  </div>
                  <div className="w-12 h-6 rounded-full bg-primary/20 relative p-1 cursor-pointer">
                    <div className="w-4 h-4 bg-primary rounded-full absolute right-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card p-8 space-y-8">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Shield className="w-5 h-5 text-primary" /> Security
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Two-Factor Auth', desc: 'Biometric verification for critical overrides.' },
                { label: 'Session Timeout', desc: 'Auto-logout after 15 minutes of inactivity.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">{item.label}</p>
                    <p className="text-xs text-text-secondary">{item.desc}</p>
                  </div>
                  <div className="w-12 h-6 rounded-full bg-border/20 relative p-1 cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute left-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bento-card p-8 space-y-8">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Eye className="w-5 h-5 text-primary" /> Appearance
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border-2 border-primary bg-white cursor-pointer transition-all">
                <div className="w-full h-12 bg-surface rounded-lg mb-3" />
                <p className="text-xs font-bold text-center">Light Mode</p>
              </div>
              <div className="p-4 rounded-2xl border border-border bg-surface opacity-50 cursor-not-allowed">
                <div className="w-full h-12 bg-black rounded-lg mb-3" />
                <p className="text-xs font-bold text-center text-text-secondary">Dark Mode (Beta)</p>
              </div>
            </div>
          </div>

          <div className="bento-card bg-primary p-10 text-white space-y-6">
            <Smartphone className="w-12 h-12" />
            <h3 className="text-3xl font-bold">SafeDeck Companion</h3>
            <p className="opacity-80 font-light leading-relaxed">
              Scan the QR code to pair your mobile device with your operator account.
            </p>
            <div className="w-32 h-32 bg-white rounded-2xl p-2">
               <div className="w-full h-full bg-[radial-gradient(square,black_2px,transparent_2px)] bg-[length:10px_10px]" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SettingsView;
