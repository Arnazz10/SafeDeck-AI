import React from 'react';
import { Hazard } from '../types';
import { MapPin, Clock, AlertTriangle, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HazardCardProps {
  hazard: Hazard;
  onClick: (hazard: Hazard) => void;
}

const HazardCard: React.FC<HazardCardProps> = ({ hazard, onClick }) => {
  const isDanger = hazard.threatLevel >= 4;

  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -2 }}
      onClick={() => onClick(hazard)}
      className="bento-card p-5 cursor-pointer group flex gap-6 items-center"
    >
      <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-border">
        <img 
          src={hazard.imageUrl} 
          alt={hazard.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider text-white ${
          hazard.status === 'ACTIVE' ? 'bg-primary' : 'bg-text-secondary'
        }`}>
          {hazard.status}
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors truncate">{hazard.title}</h4>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface border border-border">
            <AlertTriangle className={`w-3 h-3 ${isDanger ? 'text-primary' : 'text-text-secondary'}`} />
            <span className="text-[10px] font-bold">LVL {hazard.threatLevel}</span>
          </div>
        </div>
        <p className="text-text-secondary text-[13px] font-light line-clamp-1 mb-3">{hazard.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-text-secondary">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">{hazard.location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-text-secondary">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">2m ago</span>
            </div>
          </div>
          
          <ChevronRight className="w-4 h-4 text-text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.div>
  );
};

export default HazardCard;
