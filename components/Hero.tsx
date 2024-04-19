import Image from "next/image";

export default function Hero() {
  return(
    <div className="lg:px-24 lg:py-12 h-[calc(100vh-100px)] flex flex-col lg:flex-row justify-between items-center">
      <h1 className="text-8xl font-semibold">
        WE thrive on  <br /> <span className="text-gold-1">YOUR</span> Ideas
      </h1>
      <div>
        <Image 
          src="/images/think.png"
          alt="bulb"
          width={1000}
          height={1000}
          className="w-[600px]"
        />
      </div>
    </div>
  )
}