"use client";

import { ModeToggle } from "./ModeToggle";
import {
  Search,
  ChevronDown,
  Clapperboard,
  Loader2,
  SearchIcon,
  X,
  ArrowRight,
} from "lucide-react";
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
          <span className="text-2xl">MovieZ</span>
        </Link>

        <div className="flex gap-3 items-center">
          <div className="relative">
            <div
              className={cn(
                "flex items-center w-fit border border-zinc-200 rounded-xl bg-zinc-700/50 transition-all",
                isSearchOpen ? "w-64 md:w-96" : "w-10",
              )}
            ></div>
            <div
              className="h-10 w-10 cursor-pointer flex items-center border border-gray-200 rounded-xl justify-center text-white hover:text-white/80"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
              {!isLoading && <SearchIcon className="w-5 h-5" />}
            </div>
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={onChangeSearchValue}
            placeholder="Search movies..."
            className={cn(
              "bg-transparent text-white outline-none border border-zinc-200 rounded-xl p-2 transition-all duration-200 placeholder:text-zinc-400",
              isSearchOpen ? "w-full" : "w-0 opacity-0",
            )}
          />
          {isSearchOpen && (
            <button
              onClick={handleClearSearch}
              className="absolute right-2 text-white hover:text-white/80"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <div className="absolute top-10 flex-col flex gap-1 bg-zinc-100">
            {movies.slice(0, 4).map((movie) => (
              <div key={movie.id} className="w-full flex p-6 justify-between">
                <div className="flex gap-3">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `}
                    alt={`${movie.title} poster`}
                    className="w-16.75 h-25 object-cover rounded-md object-center shrink-0"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-base font-semibold text-muted-foreground relative">
                      {movie.title}
                    </h2>

                    <span className="flex gap-1 text-sm text-muted-foreground ">
                      <span className=" text-yellow-400 fill-yellow-400">
                        ★
                      </span>
                      {Math.floor(movie.vote_average * 10) / 10} (
                      {movie.vote_count}
                      votes)
                    </span>

                    <span className="text-sm">
                      {movie.release_date.slice(0, 4)}
                    </span>
                  </div>
                </div>
                <Button className="w-fit text-sm self-end gap-1.5 hover:scale-105 transition-all duration-200 group/btn cursor-pointer">
                  <span>See More</span>
                  <ArrowRight className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>
          <div className={cn(isSearchOpen && "sm:hidden")}>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
