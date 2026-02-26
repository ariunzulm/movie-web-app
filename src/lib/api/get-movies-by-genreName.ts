import { options } from ".";
import { Genres } from "../types";

export const getMoviesByGenreName = async (): Promise<Genres> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list",
    options,
  );
  const data = await response.json();
  return data;
};

