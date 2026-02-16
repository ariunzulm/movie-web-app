"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Field } from "@/components/ui/field";
import { getSearchMovies } from "@/lib/api/search-movies";
import { ArrowRight, Loader2, SearchIcon, Star } from "lucide-react";
import { ChangeEventHandler, use, useEffect, useState } from "react";
import { Movie } from "@/lib/types";
import { Button } from "@/components/ui/button";

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setMovies([]);
      return;
    }
    setIsLoading(true);

    const timer = setTimeout(async () => {
      const data = await getSearchMovies(searchValue);
      console.log({ data });
      setMovies(data.results);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <div className="relative flex flex-col w-full max-w-138.25 mx-auto mt-20 h-screen">
      <Field className="w-full">
        <InputGroup>
          <InputGroupAddon align="inline-start">
            {isLoading && (
              <Loader2 className="text-muted-foreground animate-spin" />
            )}
            {!isLoading && <SearchIcon className="text-muted-foreground" />}
          </InputGroupAddon>

          <InputGroupInput
            value={searchValue}
            onChange={onChangeSearchValue}
            placeholder="Type here to search..."
            className="text-black"
          />
        </InputGroup>

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
                    <span className=" text-yellow-400 fill-yellow-400">★</span>
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
      </Field>
      {searchValue && !isLoading && (
        <p className="text-sm text-muted-foreground mt-2 text-center">
          No movies found
        </p>
      )}
    </div>
  );
};

export default Search;
