import { Button } from "@/components/ui/button";
import { Calendar, Info, Play, Star } from "lucide-react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    return sentences?.slice(0, 1).join("").trim();
  };

  return (
    <Card className="w-full bg-transparent border-none pointer-events-auto">
      <div className="relative h-100 w-full overflow-hidden md:h-125">
        <img
          src={backdropUrl}
          alt={`${movieName} backdrop`}
          className="w-full h-full object-cover object-center brightness-100 dark:brightness-50"
        />
        <div className="absolute inset-0 px-14 p-14 gap-3 flex flex-col justify-end items-start text-white md:p-18 lg:p-20">
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {movieName}
          </CardTitle>
          <div className="flex gap-3">
            <div className="flex items-center gap-1 py-1 px-3 border border-zinc-200 bg-transparent rounded-full">
              <Star fill="#FDE047" className="text-amber-200 w-4 h-4" />
              <p className="text-sm font-semibold text-gray-100">
                {Math.floor(rating * 10) / 10}
              </p>
              <p className="text-sm text-gray-200">/10</p>
            </div>
            <div className="flex items-center gap-2 py-1 px-3 border border-zinc-200 bg-transparent rounded-full">
              <Calendar className="text-gray-100 w-4 h-4" />
              <p className="text-sm font-semibold text-gray-100">
                {date.slice(0, 4)}
              </p>
            </div>
          </div>
          <p className="text-md leading-5 text-gray-50">Now Playing</p>
          <CardDescription className="text-sm md:text-md max-w-md">
            {shortDescription()}
          </CardDescription>
          <div className="flex gap-3">
            <Button className="w-fit text-sm font-semibold shadow-lg rounded-lg  text-black border border-zinc-200 bg-gray-200 gap-1.5 py-1 hover:bg-gray-900 hover:scale-105 transition-all duration-200 hover:text-white group/btn">
              <Play className="w-3 h-3 group-hover/btn:fill-current " />
              <span>Play Trailer</span>
            </Button>
            <Button className="w-fit text-sm font-semibold shadow-lg rounded-lg  text-white bg-transparent  backdrop-blur-md border border-zinc-200 gap-1.5 py-1 hover:bg-gray-900 hover:scale-105 transition-all duration-200 hover:text-white group/btn">
              <Info className="w-3 h-3 group-hover/btn:fill-current" />
              <span>See More</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeroCarouselCard;
