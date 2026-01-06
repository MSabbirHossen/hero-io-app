import React from "react";
import { useNavigate } from "react-router-dom";
import AppCard from "../components/AppCard";
import { appsData } from "../data/appsData";

const HomePage = () => {
  const navigate = useNavigate();
  const topApps = appsData.slice(0, 8);

  const handleAppStoreClick = () => {
    window.open("https://www.apple.com/app-store/", "_blank");
  };

  const handlePlayStoreClick = () => {
    window.open("https://play.google.com/store", "_blank");
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 via-blue-50 to-purple-50 min-h-screen">
      {/* Banner Section */}
      <section className="hero bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Discover Amazing Apps
            </h1>
            <p className="mb-10 text-xl md:text-2xl text-white/90 font-light">
              Find the best apps for your mobile device. Download now and enjoy amazing experiences!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                className="btn btn-light btn-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
                onClick={handleAppStoreClick}
              >
                🍎 App Store
              </button>
              <button
                className="btn btn-light btn-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
                onClick={handlePlayStoreClick}
              >
                🤖 Play Store
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📱", title: "Total Apps", value: appsData.length + "+", color: "from-blue-500 to-blue-600" },
              { icon: "⭐", title: "Avg Rating", value: "4.5", color: "from-yellow-500 to-yellow-600" },
              { icon: "💾", title: "Total Downloads", value: "1B+", color: "from-purple-500 to-purple-600" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${stat.color} text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold opacity-90">{stat.title}</h3>
                  <span className="text-4xl">{stat.icon}</span>
                </div>
                <div className="text-4xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Apps Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-5xl font-bold text-gray-900">Top Apps</h2>
              <p className="text-gray-600 mt-2">Most Downloaded & Rated Apps</p>
            </div>
            <button
              className="btn btn-primary btn-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
              onClick={() => navigate("/apps")}
            >
              Show All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topApps.map((app, idx) => (
              <div
                key={app.id}
                style={{ animationDelay: `${idx * 0.1}s` }}
                className="animate-in fade-in slide-in-from-bottom-4"
              >
                <AppCard app={app} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
