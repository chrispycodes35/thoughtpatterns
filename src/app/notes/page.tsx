import Link from 'next/link';

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            My Notes
          </h1>
          <p className="text-lg text-gray-600">
            Organize and manage your journal entries
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <div className="text-6xl mb-6">📚</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Notes & Organization Coming Soon
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We&apos;re working on features to help you organize multiple journal entries, 
            tag them by topic or mood, and create a comprehensive thought journal 
            that grows with you over time.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-blue-900 mb-3">Planned Features:</h3>
            <ul className="text-sm text-blue-800 space-y-2 text-left">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Create and save multiple journal entries
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Tag entries by mood, topic, or theme
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Search and filter through your entries
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Compare patterns across different entries
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Export your journal for personal records
              </li>
            </ul>
          </div>
          
          <div className="mt-8">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors mr-4"
            >
              Start Journaling
            </Link>
            <Link
              href="/about"
              className="inline-block bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
