import Image from "next/image";

export default function Footer() {
  return (
    <div className="px-6 py-6 md:px-12 lg:px-24 lg:py-12">
      <div className="flex flex-col lg:flex-row justify-between border-b pb-6 lg:pb-12">
        <div className="w-[300px] flex flex-col justify-between mb-8 lg:mb-0">
          <Image
            src="/images/logo_word.png"
            alt="logo"
            width={180}
            height={70}
            className="block"
          />

          <p className="mt-12 lg:mt-0">
            Empowering startups through mindset, innovation, and godly
            principles
          </p>
        </div>

        <ul className=" mb-8 lg:mb-0">
          <li className="font-semibold text-lg mb-5">Quick Links</li>
          <li className="mb-5">Home</li>
          <li className="mb-5">About</li>
          <li className="mb-5">Our Programs</li>
          <li className="">Contact Us</li>
        </ul>

        <ul className=" mb-8 lg:mb-0">
          <li className="font-semibold text-lg mb-5">Company</li>
          <li className="mb-5">Blog</li>
          <li className="mb-5">Careers</li>
          <li className="mb-0 lg:mb-5">News</li>
        </ul>

        <ul className="mb-8 lg:mb-0">
          <li className="font-semibold text-lg mb-5">Legal</li>
          <li className="mb-5">Terms of Service</li>
          <li className="mb-5">Privacy Policy</li>
          <li className="mb-0 lg:mb-5">Cookies Policy</li>
        </ul>

        <div className="flex lg:hidden">
          <Image 
            src='/images/facebook.svg'
            alt="facebook"
            width={18}
            height={18}
            className="mr-8"
          />
          <Image 
            src='/images/x.svg'
            alt="x"
            width={20}
            height={20}
            className="mr-8"
          />
          <Image 
            src='/images/instagram.svg'
            alt="instagram"
            width={24}
            height={24}
            className="mr-8"
          />
          <Image 
            src='/images/linkedin.svg'
            alt="linkedin"
            width={24}
            height={24}
            className=""
          />
        </div>
      </div>

      <div className="pt-6 lg:pt-12 flex justify-between">
        <span className="">&copy; 2024, cruxnd. All rights reserved.</span>

        <div className="hidden lg:flex">
          <Image 
            src='/images/facebook.svg'
            alt="facebook"
            width={18}
            height={18}
            className="mr-8"
          />
          <Image 
            src='/images/x.svg'
            alt="x"
            width={20}
            height={20}
            className="mr-8"
          />
          <Image 
            src='/images/instagram.svg'
            alt="instagram"
            width={24}
            height={24}
            className="mr-8"
          />
          <Image 
            src='/images/linkedin.svg'
            alt="linkedin"
            width={24}
            height={24}
            className=""
          />
        </div>
      </div>
    </div>
  );
}
