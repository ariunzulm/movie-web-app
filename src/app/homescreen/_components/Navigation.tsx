"use client";

import { ModeToggle } from "./ModeToggle";
import { Clapperboard, Loader2, Search, X, ArrowRight } from "lucide-react";
import { ChangeEventHandler, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { Movie } from "@/lib/types";
import { getSearchMovies } from "@/lib/api/search-movies";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setMovies([]);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);

    const timer = setTimeout(async () => {
      const data = await getSearchMovies(searchValue);
      console.log({ data });
      setMovies(data.results);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const handleClearSearch = () => {
    setSearchValue("");
    setMovies([]);
    setIsSearchOpen(false);
  };
  const handleSearchToggle = () => {
    if (isSearchOpen && searchValue === "") {
      setIsSearchOpen(false);
    } else {
      setIsSearchOpen(true);
    }
  };
  const hasResult = movies.length > 0;

  return (
    <header className="absolute inset-x-0 top-0 z-50 border border-b-zinc-200">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12 bg-zinc-800 bg-linear-to-b from-black to-transparent backdrop-blur-lg">
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-bold text-xl hover:opacity-80 transition-opacity"
        >
          <div className="border border-gray-200 rounded-xl p-2 flex items-center justify-center">
            <Clapperboard className="w-5 h-5 text-gray-200" />
          </div>
          <span className="text-2xl tracking-tight">MovieZ</span>
        </Link>

        <div className="flex items-center gap-3 ">
          <div className="relative">
            <div
              className={cn(
                "flex items-center w-fit border border-zinc-200 rounded-xl bg-zinc-700/50 transition-all",
                isSearchOpen ? "w-64 md:w-96" : "w-10 justify-center",
              )}
            ></div>
            <div className="flex">
              <button
                className="h-10 w-10 cursor-pointer flex items-center rounded-xl justify-center text-white hover:text-red-800 hover:backdrop-blur-lg"
                onClick={handleSearchToggle}
                aria-label="Toggle search"
              >
                {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
                {!isLoading && <Search className="w-5 h-5" />}
              </button>
              <input
                type="text"
                value={searchValue}
                onChange={onChangeSearchValue}
                placeholder="Search movies..."
                className={cn(
                  "bg-transparent text-white text-sm outline-none py-2 transition-all duration-200 placeholder:text-zinc-400 hover:transition-colors",
                  isSearchOpen ? "w-full" : "w-0 opacity-0",
                  isSearchOpen
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 pointer-events-none",
                )}
              />
              {isSearchOpen && (
                <button
                  onClick={handleClearSearch}
                  className="shrink-0 p-1.5 rounded-lg text-white hover:text-red-800"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
          {hasResult && isSearchOpen && (
            <div className="absolute top-full mt-2 flex-col w-110 flex gap-1 bg-zinc-200 backdrop-blur-lg shadow-2xl rounded-2xl">
              {movies.slice(0, 4).map((movie) => (
                <Link
                  key={movie.id}
                  href={`/movie/${movie.id}`}
                  onClick={handleClearSearch}
                >
                  <div
                    className={cn(
                      "flex items-center justify-between  gap-4 p-4 hover:bg-white/50 transition-colors group  rounded-2xl",
                    )}
                  >
                    <div className="flex gap-6">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `}
                        alt={`${movie.title} poster`}
                        className="w-16.75 h-25 object-cover rounded-md object-center shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h2 className="text-base font-semibold text-muted-foreground truncate leading-snug">
                          {movie.title}
                        </h2>

                        <div className="flex items-center gap-1.5 text-sm mt-1 text-muted-foreground ">
                          <span className=" text-yellow-400 fill-yellow-400">
                            ★
                          </span>
                          {Math.floor(movie.vote_average * 10) / 10} (
                          {movie.vote_count}
                          votes)
                        </div>

                        <span className="text-sm">
                          {movie.release_date.slice(0, 4)}
                        </span>
                      </div>
                    </div>
                    <Button className="w-fit text-sm self-end gap-1.5 hover:scale-105 transition-all duration-200 group/btn cursor-pointer hover:text-red-800">
                      <span>See More</span>
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="w-full h-0.5 bg-zinc-300" />
                </Link>
              ))}
              {movies.length > 4 && (
                <div className="px-4 py-3 border-t border-white">
                  <button className="text-xs text-black hover:text-red-800 hover:scale-105 transition-colors w-full text-center">
                    {movies.length - 4} more results - press Enter to see all
                  </button>
                </div>
              )}
            </div>
          )}
          <div className="flex flex-col">
            <div
              className={cn(
                "flex items-center border w-10 border-zinc-200 rounded-xl bg-zinc-700/50 transition-all",
              )}
            ></div>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
