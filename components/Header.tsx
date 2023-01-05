import Image from "next/image";
import React, { FunctionComponent, useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon as SearchIcon,
  UserCircleIcon,
  UserIcon
} from "@heroicons/react/20/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { UsersIcon } from "@heroicons/react/24/solid";
import getConfig from "next/config";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const {
  publicRuntimeConfig: { assetRoute }
} = getConfig();

const Header: FunctionComponent<{ placeholder: string }> = ({
  placeholder = "Start Your Search"
}) => {
  const [search, setSearch] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [numOfGuests, setNumOfGuests] = useState<number>(1);
  const router = useRouter();

  const ranges: {
    startDate: Date | string;
    endDate: Date | string;
    key: string;
  } = {
    startDate,
    endDate,
    key: "selection"
  };

  const changeHandler = (range: {
    selection: { startDate: Date; endDate: Date };
  }): void => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };

  const searchHandler = (): void => {
    router.push({
      pathname: "/search",
      query: {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        location: search,
        members: numOfGuests
      }
    });
  };

  const resetInput = (): void => {
    setSearch("");
  };

  return (
    <header className="sticky top-0 z-50 bg-white grid grid-cols-3 shadow-md py-5 px-5 md:px-10">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center my-auto h-10 w-20 md:w-auto cursor-pointer flex-wrap"
      >
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
          placeholder={placeholder}
          className="bg-transparent pl-5 outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon className=" hidden md:inline-flex md:mx-2 h-6  text-white bg-red-400 rounded-full p-1 cursor-pointer " />
      </div>

      <div className="flex space-x-4 items-center justify-end">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6" />

        <div className="flex items-center rounded-full border-2 space-x-2 p-2">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {search && (
        <div className="mx-auto flex flex-col col-span-3 overflow-x-scroll">
          {" "}
          <DateRangePicker
            ranges={[ranges]}
            onChange={(range: any) => {
              changeHandler(range);
            }}
            minDate={new Date()}
            rangeColors={["#fd696d"]}
            className=""
            scroll={{ enabled: true }}
            fixHeight={false}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-1 text-lg m-1 outline-none text-red-500 font-bold"
              min={1}
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(Number(e.target.value))}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-red-500" onClick={searchHandler}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
