import Image from "next/image";

export default function Who() {
  return (
    <div className="px-6 md:px-12 lg:px-24 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center">
        <div>
          <h1 className="text-5xl font-semibold mb-8">Who are we?</h1>
          <div className="text-lg mr-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi a
            suscipit unde molestiae rem? Facilis eaque eum necessitatibus
            aperiam illo, dicta rerum incidunt molestias maiores consequuntur
            hic praesentium, inventore obcaecati dolore debitis numquam ipsa
            libero accusamus. Placeat error accusamus culpa velit officiis
            fugiat minima ea in assumenda molestiae nisi maiores aut, tenetur
            distinctio? Accusantium perspiciatis quam deserunt laborum error
            repellendus
          </div>
        </div>
        <Image
          src="/images/brain.png"
          alt="brain"
          width={1000}
          height={1000}
          className="w-[500px] mb-16 lg:mb-0"
        />
      </div>
      <div className="flex mt-20">
        <div className="lg:w-1/2 mr-24">
          <h1 className="text-4xl font-semibold mb-8">Vision</h1>
          <p className="text-xl">
            Building Godly fortune 500 organisations and individuals who build
            fortune 500 organisations.
          </p>
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-semibold mb-8">Mission</h1>
          <p className="text-xl">
            Building Godly fortune 500 organisations and individuals who build
            fortune 500 organisations.
          </p>
        </div>
      </div>
    </div>
  );
}
