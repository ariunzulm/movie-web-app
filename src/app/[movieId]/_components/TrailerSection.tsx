"use client";

import { useState } from "react";
import Buttons from "./Bottons";
import LinkButtons from "./LinkButtons";

type TrailerSectionProps = {
  trailerKey: string;
  backdropUrl: string;
};

export const TrailerSection = ({
  trailerKey,
  backdropUrl,
}: TrailerSectionProps) => {
  const [mute, setMute] = useState(1);
  const [play, setPlay] = useState(false);
  return (
    <div className="relative w-full h-[80vh]">
      <div className="absolute inset-0 pointer-events-none">
        {!play ? (
          <img
            src={backdropUrl}
            className="h-full w-full object-cover rounded-xl"
            alt="trailer thumbnail"
          />
        ) : (
          <iframe
            id="playTrailer"
            key={mute}
            className="h-full w-full aspect-video object-cover rounded-xl shadow-lg z-40"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${mute}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-transparent to-transparent pointer-events-none" />
        <Buttons setPlay={setPlay} play={play} />
      </div>

      <LinkButtons setMute={setMute} mute={mute} />
    </div>
  );
};
