import { Hazard } from './types';

export const MOCK_HAZARDS: Hazard[] = [
  {
    id: 'HZD-001',
    title: 'Brake System Anomaly',
    description: 'AI detected a significant pressure drop in the hydraulic brake lines. Immediate inspection required.',
    location: 'Rear Axle - Left Side',
    timestamp: '2024-03-20T08:45:00Z',
    status: 'ACTIVE',
    threatLevel: 5,
    imageUrl: '/src/assets/car_dashboard.png',
    assignedTo: ['Sarah Jenkins', 'Mike Ross'],
    steps: [
      'Engage emergency electronic parking brake',
      'Deploy diagnostic drone to undercarriage',
      'Manual hydraulic pressure verification',
      'Replace faulty line connector'
    ],
    timeline: [
      { time: '08:45', event: 'AI Detection: Pressure drop identified', status: 'danger' },
      { time: '08:47', event: 'System Alert: Emergency braking protocol standby', status: 'warning' },
      { time: '08:50', event: 'Responders Assigned: Mechanical Team Alpha', status: 'info' }
    ]
  },
  {
    id: 'HZD-002',
    title: 'Obstacle in Blind Spot',
    description: 'Ultrasonic sensors detected a small object in the rear-right blind spot during lane change.',
    location: 'Rear Right Quarter',
    timestamp: '2024-03-20T07:30:00Z',
    status: 'RESOLVED',
    threatLevel: 2,
    imageUrl: '/src/assets/car_hazard_detection.png',
    assignedTo: ['ADAS System'],
    steps: [
      'Identify object via vision sensor',
      'Trigger haptic steering feedback',
      'Auto-correct lane position',
      'Verify clear path'
    ],
    timeline: [
      { time: '07:30', event: 'Sensor Trigger: Proximity warning', status: 'warning' },
      { time: '07:45', event: 'ADAS Correction: Steering adjusted', status: 'info' },
      { time: '08:15', event: 'Hazard Resolved: Path cleared', status: 'success' }
    ]
  },
  {
    id: 'HZD-003',
    title: 'Battery Thermal Runaway',
    description: 'Cell group 7 showing temperatures 25% above safety threshold. Risk of fire.',
    location: 'Main Battery Pack - Center',
    timestamp: '2024-03-20T09:12:00Z',
    status: 'ACTIVE',
    threatLevel: 4,
    imageUrl: '/src/assets/car_neural_net.png',
    assignedTo: ['Alex Chen'],
    steps: [
      'Isolate cell group 7 from power grid',
      'Initiate emergency liquid nitrogen cooling',
      'Inspect coolant lines for blockages'
    ],
    timeline: [
      { time: '09:12', event: 'Thermal Sensor: Critical temp warning', status: 'warning' },
      { time: '09:15', event: 'Automatic cooling cycle initiated', status: 'danger' }
    ]
  }
];

export const SYSTEM_STATS = {
  activeHazards: 2,
  resolvedToday: 14,
  avgResponseTime: '12m 45s',
  systemHealth: 98.4
};
