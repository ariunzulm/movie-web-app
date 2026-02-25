import MovieHomeCard from "../homescreen/_components/MovieHomeCard";
import { Movie } from "@/lib/types";
import { getSearchMovies } from "@/lib/api/search-movies";
import GenreFilter from "../genreFilter/page";
import Link from "next/link";

type SearchMoviesProps = {
  title: string;
  movies: Movie[];
  searchParams: Promise<{ [key: string]: string }>;
};

const SearchResults = async ({ searchParams, movies }: SearchMoviesProps) => {
  const { searchValue } = await searchParams;
  const { results } = await getSearchMovies(searchValue, 1);

  return (
    <div>
      <div className="mx-auto my-5 max-w-7xl min-h-screen space-y-5 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2">
          <div className="w-2 h-8 bg-red-500 rounded-full" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground relative">
            <span className="relative z-10">Search Result</span>
          </h2>
        </div>
        <div className="text-md font-semibold text-muted-foreground">
          {`${results.length} results for "${searchValue}"`}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {results?.map((movie) => (
            <Link key={movie.id} href={`/${movie.id}`}>
              <MovieHomeCard
                movieName={movie.title}
                description={movie.overview}
                posterImage={movie.poster_path}
                rating={movie.vote_average}
              />
            </Link>
          ))}
        </div>
      </div>

      <GenreFilter movies={movies} />
    </div>
  );
};
export default SearchResults;
