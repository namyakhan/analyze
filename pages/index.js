import Head from "next/head";
import SideNavbar from "../components/SideNavbar";
import TopNavbar from "../components/TopNavbar";
import Hero from "../components/Hero";
import CardsLine from "../components/CardsLine";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Analyze.</title>
        <link rel="icon" href="images/logo.svg"></link>
      </Head>
      <TopNavbar />
      <div className="flex w-screen container mx-auto ">
        <SideNavbar />
        <div className="w-screen ">
          <Hero />
          <CardsLine />
        </div>
      </div>
    </div>
  );
}
