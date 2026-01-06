import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { toast } from "react-toastify";
import { appsData } from "../data/appsData";
import { isAppInstalled, installApp } from "../utils/localStorage";

const AppDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const app = appsData.find((a) => a.id === parseInt(id));
  const [installed, setInstalled] = useState(isAppInstalled(parseInt(id)));

  if (!app) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col items-center justify-center px-4 py-12">
        <div className="text-6xl sm:text-8xl mb-4 sm:mb-6 animate-bounce">
          ❌
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gray-900 text-center">
          App Not Found
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 text-center">
          The app you're looking for doesn't exist.
        </p>
        <button
          className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          onClick={() => navigate("/apps")}
        >
          ← Back to Apps
        </button>
      </div>
    );
  }

  const handleInstall = () => {
    installApp(app.id);
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`, {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <button
          className="px-4 py-2 text-indigo-600 font-semibold hover:bg-white rounded-lg transition-all duration-300 mb-6 sm:mb-8 flex items-center gap-2"
          onClick={() => navigate("/apps")}
        >
          ← Back to All Apps
        </button>

        {/* App Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-16">
          <div className="md:col-span-1">
            <div className="sticky top-20">
              <img
                src={app.image}
                alt={app.title}
                className="rounded-xl shadow-xl w-full hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-gray-900">
                {app.title}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 font-semibold">
                {app.companyName}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
              <div className="bg-gradient-to-br from-amber-400 to-amber-500 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="text-3xl sm:text-4xl mb-2">⭐</div>
                <div className="text-xs sm:text-sm opacity-90 font-semibold">
                  Rating
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {app.ratingAvg}
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-400 to-indigo-500 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="text-3xl sm:text-4xl mb-2">📥</div>
                <div className="text-xs sm:text-sm opacity-90 font-semibold">
                  Downloads
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {(app.downloads / 1000000).toFixed(0)}M
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-400 to-teal-500 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="text-3xl sm:text-4xl mb-2">💬</div>
                <div className="text-xs sm:text-sm opacity-90 font-semibold">
                  Reviews
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {(app.reviews / 1000).toFixed(0)}K
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="text-3xl sm:text-4xl mb-2">💾</div>
                <div className="text-xs sm:text-sm opacity-90 font-semibold">
                  Size
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {app.size}MB
                </div>
              </div>
            </div>

            <button
              className={`w-full py-2.5 sm:py-3 px-4 font-bold text-base sm:text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg ${
                installed
                  ? "bg-green-500 text-white cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 hover:shadow-xl"
              }`}
              onClick={handleInstall}
              disabled={installed}
            >
              {installed ? "✓ Installed" : "📥 Install Now"}
            </button>
          </div>
        </div>

        {/* Reviews Chart */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-8 sm:mb-12 border border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">
            📊 Reviews Distribution
          </h2>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 sm:p-6">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={app.ratings}
                margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" tick={{ fill: "#666" }} />
                <YAxis tick={{ fill: "#666" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "2px solid #4f46e5",
                    borderRadius: "8px",
                  }}
                  cursor={{ fill: "rgba(79, 70, 229, 0.1)" }}
                />
                <Bar
                  dataKey="count"
                  fill="url(#colorGradient)"
                  radius={[8, 8, 0, 0]}
                />
                <defs>
                  <linearGradient
                    id="colorGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 border border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
            📱 About This App
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
            {app.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4 sm:p-6 border border-indigo-200">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                <span>📋</span> Details
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Size", value: `${app.size}MB` },
                  {
                    label: "Downloads",
                    value: `${(app.downloads / 1000000).toFixed(0)}M+`,
                  },
                  {
                    label: "Reviews",
                    value: `${(app.reviews / 1000).toFixed(0)}K+`,
                  },
                  { label: "Rating", value: `${app.ratingAvg}/5.0` },
                ].map((detail) => (
                  <li
                    key={detail.label}
                    className="flex justify-between items-center text-sm sm:text-base"
                  >
                    <span className="font-semibold text-gray-700">
                      {detail.label}:
                    </span>
                    <span className="text-gray-600">{detail.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 sm:p-6 border border-purple-200">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                <span>🏢</span> Publisher
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-semibold mb-4">
                {app.companyName}
              </p>
              <button className="w-full px-4 py-2 border-2 border-purple-500 text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-all duration-300">
                Visit Publisher
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;
