import React, { FunctionComponent } from "react";
import { Explore, LiveAnywhere as LiveType } from "../utils/Intraces";
import ExplorNearby from "./ExplorNearby";
import LargeCard from "./LargeCard";
import LiveAnywhere from "./LiveAnywhere";

import getConfig from "next/config";
import Footer from "./Footer";
const {
  publicRuntimeConfig: { assetRoute }
} = getConfig();

const Main: FunctionComponent<{
  data: Explore[];
  liveAnyWhere: LiveType[];
}> = ({ data, liveAnyWhere }) => {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-16 ">
        <ExplorNearby data={data} />
        <LiveAnywhere data={liveAnyWhere} />
        <LargeCard
          img={`${assetRoute}4cj`}
          title="The Greatest Outdoors"
          description="wishlists curated by Airbnb."
          btnTxt="Get Inspired"
        />
      </div>
    </div>
  );
};

export default Main;
