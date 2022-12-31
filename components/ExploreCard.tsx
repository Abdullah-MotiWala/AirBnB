import Image from "next/image";
import React, { FunctionComponent } from "react";
import { Explore } from "../utils/Intraces";

const ExploreCard: FunctionComponent<{ data: Explore }> = ({
  data: { img, distance, location }
}) => {
  return (
    <div className="flex items-center space-x-4 rounded-xl cursor-pointer mt-5 hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="h-16 w-16 relative">
        <Image
          className="rounded-lg"
          src={img}
          fill
          alt={`${location} images`}
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
      {/* {location} */}
    </div>
  );
};
export default ExploreCard;
