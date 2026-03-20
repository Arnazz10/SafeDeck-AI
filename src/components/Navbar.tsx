import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="glass-nav ml-64 flex items-center justify-between px-8">
      <div className="flex items-center gap-4 bg-surface px-4 py-1.5 rounded-full w-96 border border-transparent focus-within:border-primary/20 transition-all">
        <Search className="w-4 h-4 text-text-secondary" />
        <input 
          type="text" 
          placeholder="Search safety protocols..." 
          className="bg-transparent border-none outline-none text-[13px] w-full text-text-primary placeholder:text-text-secondary font-medium"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[11px] font-bold text-primary uppercase tracking-wider">System Active</span>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-text-secondary hover:text-text-primary transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary rounded-full border-2 border-white" />
          </button>
          
          <div className="h-4 w-[1px] bg-border" />

          <button className="flex items-center gap-3 hover:bg-surface p-1 pr-3 rounded-full transition-all">
            <div className="w-7 h-7 rounded-full bg-surface border border-border overflow-hidden flex items-center justify-center">
              <User className="w-4 h-4 text-text-secondary" />
            </div>
            <span className="text-[12px] font-bold text-text-primary">Cmdr. Arnab</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
