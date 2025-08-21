export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Uncover
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A cognitive analysis tool designed to help you understand your thinking patterns 
            and develop healthier mental habits through journaling and AI-powered insights.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Uncover was created to bridge the gap between traditional journaling and 
            modern cognitive behavioral therapy techniques. By analyzing your written thoughts, 
            we help identify cognitive distortions, biases, and patterns that may be affecting 
            your mental well-being.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our goal is to make mental health insights accessible, actionable, and personalized 
            to your unique thinking patterns.
          </p>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔍 How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Write</h3>
              <p className="text-gray-600 text-sm">
                Express your thoughts, feelings, and experiences in your own words through our 
                intuitive journaling interface.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Analyze</h3>
              <p className="text-gray-600 text-sm">
                Our AI-powered system identifies cognitive patterns, distortions, and biases 
                in your writing, providing personalized insights.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Grow</h3>
              <p className="text-gray-600 text-sm">
                Receive actionable suggestions and track your progress over time to develop 
                healthier thinking patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Current Features */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">✨ Current Features</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <h3 className="font-medium text-gray-900">Journal Entry Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Analyze individual journal entries for cognitive patterns and biases
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <h3 className="font-medium text-gray-900">Pattern Recognition</h3>
                <p className="text-gray-600 text-sm">
                  Identify common cognitive distortions like all-or-nothing thinking, confirmation bias, and more
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <h3 className="font-medium text-gray-900">Actionable Insights</h3>
                <p className="text-gray-600 text-sm">
                  Receive personalized suggestions for challenging and reframing unhelpful thoughts
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Roadmap */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Future Roadmap</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="font-semibold text-gray-900 mb-2">Multiple Notes & Organization</h3>
              <p className="text-gray-600 text-sm mb-2">
                Create and organize multiple journal entries, tag them by topic, mood, or theme, 
                and build a comprehensive thought journal.
              </p>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
            
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="font-semibold text-gray-900 mb-2">Progress Tracking & History</h3>
              <p className="text-gray-600 text-sm mb-2">
                View your cognitive patterns over time, track improvements, and identify recurring 
                thought patterns that need attention.
              </p>
              <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                In Development
              </span>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="font-semibold text-gray-900 mb-2">User Profiles & Authentication</h3>
              <p className="text-gray-600 text-sm mb-2">
                Secure user accounts, personalized dashboards, and the ability to sync your 
                thought patterns across devices.
              </p>
              <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                Planned
              </span>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="font-semibold text-gray-900 mb-2">Advanced AI Analysis</h3>
              <p className="text-gray-600 text-sm mb-2">
                Enhanced pattern recognition, mood analysis, and personalized cognitive behavioral 
                therapy recommendations.
              </p>
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Future Vision
              </span>
            </div>
          </div>
        </div>

        {/* Get Started */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 mb-6">
            Begin uncovering your thought patterns and developing healthier cognitive habits today.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Journaling
          </a>
        </div>
      </div>
    </main>
  );
}
