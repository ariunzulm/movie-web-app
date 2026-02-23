import { getMovieById } from "@/lib/api/get-moviesById";
import { DetailsCardProps } from "./_utils/awaits";

import Buttons from "./_components/Bottons";
import MovieInfo from "./_components/MovieInfo";
import Similars from "./_components/Similars";
import PosterDetails from "./_components/PosterDetails";
import LinkButtons from "./_components/LinkButtons";

const DetailsCard = async ({ params }: DetailsCardProps) => {
  const { movieId } = await params;

  const movie = await getMovieById(movieId);

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div className=" text-black">
      <div className="w-full">
        <div className="relative w-full h-[80vh]">
          <div className="absolute inset-0">
            <img
              src={backdropUrl}
              alt={movie.title}
              className="aspect-video h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-transparent to-transparent" />
          </div>

          <LinkButtons />
        </div>

        <div className="absolute p-12 top-1/2 z-40 group hover:scale-105">
          <div className="max-w-7xl mx-auto text-white space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-8">
              {movie.title}
            </h1>
            <Buttons />
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-2">
          <PosterDetails params={params} /> <MovieInfo params={params} />
        </div>
        <Similars params={params} />
      </div>
    </div>
  );
};

export default DetailsCard;
