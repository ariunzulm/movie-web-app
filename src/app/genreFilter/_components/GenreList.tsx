import Link from "next/link";
import GenreCard from "./GenreCard";
import { getMoviesByGenreName } from "@/lib/api/get-movies-by-genreName";

const GenreList = async () => {
  const { genres } = await getMoviesByGenreName();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {genres.map((genre) => (
        <Link key={genre.id} href={`?genre=${genre.id}`}>
          <GenreCard genre={genre} />
        </Link>
      ))}
    </div>
  );
};
export default GenreList;
