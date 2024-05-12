import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="px-6 md:px-12 lg:px-24 lg:py-20 h-[calc(100vh-85px)] relative flex items-center justify-center bg-[url('/images/bg.svg')] bg-no-repeat bg-cover">
      <div className="absolute top-12 lg:top-[150px] left-6 lg:left-[200px] px-12 py-6 border-2 md:border-4 lg:border-2 hover:font-semibold cursor-pointer rounded-full text-center text-sm md:text-3xl lg:text-xl">
        Who are we?
      </div>

      <div className="absolute top-[180px] md:top-1/4 lg:top-20 right-12 lg:right-[300px] px-12 py-6 border-2 md:border-4 lg:border-2 hover:font-semibold cursor-pointer rounded-full text-center text-sm md:text-3xl lg:text-xl">
        What do we do?
      </div>

      <div className="absolute bottom-16 lg:bottom-[250px] right-12  lg:right-28 px-12 py-6 border-2 md:border-4 lg:border-2 hover:font-semibold cursor-pointer rounded-full  text-center text-sm md:text-3xl lg:text-xl">
        What do we stand for?
      </div>

      <div className="absolute bottom-[180px] md:bottom-[320px] lg:bottom-[180px] left-12 lg:left-28  px-12 py-6 border-2 md:border-4 lg:border-2 hover:font-semibold cursor-pointer rounded-full text-center text-sm md:text-3xl lg:text-xl">
        Who do we work with?
      </div>
    </div>
  );
}
