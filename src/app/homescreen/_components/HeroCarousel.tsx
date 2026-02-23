import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import HeroCarouselCard from "./HeroCarouselCard";
import { Movie } from "@/lib/types";
import { ArrowLeft, ArrowLeftCircle, ArrowRight } from "lucide-react";

type HeroCarouselProps = {
  movies: Movie[];
};

const HeroCarousel = async ({ movies }: HeroCarouselProps) => {
  return (
    <div className="w-full h-fit relative ">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {movies.map((movie) => {
            return (
              <CarouselItem key={movie.id} className="border-none">
                <HeroCarouselCard
                  movieName={movie.title}
                  description={movie.overview}
                  posterImage={movie.backdrop_path}
                  rating={movie.vote_average}
                  date={movie.release_date}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="absolute top-1/2 left-2 flex items-center justify-center z-50 h-8 w-8 text-white rounded-full hover:scale-125 border-2 border-white/50 bg-black/30 hover:bg-white/10 backdrop-blur-sm">
          <CarouselPrevious className="bg-transparent absolute top-1/2 left-0.2" />
        </div>
        <div className="absolute top-1/2 right-2 flex items-center justify-center z-50 h-8 w-8 text-white rounded-full hover:scale-125 border-2 border-white/50 bg-black/30 hover:bg-white/10 backdrop-blur-sm">
          <CarouselNext className="bg-transparent absolute top-1/2 right-0.2" />
        </div>
      </Carousel>
    </div>
  );
};
export default HeroCarousel;
