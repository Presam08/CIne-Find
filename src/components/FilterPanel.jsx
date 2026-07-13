import React from "react";
import { filterOptions } from "../utils/movies";

const sections = [
  ["types", "Type"],
  ["genres", "Genre"],
  ["countries", "Country"],
  ["ratings", "Rating"]
];

export default function FilterPanel({ filters, onChange, resultCount, compact = false }) {
  const toggle = (key, value) => {
    const current = filters[key] || [];
    const next = current.includes(value) ? current.filter((item) => item !== value) : [...current, value];
    onChange({ ...filters, [key]: next });
  };

  const clear = () => onChange({ types: [], genres: [], countries: [], ratings: [], yearMin: "", yearMax: "" });

  return (
    <aside className={`${compact ? "" : "lg:sticky lg:top-24"} h-fit`}>
      <div className="mb-md flex items-center justify-between border-b border-outline-variant pb-sm">
        <h2 className="text-headline-md font-bold">Filters</h2>
        {typeof resultCount === "number" && <span className="font-geist text-body-md text-primary">{resultCount} results found</span>}
      </div>
      <div className="space-y-md">
        {sections.map(([key, label]) => (
          <details key={key} open className="border-b border-outline-variant pb-sm">
            <summary className="label-text flex cursor-pointer list-none items-center justify-between text-primary">
              {label}
              <span className="material-symbols-outlined text-base">expand_more</span>
            </summary>
            <div className="mt-sm grid max-h-48 grid-cols-1 gap-xs overflow-auto pr-xs sm:grid-cols-2 lg:grid-cols-1">
              {filterOptions[key].map((value) => (
                <label key={value} className="flex cursor-pointer items-center gap-xs text-body-md text-on-background">
                  <input
                    type="checkbox"
                    checked={filters[key]?.includes(value) || false}
                    onChange={() => toggle(key, value)}
                    className="h-5 w-5 rounded border-outline-variant accent-primary-container"
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </details>
        ))}
        <div className="border-b border-outline-variant pb-md">
          <p className="label-text mb-sm text-primary">Release Year</p>
          <div className="grid grid-cols-2 gap-xs">
            <input type="number" min={filterOptions.yearMin} max={filterOptions.yearMax} value={filters.yearMin} onChange={(event) => onChange({ ...filters, yearMin: event.target.value })} placeholder={String(filterOptions.yearMin)} className="rounded-lg border border-outline-variant bg-surface-container px-sm py-xs text-body-md outline-none focus:border-primary" />
            <input type="number" min={filterOptions.yearMin} max={filterOptions.yearMax} value={filters.yearMax} onChange={(event) => onChange({ ...filters, yearMax: event.target.value })} placeholder={String(filterOptions.yearMax)} className="rounded-lg border border-outline-variant bg-surface-container px-sm py-xs text-body-md outline-none focus:border-primary" />
          </div>
        </div>
        <button onClick={clear} className="w-full rounded-lg bg-primary-container px-md py-sm font-bold text-on-primary-container transition hover:brightness-110">
          Clear Filters
        </button>
      </div>
    </aside>
  );
}
