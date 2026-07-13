import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import Footer from "../components/Footer";
import PosterPlaceholder from "../components/PosterPlaceholder";
import { defaultFilters, searchMovies } from "../utils/movies";

export default function ResultsPage() {
  const [params] = useSearchParams();
  const query = params.get("q") || "";
  const [filters, setFilters] = useState(defaultFilters);
  const [sort, setSort] = useState("relevance");
  const results = useMemo(() => searchMovies({ query, filters, sort }), [query, filters, sort]);

  return (
    <div className="min-h-screen bg-background text-on-background">
      <Navbar showSearch={false} />
      <main className="mx-auto grid max-w-7xl gap-md px-margin-mobile py-lg md:px-margin-desktop lg:grid-cols-[320px_1fr]">
        <FilterPanel filters={filters} onChange={setFilters} resultCount={results.length} />
        <section>
          <div className="mb-md grid gap-sm md:grid-cols-[1fr_auto] md:items-center">
            <SearchBar initialQuery={query} compact />
            <label className="flex items-center gap-xs font-geist text-body-md text-on-surface-variant">
              Sorting by:
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-lg border border-outline-variant bg-surface-container px-sm py-xs text-on-background outline-none">
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
                <option value="title">Title A-Z</option>
              </select>
            </label>
          </div>

          {results.length === 0 ? (
            <div className="glass-panel rounded-xl p-lg text-center">
              <span className="material-symbols-outlined mb-sm text-5xl text-primary">search_off</span>
              <h1 className="text-headline-md font-bold">No matching titles</h1>
              <p className="mt-xs text-secondary">Try a broader search or clear a few filters.</p>
            </div>
          ) : (
            <div className="space-y-sm">
              {results.map((movie) => (
                <Link key={movie.id} to={`/title/${movie.id}`} data-score={movie.relevanceScore} className="card-hover grid gap-sm rounded-xl border border-outline-variant bg-surface-container p-sm md:grid-cols-[160px_1fr]">
                  <PosterPlaceholder title={movie.title} className="max-h-72 md:max-h-none" />
                  <div className="flex flex-col justify-between gap-sm p-xs md:p-sm">
                    <div>
                      <div className="mb-xs flex flex-wrap items-center gap-xs">
                        <span className="label-text rounded bg-primary-container px-xs py-1 text-on-primary-container">{movie.type}</span>
                        <span className="font-geist text-body-md text-secondary">{movie.release_year}</span>
                        <span className="rounded-full bg-surface-container-high px-xs py-1 font-geist text-metadata-sm text-secondary">{movie.rating}</span>
                      </div>
                      <h2 className="text-headline-md font-bold">{movie.title}</h2>
                      <div className="mt-xs flex flex-wrap gap-xs">
                        {movie.genres.slice(0, 4).map((genre) => <span key={genre} className="rounded-full bg-surface-container-high px-xs py-1 font-geist text-metadata-sm">{genre}</span>)}
                      </div>
                      <p className="mt-sm line-clamp-2 text-body-lg text-on-surface-variant">{movie.description}</p>
                    </div>
                    <span className="self-start font-geist text-body-md font-medium text-primary md:self-end">More Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
