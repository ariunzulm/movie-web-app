"use client";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { ModeToggle } from "./ModeToggle";
import { Search, X, ChevronDown, Clapperboard } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 border border-b-zinc-200">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12 bg-zinc-800 bg-linear-to-b from-black to-transparent backdrop-blur-lg">
        {isOpen && (
          <ChevronDown className="border p-1.5 border-zinc-200 text-white rounded-xl w-8 h-8 transition-all cursor-pointer" />
        )}
        {!isOpen && (
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-bold text-xl hover:opacity-80 transition-opacity"
          >
            <div className="border border-gray-200 rounded-xl p-2 flex items-center justify-center">
              <Clapperboard className="w-5 h-5 text-gray-200" />
            </div>
            <span className="text-2xl">MovieZ</span>
          </Link>
        )}
        <div className="flex gap-3 items-center">
          <InputGroup
            className={cn(
              "border relative md:min-w-95 border-zinc-200 rounded-xl md:flex mx-auto justify-center",
              isOpen ? "flex-1" : "w-10",
            )}
          >
            <div className="h-8 w-8 cursor-pointer flex items-center justify-center text-white  hover:text-white/80 ">
              <Link href="/searchPage">
                <Search className="w-6 h-6" />
              </Link>
            </div>

            <InputGroupInput
              placeholder="Search..."
              className={cn(
                "transition-all text-white",
                isOpen ? "block w-full" : "hidden md:block",
              )}
            />
          </InputGroup>

          <div className={cn(isOpen && "sm:hidden")}>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
