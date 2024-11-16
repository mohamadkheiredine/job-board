"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Prop {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: Prop) {
  const path = usePathname();
  return (
    <Link
  href={href}
  className={
    path.startsWith(href)
      ? "text-[#ddd6cb] font-bold px-4 py-2 rounded-lg bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent shadow-[0_0_18px_rgba(0,_0,_0,_0.8)]"
      : "text-[#ddd6cb] font-bold px-4 py-2 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl"
  }
>
  {children}
</Link>

  );
}
