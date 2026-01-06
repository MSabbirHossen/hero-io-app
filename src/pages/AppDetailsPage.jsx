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
      <div className="bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col items-center justify-center min-h-screen">
        <div className="text-9xl mb-6 animate-bounce">❌</div>
        <h1 className="text-5xl font-bold mb-4 text-gray-900">App Not Found</h1>
        <p className="text-gray-600 text-lg mb-8">The app you're looking for doesn't exist.</p>
        <button
          className="btn btn-primary btn-lg font-bold hover:scale-105 transition-transform"
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
    <div className="bg-gradient-to-b from-gray-50 via-blue-50 to-purple-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <button
          className="btn btn-ghost btn-lg mb-8 font-semibold hover:bg-white/50 transition-all"
          onClick={() => navigate("/apps")}
        >
          ← Back to All Apps
        </button>

        {/* App Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="md:col-span-1">
            <div className="sticky top-20">
              <img
                src={app.image}
                alt={app.title}
                className="rounded-2xl shadow-2xl w-full hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="mb-6">
              <h1 className="text-5xl font-bold mb-3 text-gray-900">{app.title}</h1>
              <p className="text-2xl text-gray-600 font-semibold">{app.companyName}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-sm opacity-90 font-semibold">Rating</div>
                <div className="text-3xl font-bold">{app.ratingAvg}</div>
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-2">📥</div>
                <div className="text-sm opacity-90 font-semibold">Downloads</div>
                <div className="text-3xl font-bold">{(app.downloads / 1000000).toFixed(0)}M</div>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-green-500 text-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-2">💬</div>
                <div className="text-sm opacity-90 font-semibold">Reviews</div>
                <div className="text-3xl font-bold">{(app.reviews / 1000).toFixed(0)}K</div>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 text-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-2">💾</div>
                <div className="text-sm opacity-90 font-semibold">Size</div>
                <div className="text-3xl font-bold">{app.size}MB</div>
              </div>
            </div>

            <button
              className={`btn btn-lg w-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg ${
                installed
                  ? "btn-success btn-disabled cursor-not-allowed"
                  : "btn-primary hover:shadow-xl"
              }`}
              onClick={handleInstall}
              disabled={installed}
            >
              {installed ? "✓ Installed" : "📥 Install Now"}
            </button>
          </div>
        </div>

        {/* Reviews Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">📊 Reviews Distribution</h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
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
                    border: "2px solid #8b5cf6",
                    borderRadius: "8px",
                  }}
                  cursor={{ fill: "rgba(139, 92, 246, 0.1)" }}
                />
                <Bar
                  dataKey="count"
                  fill="url(#colorGradient)"
                  radius={[8, 8, 0, 0]}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">📱 About This App</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">{app.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                <span>📋</span> Details
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Size", value: `${app.size}MB` },
                  { label: "Downloads", value: `${(app.downloads / 1000000).toFixed(0)}M+` },
                  { label: "Reviews", value: `${(app.reviews / 1000).toFixed(0)}K+` },
                  { label: "Rating", value: `${app.ratingAvg}/5.0` },
                ].map((detail) => (
                  <li key={detail.label} className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">{detail.label}:</span>
                    <span className="text-gray-600">{detail.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                <span>🏢</span> Publisher
              </h3>
              <p className="text-lg text-gray-700 font-semibold mb-4">{app.companyName}</p>
              <button className="btn btn-outline btn-primary w-full">
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
