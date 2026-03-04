import { options } from ".";
import { Response } from "../types";

export const getUpcomingMovies = async (page: number): Promise<Response> => {
  const response = await fetch(
    `${process.env.baseUrl}/upcoming?language=en-US&page=${page}`,
    options,
  );
  const data = await response.json();

  return data;
};
  