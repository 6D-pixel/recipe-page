import Image from "next/image";
import Nutrition from "../components/Nutrition";
import SimpleOmelete from "../components/SimpleOmelete";
import Ingredients from "../components/Ingredients";
import Instructions from "../components/Instructions";
export default function Home() {
  return (
    <section className="bg-white lg:mx-[22rem] lg:my-[7.69rem] lg:rounded-2xl font-outfit">
      <div >
        <div className="lg:p-[2.5rem]">
          <div className="flex relative h-[300px] w-full">
          <Image
            src="/image-omelette.jpeg"
            fill
            alt="image omelette"
            className="lg:rounded-xl"
          />
        </div>
        </div>
        
        <div className="px-[2rem] ">
          {/* simple omelette recipe */}
          <SimpleOmelete />
          {/* ingredients */}
          <Ingredients />
          <hr className="my-[1.5rem]" />
          {/* instructions */}
          <Instructions />
          <hr className="my-[1.5rem]" />
          {/* Nutrition */}
          <Nutrition />
        </div>
      </div>
    </section>
  );
}
