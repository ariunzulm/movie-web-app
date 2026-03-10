import { getSimilarMovies } from "@/lib/api/get-movies-by-similars";

import { SectionHeader } from "./MovieInfo";

import Link from "next/link";
import MovieHomeCard from "@/app/homescreen/_components/MovieHomeCard";
import { console } from "inspector";

type SimilarsProps = {
  params: Promise<{ movieId: string }>;
};

const Similars = async ({ params }: SimilarsProps) => {
  const { movieId } = await params;
  const { results } = await getSimilarMovies(movieId);
  console.log("mvoe", results);
  return (
    <div id="similars" className="p-6 max-w-360 mx-auto sm:px-6 lg:px-8">
      <div className="flex flex-col w-full gap-4">
        <SectionHeader title="You may like" />
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
  );
};

export default Similars;
