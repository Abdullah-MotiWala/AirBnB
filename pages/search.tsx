import { format } from "date-fns";
import { NextPage } from "next";
import getConfig from "next/config";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchMain from "../components/SearchMain";
const {
  publicRuntimeConfig: { assetRoute }
} = getConfig();

const Search: NextPage<{ searchResults: any }> = ({ searchResults }) => {
  const {
    query: { startDate, endDate, location, members }
  } = useRouter();

  const formattedRange = (startDate: string, endDate: string): string => {
    return `${format(new Date(startDate), "dd MMMM yy")} - ${format(
      new Date(endDate),
      "dd MMMM yy"
    )}`;
  };
  


  return (
    <div>
      <Header
        placeholder={
          location
            ? `${location} | ${formattedRange(
                startDate,
                endDate
              )} | ${members} guests`
            : "Enter Your Search"
        }
      />
      <SearchMain searchResults={searchResults}/>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context: any) {
  const searchResults = await fetch(`https://www.jsonkeeper.com/b/5NPS`).then(
    (res) => {
      return res.json();
    }
  );

  return {
    props: {
      searchResults
    }
  };
}
