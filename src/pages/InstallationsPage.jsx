import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppCard from "../components/AppCard";
import { appsData } from "../data/appsData";
import { getInstalledApps, uninstallApp } from "../utils/localStorage";

const InstallationsPage = () => {
  const navigate = useNavigate();
  const installedAppIds = getInstalledApps();
  const installedApps = appsData.filter((app) =>
    installedAppIds.includes(app.id)
  );

  const handleUninstall = (appId, appTitle) => {
    uninstallApp(appId);
    toast.info(`${appTitle} uninstalled successfully!`, {
      position: "bottom-right",
      autoClose: 3000,
    });
    // Refresh the page to update the list
    window.location.reload();
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 via-green-50 to-blue-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center md:text-left mb-12">
          <h1 className="text-6xl font-bold mb-2 text-gray-900">📦 My Installations</h1>
          <p className="text-xl text-gray-600">Manage your installed apps</p>
        </div>

        {installedApps.length > 0 ? (
          <>
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 font-semibold">Total Installed</p>
                  <p className="text-4xl font-bold text-primary">{installedApps.length} Apps</p>
                </div>
                <div className="text-6xl">✅</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in">
              {installedApps.map((app, idx) => (
                <div
                  key={app.id}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                  className="animate-in fade-in slide-in-from-bottom-4 group"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 border border-gray-100">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        ✓ Installed
                      </div>
                    </div>
                    <div className="p-5">
                      <h2 className="card-title text-lg font-bold text-gray-900 mb-1">
                        {app.title}
                      </h2>
                      <p className="text-sm text-gray-600 mb-4">{app.companyName}</p>

                      <div className="flex gap-3">
                        <button
                          className="btn btn-sm btn-outline btn-primary flex-1 font-semibold hover:scale-105 transition-transform"
                          onClick={() => navigate(`/app/${app.id}`)}
                        >
                          📖 Details
                        </button>
                        <button
                          className="btn btn-sm btn-error font-semibold hover:scale-105 transition-transform"
                          onClick={() => handleUninstall(app.id, app.title)}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-96 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-9xl mb-6 animate-bounce">📱</div>
            <h2 className="text-4xl font-bold mb-3 text-gray-800">No Installed Apps</h2>
            <p className="text-gray-600 text-lg mb-8 text-center max-w-md">
              Go explore and install some amazing apps to get started!
            </p>
            <button
              className="btn btn-primary btn-lg font-bold hover:scale-105 transition-transform"
              onClick={() => navigate("/apps")}
            >
              🔍 Browse Apps
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstallationsPage;
                  <p className="text-sm text-gray-600">{app.companyName}</p>
                  <div className="card-actions justify-between mt-4">
                    <button
                      className="btn btn-sm btn-ghost"
                      onClick={() => navigate(`/app/${app.id}`)}
                    >
                      View Details
                    </button>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => handleUninstall(app.id, app.title)}
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-96">
            <div className="text-6xl mb-4">📱</div>
            <h2 className="text-2xl font-bold mb-2">No Installed Apps</h2>
            <p className="text-gray-600 mb-6">
              Go explore and install some apps!
            </p>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/apps")}
            >
              Browse Apps
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstallationsPage;
