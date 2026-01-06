import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/apps", label: "Apps" },
    { path: "/installations", label: "My Installations" },
  ];

  return (
    <header className="navbar bg-gradient-to-r from-primary via-purple-500 to-pink-500 shadow-lg sticky top-0 z-50 backdrop-blur-md">
      <div className="navbar-start">
        <Link
          to="/"
          className="btn btn-ghost text-2xl md:text-3xl font-bold text-white hover:bg-white/20 transition-all duration-300"
        >
          🦸‍♂️ Hero IO
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-white/30 shadow-lg scale-105"
                    : "hover:bg-white/20"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="navbar-end gap-2">
        <button
          className="btn btn-ghost text-white lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light btn-sm md:btn-md font-semibold hover:scale-105 transition-transform duration-300"
        >
          Contribution
        </a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gradient-to-b from-primary to-secondary shadow-lg lg:hidden animate-in">
          <ul className="menu w-full gap-2 p-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-white font-semibold rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-white/30 shadow-lg"
                      : "hover:bg-white/20"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
