import Image from "next/image";
import Flip from "react-reveal/Flip";

function SmallCard({ img, location, distance }) {
  return (
    <Flip top>
      <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out group">
        {/* left */}
        <div className="relative h-16 w-16">
          <Image src={img} layout="fill" className="rounded-lg" />
        </div>

        {/* Right */}
        <div>
          <h2 className="dark:text-white darkModeTransition dark:group-hover:text-black">
            {location}
          </h2>
          <h3 className="text-gray-500 dark:text-gray-400 darkModeTransition dark:group-hover:text-gray-500">
            {distance}
          </h3>
        </div>
      </div>
    </Flip>
  );
}

export default SmallCard;
