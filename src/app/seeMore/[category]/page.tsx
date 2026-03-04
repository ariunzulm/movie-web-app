import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import MovieHomeCard from "../../homescreen/_components/MovieHomeCard";
import { getMoviesByCategory } from "@/lib/api/get-movies-by-category";
import Link from "next/link";
import { Title } from "@/app/homescreen/_components/MovieListingTitles";

type SeeMoreCategoryPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  params: Promise<{ category: string }>;
};

const SeeMoreCategoryPage = async ({
  params,
  searchParams,
}: SeeMoreCategoryPageProps) => {
  const { page } = await searchParams;
  const { category } = await params;
  console.log("category: ", category);

  const currentPage = Number(page) || 1;

  const data = await getMoviesByCategory(category, currentPage);

  const seeMoreTitle = category.replace("_", " ");

  return (
    <div className="mx-auto my-5 max-w-7xl min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="capitalize">
        <Title title={seeMoreTitle} />
      </div>
      <div className="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {data.results.map((movie: any) => {
          return (
            <Link key={movie.id} href={`/${movie.id}`} className="block">
              <MovieHomeCard
                movieName={movie.title}
                description={movie.overview}
                posterImage={movie.poster_path}
                rating={movie.vote_average}
              />
            </Link>
          );
        })}
      </div>

      <Pagination className="my-5">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`/seeMore/${category}?page=${Math.max(1, currentPage - 1)}`}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>
          {[1, 2, 3].map((pageNum) => (
            <PaginationItem key={pageNum}>
              <PaginationLink
                href={`/seeMore/${category}?page=${pageNum}`}
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
              href={`/seeMore/${category}?page=${Math.max(1, currentPage + 1)}`}
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
export default SeeMoreCategoryPage;
