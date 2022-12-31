import React, { FC } from "react";
import { LiveAnywhere } from "../utils/Intraces";
import LiveCard from "./LiveCard";

const LiveAnywhere: FC<{ data: LiveAnywhere[] }> = ({ data }) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold py-8">Live Anywhere</h2>
      <div className="flex space-x-3 overflow-x-scroll h-auto scrollbar-hide p-3 -ml-1">
        {data.map((item) => {
          return <LiveCard data={item} key={`${item.img}_${item.title}`} />;
        })}
      </div>
    </section>
  );
};

export default LiveAnywhere;
