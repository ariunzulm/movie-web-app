import { getMovieById } from "@/lib/api/get-moviesById";
import { DetailsCardProps } from "./_utils/awaits";

import Buttons from "./_components/Bottons";
import MovieInfo from "./_components/MovieInfo";
import Similars from "./_components/Similars";
import PosterDetails from "./_components/PosterDetails";
import LinkButtons from "./_components/LinkButtons";
import { getMoviesByTrailer } from "@/lib/api/get-movies-by-trailer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
        <div className="relative w-full h-[80vh]">
          <div className="absolute inset-0">
            <img
              src={backdropUrl}
              alt={movie.title}
              className="aspect-video h-full w-full object-cover"
            />

            <Dialog>
              <DialogTitle className="sr-only">{movie.title}</DialogTitle>
              <DialogTrigger asChild>
                <Buttons />
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <iframe
                  className="h-full w-full aspect-video object-cover rounded-xl shadow-lg"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </DialogContent>
            </Dialog>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-transparent to-transparent" />
          </div>

          <LinkButtons />
        </div>

        <div className="absolute p-12 top-3/5 z-40 group">
          <div className="max-w-7xl mx-auto text-white space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
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

const MovieTrailer = async ({ movieId }: { movieId: string }) => {
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
    <Dialog>
      <DialogContent className="sm:max-w-sm">
        <iframe
          className="h-full w-full aspect-video object-cover rounded-xl shadow-lg"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  );
};
