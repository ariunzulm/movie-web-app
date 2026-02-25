import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type MovieListingTitlesProps = {
  title: string;
  variant?: "default" | "accent";
  href?: string;
};

export default function MovieListingTitles({
  title,
  href = "/seeMore",
  variant = "default",
}: MovieListingTitlesProps) {
  return (
    <div className="flex justify-between my-8 px-5">
      <div className="flex gap-2 items-center">
        <div
          className={cn(
            "w-1.5 h-10 rounded-full",
            variant === "accent" ? "bg-primary" : "bg-red-500",
          )}
        />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
          {title}
        </h2>
      </div>
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "w-1.5 h-5 rounded-full",
            variant === "accent" ? "bg-primary" : "bg-red-500",
          )}
        />
        <Link
          href={href}
          className="flex items-center gap-1.5 text-sm font-medium 
          light:text-zinc-800 hover:text-red-800 transition-all duration-200 group/btn dark:text-zinc-200"
        >
          See More
          <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
}
