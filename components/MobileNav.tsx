"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {

  const [isMenuOpen, SetIsMenuOpen] = useState(false);

  const handleShowMenu = () => {
    SetIsMenuOpen(!isMenuOpen)
  }


  return (
    <nav className="flex justify-between items-center lg:hidden px-6 md:px-10 py-4 md:py-6 sticky top-0 left-0 z-10 backdrop-blur-sm">
      <Link href="/" className="z-20">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={50}
          height={50}
        />
      </Link>

      <Image
        src={isMenuOpen === true ? '/images/close.svg' : '/images/menu.svg'}
        alt="hamburger menu"
        width={40}
        height={40}
        className="z-20"
        onClick={handleShowMenu}
      />

      <div className={`absolute z-10 w-screen h-screen bg-white px-6 py-4 duration-300 ${isMenuOpen === true ? 'top-0 left-0' : 'top-full left-full hidden'}`}>

      </div>
    </nav>
  );
}
