import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getUpcomingMovies } from "@/lib/api";
import MovieHomeCard from "../homescreen/_components/MovieHomeCard";

type SeeMoreProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const UpcomingSeeMore = async ({ searchParams }: SeeMoreProps) => {
  const { page } = await searchParams;

  const data = await getUpcomingMovies(page ?? 1);

  const currentPage = Number(page) || 1;

  return (
    <div className="mx-auto my-5 max-w-7xl min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="flex gap-2">
        <div className="w-2 h-8 bg-red-500 rounded-full" />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-muted-foreground relative">
          <span className="relative z-10">Upcoming</span>
        </h2>
      </div>

      <div className="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {data.results.map((movie) => {
          return (
            <MovieHomeCard
              key={movie.id}
              movieName={movie.title}
              description={movie.overview}
              posterImage={movie.poster_path}
              rating={movie.vote_average}
            />
          );
        })}
      </div>

      <Pagination className="my-5">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`/seeMore?page=${Math.max(1, currentPage - 1)}`}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>
          {[1, 2, 3].map((pageNum) => (
            <PaginationItem key={pageNum}>
              <PaginationLink
                href={`/seeMore?page=${pageNum}`}
                isActive={currentPage === pageNum}
              >
                {pageNum}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href={`/seeMore?page=${Math.max(1, currentPage + 1)}`}
              className={
                currentPage >= data.total_pages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
export default UpcomingSeeMore;
