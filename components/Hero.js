import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  const line = (e) => {
    e.preventDefault();

    router.push("/");
  };

  const bar = (e) => {
    e.preventDefault();

    router.push("/bar");
  };
  return (
    <div className=" px-5 pt-5 md:px-10 md:pt-10 container mx-auto ">
      {/* Heading */}
      <div className="flex flex-row items-center justify-between ">
        <div>
          <h2>Welcome back, Jonas 👋</h2>
          <h3>a bird eye view on your portfolio </h3>
        </div>
        {/* Image */}
        <div className="md:flex md:flex-row md:items-center space-x-2 cursor-pointer hidden ">
          <img
            src="images/profile.jpg"
            alt="hero"
            loading="lazy"
            className="h-10  w-11 rounded-full"
          />
          <h2 className="text-[15px]">Jonas Smith</h2>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-row justify-end space-x-5 mt-5">
        <button onClick={line}>Line</button>
        <button onClick={bar}>Bar</button>
      </div>
    </div>
  );
};

export default Hero;
