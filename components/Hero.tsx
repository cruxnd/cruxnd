import Image from "next/image";

export default function Hero() {
  return (
    <div className="px-6 md:px-12 lg:px-24 lg:py-20 h-[calc(100vh-100px)] relative">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.2] absolute top-6 lg:top-16 left-6 md:left-12 lg:left-24">
        everything <span className="text-gold-1">YOU</span> need <br />
        to start and run your <br />
        business
      </h1>

      <div className="absolute bottom-6 md:bottom-12 lg:bottom-16 right-6 lg:right-24 w-[300px]">
        <h3 className="text-xl font-semibold mb-2">the <span className="text-gold-1">IDEA</span> that improves your product</h3>
        <p className="text-sm">
          Be among the first founders to <br /> experience the easiest way to <br />start run a business
        </p>
      </div>
    </div>
  );
}
