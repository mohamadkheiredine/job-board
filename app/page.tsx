import laptop from "@/assets/laptop.png";
import Image from "next/image";
import { Button } from "./components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col md:flex-row min-h-screen items-center justify-center px-4 md:px-12 py-8 gap-6">
      {/* Image Section */}
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image src={laptop} alt="laptop image" className="w-full max-w-md" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col text-center md:text-left">
        <h4 className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-1">
          Jobs listed
        </h4>

        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3">
          Find Your Dream Job
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-5 max-w-xl">
          We provide online instant cash loans with quick approval that suit your term length.
        </p>

        <Link href="/candidate_dashboard" className="self-center md:self-start">
          <Button className="text-xs sm:text-sm md:text-base lg:text-lg px-6 py-2 w-auto sm:w-28 md:w-40 lg:w-52 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus-ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
            Apply For A Job
          </Button>
        </Link>
      </div>
    </div>
  );
}