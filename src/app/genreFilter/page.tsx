import { Movie } from "@/lib/types";
import MovieHomeCard from "../homescreen/_components/MovieHomeCard";
import Link from "next/link";
import MenuBar from "./_components/MenuBar";
import { Title } from "../homescreen/_components/MovieListingTitles";

type GenreFilterProps = {
  movies: Movie[];
};

const GenreFilter = ({ movies }: GenreFilterProps) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center my-8 px-5">
        <Title title="Genre" />
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
