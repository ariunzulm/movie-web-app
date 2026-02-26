import { options } from ".";
import { Response } from "../types";

export const getMoviesByGenreId = async (
  genreId: string,
): Promise<Response> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}`,
    options,
  );
  const data = await response.json();
  return data;
};
