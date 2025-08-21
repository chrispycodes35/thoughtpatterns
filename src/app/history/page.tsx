export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Progress History
          </h1>
          <p className="text-lg text-gray-600">
            Track your cognitive patterns and growth over time
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <div className="text-6xl mb-6">📊</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Progress Tracking Coming Soon
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're building powerful analytics to help you visualize your cognitive journey, 
            identify recurring patterns, and celebrate your progress in developing healthier thinking habits.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-3">Pattern Analysis</h3>
              <ul className="text-sm text-blue-800 space-y-2 text-left">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  Track recurring thought patterns
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  Monitor cognitive distortion frequency
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  Identify triggers and contexts
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-3">Progress Metrics</h3>
              <ul className="text-sm text-green-800 space-y-2 text-left">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Mood and emotional trends
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Improvement in thinking patterns
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Goal achievement tracking
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <h3 className="font-semibold text-indigo-900 mb-3">Visual Insights:</h3>
            <div className="grid grid-cols-3 gap-4 text-sm text-indigo-800">
              <div className="text-center">
                <div className="text-2xl mb-1">📈</div>
                <div>Trend Charts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🎯</div>
                <div>Goal Tracking</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">📅</div>
                <div>Timeline View</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <a
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors mr-4"
            >
              Start Journaling
            </a>
            <a
              href="/about"
              className="inline-block bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
