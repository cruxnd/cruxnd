import Image from "next/image";

export default function Wherever() {
  return (
    <div className="px-6 md:px-10 lg:px-24 py-6 lg:py-12 flex flex-col lg:flex-row items-center justify-between">
      <div>
        <Image
          src="/images/earth.png"
          alt="bulb"
          width={1000}
          height={1000}
          className="w-[500px] mb-16 lg:mb-0"
        />
      </div>
      <h2 className="text-2xl lg:text-4xl font-semibold">
        Wherever <span className="text-gold-1">YOU</span> are on the planet, <br className="hidden lg:block"/>
        Distance doesn't really matter here. <br className="hidden lg:block"/>
        We are a second away!
      </h2>
    </div>
  );
}
