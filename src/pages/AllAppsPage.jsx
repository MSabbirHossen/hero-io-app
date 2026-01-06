import React, { useState, useMemo } from "react";
import AppCard from "../components/AppCard";
import { appsData } from "../data/appsData";

const AllAppsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("none");

  const filteredApps = useMemo(() => {
    let filtered = appsData.filter((app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === "high-low") {
      filtered.sort((a, b) => b.downloads - a.downloads);
    } else if (sortOrder === "low-high") {
      filtered.sort((a, b) => a.downloads - b.downloads);
    }

    return filtered;
  }, [searchTerm, sortOrder]);

  return (
    <div className="bg-gradient-to-b from-gray-50 via-blue-50 to-purple-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-6xl font-bold mb-2 text-gray-900">All Apps</h1>
          <p className="text-xl text-gray-600">
            Discover all available applications and find your favorites
          </p>
        </div>

        {/* Search and Sort Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🔍 Search Apps
              </label>
              <input
                type="text"
                placeholder="Type app name..."
                className="input input-bordered w-full h-12 border-2 border-gray-200 focus:border-primary focus:outline-none rounded-xl transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📊 Sort By
              </label>
              <select
                className="select select-bordered w-full h-12 border-2 border-gray-200 focus:border-primary rounded-xl transition-all duration-300"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="none">Most Popular</option>
                <option value="high-low">Downloads: High to Low</option>
                <option value="low-high">Downloads: Low to High</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600 font-medium">
              Showing <span className="text-primary font-bold">{filteredApps.length}</span> of <span className="text-gray-800 font-bold">{appsData.length}</span> apps
            </p>
          </div>
        </div>

        {/* Apps Grid */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in">
            {filteredApps.map((app, idx) => (
              <div
                key={app.id}
                style={{ animationDelay: `${idx * 0.05}s` }}
                className="animate-in fade-in slide-in-from-bottom-4"
              >
                <AppCard app={app} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-96 bg-white rounded-2xl shadow-lg">
            <div className="text-8xl mb-6 animate-bounce">🔍</div>
            <h2 className="text-4xl font-bold mb-3 text-gray-800">No Apps Found</h2>
            <p className="text-gray-600 text-lg mb-6">Try searching with different keywords</p>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => setSearchTerm("")}
            >
              Clear Search
            </button>
              Try searching with different keywords
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllAppsPage;
