"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  console.log(theme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            "bg-transparent outline-none h-10 w-10 border-none text-zinc-200 hover:text-red-800",
          )}
        >
          <Sun className="h-1O w-10 scale-100 rotate-0 bg-transparent transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-10 w-10 scale-0 rotate-90 bg-transparent transition-all dark:scale-100 dark:rotate-0" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className={cn(
          "absolute top-full right-0 mt-5 rounded-2xl overflow-hidden ",
          "shadow-[0_8px_32px_rgba(0,0,0,0.6)]",
          "bg-[#1a1a1a] dark:bg-[#1a1a1a] border border-white/8 dark:border-white/8",
          "light:bg-white light:border-zinc-200 light:shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
        )}
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={cn(
            "flex hover:text-zinc-900 items-center justify-between gap-4 px-4 py-3 transition-colors",
            "hover:bg-white/5 dark:hover:bg-white/5",
            "light:hover:bg-zinc-50",
          )}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={cn(
            "flex hover:text-zinc-900 items-center justify-between gap-4 px-4 py-3 transition-colors",
            "hover:bg-white/5 dark:hover:bg-white/5",
            "light:hover:bg-zinc-50",
          )}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={cn(
            "flex hover:text-zinc-900 items-center justify-between gap-4 px-4 py-3 transition-colors",
            "hover:bg-white/5 dark:hover:bg-white/5",
            "light:hover:bg-zinc-50",
          )}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
