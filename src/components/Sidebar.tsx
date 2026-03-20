import React from 'react';
import { LayoutDashboard, ShieldAlert, Radio, Smartphone, Settings, LogOut, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'monitor', label: 'Live Monitor', icon: Radio },
    { id: 'hazards', label: 'Hazards', icon: ShieldAlert },
    { id: 'mobile', label: 'Companion', icon: Smartphone },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-border flex flex-col p-6 fixed left-0 top-0 z-50">
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <ShieldCheck className="text-white w-5 h-5" />
        </div>
        <span className="font-bold text-xl tracking-tight text-text-primary">SafeDeck<span className="text-primary">AI</span></span>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 group relative ${
                isActive 
                  ? 'text-primary' 
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-text-secondary group-hover:text-text-primary'}`} />
              <span className="text-[13px] font-semibold">{item.label}</span>
              {isActive && (
                <motion.div 
                  layoutId="active-sidebar-pill"
                  className="absolute left-0 w-1 h-5 bg-primary rounded-r-full"
                />
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto space-y-1 border-t border-border pt-6">
        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-text-secondary hover:text-text-primary hover:bg-surface transition-all">
          <Settings className="w-5 h-5" />
          <span className="text-[13px] font-semibold">Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-text-secondary hover:text-danger hover:bg-danger/5 transition-all">
          <LogOut className="w-5 h-5" />
          <span className="text-[13px] font-semibold">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
