"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Prop {
  className: string,
  href: string;
  onClick?: () => void,
  children: ReactNode;
}

export default function NavLink({ onClick, className, href, children }: Prop) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        `font-bold px-4 py-2 rounded-lg flex items-center justify-center text-center min-w-[140px]`,
        path.startsWith(href)
          ? `text-white bg-blue-600`
          : "text-[#ddd6cb] text-sm sm:text-base md:text-lg lg:text-xl",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
