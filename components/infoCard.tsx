import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { FC } from "react";

export type infoProps = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  total: number;
  price: number;
};
const InfoCard: FC<infoProps> = ({
  img,
  location,
  title,
  description,
  star,
  total,
  price
}) => {
  return (
    <div className="flex py-7 px-7 pr-4 border-b cursor-pointer hover:scale-105 hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t flex-col md:flex-row">
      <div className="relative h-24 w-40 rounded-lg md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          alt={`${location} view`}
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-grow flex-col md:pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-5 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-12 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="font-semibold text-sm lg:text-xl pb-2">{price}</p>
            <p className="text-right  font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
