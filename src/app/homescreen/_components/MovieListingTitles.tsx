import { ArrowRight, Tally1 } from "lucide-react";
import Link from "next/link";

type MovieListingTitlesProps = {
  title: string;
  variant?: "default" | "accent";
};

export default function MovieListingTitles({
  title,
  variant = "default",
}: MovieListingTitlesProps) {
  return (
    <div className="flex justify-between my-8 px-5">
      <div className="flex gap-2">
        <div className="w-2 h-10 bg-red-500 rounded-full" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-muted-foreground relative">
          <span className="relative z-10">{title}</span>
        </h2>
      </div>

      <Link
        href="/seeMore"
        className="flex items-center w-fit text-md font-semibold rounded-lg  text-black bg-transparent border border-transparent gap-1.5 py-1 px-3 hover:bg-gray-900 hover:text-white hover:scale-105 transition-all duration-200 group/btn"
      >
        <span>See More</span>
        <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}
