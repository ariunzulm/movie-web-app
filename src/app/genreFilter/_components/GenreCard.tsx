"use client";
import { Genre as GenreType } from "@/lib/types";
import { cn } from "@/lib/utils";

type GenreCardProps = {
  genre: GenreType;
  isSelected: boolean;
};

const GenreCard = ({ genre, isSelected }: GenreCardProps) => {
  return (
    <div
      className={cn(
        "px-4 py-3 text-sm rounded-xl flex justify-center cursor-pointer transition-all duration-200 border",
        isSelected
          ? "backdrop-blur-lg border-red-800 text-red-800 font-medium"
          : "bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white hover:border-white/20 dark:bg-white/5 dark:border-white/10 dark:text-zinc-400 light:bg-zinc-100 light:border-zinc-300 light:text-zinc-900 light:hover:bg-zinc-200",
      )}
    >
      {genre.name}
    </div>
  );
};

export default GenreCard;
{
  /* <div className={`${isSelected && "text-red-500"}`}>{genre.name}</div>; */
}
