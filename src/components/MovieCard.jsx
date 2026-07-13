import React from "react";
import { Link } from "react-router-dom";
import PosterPlaceholder from "./PosterPlaceholder";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/title/${movie.id}`} className="card-hover group overflow-hidden rounded-xl border border-outline-variant bg-surface-container">
      <div className="relative">
        <PosterPlaceholder title={movie.title} className="rounded-b-none border-0" />
        <span className="label-text absolute left-xs top-xs rounded bg-primary-container px-xs py-1 text-on-primary-container">{movie.type}</span>
      </div>
      <div className="space-y-1 p-sm">
        <h3 className="line-clamp-1 text-body-lg font-semibold text-on-background">{movie.title}</h3>
        <p className="font-geist text-metadata-sm text-secondary">{movie.release_year} • {movie.duration}</p>
        <p className="line-clamp-2 text-body-md text-secondary/65 opacity-70 transition group-hover:text-on-surface-variant group-hover:opacity-100">{movie.description}</p>
      </div>
    </Link>
  );
}
