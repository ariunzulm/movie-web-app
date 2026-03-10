"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Volume2, VolumeOff } from "lucide-react";
import Link from "next/link";

type LinkButtonsProps = {
  mute: number;

  setMute: (value: number) => void;
};

const LinkButtons = ({ setMute, mute }: LinkButtonsProps) => {
  return (
    <div>
      <Link href="/">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-15 left-6 z-50 h-12 w-12 cursor-pointer text-white rounded-full  bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-200 group/btn"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </Link>
      <Button
        onClick={() => setMute(mute === 0 ? 1 : 0)}
        variant="ghost"
        size="icon"
        className="absolute top-15 right-6 z-50 h-12 w-12 cursor-pointer text-white rounded-full  bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-200 group/btn"
      >
        {mute === 0 ? (
          <Volume2 className="h-4 w-4" />
        ) : (
          <VolumeOff className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};

export default LinkButtons;
