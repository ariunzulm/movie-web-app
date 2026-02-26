import { getMoviesByGenreId } from "@/lib/api/get-movies-by-genreId";
import MovieHomeCard from "@/app/homescreen/_components/MovieHomeCard";
import Link from "next/link";
import { Movie } from "@/lib/types";

type GenreSearchProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const GenreSearch = async ({ searchParams }: GenreSearchProps) => {
  const { genre } = await searchParams;
  
  const { results } = await getMoviesByGenreId(String(genre));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {results?.map((movie: Movie) => (
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
  );
};

export default GenreSearch;
