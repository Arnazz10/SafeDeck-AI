import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Clock, ShieldAlert, Users, AlertTriangle, ChevronRight, Zap } from 'lucide-react';
import { Hazard } from '../types';

interface HazardDetailViewProps {
  hazard: Hazard;
  onBack: () => void;
}

const HazardDetailView: React.FC<HazardDetailViewProps> = ({ hazard, onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="p-10 max-w-6xl mx-auto space-y-12"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-[11px] font-bold uppercase tracking-widest">Back to Overview</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl">
            <img 
              src={hazard.imageUrl} 
              alt={hazard.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/80 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Live Analysis</span>
            </div>
            
            <motion.div 
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-white/50 rounded-2xl shadow-2xl"
            >
              <div className="absolute -top-8 left-0 bg-white text-text-primary text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                Anomaly_Detected 98.4%
              </div>
            </motion.div>
          </div>

          <div className="bento-card p-8 space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary" />
              AI Assessment.
            </h3>
            <p className="text-text-secondary text-lg font-light leading-relaxed">
              {hazard.description} Our neural engine has identified a high-probability risk factor in this sector. 
              Immediate containment protocols are recommended.
            </p>
            
            <div className="pt-8 border-t border-border">
              <p className="text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-4">Threat Intensity</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div 
                    key={level}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                      level <= hazard.threatLevel ? 'bg-primary' : 'bg-surface'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20">
                {hazard.status}
              </span>
              <span className="text-text-secondary text-xs font-mono">{hazard.id}</span>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6">{hazard.title}</h1>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-text-secondary">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">{hazard.location}</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Detected 12m ago</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Response Protocol.</h3>
            <div className="space-y-3">
              {hazard.steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 bento-card p-5 hover:bg-surface transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-[12px] font-bold text-primary">
                    {idx + 1}
                  </div>
                  <span className="text-sm font-medium flex-1">{step}</span>
                  <ChevronRight className="w-4 h-4 text-text-secondary opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bento-card p-6">
              <h4 className="text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-4 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Responders
              </h4>
              <div className="flex -space-x-2">
                {hazard.assignedTo?.map((name, idx) => (
                  <div key={idx} className="w-9 h-9 rounded-full bg-white border-2 border-surface flex items-center justify-center text-[10px] font-bold shadow-sm" title={name}>
                    {name.split(' ').map(n => n[0]).join('')}
                  </div>
                ))}
                <button className="w-9 h-9 rounded-full bg-surface border-2 border-white flex items-center justify-center text-text-secondary hover:bg-border transition-all">
                  +
                </button>
              </div>
            </div>

            <div className="bento-card p-6">
              <h4 className="text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Timeline
              </h4>
              <div className="space-y-3">
                {hazard.timeline.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 bg-primary" />
                    <div>
                      <p className="text-[11px] font-bold leading-none">{item.event}</p>
                      <p className="text-[9px] text-text-secondary mt-1">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <button className="flex-1 pill-button pill-button-primary py-4 text-sm shadow-2xl">
              Initiate Response Protocol
            </button>
            <button className="flex-1 pill-button bg-white text-text-primary py-4 text-sm border-2 border-border hover:border-black active:bg-surface transition-all font-extrabold">
              Dismiss Alert
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HazardDetailView;
