import "../../styles/HomePage.css";
import {Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="heroSection">
      <h1>
        Discover the Perfect <br /> Keyboard for You
      </h1>
      <h3>
        From Mechanical to Wireless,
        <br /> Find Your Ideal Typing Experience
      </h3>
      <Link to="/shop"><button id="shopNow">Shop Now</button></Link>
      <div className="heroImg">
      </div>
    </div>
  );
}

export default HeroSection;