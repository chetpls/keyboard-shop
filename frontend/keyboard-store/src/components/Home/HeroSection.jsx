import "../../styles/HomePage.css";
import {Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col text-left w-full px-10 mt-40">
      <h1 className="text-7xl text-black font-bold uppercase">
        Discover the Perfect <br /> Keyboard for You
      </h1>
      <h3 className="text-3xl text-black font-semibold uppercase">
        From Mechanical to Wireless,
        <br /> Find Your Ideal Typing Experience
      </h3>
      <Link to="/shop"><button className="bg-orange-300 text-lg font-semibold px-5 py-2  rounded-md" >Shop Now</button></Link>
      <div className="heroImg">
      </div>
    </div>
    </div>
  );
}

export default HeroSection;