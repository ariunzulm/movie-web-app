import { Genre as GenreType } from "@/lib/types";

type GenreCardProps = {
  genre: GenreType;
};

const GenreCard = ({ genre }: GenreCardProps) => {
  return (
    <div
      className="px-3 py-1.5 text-sm rounded-full cursor-pointer transition-colors bg-zinc-800 text-zinc-100 hover:bg-zinc-700 hover:text-white
               dark:bg-white/5 dark:border dark:border-white/10 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white light:bg-zinc-100 light:text-zinc-900 light:border light:border-zinc-300 light:hover:bg-zinc-200"
    >
      {genre.name}
    </div>
  );
};

export default GenreCard;
