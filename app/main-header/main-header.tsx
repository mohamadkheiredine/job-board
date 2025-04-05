"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react"; // Assuming you have this component
import backgroundImg from "@/public/background.png";
import NavLink from "./nav-link";
import Logo from "../components/ui/Logo";
import { useEffect, useState } from "react";

export default function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrolling = () => {
      console.log("herwe");
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScrolling);

    return () => window.removeEventListener("scroll", handleScrolling);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

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
      <header
        className={`fixed top-0 left-0 w-full p-2 flex justify-between items-center z-50  ${
          isScrolled ? " backdrop-blur shadow" : ""
        }`}
      >
        <Logo />
        {/* <nav>
          <ul className="flex gap-1">
            <li>
              <NavLink href="/jobs">Browse Jobs</NavLink>
            </li>
            <li>
              <NavLink href="/candidate_dashboard">Apply for Jobs</NavLink>
            </li>
          </ul>
        </nav> */}

        <nav>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* <a
              href="https://flowbite.com/"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8"
                alt="Flowbite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a> */}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer sm:hidden"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <svg
                className="w-5 h-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {/* Dropdown menu for mobile */}
            {menuOpen && (
              <div
                id="mobile-menu"
                className="absolute top-19 right-3 z-50 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg p-4 w-[200px]"
              >
                <ul className="space-y-2">
                  <li>
                    <NavLink href="/jobs" className="text-black flex items-center whitespace-nowrap text-sm text-center">Browse Jobs</NavLink>
                  </li>
                  <li>
                    <NavLink href="/candidate_dashboard" className="text-black text-sm flex items-center whitespace-nowrap text-center">
                      Apply for a Job
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
            <div
              className="hidden sm:w-auto sm:flex gap-1"
              id="navbar-default"
            >
              <ul className="font-medium flex p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink href="/jobs" className="text-[#ddd6cb]">Browse Jobs</NavLink>
                </li>
                <li>
                  <NavLink href="/candidate_dashboard" className="text-[#ddd6cb]">Apply for Jobs</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
