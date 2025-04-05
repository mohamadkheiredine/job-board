import boardImg from "@/public/board.png";
import Image from "next/image";
import { Button } from "./components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col sm:flex-row lg:flex-col min-h-screen items-center justify-center">
        <div className="flex items-center justify-center w-full md:w-6/12 p-4">
          <Image
            src={boardImg}
            alt="this is a board image"
            className="w-full"
          />
        </div>

        <div className="flex flex-col">
          <h4 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl p-1">
            4536+ Jobs listed
          </h4>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-2">
            Find Your Dream Job
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl p-2">
            We provide online instant cash loans with quick approval that suit
            your term length.
          </p>
          <Link href="/candidateDashboard">
            <Button className="sm:w-24 md:w-40 lg:w-52 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus-ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Apply For A Job
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
