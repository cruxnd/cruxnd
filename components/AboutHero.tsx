import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="px-6 md:px-12 lg:px-24 lg:py-20 h-[calc(100vh-100px)] relative flex items-center justify-center bg-[url('/images/herobg.jpg')]">
      <div className="absolute top-[150px] left-[200px] px-12 py-6 border-2 rounded-full text-center text-xl">
        Who are we?
      </div>

      <div className="absolute top-20 right-[300px] px-12 py-6 border-2  rounded-full  text-center text-xl">
        What do we do?
      </div>

      <div className="absolute bottom-[250px] right-28 px-12 py-6 border-2  rounded-full  text-center text-xl">
        What do we stand for?
      </div>

      <div className="absolute bottom-[180px] left-28  px-12 py-6 border-2  rounded-full  text-center text-xl">
        Who do we work with?
      </div>
    </div>
  );
}
