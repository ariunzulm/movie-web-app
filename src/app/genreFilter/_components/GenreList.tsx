import Link from "next/link";
import GenreCard from "./GenreCard";
import { getMoviesByGenreName } from "@/lib/api/get-movies-by-genreName";

type GenreListProps = {
  selectedGenre: string | string[] | undefined;
};

const GenreList = async ({ selectedGenre }: GenreListProps) => {
  const { genres } = await getMoviesByGenreName();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {genres.map((genre) => {
        const oldGenres = String(selectedGenre)
          .split(",")
          .filter((selected) => selected);

        const isSelected = oldGenres.includes(String(genre.id));

        const remainingGenres = oldGenres.filter(
          (oldGenre) => oldGenre !== String(genre.id),
        );

        const updatedGenres = [...oldGenres, genre.id];

        const url = `?genre=${isSelected ? remainingGenres : updatedGenres}`;

        return (
          <Link key={genre.id} href={url}>
            <GenreCard isSelected={isSelected} genre={genre} />
          </Link>
        );
      })}
    </div>
  );
};
export default GenreList;
