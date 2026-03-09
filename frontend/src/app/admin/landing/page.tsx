import React from 'react';
//add any necessary imports here
export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Side Menu */}
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Users</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Teams</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Projects</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Settings</a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Admin Panel</h1>
            <p className="text-xl mb-8">Manage users, teams, and projects efficiently</p>
            <div className="space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Started
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 SkillNet Research. All rights reserved.</p>
      </footer>
    </div>
  );
}