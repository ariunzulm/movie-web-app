import { cn } from "@/lib/utils";
import { Loader2, Search, X } from "lucide-react";
import { ChangeEventHandler } from "react";

type SearchInputProps = {
  isSearchOpen: boolean;
  isLoading: boolean;
  searchValue: string;
  handleSearchToggle: () => void;
  onChangeSearchValue: ChangeEventHandler<HTMLInputElement>;
  handleClearSearch: () => void;
};
export default function SearchInput({
  isSearchOpen,
  handleSearchToggle,
  isLoading,
  searchValue,
  onChangeSearchValue,
  handleClearSearch,
}: SearchInputProps) {
  return (
    <div className="relative">
      <div
        className={cn(
          "border border-zinc-200 rounded-xl bg-zinc-700/50 transition-all",
          isSearchOpen ? "w-64 md:w-96 pr-1" : "w-10 justify-center",
        )}
      ></div>

      <div className="flex relative">
        <button
          className="h-10 w-10 cursor-pointer flex items-center rounded-xl justify-center text-white hover:text-red-800 hover:backdrop-blur-lg"
          onClick={handleSearchToggle}
          aria-label="Toggle search"
        >
          {isLoading && <Loader2 className="animate-spin" />}
          {!isLoading && <Search />}
        </button>

        <input
          type="text"
          value={searchValue}
          onChange={onChangeSearchValue}
          placeholder="Search movies..."
          className={cn(
            "bg-transparent text-white text-sm outline-none py-2 transition-all duration-200 placeholder:text-zinc-400 hover:transition-colors",
            isSearchOpen ? "w-full" : "w-0 opacity-0",
            isSearchOpen
              ? "w-full opacity-100"
              : "w-0 opacity-0 pointer-events-none",
          )}
        />
        {isSearchOpen && (
          <button
            onClick={handleClearSearch}
            className="shrink-0 p-1.5 rounded-lg text-white hover:text-red-800"
          >
            <X />
          </button>
        )}
      </div>
    </div>
  );
}
