import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 relative overflow-hidden px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="text-center text-white relative z-10">
        <div className="mb-6 sm:mb-8 animate-bounce">
          <h1 className="text-7xl sm:text-9xl md:text-[150px] font-black drop-shadow-lg">
            404
          </h1>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
          Oops! Page Not Found
        </h2>

        <p className="text-base sm:text-lg md:text-2xl mb-8 sm:mb-10 text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
          Sorry, the page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base"
            onClick={() => navigate("/")}
          >
            🏠 Go Home
          </button>
          <button
            className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
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
