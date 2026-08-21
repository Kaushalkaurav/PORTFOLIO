import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skill", path: "/skill" },
    { name: "Project", path: "/project" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-red-900/60 bg-[#090304]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-22 max-w-362.5 items-center justify-between px-6 lg:px-10">

        {/* ================= LOGO ================= */}
        <NavLink
          to="/"
          className="flex items-center gap-4"
          onClick={() => setMenuOpen(false)}
        >
          {/* KK Logo */}
          <div className="relative">
            <span className="font-serif text-[48px] font-bold leading-none text-white">
              K
            </span>

            <span className="-ml-2 font-serif text-[48px] font-bold leading-none text-red-500">
              K
            </span>
          </div>

          {/* Name */}
          <div className="hidden border-l border-red-800/60 pl-4 sm:block">
            <h1 className="text-[21px] font-medium tracking-wide text-white">
              Kaushal Kaurav
            </h1>
          </div>
        </NavLink>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative rounded-full px-6 py-3 text-[15px] font-medium transition-all duration-300
                ${
                  isActive
                    ? "border border-red-500/70 bg-red-600/10 text-white shadow-[0_0_20px_rgba(239,68,68,0.25)]"
                    : "border border-transparent text-gray-300 hover:border-red-500/40 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* ================= THEME TOGGLE ================= */}
        <div className="hidden items-center gap-2 rounded-full border border-red-900/70 bg-black/40 p-1.5 lg:flex">

          {/* Sun */}
          <button
            onClick={() => setDarkMode(false)}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
              !darkMode
                ? "bg-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                : "text-red-400 hover:text-white"
            }`}
          >
            <Sun size={17} />
          </button>

          {/* Toggle Circle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative h-8 w-8 rounded-full bg-linear-to-br from-red-400 to-red-200 shadow-[0_0_15px_rgba(248,113,113,0.4)] transition-transform duration-300 hover:scale-105"
          />

          {/* Moon */}
          <button
            onClick={() => setDarkMode(true)}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
              darkMode
                ? "text-red-400"
                : "text-gray-500"
            }`}
          >
            <Moon size={17} />
          </button>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-red-900/70 p-2 text-red-400 transition hover:bg-red-500/10 lg:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* ================= MOBILE NAV ================= */}
      {menuOpen && (
        <div className="border-t border-red-900/50 bg-[#090304]/95 px-6 py-5 backdrop-blur-xl lg:hidden">

          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-5 py-3 text-center transition-all duration-300 ${
                    isActive
                      ? "bg-red-500/10 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.15)]"
                      : "text-gray-300 hover:bg-red-500/5 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Theme */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-3 rounded-full border border-red-900/70 bg-black/50 px-5 py-2 text-sm text-gray-300"
            >
              {darkMode ? (
                <>
                  <Moon size={17} className="text-red-400" />
                  Dark Mode
                </>
              ) : (
                <>
                  <Sun size={17} className="text-red-400" />
                  Light Mode
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;