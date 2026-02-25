import { Badge } from "@/components/ui/badge";
import { getMovieById } from "@/lib/api/get-moviesById";
import { Calendar, Clock, Star } from "lucide-react";
import { DetailsCardProps } from "../_utils/awaits";

export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-2 h-6 sm:h-6 md:h-8 lg:h-10 bg-red-500 rounded-full shrink-0" />
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
        {title}
      </h2>
    </div>
  );
};

const MovieInfo = async ({ params }: DetailsCardProps) => {
  const { movieId } = await params;
  const movie = await getMovieById(movieId);

  const formatRunTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="p-6 flex flex-col max-w-xl mx-auto gap-4">
      <div className="space-y-4 p-4 w-full rounded-2xl">
        <SectionHeader title="Genres" />

        <div className="flex flex-wrap gap-2">
          {movie.genres?.map((genre) => (
            <Badge
              key={genre.id}
              variant="secondary"
              className="border border-zinc-900 bg-white/5 px-3 py-1.5 text-sm rounded-full
                text-zinc-300 cursor-pointer transition-colors
                hover:bg-white/10 hover:text-white
                dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white
                light:border-zinc-900 light:bg-white light:text-zinc-900 light:font-medium light:hover:text-zinc-900"
            >
              {genre.name}
            </Badge>
          ))}
        </div>
        <div className="h-px bg-border w-full" />
      </div>

      <div className="space-y-4 p-4 w-full rounded-2xl">
        <SectionHeader title="Overview" />
        <p className="text-muted-foreground leading-relaxed text-base">
          {movie.overview}
        </p>
      </div>
      <div className="h-px bg-border w-full" />
      <div className="space-y-4 p-4 w-full">
        <SectionHeader title="Details" />

        <div className="flex items-center gap-3 text-muted-foreground ">
          <Calendar className="w-4 h-4" />
          <span className="font-semibold text-foreground">Release:</span>
          {formatDate(movie.release_date)}
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="font-semibold text-foreground">Runtime:</span>
          {formatRunTime(movie.runtime)}
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <Star className="w-4 h-4 shrink-0 text-yellow-400 fill-yellow-400" />
          <span className="font-semibold text-foreground">Rating:</span>
          <span>
            {Math.floor(movie.vote_average * 10) / 10} ({movie.vote_count}
            votes)
          </span>
        </div>
        <div className="h-px bg-border w-full" />
      </div>
    </div>
  );
};
export default MovieInfo;
