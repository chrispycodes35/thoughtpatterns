'use client';

import { useState } from 'react';
import JournalEntry from '@/components/JournalEntry';
import ThoughtAnalysis from '@/components/ThoughtAnalysis';
import { ThoughtPattern } from '@/types/thoughtPatterns';

export default function Home() {
  const [journalText, setJournalText] = useState('');
  const [analysisResults, setAnalysisResults] = useState<ThoughtPattern[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeThoughts = async () => {
    if (!journalText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis - in a real app, this would call an AI service
    setTimeout(() => {
      const mockResults: ThoughtPattern[] = [
        {
          id: '1',
          type: 'cognitive_distortion',
          category: 'All-or-Nothing Thinking',
          description: 'You seem to be viewing situations in black and white terms, without considering the gray areas.',
          examples: ['I always fail', 'I never succeed', 'Everything is terrible'],
          severity: 'moderate',
          suggestions: [
            'Look for evidence that contradicts your extreme statements',
            'Consider the middle ground and nuances',
            'Ask yourself: "Is this really always/never true?"'
          ]
        },
        {
          id: '2',
          type: 'cognitive_bias',
          category: 'Confirmation Bias',
          description: 'You may be focusing on information that confirms your existing beliefs while ignoring contradictory evidence.',
          examples: ['Only noticing negative feedback', 'Seeking out sources that agree with you'],
          severity: 'mild',
          suggestions: [
            'Actively seek out opposing viewpoints',
            'Question your assumptions',
            'Look for evidence that challenges your beliefs'
          ]
        }
      ];
      
      setAnalysisResults(mockResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Journal Entry Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <JournalEntry
              value={journalText}
              onChange={setJournalText}
              onAnalyze={analyzeThoughts}
              isAnalyzing={isAnalyzing}
            />
          </div>

          {/* Analysis Results Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <ThoughtAnalysis
              results={analysisResults}
              isAnalyzing={isAnalyzing}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
