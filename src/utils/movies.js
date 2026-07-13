import movies from "../data/movies-data.json";

const emptyFilters = {
  types: [],
  genres: [],
  countries: [],
  ratings: [],
  yearMin: "",
  yearMax: ""
};

const uniqueSorted = (values) => [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
const text = (value) => String(value || "").toLowerCase();

export const allMovies = movies;
export const defaultFilters = emptyFilters;

export const filterOptions = {
  types: uniqueSorted(movies.map((movie) => movie.type)),
  genres: uniqueSorted(movies.flatMap((movie) => movie.genres || [])),
  countries: uniqueSorted(movies.flatMap((movie) => movie.country || [])),
  ratings: uniqueSorted(movies.map((movie) => movie.rating)),
  yearMin: Math.min(...movies.map((movie) => movie.release_year)),
  yearMax: Math.max(...movies.map((movie) => movie.release_year))
};

export function getInitials(title) {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function scoreMovie(movie, query) {
  const q = text(query).trim();
  if (!q) return 0;

  let score = 0;
  if (text(movie.title).includes(q)) score += 3;
  if (text(movie.director).includes(q) || (movie.cast || []).some((person) => text(person).includes(q))) score += 2;
  if ((movie.genres || []).some((genre) => text(genre).includes(q)) || text(movie.description).includes(q)) score += 1;
  return score;
}

export function queryMatches(movie, query) {
  const q = text(query).trim();
  if (!q) return true;

  return [
    movie.title,
    movie.director,
    movie.description,
    ...(movie.cast || []),
    ...(movie.genres || [])
  ].some((field) => text(field).includes(q));
}

export function applyFilters(movie, filters = emptyFilters) {
  const typeOk = !filters.types?.length || filters.types.includes(movie.type);
  const genreOk = !filters.genres?.length || filters.genres.every((genre) => movie.genres?.includes(genre));
  const countryOk = !filters.countries?.length || filters.countries.some((country) => movie.country?.includes(country));
  const ratingOk = !filters.ratings?.length || filters.ratings.includes(movie.rating);
  const minOk = !filters.yearMin || movie.release_year >= Number(filters.yearMin);
  const maxOk = !filters.yearMax || movie.release_year <= Number(filters.yearMax);
  return typeOk && genreOk && countryOk && ratingOk && minOk && maxOk;
}

export function searchMovies({ query = "", filters = emptyFilters, sort = "relevance" }) {
  const results = movies
    .map((movie) => ({ ...movie, relevanceScore: scoreMovie(movie, query) }))
    .filter((movie) => queryMatches(movie, query) && applyFilters(movie, filters));

  if (sort === "newest") {
    results.sort((a, b) => b.release_year - a.release_year || a.title.localeCompare(b.title));
  } else if (sort === "title") {
    results.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    results.sort((a, b) => b.relevanceScore - a.relevanceScore || b.release_year - a.release_year || a.title.localeCompare(b.title));
  }

  if (query.trim()) {
    console.table(results.map(({ id, title, relevanceScore }) => ({ id, title, relevanceScore })));
  }

  return results;
}

export function relatedMovies(movie, count = 5) {
  if (!movie) return [];
  const seed = [...movie.id].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return movies
    .filter((candidate) => candidate.id !== movie.id && candidate.genres?.some((genre) => movie.genres?.includes(genre)))
    .sort((a, b) => ((a.release_year + seed) % 17) - ((b.release_year + seed) % 17))
    .slice(0, count);
}

