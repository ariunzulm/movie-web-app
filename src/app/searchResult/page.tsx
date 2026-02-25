import MovieHomeCard from "../homescreen/_components/MovieHomeCard";
import { Movie } from "@/lib/types";
import { getSearchMovies } from "@/lib/api/search-movies";

type SearchMoviesProps = {
  title: string;
  movies: Movie[];
  searchParams: Promise<{ [key: string]: string }>;
};

const SearchResults = async ({ searchParams }: SearchMoviesProps) => {
  const { searchValue } = await searchParams;
  const { results } = await getSearchMovies(searchValue, 1);

  return (
    <div className="mx-auto my-5 max-w-7xl min-h-screen space-y-5 px-4 sm:px-6 lg:px-8">
      <div className="flex gap-2">
        <div className="w-2 h-8 bg-red-500 rounded-full" />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-muted-foreground relative">
          <span className="relative z-10">Search Result</span>
        </h2>
      </div>
      <div className="w-fit flex items-center text-md font-semibold rounded-lg  text-black bg-transparent border border-transparent gap-1.5 py-1">
        {`${results.length} results for "${searchValue}"`}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {results?.map((movie) => (
          <MovieHomeCard
            key={movie.id}
            movieName={movie.title}
            description={movie.overview}
            posterImage={movie.poster_path}
            rating={movie.vote_average}
          />
        ))}
      </div>

      <div className="flex gap-2 my-5">
        <div className="w-2 h-8 bg-red-500 rounded-full" />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-muted-foreground relative">
          <span className="relative z-10">Search by genre</span>
        </h2>
      </div>
    </div>
  );
};
export default SearchResults;
