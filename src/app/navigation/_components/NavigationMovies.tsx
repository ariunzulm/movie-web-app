import { Button } from "@/components/ui/button";
import { Movie } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";

type NavigationMoviesProps = {
  movie: Movie;
};

export default function NavigationMovies({ movie }: NavigationMoviesProps) {
  return (
    <div>
      <div
        className={cn(
          "flex items-center justify-between gap-4 px-4 py-3 transition-colors",
          "hover:bg-white/5 dark:hover:bg-white/5",
          "light:hover:bg-zinc-50",
        )}
      >
        <div className="flex gap-3 items-center min-w-0">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `}
            alt={`${movie.title} poster`}
            className="w-17 h-25 object-cover rounded-md object-center shrink-0"
          />
          <div className="flex-1 box-border">
            <h2
              className={cn(
                "text-sm font-semibold truncate",
                "text-white dark:text-white",
                "light:text-zinc-900",
              )}
            >
              {movie.title}
            </h2>

            <div
              className={cn(
                "flex items-center gap-1 text-xs mt-0.5",
                "text-zinc-400 dark:text-zinc-400",
                "light:text-zinc-500",
              )}
            >
              <span className=" text-yellow-400 fill-yellow-400">★</span>
              {Math.floor(movie.vote_average * 10) / 10} ({movie.vote_count}
              votes)
            </div>

            <span
              className={cn(
                "text-xs mt-0.5",
                "text-zinc-500 dark:text-zinc-500",
                "light:text-zinc-400",
              )}
            >
              {movie.release_date.slice(0, 4)}
            </span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Button
            className={cn(
              "shrink-0 text-xs h-7 px-3 rounded-lg border transition-colors",
              "border-white/10 text-zinc-300 bg-white/5 hover:bg-white/10 hover:text-white dark:border-white/10 dark:text-zinc-300 dark:bg-white/5 dark:hover:bg-white/10",
              "light:border-zinc-200 light:text-zinc-600 light:bg-transparent light:hover:bg-zinc-100",
            )}
          >
            See More
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
      <div className="w-full h-0.5 bg-zinc-300" />
    </div>
  );
}
