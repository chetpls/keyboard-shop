
import {Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="flex h-screen items-center ">
      <div className="flex flex-col text-left w-full gap-5 p-5">
      <h1 className="text-7xl text-green font-bold uppercase">
        Discover the Perfect <br /> Keyboard for You
      </h1>
      <h3 className="text-3xl text-green font-semibold uppercase">
        From Mechanical to Wireless,
        <br /> Find Your Ideal Typing Experience
      </h3>
      <Link to="/shop"><button className="bg-green text-lg font-semibold px-5 py-2 text-black hover:bg-black  rounded-md"  ><h3 glitch="SHOP NOW">SHOP NOW</h3></button></Link>
      <div className="heroImg">
      </div>
    </div>
    </div>
  );
}

export default HeroSection;