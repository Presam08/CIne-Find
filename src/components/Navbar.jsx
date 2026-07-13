import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar({ showSearch = true }) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant bg-surface-container/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center gap-lg">
          <button onClick={() => navigate("/")} className="text-headline-md font-bold text-primary">CineFind</button>
          <div className="hidden items-center gap-md md:flex">
            {[
              ["/", "Home"],
              ["/results", "Advanced Search"],
              ["/about", "About"]
            ].map(([to, label]) => (
              <NavLink key={label} to={to === "/about" ? "/" : to} className={({ isActive }) => `label-text pb-1 transition ${isActive && to !== "/about" ? "border-b-2 border-primary text-primary" : "text-on-surface-variant hover:text-on-background"}`}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-sm text-primary">
          {showSearch && (
            <button onClick={() => navigate("/results")} className="rounded-full p-xs text-on-surface-variant transition hover:bg-surface-container-high hover:text-primary" aria-label="Search">
              <span className="material-symbols-outlined">search</span>
            </button>
          )}
          <button className="rounded-full p-xs text-primary" aria-label="Account">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
