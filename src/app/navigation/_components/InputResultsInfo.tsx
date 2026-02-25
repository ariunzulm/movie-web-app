import { Movie } from "@/lib/types";
import { cn } from "@/lib/utils";
import { SearchX } from "lucide-react";

type NoResultsProps = {
  searchValue: string;
};
type MoreResultsProps = {
  searchValue: string;
  movies: Movie[];
};

export function MoreResults({ searchValue, movies }: MoreResultsProps) {
  return (
    <div
      className={cn(
        "px-4 py-3 text-center text-xs transition-colors cursor-pointer",
        "bg-white/3 hover:bg-white/6 text-zinc-400 hover:text-white",
        "light:bg-zinc-50 light:hover:bg-zinc-100 light:text-zinc-500 light:hover:text-zinc-900",
        "border-t border-white/6 light:border-zinc-100",
      )}
    >
      {movies.length - 4} more results - See all results for "
      {searchValue.toLocaleUpperCase()}"
    </div>
  );
}

export function NoResults({ searchValue }: NoResultsProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-2">
      <SearchX className="w-8 h-8 text-zinc-600 dark:text-zinc-600 light:text-zinc-400" />
      <p
        className={cn(
          "font-medium text-sm",
          "text-zinc-300 dark:text-zinc-300",
          "light:text-zinc-700",
        )}
      >
        No results found.
      </p>
      <p
        className={cn(
          "text-xs text-center",
          "text-zinc-500 dark:text-zinc-500",
          "light:text-zinc-400",
        )}
      >
        We couldn't find any results for "{searchValue}". Try adjusting your
        search or browse our trending content.
      </p>
    </div>
  );
}
