import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, CheckCircle2, Activity, Radio, ArrowUpRight, Zap } from 'lucide-react';
import { SYSTEM_STATS, MOCK_HAZARDS } from '../mockData';
import { Hazard } from '../types';
import HazardCard from '../components/HazardCard';

interface DashboardViewProps {
  onSelectHazard: (hazard: Hazard) => void;
}

const StatCard = ({ label, value, icon: Icon, color = 'primary' }: any) => (
  <div className="bento-card flex flex-col justify-between p-6">
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-${color}/5`}>
      <Icon className={`w-5 h-5 text-${color}`} />
    </div>
    <div>
      <p className="text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-1">{label}</p>
      <h3 className="text-2xl font-extrabold">{value}</h3>
    </div>
  </div>
);

const DashboardView: React.FC<DashboardViewProps> = ({ onSelectHazard }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-10 space-y-10"
    >
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-2">System Status.</h1>
          <p className="text-text-secondary text-lg font-light">Real-time monitoring across all active sectors.</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Global Health</p>
          <p className="text-2xl font-extrabold text-primary">{SYSTEM_STATS.systemHealth}%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Active Hazards" value={SYSTEM_STATS.activeHazards} icon={ShieldAlert} color="primary" />
        <StatCard label="Resolved Today" value={SYSTEM_STATS.resolvedToday} icon={CheckCircle2} color="primary" />
        <StatCard label="Avg Response" value={SYSTEM_STATS.avgResponseTime} icon={Zap} color="primary" />
        <StatCard label="Live Sensors" value="1,248" icon={Activity} color="primary" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Active Feed.</h2>
            <button className="text-[12px] font-bold text-primary hover:underline">View History</button>
          </div>
          
          <div className="space-y-4">
            {MOCK_HAZARDS.map(hazard => (
              <HazardCard key={hazard.id} hazard={hazard} onClick={onSelectHazard} />
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Sector 4.</h2>
            <button className="p-2 rounded-full hover:bg-surface transition-colors">
              <ArrowUpRight className="w-5 h-5 text-text-secondary" />
            </button>
          </div>

          <div className="bento-card aspect-square relative overflow-hidden p-0 group border-2 border-primary/20 shadow-2xl">
            <img 
              src="/src/assets/traffic_monitor.png" 
              alt="Sector Map" 
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            {/* Map Grid Overlay */}
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #ffffff15 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            {/* Map Markers */}
            <motion.div 
              animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute top-1/4 left-1/3 w-6 h-6 bg-primary rounded-full border-[3px] border-white shadow-[0_0_30px_#0071e3]" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
              className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-danger rounded-full border-[2px] border-white shadow-[0_0_20px_#ff3b30]" 
            />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-2xl rounded-2xl border border-white shadow-2xl">
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Live Tracking</p>
              <p className="text-sm font-extrabold text-text-primary">Highway Sector A-42 • 12 Targets</p>
            </div>
          </div>

          <div className="bento-card p-6 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-text-secondary">Quick Controls</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface border-2 border-border hover:border-primary hover:bg-primary/5 hover:scale-[1.02] transition-all group active:scale-[0.98]">
                <ShieldAlert className="w-6 h-6 text-text-primary group-hover:text-primary mb-2" />
                <span className="text-[11px] font-extrabold uppercase text-text-primary">Alert</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface border-2 border-border hover:border-primary hover:bg-primary/5 hover:scale-[1.02] transition-all group active:scale-[0.98]">
                <Radio className="w-6 h-6 text-text-primary group-hover:text-primary mb-2" />
                <span className="text-[11px] font-extrabold uppercase text-text-primary">Radio</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardView;
