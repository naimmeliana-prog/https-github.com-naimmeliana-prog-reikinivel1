export type TreatmentType = 'self' | 'others';

export interface HandPosition {
  id: string;
  name: string;
  title: string;
  category: 'cabeza' | 'frontal' | 'espalda' | 'extremidades' | 'inicio_cierre';
  chakraId?: number; // 1 to 7
  chakraName?: string;
  chakraColor?: string;
  handsDescription: string;
  bodyArea: string;
  intention: string;
  suggestedPrayer: string;
  benefits: string[];
  visualCue: 'eyes' | 'temples' | 'occipital' | 'throat' | 'heart' | 'solar_plexus' | 'abdomen' | 'root_groin' | 'knees' | 'feet' | 'shoulders' | 'upper_back' | 'lower_back' | 'sacrum' | 'gassho' | 'aura_smoothing';
  durationMinutesRecommendation: number;
  sensationsTip: string;
}

export interface ChakraInfo {
  number: number;
  sanskritName: string;
  spanishName: string;
  colorName: string;
  colorHex: string;
  gradient: string;
  lightBg: string;
  location: string;
  gland: string;
  element: string;
  bijaMantra: string;
  affirmation: string;
  intention: string;
  visualizationExercise: string;
  practicalExample: string;
  byosenSensations: string[];
  balancedState: string;
  imbalancedState: string;
  handPositionTip: string;
}

export interface JournalEntry {
  id: string;
  date: string; // ISO date string
  treatmentType: TreatmentType;
  recipientName?: string; // Optional if treatment for another person
  durationMinutes: number;
  sensations: string[]; // e.g. "Calor intenso", "Hormigueo", "Frío inicial", "Pulsación rítmica", "Pesadez relajante", "Brisa fresca"
  chakrasFocused: number[]; // Array of chakra numbers (1-7)
  emotionsLiberated: string[]; // e.g. "Paz profunda", "Alivio", "Lagrimas de catarsis", "Claridad mental"
  notes: string;
  peaceLevelBefore: number; // 1 to 10
  peaceLevelAfter: number; // 1 to 10
  createdAt: number;
}

export interface ReikiPrinciple {
  id: number;
  japanese: string;
  romaji: string;
  spanish: string;
  reflection: string;
  dailyPractice: string;
}
