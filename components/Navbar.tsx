import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return(
    <div className="px-24 h-[100px] hidden lg:flex justify-between items-center">
      <Link href="/">
        <Image 
          src='/images/logo_word.png'
          alt="logo"
          width={150}
          height={70}
          className=""
        />
      </Link>
      <div className="uppercase">
        <Link href='/' className="mr-6 ">Home</Link>
        <Link href='/about_us' className="mr-6 ">About Us</Link>
        <Link href='/about_you' className="mr-6 ">About You</Link>
        <Link href='/program' className="mr-6 ">Our Program</Link>
        <Link href='/support' className="mr-6 ">Support</Link>
        <Link href='/contact' className=" ">Contact Us</Link>
      </div>
    </div>
  )
}