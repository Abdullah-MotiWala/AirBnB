import Image from "next/image";
import React, { FunctionComponent } from "react";
import { LiveAnywhere } from "../utils/Intraces";

const LiveCard: FunctionComponent<{ data: LiveAnywhere }> = ({
  data: { img, title }
}) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-52 w-52">
        <Image src={img} alt={title} fill className="rounded-xl" />
      </div>
      <h3 className="text-xl mt-1">{title}</h3>
    </div>
  );
};
export default LiveCard;
