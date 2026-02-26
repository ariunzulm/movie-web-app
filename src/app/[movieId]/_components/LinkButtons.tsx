import { Button } from "@/components/ui/button";
import { ArrowLeft, Volume2 } from "lucide-react";
import Link from "next/link";

const LinkButtons = () => {
  return (
    <div>
      <Link href="/">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-15 left-6 z-50 h-12 w-12 text-white rounded-full  bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-200 group/btn"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </Link>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-15 right-6 z-50 h-12 w-12 text-white rounded-full  bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-200 group/btn"
      >
        <Volume2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default LinkButtons;
