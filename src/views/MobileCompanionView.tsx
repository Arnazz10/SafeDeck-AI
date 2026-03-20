import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Navigation, Upload, CheckCircle2, ShieldAlert, MapPin, ChevronRight } from 'lucide-react';
import { MOCK_HAZARDS } from '../mockData';

const MobileCompanionView: React.FC = () => {
  const activeHazard = MOCK_HAZARDS[0];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-10 flex flex-col items-center"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">Companion.</h1>
        <p className="text-text-secondary text-lg font-light">Field responder interface simulation.</p>
      </div>

      <div className="relative w-[340px] h-[680px] bg-white rounded-[50px] border-[10px] border-text-primary shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-text-primary rounded-b-3xl z-20" />
        
        <div className="h-12 flex items-end justify-between px-10 pb-2 z-10">
          <span className="text-[11px] font-bold">06:13</span>
          <div className="flex gap-1.5 items-center">
            <div className="w-3.5 h-2 bg-text-primary/10 rounded-sm" />
            <div className="w-4 h-4 rounded-full border-2 border-text-primary/10" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 pt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Alerts.</h2>
            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-primary" />
            </div>
          </div>

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-5 rounded-3xl bg-primary text-white shadow-2xl space-y-4"
          >
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" />
              <span className="text-[9px] font-bold uppercase tracking-widest">Priority One</span>
            </div>
            <h3 className="font-bold text-lg leading-tight">{activeHazard.title}</h3>
            <div className="flex items-center gap-2 opacity-80">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">{activeHazard.location}</span>
            </div>
            <button className="w-full bg-white text-primary text-[11px] font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all">
              <Navigation className="w-4 h-4" />
              NAVIGATE
            </button>
          </motion.div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase text-text-secondary tracking-widest">Checklist</h3>
            {activeHazard.steps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-border">
                <div className="w-5 h-5 rounded-full border-2 border-border flex items-center justify-center">
                  {idx === 0 && <CheckCircle2 className="w-4 h-4 text-primary" />}
                </div>
                <span className={`text-[12px] font-medium ${idx === 0 ? 'text-text-secondary line-through' : 'text-text-primary'}`}>
                  {step}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase text-text-secondary tracking-widest">Evidence</h3>
            <button className="w-full aspect-video rounded-3xl bg-surface border-2 border-dashed border-border flex flex-col items-center justify-center gap-3 hover:bg-border transition-all group">
              <Upload className="w-6 h-6 text-text-secondary group-hover:text-primary transition-colors" />
              <span className="text-[10px] font-bold text-text-secondary uppercase">Upload Proof</span>
            </button>
          </div>
        </div>

        <div className="h-20 bg-white border-t border-border flex items-center justify-around px-6 pb-4">
          <div className="p-2 text-primary"><Smartphone className="w-6 h-6" /></div>
          <div className="p-2 text-text-secondary opacity-40"><Navigation className="w-6 h-6" /></div>
          <div className="p-2 text-text-secondary opacity-40"><CheckCircle2 className="w-6 h-6" /></div>
        </div>
      </div>

      <div className="mt-16 max-w-md text-center space-y-6">
        <p className="text-text-secondary text-lg font-light leading-relaxed">
          The field interface ensures responders have critical data at their fingertips, 
          enabling rapid resolution and real-time reporting.
        </p>
        <button className="text-primary font-bold text-sm flex items-center gap-2 mx-auto hover:underline">
          Download Field Guide <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default MobileCompanionView;
