import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PosterPlaceholder from "../components/PosterPlaceholder";
import MovieCard from "../components/MovieCard";
import { allMovies, relatedMovies } from "../utils/movies";

const infoRows = (movie) => [
  ["Director", movie.director || "Not listed"],
  ["Country", movie.country?.join(", ") || "Not listed"],
  ["Genre", movie.genres?.join(", ") || "Not listed"],
  ["Date Added", movie.date_added || "Not listed"]
];

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = allMovies.find((item) => item.id === id) || allMovies[0];
  const similar = relatedMovies(movie);

  return (
    <div className="min-h-screen bg-background text-on-background">
      <Navbar />
      <main>
        <section className="relative flex min-h-[680px] items-end overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_18%,rgba(255,180,170,0.18),transparent_28%),linear-gradient(135deg,#201f1f_0%,#131313_45%,#300508_100%)]" />
          <div className="absolute inset-0 opacity-40">
            <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
          </div>
          <div className="hero-gradient absolute inset-0" />
          <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-md px-margin-mobile pb-xl pt-lg md:grid-cols-[220px_1fr] md:px-margin-desktop">
            <PosterPlaceholder title={movie.title} className="hidden shadow-2xl shadow-black/40 md:flex" />
            <div className="self-end">
              <button onClick={() => navigate(-1)} className="mb-md inline-flex items-center gap-xs text-on-surface-variant transition hover:text-primary">
                <span className="material-symbols-outlined">arrow_back</span>
                <span className="label-text">Back to results</span>
              </button>
              <div className="mb-sm flex flex-wrap items-center gap-sm">
                <span className="label-text rounded bg-primary-container px-sm py-1 text-on-primary-container">{movie.type}</span>
                <span className="font-geist text-body-md text-secondary">{movie.release_year}</span>
                <span className="rounded border border-primary px-xs py-1 font-geist text-metadata-sm text-primary">{movie.rating}</span>
                <span className="font-geist text-body-md text-secondary">{movie.duration}</span>
                <span className="flex items-center gap-1 font-bold text-primary"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>8.4</span>
              </div>
              <h1 className="max-w-4xl text-display-mobile font-extrabold md:text-display-lg">{movie.title}</h1>
              <div className="mt-md flex flex-wrap gap-sm">
                <button className="flex items-center gap-xs rounded bg-primary-container px-lg py-sm font-bold text-on-primary-container transition hover:brightness-110">
                  <span className="material-symbols-outlined">play_arrow</span>
                  Watch Now
                </button>
                <button className="glass-panel flex items-center gap-xs rounded px-lg py-sm font-bold">
                  <span className="material-symbols-outlined">add</span>
                  My List
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-lg px-margin-mobile py-lg md:px-margin-desktop lg:grid-cols-12">
          <div className="space-y-lg lg:col-span-8">
            <div>
              <h2 className="mb-sm text-headline-sm font-semibold text-primary">Synopsis</h2>
              <p className="max-w-4xl text-body-lg text-on-background">{movie.description}</p>
            </div>
            <div>
              <h2 className="mb-sm text-headline-sm font-semibold text-primary">Cast & Crew</h2>
              <div className="grid gap-xs sm:grid-cols-2">
                <div className="glass-panel rounded-lg p-sm">
                  <p className="font-bold">Director</p>
                  <p className="font-geist text-body-md text-secondary">{movie.director || "Not listed"}</p>
                </div>
                {(movie.cast || []).slice(0, 6).map((person) => (
                  <div key={person} className="glass-panel rounded-lg p-sm">
                    <p className="font-bold">{person}</p>
                    <p className="font-geist text-body-md text-secondary">Cast</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <aside className="glass-panel h-fit rounded-xl p-md lg:col-span-4">
            <h2 className="mb-md text-headline-sm font-semibold">Information</h2>
            <div className="space-y-sm">
              {infoRows(movie).map(([label, value]) => (
                <div key={label} className="border-b border-outline-variant pb-sm">
                  <p className="font-geist text-metadata-sm text-primary">{label}</p>
                  <p className="mt-1 text-body-md">{value}</p>
                </div>
              ))}
              <div>
                <p className="mb-xs font-geist text-metadata-sm text-primary">Cast</p>
                <div className="flex flex-wrap gap-xs">
                  {(movie.cast || []).slice(0, 8).map((person) => <span key={person} className="rounded-full bg-surface-container-high px-xs py-1 font-geist text-metadata-sm">{person}</span>)}
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="mx-auto max-w-7xl px-margin-mobile pb-xl md:px-margin-desktop">
          <h2 className="mb-md text-headline-md font-bold">Similar Titles</h2>
          <div className="grid grid-cols-2 gap-sm md:grid-cols-3 lg:grid-cols-5">
            {similar.map((item) => <MovieCard key={item.id} movie={item} />)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
