import { Title } from "@/app/homescreen/_components/MovieListingTitles";
import MenuBar from "./_components/MenuBar";
import GenreList from "./_components/GenreList";
import GenreSearch from "./_components/GenreSearch";

const SearchPage = ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center my-8 px-5">
        <Title title="Genre" />
        <MenuBar />
      </div>
      <div className="space-y-5">
        <GenreList />

        <GenreSearch searchParams={searchParams} />
      </div>
    </div>
  );
};
export default SearchPage;
