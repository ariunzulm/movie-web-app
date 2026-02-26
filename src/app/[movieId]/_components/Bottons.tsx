import { Button } from "@/components/ui/button";
import { Download, Info, Play, Plus } from "lucide-react";

const Buttons = () => {
  return (
    <div className="flex items-center gap-4">
      <Button className="w-fit gap-1.5 py-1 text-sm font-semibold rounded-lg text-black bg-gray-200 border border-white/20 hover:bg-zinc-200 hover:scale-105 transition-all duration-200 group/btn shadow-2xl hover:text-red-800">
        <Play className="w-3 h-3 group-hover/btn:fill-current" />
        Play Trailer
      </Button>

      <Button
        size="icon"
        variant="ghost"
        className="h-12 w-12 rounded-full  bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-200 group/btn"
      >
        <Plus className="w-4 h-4" />
      </Button>

      <Button
        size="icon"
        variant="ghost"
        className="h-12 w-12 rounded-full  bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-200 group/btn"
      >
        <Download className="w-4 h-4" />
      </Button>
    
      <Button className="w-fit gap-1.5 py-1 text-sm font-semibold shadow-lg rounded-lg bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-200 group/btn">
        <Info className="w-3 h-3" />
        Similars
      </Button>
    </div>
  );
};
export default Buttons;
