import Image from "next/image";

export default function Wherever() {
  return (
    <div className="lg:px-24 lg:py-12 flex flex-col lg:flex-row">
      <div>
        <Image
          src="/images/earth.png"
          alt="bulb"
          width={1000}
          height={1000}
          className="w-[400px]"
        />
      </div>
      <h2>
        Wherever you are on the planet, <br />
        Distance doesn't really matter here. <br />
        We are a second away!
      </h2>
    </div>
  );
}
