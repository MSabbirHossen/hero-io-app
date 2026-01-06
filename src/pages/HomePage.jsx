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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50">
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 text-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover Amazing Apps
          </h1>
          <p className="mb-8 text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed">
            Find the best apps for your mobile device. Download now and enjoy
            amazing experiences!
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
            <button
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
              onClick={handleAppStoreClick}
            >
              🍎 App Store
            </button>
            <button
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
              onClick={handlePlayStoreClick}
            >
              🤖 Play Store
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: "📱",
                title: "Total Apps",
                value: appsData.length + "+",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                icon: "⭐",
                title: "Avg Rating",
                value: "4.5",
                color: "from-amber-500 to-amber-600",
              },
              {
                icon: "💾",
                title: "Total Downloads",
                value: "1B+",
                color: "from-purple-500 to-purple-600",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${stat.color} text-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base sm:text-lg font-semibold opacity-90">
                    {stat.title}
                  </h3>
                  <span className="text-3xl sm:text-4xl">{stat.icon}</span>
                </div>
                <div className="text-3xl sm:text-4xl font-bold">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Apps Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Top Apps
              </h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Most Downloaded & Rated Apps
              </p>
            </div>
            <button
              className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              onClick={() => navigate("/apps")}
            >
              Show All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
