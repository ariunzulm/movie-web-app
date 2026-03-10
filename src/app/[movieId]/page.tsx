import { getMovieById } from "@/lib/api/get-moviesById";
import { DetailsCardProps } from "./_utils/awaits";

import MovieInfo from "./_components/MovieInfo";
import Similars from "./_components/Similars";
import PosterDetails from "./_components/PosterDetails";

import { getMoviesByTrailer } from "@/lib/api/get-movies-by-trailer";
import { TrailerSection } from "./_components/TrailerSection";

const DetailsCard = async ({ params }: DetailsCardProps) => {
  const { movieId } = await params;

  const movie = await getMovieById(movieId);

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const { results } = await getMoviesByTrailer(movieId);

  const trailer = results?.find(
    (vid: any) => vid.type === "Trailer" && vid.site === "YouTube",
  );
  if (!trailer)
    return (
      <div className="p-6 w-fit h-108 gap-4 flex items-center justify-center">
        <span className="text-gray-500">No trailer available</span>
      </div>
    );

  return (
    <div className="text-foreground">
      <div className="w-full">
        <TrailerSection trailerKey={trailer.key} backdropUrl={backdropUrl} />
        <div className="absolute p-12 top-3/5 group">
          <div className="max-w-7xl mx-auto text-white space-y-14">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight truncate">
              {movie.title}
            </h1>
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
