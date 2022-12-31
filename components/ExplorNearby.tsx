import React, { FC } from "react";
import { Explore } from "../utils/Intraces";
import ExploreCard from "./ExploreCard";

const ExplorNearby: FC<{ data: Explore[] }> = ({ data }) => {
  return (
    <section className="pt-6">
      <h2 className="text-2xl font-semibold pb-5">Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => {
          return (
            <ExploreCard data={item} key={`${item.img}_${item.location}`} />
          );
        })}
      </div>
    </section>
  );
};

export default ExplorNearby;
