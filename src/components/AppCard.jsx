import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AppCard = ({ app }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    navigate(`/app/${app.id}`);
  };

  return (
    <div
      className="card bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden border border-gray-100 hover:border-primary hover:-translate-y-2"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="px-4 pt-4 overflow-hidden rounded-lg relative h-48">
        <img
          src={app.image}
          alt={app.title}
          className={`rounded-lg w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </figure>

      <div className="card-body gap-3">
        <div>
          <h2 className="card-title text-lg font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
            {app.title}
          </h2>
          <p className="text-sm text-gray-500 group-hover:text-gray-600">
            {app.companyName}
          </p>
        </div>

        <div className="divider my-1"></div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 bg-yellow-50 px-2 py-1 rounded-lg">
              <span className="text-yellow-500 text-lg">★</span>
              <span className="font-bold text-gray-800">{app.ratingAvg}</span>
            </div>
            <span className="text-xs font-semibold text-gray-600 bg-blue-50 px-2 py-1 rounded-lg">
              {(app.downloads / 1000000).toFixed(0)}M
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="btn btn-sm btn-primary w-full font-semibold hover:scale-105 transition-transform duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
