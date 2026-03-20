import React from 'react';
import { motion } from 'motion/react';
import { User as UserIcon, Shield, Activity, Clock, Award, ChevronRight } from 'lucide-react';

const UserView: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-10 space-y-10"
    >
      <div className="flex items-center gap-8 mb-16">
        <div className="w-32 h-32 rounded-[40px] bg-primary/10 border-4 border-white shadow-2xl overflow-hidden flex items-center justify-center p-8">
          <UserIcon className="w-full h-full text-primary" />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-5xl font-extrabold tracking-tight">Cmdr. Arnab</h1>
            <div className="px-3 py-1 rounded-full bg-primary text-[10px] font-bold text-white uppercase tracking-widest">Master</div>
          </div>
          <p className="text-text-secondary text-xl font-light">Lead Safety Coordinator • Sector 4 Operations</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: 'Hazards Resolved', value: '1,248', icon: Shield },
              { label: 'Service Time', value: '4.2k hrs', icon: Clock },
              { label: 'Efficiency', value: '99.8%', icon: Activity }
            ].map((stat, idx) => (
              <div key={idx} className="bento-card p-6 flex flex-col justify-between aspect-video">
                <div className="p-3 rounded-2xl bg-primary/5 w-fit">
                   <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">{stat.label}</p>
                  <p className="text-2xl font-extrabold">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Recent Certifications.</h2>
            <div className="space-y-4">
              {[
                { title: 'Neural Engine Specialist', date: 'March 2024', issuer: 'SafeDeck Academy' },
                { title: 'Emergency Response Lead', date: 'January 2024', issuer: 'Global Safety ISO' },
                { title: 'Advanced Telemetry Analysis', date: 'December 2023', issuer: 'SafeDeck Academy' }
              ].map((cert, idx) => (
                <div key={idx} className="bento-card p-5 flex items-center justify-between group cursor-pointer hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center">
                      <Award className="w-6 h-6 text-text-secondary group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="font-bold">{cert.title}</p>
                      <p className="text-[11px] text-text-secondary uppercase tracking-widest font-bold mt-0.5">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-text-secondary transition-transform group-hover:translate-x-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="bento-card p-8 space-y-8">
            <h2 className="text-2xl font-bold">Equipment status.</h2>
            <div className="space-y-6">
              {[
                { label: 'Neural Link', status: 'Optimal', level: 100 },
                { label: 'Biometric Monitor', status: 'Stable', level: 85 },
                { label: 'COMMS Array', status: 'Active', level: 92 }
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                     <span className="text-text-secondary">{item.label}</span>
                     <span className="text-primary">{item.status}</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.level}%` }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card p-8 bg-surface border-dashed border-2 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-border/20 flex items-center justify-center">
              <Award className="w-8 h-8 text-text-secondary" />
            </div>
            <p className="font-bold">New Achievement Available</p>
            <p className="text-xs text-text-secondary">Complete 5 more critical hazard resolutions to unlock 'Safety Vanguard'.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserView;
