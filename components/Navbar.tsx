import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="px-20 h-[85px] w-full sticky top-0 z-10 hidden lg:flex justify-between items-center backdrop-blur-md bg-transparent">
      <Link href="/" className="bg-transparent">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={55}
          height={50}
          className="bg-transparent "
        />
      </Link>
      <div className="bg-transparent">
        <Link href="/" className="mr-20 bg-transparent">
          Home
        </Link>
        <Link href="/about_us" className="mr-20 bg-transparent">
          About
        </Link>
        <Link href="/program" className="mr-20 bg-transparent">
          Our Program
        </Link>
        <Link href="/support" className="mr-20 bg-transparent">
          Support
        </Link>
        <Link href="/contact" className="bg-transparent">
          Contact Us
        </Link>
      </div>
      {/* <div className="bg-transparent">
        <button className="mr-8">
          Login
        </button>
        <button className="px-6 py-2 rounded-full bg-blue-1 text-white">
          Signup
        </button>
      </div> */}
    </div>
  );
}
