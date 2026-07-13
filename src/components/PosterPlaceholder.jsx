import React from "react";
import { getInitials } from "../utils/movies";

export default function PosterPlaceholder({ title, className = "" }) {
  return (
    <div className={`relative flex aspect-[2/3] items-center justify-center overflow-hidden rounded-lg border border-outline-variant bg-[radial-gradient(circle_at_30%_20%,rgba(255,180,170,0.42),transparent_28%),linear-gradient(145deg,#353534,#201f1f_54%,#45070b)] ${className}`}>
      <span className="material-symbols-outlined absolute left-3 top-3 text-primary/60">movie</span>
      <span className="px-4 text-center font-inter text-3xl font-extrabold text-on-primary-container drop-shadow-lg">{getInitials(title)}</span>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
    </div>
  );
}
