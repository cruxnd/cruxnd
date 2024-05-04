import Image from "next/image";

export default function AboutHero() {
  return(
    <div className="px-6 md:px-12 lg:px-24 lg:py-20 h-[calc(100vh-100px)] relative flex items-center justify-center">
      

      <div className="absolute top-[150px] left-[200px] w-[250px] px-4 py-6 border border-gold-1 bg-[#f1e3c0] rounded-full text-center text-sm">
        Who are we?
      </div>

      <div className="absolute top-20 right-[300px] w-[250px] px-4 py-6 border border-blue-400 bg-[#b4fafd] rounded-full  text-center text-sm">
        What do we do?
      </div>

      <div className="absolute bottom-[250px] right-28 w-[250px] px-4 py-6 border border-green-400 bg-[#a2f38b] rounded-full  text-center text-sm">
        What do we stand for?
      </div>

      <div className="absolute bottom-[180px] left-28 w-[250px] px-4 py-6 border border-purple-400 bg-[#cb91ee] rounded-full  text-center text-sm">
        
      </div>
    </div>
  )
}