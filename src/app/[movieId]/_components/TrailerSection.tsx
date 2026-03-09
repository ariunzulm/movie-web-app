"use client";
import { useState } from "react";
import Buttons from "./Bottons";
import LinkButtons from "./LinkButtons";
type TrailerSectionProps = {
  trailerKey: string;
};

export const TrailerSection = ({ trailerKey }: TrailerSectionProps) => {
  const [mute, setMute] = useState(1);
  return (
    <div className="relative w-full h-[80vh]">
      <div className="absolute inset-0">
        <iframe
          key={mute}
          className="h-full w-full aspect-video object-cover rounded-xl shadow-lg "
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${mute == 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <Buttons />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-transparent to-transparent" />
      </div>

      <LinkButtons setMute={setMute} mute={mute} />
    </div>
  );
};
