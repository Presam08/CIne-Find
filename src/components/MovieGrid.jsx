import React from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {
  return (
    <div className="grid grid-cols-2 gap-sm md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}
