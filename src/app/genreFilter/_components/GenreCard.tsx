"use client";
import { Genre as GenreType } from "@/lib/types";
import { useState } from "react";

type GenreCardProps = {
  genre: GenreType;
  isSelected: boolean;
};

const GenreCard = ({ genre, isSelected }: GenreCardProps) => {
  return (
    <div
      className={` px-4 py-3 text-sm rounded-full flex justify-center cursor-pointer transition-colors bg-zinc-800 text-zinc-100 hover:bg-zinc-700 hover:text-white
               dark:bg-white/5 dark:border dark:border-white/10  dark:hover:bg-white/10 ${isSelected ? "text-red-500" : "dark:text-zinc-300 light:text-zinc-900"} dark:hover:text-white light:bg-zinc-100 light:border light:border-zinc-300 light:hover:bg-zinc-200`}
    >
      {genre.name}
    </div>
  );
};

export default GenreCard;
{
  /* <div className={`${isSelected && "text-red-500"}`}>{genre.name}</div>; */
}
