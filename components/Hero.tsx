import Image from "next/image";

export default function Hero() {
  return (
    <div className="px-6 md:px-12 lg:px-24 lg:py-20 h-[calc(100vh-85px)] relative bg-[url('/images/herobg.jpg')]">
      <h1 className="text-3xl md:text-4xl font-semibold leading-[1.2] absolute top-12 lg:top-16 left-6 md:left-12 lg:left-24 bg-transparent">
        Everything <span className="text-gold-1 bg-transparent">YOU</span> need <br />
        to start and run your <br />
        business
      </h1>

      <div className="absolute bottom-12 lg:bottom-16 right-6 lg:right-24 w-[300px] bg-transparent">
        <h3 className="text-lg font-semibold mb-2 bg-transparent">The <span className="text-gold-1 bg-transparent">IDEA</span> that improves your product</h3>
        <p className="text-base bg-transparent">
          Be among the first founders to experience the easiest way to start run a business
        </p>
      </div>
    </div>
  );
}
