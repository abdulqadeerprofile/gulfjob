export function Sidebar() {
  const tags = ['Remote', 'Full-time', 'Technology', 'Finance', 'Healthcare', 'Engineering'];
  
  return (
    <aside className="w-full space-y-8">
      {/* Advertisement Section */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Advertisement</h3>
        <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Ad Space</span>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-red-50 hover:text-red-600 cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Recent Comments */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Comments</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
              <p className="text-gray-600 text-sm line-clamp-2">
                &quot;Great opportunity for experienced developers...&quot;
              </p>
              <span className="text-xs text-gray-500 mt-1 block">- John Doe</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
