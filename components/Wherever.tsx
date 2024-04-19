import Image from "next/image";

export default function Wherever() {
  return (
    <div className="lg:px-24 lg:py-12 flex flex-col lg:flex-row items-center justify-between">
      <div>
        <Image
          src="/images/earth.png"
          alt="bulb"
          width={1000}
          height={1000}
          className="w-[500px]"
        />
      </div>
      <h2 className="text-4xl font-semibold">
        Wherever <span className="text-gold-1">YOU</span> are on the planet, <br />
        Distance doesn't really matter here. <br />
        We are a second away!
      </h2>
    </div>
  );
}
