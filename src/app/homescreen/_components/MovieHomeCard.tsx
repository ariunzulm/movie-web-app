"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pause, Play, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

type MovieHomeCardProps = {
  rating: number;
  movieName: string;
  description: string;

  posterImage: string;
};

const MovieHomeCard = ({
  movieName,
  posterImage,
  rating,
}: MovieHomeCardProps) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${posterImage}`;

  return (
    <Card className="group relative w-full max-w-sm mx-auto overflow-hidden border-none transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary/50 sm:max-w-none">
      <div className="w-full aspect-2/3 overflow-hidden rounded-2xl">
        <img
          src={posterUrl}
          alt={`${movieName} poster`}
          className="z-20 w-full h-full object-cover shadow-2xl brightness-100 dark:brightness-75 transition-all duration-300 group-hover:scale-105 group-hover:brightness-50"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="group-hover:block absolute bottom-3 left-0 right-0 p-4 sm:p-6 translate-y-0 transition-all duration-300">
        <div className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1">
          <h3 className="text-sm font-bold text-white line-clamp-2">
            {movieName}
          </h3>
        </div>

        <div className="hidden group-hover:block w-full space-y-2">
          <h3 className="text-lg md:text-xl font-bold leading-tight text-white line-clamp-2 truncate">
            {movieName}
          </h3>
          <div className="flex justify-between items-center w-full">
            <Badge
              variant="secondary"
              className="px-2 py-1 flex items-center gap-1"
            >
              <Star fill="#E53935" className="w-3 h-3 text-red-500" />
              <p className="text-xs font-semibold text-gray-900">
                {Math.floor(rating * 10) / 10} /10
              </p>
            </Badge>
          </div>
          <Button
            className="w-full cursor-pointer text-sm bg-primary text-white border border-zinc-200 gap-1.5 hover:bg-zinc-200 hover:text-black transition-colors group/btn"
            onClick={() => {
              document.getElementById("playTrailer")?.scrollLeft;
            }}
          >
            <Play className="w-3 h-3 group-hover/btn:fill-current transition-all" />
            Watch Trailer
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default MovieHomeCard;
