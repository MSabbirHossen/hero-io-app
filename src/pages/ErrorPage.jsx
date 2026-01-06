import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="text-center text-white relative z-10 px-6">
        <div className="mb-8 animate-bounce">
          <h1 className="text-9xl md:text-[150px] font-black drop-shadow-lg">404</h1>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Oops! Page Not Found
        </h2>

        <p className="text-xl md:text-2xl mb-10 text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="btn btn-light btn-lg font-bold hover:scale-105 transition-transform duration-300 shadow-xl"
            onClick={() => navigate("/")}
          >
            🏠 Go Home
          </button>
          <button
            className="btn btn-outline btn-light btn-lg font-bold hover:scale-105 transition-transform duration-300"
            onClick={() => navigate("/apps")}
          >
            🔍 Browse Apps
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
