import { getMoviesByTrailer } from "@/lib/api/get-movies-by-trailer";

export const MovieTrailer = async ({ movieId }: { movieId: string }) => {
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
    <div>
      <iframe
        className="h-full w-full aspect-video object-cover rounded-xl shadow-lg"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};


