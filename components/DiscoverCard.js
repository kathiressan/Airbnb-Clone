import Image from "next/image";

function DiscoverCard({ img, title, description }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-[30rem] w-[28rem]">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3 dark:text-white darkModeTransition">
        {title}
      </h3>
      <h4 className="text-xl mt-3 text-gray-500 dark:text-gray-400">
        {description}
      </h4>
    </div>
  );
}

export default DiscoverCard;
