import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import Fade from "react-reveal/Fade";

function InfoCard({
  img,
  location,
  title,
  description,
  roomType,
  star,
  price,
  total,
  flexible,
}) {
  return (
    <div className="animate-fadeEffect flex py-7 px-2 pr-4 border cursor-pointer hover:opacity-80 shadow-lg transition duration-200 ease-out my-3 rounded-xl hover:scale-[1.01] dark:bg-[#515151] dark:border-[#515151] darkModeTransition flex-grow">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between dark:text-white darkModeTransition">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl dark:text-white darkModeTransition">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow dark:text-gray-300 darkModeTransition">
          {description}
        </p>

        <div className="flex">
          <p className="text-red-400">{`${roomType}`}</p>
          {flexible && (
            <p className="text-red-400">&nbsp; &bull; Flexible Cancellation</p>
          )}
        </div>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center dark:text-white darkModeTransition">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2 dark:text-white darkModeTransition">
              {price}
            </p>
            <p className="text-right font-extralight dark:text-gray-300 darkModeTransition">
              {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const InfoCardMemo = React.memo(InfoCard);
