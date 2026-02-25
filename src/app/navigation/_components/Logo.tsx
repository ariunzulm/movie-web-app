import { Clapperboard } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-white font-bold text-xl hover:opacity-80 transition-opacity"
    >
      <div className="border border-gray-200 rounded-xl p-2 flex items-center justify-center">
        <Clapperboard className="w-5 h-5 text-gray-200" />
      </div>
      <span className="text-2xl tracking-tight">MovieZ</span>
    </Link>
  );
}
