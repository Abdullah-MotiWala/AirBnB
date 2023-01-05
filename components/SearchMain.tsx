import { format } from "date-fns";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import InfoCard, { infoProps } from "./infoCard";

const FilterButton: FunctionComponent<{ filter: string }> = ({ filter }) => {
  return <p className="popButton">{filter}</p>;
};

const SearchMain: FunctionComponent<{ searchResults: infoProps[] }> = ({
  searchResults
}) => {
  let fitlers = [
    "Cancellation",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More Filters"
  ];

  const {
    query: { startDate, endDate, location, members }
  } = useRouter();

  return (
    <main className="flex">
      <section className="flex-grow pt-14 px-6">
        <p className="text-xs">{`300+ Stays for ${members} number of guests`}</p>
        <h1 className="text-3xl font-semibold mt-2 mb-6">{`Stay in ${location}`}</h1>

        <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
          {fitlers.map((filter) => {
            return <FilterButton filter={filter} />;
          })}
        </div>

        <div className="flex-column">
          {searchResults.map((data) => {
            const { img, location, title, description, star, total, price } =
              data;
            return <InfoCard {...data} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default SearchMain;
