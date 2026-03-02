import { Button } from "@/components/ui/button";
import { Calendar, Info, Play, Star } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

type HeroCarouselCardProps = {
  movieName: string;
  description: string;
  rating: number;
  posterImage: string;
  date: string;
};

const HeroCarouselCard = ({
  movieName,
  posterImage,
  description,
  rating,
  date,
}: HeroCarouselCardProps) => {
  const backdropUrl = `https://image.tmdb.org/t/p/original${posterImage}`;

  const shortDescription = () => {
    const sentences = description.match(/[^.!?]+[.!?]+/g);
    if (!sentences || sentences.length === 0) return description;
    return sentences?.slice(0, 3).join("").trim();
  };

  return (
    <Card className="w-full bg-transparent border-none pointer-events-auto">
      <div className="relative h-130 w-full overflow-hidden md:h-140">
        <img
          src={backdropUrl}
          alt={`${movieName} backdrop`}
          className="w-full h-full object-cover object-center brightness-100 dark:brightness-50"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute inset-0 px-14 p-14 gap-3 flex flex-col justify-end items-start text-white md:p-18 lg:p-20">
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {movieName}
          </CardTitle>

          <div className="flex gap-3">
            <div className="flex items-center gap-1 py-1 px-3 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full">
              <Star fill="#FDE047" className="text-amber-300 w-4 h-4" />
              <p className="text-sm font-semibold text-white">
                {Math.floor(rating * 10) / 10}
              </p>
              <p className="text-sm text-zinc-300">/10</p>
            </div>

            <div className="flex items-center gap-1 py-1 px-3 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full">
              <Calendar className="text-zinc-300 w-4 h-4" />
              <p className="text-sm font-semibold text-white">
                {date.slice(0, 4)}
              </p>
            </div>
          </div>

          <p className="text-md font-medium text-zinc-200 tracking-wide uppercase">
            Now Playing
          </p>

          <CardDescription className="text-sm md:text-base max-w-md text-zinc-300">
            {shortDescription()}
          </CardDescription>

          <div className="flex gap-3">
            <Button className="w-fit gap-1.5 py-1 text-sm font-semibold rounded-lg text-black bg-gray-200 border border-white/20 hover:bg-zinc-200 hover:scale-105 transition-all duration-200 group/btn shadow-2xl hover:text-red-800">
              <Play className="w-3 h-3 group-hover/btn:fill-current" />
              Play Trailer
            </Button>

            <Button className="w-fit  gap-1.5 py-1 text-sm font-semibold shadow-lg rounded-lg bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-200 group/btn">
              <Info className="w-3 h-3" />
              See More
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeroCarouselCard;
