import GenreList from "./_components/GenreList";
import GenreSearch from "./_components/GenreSearch";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { genre: selectedGenre } = await searchParams;

  return (
    <div className="mx-auto my-5 max-w-7xl min-h-screen space-y-5 px-4 sm:px-6 lg:px-8">
      <div className="flex gap-2">
        <div className="w-2 h-8 bg-red-500 rounded-full" />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground relative">
          <span className="relative z-10">Browse By Genre</span>
        </h2>
      </div>

      <GenreList selectedGenre={selectedGenre} />

      <GenreSearch searchParams={searchParams} />
    </div>
  );
};
export default SearchPage;
