'use client';

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react"; // Assuming you have this component
import backgroundImg from "@/public/background.png";
import NavLink from "./nav-link";
import Logo from "../components/ui/Logo";
import { useEffect, useState } from "react";

export default function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrolling = () => {
      console.log('herwe');
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener('scroll', handleScrolling);

    return () => window.removeEventListener('scroll', handleScrolling)
  }, []);

  return (
    <>
      {/* Background image */}
      {/* <div className="fixed w-full h-full top-0 left-0 -z-10">
        <Image
          src={backgroundImg}
          alt="background image for entire page"
          fill
          priority
          className="object-cover"
        />
      </div> */}

      {/* Header section */}
      <header className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50  ${isScrolled ? ' bg-whites shadow' : ''}`}>
        <Logo />
        <nav>
          <ul className="flex gap-1">
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
