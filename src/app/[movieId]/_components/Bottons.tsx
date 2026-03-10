"use client";
import { Button } from "@/components/ui/button";
import { Download, Info, Layers, Pause, Play, Plus } from "lucide-react";

type ButtonsProps = {
  play: boolean;
  setPlay: (value: boolean) => void;
};

const Buttons = ({ setPlay, play }: ButtonsProps) => {
  return (
    <div
      className="flex items-center gap-4 absolute p-12 top-5/7 z-40 pointer-events-auto"
      onClick={() => console.log("fdvfd")}
    >
      <Button
        onClick={() => {
          (console.log("fdvfdv"), setPlay(!play));
        }}
        className="w-fit cursor-pointer gap-1.5 py-1 text-sm z-40 font-semibold rounded-lg text-black bg-gray-200 border border-white/20 hover:bg-zinc-200 hover:scale-105 transition-all duration-200 group/btn shadow-2xl hover:text-red-800"
      >
        {play ? (
          <>
            <Pause className="w-3 h-3 group-hover/btn:fill-current" />
            Pause Trailer
          </>
        ) : (
          <>
            <Play className="w-3 h-3 group-hover/btn:fill-current" />
            Play Trailer
          </>
        )}
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="cursor-pointer h-12 w-12 rounded-full  bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-200 group/btn"
      >
        <Plus className="w-4 h-4" />
      </Button>

      <Button
        size="icon"
        variant="ghost"
        className="cursor-pointer w-fit gap-1.5 px-3 py-1 text-sm font-semibold shadow-lg rounded-lg bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-200 group/btn"
      >
        <Download className="w-4 h-4" />
        Download
      </Button>

      <Button
        onClick={() => {
          document
            .getElementById("similars")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="cursor-pointer w-fit gap-1.5 py-1 text-sm font-semibold shadow-lg rounded-lg bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-200 group/btn"
      >
        <Layers className="w-3 h-3" />
        Similars
      </Button>
    </div>
  );
};
export default Buttons;
