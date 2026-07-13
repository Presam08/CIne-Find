# CineFind

CineFind is a React-based movie and TV search interface built for a small information retrieval project. It searches a curated local catalog of 50 Netflix titles and supports keyword search, filtering, sorting, title detail pages, and related-title recommendations.

## Features

- Search across title, director, cast, genres, and description
- Filter by type, genre, country, rating, and release year
- Relevance ranking based on field matches
- Search results page with sortable results
- Detail pages with synopsis, cast and crew, metadata, and similar titles
- Responsive dark theme inspired by streaming-service interfaces

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router
- GitHub Pages

## Data

The app uses a local JSON dataset only:

```text
src/data/movies-data.json
```

There is no backend and no external movie API. Poster art is represented with generated placeholder panels based on each title.

## Local Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The site is configured for GitHub Pages under the repository path:

```text
/CIne-Find/
```

The `gh-pages` branch contains the static build used by GitHub Pages.
