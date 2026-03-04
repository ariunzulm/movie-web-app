import { options } from ".";
import { Response } from "../types";

export const getMoviesByCategory = async (
  category: string,
  page: number,
): Promise<Response> => {
  const response = await fetch(
    `${process.env.baseUrl}/${category}?language=en-US&page=${page}`,
    options,
  );
  const data = await response.json();
  return data;
};

// export const getUpcomingMovies = async (page: number): Promise<Response> => {
//   const response = await fetch(
//     `${process.env.baseUrl}/upcoming?language=en-US&page=${page}`,
//     options,
//   );
//   const data = await response.json();

//   return data;
// };
