import Image from "next/image";

export default function Unimaginable() {
  return (
    <div className="px-6 md:px-10 lg:px-24 py-12 flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-1/2">
        <h2 className="text-4xl font-semibold mb-8">
          that <span className="text-gold-1">UNIMAGINABLE</span> wierd idea?{" "}
          <br />
          yup!!!
        </h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat a ducimus quo, dolores veritatis similique corrupti impedit minima, iusto eaque provident mollitia nemo! Non, incidunt.
        </p>
      </div>

      <div>
        <Image
          src="/images/brain.png"
          alt="brain"
          width={1000}
          height={1000}
          className="w-[500px] mb-16 lg:mb-0"
        />
      </div>
    </div>
  );
}
