import { options } from ".";
import { Response } from "../types";

export const getSimilarMovies = async (movieId: string): Promise<Response> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
    options,
  );
  const data = await response.json();

  return data;
};
