export interface ThoughtPattern {
  id: string;
  type: 'cognitive_distortion' | 'cognitive_bias' | 'thought_pattern';
  category: string;
  description: string;
  examples: string[];
  severity: 'mild' | 'moderate' | 'severe';
  suggestions: string[];
}

export interface AnalysisResult {
  patterns: ThoughtPattern[];
  overallMood?: 'positive' | 'negative' | 'neutral';
  confidence: number;
  timestamp: Date;
}
