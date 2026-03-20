import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Camera, Maximize2, Settings, Radio, Activity, Terminal, ShieldAlert } from 'lucide-react';

const LiveMonitorView: React.FC = () => {
  const [logs, setLogs] = useState<{ time: string; msg: string; type: string }[]>([]);

  useEffect(() => {
    const messages = [
      { msg: 'Neural engine initialized.', type: 'info' },
      { msg: 'Highway Sector A-42 feed active.', type: 'info' },
      { msg: 'Collision risk detected in Lane 3.', type: 'danger' },
      { msg: 'Average speed nominal.', type: 'info' },
      { msg: 'Target license plate scanning...', type: 'info' },
      { msg: 'Automatic braking protocol ready.', type: 'warning' },
    ];

    let i = 0;
    const interval = setInterval(() => {
      setLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), ...messages[i % messages.length] }].slice(-8));
      i++;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-10 space-y-10"
    >
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-2">Live Monitor.</h1>
          <p className="text-text-secondary text-lg font-light">Real-time AI surveillance and telemetry.</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-[11px] font-bold text-primary border border-primary/10">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            RECORDING
          </div>
          <button className="p-2.5 rounded-full bg-surface border border-border hover:bg-border transition-all">
            <Settings className="w-5 h-5 text-text-secondary" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-3 space-y-8">
          <div className="relative aspect-video bg-black rounded-[32px] overflow-hidden border border-border shadow-2xl group">
            <img 
              src="/src/assets/traffic_monitor.png" 
              alt="Live Feed" 
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            
            {/* Scanning line animation */}
            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-primary/30 z-10 shadow-[0_0_15px_#0071e3]"
            />
            
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-10 flex flex-col gap-1">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">HW_A42_SEC_1</p>
                <p className="text-xs font-medium text-white/60">2024-03-20 14:55:02</p>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-primary/20 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_15px_#0071e3]" />
              </div>

              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.7, 0.9, 0.7] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-[35%] left-[25%] w-48 h-32 border-2 border-primary rounded-xl overflow-hidden"
              >
                <div className="absolute top-0 left-0 bg-primary text-white text-[9px] font-bold px-3 py-1 uppercase">
                  VEHICLE_IN_LANE_3
                </div>
                <div className="absolute bottom-2 left-2 text-[10px] text-white font-mono bg-black/40 px-2 py-0.5 rounded">
                   SP: 112 KM/H • CONF: 99%
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
              <div className="flex gap-3">
                <button className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all">
                  <Camera className="w-5 h-5 text-white" />
                </button>
                <button className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all">
                  <Radio className="w-5 h-5 text-white" />
                </button>
              </div>
              <button className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all">
                <Maximize2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              { label: 'Latency', value: '24ms', icon: Activity, color: 'primary' },
              { label: 'Confidence', value: '99.2%', icon: Activity, color: 'primary' },
              { label: 'Sensors', value: '142', icon: Activity, color: 'primary' }
            ].map((stat, idx) => (
              <div key={idx} className="bento-card p-6 flex items-center gap-5">
                <div className="p-3 rounded-2xl bg-primary/5 border border-primary/10">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">{stat.label}</p>
                  <p className="text-xl font-extrabold">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="bento-card flex flex-col h-[500px] p-0 overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between bg-surface/50">
              <h3 className="text-sm font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                Telemetry.
              </h3>
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </div>
            <div className="flex-1 p-6 font-mono text-[11px] space-y-4 overflow-y-auto">
              {logs.map((log, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-text-secondary opacity-50">{log.time}</span>
                  <span className={log.type === 'danger' ? 'text-primary font-bold' : 'text-text-primary'}>
                    {log.msg}
                  </span>
                </div>
              ))}
              <div className="flex gap-2 animate-pulse text-primary">
                <span>_</span>
              </div>
            </div>
          </div>

          <div className="bento-card p-6 space-y-6">
            <h3 className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-text-secondary">
              <ShieldAlert className="w-4 h-4 text-primary" />
              Priority.
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-text-secondary">CRITICAL</span>
                  <span className="text-primary">02</span>
                </div>
                <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden">
                  <div className="w-1/4 h-full bg-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-text-secondary">WARNING</span>
                  <span className="text-text-primary">05</span>
                </div>
                <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-border" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LiveMonitorView;
