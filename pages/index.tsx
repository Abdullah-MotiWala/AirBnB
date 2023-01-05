import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Main from "../components/Main";
import getConfig from "next/config";
import { Explore, LiveAnywhere } from "../utils/Intraces";
import Footer from "../components/Footer";
const {
  publicRuntimeConfig: { assetRoute }
} = getConfig();

export default function Home({
  exploreData,
  liveData
}: {
  exploreData: Explore[];
  liveData: LiveAnywhere[];
}) {
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="air BnB clone " />
      </Head>
      <Header placeholder="Enter Your Search" />
      <Banner />
      <Main data={exploreData} liveAnyWhere={liveData} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const exploreRes: Response = await fetch(`https://www.jsonkeeper.com/b/4G1G`);
  const exploreData = await exploreRes.json();

  const liveRes: Response = await fetch("https://www.jsonkeeper.com/b/VHHT");
  const liveData = await liveRes.json();

  return {
    props: {
      exploreData,
      liveData
    }
  };
}
