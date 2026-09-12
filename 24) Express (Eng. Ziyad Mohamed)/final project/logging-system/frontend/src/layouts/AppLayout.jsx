export default function AppLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Top bar */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">{title}</h1>

          <button className="text-sm text-gray-600 hover:text-gray-900">
            Logout
          </button>
        </div>
      </header>

      {/* Page content */}
      <main className="max-w-6xl mx-auto p-6">{children}</main>
    </div>
  );
}