import { options } from ".";
import { Trailers } from "../types";

export const getMoviesByTrailer = async (
  movieId: string,
): Promise<Trailers> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,

    options,
  );
  const data = await response.json();

  return data;
};
