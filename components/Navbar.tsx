import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="px-20 h-[100px] hidden lg:flex justify-between items-center">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={50}
          height={50}
          className=""
        />
      </Link>
      <div className="uppercase">
        <Link href="/" className="mr-12 ">
          Home
        </Link>
        <Link href="/about_us" className="mr-12 ">
          About
        </Link>
        <Link href="/program" className="mr-12 ">
          Our Program
        </Link>
        <Link href="/support" className="mr-12 ">
          Support
        </Link>
        <Link href="/contact" className=" ">
          Contact Us
        </Link>
      </div>
      <div>
        <button className="mr-8">
          Login
        </button>
        <button className="px-6 py-2 rounded-full bg-blue-1 text-white">
          Signup
        </button>
      </div>
    </div>
  );
}
