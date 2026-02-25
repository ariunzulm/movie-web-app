"use client";

import { ChangeEventHandler, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Movie } from "@/lib/types";
import { getSearchMovies } from "@/lib/api/search-movies";

import Logo from "./_components/Logo";
import NavigationMovies from "./_components/NavigationMovies";
import ThemeMode from "./_components/ThemeMode";
import { MoreResults, NoResults } from "./_components/InputResultsInfo";
import SearchInput from "./_components/SearchInput";

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

  const showNoResults =
    isSearchOpen && searchValue !== "" && !isLoading && !hasResult;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200">
      <nav
        className={cn(
          "flex items-center justify-between px-6 py-4 lg:px-12",
          "bg-[#0f0f0f]/95 dark:bg-[#0f0f0f]/95",
          "border-b border-white/5 dark:border-white/5",
          "light:bg-white/95 light:border-zinc-200",
          "backdrop-blur-xl transition-colors duration-300",
        )}
      >
        <Logo />

        <div className="flex items-center gap-2">
          <SearchInput
            isSearchOpen={isSearchOpen}
            handleSearchToggle={handleSearchToggle}
            handleClearSearch={handleClearSearch}
            isLoading={isLoading}
            searchValue={searchValue}
            onChangeSearchValue={onChangeSearchValue}
          />

          {isSearchOpen && (hasResult || showNoResults) && (
            <div
              className={cn(
                "absolute top-full right-22 mt-2 w-96 rounded-2xl overflow-hidden",
                "shadow-[0_8px_32px_rgba(0,0,0,0.6)]",
                "bg-[#1a1a1a] dark:bg-[#1a1a1a] border border-white/8 dark:border-white/8",
                "light:bg-white light:border-zinc-200 light:shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
              )}
            >
              {hasResult ? (
                <>
                  {movies.slice(0, 4).map((movie) => (
                    <Link
                      key={movie.id}
                      href={`/${movie.id}`}
                      onClick={handleClearSearch}
                    >
                      <NavigationMovies movie={movie} />
                    </Link>
                  ))}
                  {movies.length > 4 && (
                    <Link href={`/searchResult?searchValue=${searchValue}`}>
                      <MoreResults searchValue={searchValue} movies={movies} />
                    </Link>
                  )}
                </>
              ) : (
                <NoResults searchValue={searchValue} />
              )}
            </div>
          )}
          <ThemeMode isSearchOpen={isSearchOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
