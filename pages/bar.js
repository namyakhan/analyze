import SideNavbar from "../components/SideNavbar";
import Hero from "../components/Hero";
import BarChart1 from "../components/BarChart1";
import BarChart2 from "../components/BarChart2";
import BarChart3 from "../components/BarChart3";
import TopNavbar from "../components/TopNavbar";

const bar = () => {
  return (
    <div>
      <TopNavbar />
      <div className="flex w-screen h-screen container mx-auto">
        <SideNavbar />
        <div className="w-screen ">
          <Hero />
          <div className=" flex flex-col items-center space-y-5 container mx-auto p-5 md:px-10 md:py-10">
            <BarChart3 />
            <div className="flex flex-col items-center md:flex md:flex-row md:items-center md:justify-evenly space-y-5 md:space-y-0 md:space-x-16">
              <BarChart1 />
              <BarChart2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bar;
