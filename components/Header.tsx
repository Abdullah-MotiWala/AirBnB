import Image from "next/image";
import React, { FunctionComponent } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon as SearchIcon,
  UserCircleIcon
} from "@heroicons/react/20/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import getConfig from "next/config";
const {
  publicRuntimeConfig: { assetRoute }
} = getConfig();

const Header: FunctionComponent = () => {
  return (
    <header className="sticky top-0 z-50 bg-white grid grid-cols-3 shadow-md py-5 px-5 md:px-10">
      <div className="relative flex items-center my-auto h-10 w-20 md:w-auto cursor-pointer flex-wrap">
        <Image
          src={`${assetRoute}qd3`}
          fill
          className="object-contain object-left"
          alt="AirBNB logo image"
        />
      </div>
      {/* Search bar */}

      <div className="flex justify-center items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type={"text"}
          placeholder="Start Your Search"
          className="bg-transparent pl-5 outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className=" hidden md:inline-flex md:mx-2 h-6  text-white bg-red-400 rounded-full p-1 cursor-pointer " />
      </div>

      <div className="flex space-x-4 items-center justify-end">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6" />

        <div className="flex  items-center rounded-full border-2 space-x-2 p-2">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
