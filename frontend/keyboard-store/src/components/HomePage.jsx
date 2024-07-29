import { FaShippingFast, FaUndoAlt, FaHeadset, FaLock } from "react-icons/fa";
import "../styles/HomePage.css";
import HeroSection from "./Home/HeroSection";
import FeaturedProducts from "./Home/FeaturedProducts";
import Newsletter from "./Home/Newsletter";
import Footer from "./Footer";
import Benefits from "./Home/Benefits";



function HomePage() {
  return (
    <div className="relative">
      <HeroSection></HeroSection>
      <FeaturedProducts></FeaturedProducts>
      <Benefits></Benefits>
      <div className="relative z-10">
        <Newsletter></Newsletter>   
      </div>
    </div>
  );
}

export default HomePage;
