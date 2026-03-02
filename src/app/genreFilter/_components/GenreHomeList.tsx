import { Title } from "@/app/homescreen/_components/MovieListingTitles";
import Link from "next/link";
import MenuBar from "./MenuBar";
import { ArrowRight, ChevronRight } from "lucide-react";

const GenreHomeList = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center my-8 px-5">
        <Link href="/genreFilter?genre=28">
          <Title title="Genre" />
          <div className="flex items-center gap-1.5 text-md font-medium hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-500 light:text-zinc-800 light:hover:text-red-500 transition-colors duration-200 group/btn">
            Browse more genre
            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
          </div>
        </Link>
        <Link href="/genreFilter">
          <MenuBar />
        </Link>
      </div>
    </div>
  );
};
export default GenreHomeList;
