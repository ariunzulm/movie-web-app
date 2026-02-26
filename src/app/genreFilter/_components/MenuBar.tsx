"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";

const menuCategories = [
  "Comedy",
  "Action",
  "Horror",
  "Romance",
  "SciFi",
  "Animation",
  "Drama",
];

const MenuBar = () => {
  const [currentMenu, setCurrentMenu] = useState(0);

  return (
    <div className="max-w-lg">
      <Tabs defaultValue="Comedy" className="w-full flex-nowrap">
        <TabsList
          className={cn("bg-transparent h-auto gap-6 justify-start px-4 py-2")}
        >
          {menuCategories.map((label, index) => {
            const isActive = currentMenu === index;
            return (
              <div
                key={index}
                className="w-full text-sm flex flex-col justify-end"
              >
                <div
                  className={cn(
                    "h-0.75 w-full rounded-full transition-all duration-300",
                    isActive ? "bg-red-500" : "bg-zinc-200",
                  )}
                ></div>
                <button
                  onClick={() => setCurrentMenu(index)}
                  className={cn(
                    "cursor-pointer flex items-center rounded-xl justify-center text-black",
                    isActive
                      ? "text-red-800 font-semibold"
                      : "text-zinc-600 hover:text-zinc-200",
                  )}
                >
                  {label}
                </button>
              </div>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );
};
export default MenuBar;
