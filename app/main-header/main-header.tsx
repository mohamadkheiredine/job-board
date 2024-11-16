import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react"; // Assuming you have this component
import backgroundImg from "@/public/background.png";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      {/* Background image */}
      <div className="fixed w-full h-full top-0 left-0 -z-10">
        <Image
          src={backgroundImg}
          alt="background image for entire page"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Header section */}
      <header className="top-0 left-0 w-full p-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-4">
          <Search size={24} className="text-black" />
          <div>
            <h4 className="text-base sm:text-sm md:text-lg lg:text-xl text-black">
              Job Board
            </h4>
            <p className="text-sm sm:text-xs md:text-base lg:text-lg text-black">
              Find your dream job
            </p>
          </div>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink href="/jobs">Browse Jobs</NavLink>
            </li>
            <li>
              <NavLink href="/candidateDashboard">Apply for Jobs</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
