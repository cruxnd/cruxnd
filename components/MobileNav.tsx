"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MobileNav() {
  const pathname = usePathname();
  const [isMenuOpen, SetIsMenuOpen] = useState(false);

  const handleShowMenu = () => {
    SetIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center lg:hidden px-6 md:px-10 py-4 md:py-6 sticky top-0 left-0 z-10 backdrop-blur-sm">
      <Link href="/" className="z-20">
        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
      </Link>

      <Image
        src={isMenuOpen === true ? "/images/close.svg" : "/images/menu.svg"}
        alt="hamburger menu"
        width={40}
        height={40}
        className="z-20"
        onClick={handleShowMenu}
      />

      <div
        className={`absolute z-10 w-screen h-screen bg-[#09001b] px-6 py-4 duration-300 ${
          isMenuOpen === true ? "top-0 left-0" : "top-full left-full hidden"
        }`}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center">
            <Link 
              href="/" 
              className={`bg-transparent text-xl font-semibold mb-4 ${pathname === "/" ? "underline" : ""}`} 
              onClick={handleShowMenu}>
              Home
            </Link>
            <Link
              href="/about_us"
              className={`bg-transparent text-xl font-semibold mb-4 ${pathname === "/about_us" ? "underline" : ""}`} 
              onClick={handleShowMenu}
            >
              About
            </Link>
            <Link
              href="/program"
              className={`bg-transparent text-xl font-semibold mb-4 ${pathname === "/program" ? "underline" : ""}`} 
              onClick={handleShowMenu}
            >
              Our Program
            </Link>
            <Link
              href="/support"
              className={`bg-transparent text-xl font-semibold mb-4 ${pathname === "/support" ? "underline" : ""}`} 
              onClick={handleShowMenu}
            >
              Support
            </Link>
            <Link
              href="/contact"
              className={`bg-transparent text-xl font-semibold mb-4 ${pathname === "/contact" ? "underline" : ""}`} 
              onClick={handleShowMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
