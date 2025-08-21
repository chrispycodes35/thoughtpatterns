'use client';

interface JournalEntryProps {
  value: string;
  onChange: (value: string) => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
}

export default function JournalEntry({ value, onChange, onAnalyze, isAnalyzing }: JournalEntryProps) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Journal Entry
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Write about your thoughts, feelings, or experiences. The more detail you provide, the better the analysis will be.
        </p>
      </div>
      
      <div className="space-y-3 text-black">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Start writing your thoughts here... For example: &apos;I had a terrible day at work today. My boss is always criticizing me and I feel like I can never do anything right. I&apos;m starting to think I&apos;m just not cut out for this job.&apos;"
          className="w-full h-48 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          disabled={isAnalyzing}
        />
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {value.length} characters
          </div>
          
          <button
            onClick={onAnalyze}
            disabled={!value.trim() || isAnalyzing}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              !value.trim() || isAnalyzing
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
            }`}
          >
            {isAnalyzing ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Analyzing...</span>
              </div>
            ) : (
              'Analyze Thoughts'
            )}
          </button>
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-medium text-blue-900 mb-2">💡 Tips for Better Analysis</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Be specific about your thoughts and feelings</li>
          <li>• Include both positive and negative experiences</li>
          <li>• Describe the context and your reactions</li>
          <li>• Write naturally - don&apos;t overthink it</li>
        </ul>
      </div>
    </div>
  );
}
