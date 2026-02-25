import { ModeToggle } from "@/app/homescreen/_components/ModeToggle";
import { cn } from "@/lib/utils";

type ThemeModeProps = {
  isSearchOpen: boolean;
};

export default function ThemeMode({ isSearchOpen }: ThemeModeProps) {
  return (
    <div>
      <div
        className={cn(
          "flex items-center w-fit border border-zinc-200 rounded-xl bg-zinc-700/50 transition-all",
          isSearchOpen || !isSearchOpen,
          "w-10 justify-center",
        )}
      ></div>

      <ModeToggle />
    </div>
  );
}
