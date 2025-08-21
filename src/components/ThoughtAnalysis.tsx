'use client';

import { ThoughtPattern } from '@/types/thoughtPatterns';

interface ThoughtAnalysisProps {
  results: ThoughtPattern[];
  isAnalyzing: boolean;
}

export default function ThoughtAnalysis({ results, isAnalyzing }: ThoughtAnalysisProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'mild':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'moderate':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'severe':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'cognitive_distortion':
        return '🧠';
      case 'cognitive_bias':
        return '👁️';
      case 'thought_pattern':
        return '💭';
      default:
        return '💡';
    }
  };

  if (isAnalyzing) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Analysis Results
        </h2>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Analyzing your thoughts...</p>
            <p className="text-sm text-gray-500">This may take a few moments</p>
          </div>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Analysis Results
        </h2>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Ready to Analyze
          </h3>
          <p className="text-gray-600">
            Write a journal entry and click &ldquo;Analyze Thoughts&rdquo; to discover patterns in your thinking.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Analysis Results
        </h2>
        <span className="text-sm text-gray-500">
          {results.length} pattern{results.length !== 1 ? 's' : ''} found
        </span>
      </div>

      <div className="space-y-4">
        {results.map((pattern) => (
          <div key={pattern.id} className="border border-gray-200 rounded-lg p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{getTypeIcon(pattern.type)}</span>
                <div>
                  <h3 className="font-medium text-gray-900">{pattern.category}</h3>
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getSeverityColor(pattern.severity)}`}>
                    {pattern.severity} severity
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              {pattern.description}
            </p>

            {pattern.examples.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Examples:</h4>
                <ul className="space-y-1">
                  {pattern.examples.map((example, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span className="italic">&ldquo;{example}&rdquo;</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Suggestions:</h4>
              <ul className="space-y-1">
                {pattern.suggestions.map((suggestion, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h3 className="font-medium text-green-900 mb-2">🎯 Next Steps</h3>
        <p className="text-sm text-green-800">
          Consider these patterns in your daily life. Awareness is the first step toward change. 
          Try implementing the suggestions above and observe how your thinking evolves over time.
        </p>
      </div>
    </div>
  );
}
