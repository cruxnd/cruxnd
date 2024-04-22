import Image from "next/image";

export default function Hero() {
  return (
    <div className="lg:px-24 lg:py-20 h-[calc(100vh-100px)] relative">
      <h1 className="text-5xl font-semibold leading-[1.2] absolute top-16 left-20">
        everything <span className="text-gold-1">YOU</span> need <br />
        to start and run your <br />
        business
      </h1>

      <div className="absolute bottom-16 right-20 w-[300px]">
        <h3 className="text-xl font-semibold mb-2">the <span className="text-gold-1">IDEA</span> that improves your product</h3>
        <p className="text-sm">
          Be among the first founders to <br /> experience the easiest way to <br />start run a business
        </p>
      </div>
    </div>
  );
}
