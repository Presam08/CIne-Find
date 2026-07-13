import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ initialQuery = "", compact = false }) {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    navigate(`/results${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`);
  };

  return (
    <form onSubmit={submit} className={`relative flex w-full items-center overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low focus-within:border-primary ${compact ? "h-12" : "h-16 shadow-2xl shadow-primary-container/10"}`}>
      <span className="material-symbols-outlined pl-md text-on-surface-variant">search</span>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="h-full min-w-0 flex-1 border-0 bg-transparent px-sm text-body-lg text-on-background outline-none placeholder:text-secondary/45"
        placeholder="Search titles, cast, directors, genres..."
      />
      <button className="mr-xs rounded-lg bg-primary-container px-md py-xs font-bold text-on-primary-container transition hover:brightness-110 md:px-lg">
        Search
      </button>
    </form>
  );
}
