export type HazardStatus = 'ACTIVE' | 'RESOLVED' | 'PENDING';
export type ThreatLevel = 1 | 2 | 3 | 4 | 5;

export interface Hazard {
  id: string;
  title: string;
  description: string;
  location: string;
  timestamp: string;
  status: HazardStatus;
  threatLevel: ThreatLevel;
  imageUrl: string;
  assignedTo?: string[];
  steps: string[];
  timeline: {
    time: string;
    event: string;
    status: 'success' | 'warning' | 'danger' | 'info';
  }[];
}

export interface SystemStats {
  activeHazards: number;
  resolvedToday: number;
  avgResponseTime: string;
  systemHealth: number;
}
