import { Movie } from "@/lib/types";
import MovieHomeCard from "../homescreen/_components/MovieHomeCard";
import Link from "next/link";
import MenuBar from "./_components/MenuBar";

type GenreFilterProps = {
  movies: Movie[];
  // searchParams: Promise<{ [key: string]: string }>;
};

const GenreFilter = async ({ movies }: GenreFilterProps) => {
  return (
    <div className="mx-auto max-w-7xl 0 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center my-8 px-5">
        <div className="flex gap-2">
          <div className="w-2 h-10 bg-red-500 rounded-full" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-muted-foreground relative">
            <span className="relative z-10">Genres</span>
          </h2>
        </div>
        <MenuBar />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies?.slice(0, 4).map((movie) => (
          <Link key={movie.id} href={`/${movie.id}`} className="block">
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
export default GenreFilter;
