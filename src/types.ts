export type Dimension = 'EI' | 'SN' | 'TF' | 'JP';
export type Pole = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export interface Question {
  id: number;
  text: string;
  options: {
    A: { text: string; pole: Pole };
    B: { text: string; pole: Pole };
  };
  dimension: Dimension;
}

export interface PersonalityType {
  code: string;
  title: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careers: string[];
}

export interface TestResult {
  scores: Record<Pole, number>;
  type: string;
  dimensions: Record<Dimension, { pole: Pole; percentage: number }>;
}
