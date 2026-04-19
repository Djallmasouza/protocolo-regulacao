export type Ritual = {
  day: number;
  name: string;
  objective: string;
  steps: string[];
  reflection: string;
  somaticTechnique: string;
  image: string;
};

export type EmergencyStep = {
  title: string;
  description: string;
  icon: string;
};

export type EmergencyProtocol = {
  id: 'flooding' | 'freeze' | 'collapse';
  title: string;
  color: string;
  steps: EmergencyStep[];
  supportQuote: string;
};

export type SomaticPoint = {
  id: string;
  name: string;
  emotion: string;
  reflection: string;
  top: string;
  left: string;
  isActive?: boolean;
};

export type UserProgress = {
  currentDay: number;
  completedRituals: number[];
  lastSomaticPoint: string | null;
  onboardingSeen: boolean;
};
