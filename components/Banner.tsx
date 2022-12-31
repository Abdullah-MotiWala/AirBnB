import React, { FunctionComponent } from "react";
import Image from "next/image";
import getConfig from "next/config";
const {
  publicRuntimeConfig: { assetRoute }
} = getConfig();

const Banner: FunctionComponent = () => {
  return (
    <div className="relative h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
      <Image
        src={`${assetRoute}0fm`}
        alt={"Banner Image"}
        fill
        className="object-cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-5 sm:px-10 sm:py-4  py-2 rounded-full font-bold my-3 shadow-md hover:shadow-xl active:scale-90 transition duration-150">
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
