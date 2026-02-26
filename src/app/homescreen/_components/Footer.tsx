import { Clapperboard, Mail, PhoneCall, UserPlus } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-700 bg-linear-to-b from-black/80 to-transparent backdrop-blur-lg">
      <div className="max-w-7xl mx-auto py-10 px-6 sm:px-10 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="border border-gray-200 rounded-xl p-2 flex items-center justify-center">
                <Clapperboard className="w-5 h-5 text-gray-200" />
              </div>
              <span className="text-2xl">MovieZ</span>
            </div>
            <p className="font-sm text-gray-400">
              © 2024 Movie Z. All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <Mail className="w-4 h-4" />
              <div className="text-sm">
                <p className="text-gray-200">Email:</p>
                <Link
                  className="hover:text-primary cursor-pointer text-gray-400"
                  href="https://pinecone.mn/"
                >
                  support@moviez.com
                </Link>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <PhoneCall className="w-4 h-4" />
              <div className="text-sm">
                <p className="text-gray-200">Phone Number:</p>
                <p className=" text-gray-400">(976) 99897788</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <UserPlus className="w-4 h-4" />
              <p className="text-gray-200">Follow us:</p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <Link
                href="https://www.facebook.com/pinecone.academy.mongolia"
                className="text-gray-400"
              >
                Facebook
              </Link>
              <Link
                href="https://www.youtube.com/@PineconeAcademy"
                className="text-gray-400"
              >
                Youtube
              </Link>
              <Link
                href="https://www.instagram.com/pineconemongolia/"
                className="text-gray-400"
              >
                Instagram
              </Link>
              <Link
                href="https://www.tiktok.com/@lifeatpinecone"
                className="text-gray-400"
              >
                Tiktok
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
