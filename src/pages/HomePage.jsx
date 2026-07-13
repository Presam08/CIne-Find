import React from "react";
import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import MovieGrid from "../components/MovieGrid";
import Footer from "../components/Footer";
import { allMovies, defaultFilters, searchMovies } from "../utils/movies";

export default function HomePage() {
  const [filters, setFilters] = useState(defaultFilters);
  const movies = useMemo(() => searchMovies({ filters }), [filters]);

  return (
    <div className="min-h-screen bg-background text-on-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-margin-mobile py-xl md:px-margin-desktop">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(229,9,20,0.22),transparent_42%)]" />
          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
            <h1 className="mb-md text-display-mobile font-extrabold md:text-display-lg">Find your next obsession.</h1>
            <SearchBar />
            <div className="mt-md w-full rounded-xl border border-outline-variant bg-surface-container/45 p-sm text-left md:hidden">
              <FilterPanel filters={filters} onChange={setFilters} resultCount={movies.length} compact />
            </div>
            <div className="mt-sm hidden w-full max-w-3xl grid-cols-5 gap-sm md:grid">
              {["Type", "Genre", "Country", "Rating", "Year"].map((label) => (
                <div key={label} className="rounded-lg border border-outline-variant bg-surface-container-low px-sm py-xs font-geist text-metadata-sm text-secondary">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-margin-mobile pb-xl md:px-margin-desktop">
          <div className="mb-md flex items-end justify-between">
            <div>
              <h2 className="text-headline-md font-bold">Trending Now</h2>
              <p className="font-geist text-metadata-sm text-secondary">Handpicked from your curated 50-title catalog</p>
            </div>
            <p className="hidden font-geist text-body-md text-primary md:block">{movies.length} of {allMovies.length} titles</p>
          </div>
          <MovieGrid movies={movies} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
